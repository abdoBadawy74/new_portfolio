"use client";
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Company Website",
        description: "A modern company website built with HTML and CSS, featuring a responsive design and smooth animations.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.1s",
        githubLink: "https://github.com/abdoBadawy74/template1",
        liveDemoLink: "https://abdobadawy74.github.io/template1/"

    },
    {
        id: 2,
        title: "ٌRocker Wooden Chairs",
        description: "An e-commerce website for wooden chairs, showcasing product listings and a shopping cart functionality.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.2s",
        githubLink: "https://github.com/abdoBadawy74/Template_2",
        liveDemoLink: "https://abdobadawy74.github.io/Template_2/"
    },
    {
        id: 3,
        title: "Leon Website",
        description: "A personal company website with a clean design and smooth transitions, showcasing projects and services.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.3s",
        githubLink: "https://github.com/abdoBadawy74/Template_4",
        liveDemoLink: "https://abdobadawy74.github.io/Template_4/"
    },
    {
        id: 4,
        title: "Kasper Website",
        description: "A personal website with a unique design, featuring a portfolio section and contact form.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.4s",
        githubLink: "https://github.com/abdoBadawy74/template5",
        liveDemoLink: "https://abdobadawy74.github.io/template5/"
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.5s",
        githubLink: "https://github.com/abdoBadawy74/Template_6",
        liveDemoLink: "https://abdobadawy74.github.io/Template_6/"
    },
    {
        id: 6,
        title: "Dashboard UI",
        description: "A dashboard UI design with charts and tables, built using HTML and CSS.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.6s",
        githubLink: "https://github.com/abdoBadawy74/Template7",
        liveDemoLink: "https://abdobadawy74.github.io/Template7/"
    },
    {
        id: 7,
        title: "Nike Collection",
        description: "A Nike collection website showcasing various products with a modern design.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.7s",
        githubLink: "https://github.com/abdoBadawy74/Template_8",
        liveDemoLink:"https://abdobadawy74.github.io/Template_8/"
    },
    {
        id: 8,
        title: "Hotels Website",
        description: "A hotel booking website with a user-friendly interface and responsive design.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.8s",
        githubLink : "https://github.com/abdoBadawy74/Template_9",
        liveDemoLink: "https://abdobadawy74.github.io/Template_9/"
    },
    {
        id: 9,
        title: "Food Website",
        description: "A restaurant website with a menu, reservation system, and contact form.",
        tags: ["HTML5", "CSS3",],
        dataTags: "html css",
        delay: "0.9s",
        githubLink: "https://github.com/abdoBadawy74/Template_10",
        liveDemoLink: "https://abdobadawy74.github.io/Template_10/"
    }

];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <section id="projects" className="bg-white section-padding">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center fade-in font-bold mb-8">Projects</h2>

                <div className="flex justify-center fade-in mb-6 space-x-4">
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

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className="bg-gray-100 rounded-lg shadow-md fade-in hover:shadow-lg overflow-hidden project-item transition-shadow"
                            data-tags={project.dataTags}
                            style={{ display: activeFilter === 'all' || project.dataTags.includes(activeFilter) ? 'block' : 'none', transitionDelay: project.delay }}
                        >
                            <div className="flex bg-gradient-primary h-48 justify-center text-white items-center">
                                <span className="text-3xl font-bold">{`Project ${project.id}`}</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-black transition"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                        <a
                                            href={project.liveDemoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-black transition"
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex mb-4 space-x-3">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-200 rounded text-sm px-2 py-1">{tag}</span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a href="projects.html" className="bg-gradient-primary rounded-md text-white font-semibold hover:opacity-90 inline-block px-6 py-3 transition">View All Projects</a>
                </div>
            </div>
        </section>
    );
}
