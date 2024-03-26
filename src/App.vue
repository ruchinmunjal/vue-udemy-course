<template>
  <the-header title='My App'></the-header>
  <the-resources></the-resources>


</template>

<script>

import TheHeader from '@/components/layout/TheHeader';
import TheResources from '@/components/learning-resources/TheResources';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheResources
  },
  data() {
    return {

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