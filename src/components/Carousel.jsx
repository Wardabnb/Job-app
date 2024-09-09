import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

export function CarouselSize() {
  const [ratings, setRatings] = React.useState([0, 0, 0]);

  const handleStarClick = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const clients = [
    {
      description:
        "“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”",
      userImage: "/image.png",
      name: "Robert Fox",
      profession: "UI/UX Designer",
    },
    {
      description:
        "“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”",
      userImage: "/image-2.png",
      name: "Bessie Cooper",
      profession: "Creative Director",
    },
    {
      description:
        "“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”",
      userImage: "/image-3.png",
      name: "Jane Cooper",
      profession: "Photographer",
    },
  ];

  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent className="flex gap-4">
        {clients.map((client, index) => (
          <CarouselItem
            key={index}
            className="flex-grow flex-shrink-0 max-w-xs md:max-w-md lg:max-w-lg"
          >
            <Card className="h-full">
              <CardContent className="flex flex-col p-6 gap-5 justify-center  bg-white h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIndex) => {
                    const starValue = starIndex + 1;
                    return (
                      <Star
                        key={starIndex}
                        size={24}
                        color={
                          starValue <= ratings[index] ? "#ffc107" : "#e4e5e9"
                        }
                        onClick={() => handleStarClick(index, starValue)}
                        style={{ cursor: "pointer" }}
                      />
                    );
                  })}
                </div>

                <p className="w-72">{client.description}</p>
                <div className="flex  gap-3">
                  <Image
                    src={client.userImage}
                    width={48}
                    height={48}
                    alt={client.name}
                    className="rounded-full"
                  />
                  <div className="flex  items-center gap-56">
                    <div className="">
                      <h1 className="text-lg">{client.name}</h1>
                      <p className="text-gray-500">{client.profession}</p>
                    </div>
                    <Image src="/vector-2.png" height={36} width={36} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
