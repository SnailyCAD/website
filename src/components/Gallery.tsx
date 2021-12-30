import ImageGallery from "react-image-gallery";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const images = [
  {
    original: "https://cad-docs.netlify.app/cad_settings.png",
  },
  {
    original: "https://cad-docs.netlify.app/admin_dashboard.png",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

export function Gallery() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl pb-10 mt-5">
      <h1 className="max-w-5xl text-2xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl">
        Gallery
      </h1>

      <div className="mt-10 group">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={false}
          showThumbnails={false}
          slideOnThumbnailOver
          renderLeftNav={(onClick) => <Arrow onClick={onClick} dir="left" />}
          renderRightNav={(onClick) => <Arrow onClick={onClick} dir="right" />}
        />
      </div>
    </section>
  );
}

function Arrow({ dir, onClick }: { dir: "left" | "right"; onClick: any }) {
  const position = dir === "left" ? "left-0" : "right-0";

  return (
    <button
      className={[
        "opacity-0 flex group-hover:opacity-100 absolute top-0 w-8 h-full z-50 bg-black/20 transition-all flex-col justify-center items-center",
        position,
      ].join(" ")}
      onClick={onClick}
    >
      {dir === "left" ? <ArrowLeft width={25} height={25} /> : <ArrowRight width={25} height={25} />}
    </button>
  );
}
