import Chip from "../../../shared/ui/buttons/Chip";

type NavFilterProps = {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
};

const categories = [
  "All",
  "Coffee",
  "Tea",
  "Breakfast",
  "Desserts",
  "Combos",
];

function NavFilter({
        selectedCategory,
        onCategoryChange,
    }: NavFilterProps) {
    
    return (
        <section className="relative flex flex-col items-center justify-center w-full max-w-[1536px] pb-20">
            <div className="text-center mb-10 sm:mb-16">
                <h2 className="pageHeader">Our Menu</h2>
                <p className="sectionText">Explore our full range of handcrafted beverages and delicious treats.</p>
            </div>
            <div className="p-1 bg-white/10 rounded-full border border-white/40 glass ">
                {
                    categories.map((item) => (
                        <Chip key={item} content = {item} variant ={selectedCategory === item ? "selected": ""} onClick = {()=>onCategoryChange(item)}/>
                    ))
                }
            </div>
        </section>
    )
}

export default NavFilter;
