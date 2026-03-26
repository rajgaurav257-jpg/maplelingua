import React from 'react'
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'How much does it cost?',
      answer: "Pricing depends on your chosen plan and instructor. We offer flexible monthly subscriptions starting at affordable rates. Your first lesson is always free to see if we're the right fit."
    },
    {
      question: "How long until I'm fluent?",
      answer: "Most students reach conversational fluency within six months of consistent study. The timeline depends on your starting point and how often you practice. Some move faster, others take longer, and that's fine."
    },
    {
      question: 'Do I need experience?',
      answer: "No. We teach everyone from absolute beginners to advanced learners. During signup, you'll tell us your level, and we'll match you with an instructor who knows how to teach at that stage."
    },
    {
      question: 'Can I choose my instructor?',
      answer: "Yes. You'll browse instructor profiles and select someone whose teaching style matches your needs. If it's not working out, you can switch to someone else."
    },
    {
      question: 'What if I miss a lesson?',
      answer: "Life happens. You can reschedule most lessons with 24 hours notice. Your instructor will work with you to find a time that fits your schedule."
    },
    {
      question: 'What if I need help?',
      answer: "Our support team is here. Email us anytime with questions about your account, lessons, or learning progress. We typically respond within 24 hours."
    }
  ]

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">Questions</h2>
          <p className="faq-subtitle">Everything you need to know about learning with us</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h2 className="cta-title">Still have questions?</h2>
          <p className="cta-subtitle">Reach out and we'll answer anything else.</p>
          <button className="btn btn-outline">Contact</button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
