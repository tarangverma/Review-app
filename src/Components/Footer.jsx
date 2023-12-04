import React from 'react'

function Footer() {
  return (
    <div className='bg-[#252525] text-[#f1d9af] text-[17px]'>
    <div className='flex flex-row'>
    <div className='flex  w-[50%] flex-row p-[40px] justify-between'>
        <div className='flex gap-5  flex-col'>
            <div>PROJECTS</div>
            <div>BLOG</div>
            <div>CONTACT</div>
        </div>
        <div className='flex gap-5 flex-col'>
            <div>INSTAGRAM</div>
            <div>LINKEDIN</div>
            <div>TWITTER</div>
        </div>
        <div className='flex gap-5 flex-col'>
            <div>PRIVACY POLICY</div>
            <div>TEARMS & CONDITION</div>
        </div>
        </div>
    <div className='w-[50%] p-[40px]'>
    <div className='flex items-center flex-row'>
        <div className='w-[50px] h-[50px] p-[16px] bg-[#105652] rounded-[50%]'>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0725 4.98134C11.7488 5.18 11.6474 5.60347 11.8461 5.92719C12.0447 6.25091 12.4682 6.3523 12.7919 6.15364L12.0725 4.98134ZM12.7919 10.5832C12.4682 10.3845 12.0447 10.4859 11.8461 10.8097C11.6474 11.1334 11.7488 11.5568 12.0725 11.7555L12.7919 10.5832ZM12.4322 7.6807C12.0524 7.6807 11.7445 7.9886 11.7445 8.36842C11.7445 8.74824 12.0524 9.05614 12.4322 9.05614V7.6807ZM2.39358 4.34269L2.81229 4.88825L2.39358 4.34269ZM3.46535 3.5201L3.04663 2.97454L3.46535 3.5201ZM3.46535 13.2167L3.04663 13.7623H3.04663L3.46535 13.2167ZM2.39357 12.3942L1.97486 12.9397H1.97486L2.39357 12.3942ZM1.18364 11.2344L1.80032 10.93H1.80032L1.18364 11.2344ZM8.2195 15.6105L8.52253 16.2278L8.52253 16.2278L8.2195 15.6105ZM8.2195 1.12638L7.91647 1.74373V1.74373L8.2195 1.12638ZM12.7919 6.15364L17.079 3.52284L16.3596 2.35053L12.0725 4.98134L12.7919 6.15364ZM12.0725 11.7555L16.3596 14.3863L17.079 13.214L12.7919 10.5832L12.0725 11.7555ZM12.4322 9.05614H16.5544V7.6807H12.4322V9.05614ZM2.81229 4.88825L3.88407 4.06566L3.04663 2.97454L1.97486 3.79713L2.81229 4.88825ZM8.52919 6.34329V10.3936H9.90462V6.34329H8.52919ZM3.88406 12.6712L2.81229 11.8486L1.97486 12.9397L3.04663 13.7623L3.88406 12.6712ZM1.68772 9.57097V7.16587H0.312281V9.57097H1.68772ZM2.81229 11.8486C2.07414 11.2821 1.8964 11.1247 1.80032 10.93L0.566955 11.5388C0.838143 12.0882 1.34462 12.456 1.97486 12.9397L2.81229 11.8486ZM0.312281 9.57097C0.312281 10.364 0.295613 10.9891 0.566955 11.5388L1.80032 10.93C1.70439 10.7357 1.68772 10.4999 1.68772 9.57097H0.312281ZM8.52919 10.3936C8.52919 11.9928 8.52738 13.1133 8.41181 13.9003C8.29536 14.6934 8.09624 14.9049 7.91647 14.9931L8.52253 16.2278C9.34016 15.8265 9.63975 15.0053 9.77265 14.1002C9.90644 13.1891 9.90462 11.9459 9.90462 10.3936H8.52919ZM3.04663 13.7623C4.28035 14.7092 5.26692 15.4686 6.07223 15.9184C6.87191 16.3651 7.70574 16.6287 8.52253 16.2278L7.91647 14.9931C7.73586 15.0818 7.44486 15.1097 6.74294 14.7176C6.04665 14.3287 5.15484 13.6465 3.88406 12.6712L3.04663 13.7623ZM3.88407 4.06566C5.15485 3.09034 6.04665 2.40814 6.74294 2.01923C7.44486 1.62718 7.73586 1.65508 7.91647 1.74373L8.52253 0.509022C7.70574 0.108095 6.87191 0.371751 6.07223 0.818409C5.26692 1.26821 4.28035 2.02766 3.04663 2.97454L3.88407 4.06566ZM9.90462 6.34329C9.90462 4.79097 9.90644 3.54779 9.77265 2.63668C9.63975 1.73157 9.34016 0.910359 8.52253 0.509022L7.91647 1.74373C8.09624 1.83198 8.29536 2.04345 8.41181 2.8365C8.52738 3.62357 8.52919 4.74405 8.52919 6.34329H9.90462ZM1.97486 3.79713C1.34461 4.28084 0.838145 4.6486 0.566955 5.19799L1.80032 5.8068C1.8964 5.61215 2.07413 5.45479 2.81229 4.88825L1.97486 3.79713ZM1.68772 7.16587C1.68772 6.23692 1.70439 6.00114 1.80032 5.8068L0.566955 5.19799C0.295613 5.74769 0.312281 6.37288 0.312281 7.16587H1.68772Z" fill="#F1D9AF"></path>
        </svg>
        </div>
        <div className='ml-[1rem]'>HOW TO PRONOUNCE EPYC?</div>
    </div>
        <div className='flex mt-[4rem] flex-row gap-10'><div>/Webflow Professional Parnters</div>   <div>/Bubble Bronze Agency</div></div>
    </div>
    </div>
        <div className="w-[100%] mt-[5rem] bg-[#f1d9af] h-[1px]"></div>
        <div className='text-center mt-[1rem] mb-[2rem]'>© 2023, EPYC Thoughtworks Private Limited</div>
    </div>
  )
}

export default Footer