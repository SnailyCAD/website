<script lang="ts">
  import { A11y, Keyboard, Lazy } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css/bundle";

  import admin_dashboard from "../images/cad/admin_dashboard.webp";
  import cad_settings from "../images/cad/cad_settings.webp";
  import citizen_info from "../images/cad/citizen_info.webp";
  import citizens from "../images/cad/citizens.webp";
  import create_citizen from "../images/cad/create_citizen.webp";
  import dispatch from "../images/cad/dispatch.webp";
  import live_map from "../images/cad/live_map.jpg";
  import ems_fd_dashboard from "../images/cad/ems_fd_dashboard.webp";
  import leo from "../images/cad/leo.webp";
  import leo2 from "../images/cad/leo2.webp";
  import manage_users from "../images/cad/manage_users.webp";
  import manage_values from "../images/cad/manage_values.webp";
  import my_officers from "../images/cad/my_officers.webp";
  import tow_dashboard from "../images/cad/tow_dashboard.webp";
  import incidents from "../images/cad/incidents.webp";
  import incidents2 from "../images/cad/incidents2.webp";
  import manage_units from "../images/cad/manage_units.webp";

  const images = [
    admin_dashboard,
    cad_settings,
    citizen_info,
    citizens,
    create_citizen,
    dispatch,
    live_map,
    ems_fd_dashboard,
    leo,
    leo2,
    manage_users,
    manage_values,
    my_officers,
    tow_dashboard,
    incidents,
    incidents2,
    manage_units,
  ];
</script>

<section id="gallery" class="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5">
  <h1
    class="max-w-5xl text-3xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl"
  >
    Gallery
  </h1>

  <p class="my-7 max-w-3xl text-lg text-center text-gray-300">
    A list of images that show the most important aspects of a CAD/MDT. There are many, many more
    features that can't be shown below.
  </p>

  <div class=" w-full">
    <Swiper
      keyboard
      preloadImages
      a11y={{ enabled: true }}
      lazy
      modules={[Keyboard, Lazy, A11y]}
      loop
      spaceBetween={25}
      slidesPerView={1.5}
    >
      {#each images as image, idx}
        <SwiperSlide width={700}>
          <img
            class="select-none"
            draggable="false"
            src={image}
            alt={image.toString()}
            width="700px"
            height="100%"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</section>
