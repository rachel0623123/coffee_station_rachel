import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
} from "framer-motion";

import Button from "../../../shared/ui/buttons/Button";
import { useNavigate } from "react-router-dom";
import imageSrc from "../../../assets/images/products/photo-1541167760496-1628856ab772.avif";

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, staggerChildren: 0.08 }
    }
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};
const scrollToTopSelling = () => {
    document.getElementById("top-selling")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Hero(){

    const navigate = useNavigate();
    const x = useMotionValue(0);

    const {scrollY} = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    
    const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) => {
        const { clientX } = e;
        const moveX = clientX - window.innerWidth / 2;
        x.set(moveX / 20);

    }
    
    return (       
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" onMouseMove={handleMouseMove}>
            <div className="mx-auto px-20 relative z-10 grid grid-cols-2 gap-8 items-center max-w-6xl">
                <motion.div style={{ y: y1 }}  className="text-left space-y-8 relative z-20">
                    <motion.h1 
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        className="text-8xl font-serif font-bold text-coffee-900">
                            {"Sip the Extraordinary".split("").map((char, index) => (
                                <motion.span key={index} variants={letter}>
                                    {char}   
                                </motion.span>
                            ))}
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, x:-30}}
                        animate={{opacity:1, x:0}}
                        transition={{delay: 1, duration: 0.8}}
                        className="text-xl text-coffee-800/80 max-w-lg mx-0 font-medium">
                            Experience coffee crafted with passion, served in liquid glass elegance. Warmth in every cup.
                    </motion.p>
                    <motion.div
                        className="inline-block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button content="Order Now" variant="orderBtn mr-2" onClick={scrollToTopSelling} />
                        <Button content = "View Full Menu" variant ="viewFullBtn" onClick={()=>navigate("/product")}/>
                    </motion.div>
                </motion.div>

                <motion.div className="relative h-[350px] flex items-center justify-center">
                     <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[500px] h-[500px] border border-white/10 rounded-full hidden"
                    />
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="glass absolute w-[380px] h-[480px] rounded-[50px] z-0 -rotate-6 border-l border-white/40 shadow-2xl"
                    />
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-9 -right-4 glass px-6 py-3 rounded-2xl flex items-center gap-3 shadow-lg z-20 cursor-pointer"
                >
                    <span className="text-xl md:text-2xl">🔥</span>
                    <div>
                        <p className="text-sm font-bold text-coffee-800 uppercase tracking-wider">Top Pick</p>
                        <p className="font-bold text-base text-coffee-900">Hazelnut Latte</p>
                    </div>
                </motion.div>
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="glass absolute w-[350px] h-[450px] rounded-[50px] z-0 rotate-12 border-white/40 shadow-xl"
                    />
                    <img src={imageSrc} alt="" className="rounded-full outline outline-4 outline-white/50 w-[300px] h-[300px] object-cover"/>
                </motion.div>
                
            </div>
            
                           
        </section>
    );
}
export default Hero;