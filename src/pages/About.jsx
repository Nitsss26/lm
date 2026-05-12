import { motion } from 'framer-motion'
import {
    GraduationCap, Target, Eye, Award, Users, BookOpen,
    MapPin, Calendar, Star, CheckCircle2, FileText, Download, Quote
} from 'lucide-react'

const About = () => {
    const values = [
        { icon: GraduationCap, title: 'Academic Excellence', desc: 'Rigorous curriculum designed to challenge and inspire.' },
        { icon: Target, title: 'Character Building', desc: 'Focus on moral values, discipline, and ethics.' },
        { icon: Users, title: 'Inclusivity', desc: 'A welcoming environment for students from all backgrounds.' },
        { icon: Award, title: 'Holistic Growth', desc: 'Equal emphasis on sports, arts, and extra-curriculars.' },
    ]

    const documents = [
        { title: 'Academic Calendar 2026-27', file: 'Academic Calendar.pdf' },
        { title: 'CBSE Affiliation Letter', file: 'Affiliation.pdf' },
        { title: 'School Curriculum', file: 'Curriculum.pdf' },
        { title: 'Fee Structure 2026-27', file: 'Fee Structure.pdf' },
        { title: 'School Management Committee (SMC)', file: 'SMC.pdf' },
        { title: 'State NOC', file: 'State NOC.pdf' },
        { title: 'UP State Recognition (Class 8th)', file: 'affiliation letter up state 8th class .pdf' },
        { title: 'CBSE Grant Letter', file: 'cbse Grant Letter.pdf' },
        { title: 'Fire Safety Certificate', file: 'fire noc.pdf' },
        { title: 'Society Registration', file: 'verma siksha samiti registration.pdf' },
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

            {/* Founder's Message */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-5 gap-16 items-center">
                        {/* Founder Image Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="relative group">
                                {/* Decorative frame */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-secondary-200 rounded-[2.5rem] opacity-20 group-hover:opacity-30 transition-opacity blur-sm"></div>

                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                                    <img
                                        src="/founder.jpg"
                                        alt="Founder"
                                        className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </div>

                                <div className="mt-8 text-center lg:text-left pl-2">
                                    <h4 className="text-2xl font-bold text-slate-900 font-display">Founder's Message</h4>
                                    <p className="text-primary-600 font-semibold tracking-wide uppercase text-sm mt-1">L.M. Educational Academy</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Message Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="relative">
                                {/* Header with Quote */}
                                <div className="flex items-start gap-4 mb-8">
                                    <Quote size={48} className="text-primary-100 flex-shrink-0 mt-1" />
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                                            Shaping <span className="text-primary-600">Bright Futures</span> Together
                                        </h2>
                                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Message Block */}
                                <div className="relative">
                                    <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light italic">
                                        <p>
                                            "Welcome to L.M. Educational Academy. We want to give every child a good education and help them learn good values. We believe that every student has talent and we are here to help them succeed in life."
                                        </p>
                                        <p>
                                            "We focus on both studies and good behavior so that our students become responsible citizens. Thank you for trusting us with your child's future."
                                        </p>
                                    </div>

                                    {/* Bottom Quote */}
                                    <div className="flex justify-end -mt-4">
                                        <Quote size={48} className="text-primary-100 rotate-180" />
                                    </div>

                                    {/* <div className="pt-8 flex items-center gap-4">
                                        <div className="h-px w-12 bg-primary-200"></div>
                                        <span className="text-slate-900 font-bold tracking-widest uppercase text-sm">Founder</span>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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

            {/* Mandatory Public Disclosure */}
            <section id="disclosure" className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-primary-600 font-bold uppercase tracking-wider text-sm">Compliance</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 font-display">Mandatory Public Disclosure</h2>
                            <p className="text-slate-600 mt-2">As per CBSE requirements and school transparency guidelines.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {documents.map((doc, idx) => (
                            <motion.a
                                key={idx}
                                href={`/documents/${doc.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        <FileText size={20} />
                                    </div>
                                    <span className="font-medium text-slate-700 text-sm">{doc.title}</span>
                                </div>
                                <Download size={18} className="text-slate-400 group-hover:text-primary-600 transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
