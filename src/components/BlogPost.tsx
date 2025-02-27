import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  // This is a simple way to handle the blog content
  // In a production app, you'd likely fetch this from an API or CMS
  const blogPosts = {
    'how-to-make-money-on-onlyfans': {
      title: "How to Make Money on OnlyFans: 9 Strategies from Real Creators",
      content: `
        <article class="blog-post">
            <header class="post-header">
                <h1>How to Make Money on OnlyFans: 9 Strategies from Real Creators</h1>
                <div class="post-meta">
                    <time datetime="2024-03-21">March 21, 2024</time>
                </div>
            </header>

            <div class="post-content">
                <p>In recent years, OnlyFans has emerged as a significant platform for content creators to monetize their work and build dedicated audiences...</p>
                
                <!-- Promotional Banner -->
                <div class="promo-banner">
                    <a href="https://www.anrdoezrs.net/click-101373715-17031174" target="_top">
                        <img src="https://www.awltovhc.com/image-101373715-17031174" width="250" height="250" alt="Cheap Flights to United Kingdom  *Promo Code :  UK25" border="0"/>
                    </a>
                </div>

                <!-- Rest of your blog content -->
            </div>
        </article>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Blog post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPost; 