import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Bookmark, MapPin } from "lucide-react";
import Link from "next/link";

export default function JobCards({ job }) {
  return (
    <div>
      <Card className="w-card">
        <CardHeader>
          <CardTitle className="font-medium text-lg">
            <Link href={`/jobs/${job._id}`} className="hover:underline">
              {job.title}
            </Link>
          </CardTitle>
          <div className="flex  items-center gap-3">
            <p className="text-green-700 bg-green-100 pl-2 pr-2">
              {job.jobType.toUpperCase()}
            </p>
            <CardDescription>Salary:${job.salary}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex  justify-between items-center">
          <div className="flex gap-5 items-center">
            <Image src={job.companyLogo} width={48} height={48} />
            <div>
              <h1 className=" text-lg">{job.company}</h1>
              <div className="flex text-gray-500 items-center ">
                <MapPin />
                <CardDescription>{job.companyLocation}</CardDescription>
              </div>
            </div>
          </div>
          <Bookmark className="text-gray-500" />
        </CardContent>
      </Card>
    </div>
  );
}
