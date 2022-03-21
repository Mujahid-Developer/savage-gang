import React from "react";
import Savage_logo from "../assets/savage-logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const gangsStar = [
    {
      image: "https://i.ibb.co/41y7VhQ/Chief-Gansta.png",
      name: "Protesla",
      title: "Artist and Designer",
    },
    {
      image: "https://i.ibb.co/6ZRCQXN/Boo-Boi.png",
      name: "Softphoton",
      title: "Marketer",
    },
    {
      image: "https://i.ibb.co/7S7s2Qj/Angry-Bird.png",
      name: "Torchness",
      title: "Leader",
    },
    {
      image: "https://i.ibb.co/M8GFxq1/Smirkish.png",
      name: "Hawk",
      title: "Developer",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1
          style={{ fontFamily: "Aldrich" }}
          className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 font-bold text-center my-7"
        >
          Meet The Minds <br /> Behind Savage Gang!
        </h1>
        <p style={{ fontFamily: "Aldrich" }} className=" text-center">
          We are not the Savage, but we tried to create some and you can own one
          <br />
          ...or more.
        </p>
        <img className="mx-auto" src={Savage_logo} alt="" />
      </div>
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-4 mb-12 justify-between items-center">
        <div>
          <img className="w-80" src={img1} alt="" />
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center">
          <h1 className="text-2xl font-bold  pb-4">Explore. Lead. Do</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </section> */}

      {/* Team Section */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-12">
        {/* <h2
          style={{ fontFamily: "Aldrich" }}
          className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-center"
        >
          The Gang Stars!
        </h2>
        <p style={{ fontFamily: "Aldrich" }} className="text-center">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been
        </p> */}
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 pt-10">
          {gangsStar.map(({ name, title, image }) => (
            <div className="card p-5 bg-gradient-to-r from-violet-900 via-violet-800 to-violet-900">
              <div className="mx-auto my-auto">
                <img className="rounded-full" src={image} alt="" />
                <h2 className="text-center text-xl pt-3 text-white font-bold my-auto">
                  {name}
                </h2>
                <h1 className="text-center text-md pt-3 my-auto">{title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
