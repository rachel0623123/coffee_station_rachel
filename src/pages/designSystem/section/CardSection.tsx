
import ImageCard from "../../../components/cards/ImageCard";
import ProductCard from "../../../components/cards/ProductCard"
import TestimonialCard from "../../../components/cards/TestimonialCard";
import ContactCard from "../../../components/cards/ContactCard";
import CartCard from "../../../components/cards/CartCard";

import imageSrc from "../../../assets/images/ambience/photo-1442512595331-e89e73853f31.avif";
import staffSrc from "../../../assets/images/staffs/photo-1517841905240-472988babdf9.avif";
import avatarSrc from "../../../assets/images/customers/photo-1494790108377-be9c29b29330.avif";
import mapSrc from "../../../assets/images/Screenshot_1.png";

import { BsHandbag  } from "react-icons/bs";

function CardSection()  {
    return (
        <div className="section">
            <h1>CARDS</h1>
            <div className="sectionContent">
                <div>
                    <ProductCard  />
                    <p className="mt-2 text-center">ProductCard</p>
                </div>

                <div>
                    <ImageCard alt="Image" image = {imageSrc} cardType="imageCard"  variant= "rounded-2xl"/>
                    <p className="mt-2 text-center">ImageCard</p>
                </div>
                <div>
                    <ImageCard alt="Image" image = {staffSrc} cardType="staffCard"  variant= "rounded-full"/>
                    <p className="mt-2 text-center">ImageCard</p>
                </div>

                <div>
                    <TestimonialCard  quote="The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning." name="Rajesh" role="Freelance designer" avatar={avatarSrc}/>
                    <p className="mt-2 text-center">TestimonialCard</p>
                </div>

                <div>
                    <ImageCard alt="Image" image = {mapSrc} cardType="mapCard"  variant= "rounded-3xl"/>
                    <p className="mt-2 text-center">ImageCard</p>
                </div>

                 <div>
                    <ContactCard addr="PDPM IIITDM JABALPUR, Chandeli" hrefC="#" Icon={BsHandbag} title = "Visit Us" />
                    <p className="mt-2 text-center">ImageCard</p>
                </div>

                <div>
                    <CartCard />
                    <p className="mt-2 text-center">ImageCard</p>
                </div>
                
            </div>
         </div>
    );
}

export default CardSection;