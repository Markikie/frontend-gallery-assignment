"use client"
import { useState, useEffect, useCallback } from "react";
import ImageCard from "./ImageCard";
import LoadingSpinner from "./LoadingSpinner";
import ImageModal from "./ImageModal";
import { Image } from "@/type/index";

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=9`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status}`);
      }
      const newImages = await response.json();
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="container mx-auto px-4 py-8">
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {images.length === 0 && !loading && !error && (
        <div className="text-center">No images found</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={{
              image: image,
              download_url: image.download_url,
              author: image.author,
            }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {loading && <LoadingSpinner />}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          download_url={selectedImage.download_url}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;