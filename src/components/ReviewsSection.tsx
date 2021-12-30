import { REVIEWS } from "../data/reviews";

const DISCORD_URL = ""

export function ReviewsSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl mt-10 py-20">
      <h1 className="font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-5xl">
        What people are saying
      </h1>

      <p className="my-5 mb-10 max-w-3xl text-xl font-medium text-center">
        Here is what people are saying about SnailyCAD.
      </p>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
        {REVIEWS.map((review) => (
          <div className="rounded-md p-6 bg-slate-700  shadow-lg relative" key={review.name}>
            <header className="flex items-center gap-4 mb-4">
              <img
                draggable={false}
                className="rounded-full"
                width={40}
                height={40}
                src={review.imageURL}
              />
              <h3 className="text-lg text-gray-200 font-medium">{review.name}</h3>
            </header>

            <p>{review.text}</p>
          </div>
        ))}
      </div>

      <a href={DISCORD_URL} className="mt-7 text-slate-300 font-medium underline cursor-pointer">Join our Discord to post a review.</a>
    </section>
  );
}
