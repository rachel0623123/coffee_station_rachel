import Hero from "./section/Hero";
import TopSelling from "./section/TopSelling";
import Ambience from "./section/Ambience";
import Testimonials from "./section/Testimonials";
import CTASection from "./section/CTASection";

function Home() {
    return (
        <main className="p-0 font-serif font-bold text-coffee-900">
            <Hero />
            <TopSelling />
            <Ambience />
            <Testimonials />
            <CTASection />
        </main>
    )
}

export default Home;
