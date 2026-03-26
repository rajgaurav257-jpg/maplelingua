import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseA1 from './pages/CourseA1'
import CourseA2 from './pages/CourseA2'
import CourseB1 from './pages/CourseB1'
import CourseB2 from './pages/CourseB2'
import CourseDELF from './pages/CourseDELF'
import CourseTEF from './pages/CourseTEF'
import CourseTCF from './pages/CourseTCF'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import InfoPage from './pages/InfoPage'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Partners from './pages/Partners'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
        <Route path="courses/a1" element={<CourseA1 />} />
        <Route path="courses/a2" element={<CourseA2 />} />
        <Route path="courses/b1" element={<CourseB1 />} />
        <Route path="courses/b2" element={<CourseB2 />} />
        <Route path="courses/delf" element={<CourseDELF />} />
        <Route path="courses/tef" element={<CourseTEF />} />
        <Route path="courses/tcf" element={<CourseTCF />} />
        <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="press" element={<Press />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="info" element={<InfoPage />} />
          {/* Support for direct footer links */}
          <Route path="faq" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
