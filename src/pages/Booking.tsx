import IconBadge from "../shared/ui/badges/IconBadge";
import TimeSlot from "../shared/ui/buttons/TimeSlot";
import Button from "../shared/ui/buttons/Button";
import { useState } from "react";
import { LuSparkles, LuCalendarDays, LuCheck, LuUserRound, LuClock4 } from "react-icons/lu";

const timeSlot = [
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
];

function Booking() {
    const [selectedSlot, setSelectedSlot] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedSlot) {
            return;
        }
        setIsConfirmed(true);
    }
    return (
        <main className="mainSection min-h-screen pb-10">
            <div className="rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-2 min-h-[600px] border border-white/20 max-w-6xl z-10">
                <div className="p-12 flex flex-col justify-between overflow-hidden bg-coffee-900/5">
                    <div className="z-10 space-y-10">
                        <IconBadge content="Premium Experience" variant="glass" icon={LuSparkles} />
                        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-coffee-900 mb-4" >Reserve Your <br /><span className="text-primary italic">Moment</span></h1>
                        <p className="text-lg text-coffee-800/80 max-w-md mt-8">Secure the best spot in the house. Whether for a quiet coffee or a lively brunch, we're ready for you.</p>
                    </div>
                    <div className="flex items-center gap-4 text-coffee-900 font-medium bg-white/30 p-4 rounded-2xl border border-white/10">
                        <LuClock4 className="p-3 w-10 h-10 bg-white/50 rounded-full flex items-center justify-center text-coffee-900" />
                        <div>
                            <p className="text-xs text-coffee-600 uppercase font-bold">Opening Hours</p>
                            <p className="text-sm">Mon - Sun: 7am - 9pm</p>
                        </div>
                    </div>
                </div>
                <div className="p-12 bg-transparent border-t-0 border-white/10">
                    {
                        isConfirmed ? 
                        (<div className="h-full flex flex-col items-center justify-center text-center gap-4">
                            <LuCheck className="bg-green-500 w-20 h-20 rounded-full text-white p-3" />
                            <h2 className="text-3xl font-serif font-bold text-coffee-900">Reservation confirmed</h2>
                            <p>We'll see you at {selectedSlot}.</p>
                            <Button
                                content="Make another reservation"
                                variant="orderBtn rounded-xl"
                                type="button"
                                onClick={() => { setIsConfirmed(false); setSelectedSlot(""); }}
                            />
                        </div>) 
                        : ( <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="labelText">Name</label>
                                <div className="relative">
                                    <LuUserRound className="absolute text-xl text-coffee-800 top-5 left-4" />
                                    <input type="text" id="name" placeholder="Example Name" className="inputForm" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="date" className="labelText">Date</label>
                                    <div className="relative">
                                        <LuCalendarDays className="absolute text-xl text-coffee-800 top-5 left-4" />
                                        <input type="date" id="date" className="inputForm" required />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="guests" className="labelText">Guests</label>
                                    <select id="guests" className="inputForm px-4">
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4 People</option>
                                        <option value="5">5+ People</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <p className="labelText">Preferred time</p>
                                <div className="grid grid-cols-3 gap-4">
                                    {timeSlot.map((slot) => (
                                        <TimeSlot
                                            key={slot}
                                            content={slot}
                                            variant={
                                                selectedSlot === slot
                                                    ? "timeSlotSelected" : ""
                                            }
                                            onClick={() => setSelectedSlot(slot)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <Button content="Confirm Reservation" variant="orderBtn rounded-xl text-terracotta transition-all active:scale-[0.98]" type="submit" />
                        </form>)
                    }

                </div>
            </div >
        </main >
    )
}

export default Booking;
