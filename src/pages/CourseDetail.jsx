import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

const courseData = {
  a1: {
    title: 'A1 - Beginner French',
    badge: 'Foundation Level',
    summary: 'The starting point for your French journey. No prior knowledge required.',
    description: 'Our A1 program is meticulously designed to take you from absolute zero to basic communicative competence. You will master the fundamentals of pronunciation, essential grammar, and high-frequency vocabulary needed for daily survival in a French-speaking environment.',
    mastery: [
      { title: 'Phonetic Precision', desc: 'Master the French alphabet, nasal vowels, and liaison rules for a native-like accent.' },
      { title: 'Survival Socializing', desc: 'Introduce yourself, ask for directions, and order in restaurants with confidence.' },
      { title: 'Grammar Core', desc: 'Understand present tense conjugation, gender agreement, and basic sentence structure.' }
    ],
    outcomes: [
      'Introduce yourself and others with confidence.',
      'Ask and answer simple questions about personal details.',
      'Understand and use familiar everyday expressions.',
      'Interact in a simple way provided the other person talks slowly.',
      'Master the French alphabet and phonetic system.',
      'Shop for groceries and handle basic monetary transactions.',
      'Describe your home and immediate surroundings.',
      'Talk about your likes, dislikes, and basic hobbies.'
    ],
    curriculum: [
      { week: '01', title: 'The Phonetic Entry', topics: ['Alphabet & Nasals', 'Liaison Rules', 'Silent Letters', 'Accent Marks'] },
      { week: '02', title: 'Greetings & Self', topics: ['Formal vs Informal', 'Subject Pronouns', 'The Verb Être', 'Nationalities'] },
      { week: '03', title: 'Family & Identity', topics: ['Possessive Adjectives', 'Describing People', 'Numbers 1-100', 'The Verb Avoir'] },
      { week: '04', title: 'The Living Space', topics: ['Rooms & Furniture', 'Prepositions of Place', 'Plural Nouns', 'Colors'] },
      { week: '05', title: 'Daily Actions', topics: ['Regular -ER Verbs', 'Telling Time', 'Days of the Week', 'Daily Routine'] },
      { week: '06', title: 'Gastronomy 101', topics: ['Food Vocabulary', 'Ordering in a Cafe', 'Partitive Articles', 'Preferences'] },
      { week: '07', title: 'City & Travel', topics: ['Directions', 'Places in Town', 'The Verb Aller', 'Transportation'] },
      { week: '08', title: 'Hobbies & Sports', topics: ['The Verb Faire', 'Weather Expressions', 'Leisure Activities', 'Simple Questions'] },
      { week: '09', title: 'Near Future', topics: ['Futur Proche', 'Making Appointments', 'Clothing & Fashion', 'Body Parts'] },
      { week: '10', title: 'Final Review', topics: ['Oral Simulation', 'Grammar Recap', 'Cultural Project', 'A1 Certificate Prep'] }
    ],
    materials: ['A1 Digital Workbook', 'MP3 Audio Library', 'Interactive Flashcards', 'French Cinema for Beginners Guide'],
    faq: [
      { q: 'Is A1 enough for a holiday in France?', a: 'Yes! A1 gives you the "survival" skills to order food, book hotels, and navigate transport easily.' },
      { q: 'How long are the sessions?', a: 'Each session is 90 minutes, twice a week, focusing 50% on speaking.' }
    ],
    testimonial: { name: 'Sarah J.', text: 'I started with zero French. By week 6, I was ordering my coffee in Paris without switching to English!' },
    duration: '10 Weeks',
    intensity: '5 Hours / Week',
    price: '$199'
  },
  a2: {
    title: 'A2 - Elementary French',
    badge: 'Building Blocks',
    summary: 'Expand your foundation. Transition from basic phrases to simple conversations.',
    description: 'The A2 level focuses on developing your ability to handle tasks in familiar and routine matters. You will learn to describe your background, immediate environment, and matters in areas of immediate need with more complex sentence structures.',
    mastery: [
      { title: 'Narrative Flow', desc: 'Learn to tell stories in the past using Imparfait and Passé Composé correctly.' },
      { title: 'Situational Flency', desc: 'Handle doctors appointments, job basic talk, and shopping complaints.' },
      { title: 'Sentence Complexity', desc: 'Use relative pronouns and object pronouns to sound more natural.' }
    ],
    outcomes: [
      'Understand sentences and frequently used expressions.',
      'Communicate in simple and routine tasks.',
      'Describe in simple terms aspects of your background.',
      'Write simple notes and messages.',
      'Handle basic social interactions like shopping or traveling.',
      'Give simple descriptions of people and living conditions.',
      'Express your opinion on familiar topics.',
      'Understand the main point in short, clear, simple messages.'
    ],
    curriculum: [
      { week: '01', title: 'Past Narratives 1', topics: ['Passé Composé recap', 'Irregular Past Participles', 'Auxiliary Verbs', 'Life Milestones'] },
      { week: '02', title: 'Past Narratives 2', topics: ['L’Imparfait', 'Describing Childhood', 'Setting the Scene', 'Storytelling'] },
      { week: '03', title: 'Health & Body', topics: ['At the Doctors', 'Giving Advice', 'The Imperative', 'Reflexive Verbs'] },
      { week: '04', title: 'Social Life', topics: ['Invitations', 'Accepting/Refusing', 'Future Simple', 'Weekend Plans'] },
      { week: '05', title: 'The Workplace', topics: ['Office Vocabulary', 'Job Tasks', 'The Conditional (Politeness)', 'Simple CVs'] },
      { week: '06', title: 'Shopping & Style', topics: ['Comparisons', 'Superlatives', 'Fabrics & Patterns', 'Asking for Sizes'] },
      { week: '07', title: 'Environment', topics: ['Nature & Climate', 'Giving Reasons (Parce que/Puisque)', 'Environmental Issues', 'Vocabulary'] },
      { week: '08', title: 'Media & News', topics: ['TV Programs', 'Newspapers', 'Direct Object Pronouns', 'Indirect Object Pronouns'] },
      { week: '09', title: 'Travel Memoirs', topics: ['Booking Accommodations', 'Prism of Culture', 'Travel Anecdotes', 'Y & En pronouns'] },
      { week: '10', title: 'Certification', topics: ['DELF A2 Mock Exam', 'Oral Presentation', 'Writing Workshop', 'Certification Ceremony'] }
    ],
    materials: ['A2 Grammar Blueprint', 'Live Conversation Lab Access', 'The "Petit Nicolas" Reading Guide', 'Verb Conjugation Poster'],
    faq: [
      { q: 'Do I need perfect A1 to start A2?', a: 'You should be comfortable with basic present tense. We provide a quick A1 refresher in Week 1.' },
      { q: 'Is there a lot of homework?', a: 'Expect about 2 hours of self-study per week to reinforce the live sessions.' }
    ],
    testimonial: { name: 'Michael R.', text: 'The jump from A1 to A2 was challenging but the teachers made the grammar feel like a puzzle instead of a chore.' },
    duration: '10 Weeks',
    intensity: '6 Hours / Week',
    price: '$249'
  },
  b1: {
    title: 'B1 - Intermediate French',
    badge: 'Independent User',
    summary: 'Achieve threshold fluency. Handle most situations you will encounter while traveling.',
    description: 'B1 is where the real fun begins! You move from survival to expression. You will learn to deal with most situations likely to arise while traveling and produce simple connected text on topics which are familiar or of personal interest.',
    mastery: [
      { title: 'Subjunctive Intro', desc: 'Express desires, doubts, and emotions using the most important advanced mood.' },
      { title: 'Active Debating', desc: 'Learn to agree, disagree, and justify your viewpoint on social issues.' },
      { title: 'Professional Edge', desc: 'Write professional emails and handle job interviews with intermediate ease.' }
    ],
    outcomes: [
      'Understand the main points of clear standard input.',
      'Deal with most situations while traveling.',
      'Produce simple connected text on familiar topics.',
      'Describe experiences, events, dreams, and ambitions.',
      'Briefly give reasons and explanations for opinions and plans.',
      'Understand the plot of movies and books with standard language.',
      'Write letters describing personal experiences and impressions.',
      'Handle unexpected situations in public transport or shops.'
    ],
    curriculum: [
      { week: '01', title: 'The Subjunctive 1', topics: ['Formation of Subjunctive', 'Expressing Necessity', 'Emotional Responses', 'Wishes'] },
      { week: '02', title: 'The Subjunctive 2', topics: ['Doubt & Uncertainty', 'Conjunctions', 'Sentence Continuity', 'Subjunctive vs Indicative'] },
      { week: '03', title: 'Media Analysis', topics: ['Podcast Summaries', 'News Debates', 'Passive Voice', 'Reporting News'] },
      { week: '04', title: 'Art & Aesthetics', topics: ['Describing Art', 'The Cinema Industry', 'Relative Pronouns (Lequel)', 'Art Criticism'] },
      { week: '05', title: 'History & Society', topics: ['Key Historical Figures', 'Modern Social Changes', 'Past Conditional', 'Regrets'] },
      { week: '06', title: 'Work & Ambition', topics: ['The Ideal Job', 'Workplace Conflicts', 'Salary Negotiation', 'Cover Letters'] },
      { week: '07', title: 'Hypotheticals', topics: ['Si-Clauses (Type 1, 2, 3)', 'Imaging Alternatives', 'Scientific Discoveries', 'Futur Antérieur'] },
      { week: '08', title: 'Psychology', topics: ['Personality Traits', 'Mental Health awareness', 'Adverbs of manner', 'Nuanced adj'] },
      { week: '09', title: 'Travel & Nature', topics: ['Sustainable Tourism', 'Regional Gastronomy', 'Gerunds', 'Describing Landscapes'] },
      { week: '10', title: 'Digital World', topics: ['AI & Future', 'Cybersecurity', 'Nominalization', 'Tech Debates'] },
      { week: '11', title: 'Refining Style', topics: ['Connecting Words', 'Rhetorical Questions', 'Speech Writing', 'Summary Skills'] },
      { week: '12', title: 'B1 Final', topics: ['DELF B1 Simulation', 'Presentation Day', 'Portfolio Submission', 'Graduation'] }
    ],
    materials: ['B1 Fluency Toolkit', 'Weekly Podcast Subscription', 'French Novel (B1 Level)', 'Advanced Tense Map'],
    faq: [
      { q: 'Can I work in France with B1?', a: 'B1 is often sufficient for hospitality or basic office roles, and it is a great stepping stone for B2.' },
      { q: 'Is it hard to learn the subjunctive?', a: 'It requires practice, but our 2-week deep dive makes it intuitive.' }
    ],
    testimonial: { name: 'Elena V.', text: 'Finally feeling like I have a personality in French! I can finally joke and debate with my French friends.' },
    duration: '12 Weeks',
    intensity: '8 Hours / Week',
    price: '$299'
  },
  b2: {
    title: 'B2 - Upper Intermediate',
    badge: 'Advanced Proficiency',
    summary: 'Professional level fluency. Understand complex text and interact with native speakers with ease.',
    description: 'B2 is the target level for students wishing to study or work in a French-speaking environment. You will reach a stage where you can interact with a degree of fluency and spontaneity.',
    mastery: [
      { title: 'Academic Synthesis', desc: 'Synthesize information from multiple sources into a coherent academic or business report.' },
      { title: 'Cultural Nuance', desc: 'Understand sarcasm, irony, and regional idioms used by native speakers.' },
      { title: 'Flawless Flow', desc: 'Achieve a level of spontaneity where internal translation is no longer needed.' }
    ],
    outcomes: [
      'Understand the main ideas of complex text on concrete and abstract topics.',
      'Interact with a degree of fluency and spontaneity.',
      'Produce clear, detailed text on a wide range of subjects.',
      'Explain a viewpoint on a topical issue giving the advantages and disadvantages.',
      'Understand technical discussions in your field of specialization.',
      'Follow complex lines of argument in standard language.',
      'Write an essay or report, passing on information or giving reasons.',
      'Identify the fine nuances of meaning in complex situations.'
    ],
    curriculum: [
      { week: '01', title: 'Advanced Grammar', topics: ['Double Pronouns', 'Past Subjunctive', 'Agreement of P.P.', 'Complex Relatives'] },
      { week: '02', title: 'Rhetoric & Style', topics: ['Developing Arguments', 'Connecting Ideas', 'Concessions', 'Rhetorical Devices'] },
      { week: '03', title: 'Political Discourse', topics: ['Election Systems', 'Voting Rights', 'Political Ideologies', 'The Press'] },
      { week: '04', title: 'Modern Ethics', topics: ['Bioethics', 'Privacy in Digital Age', 'Social Justice', 'Nominal Phrases'] },
      { week: '05', title: 'Science/Technology', topics: ['Space Exploration', 'Climate Change Data', 'The Passive Voice (Adv)', 'Inversion'] },
      { week: '06', title: 'Business French', topics: ['Corporate Strategy', 'Marketing Nuance', 'Management Styles', 'Budgeting talk'] },
      { week: '07', title: 'Arts & Literature', topics: ['Analyzing Classics', 'Modern Art Theory', 'Subjunctive (Limparfait)', 'Metaphors'] },
      { week: '08', title: 'Social Issues', topics: ['Education Systems', 'The Future of Work', 'Demographics', 'Statistics'] },
      { week: '09', title: 'Exam Strategies', topics: ['Synthesis Writing', 'Argumentative Essay', 'Time Management', 'DELF Prep'] },
      { week: '10', title: 'Listening Mastery', topics: ['Radio France analysis', 'Native Speed Debates', 'Slang vs Slang', 'Regional Accents'] },
      { week: '11', title: 'The Professional Talk', topics: ['Public Speaking', 'Persuasion Skills', 'Handling Q&A', 'Confidence Lab'] },
      { week: '12', title: 'Final Graduation', topics: ['DELF B2 Mock', 'Synthesis Project', 'Final Assessment', 'B2 Global Cert'] }
    ],
    materials: ['B2 Academic Reader', 'Business French Case Studies', 'Full Mock Exam Series', 'Stylistics Guide'],
    faq: [
      { q: 'Is B2 enough for university?', a: 'Yes, B2 is the standard requirement for most undergraduate programs in French universities.' },
      { q: 'What comes after B2?', a: 'C1 and C2 focus on specialized academic research and near-native literary mastery.' }
    ],
    testimonial: { name: 'David K.', text: 'I passed my DELF B2 with flying colors thanks to the synthesis workshops. This course actually prepares you for the real world.' },
    duration: '12 Weeks',
    intensity: '10 Hours / Week',
    price: '$349'
  }
};

const CourseDetail = () => {
  const { level } = useParams();
  const course = courseData[level.toLowerCase()];

  if (!course) {
    return (
      <div className="page-container" style={{textAlign: 'center', padding: '10rem 0'}}>
        <div className="container">
          <h1>404 - Course Not Found</h1>
          <p>The course level you are looking for does not exist.</p>
          <Link to="/courses" className="btn btn-red" style={{marginTop: '2rem'}}>Back to All Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container course-detail-page">
      <section className="page-hero" style={{padding: '8rem 0 6rem'}}>
        <div className="container">
          <span className="course-badge">{course.badge}</span>
          <h1 style={{fontSize: '4.5rem', marginBottom: '1.5rem'}}>{course.title}</h1>
          <p className="lead" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>{course.summary}</p>
          
          <div className="course-quick-stats" style={{display: 'flex', gap: '3rem', justifyContent: 'center'}}>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{color: 'var(--primary-red)', fontWeight: '700'}}>Duration: </span>{course.duration}
             </div>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{color: 'var(--primary-red)', fontWeight: '700'}}>Intensity: </span>{course.intensity}
             </div>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{color: 'var(--primary-red)', fontWeight: '700'}}>Price: </span>{course.price}
             </div>
          </div>
        </div>
      </section>

      {/* Mastery Section */}
      <section className="section-white" style={{padding: '8rem 0', borderBottom: '1px solid #eee'}}>
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '5rem'}}>
               <span style={{color: 'var(--primary-red)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem'}}>Core focus</span>
               <h2 style={{marginTop: '1rem'}}>What You Will Master</h2>
            </div>
            <div className="grid grid-3">
               {course.mastery.map((item, i) => (
                  <div key={i} className="premium-card" style={{padding: '3rem', background: '#fff', border: '1px solid #eee'}}>
                     <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#1a1a1a'}}>{item.title}</h3>
                     <p style={{color: '#666', lineHeight: '1.6'}}>{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Program Details Section */}
      <section className="section-white" style={{padding: '8rem 0'}}>
         <div className="container">
            <div className="grid grid-2">
               <div className="detail-text">
                  <span style={{color: 'var(--primary-red)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem'}}>Program Overview</span>
                  <h2 style={{marginTop: '1rem', marginBottom: '2rem', fontSize: '3rem'}}>Comprehensive Fluency</h2>
                  <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#555'}}>{course.description}</p>
                  
                  <div className="outcomes-list" style={{marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                     <h4 style={{gridColumn: 'span 2', fontSize: '1.3rem', marginBottom: '1rem'}}>Learning Outcomes</h4>
                     {course.outcomes.map((outcome, i) => (
                        <div key={i} className="outcome-item" style={{display: 'flex', gap: '0.8rem', alignItems: 'flex-start'}}>
                           <div style={{width: '20px', height: '20px', background: 'rgba(229, 90, 90, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px'}}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="3"><path d="M20 6L9 17l-5-5"></path></svg>
                           </div>
                           <p style={{margin: 0, color: '#555', fontSize: '0.9rem'}}>{outcome}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="detail-visual" style={{paddingLeft: '3rem'}}>
                  <div className="materials-box premium-card" style={{background: '#fcfcfc', border: '1px solid #eee', padding: '3.5rem'}}>
                      <h4 style={{fontSize: '1.4rem', marginBottom: '2rem', textAlign: 'center'}}>Learning Universe</h4>
                      <div className="materials-list" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                         {course.materials.map((m, i) => (
                            <div key={i} style={{padding: '1rem 1.5rem', background: '#fff', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                               <span style={{fontSize: '1.5rem'}}>📚</span>
                               <span style={{fontWeight: '600', color: '#333'}}>{m}</span>
                            </div>
                         ))}
                      </div>
                      <div className="testimonial-mini" style={{marginTop: '3.5rem', padding: '2rem', borderLeft: '4px solid var(--primary-red)', background: '#fff'}}>
                         <p style={{fontStyle: 'italic', color: '#555', marginBottom: '1rem'}}>"{course.testimonial.text}"</p>
                         <span style={{fontWeight: '800', fontSize: '0.9rem'}}>— {course.testimonial.name}</span>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Curriculum Grid */}
      <section className="curriculum-timeline" style={{padding: '10rem 0', background: '#121212'}}>
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '6rem'}}>
               <span style={{color: 'var(--primary-red)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem'}}>The Roadmap</span>
               <h2 style={{marginTop: '1rem', color: '#fff', fontSize: '3.5rem'}}>Complete Weekly Breakdown</h2>
               <p style={{color: 'var(--text-grey)', fontSize: '1.1rem', marginTop: '1rem'}}>A structured path to linguistic excellence.</p>
            </div>
            
            <div className="curriculum-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
               {course.curriculum.map((module, i) => (
                  <div key={i} className="premium-card curriculum-module" style={{padding: '3rem'}}>
                     <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                           <span style={{padding: '0.4rem 0.8rem', background: 'rgba(229, 90, 90, 0.1)', color: 'var(--primary-red)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800'}}>WEEK {module.week}</span>
                        </div>
                        <h4 style={{margin: 0, fontSize: '1.4rem', color: '#fff'}}>{module.title}</h4>
                     </div>
                     <div className="topic-tags-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem'}}>
                        {module.topics.map((topic, j) => (
                           <div key={j} style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-grey)', fontSize: '0.9rem'}}>
                              <div style={{width: '5px', height: '5px', background: 'var(--primary-red)', borderRadius: '50%', opacity: 0.6}}></div>
                              {topic}
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* level FAQ */}
      <section className="section-white" style={{padding: '8rem 0'}}>
         <div className="container" style={{maxWidth: '900px'}}>
            <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
               <h2>Common Questions about {level.toUpperCase()}</h2>
            </div>
            <div className="faq-wrapper" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
               {course.faq.map((item, i) => (
                  <div key={i} className="premium-card" style={{padding: '2.5rem', background: '#fff', border: '1px solid #eee'}}>
                     <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>Q: {item.q}</h4>
                     <p style={{color: '#666', lineHeight: '1.6'}}>A: {item.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <section className="enrollment-cta section-white" style={{padding: '10rem 0', textAlign: 'center', background: '#fcfcfc', borderTop: '1px solid #eee'}}>
         <div className="container" style={{maxWidth: '800px'}}>
            <span className="course-badge" style={{marginBottom: '2rem'}}>Next Cohort Starts Monday</span>
            <h2 style={{fontSize: '3.5rem', marginBottom: '2rem'}}>Ready to start your {level.toUpperCase()} journey?</h2>
            <p className="lead" style={{marginBottom: '3rem'}}>Join our intensive program and transition from student to independent user in just {course.duration}.</p>
            <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center'}}>
               <button className="btn btn-red" style={{padding: '1.5rem 4rem', fontSize: '1.2rem', fontWeight: '800', borderRadius: '50px'}}>Secure My Spot – {course.price}</button>
            </div>
            <p style={{marginTop: '2rem', color: '#888', fontSize: '0.9rem'}}>No commitment required. 7-day money back guarantee.</p>
         </div>
      </section>
    </div>
  );
};

export default CourseDetail;
