import { motion } from 'framer-motion'
import {
    GraduationCap, Target, Eye, Award, Users, BookOpen,
    MapPin, Calendar, Star, CheckCircle2
} from 'lucide-react'

const About = () => {
    const values = [
        { icon: GraduationCap, title: 'Academic Excellence', desc: 'Rigorous curriculum designed to challenge and inspire.' },
        { icon: Target, title: 'Character Building', desc: 'Focus on moral values, discipline, and ethics.' },
        { icon: Users, title: 'Inclusivity', desc: 'A welcoming environment for students from all backgrounds.' },
        { icon: Award, title: 'Holistic Growth', desc: 'Equal emphasis on sports, arts, and extra-curriculars.' },
    ]

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-primary-700 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">About Our Academy</h1>
                        <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                            Nurturing intellect and character since 2010. We are dedicated to shaping the future leaders of tomorrow.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Image Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <img
                                src="/event.jpg"
                                alt="School Event"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-[1.02] transition-transform"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80' }}
                            />
                            <img
                                src="/students.jpg"
                                alt="Students"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8 transform hover:scale-[1.02] transition-transform"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1427504743050-dad966142982?w=400&q=80' }}
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-bold mb-4">
                                Since 2010
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                                A Legacy of Educational Excellence
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    L.M. Educational Academy stands as a beacon of learning in Kakore, Bulandshahr.
                                    Affiliated with the CBSE Board, New Delhi (Affiliation No: 2133750), we encompass
                                    classes from Nursery to 11th Standard, offering streams in Science, Commerce, and Arts.
                                </p>
                                <p>
                                    Our campus is designed to be a second home for students, providing a safe, utilizing
                                    modern teaching aids and traditional wisdom. We believe that education is not just
                                    about academic grades but about building a strong character.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-primary-600 text-3xl">25+</h4>
                                    <p className="text-sm text-slate-500 font-medium">Qualified Teachers</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-primary-600 text-3xl">1000+</h4>
                                    <p className="text-sm text-slate-500 font-medium">Bright Students</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-primary-50 to-white p-10 rounded-3xl border border-primary-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-50"></div>
                            <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10 shadow-lg shadow-primary-600/20">
                                <Eye size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To evolve young minds into responsible citizens who can face the world with confidence and compassion.
                                We envision a future where every student realizes their full potential.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-secondary-50 to-white p-10 rounded-3xl border border-secondary-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-bl-full opacity-50"></div>
                            <div className="w-14 h-14 bg-secondary-500 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10 shadow-lg shadow-secondary-500/20">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To provide affordable quality education to all. We aim to create a learning environment
                                that fosters innovation, critical thinking, and a lifelong love for learning.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary-600 font-bold uppercase tracking-wider text-sm">Our Philosophy</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Core Values</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group"
                            >
                                <div className="w-12 h-12 mx-auto bg-slate-50 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <val.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                                <p className="text-sm text-slate-500">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
