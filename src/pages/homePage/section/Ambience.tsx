import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import SlideCard from "../../../shared/ui/cards/SlideCard";

import "swiper/css";
import "swiper/css/free-mode";

import { useCoffeeStore } from "../../../store/coffeeStore";

function Ambience(){
    const ambienceImages = useCoffeeStore((state) => state.ambiences);
    return (
        <section className="py-20 sm:py-32 relative overflow-hidden bg-white/5">
            <div className="text-center mb-10 sm:mb-16">
                <p className="sectionText">The Experience</p>
                <h2 className="sectionHeader"><span className="italic">Our</span> Ambience</h2>
                <p className="sectionText">A sanctuary crafted for focus, connection, and the perfect brew. Every corner tells a story of warmth.</p>
            </div>
            
            <div className="w-full">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={24}
                    speed={6000}
                    // freeMode = {true}
                    loop
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    style={{ "--swiper-wrapper-transition-timing-function": "linear" } as React.CSSProperties}
                    className="py-8"
                >
                    {ambienceImages.map((item, index) => (
                    <SwiperSlide key={`${item.id}-${index}` } className="!w-auto !py-10 ml-5">
                        <SlideCard alt={item.alt} image={item.image} />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="container mx-auto px-6 mt-8 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-24 text-coffee-900/40 font-serif italic text-base sm:text-xl">
                <span>"Cozy corners"</span>
                <span>"Natural light"</span>
                <span>"Artisan details"</span>
                <span>"Warm spirits"</span>
            </div>
        </section>
    );
}
export default Ambience;