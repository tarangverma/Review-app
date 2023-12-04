import React, { useState } from 'react'
import Brand from './Brand'

function Review() {

  const source = [
    <img className='rounded-[24px]' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b84254473886534c78bcc2_asis-panda-director-of-design-nova-benefits.webp" loading="lazy" width="350" height="310" alt="" 
        srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b84254473886534c78bcc2_asis-panda-director-of-design-nova-benefits-p-500.webp 500w,
        https://assets-global.website-files.com/6493e2c640a47641d704896f/64b84254473886534c78bcc2_asis-panda-director-of-design-nova-benefits.webp 600w"
        sizes="(max-width: 479px) 15.1171875px, 30.2421875px" class="customers-slider_img" /> ,
        <img className='rounded-[24px]' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b842a4488ee426e175b84f_636169075ea25ffb8f71f6fd_Paro.webp" 
        loading="lazy" width="350" height="310" alt="" class="customers-slider_img"></img> ,
        <img className='rounded-[24px]' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f41b3d7a05afc618d36aba_jay.webp" loading="lazy" width="350" height="310" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/64f41b3d7a05afc618d36aba_jay-p-500.webp 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/64f41b3d7a05afc618d36aba_jay.webp 534w" 
        sizes="(max-width: 479px) 15.1171875px, 30.2421875px" class="customers-slider_img"></img>  ,
        <img className='rounded-[24px]' src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b841c3f09f7f2c97243bbd_leon.webp" loading="lazy" width="350" height="310" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b841c3f09f7f2c97243bbd_leon-p-500.webp 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/64b841c3f09f7f2c97243bbd_leon.webp 800w" 
        sizes="(max-width: 479px) 15.1171875px, 30.2421875px" class="customers-slider_img"></img>  ,
  ]

  const name = [
    <h2 className='text-[30px] my-[2rem]'>ASIS PANDA</h2>,
    <h2 className='text-[30px] my-[2rem]'>Paromita Gupta</h2>,
    <h2 className='text-[30px] my-[2rem]'>Jay Magdani</h2>,
    <h2 className='text-[30px] my-[2rem]'>Leon Stern</h2>,
  ]

  const deg = [
    <h2 className='text-[20px] mb-[1rem]'>Director of Design, Nova Benefits</h2>,
    <h2 className='text-[20px] mb-[1rem]'>Head of Marketing &amp; Communications, 3one4 Capital</h2>,
    <h2 className='text-[20px] mb-[1rem]'>Entrepreneur In Residence, Scalix</h2>,
    <h2 className='text-[20px] mb-[1rem]'>Director of Digital, Polygon</h2>,
  ]
  
  const words = [
    <p className='text-[20px]'>We were not looking for an agency, we were looking for a team who would have as much skin in the game as us.</p> ,
    <p className='text-[20px]'>EPYC is arguably one of the most professional & dedicated no-code design studios, going above & beyond, working with you to ensure excellent results.</p> ,
    <p className='text-[20px]'>EPYC is very empathetic to the challenges & needs of their clients. Quality before pricing as an approach is refreshing & their USP. We will continue working with them for as long as possible.</p> ,
    <p className='text-[20px]'></p> 
    
  ]
  const words2 = [
    <p className='text-[20px]'> EPYC delivered through and through without leaving a single stone unturned. With their help, we have launched 
            and it has gone on to organically be featured in many respected and admired website design curations and awards.
    </p>,
    <p className='text-[20px]'>They provide the perfect combination of collaborative & professional support. The team is creative, attentive to detail, & very responsive to the needs of their clients.</p>,
    <p className='text-[20px]'></p>,
    <p className='text-[20px]'>Honestly, I never worked with a better partner before. There is always someone available to help, you always deliver on time with . For the last 12 months we have been working on very complex products & the experience working with EPYC Team has been excellent.</p>
  ]
  const [count , setCount] = useState(0);
  const increment = () => {
    if(count === 3) {
      setCount(0);
    }else{
      setCount(count + 1);
    }
  
  }

  const decrement = () => {
    if(count === 0) {
     
      setCount(3);
    }else{
      setCount(count - 1);
    }
  }

  return (
    <div className='bg-[#252525]'>
    <div className=' relative h-screen mt-[5rem] flex flex-row'>
        
        <h2 className='text-[40px] absolute text origin-center text-[#f1d9af] rotate-90 left-[-150px] h-[300px] font-tarang'>/OUR HAPPY<br /> CUSTOMERS</h2>
     
        <div className='ml-[8rem] flex w-[30%] p-[20px]'>
        <div className='flex flex-col'>
          <div className='flex h-[450px] p-[10px] border-[1px] border-[#f1d9af] rounded-[24px] object-cover'>
          {source[count]}  
          </div>
        <div className="flex justify-center mt-[3rem]">
        <button onClick={() => decrement()}  className="w-[5rem] flex mr-[1rem]  hover:bg-[#b91646] rounded-[100px] h-[3rem] bg-[#105652]">
          <div className="flex text-white m-auto items-center h-[50px]">
          <svg width="25" height="9" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1978 4.89207L0.87043 4.89207M0.87043 4.89207L4.4941 8.51575M0.87043 4.89207L4.4941 1.2684"
          stroke="#DEC8A1" stroke-width="1.2"></path>
          </svg>
          </div>
        </button>
        <button onClick={() => increment()}  className="w-[5rem] flex mr-[1rem]  hover:bg-[#b91646]  rounded-[100px] h-[3rem] bg-[#105652]">
          <div className="flex  text-white items-center m-auto h-[50px]">
          <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.830505 4.89186L24.1579 4.89186M24.1579 4.89186L20.5342 1.26819M24.1579 4.89186L20.5342 8.51554" 
          stroke="#DEC8A1" stroke-width="1.2"></path></svg>
          </div>
        </button>
        </div>
        </div>
            
        </div>
        <div className='flex flex-col w-[50%] text-[#f1d9af]'>
            {name[count]}
            {deg[count]}
            <div className="w-[100%] mt-[1rem] mb-[2rem] bg-[#f1d9af] h-[1px]"></div>
            {words[count]}
           {words2[count]}
            <div className="w-[100%] mt-[2rem] bg-[#f1d9af] h-[1px]"></div>
            <div class=" mt-[1rem] text-[20px]">What Asis loved about us</div>
            <div className='flex mt-[1rem] flex-row'>
            <div class="text-[14px] border-[#f1d9af] border-[1px] rounded-[24px] mr-[1rem] p-[10px]">Pixel Perfect Implementation</div>
            <div class="text-[14px] border-[#f1d9af] border-[1px] rounded-[24px] p-[10px]">Co-building Way of Work</div>
            </div>
        </div>
    </div>
    <div>
    <Brand />

    </div>
    </div>
  )
}

export default Review