import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-300 h-1/2 w-full flex md:flex-row flex-col justify-around items-start text-center">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Wyse<span className="text-red-600">Time</span>
						</p>
						<div className="flex justify-center gap-6 pb-5">
						<a href="https://www.instagram.com/wysetime/" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer hover:text-yellow-600">
							<FaInstagram />
						</a>
						<a href="https://www.facebook.com/wysetime/?locale=eo_EO" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer hover:text-blue-600">
							<FaTwitter />
						</a>
						<a href="https://www.linkedin.com/company/wysetime/about/" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer hover:text-blue-600">
							<FaLinkedin />
						</a>
						</div>
					</ul>
					<div className="text-gray-800 pb-6">
						<p>
							12 (First Floor), Jalan Lembah Permai 1, Taman Lembah Permai, 14000 Bukit Mertajam, Pulau Pinang
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-300">
				<h1 className=" text-gray-800 font-semibold">
					© 2024 WyseTime Technologies All rights reserved
				</h1>
			</div>
		</>
	);
}

export default Footer;