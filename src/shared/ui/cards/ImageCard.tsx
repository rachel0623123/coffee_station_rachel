type ImageCardProps = {
  alt: string;
  image: string;
  name?: string;
  role?: string;
  variant: string;
  cardType: string;
};

function ImageCard ({
    alt,
    image,
    name,
    role,
    variant,
    cardType,
}: ImageCardProps){
    return (
        <div>
            <div className={`card ${cardType}`}>
                <img alt={alt} className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out ${variant}`} src = {image} />
            </div>
            {cardType === "staffCard" && 
                <div className="text-center mt-5">
                    {name && <p className="sectionText text-coffee-900 font-bold">{name}</p>}
                    {role && <p className="sectionText text-terracotta uppercase text-sm font-bold">{role}</p>}
                </div>
            }
        </div>
    )
}
export default ImageCard;

