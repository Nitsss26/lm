import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Phone, Mail, MapPin, Clock, Send,
    CheckCircle2, AlertCircle, FileText
} from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        class: '',
        message: ''
    })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')
        // Simulate API call
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', phone: '', email: '', class: '', message: '' })
            setTimeout(() => setStatus(null), 5000)
        }, 1500)
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-primary-700 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Contact Us</h1>
                    <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                        We are here to answer your questions. Reach out to us for admissions, inquiries, or support.
                    </p>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {/* Contact Cards */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center">
                            <div className="w-14 h-14 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                                <Phone size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Call Us</h3>
                            <p className="text-slate-500 text-sm mb-4">Mon-Sat from 8:30am to 3:00pm</p>
                            <a href="tel:08859431431" className="text-primary-600 font-bold hover:underline">08859431431</a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center">
                            <div className="w-14 h-14 mx-auto bg-secondary-50 rounded-full flex items-center justify-center text-secondary-600 mb-6">
                                <Mail size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Email Us</h3>
                            <p className="text-slate-500 text-sm mb-4">We reply within 24 hours</p>
                            <a href="mailto:l.m.e.a.kakore@gmail.com" className="text-secondary-600 font-bold hover:underline">l.m.e.a.kakore@gmail.com</a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center">
                            <div className="w-14 h-14 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Visit Us</h3>
                            <p className="text-slate-500 text-sm mb-4">Sikandrabad Road, Kakore</p>
                            <a href="https://maps.google.com/?q=Sikandrabad+Road+Kakore+Bulandshahr" target="_blank" className="text-green-600 font-bold hover:underline">View on Map</a>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Inquiry Form - Premium Design */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary-900/5 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">Send an Inquiry</h2>
                                <p className="text-slate-500">Fill out the form below and our admissions team will get back to you.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Student Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-medium"
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-medium"
                                            placeholder="10-digit number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-medium"
                                        placeholder="parent@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Grade Applying For</label>
                                    <div className="relative">
                                        <select
                                            name="class"
                                            value={formData.class}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a Grade</option>
                                            {['Nursery', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th (Science)', '11th (Commerce)', '11th (Arts)'].map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-medium resize-none"
                                        placeholder="Any specific queries or requirements?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-secondary-500/30 flex items-center justify-center gap-3 disabled:opacity-70 transform active:scale-[0.98]"
                                >
                                    {status === 'sending' ? (
                                        <span>Sending Inquiry...</span>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle2 size={24} />
                                            <span>Inquiry Sent Successfully!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={24} />
                                            <span>Submit Application</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Map & Info */}
                        <div className="space-y-8">
                            {/* Fixed Map Container */}
                            <div className="bg-white p-3 rounded-3xl shadow-xl shadow-slate-200 border border-white h-[400px] relative z-0">
                                <iframe
                                    title="School Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.208182749509!2d77.74797170881192!3d28.42398516010074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9b0e27f67751%3A0xe5a3c89b25f462a8!2sL.M.%20Educational%20Academy!5e0!3m2!1sen!2sin!4v1709228000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '1rem' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="bg-gradient-to-br from-primary-500 to-primary-500 text-white rounded-3xl p-8 border border-primary-600 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
                                <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                                    <FileText size={28} className="text-secondary-400" />
                                    Documents Required
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        'Birth Certificate (Original & Copy)',
                                        'Transfer Certificate (Original)',
                                        'Passport size photographs (4 copies)',
                                        'Aadhar Card / ID Proof of Parent',
                                        'Previous Year Report Card'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/5">
                                            <CheckCircle2 size={20} className="text-secondary-400 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
