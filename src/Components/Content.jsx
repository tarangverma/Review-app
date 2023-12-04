import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

function Content() {
  return (
    <div className="">
    <div className="flex mt-[5rem] justify-center items-center">
      <div className="w-[100%] relative bg-[#252525] h-[1px]"></div>
      <div className="absolute left-[25%]">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.51776 7.39986C21.8528 7.39986 7.51776 -6.79987 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 21.8528 7.39986 7.51776 7.39986ZM7.51776 7.39986C-7.14721 7.39986 7.51776 -6.99983 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 -7.14721 7.39986 7.51776 7.39986Z"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
      <div className="absolute right-[25%]">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.51776 7.39986C21.8528 7.39986 7.51776 -6.79987 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 21.8528 7.39986 7.51776 7.39986ZM7.51776 7.39986C-7.14721 7.39986 7.51776 -6.99983 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 -7.14721 7.39986 7.51776 7.39986Z"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
      <h2 className="text-[70px] font-tarang whitespace-nowrap">
        /Featured Work
      </h2>
      <div className="w-[100%] bg-[#252525] h-[1px]"></div>
      </div>



     <section className='h-[650px] sticky'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
      <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1).webp" loading="lazy" width="880" height="493" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-500.webp 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-800.webp 800w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-2000.webp 2000w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-2600.webp 2600w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1).webp 2644w"
      sizes="(max-width: 479px) 87vw, (max-width: 767px) 89vw, (max-width: 991px) 87vw, 90vw" class="project_image-v2" />
      </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon.webp" loading="lazy" width="880" height="493" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-500.webp 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-800.webp 800w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-1080.webp 1080w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-1600.webp 1600w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-2000.webp 2000w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon.webp 2644w" 
        sizes="(max-width: 479px) 87vw, (max-width: 767px) 89vw, (max-width: 991px) 87vw, 90vw" class="project_image-v2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter.webp" loading="lazy" width="880" height="493" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-500.webp 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-800.webp 800w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-1080.webp 1080w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-1600.webp 1600w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-2000.webp 2000w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-2600.webp 2600w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter.webp 2640w" 
        sizes="(max-width: 479px) 87vw, (max-width: 767px) 89vw, (max-width: 991px) 87vw, 90vw" class="project_image-v2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212.webp" loading="lazy" width="880" height="493" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-500.webp 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-800.webp 800w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-1080.webp 1080w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-1600.webp 1600w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-2000.webp 2000w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212.webp 2644w" 
        sizes="(max-width: 479px) 87vw, (max-width: 767px) 89vw, (max-width: 991px) 87vw, 90vw" class="project_image-v2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041c4e6f21544db8a4dfc2_Let%27s%20Venture.webp" loading="lazy" width="880" height="493" alt="" srcset="https://assets-global.website-files.com/6493e2c640a47641d704896f/65041c4e6f21544db8a4dfc2_Let%27s%20Venture-p-500.png 500w, https://assets-global.website-files.com/6493e2c640a47641d704896f/65041c4e6f21544db8a4dfc2_Let%27s%20Venture.webp 2641w" 
        sizes="(max-width: 479px) 87vw, (max-width: 767px) 89vw, (max-width: 991px) 87vw, 90vw" class="project_image-v2" />
        </SwiperSlide>
      </Swiper>
      </section>
      
      
    
   

      {/* // All projects  */}

      <button className="w-[18rem] flex mt-[5rem] m-auto rounded-[100px] h-[5rem] bg-[#b91646]">
          <div className="flex m-auto pl-[35px] text-white w-[300px]">SEE ALL PROJECTS</div>
          <div className="flex w-[80%] m-auto text-white">
          <svg
            width="30%"
            height="auto"
            viewBox="0 0 53 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 8.5H52M52 8.5L44 0.5M52 8.5L44 16.5"
              stroke="currentColor"
            ></path>
          </svg>
          </div>
        </button>
    </div>
  );
}

export default Content;
