import BadgeSection from "./section/BadgeSection"
import ButtonSection from "./section/ButtonSection"
import ColorSection from "./section/ColorSection"
import CardSection from "./section/CardSection"

export const DesignSystem =  () =>  {
    return (
        <div className="designPage">
            <ColorSection />
            <ButtonSection />
            <BadgeSection />
            <CardSection />
        </div>
    )
}