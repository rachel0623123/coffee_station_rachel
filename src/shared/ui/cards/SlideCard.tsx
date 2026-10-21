type SlideCardProps = {
  alt: string;
  image: string;
};

function SlideCard ({
    alt,
    image,
}: SlideCardProps){
    return (
        <div className="slideCard">
            <img alt={alt} className={`w-full h-full object-cover h-[220px] hover:scale-110 transition-transform duration-700 ease-out`} src = {image} />
            <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        </div>
    )
}
export default SlideCard;

