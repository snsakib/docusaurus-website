/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import type { Props } from "@theme/BlogPostPage";
import BlogSidebar from "@theme/BlogSidebar";
import TOC from "@theme/TOC";

function BlogPostPage(props: Props): JSX.Element {
  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { title, description, nextItem, prevItem, editUrl } = metadata;
  const { hide_table_of_contents: hideTableOfContents } = frontMatter;

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-wrapper"
    >
      {BlogPostContents && (
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--10">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage
              >
                <BlogPostContents />
              </BlogPostItem>
            </main>
            {!hideTableOfContents && (
              <div className="col col--2">
                <TOC headings={BlogPostContents.rightToc} />
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
