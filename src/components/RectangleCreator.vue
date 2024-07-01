<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)

  const create = () => {
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count.value } }, '*')
  }

  const cancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }
</script>

<template>
  <h1 text-4xl>Rectangle Creator</h1>
  <p>Count: <input v-model="count"></p>
  <div flex gap-2>
    <button btn @click="create">Create</button>
    <button btn @click="cancel">Cancel</button>
  </div>
</template>
