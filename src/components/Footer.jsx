import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full p-1">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight">L.M. Educational<br />Academy</h3>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
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

                    {/* Mandatory Disclosure */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Mandatory Disclosure</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Fee Structure', file: 'Fee Structure.pdf' },
                                { name: 'Academic Calendar', file: 'Academic Calendar.pdf' },
                                { name: 'CBSE Affiliation', file: 'Affiliation.pdf' },
                                { name: 'Fire Safety', file: 'fire noc.pdf' },
                            ].map((doc) => (
                                <li key={doc.name}>
                                    <a 
                                        href={`/documents/${doc.file}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <ExternalLink size={12} className="text-slate-600 group-hover:text-primary-500" />
                                        {doc.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link to="/about#disclosure" className="text-sm text-primary-500 hover:text-primary-400 font-medium mt-2 inline-block">
                                    View All Documents →
                                </Link>
                            </li>
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
                                <span>08859431431</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="text-primary-500 shrink-0" size={16} />
                                <span className="truncate">l.m.e.a.kakore@gmail.com</span>
                            </li>
                        </ul>
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
