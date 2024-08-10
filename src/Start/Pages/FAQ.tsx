import React from "react";

export function FAQ() {
    return (
        <div className="mt-20 px-4">
            {/* Introduction Section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">
                    Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Got questions? We've got answers! Below are some of the most common questions we receive about ResumeRun. If you can't find what you're looking for, feel free to contact us.
                </p>
            </div>

            {/* FAQ Sections */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">General</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">What is ResumeRun?</h3>
                    <p className="text-gray-600">
                        ResumeRun is an AI-powered job application tool that automates the job search process, allowing you to apply to multiple jobs with ease, customize your resumes, and track your job applications all in one place.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">How does ResumeRun work?</h3>
                    <p className="text-gray-600">
                        ResumeRun connects to popular job boards and automates the application process based on your preferences. You can upload your resume, customize it for different jobs, and let ResumeRun apply to the jobs for you.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8">Pricing & Plans</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">What is included in the Free Plan?</h3>
                    <p className="text-gray-600">
                        The Free Plan includes limited automated job applications, basic resume customization, and limited access to the job tracking dashboard. It's a great way to get started with ResumeRun and explore its basic features.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Can I upgrade my plan later?</h3>
                    <p className="text-gray-600">
                        Yes, you can upgrade to a Pro or Premium plan at any time from your account settings. Upgrading unlocks additional features such as unlimited job applications, advanced resume customization, and priority support.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8">Account Management</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">How do I create an account?</h3>
                    <p className="text-gray-600">
                        Creating an account is simple! Just click on the "Sign Up" button on our homepage, fill out the registration form, and you're ready to start using ResumeRun.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Can I cancel my subscription?</h3>
                    <p className="text-gray-600">
                        Yes, you can cancel your subscription at any time from your account settings. Your account will remain active until the end of your billing cycle, and you will not be charged for the next cycle.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8">Security & Privacy</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Is my personal information secure?</h3>
                    <p className="text-gray-600">
                        Absolutely. We take your privacy seriously and use industry-standard encryption to protect your data. Your personal information is never shared with third parties without your consent.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">How do you handle my data?</h3>
                    <p className="text-gray-600">
                        Your data is used only to improve your experience with ResumeRun. We follow strict privacy policies to ensure your data is handled securely and responsibly.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="my-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">Still Have Questions?</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        If you can't find the answer you're looking for, feel free to contact our support team. We're here to help!
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
