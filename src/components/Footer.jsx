import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock, ExternalLink } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full p-1">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight">L.M. Educational<br />Academy</h3>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Empowering students with knowledge, values, and skills for a bright future.
                            CBSE Affiliated Senior Secondary School.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Admissions', path: '/contact' },
                                { name: 'Contact', path: '/contact' },
                                { name: 'Gallery', path: '/' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-primary-500 transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="text-primary-500 shrink-0 mt-0.5" size={16} />
                                <span>Sikandrabad Road, Near Shivalya Mandir, Kakore, Bulandshahr (U.P.)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone className="text-primary-500 shrink-0" size={16} />
                                <span>08859431431, 08859831831</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="text-primary-500 shrink-0" size={16} />
                                <span>l.m.e.a.kakore@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Clock className="text-primary-500 shrink-0" size={16} />
                                <span>Mon - Sat: 08:30 AM - 03:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Affiliation */}
                    <div className="bg-slate-800 rounded-2xl p-6 h-fit border border-slate-700">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span>CBSE Affiliated</span>
                            <ExternalLink size={14} className="text-primary-400" />
                        </h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-slate-700 pb-2">
                                <span className="text-slate-400">Affiliation No.</span>
                                <span className="font-mono text-white">2133750</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-700 pb-2">
                                <span className="text-slate-400">School Code</span>
                                <span className="font-mono text-white">61447</span>
                            </div>
                            <div className="pt-2">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Streams</span>
                                <div className="flex gap-2">
                                    {['Science', 'Commerce', 'Arts'].map(tag => (
                                        <span key={tag} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-slate-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} L.M. Educational Academy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
