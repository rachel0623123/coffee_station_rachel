import  bgImage  from "../../../assets/images/photo-1501339847302-ac426a4a7cbb.avif";
import Button from "../../../shared/ui/buttons/Button";
import { useNavigate } from "react-router-dom";
function CTASection(){
    const navigate = useNavigate();
    return (
        <section className="mb-32 relative overflow-hidden bg-cover bg-coffee-900" style={{ backgroundImage: `url("${bgImage}")` }}>
            <div className="min-h-[700px] w-full bg-coffee-950/90 py-32 font-sans text-center">
                <p className="text-terracotta uppercase tracking-widest">Join Us Today</p>
                <h2 className="text-6xl font-serif text-white">Experience the <br /><span className="italic text-coffee-300">Perfect Brew</span></h2>
                <p className="sectionText sm:text-xl text-coffee-50 mt-8">Book a table today and immerse yourself in an atmosphere where every detail is crafted for your comfort.</p>
                <Button content = "Reserve Your Experience" variant ="bg-coffee-100 py-5 px-10 rounded-2xl mt-20" onClick={()=>navigate("/booking")}/>
                    
            </div>
        </section>
    );
}
export default CTASection;