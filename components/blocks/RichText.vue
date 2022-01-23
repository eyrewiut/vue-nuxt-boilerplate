<template>
  <div v-editable="blok">
    <RichTextRenderer v-if="blok.body" :document="blok.body"/>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      required: true,
      type: Object
    }
  }
}
</script>
