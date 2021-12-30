import { REVIEWS } from "../data/reviews";
import { DISCORD_URL } from "./Nav";

export function ReviewsSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5">
      <h1 className="max-w-5xl text-3xl font-black text-center sm:text-4xl md:text-5xl lg:text-6xl text-slate-100/90">
        What people are saying
      </h1>

      <p className="max-w-3xl my-5 mb-10 text-base font-medium text-center md:text-xl">
        Here is what people are saying about SnailyCAD.
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {REVIEWS.map((review) => (
          <div
            className="cursor-default relative p-6 transition-transform rounded-md shadow-lg bg-slate-700 hover:-translate-y-0.5"
            key={review.name}
          >
            <header className="flex items-center gap-4 mb-4">
              <img
                draggable={false}
                className="rounded-full"
                width={40}
                height={40}
                src={review.imageURL}
              />
              <h3 className="text-lg font-medium text-gray-200">{review.name}</h3>
            </header>

            <p>{review.text}</p>
          </div>
        ))}
      </div>

      <a href={DISCORD_URL} className="font-medium underline cursor-pointer mt-7 text-slate-300">
        Join our Discord to post a review.
      </a>
    </section>
  );
}
