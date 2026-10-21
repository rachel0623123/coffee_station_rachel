
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
        <div className={`card overflow-hidden ${cardType}`}>
            <img alt={alt} className={`w-full h-full object-cover h-[220px] hover:scale-110 transition-transform duration-700 ease-out ${variant}`} src = {image} />
        </div>
    )
}
export default ImageCard;

