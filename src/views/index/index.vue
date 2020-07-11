<template>
  <div class="index">
      <header-index></header-index>
      <category></category>
  </div>
</template>

<script>
import headerIndex from '@components/headerIndex'
import category from "@views/index/components/category";
export default {
  name: 'index',
  components: {
    headerIndex,
    category
  }
}
</script>
