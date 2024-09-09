"use client";
import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { sendGAEvent } from "@next/third-parties/google";
import { v4 as uuidv4 } from "uuid";
import Search from "@/components/search";
import { CarouselSize } from "@/components/Carousel";
export default function Home() {
  const categories = [
    {
      img: "./first-1.png",
      title: "Graphics & Design",
      description: "357 Open position",
    },
    {
      img: "./2-1.png",
      title: "Code & Programing",
      description: "312 Open position",
    },
    {
      img: "./3-1.png",
      title: "Digital Marketing",
      description: "297 Open position",
    },
    {
      img: "./4-1.png",
      title: "Video & Animation",
      description: "247 Open position",
    },
    {
      img: "./5-1.png",
      title: "Music & Audio",
      description: "204 Open position",
    },
    {
      img: "./6-1.png",
      title: "Account & Finance",
      description: "167 Open position",
    },
    {
      img: "./7-1.png",
      title: "Health & Care",
      description: "125 Open position",
    },
    {
      img: "./8-1.png",
      title: "Data & Science",
      description: "57 Open position",
    },
  ];
  const companies = [
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
    {
      title: "Dribbble",
      description: "Featured",
      localisation: "Dhaka, Bangladesh",
    },
  ];

  const services = [
    {
      image: "/first.png",
      title: "1,75,324",
      description: "Live Job",
    },
    {
      image: "/second.png",
      title: "97,354",
      description: "Companies",
    },
    {
      image: "/third.png",
      title: "38,47,154",
      description: "Candidates",
    },
    {
      image: "/first.png",
      title: "532",
      description: "New Jobs",
    },
  ];

  return (
    <>
      <section className="flex justify-around m-5">
        <Search />
        <div className="flex gap-5">
          <button
            className="border-2 p-2 text-blue-600"
            onClick={() =>
              sendGAEvent("event", "buttonClicked", { value: "xyz" })
            }
          >
            Sign In
          </button>
          <button className=" p-2 bg-blue-600 text-white ">Post A Jobs</button>
        </div>
      </section>

      <div className="bg-white ">
        <section className="bg-top pt-10">
          <div className="flex justify-arround items-start">
            <div className="flex flex-col  text-justify items-center  gap-0">
              <h1 className="width-h1 size-h1 gap-0">
                Find a job that suits your interest & skills.
              </h1>
              <p className="width-h1 text-gray-500 text-wrap text-xs mt-5">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
              <div className="flex bg-white justify-center items-center p-2 ml-40 mt-6">
                <Search className="text-blue-500" />
                <input
                  placeholder="Job tittle, Keyword..."
                  className="border-r-2 w-60 p-2"
                />
                <MapPin className="text-blue-500 m-2" />
                <input placeholder="Your Location" />
                <button className="bg-blue-600 text-white p-2 ">
                  Find Job
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-5">
                <span className="text-gray-400">suggestion:</span> Designer,
                Programing,
                <span className="text-blue-500"> Digital Marketing,</span>{" "}
                Video, Animation.
              </p>
            </div>
            <div className="ml-20">
              <Image
                src="/Illustration.png"
                width={500}
                height={652}
                quality={75}
              />
            </div>
          </div>
          <div className="flex justify-around p-11">
            {services.map((service) => (
              <div
                className="flex bg-white justify-arround p-3 w-64 gap-4 items-center"
                key={uuidv4()}
              >
                <Image
                  src={service.image}
                  width={72}
                  height={72}
                  quality={75}
                />
                <div>
                  <h1 className="font-bold">{service.title}</h1>
                  <p className="text-gray-500 text-xs ">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-20 ml-60 w-van">
          <h1 className="font-medium text-start text-xl">
            Most Popular Vacancies
          </h1>
          <div className="flex flex-wrap gap-20 mt-10 items-start justify-start">
            <div className="w-64">
              <h1>Anesthesiologists</h1>
              <p>45,904 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Surgeons</h1>
              <p>50,364 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Obstetricians-Gynecologists</h1>
              <p>4,339 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Orthodontists</h1>
              <p>20,079 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Maxillofacial Surgeons</h1>
              <p>74,875 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Software Developer</h1>
              <p>43359 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Psychiatrists</h1>
              <p>18,599 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Data Scientist</h1>
              <p>28,200 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Financial Manager</h1>
              <p>61,391 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Management Analysis</h1>
              <p>93,046 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>IT Manager</h1>
              <p>50,963 Open Positions</p>
            </div>
            <div className="w-64">
              <h1>Operations Research Analysis</h1>
              <p>16,627 Open Positions</p>
            </div>
          </div>
        </section>
        <section className="mt-20 bg-top pt-20 ">
          <h1 className="text-center font-semibold text-2xl">
            How jobpilot work
          </h1>
          <img src="./process.png" className=" image ml-48 p-16" />
        </section>
        <section>
          <div className="flex justify-around   p-4">
            <h1 className="text-center font-semibold text-2xl">
              Popular category
            </h1>
            <div className="flex gap-5 border p-2 ml-96 pr-5 w-32">
              <a href="" className="text-blue-500 text-sm">
                View All
              </a>
              <ArrowRight className="text-blue-500" />
            </div>
          </div>
          <div className="flex flex-wrap gap-10 w-96 ml-64 mt-10 w-van items-center pb-12">
            {categories.map((category) => (
              <div key={uuidv4()} className=" flex gap-3 w-72">
                <img src={category.img} alt={category.title} />
                <div>
                  <h1 className="font-medium text-base">{category.title}</h1>
                  <p className="text-gray-500 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr />
        <section className=" mt-20 ml-60 w-van mr-60">
          <h1 className="font-medium text-start text-xl ">Top companies</h1>
          <div className="flex flex-wrap gap-7 mt-7  ">
            {companies.map((company) => (
              <div key={uuidv4()} className=" border-2 p-2">
                <div className="flex gap-2 w-72 justify-center items-center">
                  <img src="./EmployersLogo.png"></img>
                  <div>
                    <div className="flex gap-3">
                      <h1 className="font-medium text-start  ">
                        {company.title}
                      </h1>
                      <p className="font-light text-red-700 bg-red-100 pl-3 pr-3 rounded-lg">
                        {company.description}
                      </p>
                    </div>
                    <div className="flex">
                      <MapPin className="text-gray-500" />
                      <p className="text-gray-500">{company.localisation}</p>
                    </div>
                  </div>
                </div>
                <button className="text-center border-2 w-full mt-5 p-2 bg-blue-200 text-blue-800  ">
                  Open Position (3)
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-20 bg-top flex flex-col justify-center items-center gap-12 pb-5">
          <h1 className="font-medium text-start text-xl pt-20">
            Clients Testimonial
          </h1>
          <CarouselSize />
          <Image src="/Tracker.png" width={96} height={10} />
        </section>
        <section className="flex justify-center items-center gap-5 p-28">
          <Card className="bg-condidat ">
            <Image
              src="/Candidat.png"
              width={640}
              height={290}
              style={{ transform: "scaleX(-1) " }}
            />
            <CardHeader className="cart-header  gap-5">
              <CardTitle className="font-normal">Become a Candidate</CardTitle>
              <CardDescription className="w-72 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus a dolor convallis efficitur.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex bg-white text-blue-500 rounded-lg ml-5 justify-start items-start w-48 text-center gap-2 p-5 position">
              <button>Register now</button>
              <ArrowRight />
            </CardContent>
          </Card>
          <Card className="bg-employer">
            <Image src="/Employer.png" width={600} height={1} />
            <CardHeader className="cart-header  gap-5">
              <CardTitle className="font-normal">Become a Candidate</CardTitle>
              <CardDescription className="w-72 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus a dolor convallis efficitur.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex text-blue-500  bg-white rounded-lg ml-5 justify-start items-start w-48 text-center gap-2 p-5 position">
              <button>Register now</button>
              <ArrowRight />
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
