<script setup lang="ts">
const count = ref()

function create() {
  parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count.value } }, '*')
}
</script>

<template>
  <div flex flex-col gap-2>
    <input
      v-model="count"
      input
      placeholder="Enter a number"
      autocomplete="false"
      @keydown.enter="create"
    >
    <button btn :disabled="!count" @click="create">
      Create
    </button>
  </div>
</template>
