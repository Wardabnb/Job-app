"use client";
import { getOneJob, getOneJobs } from "@/api/jobs";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import {
  ArrowRight,
  Bookmark,
  CalendarDays,
  Facebook,
  Link,
  Linkedin,
  Mail,
  Map,
  Twitter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dayjs from "dayjs";
import ApplyDialogue from "@/components/ApplyDialogue";
export default function Page() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getOneJob(id),
    enabled: !!id,
  });
  console.log("data", data);
  if (isLoading) return <div>Loading ...</div>;
  return (
    <div className="">
      <div className="flex justify-around items-center bg-gray-200 p-6">
        <div className="">Job Details</div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-500">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-gray-500">
                Find Job
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-gray-500">
                {data?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Find Details</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-around  w-full mt-5">
        <div className="flex gap-4">
          <Image
            src={data.companyLogo}
            className="object-contain"
            height={50}
            width={50}
          />
          <div>
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            at<span className="ml-1 text-gray-600">{data.company}</span>{" "}
            <Badge className="bg-[#0BA02C] text-white mr-2">
              {data.jobType}
            </Badge>
            <Badge>Featured</Badge>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="bg-[#E7F0FA] h-12 border-0">
            <Bookmark className="text-[#0A65CC] " />
          </Button>
          <ApplyDialogue></ApplyDialogue>
        </div>
      </div>
      <div className="flex justify-around mt-20">
        <div>
          <h2 className="ml-72 font-medium">Job Description</h2>
          <p className="w-para ml-72 pt-3">
            {data?.description}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            voluptate, consectetur repudiandae minima ea saepe facilis sit
            exercitationem a ut amet ullam. Atque aspernatur perspiciatis
            eligendi quaerat odio esse tenetur!
          </p>
        </div>
        <div className="m-5 w-card1 mr-52">
          <Card>
            <CardContent className="flex text-center w-[536px] justify-around items-center p-4">
              <div className="">
                <p>Salary (Dz)</p>
                <p className="text-green-500">
                  {data?.salary - 1000}-{data?.salary + 1000}
                </p>
                <p className="text-gray-500">Yearly Salary</p>
              </div>
              <Separator
                orientation="vertical"
                className="h-16 bg-gray-200"
              ></Separator>
              <div className="flex flex-col justify-center items-center gap-2">
                {" "}
                <Map className="text-blue-500" />
                <p>Job Location</p>
                <p>{data?.location}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-3">
            <CardContent>
              <h1 className="mt-3 font-medium">Job Overview</h1>
              <div className="flex flex-col justify-center items-center gap-2">
                {" "}
                <CalendarDays />
                <p>Job Posted</p>
                <p>{dayjs(data.createdAt).format("DD MMM YYYY ")}</p>
              </div>
            </CardContent>
            <hr />
            <CardContent>
              <h1 className="mt-3 font-medium">Share this job:</h1>
              <div className="flex items-center mt-5 gap-5 ">
                <div className="flex gap-2 text-blue-500 bg-blue-100 p-2 rounded">
                  <Link />
                  Copy Links
                </div>

                <div className="bg-blue-100 p-2 rounded text-blue-500">
                  <Linkedin />
                </div>
                <div className="bg-blue-500 p-2 rounded text-white">
                  <Facebook />
                </div>
                <div className="bg-blue-100 p-2 rounded text-blue-500">
                  <Twitter />
                </div>
                <div className="bg-blue-100 p-2 rounded text-blue-500">
                  <Mail />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
