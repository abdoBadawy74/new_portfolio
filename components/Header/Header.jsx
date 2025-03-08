"use client";

import { useEffect } from 'react';
export default function Header() {

    useEffect(() => {
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                if (!document.getElementById('mobile-menu').classList.contains('hidden')) {
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });
    }, []);

    return (
        <nav className="fixed w-full bg-gradient-primary text-white z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a href="#" className="text-xl font-"> {"<"} Abdulrahman {"/>"} </a>
                <div className="hidden md:flex space-x-6">
                    <a href="#summary" className="hover:text-gray-300 transition">Home</a>
                    <a href="#summary" className="hover:text-gray-300 transition">About</a>
                    <a href="#services" className="hover:text-gray-300 transition">Services</a>
                    <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
                    <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
                    <a href="#education" className="hover:text-gray-300 transition">Education</a>
                    <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
                </div>
                <button className="md:hidden" id="menu-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className="md:hidden hidden bg-primary bg-opacity-95 pb-4 px-4" id="mobile-menu">
                <a href="#header" className="block py-2 text-gray-200 hover:text-white">Home</a>
                <a href="#summary" className="block py-2 text-gray-200 hover:text-white">About</a>
                <a href="#services" className="block py-2 text-gray-200 hover:text-white">Services</a>
                <a href="#projects" className="block py-2 text-gray-200 hover:text-white">Projects</a>
                <a href="#skills" className="block py-2 text-gray-200 hover:text-white">Skills</a>
                <a href="#education" className="block py-2 text-gray-200 hover:text-white">Education</a>
                <a href="#contact" className="block py-2 text-gray-200 hover:text-white">Contact</a>
            </div>
        </nav>
    )
}
