import { BackButton } from "@/app/[id]/_components/back-button";

export function ResultNotFountSection() {
  return (
    <section className="flex flex-col w-full justify-center items-center gap-6 font-bold mt-24">
      <img
        src="http://localhost:3000/image-not-found.svg"
        alt="No matching information found."
        className="w-72 rounded-2xl"
      />
      <h3 className="text-5xl">Oops!</h3>
      <span className="text-3xl">No matching information found.</span>
      <BackButton />
    </section>
  );
}
