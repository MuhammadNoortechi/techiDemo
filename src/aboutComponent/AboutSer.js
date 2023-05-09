import React from 'react'
import "./scss/AboutSer.scss"
import user from "../assets/user.png"
import circle from "../assets/circle.png"
import media from "../assets/media.png"
const AboutSer = () => {
  return (
    <>
   <div className="bg-About">
   
    <div className="container pt-5">
    <div className="d-flex justify-content-center">
        <div className="mm">
        <div className="fs-1 about-heading">technologynsolutions to help businesses <br /> and socities flourish</div>
        <div className='p-about pt-4'>Techilab is a privately owned IT Support and IT Services business. Today we’re proud to boast a strong <br /> team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your <br /> business needs.</div>
    </div>
   
    </div>
    {/* //// */}
    
    </div>
   </div>
   <section className='section-about-card'>
   <div className="container row-ser">
   
     <div className="row pt-5 ">
       <div className="column">
         <div className="card ">
           <h2 className='text-white'>What we do ?</h2>
           <div className="icon-wrapper">
             <img src={media} alt="" style={{ width: "63px" }} />
           </div>
           <p className='pt-4'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quisquam consequatur necessitatibus eaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quisquam consequatur necessitatibus eaque
           </p>
           <div className='fs-4 text-white'>View Our Services</div>
           
         </div>
       </div>
       <div className="column">
         <div className="card">
         <h2 className='text-white'>What we help ?</h2>
           <div className="icon-wrapper">
             <img src={user} alt="" style={{ width: "63px" }} />
           </div>
           <p className='pt-4'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quisquam consequatur necessitatibus eaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quisquam consequatur necessitatibus eaque
           </p>
           <div className='fs-4 text-white'>Industries We Serve</div>
          
         </div>
       </div>
     
       <div className="column">
         <div className="card">
         <h2 className='text-white'>Why choose us ?</h2>
           <div className="icon-wrapper">
             <img src={circle} alt="" style={{ width: "63px" }} />
           </div>
           <p className='pt-4'>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quisquam consequatur necessitatibus eaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quisquam consequatur necessitatibus eaque
           </p>
           <div className='fs-4 text-white'>View Our Services</div>
           
         </div>
       </div>
     </div>
   </div>
 </section>
 </>
  )
}

export default AboutSer