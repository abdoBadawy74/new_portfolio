import React from 'react'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center fade-in">Education</h2>
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="border-l-4 border-primary pl-6 py-2 slide-in-left" style={{transitionDelay: '0.1s'}}>
        <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
        <p className="text-gray-600 mb-2">University Name • 2018 - 2022</p>
        <p>Specialized in web technologies and software development. Graduated with honors.</p>
      </div>
      <div className="border-l-4 border-primary pl-6 py-2 slide-in-left" style={{transitionDelay: '0.2s'}}>
        <h3 className="text-xl font-semibold">Front End Development Certification</h3>
        <p className="text-gray-600 mb-2">Online Platform • 2021</p>
        <p>Comprehensive training in modern front-end frameworks and best practices.</p>
      </div>
      <div className="border-l-4 border-primary pl-6 py-2 slide-in-left" style={{transitionDelay: '0.3s'}}>
        <h3 className="text-xl font-semibold">UI/UX Design Fundamentals</h3>
        <p className="text-gray-600 mb-2">Design Institute • 2020</p>
        <p>Studied user experience principles and interface design fundamentals.</p>
      </div>
    </div>
  </div>
</section>

  )
}
