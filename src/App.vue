<template>
  <the-header></the-header>
  <stored-resources :resources='storedResources'></stored-resources>

</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import TheHeader from '@/components/layout/TheHeader';

export default {
  name: 'App',
  components: {
    StoredResources,
    TheHeader
  },
  data() {
    return {
      storedResources: [
        {
          id: 1,
          title: 'official-guide',
          description: 'Official link to the Vue documentation',
          link: ''
        },
        {
          id: 2,
          title: 'google',
          description: 'Because its google',
          link: 'https://www.google.com'
        }
      ]
    };
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family:  "Caveat", cursive,'Roboto',sans-serif;
}

body {
  margin: 0;
}
</style>