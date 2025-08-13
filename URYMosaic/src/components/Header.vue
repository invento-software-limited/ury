<template>
  <header class="bg-white p-4 flex items-center justify-between">
    <!-- Left Section -->
    <div class="flex items-center">
      <p class="ml-20 w-40 h-15 mr-2 text-3xl font-bold uppercase">Mosaic</p>
    </div>

    <!-- Center Section -->
    <div class="flex-1 flex justify-center">
      <p v-if="production_name" class="text-3xl font-medium text-gray-600">
        {{ production_name }}
      </p>
    </div>

    <!-- Right Section -->
    <div class="flex items-center">
      <button
        class="hover:bg-slate-300 text-blue font-semibold px-6 py-1 rounded-md inline-flex justify-center items-center gap-2"
        @click="reloadKOT"
      >
        <svg
          class="w-6 h-6 text-blue-800 dark:text-blue"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
          />
        </svg>
        Refresh
      </button>
    </div>
  </header>
</template>


<script>
import uriMosaicImage from "@/assets/logos/mosaic.jpg";
import {FrappeApp} from "frappe-js-sdk";

const host = window.location.hostname;
const port = window.location.port;
const protocol = window.location.protocol;
const url = port ? `${protocol}//${host}:${port}` : `${protocol}//${host}`;
const frappe = new FrappeApp(url);

export default {
  name: "Header",
  data() {
    return {
      imagePath: uriMosaicImage,
      production: "",
      production_name: "",
      call: frappe.call(),
    };
  },
  mounted() {
    const currentUrl = window.location.href;
    const parts = currentUrl.split("/");
    const lastPart = parts[parts.length - 1] || parts[parts.length - 2];
    this.production = decodeURIComponent(lastPart);
    this.fetchProductionName();
  },
  methods: {
    reloadKOT() {
      window.location.reload();
    },
    async fetchProductionName() {
      return new Promise((resolve, reject) => {
        try {
          this.call
            .get("ury.ury.api.ury_kot_display.get_production_name", {production: this.production})
            .then((result) => {
              this.production_name = result.message
              resolve();
            })
            .catch((error) => {
              reject(error);
            });
        } catch (error) {
          reject(error);
        }
      });
    }

  },
};
</script>
