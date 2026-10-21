
import ImageCard from "../../../shared/ui/cards/ImageCard";
import ProductCard from "../../../shared/ui/cards/ProductCard"
import TestimonialCard from "../../../shared/ui/cards/TestimonialCard";
import ContactCard from "../../../shared/ui/cards/ContactCard";
import CartCard from "../../../shared/ui/cards/CartCard";
import SlideCard from "../../../shared/ui/cards/SlideCard";

import proImageSrc from "../../../assets/images/products/photo-1525351484163-7529414344d8.avif"
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
                    <ProductCard  badge_content="best seller" badge_price="$5.50" image={proImageSrc} badge_star="4.6" product_name="Macchiato" product_content="Espresso with vanilla syrup, milk, and caramel drizzle."/>
                    <p className="mt-2 text-center">ProductCard</p>
                </div>

                <div>
                    <SlideCard alt="Image" image = {imageSrc} />
                    <p className="mt-2 text-center">ImageCard.imageCard</p>
                </div>
                <div>
                    <ImageCard alt="Image" image = {staffSrc} cardType="staffCard"  variant= "rounded-full"/>
                    <p className="mt-2 text-center">ImageCard.staffCard</p>
                </div>

                <div>
                    <TestimonialCard  quote="The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning." name="Rajesh" role="Freelance designer" avatar={avatarSrc}/>
                    <p className="mt-2 text-center">TestimonialCard</p>
                </div>

                <div>
                    <ImageCard alt="Image" image = {mapSrc} cardType="mapCard"  variant= "rounded-3xl"/>
                    <p className="mt-2 text-center">ImageCard.mapCard</p>
                </div>

                 <div>
                    <ContactCard addr="PDPM IIITDM JABALPUR, Chandeli" Icon={BsHandbag} title = "Visit Us" />
                    <p className="mt-2 text-center">ContactCard</p>
                </div>

                <div>
                    <CartCard price="$5.20" image={proImageSrc} cart_name="Macchiato" count = "5"/>
                    <p className="mt-2 text-center">CartCard</p>
                </div>
                
            </div>
         </div>
    );
}

export default CardSection;