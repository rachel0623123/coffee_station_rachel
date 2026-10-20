
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
            <img alt={alt} className={`w-full h-full object-cover ${variant}`} src = {image} />
        </div>
    )
}
export default ImageCard;

