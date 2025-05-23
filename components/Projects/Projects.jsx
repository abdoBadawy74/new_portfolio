"use client";
import { projects } from '@/app/Data/projects';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleFilterClick = (filter) => {
        if (filter === 'all') {
            const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
            setActiveFilter('all');
            setFilteredProjects(shuffledProjects);
        } else {
            setActiveFilter(filter);
        }
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
                    {filteredProjects
                        .filter(project => activeFilter === 'all' || project.dataTags.includes(activeFilter))
                        .slice(0, 6)
                        .map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg overflow-hidden project-item transition-shadow"
                                style={{ transitionDelay: project.delay }}
                            >
                                <div className="flex h-52 justify-center text-white items-center">
                                    <Image src={project.projectImg} alt="Project Image" width={500} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <div className="flex space-x-4">
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                                                <FaGithub size={20} />
                                            </a>
                                            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
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
