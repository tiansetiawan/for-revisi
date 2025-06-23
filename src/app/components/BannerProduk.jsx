"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function BannerProduk({ kategori }) {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  // Tentukan sumber media berdasarkan kategori dan produk
const getMediaSource = () => {
  // Jika ada parameter product (sub product)
  if (product) {
    switch (product) {
      // Concrete Roof Products
      case "Neo Solar System":
        return { type: "image", src: "/images/banners/sub-products/neo-solar-system.jpg" };
      case "Dual Slate":
        return { type: "image", src: "/images/banners/sub-products/dual-slate.jpg" };
      case "Floral":
        return { type: "image", src: "/images/banners/sub-products/floral.jpg" };
      case "Victoria Series":
        return { type: "image", src: "/images/banners/sub-products/victoria-series.jpg" };
      case "Onyx":
        return { type: "image", src: "/images/banners/sub-products/onyx.jpg" };
      case "Multiline":
        return { type: "image", src: "/images/banners/sub-products/multiline.jpg" };
      case "Slate":
        return { type: "image", src: "/images/banners/sub-products/slate.jpg" };
      case "Pine":
        return { type: "image", src: "/images/banners/sub-products/pine.jpg" };
      case "Classic":
        return { type: "image", src: "/images/banners/sub-products/classic.jpg" };
      case "New Royal":
        return { type: "image", src: "/images/banner genteng gelombang.jpg" };
      case "Oriental":
        return { type: "image", src: "/images/banner genteng gelombang.jpg" };
      case "Majestic":
        return { type: "image", src: "/images/banner genteng gelombang.jpg" };;

      // Paving Block Products
      case "Square Set":
        return { type: "image", src: "/images/banners/sub-products/square-set.jpg" };
      case "Classic Set":
        return { type: "image", src: "/images/banners/sub-products/classic-set.jpg" };
      case "Altstadt":
        return { type: "image", src: "/images/banners/sub-products/altstadt.jpg" };
      case "Others":
        return { type: "image", src: "/images/banners/sub-products/paving-others.jpg" };
      case "Guiding Pave":
        return { type: "image", src: "/images/banners/sub-products/guiding-pave.jpg" };
      case "Grass Block":
        return { type: "image", src: "/images/banners/sub-products/grass-block.jpg" };
      case "Concrete Tile":
        return { type: "image", src: "/images/banners/sub-products/concrete-tile.jpg" };
      case "Guiding Tiles":
        return { type: "image", src: "/images/banners/sub-products/guiding-tiles.jpg" };
      case "Kanstein Wet Process":
        return { type: "image", src: "/images/banners/sub-products/kanstein-wet.jpg" };
      case "Kanstein Dry Process":
        return { type: "image", src: "/images/banners/sub-products/kanstein-dry.jpg" };
      case "Tali Air":
        return { type: "image", src: "/images/banners/sub-products/tali-air.jpg" };

      // Concrete Block Products
      case "Concrete Block":
        return { type: "image", src: "/images/banners/sub-products/concrete-block.jpg" };
      case "Ventilation Block":
        return { type: "image", src: "/images/banners/sub-products/ventilation-block.jpg" };
      case "Ventilation Block 3D":
        return { type: "image", src: "/images/banners/sub-products/ventilation-block-3d.jpg" };

      // Utility Products
      case "Concrete Pipe":
        return { type: "image", src: "/images/banners/sub-products/concrete-pipe.jpg" };
      case "Ciswell":
        return { type: "image", src: "/images/banners/sub-products/ciswell.jpg" };

      // Fallback untuk sub produk yang tidak memiliki banner khusus
      default:
        return getMainProductBanner(kategori);
    }
  }
  
  // Jika tidak ada parameter product (main product)
  return getMainProductBanner(kategori);
};

  // Fungsi untuk mendapatkan banner main product
  const getMainProductBanner = (kategori) => {
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
        <Image 
          src={media.src} 
          alt={`Banner ${product || kategori}`} 
          fill
          className="w-full h-full object-cover object-center" 
          priority 
          quality={100}
          sizes="100vw"
        />
      )}
    </div>
  );
}