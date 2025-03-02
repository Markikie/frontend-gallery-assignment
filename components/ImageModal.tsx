"use client";
import { ImageModalProps } from "@/type";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleView = () => {
    window.open(image.download_url, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.download_url;
    link.download = `image-${image.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-3xl w-full m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-800 text-2xl cursor-pointer"
          onClick={onClose}
        >
          x
        </button>
        <Image
          src={image.download_url}
          alt={`Photo by ${image.author}`}
          width={500}
          height={500}
          className="w-full max-h-[70vh] object-contain rounded"
        />
        <div className="flex justify-between items-center">
          <div className="mt-4">
            <p className="text-gray-800">Author: {image.author}</p>
            <p className="text-gray-600">
              Dimensions: {image.width} x {image.height}
            </p>
            
            <Button
              onClick={handleView}
              color="primary"
              variant="shadow"
              className="bg-blue-500 rounded-md h-10 cursor-pointer"
            >
              View Original
            </Button>
          </div>
          
          <div>
            <Button
              onClick={handleDownload}
              color="primary"
              variant="shadow"
              className="bg-blue-500 rounded-md h-10 cursor-pointer"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;