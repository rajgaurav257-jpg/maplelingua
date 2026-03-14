import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    id: 1,
    category: 'Language Tips',
    readTime: '5 min read',
    date: 'March 8, 2026',
    title: 'Why French Pronunciation Feels So Hard — and How to Finally Crack It',
    excerpt: 'The French "r", the silent letters, the liaisons — it all feels impossible at first. But here\'s the secret: French pronunciation follows extremely logical, predictable rules once you understand the system.',
    tag: '🎙️ Pronunciation',
    gradient: 'linear-gradient(135deg, #0055A4 0%, #0D1B2A 100%)',
    author: 'Sophie Beaumont',
    authorInitials: 'SB',
  },
  {
    id: 2,
    category: 'French Culture',
    readTime: '7 min read',
    date: 'February 28, 2026',
    title: '10 Things You Must Know About French Café Culture (That No Textbook Teaches)',
    excerpt: 'Ordering a "café" at a Parisian brasserie is an art form. From the correct way to ask for l\'addition to the unspoken rules of sitting at a terrasse — this is French culture that will make you belong.',
    tag: '☕ Culture',
    gradient: 'linear-gradient(135deg, #C9A84C 0%, #A8872A 100%)',
    author: 'Claire Dubois',
    authorInitials: 'CD',
  },
  {
    id: 3,
    category: 'Learning Science',
    readTime: '6 min read',
    date: 'February 15, 2026',
    title: 'The Science of Language Acquisition: How Your Brain Actually Learns French',
    excerpt: 'Forget rote memorization. Modern neuroscience shows us that the brain learns languages through patterns, stories, and emotional associations — not grammar drills. Here\'s what the research says.',
    tag: '🧠 Science',
    gradient: 'linear-gradient(135deg, #9C27B0 0%, #4a0080 100%)',
    author: 'Riya Kapoor',
    authorInitials: 'RK',
  },
  {
    id: 4,
    category: 'Success Stories',
    readTime: '4 min read',
    date: 'January 30, 2026',
    title: 'From Zero to DELF B2: Priya\'s 8-Month MapleLingua Journey',
    excerpt: 'Priya Sharma had never studied French when she joined MapleLingua. Eight months later, she passed the DELF B2 exam on her first attempt. This is her story, in her own words.',
    tag: '⭐ Story',
    gradient: 'linear-gradient(135deg, #EF4135 0%, #8B0000 100%)',
    author: 'Arjun Mehta',
    authorInitials: 'AM',
  },
  {
    id: 5,
    category: 'Vocabulary',
    readTime: '8 min read',
    date: 'January 18, 2026',
    title: '50 Essential French Phrases Every Learner Should Know by Week 4',
    excerpt: 'These are the 50 phrases that our data shows the highest-performing learners master in their first month. From polite requests to emergency phrases — these will serve you everywhere in the Francophone world.',
    tag: '📚 Vocabulary',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #0a3d0a 100%)',
    author: 'Sophie Beaumont',
    authorInitials: 'SB',
  },
  {
    id: 6,
    category: 'Grammar',
    readTime: '9 min read',
    date: 'January 5, 2026',
    title: 'The Three French Verb Tenses That Will Handle 90% of Your Conversations',
    excerpt: 'French has 17 tenses — but here\'s the truth: three of them handle virtually every real-world conversation. Master le présent, le passé composé, and le futur proche, and you\'ll be unstoppable.',
    tag: '✏️ Grammar',
    gradient: 'linear-gradient(135deg, #1565C0 0%, #062b6e 100%)',
    author: 'Claire Dubois',
    authorInitials: 'CD',
  },
];

const categories = ['All', 'Language Tips', 'French Culture', 'Learning Science', 'Success Stories', 'Vocabulary', 'Grammar'];

export default function Blog() {
  return (
    <main className="blog-page">
      {/* PAGE HERO */}
      <section className="page-hero blog-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge badge-gold mb-md" style={{ display: 'inline-flex' }}>Our Blog</div>
          <h1 className="display-2 text-white mb-md">
            Insights, Stories &amp; <br />
            <span className="gradient-text">French Wisdom</span>
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto' }}>
            Deep-dive into French language learning, culture, science, and the stories of learners who transformed their lives through the power of French.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="blog-filter-bar" id="blog-filters">
        <div className="container">
          <div className="filter-scroll">
            {categories.map((cat, i) => (
              <button key={cat} className={`filter-btn ${i === 0 ? 'filter-btn--active' : ''}`} id={`filter-${cat.toLowerCase().replace(/\s+/g,'-')}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section" id="blog-posts">
        <div className="container">
          {/* Featured Post */}
          <div className="blog-featured" id="blog-featured">
            <div className="featured-image" style={{ background: posts[0].gradient }}>
              <span className="featured-emoji">🎙️</span>
            </div>
            <div className="featured-content">
              <div className="flex gap-sm mb-sm" style={{ flexWrap: 'wrap' }}>
                <span className="badge badge-gold">{posts[0].category}</span>
                <span className="badge badge-navy" style={{background:'rgba(13,27,42,0.06)'}}>{posts[0].readTime}</span>
              </div>
              <h2 className="heading-1 mb-md">{posts[0].title}</h2>
              <p className="body-lg text-secondary mb-lg">{posts[0].excerpt}</p>
              <div className="post-meta mb-lg">
                <div className="post-author">
                  <div className="mini-avatar">{posts[0].authorInitials}</div>
                  <span>{posts[0].author}</span>
                </div>
                <span className="text-muted body-sm">{posts[0].date}</span>
              </div>
              <Link to="/blog" className="btn btn-primary" id="featured-read-more">Read Full Article →</Link>
            </div>
          </div>

          {/* Post Grid */}
          <div className="blog-grid mt-xl">
            {posts.slice(1).map((post, i) => (
              <article className="blog-card card" key={post.id} id={`blog-post-${post.id}`}>
                <div className="blog-card__img" style={{ background: post.gradient }}>
                  <span className="blog-card__tag">{post.tag}</span>
                </div>
                <div className="blog-card__body">
                  <div className="flex gap-sm mb-sm" style={{ flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    <span className="badge badge-gold">{post.category}</span>
                    <span className="body-sm text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="heading-3 blog-card__title">{post.title}</h3>
                  <p className="body-sm text-secondary mt-sm blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__footer">
                    <div className="post-author">
                      <div className="mini-avatar">{post.authorInitials}</div>
                      <span className="body-sm">{post.author}</span>
                    </div>
                    <span className="body-sm text-muted">{post.date}</span>
                  </div>
                  <Link to="/blog" className="blog-card__link" id={`blog-read-${post.id}`}>Read More →</Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-xl">
            <button className="btn btn-outline btn-lg" id="load-more-btn">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter">
        <div className="container text-center">
          <p className="section-label" style={{ color: 'var(--gold-400)', display: 'flex', justifyContent: 'center' }}>Stay Informed</p>
          <h2 className="heading-1 text-white mb-sm">Get French Tips in Your Inbox</h2>
          <p className="lead mb-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto var(--space-lg)' }}>
            Join 8,000+ subscribers who receive our weekly French language tips, cultural insights, and learning strategies.
          </p>
          <form className="newsletter-form" id="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="newsletter-input"
              id="newsletter-email"
              required
            />
            <button type="submit" className="btn btn-primary" id="newsletter-submit">Subscribe Free</button>
          </form>
          <p className="body-sm mt-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
}
