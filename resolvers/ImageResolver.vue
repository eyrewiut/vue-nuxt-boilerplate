<template>
  <div>
    <img class="max-w-full h-auto block" :src="attrs.src" :alt="attrs.alt" :title="attrs.title">
  </div>
</template>

<script>
export default {
  name: "RTImage",
  props: {
    attrs: {
      type: Object,
      required: true
    }
  }
}
</script>
