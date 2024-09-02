import React from "react";

const Message = () => {
  return (
    <div>
      <h1 className="my-5 text-3xl font-bold text-teal-800 font-serif text-center">Message From Owner</h1>
      <div className="text-center m-4 text-gray-700 italic font-serif font-semibold">
            <p>We are delighted to have you at DaiKoHotel loacated in middle of beautiful Pokhara.</p>
        </div>
        <div className="text-center m-4 text-gray-700 italic font-serif font-semibold">
            <p>Our team is committed to making your stay comfortable and memorable.</p>
        </div>
        <div className="text-center m-4 text-gray-700 italic font-serif font-semibold">
            <p> Enjoy the serene views and  services that we offer.</p>
        </div>
        <h3 className="my-5 text-xl font-bold text-teal-800 font-serif text-center">Address:</h3>
        <p className="text-center -mt-3 italic font-light">Lakeside, Pokhara, Gandakī 33411</p>
        <p className="text-center mt-2 italic font-light">phone:061-5231485</p>
        <p className="text-center mt-2 italic font-light">Contact : +977 981 5231485</p>
    </div>
  );
};

export default Message;
