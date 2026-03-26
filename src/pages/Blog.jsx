import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    { title: '10 Common French Idioms', category: 'Language Tips', date: 'Mar 20, 2025' },
    { title: 'The Best Way to Learn French Faster', category: 'Study Guide', date: 'Mar 15, 2025' },
    { title: 'Exploring the Cafes of Paris', category: 'Culture', date: 'Mar 10, 2025' },
    { title: 'French for Travel: Essential Phrases', category: 'Travel', date: 'Mar 05, 2025' },
    { title: 'Understanding French Verb Conjugation', category: 'Grammar', date: 'Feb 28, 2025' },
    { title: 'Why French is the Language of Love?', category: 'Culture', date: 'Feb 20, 2025' }
  ];

  return (
    <div className="page-container blog-page">
      <section className="page-hero">
        <div className="container" style={{maxWidth: '1200px'}}>
          <div className="grid grid-2 align-center">
            <div className="featured-blog">
              <span className="course-badge">Featured Post</span>
              <h1 style={{fontSize: '3.5rem', marginTop: '1rem'}}>The Art of French Conversation</h1>
              <p className="lead" style={{textAlign: 'left', margin: '1rem 0 2rem'}}>Master the subtle nuances of social interaction in France, from greetings to the legendary 'debat'.</p>
              <button className="btn btn-red">Read Full Story</button>
            </div>
            <div className="featured-image" style={{background: '#222', height: '400px', borderRadius: '24px'}}></div>
          </div>
        </div>
      </section>

      {/* NEW: White Section - Topic Explorer */}
      <section className="section-white" style={{padding: '6rem 0'}}>
        <div className="container">
           <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
              <span style={{color: 'var(--primary-red)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem'}}>Explorer</span>
              <h2 style={{marginTop: '0.5rem'}}>Discover by Topic</h2>
           </div>
           
           <div className="topic-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem'}}>
              <div className="topic-card premium-card active" style={{padding: '2rem 1rem', textAlign: 'center', border: '1px solid var(--primary-red)', background: 'rgba(229, 90, 90, 0.02)'}}>
                 <h4 style={{fontSize: '1rem', color: 'var(--primary-red)'}}>All Posts</h4>
              </div>
              <div className="topic-card premium-card" style={{padding: '2rem 1rem', textAlign: 'center'}}>
                 <h4 style={{fontSize: '1rem', color: '#1a1a1a'}}>Grammar</h4>
              </div>
              <div className="topic-card premium-card" style={{padding: '2rem 1rem', textAlign: 'center'}}>
                 <h4 style={{fontSize: '1rem', color: '#1a1a1a'}}>Culture</h4>
              </div>
              <div className="topic-card premium-card" style={{padding: '2rem 1rem', textAlign: 'center'}}>
                 <h4 style={{fontSize: '1rem', color: '#1a1a1a'}}>Travel</h4>
              </div>
              <div className="topic-card premium-card" style={{padding: '2rem 1rem', textAlign: 'center'}}>
                 <h4 style={{fontSize: '1rem', color: '#1a1a1a'}}>Career</h4>
              </div>
           </div>
           
           <div className="search-wrap" style={{marginTop: '4rem', display: 'flex', justifyContent: 'center'}}>
             <div className="search-bar" style={{position: 'relative', width: '500px'}}>
                <input type="text" placeholder="Looking for something specific? Search articles..." style={{padding: '1.2rem 2rem', borderRadius: '50px', border: '1px solid #eee', width: '100%', fontSize: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}} />
             </div>
           </div>
        </div>
      </section>

      <section className="blog-posts" style={{padding: '8rem 0'}}>
        <div className="container">
          <div className="grid grid-3">
            {posts.map((post, i) => (
              <article key={i} className="blog-card premium-card">
                <div className="blog-image-placeholder" style={{height: '200px', background: '#222', borderRadius: '12px', marginBottom: '1.5rem'}}></div>
                <div className="blog-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3 style={{marginBottom: '1rem', lineHeight: '1.4'}}>{post.title}</h3>
                <a href="#" className="read-more">Read Article →</a>
              </article>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '4rem'}}>
             <button className="btn btn-red" style={{background: 'transparent', border: '1px solid var(--primary-red)'}}>Load More Articles</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
