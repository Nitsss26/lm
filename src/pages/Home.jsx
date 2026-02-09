import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    BookOpen, Users, Monitor, FlaskConical, Bus, Trophy,
    Smartphone, Bell, Calendar, FileText, CheckCircle2, ArrowRight
} from 'lucide-react'

const Home = () => {
    const features = [
        { icon: Users, title: 'Expert Faculty', desc: 'Highly qualified and experienced teachers dedicated to student success.' },
        { icon: Monitor, title: 'Digital Labs', desc: 'State-of-the-art computer labs with high-speed internet connectivity.' },
        { icon: FlaskConical, title: 'Science Labs', desc: 'Modern Physics, Chemistry, and Biology labs for practical learning.' },
        { icon: BookOpen, title: 'Smart Classes', desc: 'Interactive smart classrooms equipped with latest educational tech.' },
        { icon: Bus, title: 'Transport', desc: 'Safe and secure transport facility covering all nearby areas.' },
        { icon: Trophy, title: 'Sports Area', desc: 'Expansive playground for holistic physical development.' },
    ]

    const smartAppFeatures = [
        { icon: Calendar, title: 'Daily Attendance', desc: 'Real-time attendance tracking and notifications for parents.' },
        { icon: FileText, title: 'Homework & Results', desc: 'Access daily homework assignments and exam results instantly.' },
        { icon: Bell, title: 'School Updates', desc: 'Get important notices, event alerts, and circulars on your phone.' },
        { icon: Smartphone, title: 'Messaging', desc: 'Direct communication channel between parents and teachers.' },
    ]

    return (
        <div>
            {/* Hero Section - Professional & Clean */}
            <section className="relative bg-white pt-8 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 px-4 py-2 rounded-full mb-6 text-primary-700 font-medium text-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
                                </span>
                                Admissions Open for 2026-27
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 font-display">
                                Shaping Minds, <br />
                                <span className="text-primary-600">
                                    Building Futures
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                L.M. Educational Academy provides world-class education with a focus on holistic development,
                                blending traditional values with modern methodology.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-xl shadow-lg shadow-secondary-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                >
                                    Apply for Admission
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-secondary-500 hover:text-secondary-600 transition-all"
                                >
                                    Explore Campus
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-8 text-sm font-semibold text-slate-500">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-accent-green" size={18} />
                                    <span>CBSE Affiliated</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-accent-green" size={18} />
                                    <span>English Medium</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-accent-green" size={18} />
                                    <span>Nursery - 11th</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Image - Zoomed Out / Full View */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-50 to-transparent rounded-full blur-3xl -z-10"></div>

                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/school-gate.jpg"
                                    alt="LMEA School Building"
                                    className="w-full h-auto object-contain bg-slate-100" // Changed for better visibility
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
                                    }}
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow max-w-xs">
                                <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center text-secondary-600 font-bold text-xl">
                                    15+
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold">Years of Excellence</p>
                                    <p className="text-xs text-slate-500">Serving the community</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Smart App Section - NEW */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-900/50 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary-400 font-bold tracking-wider uppercase text-sm">Technology Enabled Learning</span>
                        <h2 className="text-4xl font-bold mt-2">Smart School App for Parents</h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                            Stay connected with your child's academic progress. Our dedicated mobile app brings the classroom to your fingertips.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {smartAppFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <feature.icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Salient Features - 3D Icons */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary-600 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2">World-Class Facilities</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            We provide a comprehensive learning environment with top-tier infrastructure and support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { icon: Users, title: 'Expert Faculty', desc: 'Well qualified and experienced teachers.' },
                            { icon: Monitor, title: 'Computer Lab', desc: 'Modern lab with high-speed internet facility.' },
                            { icon: FlaskConical, title: 'Science Labs', desc: 'Well equipped Physics, Chemistry, Maths & Social Science labs.' },
                            { icon: BookOpen, title: 'Smart Classes', desc: 'Interactive smart classrooms with projectors.' },
                            { icon: BookOpen, title: 'Library', desc: 'Well stocked library for students.' },
                            { icon: CheckCircle2, title: 'RO Water', desc: 'Fresh and hygienic RO water points.' },
                            { icon: Monitor, title: 'CCTV Secure', desc: 'School campus under 24x7 CCTV surveillance.' },
                            { icon: Trophy, title: 'Extra Classes', desc: 'Available for interested students.' },
                            { icon: Bus, title: 'Transport', desc: 'Transport facility is available for all routes.' },
                            { icon: CheckCircle2, title: 'Supervision', desc: 'Proper inspection and cross checking.' },
                            { icon: Trophy, title: 'Sports & Games', desc: 'Indoor and outdoor games with big playground.' },
                            { icon: Users, title: 'Cultural Activities', desc: 'Programs for personality development.' },
                            { icon: Users, title: 'School Guide', desc: 'School guide facilities also available.' },
                            { icon: CheckCircle2, title: 'Medical Aid', desc: 'Proper first aid and medical facilities.' },
                            { icon: Trophy, title: 'Scholarships', desc: 'Merit-based scholarships for toppers.' },
                            { icon: Monitor, title: 'Parent Portal', desc: 'Online portal for tracking progress.' },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="pro-card p-6 group"
                            >
                                <div className="icon-box-3d w-12 h-12 mb-4 text-primary-600">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Message - Professional Layout */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-12 bg-secondary-500"></span>
                                    <span className="text-secondary-600 font-bold uppercase text-sm tracking-wider">Leadership Message</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                                    Inspiring Excellence, <br />
                                    Nuturing Character
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    "At L.M. Educational Academy, we strive to create an environment where every student is empowered to dream big and achieve their goals. Our focus goes beyond textbooks – we build character, instill values, and prepare leaders for tomorrow."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">School Management</h4>
                                        <p className="text-slate-500 text-sm">L.M. Educational Academy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary-600 rounded-2xl rotate-3 opacity-10"></div>
                                    <img
                                        src="/event.jpg"
                                        alt="School Leadership"
                                        className="relative rounded-2xl shadow-xl w-full object-cover transform transition-transform hover:scale-[1.02]"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80' // Professional placeholder if missing
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission CTA */}
            <section className="py-20 bg-primary-700 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
                        Join the L.M. Educational Academy family and give your child the best foundation for their future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                        >
                            Apply Now
                        </Link>
                        <a
                            href="tel:08859431431"
                            className="px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
                        >
                            Call 08859431431
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
