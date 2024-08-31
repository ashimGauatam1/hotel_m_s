import CarouselComponent from "@/components/Crousel/Crousel";
import 'animate.css';
export default async function Home() {

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CarouselComponent/>
     <section className="">
     <h2 className="text-4xl text-teal-800 text-center font-extrabold mt-10 animate-fadeIn">
       <p className="animate__animated animate__rubberBand animate__infinite	infinite">Our Features </p></h2>
       <div className="text-center m-4 text-gray-700">
            <p>Well-furnished rooms with comfortable beds, clean linens, and climate control.</p>
        </div>
        <div className="text-center m-4 text-gray-700">
            <p>Diverse menu and 24/7 room service.</p>
        </div>
        <div className="text-center m-4 text-gray-700">
            <p>Pool, gym, and spa services.</p>
        </div>
     </section>
    </main>
  );
}


