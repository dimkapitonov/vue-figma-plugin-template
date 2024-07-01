<script setup lang="ts">
const count = ref(0)

function create() {
  parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count.value } }, '*')
}

function cancel() {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
</script>

<template>
  <h1 text-4xl>
    Rectangle Creator
  </h1>
  <p>Count: <input v-model="count"></p>
  <div flex gap-2>
    <button btn @click="create">
      Create
    </button>
    <button btn @click="cancel">
      Cancel
    </button>
  </div>
</template>
