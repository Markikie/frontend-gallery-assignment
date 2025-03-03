import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <h1 className="text-3xl font-bold underline">
        Image Gallery 
        </h1>
      <Gallery />
    </main>
  );
}