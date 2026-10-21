import Button from "../../../shared/ui/buttons/Button";
import Chip from "../../../shared/ui/buttons/Chip";
import TimeSlot from "../../../shared/ui/buttons/TimeSlot";
import IconButton from "../../../shared/ui/buttons/IconButton";
import { BsHandbag  } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
function ButtonSection () {
    return (

        <div className="section">
            <h1>BUTTONS</h1>
            <div className="sectionContent">
                <div>
                    <Button content = "Order Now" variant ="orderBtn"/>
                    <p className="mt-2 text-center">Button.orderBtn</p>
                </div>
                <div>
                    <Button content = "View Full Menu" variant ="viewFullBtn"/>
                    <p className="mt-2 text-center">Button.viewFullBtn</p>
                </div>
                <div>
                    <Button content = "Reserve" variant ="bookBtn"/>
                    <p className="mt-2 text-center">Button.bookBtn</p>
                </div>
                <div>
                     <IconButton content="" variant="hover:bg-coffee-900/20" icon={BsHandbag }/>
                    <p className="mt-2 text-center">IconButton</p>
                </div>
                <div>
                    <IconButton content="Add to Order" variant="hover:bg-coffee-900 text-coffee-900 hover:text-white rounded-2xl" icon={FaPlus }/>
                    <p className="mt-2 text-center">IconButton</p>
                </div>
                <div>
                    <Chip content = "All" variant ="selected"/>
                    <p className="mt-2 text-center">Chip</p>
                </div>
                <div>
                    <TimeSlot content = "09:00 AM" variant =""/>
                    <p className="mt-2 text-center">TimeSlot</p>
                </div>
            </div>
        </div>
    );
}

export default ButtonSection;