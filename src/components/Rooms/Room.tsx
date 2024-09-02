import {Rooms} from '@/helpers/rooms.js'
import { Fragment } from "react"
import React from 'react';

export interface Room {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface RoomCardProps {
  room?: Room;
}

const RoomCard: React.FC<RoomCardProps> = () => {

  return (
    <Fragment>
       <div>
  <h3 className="mt-4 text-4xl text-center text-teal-800 font-extrabold animate__animated animate__headShake animate__infinite infinite">
    Special Rooms
  </h3>
</div>

<div className="my-5 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {Rooms.map((room) => (
    <div
      key={room.id}
      className="bg-white shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-teal-800">{room.name}</h2>
        <p className="text-gray-600 mt-2 italic font-sans">{room.description}</p>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center mt-4">
          <span className="text-lg font-bold text-red-400">
            ${room.price}/night
          </span>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </Fragment>
   
  );
};

export default RoomCard;
