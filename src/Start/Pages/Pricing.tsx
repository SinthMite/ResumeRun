export function Pricing() {
    return (
        <div className="mt-20 px-4">
            {/* Introduction Section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">
                    Choose the Plan That's Right for You
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Whether you're just starting out or you're a seasoned job seeker, ResumeRun has a plan that fits your needs. Explore our pricing options and find the perfect plan to help you land your next role.
                </p>
            </div>

            {/* Pricing Tiers */}
            <div className="my-20 flex flex-col md:flex-row justify-center gap-8">
                {/* Free Plan */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-bold text-gray-700 mb-4">Free Plan</h3>
                    <p className="text-xl text-gray-600 mb-8">Get started with the basics.</p>
                    <ul className="text-left text-gray-600 mb-8">
                        <li className="mb-4">✔️ Automated Job Applications (Limited)</li>
                        <li className="mb-4">✔️ Basic Resume Customization</li>
                        <li className="mb-4">✔️ Job Tracking Dashboard (Limited)</li>
                    </ul>
                    <p className="text-2xl font-semibold text-gray-800 mb-8">$0/month</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
                        Get Started
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-bold text-gray-700 mb-4">Pro Plan</h3>
                    <p className="text-xl text-gray-600 mb-8">Unlock advanced features.</p>
                    <ul className="text-left text-gray-600 mb-8">
                        <li className="mb-4">✔️ Unlimited Automated Job Applications</li>
                        <li className="mb-4">✔️ Advanced Resume Customization</li>
                        <li className="mb-4">✔️ Full Job Tracking Dashboard</li>
                        <li className="mb-4">✔️ Priority Email Support</li>
                    </ul>
                    <p className="text-2xl font-semibold text-gray-800 mb-8">$19.99/month</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
                        Upgrade Now
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-bold text-gray-700 mb-4">Premium Plan</h3>
                    <p className="text-xl text-gray-600 mb-8">Get the full experience.</p>
                    <ul className="text-left text-gray-600 mb-8">
                        <li className="mb-4">✔️ All Pro Plan Features</li>
                        <li className="mb-4">✔️ Dedicated Account Manager</li>
                        <li className="mb-4">✔️ Resume Review and Optimization</li>
                        <li className="mb-4">✔️ 24/7 Priority Support</li>
                    </ul>
                    <p className="text-2xl font-semibold text-gray-800 mb-8">$49.99/month</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
                        Go Premium
                    </button>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Compare Plans</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-700">Feature</th>
                                <th className="px-4 py-2 text-center text-gray-700">Free</th>
                                <th className="px-4 py-2 text-center text-gray-700">Pro</th>
                                <th className="px-4 py-2 text-center text-gray-700">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            <tr>
                                <td className="border px-4 py-2">Automated Job Applications</td>
                                <td className="border px-4 py-2 text-center">Limited</td>
                                <td className="border px-4 py-2 text-center">Unlimited</td>
                                <td className="border px-4 py-2 text-center">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Resume Customization</td>
                                <td className="border px-4 py-2 text-center">Basic</td>
                                <td className="border px-4 py-2 text-center">Advanced</td>
                                <td className="border px-4 py-2 text-center">Advanced + Review</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Job Tracking Dashboard</td>
                                <td className="border px-4 py-2 text-center">Limited</td>
                                <td className="border px-4 py-2 text-center">Full</td>
                                <td className="border px-4 py-2 text-center">Full</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Support</td>
                                <td className="border px-4 py-2 text-center">Standard</td>
                                <td className="border px-4 py-2 text-center">Priority Email</td>
                                <td className="border px-4 py-2 text-center">24/7 Priority</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Account Management</td>
                                <td className="border px-4 py-2 text-center">—</td>
                                <td className="border px-4 py-2 text-center">—</td>
                                <td className="border px-4 py-2 text-center">Dedicated Manager</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="my-20">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Users Say</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-gray-600">"The Pro Plan gave me all the tools I needed to streamline my job search. Highly recommend!"</p>
                        <p className="text-gray-800 font-semibold mt-4">- Alex M.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-gray-600">"I upgraded to Premium and the resume review service was a game changer. Landed my dream job in no time!"</p>
                        <p className="text-gray-800 font-semibold mt-4">- Jamie L.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="my-20 text-center">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 mb-10">
                    Choose the plan that suits your needs and start landing your dream job with ResumeRun today.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">
                    Get Started Now
                </button>
            </div>
        </div>
    );
}
