// const projects = await getProjects();

// <div className="max-w-5xl mx-auto text-black">
// <h1 className='text-7xl font-extrabold'>WyseTime Technologies</h1>

// <h2 className='text-3xl font-bold py-10'>Test</h2>

// <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
// {projects.map((project) => (
//   <div key={project._id} className='border border-grey-500 rounded-lg'>
//     {project.image && (
//       <Image
//       src={project.image}
//       alt={project.name}
//       width={250}
//       height={100}
//       className="object-cover rounded-lg border border-gray-500"
//       /> 
//     )}
//     {project.name}
//   </div>
// ))}
// </div>
// </div>

// {/* <div>
// {/* <ParticleBackground/> */}
// {/* <Parallax pages={5} className="animation">
//   {/* Page 1 */}
//   <ParallaxLayer offset={0} speed={2}>
//     <div className="animation_layer parallax" id=""></div>
//   </ParallaxLayer>

//   {/* Page 2 */}
//   <ParallaxLayer offset={1} speed={0.5}>
//     <AboutWyseTime />
//   </ParallaxLayer>

//   {/* Page 3 */}
//   <ParallaxLayer offset={1} speed={1}>
//     <h1 className='text-black text-7xl font-extrabold text-center' style={{ marginTop: 'calc(50vh - 3.5rem)' }}>Our Services</h1>
//   </ParallaxLayer>

//   {/* Page 4 */}
//   <ParallaxLayer offset={1.5} speed={1}>
//     <h1 className='text-black text-7xl font-extrabold text-center' style={{ marginTop: 'calc(50vh - 3.5rem)' }}>Quotes</h1>
//   </ParallaxLayer>

//   {/* Page 5 */}
//   <ParallaxLayer offset={2} speed={1}>
//     <h1 className='text-black text-center' style={{ marginTop: 'calc(50vh - 1.5rem)' }}>Our Partners</h1>
//   </ParallaxLayer>
// </Parallax> */}
// </div> */}

        {/* <Parallax pages={4}>
          <ParallaxLayer speed={0.5}>
          <HeroWyseTime/> 
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
          <AboutWyseTime/> 
          </ParallaxLayer>
          
          <ParallaxLayer offset={2} speed={0.5}>
          <ServicesWyseTime/> 
          <QuoteComponent quotes={quotes}/> 
          <OurPartners partners={partners}/>
          </ParallaxLayer>

          <ParallaxLayer offset={3.5} speed={0.5}>
          <Footer/>
          </ParallaxLayer>

          <ParallaxLayer offset={3.5} speed={0.5}>
          <OurPartners/> 
          </ParallaxLayer>
        </Parallax> */}


        // import React from "react";
        // import { FaInstagram } from "react-icons/fa";
        // import { FaTwitter } from "react-icons/fa";
        // import { FaLinkedin } from "react-icons/fa";
        // import { FaYoutube } from "react-icons/fa";
        
        // function Footer() {
        //   return (
        //     <>
        //       <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        //         <div className="p-5 ">
        //           <ul>
        //             <p className="text-gray-800 font-bold text-3xl pb-6">
        //               Stream<span className="text-blue-600">line</span>
        //             </p>
        //             <div className="flex gap-6 pb-5">
        //               <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
        //               <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
        //               <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
        //             </div>
        //           </ul>
        //         </div>
        //         <div className="p-5">
        //           <ul>
        //             <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Stocks
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Futures & Options
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Mutual Funds
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Fixed deposits
        //             </li>
        //           </ul>
        //         </div>
        //         <div className="p-5">
        //           <ul>
        //             <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               About
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Products
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Pricing
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Careers
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Press & Media
        //             </li>
        //           </ul>
        //         </div>
        //         <div className="p-5">
        //           <ul>
        //             <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Contact
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Support Portals
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               List Of Charges
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Downloads & Resources
        //             </li>
        //             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        //               Videos
        //             </li>
        //           </ul>
        //         </div>
        //       </div>
        //       <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        //         <h1 className=" text-gray-800 font-semibold">
        //           © 2021-2022 All rights reserved | Build with ❤ by{" "}
        //           <span className="hover:text-blue-600 font-semibold cursor-pointer">
        //             streamline{" "}
        //           </span>
        //         </h1>
        //       </div>
        //     </>
        //   );
        // }
        
        // export default Footer;