import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PeopleImg from '../../../public/images/people.png'
import avatarsImg from '../../../public/images/avatars.png'

const Hero = () => {
  return (
    <div className="ml-10 mr-10 flex flex-col min-h-screen justify-center leading-10 items-center overflow-y-auto">
    <div className="leading-normal">
      <h1 className="text-4xl font-bold text-center pb-6">
        Elevate Your Team's <br />
        Collaboration
      </h1>
      <p className="text-sm font-bold text-center">
        giving your team the freedom to express and <br />
        collaborate effortlessly.
      </p>
    </div>
    <div>
      <Button className="bg-black mt-6">
        <Link href={'/signup'}>
          Get CoolabHub free
        </Link>
      </Button>
    </div>
    <div className="mt-6">
      <Image 
      src={PeopleImg}
      width={500}
      height={500}
      alt="Picture of the author"
      className="mx-auto"/>
    </div>
    <div className="mt-16">
      <div className="leading-normal">
        <h1 className="text-4xl font-bold text-center pb-6">
          Join a global movement. Unleash <br />your creativity.
        </h1>
        <p className="text-sm font-bold text-center">
        Our vibrant community produces content, teaches courses,<br /> and leads events all over the world.
        </p>
      </div>
      <div className="mt-6">
      <Image 
      src={avatarsImg}
      width={800}
      height={800}
      alt="Picture of the author"
      className="mx-auto"/>
    </div>
    </div>
  </div>
  );
};

export default Hero;
