import React from "react";

export function Contact() {
    return (
        <div className="mt-20 px-4">
            {/* Introduction Section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">
                    Get in Touch with Us
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Whether you have a question, need support, or just want to give us feedback, we're here to help. Reach out to us using the form below, or connect with us through our social media channels.
                </p>
            </div>

            {/* Contact Form */}
            <div className="my-20 max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
                    <form>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                                placeholder="Subject"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                rows="6" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact Information */}
            <div className="my-20 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Contact Information</h2>
                <p className="text-xl text-gray-600 mb-4">You can also reach us through the following:</p>
                <div className="flex flex-col items-center">
                    <p className="text-gray-600"><strong>Email:</strong> support@resumerun.com</p>
                    <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
                    <p className="text-gray-600"><strong>Address:</strong> 123 ResumeRun Blvd, Suite 100, New York, NY 10001</p>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="my-20 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Connect with Us on Social Media</h2>
                <div className="flex justify-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-blue-500"><img src="social-icon-facebook.png" alt="Facebook" className="w-10 h-10" /></a>
                    <a href="#" className="text-gray-600 hover:text-blue-500"><img src="social-icon-twitter.png" alt="Twitter" className="w-10 h-10" /></a>
                    <a href="#" className="text-gray-600 hover:text-blue-500"><img src="social-icon-linkedin.png" alt="LinkedIn" className="w-10 h-10" /></a>
                    <a href="#" className="text-gray-600 hover:text-blue-500"><img src="social-icon-instagram.png" alt="Instagram" className="w-10 h-10" /></a>
                </div>
            </div>
        </div>
    );
}
