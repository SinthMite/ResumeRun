import { useState, useEffect } from 'react';
import './Pages.scss';

export function Home() {
    const [roleReason] = useState(["Next Role", "Dream Job", "Ideal Position", "Perfect Opportunity", "Future Career"]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roleReason.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [roleReason.length]);

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <div className="mt-20 px-4">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold my-10 text-gray-800">
                    Land Your <span className="text-highlight">{roleReason[currentIndex]}</span> With 
                    <span className="text-highlight font-black"> ResumeRun</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                    Are you looking for a new job? The job market is tough, but with groundbreaking innovations in technology, 
                    your job search could be easier. With AI automation, easy apply features, and resume builders, you'll be 
                    employed in no time.
                </p>
                <button className="get-started-button">
                    ⚡️ Get Hired
                </button>
            </div>

            {/* Key Features Section */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose ResumeRun?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center feature-card">
                        <img src="feature-icon-1.png" alt="Automated Job Applications" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700">Automated Job Applications</h3>
                        <p className="text-gray-600">Let ResumeRun automatically apply to jobs that match your preferences.</p>
                    </div>
                    <div className="flex flex-col items-center text-center feature-card">
                        <img src="feature-icon-2.png" alt="Customizable Resumes" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700">Customizable Resumes</h3>
                        <p className="text-gray-600">Tailor your resume for different job types with ease.</p>
                    </div>
                    <div className="flex flex-col items-center text-center feature-card">
                        <img src="feature-icon-3.png" alt="Job Tracking Dashboard" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700">Job Tracking Dashboard</h3>
                        <p className="text-gray-600">Keep track of all your job applications in one place.</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="my-20 bg-gray-100 py-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How It Works</h2>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center text-center mb-8 gap-4">
                        <div className="step-circle">1</div>
                        <h3 className="text-xl font-semibold text-gray-700">Sign Up</h3>
                        <p className="text-gray-600 max-w-md">Create an account and upload your resume.</p>
                    </div>
                    <div className="flex flex-col items-center text-center mb-8 gap-4">
                        <div className="step-circle">2</div>
                        <h3 className="text-xl font-semibold text-gray-700">Select Job Preferences</h3>
                        <p className="text-gray-600 max-w-md">Choose job types, locations, and other criteria.</p>
                    </div>
                    <div className="flex flex-col items-center text-center mb-8 gap-4">
                        <div className="step-circle">3</div>
                        <h3 className="text-xl font-semibold text-gray-700">Connect Job Boards</h3>
                        <p className="text-gray-600 max-w-md">Log in to popular job sites through ResumeRun.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="step-circle">4</div>
                        <h3 className="text-xl font-semibold text-gray-700">Sit Back & Relax</h3>
                        <p className="text-gray-600 max-w-md">Let ResumeRun apply to jobs for you.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Success Stories</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="testimonial-card">
                        <p className="text-gray-600">"ResumeRun helped me land my dream job in just two weeks! The automation feature saved me so much time."</p>
                        <p className="text-gray-800 font-semibold mt-4">- Alex M.</p>
                    </div>
                    <div className="testimonial-card">
                        <p className="text-gray-600">"I was struggling to get responses from employers. ResumeRun made the process seamless, and I got multiple offers."</p>
                        <p className="text-gray-800 font-semibold mt-4">- Jamie L.</p>
                    </div>
                    <div className="testimonial-card">
                        <p className="text-gray-600">"The customizable resumes feature was a game-changer for me. Highly recommend ResumeRun!"</p>
                        <p className="text-gray-800 font-semibold mt-4">- Taylor K.</p>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="my-20 text-center">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Choose Your Plan</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="pricing-card">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">Free Plan</h3>
                        <p className="text-gray-600 mb-8">Basic job applications and resume builder features.</p>
                        <button className="get-started-button">Get Started</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">Pro Plan</h3>
                        <p className="text-gray-600 mb-8">Advanced features including full job automation and tracking.</p>
                        <button className="get-started-button">Upgrade Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">Premium Plan</h3>
                        <p className="text-gray-600 mb-8">All features unlocked with priority support.</p>
                        <button className="get-started-button">Go Premium</button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="my-20 bg-gray-100 py-10 p-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="faq-card border-b">
                        <h3 
                            className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center" 
                            onClick={() => toggleQuestion(0)}
                        >
                            Is my information secure?
                            <span className={`transform transition-transform duration-300 ${openQuestionIndex === 0 ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </h3>
                        <div className={`overflow-hidden transition-all duration-300 ${openQuestionIndex === 0 ? "max-h-40" : "max-h-0"}`}>
                            <p className="text-gray-600 mt-2">
                                Yes, we prioritize your privacy and ensure all your data is securely stored.
                            </p>
                        </div>
                    </div>

                    <div className="faq-card border-b">
                        <h3 
                            className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center" 
                            onClick={() => toggleQuestion(1)}
                        >
                            Can I cancel my subscription at any time?
                            <span className={`transform transition-transform duration-300 ${openQuestionIndex === 1 ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </h3>
                        <div className={`overflow-hidden transition-all duration-300 ${openQuestionIndex === 1 ? "max-h-40" : "max-h-0"}`}>
                            <p className="text-gray-600 mt-2">
                                Absolutely! You can cancel your subscription from your account settings.
                            </p>
                        </div>
                    </div>

                    <div className="faq-card border-b">
                        <h3 
                            className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center" 
                            onClick={() => toggleQuestion(2)}
                        >
                            Do you offer customer support?
                            <span className={`transform transition-transform duration-300 ${openQuestionIndex === 2 ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </h3>
                        <div className={`overflow-hidden transition-all duration-300 ${openQuestionIndex === 2 ? "max-h-40" : "max-h-0"}`}>
                            <p className="text-gray-600 mt-2">
                                Yes, we provide 24/7 customer support to assist you with any issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 py-10 text-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-4">
                        <a href="#" className="footer-link">About Us</a>
                        <a href="#" className="footer-link">Contact</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                    </div>
                    <div className="flex justify-center mb-4">
                        <a href="#" className="footer-link"><img src="social-icon-facebook.png" alt="Facebook" className="w-6 h-6" /></a>
                        <a href="#" className="footer-link"><img src="social-icon-twitter.png" alt="Twitter" className="w-6 h-6" /></a>
                        <a href="#" className="footer-link"><img src="social-icon-linkedin.png" alt="LinkedIn" className="w-6 h-6" /></a>
                    </div>
                    <p>© 2024 ResumeRun. All rights reserved.</p>
                    <div className="mt-4">
                        <input type="email" placeholder="Sign up for our newsletter" className="newsletter-input" />
                        <button className="get-started-button rounded-r-lg">Subscribe</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
