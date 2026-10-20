// import IconBtn from "../components/buttons/IconBtn";
import Button from "../../../components/buttons/Button";
import Chip from "../../../components/buttons/Chip";
import TimeSlot from "../../../components/buttons/TimeSlot";
import IconButton from "../../../components/buttons/IconButton";
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
                     <IconButton content="" variant="" hrefC="#" icon={BsHandbag }/>
                    <p className="mt-2 text-center">IconButton</p>
                </div>
                <div>
                    <IconButton content="Add to Order" variant="hover:bg-coffee-900 text-coffee-900 hover:text-white rounded-2xl" hrefC="#" icon={FaPlus }/>
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