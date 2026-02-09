import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <>
            {/* Top Bar - Solid Professional Blue */}
            <div className="bg-primary-700 text-white py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <a href="tel:08859431431" className="flex items-center gap-2 hover:text-secondary-400 transition-colors">
                            <Phone size={14} />
                            <span>08859431431</span>
                        </a>
                        <a href="mailto:l.m.e.a.kakore@gmail.com" className="flex items-center gap-2 hover:text-secondary-400 transition-colors">
                            <Mail size={14} />
                            <span>l.m.e.a.kakore@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2 opacity-90">
                        <MapPin size={14} />
                        <span>Sikandrabad Road, Kakore (U.P.)</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-md py-2'
                        : 'bg-white py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo Section */}
                        <Link to="/" className="flex items-center gap-4 group">
                            <div className="relative overflow-hidden w-16 h-16 rounded-full shadow-lg border-2 border-primary-50">
                                <img
                                    src="/logo.png"
                                    alt="LMEA Logo"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold logo-gradient tracking-tight">
                                    L.M. Educational Academy
                                </h1>
                                <span className="text-sm text-gray-500 font-medium tracking-wide">
                                    Senior Secondary School, Kakore
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-semibold tracking-wide transition-all hover:text-primary-600 ${location.pathname === link.path
                                            ? 'text-primary-600'
                                            : 'text-gray-600'
                                        }`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-line"
                                            className="h-0.5 bg-primary-600 mt-1 rounded-full"
                                        />
                                    )}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="px-6 py-2.5 bg-secondary-500 hover:bg-secondary-600 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-secondary-500/30 transition-all transform hover:-translate-y-0.5"
                            >
                                Admissions Open
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl font-medium ${location.pathname === link.path
                                                ? 'bg-primary-50 text-primary-700'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center py-3 bg-secondary-500 text-white font-bold rounded-xl"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default Navbar
