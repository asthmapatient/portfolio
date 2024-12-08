import React from "react";
import img from "../assests/img/projects/1.png";

const Products = () => {
  return (
    <div className="mx-auto   ">
      <div className="md:w-1/2 col-span-2  mb-20">
        <h2 data-aos="fade-right" className="title">
          Featured Projects
        </h2>
        <p data-aos="fade-down">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10   gap-x-10 md:grid-cols-2">
        <div
          data-aos="fade-right"
          className=" justify-self-center box  rounded-3xl py-10 w-full flex  justify-center items-center    px-12 bg-grey"
        >
          <img className="object-fill" src={img} alt="" />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col  justify-self-start self-center"
        >
          <h1 className=" text-3xl text-white">
            Promotional landing page for our favorite show
          </h1>
          <p className="py-6">
            Teamed up with a designer to breathe life into a promotional webpage
            for our beloved show, Adventure Time. Delivered a fully responsive
            design with dynamic content capabilities, seamlessly integrating a
            newsletter feature to keep fans updated with the latest adventures.
          </p>
          <p className=" uppercase border-b-2 pb-5  border-grey">
            Project Info
          </p>
          <div className=" border-b-2 pb-5 mt-2 border-grey flex justify-between">
            <p>Year</p>
            <p>2023</p>
          </div>
          <div className=" border-b-2 pb-5 mt-2 border-grey flex justify-between">
            <p>Role</p>
            <p>Front-End Developer</p>
          </div>
          <div className="flex gap-5 mt-8">
            <button className=" underline-btn ">
              <a className="" href="">
                Live demo
              </a>
            </button>
            <button className="underline-btn">
              <a href="">See on Github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
