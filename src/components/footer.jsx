import {
  ArrowRight,
  BriefcaseBusiness,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="flex justify-center gap-20 items-start pt-14 ">
        <div className="flex flex-col justify-center w-80 gap-3">
          <div className="flex gap-3">
            <BriefcaseBusiness />
            <h1 className="font-bold">Jobpilot</h1>
          </div>
          <p className="text-gray-500">
            Call now:<span className="text-white"> (319) 555-0115</span>
          </p>
          <p className="text-gray-500">
            6391 Elgin St. Celina, Delaware 10299, New York, United States of
            America
          </p>
        </div>
        <div className="w-52 flex flex-col justify-center  gap-3">
          <h1 className="font-bold">Quick Link</h1>
          <p className="text-gray-500">About</p>
          <div className="flex gap-2">
            <ArrowRight />
            <p>Contact</p>
          </div>

          <p className="text-gray-500">Pricing</p>
          <p className="text-gray-500">Blog</p>
        </div>
        <div className="w-52 flex flex-col justify-center  gap-3">
          <h1 className="font-bold">Candidate</h1>
          <p className="text-gray-500">Browse Jobs</p>
          <p className="text-gray-500">Browse Employers</p>
          <p className="text-gray-500">Candidate Dashboard</p>
          <p className="text-gray-500">Saved Jobs</p>
        </div>
        <div className="w-52 flex flex-col justify-center  gap-3">
          <h1 className="font-bold">Employers</h1>
          <p className="text-gray-500">Post a Job</p>
          <p className="text-gray-500">Browse Candidates</p>
          <p className="text-gray-500">Employers Dashboard</p>
          <p className="text-gray-500">Applications</p>
        </div>
        <div className="w-52 flex flex-col justify-center  gap-3">
          <h1 className="font-bold">Support</h1>
          <p className="text-gray-500">Faqs</p>
          <p className="text-gray-500">Privacy Policy</p>
          <p className="text-gray-500">Terms & Conditions</p>
        </div>
      </div>
      <hr className="border-slate-700 mt-10 " />
      <div className="flex justify-around pt-10 pb-5">
        <p className="text-gray-500 text-sm">
          @ 2021 Jobpilot - Job Portal. All rights Rserved
        </p>
        <div className="flex justify-center items-center gap-4 text-gray-500">
          <Facebook />
          <Youtube />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </section>
  );
}
