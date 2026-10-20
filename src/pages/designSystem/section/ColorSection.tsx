import ColorBox from "../../../components/colorBox/ColorBox";

const colorList = [
    "bg-coffee-50",
    "bg-coffee-100",
    "bg-coffee-200",
    "bg-coffee-300",
    "bg-coffee-400",
    "bg-coffee-500",
    "bg-coffee-600",
    "bg-coffee-700",
    "bg-coffee-800",
    "bg-coffee-900",
    "bg-coffee-950",
];

function ColorSection () {
    return (
        <div className="section">
            <h1>COLORS</h1>
            <div className="sectionContent"> 
                {
                    colorList.map((item, index) => {
                        return (
                            <ColorBox key={index} color={item}/>   
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ColorSection;