"use client";
import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    // <!-- Projects Section -->
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center fade-in">Projects</h2>

        <div className="flex justify-center mb-6 space-x-4 fade-in">
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'all' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'html' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('html')}
          >
            HTML/CSS
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'js' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('js')}
          >
            JavaScript
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'react' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('react')}
          >
            React
          </button>
          <button
            className={`project-filter-btn px-4 py-2 rounded ${activeFilter === 'next' ? 'bg-gradient-primary text-white' : 'bg-gray-200'}`}
            onClick={() => handleFilterClick('next')}
          >
            Next.js
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="project-item bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition fade-in"
            data-tags="react js"
            style={{ display: activeFilter === 'all' || 'react js'.includes(activeFilter) ? 'block' : 'none', transitionDelay: '0.1s' }}
          >
            <div className="h-48 bg-gradient-primary flex items-center justify-center text-white">
              <span className="text-3xl font-bold">Project 1</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="mb-4">A responsive online store built with React and Tailwind CSS featuring product filtering and cart functionality.</p>
              <div className="flex space-x-3">
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Tailwind</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Redux</span>
              </div>
            </div>
          </div>
          <div
            className="project-item bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition fade-in"
            data-tags="html css"
            style={{ display: activeFilter === 'all' || 'html css'.includes(activeFilter) ? 'block' : 'none', transitionDelay: '0.2s' }}
          >
            <div className="h-48 bg-gradient-primary flex items-center justify-center text-white">
              <span className="text-3xl font-bold">Project 2</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Portfolio Template</h3>
              <p className="mb-4">A customizable portfolio template with dark/light mode and smooth animations.</p>
              <div className="flex space-x-3">
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">HTML5</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">CSS3</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">JavaScript</span>
              </div>
            </div>
          </div>
          <div
            className="project-item bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition fade-in"
            data-tags="vue js"
            style={{ display: activeFilter === 'all' || 'vue js'.includes(activeFilter) ? 'block' : 'none', transitionDelay: '0.3s' }}
          >
            <div className="h-48 bg-gradient-primary flex items-center justify-center text-white">
              <span className="text-3xl font-bold">Project 3</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dashboard UI</h3>
              <p className="mb-4">An admin dashboard with data visualization components and responsive layout.</p>
              <div className="flex space-x-3">
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Vue.js</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Chart.js</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Firebase</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="projects.html" className="inline-block bg-gradient-primary text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">View All Projects</a>
        </div>
      </div>
    </section>
  );
}
