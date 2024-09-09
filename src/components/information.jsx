import { BellDot } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Information() {
  return (
    <div className="flex items-center gap-5 ">
      <BellDot />
      <Image src="/avatar.png" width={48} height={48} />
    </div>
  );
}
