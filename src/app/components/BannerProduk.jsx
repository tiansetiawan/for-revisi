"use client";

import Image from "next/image";

export default function BannerProduk({ kategori }) {
  // Tentukan sumber media berdasarkan kategori
  const getMediaSource = () => {
    switch (kategori) {
      case "Concrete Roof":
        return {
          type: "image",
          src: "/images/Spanduk web Cisangkan.png",
        };
      case "Paving Block":
        return {
          type: "image",
          src: "/images/BannerPb.jpg",
        };
      case "Concrete Block":
        return {
          type: "image",
          src: "/images/BannerCb.jpg",
        };
      case "Utility":
        return {
          type: "image",
          src: "/images/BannerCb.jpg",
        };
      default:
        return {
          type: "image",
          src: "/images/Spanduk web Cisangkan.png",
        };
    }
  };

  const media = getMediaSource();

  return (
    <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
      {media.type === "video" ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image src={media.src} alt={`Banner ${kategori}`} width={1764} height={460} className="w-full h-full object-cover object-center" priority quality={100} sizes="100vw" />
      )}
    </div>
  );
}
