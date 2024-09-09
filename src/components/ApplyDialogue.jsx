import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useMutation } from "@tanstack/react-query";
import { addApplicant } from "@/api/jobs";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function ApplyDialogue() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: addApplicant,
  });
  const { id } = useParams();
  const nameRef = useRef();
  const emailRef = useRef();
  const resumeRef = useRef();
  const clRef = useRef();

  function handleAddApplicant() {
    mutate({
      name: nameRef.current.value,
      email: emailRef.current.value,
      resume: resumeRef.current.value,
      coverLetter: clRef.current.value,
      jobId: id,
    });
    setIsOpen(false);
    toast.success("Application ubmitted successfully ");
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="min-w-[200px] bg-[#0A65CC] h-12 text-white">
          Apply Now <ArrowRight className="ml-3 " />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              ref={nameRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              ref={emailRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Resume
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              ref={resumeRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Cover Letter
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              ref={clRef}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddApplicant}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
