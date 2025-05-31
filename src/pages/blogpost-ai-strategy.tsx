import React from 'react';

export function BlogPostAIStrategy() {
  return (
    <div className="min-h-screen bg-black">
      <div dangerouslySetInnerHTML={{ __html: `
        <div style="color: #ffffff; font-family: Arial, sans-serif; line-height: 1.6;">
          <style>
            p, .wp-block-paragraph, ul.wp-block-list, li {
              color: #ffffff !important;
              font-size: 20px !important;
            }
            a {
              color: #00c2ff !important;
            }
          </style>
          <!-- Content from blogpost.html -->
          ${require('./blogpost.html')}
        </div>
      `}} />
    </div>
  );
} 