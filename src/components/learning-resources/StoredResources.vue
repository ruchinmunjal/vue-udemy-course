<template>
  <ul>
    <resource-item v-for='resource in resources' :key='resource.id' :title='resource.title'
      :description='resource.description' :link='resource.link' :id='resource.id'></resource-item>
  </ul>
</template>

<script>
import ResourceItem from '@/components/learning-resources/ResourceItem';
export default {
  name: 'StoredResources',
  components: {
    ResourceItem
  },
  inject: ['resources'],

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>