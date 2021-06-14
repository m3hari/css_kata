<template>
  <!-- mobile layout: css-grid   -->
  <div class="desktop:hidden grid h-full p-4 grid-cols-2 gap-2">
    <Card
      :id="1"
      :color="colors[0]"
      @click="shuffle"
      class="order-1 col-span-2"
    />
    <Card
      :id="2"
      :color="colors[1]"
      @click="shuffle"
      class="order-4 col-span-2"
    />
    <Card :id="3" :color="colors[2]" @click="shuffle" class="order-2" />
    <Card :id="4" :color="colors[3]" @click="shuffle" class="order-3" />
    <Card :id="5" :color="colors[4]" @click="shuffle" class="order-6" />
    <Card :id="6" :color="colors[5]" @click="shuffle" class="order-8" />
    <Card
      :id="7"
      :color="colors[6]"
      @click="shuffle"
      class="order-5 col-span-2"
    />
    <Card :id="8" :color="colors[7]" @click="shuffle" class="order-7" />
    <Card :id="9" :color="colors[8]" @click="shuffle" class="order-9" />
  </div>

  <!-- Desktop layout: flexbox   -->
  <div class="hidden desktop:flex h-full p-4 flex-col">
    <div class="flex-grow flex">
      <Card
        :id="1"
        :color="colors[0]"
        @click="shuffle"
        class="mr-2 flex-grow"
      />

      <div class="flex-grow flex flex-col">
        <Card
          :id="2"
          :color="colors[1]"
          @click="shuffle"
          class="flex-grow mb-2"
        />

        <div class="flex flex-grow">
          <Card
            :id="3"
            :color="colors[2]"
            @click="shuffle"
            class="flex-grow mr-2"
          />
          <Card :id="4" :color="colors[3]" @click="shuffle" class="flex-grow" />
        </div>
      </div>
    </div>

    <div class="flex-grow flex mt-2">
      <div class="flex flex-col flex-grow-3 mr-2 order-1">
        <Card
          :id="5"
          :color="colors[4]"
          @click="shuffle"
          class="flex-grow mb-2"
        />

        <Card :id="6" :color="colors[5]" @click="shuffle" class="flex-grow-2" />
      </div>

      <Card
        :id="7"
        :color="colors[6]"
        @click="shuffle"
        class="order-2 flex-grow-4 mr-2"
      />

      <div class="flex flex-col flex-grow-3 order-3">
        <Card
          :id="8"
          :color="colors[7]"
          @click="shuffle"
          class="mb-2 flex-grow-2"
        />
        <Card :id="9" :color="colors[8]" @click="shuffle" class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "./components/card.vue";

export default defineComponent({
  name: "App",
  components: { Card },
  setup() {
    const colors = ref([
      "#f08a5d",
      "#b83b5e",
      "#6a2c70",
      "#00adb5",
      "#233e8b",
      "#892cdc",
      "#355c7d",
      "#6c5b7b",
      "#6d4c41",
    ]);

    return {
      colors,
      shuffle: () => {
        colors.value = colors.value.sort(() => Math.random() - 0.5);
      },
    };
  },
});
</script>
