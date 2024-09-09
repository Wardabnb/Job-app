import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Filters() {
  const router = useRouter();
  const [jobType, setJobType] = useState();
  const [Salary, setSalary] = useState([10, 200000]);

  function handleApplyFilters() {
    console.log("salary", Salary);
    console.log("job type", jobType);

    router.push(
      `/jobs?page=1&jobType=${jobType}&salaryMin=${Salary[0]}&salaryMax=${Salary[1]}`
    );
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <SlidersVertical className="mr-2" size="14" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent className="font-sans flex flex-col">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>This are filters for the jobs</SheetDescription>
        </SheetHeader>
        <h3 className="text-blue-600 mb-5 mt-10">Job Type</h3>
        <RadioGroup
          defaultValue="option-one"
          value={jobType}
          onValueChange={setJobType}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="part-time" id="part-time" />
            <Label htmlFor="Part-time">Part-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="full-time" id="full-time" />
            <Label htmlFor="Full-time">Full-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="contract" id="contract" />
            <Label htmlFor="Contract">Contract</Label>
          </div>
        </RadioGroup>
        <Separator className="my-10" />
        <h3 className="text-blue-600 mb-5">Salary (year)</h3>
        <Slider
          max={100000}
          step={1}
          value={Salary}
          onValueChange={setSalary}
        />
        <Button
          className="bg-blue-500 mt-auto text-white"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
      </SheetContent>
    </Sheet>
  );
}
