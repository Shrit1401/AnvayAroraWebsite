import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="font-light text-left ml-10 mb-10">
        <div className="background-circle" />
        <h1 className="text-8xl mb-10">About Me</h1>

        <div className="font-medium text-left w-[50%] mx-auto">
          <p className="text-md">hello</p>
          <p className="text-4xl">I'm Anvay Arora</p>
          <p className="text-4xl">I'm a 3rd year student at IIT Roorkee</p>
        </div>
      </div>

      <div
        className="border-2 border-dashed border-white w-[80%] 
        mx-auto
        rounded-lg"
      />

      <p className="text-gray-400 w-[80%] text-justify mx-auto mt-10">
        I am a 3rd year student at IIT Roorkee. I am a full stack developer and
        have worked on various projects. I am also a competitive programmer and
        have a good grasp on data structures and algorithms. I am also a
        designer and have worked on various projects. I am also a competitive
        programmer and have a good grasp on data structures and algorithms. I am
      </p>

      <img className="mx-auto my-10 w-[70%] rounded-lg h-[30%] border-2 border-dashed border-white" src="https://cdn.dribbble.com/users/694362/screenshots/12046680/media/39c16fe5a092f022df748bc25a8c239b.jpg?compress=1&resize=1000x750&vertical=top" alt="" />
    </div>
  );
};

export default About;
