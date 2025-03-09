"use client";
import React, { useEffect } from 'react'
import { HiCodeBracket } from "react-icons/hi2";

export default function Summary() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');

        function checkScroll() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('appear');
                }
            });
        }

        // Initial check on page load
        window.addEventListener('load', checkScroll);

        // Check for new elements becoming visible as user scrolls
        window.addEventListener('scroll', checkScroll);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('load', checkScroll);
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        // <!-- Summary Section -->
        <section id="summary" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center fade-in">About Me</h2>
                <div className="max-w-4xl mx-auto flex justify-center items-center ">
                    <div>
                        <p className="text-lg mb-6 fade-in">
                            I am a passionate Front End Developer with expertise in creating responsive,
                            user-friendly websites and applications. With a strong foundation in HTML, CSS,
                            and JavaScript, I specialize in modern frameworks like React to build exceptional
                            digital experiences.
                        </p>
                        <p className="text-lg mb-6 fade-in">
                            My approach combines technical expertise with creative problem-solving to deliver
                            solutions that not only meet but exceed client expectations. I'm dedicated to writing
                            clean, maintainable code and staying updated with the latest industry trends.
                        </p>
                    </div>
                    <div className="justify-center items-center border rounded-full h-52 w-52 bg-primary ml-8 hidden md:flex fade-in">
                        <HiCodeBracket className="text-9xl text-white w-52" />
                    </div>
                </div>
            </div>
        </section>
    )
}
