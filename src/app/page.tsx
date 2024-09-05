import CarouselComponent from "@/components/Crousel/Crousel";
import Room from "@/components/Rooms/Room";
import 'animate.css';
import Message from "@/components/message/message";
import { getToken } from "next-auth/jwt";
import Gallary from "@/components/gallary/gallary";
import Footer from "@/components/Footer/Footer";
export default async function Home() {
 return (
    <>
    <main className="flex flex-col items-center justify-between p-24 bg-slate-200 -mt-10 min-h-screen ">
     <CarouselComponent/>
     <section className="">
     <h2 className="text-4xl text-teal-800 text-center font-extrabold mt-10 animate-fadeIn">
       <p className="animate__animated animate__rubberBand animate__infinite	infinite">Our Features </p></h2>
       <div className="text-center m-4 text-gray-700 italic font-serif font-semibold">
            <p>Well-furnished rooms with comfortable beds, clean linens, and climate control.</p>
        </div>
        <div className="text-center m-4 text-gray-700 italic font-serif font-semibold">
            <p>Diverse menu and 24/7 room service.</p>
        </div>
        <div className="text-center m-4 text-gray-700 italic font-serif font-semibold">
            <p>Pool, gym, and spa services.</p>
        </div>
     </section>
     <Room />
    <Message/>
    <Gallary/>
    <div className="relative w-screen h-[80vh] overflow-hidden">
      <img
        src="https://img.freepik.com/free-photo/vintage-twilight-pool-nature-light_1203-5731.jpg?t=st=1725449357~exp=1725452957~hmac=02fa10a00339426fa359ea68629d0b3f2841e6dcc2a83ddc1b3fcc5a156a7f95&w=996"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-black/50 p-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white/2 font-serif">
        Experience Luxury Like Never Before
        </h1>
        <p className="max-w-md text-lg sm:text-xl italic">
        Immerse yourself in the ultimate comfort and elegance at our exquisite hotel. Book your stay with us today and indulge in unparalleled luxury.
        </p>
      </div>
      </div>
    </main>
      <Footer/>
      </>
  );
}


