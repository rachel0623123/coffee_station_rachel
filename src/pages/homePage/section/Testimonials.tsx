
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../../../shared/ui/cards/TestimonialCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";

import { useCoffeeStore } from "../../../store/coffeeStore";

function Testimonials(){
    const testimonials = useCoffeeStore((state) => state.testimonials);
    return (
        <section className="py-20 sm:py-32 relative overflow-hidden bg-coffee-500/10 flex flex-col items-center">
            <div className="text-center mb-10 sm:mb-16 flex flex-col items-center">
                <h2 className="sectionHeader">Community Love</h2>
                <div className="flex items-center justify-center w-52">
                    <FaArrowLeftLong/>
                    <p className="sectionText "> Drag to explore </p>
                    <FaArrowRightLong />
                </div>
            </div>
            
            <div className="w-full max-w-[1536px]">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={24}
                    className="py-8"
                >
                    {testimonials.map((item, index) => (
                    <SwiperSlide key={`${item.id}-${index}` } className="!w-auto !py-10 ml-5">
                        <TestimonialCard  quote={item.quote} name={item.name} role={item.role} avatar={item.avatar}/>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
export default Testimonials;