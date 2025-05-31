import React from 'react';
import { blogPostContent } from './blogpost-content';

export function BlogPostAIStrategy() {
  return (
    <div className="min-h-screen bg-black">
      <div dangerouslySetInnerHTML={{ __html: blogPostContent }} />
    </div>
  );
} 