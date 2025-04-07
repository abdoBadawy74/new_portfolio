import React from 'react'

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center fade-in">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

                    <div className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ transitionDelay: '0.1s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-primary text-center">Front End</h3>
                        <div className="space-y-2">
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">HTML5/CSS3</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">JavaScript/ES6</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">React</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-primary text-center">Back End</h3>
                        <div className="space-y-2">
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Node.js</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Express</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">RESTful APIs</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ transitionDelay: '0.3s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-primary text-center">Tools</h3>
                        <div className="space-y-2">
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Git/GitHub</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Webpack</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Figma</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">VS Code</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ transitionDelay: '0.4s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-primary text-center">Frameworks</h3>
                        <div className="space-y-2">
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Next.js</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">Redux</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">TypeScript</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                                <span className="font-medium">SASS/SCSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
