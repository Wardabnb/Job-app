"use client";
import Image from "next/image";
import { useState } from "react";

export default function Search() {
  const languages = [
    {
      code: "us",
      name: "English",
      flagUrl: "https://flagcdn.com/w20/us.png",
    },
    { code: "fr", name: "French", flagUrl: "/fr.png" }, // Ensure fr.png is in the public directory
    {
      code: "dz",
      name: "Arabic",
      flagUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXMZXM1pLYC1ERkj6BYKEqZoXQ_pWFq_1tQ&s",
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const currentLanguage = languages.find(
    (language) => language.code === selectedLanguage
  );

  return (
    <div className="flex gap-5 items-center">
      <Image
        src="/jobpilot.png" // Ensure jobpilot.png is in the public directory
        alt="Jobpilot Logo"
        width={40}
        height={40}
        quality={100}
      />
      <h1>Jobpilot</h1>
      <div className="flex gap-7 justify-around border p-1 items-center">
        <div className="flex justify-center gap-2 ml-2">
          <img
            src={currentLanguage.flagUrl}
            alt={`${currentLanguage.name} flag`}
            width={24}
            height={16}
          />
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="ml-2"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
        <span className="border-l-2 h-8"></span>

        <input
          type="text"
          placeholder="Job title, keyword, company"
          className="w-96"
        />
      </div>
    </div>
  );
}
