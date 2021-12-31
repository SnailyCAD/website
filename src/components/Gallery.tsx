import * as React from "react";
import ImageGallery from "react-image-gallery";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const images = [
  "https://cad-docs.netlify.app/admin_dashboard.png",
  "https://cad-docs.netlify.app/cad_settings.png",
  "https://cad-docs.netlify.app/citizen_info.png",
  "https://cad-docs.netlify.app/citizens.png",
  "https://cad-docs.netlify.app/create_citizen.png",
  "https://cad-docs.netlify.app/dispatch.png",
  "https://cad-docs.netlify.app/live_map.png",
  "https://cad-docs.netlify.app/ems_fd_dashboard.png",
  "https://cad-docs.netlify.app/leo.png",
  "https://cad-docs.netlify.app/leo2.png",
  "https://cad-docs.netlify.app/manage_users.png",
  "https://cad-docs.netlify.app/manage_values.png",
  "https://cad-docs.netlify.app/my_officers.png",
  "https://cad-docs.netlify.app/tow_dashboard.png",
];

export function Gallery() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5">
      <h1 className="max-w-5xl text-3xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl">
        Gallery
      </h1>

      <div className="mt-10 group">
        <ImageGallery
          items={images.map((v) => ({ original: v }))}
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
  const position = dir === "left" ? "left-2" : "right-2";

  return (
    <button
      className={[
        "opacity-0 group-hover:opacity-100 transition-all absolute top-1/2 w-12 h-12 z-50 bg-slate-700 rounded-full grid place-items-center shadow-lg shadow-slate-700/30",
        position,
      ].join(" ")}
      onClick={onClick}
    >
      {dir === "left" ? (
        <ArrowLeft width={25} height={25} />
      ) : (
        <ArrowRight width={25} height={25} />
      )}
    </button>
  );
}
