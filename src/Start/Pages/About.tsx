import React, { Fragment } from "react";


export function About(){

    return(
        <Fragment>
        <div className="mt-20 px-4">
            {/* Introduction Section */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold my-10 text-gray-800">
                    About <span className="text-blue-500">ResumeRun</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                    ResumeRun was created to simplify the job application process. With AI-driven automation, customizable resumes, and a user-friendly interface, we aim to help job seekers land their ideal roles effortlessly. 
                </p>
            </div>

            {/* Mission Section */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Mission</h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                    Our mission is to empower job seekers with cutting-edge tools that automate and streamline the job search process. We believe that finding the right job should be simple and accessible to everyone, regardless of experience or background. 
                </p>
            </div>

            {/* Team Section */}
            <div className="my-20 bg-gray-100 py-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meet the Team</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex flex-col items-center text-center">
                        <img src="team-member-1.png" alt="Serenfant Setoute" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700">Serenfant Setoute</h3>
                        <p className="text-gray-600">Founder & Lead Developer</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="team-member-2.png" alt="Jane Doe" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700">Jane Doe</h3>
                        <p className="text-gray-600">Product Designer</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="team-member-3.png" alt="John Smith" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700">John Smith</h3>
                        <p className="text-gray-600">Marketing Specialist</p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Vision</h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                    We envision a future where technology bridges the gap between job seekers and employers, creating a seamless, efficient, and personalized job search experience. ResumeRun is committed to continuously innovating to meet the evolving needs of the modern workforce.
                </p>
            </div>

            {/* Values Section */}
            <div className="my-20 bg-gray-100 py-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Innovation</h3>
                        <p className="text-gray-600">We constantly seek out new ways to improve and innovate, ensuring that our users have access to the latest and most effective tools.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Integrity</h3>
                        <p className="text-gray-600">We operate with the highest standards of integrity, always prioritizing the needs and privacy of our users.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">User-Centric Design</h3>
                        <p className="text-gray-600">Our users are at the heart of everything we do. We design our products with the end user in mind, ensuring a seamless and enjoyable experience.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="my-20 text-center">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Join Us on Our Journey</h2>
                <p className="text-xl text-gray-600 mb-10">We're always looking for talented individuals to join our team. If you're passionate about technology and want to make a difference in the job search industry, we'd love to hear from you.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">See Open Positions</button>
            </div>
        </div>        </Fragment>
    )
}