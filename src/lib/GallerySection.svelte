<script lang="ts">
  import { A11y, Keyboard, Lazy } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css/bundle";

  import admin_dashboard from "../images/cad/admin_dashboard.webp";
  import user_perms from "../images/cad/perms.webp";
  import cad_settings from "../images/cad/cad_settings.webp";
  import citizen_info from "../images/cad/citizen_info.webp";
  import citizens from "../images/cad/citizens.webp";
  import create_citizen from "../images/cad/create_citizen.webp";
  import dispatch from "../images/cad/dispatch.webp";
  import live_map from "../images/cad/live_map.jpg";
  import ems_fd_dashboard from "../images/cad/ems_fd_dashboard.webp";
  import leo from "../images/cad/leo.webp";
  import leo3 from "../images/cad/leo3.webp";
  import manage_users from "../images/cad/manage_users.webp";
  import manage_values from "../images/cad/manage_values.webp";
  import my_officers from "../images/cad/my_officers.webp";
  import tow_dashboard from "../images/cad/tow_dashboard.webp";
  import incidents from "../images/cad/incidents.webp";
  import incidents2 from "../images/cad/incidents2.webp";
  import manage_units from "../images/cad/manage_units.webp";
  import manage_courthouse from "../images/cad/manage_courthouse.webp";

  const images = [
    admin_dashboard,
    user_perms,
    cad_settings,
    citizen_info,
    citizens,
    create_citizen,
    dispatch,
    live_map,
    ems_fd_dashboard,
    leo,
    leo3,
    manage_users,
    manage_values,
    my_officers,
    tow_dashboard,
    incidents,
    incidents2,
    manage_units,
    manage_courthouse,
  ];
</script>

<section id="gallery" class="w-full py-32 bg-slate-700">
  <div class="mx-auto max-w-7xl flex flex-col items-center justify-center">
    <h1
      class="max-w-5xl text-3xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl"
    >
      Gallery
    </h1>

    <p class="my-7 max-w-3xl text-lg text-center text-gray-300">
      A list of images that show the most important aspects of a CAD/MDT. There are many, many more
      features that can't be shown below.
    </p>

    <div class="w-full mt-5">
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
            <div class="bg-slate-800 p-10 rounded-xl lg:h-[580px] grid place-content-center">
              <img
                class="select-none rounded-sm shadow-lg"
                draggable="false"
                src={image}
                alt={image.toString()}
                width="800px"
                height="100%"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
  </div>
</section>
