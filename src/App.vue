<script setup lang="ts">
useToggle(useDark())
</script>

<template>
  <div max-w-80 w-100 px-2>
    <h1 mb-2 text-3xl text-black dark:text-white>
      Rectangle Creator
    </h1>
    <p mb-8 text-sm text-sky-500 font-mono dark:text-sky-300>
      Figma plugin demo
    </p>
    <RectangleCreator />
  </div>
</template>
