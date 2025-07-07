import Layout from '@/layout/Layout';
import { Car, Users, Award, Target } from 'lucide-react';


export default function About() {
    const stats = [
        { label: 'EVs Reviewed', value: '120+' },
        { label: 'Car Tech Features Analyzed', value: '300+' },
        { label: 'Monthly Readers', value: '15K+' },
        { label: 'Industry Reports Published', value: '40+' },
    ];

    const team = [
        {
            name: 'Rishab Thakur',
            role: 'EV Specialist',
            description: 'Expert in electric vehicle trends, battery technology, and global EV adoption, with a focus on emerging markets and sustainability.',
        },
        {
            name: 'Ritesh Chauhan',
            role: 'Automotive Technology Editor',
            description: 'Covers software-defined vehicles, in-car connectivity, and the impact of AI on automotive innovation.',
        },
        {
            name: 'Akshit Thakur',
            role: 'Market Analyst',
            description: 'Tracks global production trends, tariff impacts, and consumer buying behavior in the rapidly evolving auto industry.',
        },
    ];

    return (
        <Layout>
            <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#F8F9FA]">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
                        About Car Blogify
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We're passionate automotive enthusiasts dedicated to bringing you the most comprehensive
                        and honest car reviews, news, and insights from the automotive world.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-[#E74C3C] mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Our Mission</h2>
                            <p className="text-gray-700 mb-4">
                                At car Blogify, we know that finding the perfect car is a major decision for any driver. As your trusted online car blog, we’re dedicated to bringing you in-depth, impartial reviews and comprehensive guides to support your car-buying journey.
                            </p>
                            <p className="text-gray-700">
                                Our passionate team of automotive writers and reviewers puts every vehicle through its paces—from practical daily drivers to cutting-edge supercars—so you can count on CarBlog for the most reliable, up-to-date, and useful information in the automotive world.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-[#F8F9FA] rounded-lg p-8 text-center">
                                <Car className="h-16 w-16 text-[#E74C3C] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                                    Honest Reviews
                                </h3>
                                <p className="text-gray-600">
                                    We provide unbiased, detailed reviews to help you make the best choice
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <Target className="h-12 w-12 text-[#E74C3C] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Accuracy</h3>
                        <p className="text-gray-600">
                            We fact-check every detail and provide accurate specifications and pricing information.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <Users className="h-12 w-12 text-[#E74C3C] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Community</h3>
                        <p className="text-gray-600">
                            We foster a community of car enthusiasts who share knowledge and experiences.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <Award className="h-12 w-12 text-[#E74C3C] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Excellence</h3>
                        <p className="text-gray-600">
                            We strive for excellence in every review, guide, and piece of content we create.
                        </p>
                    </div>
                </div>

                {/* Team */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-[#E74C3C] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{member.name}</h3>
                                <p className="text-[#E74C3C] font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}