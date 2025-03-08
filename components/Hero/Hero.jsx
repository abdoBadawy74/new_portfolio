import Image from 'next/image'
import profile from "../../assets/profile.png"

export default function Hero() {
    return (
        //  !--Hero Section-- >
        <header className="h-screen bg-gradient-primary text-white flex items-center pt-10 md:pt-0">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="max-w-2xl mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-semibold mb-4">Abdulrahman Badawy</h1>
                        <div className="h-12 overflow-hidden">
                            <h2 className="text-2xl md:text-3xl mb-6 typing-text" id="typing-text">Front End Developer</h2>
                        </div>
                        <p className="text-lg mb-8 slide-in-left">Creating responsive and engaging web experiences</p>
                        <a href="#contact" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition pulse">Get In Touch</a>
                    </div>
                    <div className="rounded-full profile-image overflow-hidden w-[300px] h-[300px] p-3">
                        <Image src={profile} alt="Abdulrahman Badawy" width={300} height={300} />
                    </div>
                </div>
            </div>
        </header>
    )
}
