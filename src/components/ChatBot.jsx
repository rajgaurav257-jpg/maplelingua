import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Bonjour! I'm your Maplelingua Assistant. How can I help you start your French journey today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Handle internal link navigation when a string with HTML is clicked
  const handleLinkClick = (e) => {
    const target = e.target;
    if (target.tagName.toLowerCase() === 'a') {
      const href = target.getAttribute('href');
      // If it's a relative link, use react-router navigate
      if (href && href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
        setIsOpen(false); // Optionally close chat on navigation
      }
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const systemPrompt = `You are Maplelingua Assistant, a helpful, professional AI chatbot for the Maplelingua website. 
Maplelingua offers premium French language courses (A1, A2, B1, B2) and specialized exam preparation (DELF, TEF, TCF). 
Your goal is to help users find information, choose a course, and navigate the website.
Keep your answers concise and friendly.
CRITICAL INSTRUCTION: If the user asks about something that exists on the website, you MUST provide a relative clickable HTML link in exactly this format: <a href='/path'>Link Text</a>
Here is the complete routing map of the website. ONLY link to these precise URL paths:
- Home: '/'
- About Us: '/about'
- Explore All Courses: '/courses'
- French Level A1 Course: '/courses/a1'
- French Level A2 Course: '/courses/a2'
- French Level B1 Course: '/courses/b1'
- French Level B2 Course: '/courses/b2'
- DELF Exam Preparation: '/courses/delf'
- TEF Exam Preparation: '/courses/tef'
- TCF Exam Preparation: '/courses/tcf'
- Blog: '/blog'
- Careers: '/careers'
- Press: '/press'
- Partners: '/partners'
- Contact Us: '/contact'
- FAQ & General Info: '/info'

Do NOT use Markdown links like [Text](url). ONLY use standard HTML anchor tags (<a href="...">...</a>). Never make up URLs not in the list.`;

      // Structure messages for API
      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage.content }
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botResponseText = data.choices[0].message.content;

      const botMessage = {
        id: Date.now(),
        role: 'assistant',
        content: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Groq API:', error);
      const errorMessage = {
        id: Date.now(),
        role: 'assistant',
        content: "Je suis désolé, I'm having trouble connecting right now. Please try again later or visit our contact page.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-wrapper">
      <div className={`chat-window ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-status-dot"></div>
            <div>
              <h3>maplelingua Assistant</h3>
              <p>Online</p>
            </div>
          </div>
          <button className="chat-close-btn" onClick={toggleChat}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="chat-messages" onClick={handleLinkClick}>
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.role === 'user' ? 'user' : 'bot'}`}>
              <div
                className="message-bubble"
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
              <span className="message-time">{msg.time}</span>
            </div>
          ))}
          {isLoading && (
            <div className="message bot">
              <div className="message-bubble loading-dots">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button className="chat-send-btn" onClick={handleSend} disabled={isLoading}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      <button className={`chatbot-fab ${isOpen ? 'hidden' : ''}`} onClick={toggleChat}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
        .loading-dots span {
          animation: blink 1.4s infinite reverse;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        .message-bubble a {
          color: #0066cc;
          text-decoration: underline;
          cursor: pointer;
        }
        .message-bubble a:hover {
          color: #004499;
        }
      `}} />
    </div>
  );
};

export default ChatBot;
