import React from 'react'

export default function Header() {
    return (
        <nav className="fixed w-full bg-gradient-primary text-white z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a href="#" className="text-xl font-bold">Abdulrahman Badawy</a>
                <div className="hidden md:flex space-x-6">
                    <a href="#summary" className="hover:text-gray-300 transition">About</a>
                    <a href="#services" className="hover:text-gray-300 transition">Services</a>
                    <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
                    <a href="projects.html" className="hover:text-gray-300 transition">All Projects</a>
                    <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
                    <a href="#education" className="hover:text-gray-300 transition">Education</a>
                    <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
                </div>
                <button className="md:hidden" id="menu-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className="md:hidden hidden bg-primary bg-opacity-95 pb-4 px-4" id="mobile-menu">
                <a href="#summary" className="block py-2 text-gray-200 hover:text-white">About</a>
                <a href="#services" className="block py-2 text-gray-200 hover:text-white">Services</a>
                <a href="#projects" className="block py-2 text-gray-200 hover:text-white">Projects</a>
                <a href="projects.html" className="block py-2 text-gray-200 hover:text-white">All Projects</a>
                <a href="#skills" className="block py-2 text-gray-200 hover:text-white">Skills</a>
                <a href="#education" className="block py-2 text-gray-200 hover:text-white">Education</a>
                <a href="#contact" className="block py-2 text-gray-200 hover:text-white">Contact</a>
            </div>
        </nav>
    )
}
