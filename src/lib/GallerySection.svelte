<script lang="ts">
  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css/bundle";

  import admin_dashboard from "../images/admin_dashboard.png";
  import cad_settings from "../images/cad_settings.png";
  import citizen_info from "../images/citizen_info.png";
  import citizens from "../images/citizens.png";
  import create_citizen from "../images/create_citizen.png";
  import dispatch from "../images/dispatch.png";
  import live_map from "../images/live_map.png";
  import ems_fd_dashboard from "../images/ems_fd_dashboard.png";
  import leo from "../images/leo.png";
  import leo2 from "../images/leo2.png";
  import manage_users from "../images/manage_users.png";
  import manage_values from "../images/manage_values.png";
  import my_officers from "../images/my_officers.png";
  import tow_dashboard from "../images/tow_dashboard.png";

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
  ];
</script>

<section id="gallery" class="flex flex-col items-center justify-center w-full max-w-5xl py-20 mt-5">
  <h1
    class="max-w-5xl text-3xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl"
  >
    Gallery
  </h1>

  <div class="mt-10 w-full">
    <Swiper loop spaceBetween={25} slidesPerView={1.5}>
      {#each images as image}
        <SwiperSlide width={700}>
          <img
            class="select-none"
            draggable="false"
            src={image}
            alt={image.toString()}
            width="700px"
            height="100%"
          />
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</section>
