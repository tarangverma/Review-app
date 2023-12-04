import React from 'react'
import Collapsible from 'react-collapsible';

function Services() {
  return (
    <div className=' mt-[8rem]'>
        <div className='flex flex-row'>
            <div className='flex realtive w-[40%]'>
                <h2 className='text-[70px] origin-center rotate-90  font-tarang'>/Services</h2>
                <div className='absolute left-[-87px] origin-center rotate-90'>
                <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b792e8d4bc082efaec4b5d_butterfly-p-500.webp" 
                loading="lazy" alt="" class="butterfly-img"></img>
                </div>
            </div>
            <div className='flex flex-col w-[60%]'>
                <h2 className='text-[20px] font-tarang2'>Engage your customers on the platforms they Love.</h2>
                <h2 className='text-[20px] font-tarang2'>Website or Apps - we have you covered.</h2>
                <div className='mt-[1rem]'>
                <Collapsible className='p-[30px] border-t-[1px] border-black rounded-[80px] text-[30px]' trigger="UI / UX Design">
                <div className='p-[30px] border-t-[1px] border-black  rounded-[80px]'><h1 className='text-[15px] '>Exceptional user experience is vital for designing great products. Be it for a website, app.
                 We create seamless digital products for our customers</h1></div>   
                </Collapsible>
                <Collapsible className='p-[30px] border-t-[1px] border-black rounded-[80px] text-[30px]' trigger="Creative Design / Development">
                <div className='p-[30px] border-t-[1px] border-black rounded-[80px]'><h1 className='text-[15px] '>We work at intersection of art, design & technology. Our goal is to deliver amazing experiences that make people talk,
                 & build strategic value for brands, tech, entertainment, arts & culture</h1></div>   
                </Collapsible>
                <Collapsible className='p-[30px] border-t-[1px] border-black rounded-[80px] text-[30px]' trigger="Webflow & Wordpress Development">
                <div className='p-[30px] border-t-[1px] border-black rounded-[80px]'><h1 className='text-[15px] '></h1>A website can't just be a catalog. We understand needs of fast pace marketing/GTM teams. 75+ organisations have trusted us 
                for creating high quality websites for them</div>   
                </Collapsible>
                <Collapsible className='p-[30px] border-t-[1px] border-black rounded-[80px] text-[30px]' trigger="No-Code/SaaS development">
                <div className='p-[30px] border-t-[1px] border-black rounded-[80px]'><h1 className='text-[15px] '>We leverage the power of no-code/low-code tools like Bubble.io, FlutterFlow & Webflow
                 to build your apps 10X faster than traditional coders.</h1></div>   
                </Collapsible>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services