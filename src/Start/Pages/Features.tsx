export function Features() {
    return (
        <div className="mt-20 px-4">
            {/* Introduction Section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">
                    Discover the Power of <span className="text-blue-500">ResumeRun</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    ResumeRun offers a range of powerful features designed to simplify your job search and help you land your dream job faster. From automated job applications to customizable resumes, ResumeRun has you covered.
                </p>
            </div>

            {/* Feature 1: Automated Job Applications */}
            <div className="my-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="automated-job-applications.png" alt="Automated Job Applications" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Automated Job Applications</h2>
                        <p className="text-gray-600 text-lg">
                            Tired of filling out endless job applications? ResumeRun automates the application process, allowing you to apply to multiple jobs with a single click. Customize your preferences, and let our AI handle the rest.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature 2: Customizable Resumes */}
            <div className="my-20 bg-gray-100 py-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-10 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Customizable Resumes</h2>
                        <p className="text-gray-600 text-lg">
                            Tailor your resume for different job types with ease. ResumeRun provides customizable templates and tools that make it simple to create the perfect resume for any job application.
                        </p>
                    </div>
                    <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                        <img src="customizable-resumes.png" alt="Customizable Resumes" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Feature 3: Job Tracking Dashboard */}
            <div className="my-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="job-tracking-dashboard.png" alt="Job Tracking Dashboard" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Job Tracking Dashboard</h2>
                        <p className="text-gray-600 text-lg">
                            Stay organized and on top of your job search with our intuitive dashboard. Track your applications, manage your job search process, and never miss an opportunity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature 4: Easy Apply Integration */}
            <div className="my-20 bg-gray-100 py-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-10 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Easy Apply Integration</h2>
                        <p className="text-gray-600 text-lg">
                            Seamlessly integrate with popular job boards and apply with just a few clicks. ResumeRun's easy apply feature saves you time and effort, helping you land your next role faster.
                        </p>
                    </div>
                    <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                        <img src="easy-apply-integration.png" alt="Easy Apply Integration" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="my-20 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 mb-10">
                    Explore all the features that ResumeRun has to offer and take the first step towards landing your dream job.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">
                    Sign Up Now
                </button>
            </div>
        </div>
    );
}
