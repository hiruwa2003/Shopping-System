import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
	FaEnvelope,
	FaPhoneAlt,
	FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">
			<div className="mx-auto max-w-7xl px-6 py-12">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-[2px]">
								<div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
									<img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-full" />
								</div>
							</div>
							<div>
								<h2 className="text-xl font-bold">
									Ceylon<span className="text-orange-400">Cart</span>
								</h2>
								<p className="text-xs text-gray-400">Style, comfort, and value.</p>
							</div>
						</div>
						<p className="text-sm text-gray-400">
							Discover premium clothing with fast delivery and trusted quality.
						</p>
						<div className="flex items-center gap-3">
							<a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition-colors">
								<FaFacebookF className="text-sm" />
							</a>
							<a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition-colors">
								<FaInstagram className="text-sm" />
							</a>
							<a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition-colors">
								<FaTwitter className="text-sm" />
							</a>
							<a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition-colors">
								<FaLinkedinIn className="text-sm" />
							</a>
						</div>
					</div>

					{/* Links */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
							Quick Links
						</h3>
						<ul className="mt-4 space-y-2 text-sm text-gray-400">
							<li><a className="hover:text-white transition-colors" href="/user-home">Home</a></li>
							<li><a className="hover:text-white transition-colors" href="/collection">Collection</a></li>
							<li><a className="hover:text-white transition-colors" href="/about">About</a></li>
							<li><a className="hover:text-white transition-colors" href="/contact">Contact</a></li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
							Support
						</h3>
						<ul className="mt-4 space-y-2 text-sm text-gray-400">
							<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
							<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
							<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
							<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
						</ul>
					</div>

					{/* Contact + Newsletter */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
							Contact
						</h3>
						<ul className="mt-4 space-y-3 text-sm text-gray-400">
							<li className="flex items-start gap-3">
								<FaMapMarkerAlt className="mt-1 text-orange-400" />
								<span>Colombo, Sri Lanka</span>
							</li>
							<li className="flex items-center gap-3">
								<FaPhoneAlt className="text-orange-400" />
								<a className="hover:text-white transition-colors" href="tel:+94776957704">(+94) 77 695 7704</a>
							</li>
							<li className="flex items-center gap-3">
								<FaEnvelope className="text-orange-400" />
								<a className="hover:text-white transition-colors" href="mailto:hirushadilshan890@gmail.com">hirushadilshan890@gmail.com</a>
							</li>
						</ul>

						<div className="mt-5">
							<p className="text-xs text-gray-400">Subscribe for updates</p>
							<div className="mt-2 flex overflow-hidden rounded-lg border border-slate-700">
								<input
									type="email"
									placeholder="Your email"
									className="w-full bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
								/>
								<button className="bg-orange-500 px-4 text-sm font-medium hover:bg-orange-600">
									Join
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-gray-400 md:flex-row">
					<span>© {currentYear} CeylonCart. All rights reserved.</span>
					<div className="flex items-center gap-4">
						<a href="#" className="hover:text-white transition-colors">Terms</a>
						<a href="#" className="hover:text-white transition-colors">Privacy</a>
						<a href="#" className="hover:text-white transition-colors">Cookies</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
