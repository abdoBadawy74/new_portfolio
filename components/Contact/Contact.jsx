"use client"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_s3u95yk', // Replace with your EmailJS service ID
            'template_kfwpo0i', // Replace with your EmailJS template ID
            form.current,
            'ehAVnZHsioAPfx_eR' // Replace with your EmailJS user ID
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error.text);
                alert('Failed to send message. Please try again.');
            });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <section id="contact" className="section-padding bg-gradient-primary text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center fade-in">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 fade-in">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>badawyabdulrahman099@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+123 456 7890</span>
                            </div>
                            <div className="flex items-center"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>City, Country</span>
                        </div>
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium fade-in">Your Name</label>
                            <input type="text" name="user_name" className="w-full p-2 rounded text-gray-800" placeholder="Name" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium fade-in">Email Address</label>
                            <input type="email" name="user_email" className="w-full p-2 rounded text-gray-800" placeholder="Email" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium fade-in">Message</label>
                            <textarea name="message" rows={4} className="w-full p-2 rounded text-gray-800" placeholder="Your message" required />
                        </div>
                        <button type="submit" className="bg-white text-primary px-5 py-2 rounded font-medium hover:bg-gray-100 transition pulse">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
