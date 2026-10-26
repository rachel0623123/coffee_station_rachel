import ImageCard from "../../../shared/ui/cards/ImageCard";
import { useCoffeeStore } from "../../../store/coffeeStore";

function Staffs() {

    const staffs = useCoffeeStore((state) => state.staffs);

    return (
        <section className="w-full px-20 pb-32 space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-8">
                <h2 className="sectionHeader text-center "><span className="italic">The</span> Artisans</h2>
                <p className="sectionText text-center">Meet the passionate minds behind your perfect cup.</p>
            </div>
            <div className="flex justify-around">
                 {staffs.map((staff) => (
                    <ImageCard 
                        key={staff.id} 
                        alt={staff.alt}
                        image = {staff.image} 
                        name = {staff.name}
                        role = {staff.role}
                        cardType="staffCard"  
                        variant= "rounded-full"
                    />    
                ))}
            </div>
        </section>
    )
}

export default Staffs;
