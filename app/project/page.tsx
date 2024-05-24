"use client";
import Image from "next/image";
export default function Project() {
  return (
    <>
      <div className="min-h-screen py-20 px-3 flex justify-center items-center">
        <div className="">
          <Image
            src="/on-progress-img.png"
            alt="image description"
            width={250}
            height={250}
            sizes="100vw"
          />
          <p className="text-center">Working on it.</p>
        </div>
      </div>
    </>
  );
}
