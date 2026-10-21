import ColorBox from "../../../shared/ui/colorBox/ColorBox";

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
    "bg-primary",
    "bg-cream",
    "bg-beige",
    "bg-terracotta"
];

function ColorSection () {
    return (
        <div className="section">
            <h1>COLORS</h1>
            <div className="flex flex-wrap bg-coffee-300 py-3 px-10"> 
                {
                    colorList.map((item, index) => {
                        return (
                            <div className="flex flex-col justify-center items-center w-32">
                                <ColorBox key={index} color={item}/>   
                                <p className="text-center">{item}</p>
                            </div>
                            
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ColorSection;