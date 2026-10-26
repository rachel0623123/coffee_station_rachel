import ImageCard from "../../../shared/ui/cards/ImageCard";
import LabelBadge from "../../../shared/ui/badges/LabelBadge";
import bigImage from "../../../assets/images/photo-1495474472287-4d71bcdd2085.avif"

function Story() {
    return (
        <section className="w-full px-20">
            <div className="text-center mb-10 sm:mb-16">
                <p className="font-sans text-sm font-bold text-terracotta uppercase tracking-widest">Our Heritage</p>
                <h1 className="pageHeader"><span className="italic">The</span> Story</h1>
                <p className="sectionText">From a solitary bean to a shared sanctuary. We've been crafting moments of comfort and connection since our first pour.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20 sm:mb-32 px-32">
                <ImageCard alt="Image" image = {bigImage} cardType="bigImgCard"  variant= "rounded-3xl"/>
                <div className="space-y-6 sm:space-y-8">
                    <LabelBadge content = "Established 2026" variant="solid w-fit" />
                    <h2 className="text-4xl font-serif font-bold">Crafted with <span className="italic font-thin text-terracotta">Passion</span> & Precision</h2>
                    <p className="sectionText">Coffee'station began with a simple yet ambitious mission: to redefine the daily coffee ritual. We saw an opportunity to blend the warmth of traditional café culture with a modern, premium aesthetic.</p>
                    <p className="sectionText">Our beans are curated from sustainable micro-lots across the globe, each roasted to highlight its unique terroir. But more than the beans, we value the community we've built, one cup at a time.</p>
                </div>
            </div>
        </section>
    )
}

export default Story;
