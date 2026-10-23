import BadgeSection from "./section/BadgeSection"
import ButtonSection from "./section/ButtonSection"
import ColorSection from "./section/ColorSection"
import CardSection from "./section/CardSection"

function DesignSystem() {
    return (
        <main className="mainSection">
            <ColorSection />
            <ButtonSection />
            <BadgeSection />
            <CardSection />
        </main>
    )
}

export default DesignSystem;