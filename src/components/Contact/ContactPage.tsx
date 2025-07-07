'use client';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/ZodSchema/ContactSchema";
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import FormInput from '@/components/Contact/FormInput';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
    });

    const onSubmit = async () => {
        await new Promise((res) => setTimeout(res, 800));
        setIsSubmitted(true);
        reset();
        alert('Message sent! Thank you for contacting Car Blog.');
    };

    if (isSubmitted) {
        return (
            <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
                <div className="max-w-2xl mx-auto text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">Message Sent Successfully!</h1>
                    <p className="text-gray-600 mb-6">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#E74C3C] text-white px-6 py-3 rounded-lg hover:bg-[#C0392B] transition-colors duration-200"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl md:h-screen mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#F8F9FA]">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Have a question or want to share your thoughts? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Get in Touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-[#E74C3C]" />
                                <span className="text-gray-700">thakurrishav308@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-[#E74C3C]" />
                                <span className="text-gray-700">+91 8580838847</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-[#E74C3C]" />
                                <span className="text-gray-700">Car Market, Shimla 171206</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-xl p-6">
                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">Office Hours</h3>
                        <div className="space-y-2 text-gray-700">
                            <div className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 AM - 1:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="Name"
                                type="text"
                                {...register("name")}
                                error={errors.name?.message}
                                required
                            />
                            <FormInput
                                label="Email"
                                type="email"
                                {...register("email")}
                                error={errors.email?.message}
                                required
                            />
                        </div>
                        <FormInput
                            label="Subject"
                            type="text"
                            {...register("subject")}
                            error={errors.subject?.message}
                            required
                        />
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                                    }`}
                                required
                            />
                            {errors.message && (
                                <p className="text-sm text-red-600">{errors.message.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#E74C3C] text-white py-3 px-6 rounded-lg hover:bg-[#C0392B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="h-5 w-5 mr-2" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
