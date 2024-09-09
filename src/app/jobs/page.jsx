"use client";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/api/jobs";
import JobCards from "@/components/JobCards";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LocateFixed, MapPin, Search, SlidersVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import Filters from "@/components/Filters";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = searchParams.get("page") || 1;
  const titleParam = searchParams.get("title") || "";
  const locationParam = searchParams.get("location") || "";
  const jobType = searchParams.get("jobType") || "";
  const SalaryMin = searchParams.get("salaryMin") || "";
  const SalaryMax = searchParams.get("salaryMax") || "";

  const [title, setTitle] = useState(titleParam);
  const [location, setLocation] = useState(locationParam);

  // Update queryKey to include currentPage, title, and location
  const { data } = useQuery({
    queryKey: [
      "jobs",
      currentPage,
      title,
      location,
      jobType,
      SalaryMax,
      SalaryMin,
    ], // Dynamic queryKey
    queryFn: () =>
      getJobs({
        page: currentPage,
        pageSize: 9,
        title,
        location,
        jobType: jobType,
        salaryMax: SalaryMax,
        salaryMin: SalaryMin,
      }),
  });

  function findJob() {
    const params = new URLSearchParams();

    if (title) params.set("title", title);
    if (location) params.set("location", location);

    params.set("page", 1); // Reset to page 1 on new search

    router.push(`/jobs?${params.toString()}`);
  }

  return (
    <>
      <Suspense>
        <div className="flex bg-white items-center p-2 ml-80 mr-96 rounded-xl mt-6 border w-search justify-center">
          <Search />

          <input
            placeholder="Search by: Job title, Position, Keyword."
            className="w-96"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MapPin className="text-blue-500 m-2" />
          <div className="flex">
            <input
              placeholder="City, state or zip code"
              className="w-80"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <LocateFixed />
          </div>
          <Filters />
          <button
            className="bg-blue-500 p-3 ml-4 rounded text-white"
            onClick={findJob}
          >
            Find Job
          </button>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          {data?.jobs.map((job) => (
            <JobCards key={job._id} job={job} />
          ))}
          {data?.jobs.length === 0 && <div>Job not found</div>}
        </div>

        <Pagination className="m-5">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/jobs?page=${
                  parseInt(currentPage) - 1
                }&title=${title}&location=${location}`}
                aria-disabled={currentPage <= 1}
                className={
                  currentPage <= 1
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>

            {Array.from({ length: data?.NumberOfPage }).map((_, page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page + 1 == currentPage}
                  className={cn(
                    "rounded-full",
                    page + 1 == currentPage && " bg-[#0A65CC] text-white"
                  )}
                  href={`/jobs?page=${
                    page + 1
                  }&title=${title}&location=${location}`}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={`/jobs?page=${
                  parseInt(currentPage) + 1
                }&title=${title}&location=${location}`}
                aria-disabled={currentPage > data?.NumberOfPage - 1}
                className={
                  currentPage > data?.NumberOfPage - 1
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Suspense>
    </>
  );
}
