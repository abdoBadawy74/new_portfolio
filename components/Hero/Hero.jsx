"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import profile from "../../assets/profile.png";

export default function Hero() {
    // Multiple text typing animation with blinking cursor
    useEffect(() => {
        const typingTextElement = document.getElementById('typing-text');
        const textArray = [
            "Front End Developer",
            "Web Designer",
            "JavaScript Developer",
            "React Developer",
            "Next.js Developer",
            "UI/UX Designer",
            "Freelancer",
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const currentText = textArray[textIndex];

            if (isDeleting) {
                typingTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(typeText, 500);
            } else {
                // Typing speed varies for a more natural effect
                const typingSpeed = isDeleting ? 80 : Math.random() * (120 - 50) + 50;
                setTimeout(typeText, typingSpeed);
            }
        }

        // Start typing animation after 1 second
        setTimeout(typeText, 1000);
    }, []);

    return (
        <header className="h-screen bg-gradient-primary text-white flex items-center pt-10 md:pt-0">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <div className="max-w-2xl mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-semibold mb-4">Abdulrahman Badawy</h1>
                        <div className="h-12 overflow-hidden">
                            <h2
                                className="text-2xl md:text-3xl mb-6 typing-text w-fit"
                                id="typing-text"
                            >
                                Front End Developer
                            </h2>
                        </div>
                        <p className="text-lg mb-8 slide-in-left">
                            Creating responsive and engaging web experiences
                        </p>
                        <a
                            href="#contact"
                            className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition pulse"
                        >
                            Get In Touch
                        </a>
                    </div>
                    <div className="border-animation">
                        <div className="rounded-full overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
                            <Image
                                src={profile}
                                alt="Abdulrahman Badawy"
                                width={250}
                                height={250}
                                className="md:w-[350px] md:h-[350px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
