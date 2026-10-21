
type ImageCardProps = {
  alt: string;
  image: string;
  variant: string;
  cardType: string;
};

function ImageCard ({
    alt,
    image,
    variant,
    cardType,
}: ImageCardProps){
    return (
        <div className={`card ${cardType}`}>
            <img alt={alt} className={`w-full h-full object-cover h-[220px]   ${variant}`} src = {image} />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] sm:rounded-[32px]"></div>
        </div>
    )
}
export default ImageCard;

