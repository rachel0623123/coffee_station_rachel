import { FaQuoteRight } from "react-icons/fa";
type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="testimonialCard">
        <div className="quateMark"><FaQuoteRight /></div>
        <p className="text-coffee-900/90 italic mb-5 mt-3 leading-relaxed font-medium text-base text-[18px]">{quote}</p>

        <div className="flex items-center gap-4">
            <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
            />

        <div>
          <h3 className="font-bold text-coffee-900 text-sm">{name}</h3>
          <p className="text-[10px] text-coffee-700 uppercase tracking-wide font-semibold">{role}</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;