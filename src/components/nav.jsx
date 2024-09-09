"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
export default function Navbar() {
  const languages = [
    {
      code: "us",
      name: "English",
      flagUrl: "https://flagcdn.com/w20/us.png",
    },
    { code: "fr", name: "French", flagUrl: "./fr.png" },
    {
      code: "dz",
      name: "Arabic",
      flagUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXMZXM1pLYC1ERkj6BYKEqZoXQ_pWFq_1tQ&s",
    },
    // Ajoutez d'autres pays si nécessaire
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const currentLanguage = languages.find(
    (language) => language.code === selectedLanguage
  );
  return (
    <main className="bg-white ">
      <div className="text-black">
        <header className="bg-top p-3">
          <nav className="flex justify-around">
            <ul className="flex gap-5">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <Link href="/jobs">Find Job</Link>
              </li>
              <li>
                <a href="">Employers</a>
              </li>
              <li>
                <a href="">Candidates</a>
              </li>
              <li>
                <a href="">Pricing Plans</a>
              </li>
              <li>
                <a href="">Customer Supports</a>
              </li>
            </ul>

            <ul className="flex gap-5">
              <li className="flex">
                <PhoneCall />
                +1-202-555-0178
              </li>
              <li className="ml-4 flex items-center">
                <Image
                  src={currentLanguage.flagUrl}
                  alt={`${currentLanguage.name} flag`}
                  width={20}
                  height={14}
                  quality={100}
                />
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="ml-2"
                >
                  {languages.map((language) => (
                    <option key={uuidv4()} value={language.code}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </main>
  );
}
