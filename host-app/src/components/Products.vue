<script setup>
import p from "./products.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const products = ref(p);
const store = useStore();
const totalAmount = computed(() => store.getters.totalAmount);

const addToCart = (p) => {
  store.commit("add", p);
};
</script>

<template>
  <div class="mt-12">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">
        Store
      </h1>
    </div>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="p in products"
        :key="p.id"
        class="mt-4 max-w-md md:mt-4 w-1/2"
      >
        <div class="rounded-3xl bg-white shadow-lg">
          <div class="px-4 py-6 sm:px-8 sm:py-10">
            <div class="flow-root">
              <ul class="-my-8">
                <li
                  class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                >
                  <div class="shrink-0 relative">
                    <img
                      class="h-24 w-24 max-w-full rounded-lg object-cover"
                      :src="p.photo"
                      alt=""
                    />
                  </div>

                  <div class="relative flex flex-1 flex-col justify-between">
                    <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div class="pr-8 sm:pr-5">
                        <p class="text-base font-semibold text-gray-900">
                          {{ p.name }}
                        </p>
                        <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          {{ p.size }}
                        </p>
                      </div>

                      <div
                        class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end"
                      >
                        <p
                          class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right"
                        >
                          {{ p.formatPrice }}
                        </p>
                      </div>
                    </div>

                    <div
                      class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto"
                    >
                      <button
                        @click="addToCart(p)"
                        type="button"
                        class="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-1 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
