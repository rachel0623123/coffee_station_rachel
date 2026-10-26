import ImageCard from "../shared/ui/cards/ImageCard";
import bigImage from "../assets/images/Screenshot_1.png"
import ContactCard from "../shared/ui/cards/ContactCard";
import { BsGeoAlt, BsTelephone,  BsEnvelope  } from "react-icons/bs";
function Contact() {
    return (
        <main className="mainSection">
            <section className="w-full px-20 flex items-center justify-center flex-col">
                <div className="text-center mb-10 sm:mb-16">
                    <p className="font-sans text-sm font-bold text-terracotta uppercase tracking-widest">Reach Out</p>
                    <h1 className="pageHeader"><span className="italic">Get in</span> Touch</h1>
                    <p className="sectionText">Whether you have a question about our beans or just want to share your coffee experience, we're here to listen.</p>
                </div>
                <div className="mb-20 sm:mb-32 px-32 w-full max-w-7xl space-y-16">
                    <div className="grid lg:grid-cols-3 gap-10 sm:gap-16 justify-items-center">
                        <ContactCard addr={"PDPM IIITDM \n JABALPUR, Chandeli"} Icon={BsGeoAlt} title = "Visit Us" />
                        <ContactCard addr={"+91 9999999999\n Mon-Sun: 7am - 8pm"} Icon={BsTelephone} title = "Call Us" />
                        <ContactCard addr={"hello@coffeestation.com\n Support 24/7"} Icon={BsEnvelope} title = "Email Us" />
                    
                    </div>
                    <ImageCard alt="Map" image = {bigImage} cardType="mapCard"  variant= "rounded-3xl"/>    
                </div>
            </section>
        </main>
    )
}

export default Contact;
