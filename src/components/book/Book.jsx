import { useState } from "react";
import bg from "../../assets/book/bg.jpeg";
import toast from "react-hot-toast";

const Book = () => {
  const [date, setDate] = useState("Reserve Time");
  const handleBooking = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const people = e.target.people.value;
    const details = e.target.details.value;
    toast.success("Table Booked Successfully!!!");
    e.target.reset();
    setDate("Reserve");
    console.log(name, email, date, people, details);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className=" bg-no-repeat p-[30px] lg:p-0 flex items-center h-[788px]   bg-cover object-contain bg-center"
    >
      {/* <img src={bg} className="h-[888px] absolute w-full object-fill" alt="" /> */}
      <div className="w-[1320px]    relative z-10 mx-auto ">
        <div className=" max-w-[635px] ">
          <h2 className=" text-base lg:text-xl roboto text-[#BD1F17] font-bold">
            {" "}
            <span className="h-[13px] w-[13px] bg-[#BD1F17] inline-block mr-2"></span>
            Book Now
          </h2>
          <h2 className="text-4xl text-white lg:text-6xl bebas mt-4 mb-5">
            Book Your Table
          </h2>
          <p className="roboto text-white mb-8 w-3/4 ">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form onSubmit={handleBooking} className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className=" text-white rounded-none py-3 px-4 bg-transparent border border-white"
                placeholder="Your Name*"
                type="text"
                name="name"
                required
              />
              <input
                className=" text-white rounded-none py-3 px-4 bg-transparent border border-white"
                placeholder="Your Email"
                type="email"
                name="email"
              />

              <input
                type="date"
                className="  bg-transparent text-white border border-white px-4 placeholder:text-white"
                id="reserve-time"
                onChange={(e) => setDate(e.target.value)}
                defaultValue={date}
                placeholder="Reserve Time"
              />

          

              <input
                className=" text-white rounded-none py-3 px-4 bg-transparent border border-white"
                placeholder="Total people"
                type="number"
                name="people"
              />
              <textarea
                name="details"
                placeholder="Message"
                rows={6}
                className="py-3 text-white px-4 bg-transparent border border-white md:col-span-2"
                id=""
              ></textarea>
            </div>
            <button
              type="submit"
              className={` py-[10px]  px-4 mt-7 roboto bg-[#FEBF00] uppercase font-bold text-[#0A1425] `}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
