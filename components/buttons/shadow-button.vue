<template>
  <div
    class="group relative inline-block focus:outline-none focus:ring cursor-pointer"
  >
    <span
      class="absolute inset-0 translate-x-0 translate-y-0 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
      :class="color"
    ></span>

    <span
      class="relative inline-block px-4 py-2 text-sm font-bold uppercase tracking-widest uppercase border-2 border-black text-white"
    >
      <slot name="icon"></slot>
      {{ $t(text) }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  text: { type: String, required: true },
  color: { type: String, default: "bg-red-600" },
});
// export default {
//   name: "ShadowButton",
//   props: ["text", "color"],
//   emits: ["onClick"],
//   methods: {
//     handleClick() {
//       this.$emit("onClick");
//     },
//   },
// };
</script>
