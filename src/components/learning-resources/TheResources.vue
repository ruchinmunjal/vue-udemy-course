<template>
  <base-card>
    <template #body>
      <base-button @click='setSelectedTab("stored-resources")' :mode=storedResButtonMode>Stored Resource
      </base-button>
      <base-button @click='setSelectedTab("add-resources")' :mode=addResButtonMode>Add Resource
      </base-button>
    </template>
  </base-card>
  <component :is='selectedTab'></component>

</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResources from '@/components/learning-resources/AddResources';
import { currentMaxId } from '@/helpers/helpers';

export default {
  name: 'TheResources',
  components: { StoredResources, AddResources },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 1,
          title: 'Official Guide',
          description: 'Official link to the Vue documentation',
          link: ''
        },
        {
          id: 2,
          title: 'Google',
          description: 'Because its google',
          link: 'https://www.google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource: function (resource) {
      let newId = currentMaxId(this.storedResources) + 1;
      const newResource = { ...resource, id: newId };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource: function (id) {
      const indexToDelete = this.storedResources.findIndex(r => r.id === id);
      this.storedResources.splice(indexToDelete, 1);
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    }

  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  }

};
</script>

<style scoped></style>