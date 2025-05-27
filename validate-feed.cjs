const fetch = require('node-fetch');
const FeedValidator = require('feed-validator');
const { promisify } = require('util');

const CORS_PROXY = 'https://corsproxy.io/?';
const RSS_FEED_URL = 'https://yourwebsite.com/feed/';
const TIMEOUT = 10000; // 10 seconds timeout

// Convert callback-based validation to Promise-based
const validateFeedPromise = promisify((feedContent, callback) => {
  const validator = new FeedValidator();
  validator.validate(feedContent, callback);
});

// Helper function to format validation results
function formatValidationResults(results) {
  let output = '\nValidation Results:\n-------------------\n';
  
  if (!results.errors.length && !results.warnings.length) {
    output += '✅ Feed is valid! No errors or warnings found.\n';
    return output;
  }

  if (results.errors.length) {
    output += '\n❌ Errors:\n';
    results.errors.forEach((err, index) => {
      output += `\n${index + 1}. ${err.message}\n`;
      if (err.element) output += `   Element: ${err.element}\n`;
      if (err.line) output += `   Line: ${err.line}\n`;
    });
  }

  if (results.warnings.length) {
    output += '\n⚠️  Warnings:\n';
    results.warnings.forEach((warning, index) => {
      output += `\n${index + 1}. ${warning.message}\n`;
      if (warning.element) output += `   Element: ${warning.element}\n`;
      if (warning.line) output += `   Line: ${warning.line}\n`;
    });
  }

  return output;
}

async function validateFeed() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    console.log('Feed Validation Started');
    console.log('----------------------');
    console.log('Feed URL:', RSS_FEED_URL);
    console.log('Using CORS proxy:', CORS_PROXY);
    console.log('\nFetching feed content...');

    const response = await fetch(CORS_PROXY + encodeURIComponent(RSS_FEED_URL), {
      signal: controller.signal,
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        'User-Agent': 'RSS-Feed-Validator/1.0'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const feedContent = await response.text();
    
    // Basic content validation
    if (!feedContent.trim()) {
      throw new Error('Empty feed content received');
    }

    if (!feedContent.includes('<?xml') && !feedContent.includes('<rss')) {
      throw new Error('Invalid feed format: Content does not appear to be XML/RSS');
    }

    console.log('Feed content fetched successfully');
    console.log('Content length:', feedContent.length, 'bytes');
    console.log('\nValidating feed structure...');

    const results = await validateFeedPromise(feedContent);
    console.log(formatValidationResults(results));

    // Exit with error if there are validation errors
    if (results.errors.length > 0) {
      process.exit(1);
    }

  } catch (error) {
    console.error('\n❌ Validation Failed');
    console.error('------------------');
    
    if (error.name === 'AbortError') {
      console.error('Error: Request timed out after', TIMEOUT/1000, 'seconds');
    } else if (error.code === 'ENOTFOUND') {
      console.error('Error: Could not resolve feed URL');
    } else if (error.type === 'system') {
      console.error('System Error:', error.message);
    } else {
      console.error('Error:', error.message);
    }

    console.error('\nDebug Information:');
    console.error('- Feed URL:', RSS_FEED_URL);
    console.error('- Proxy URL:', CORS_PROXY);
    console.error('- Error Name:', error.name);
    console.error('- Error Code:', error.code);
    
    process.exit(1);
  }
}

// Run validation
validateFeed();