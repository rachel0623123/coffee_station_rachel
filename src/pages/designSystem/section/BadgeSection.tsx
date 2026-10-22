import LabelBadge from "../../../shared/ui/badges/LabelBadge";
import IconBadge from "../../../shared/ui/badges/IconBadge";
import CountBadge from "../../../shared/ui/badges/CountBadge";
import { GoStarFill } from "react-icons/go";
import { LuSparkles } from "react-icons/lu";
function BadgeSection () {
    return (
        <div className="section">
            <h1>BADGES</h1>
            <div className="sectionContent">
                <div className="relative">
                    <LabelBadge content = "BEST SELLER" variant="solid" />
                    <p className="mt-2 text-center">LabelBadge.solid</p>
                </div>
                <div className="relative">
                    <LabelBadge content = "$5.50" variant="dark"/>
                    <p className="mt-2 text-center">LabelBadge.dark</p>
                </div>
                <div className="relative">
                    <IconBadge content = "4.6" variant="soft" icon={GoStarFill}/>
                    <p className="mt-2 text-center">IconBadge.soft</p>
                </div>
                <div className="relative">
                    <IconBadge content = "Premium Experience" variant="glass" icon={LuSparkles}/>
                    <p className="mt-2 text-center">IconBadge.glass</p>
                </div>
                <div className="relative">
                    <CountBadge variant="" count = "2"/>
                    <p className="mt-2 text-center">CountBadge</p>
                </div>
            </div>
         </div>
    );
}

export default BadgeSection;
