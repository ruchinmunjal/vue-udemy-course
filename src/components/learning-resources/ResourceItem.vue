<template>
  <li>
    <base-card>
      <template #header>
        <header>
          <h3>{{ title }}</h3>
          <base-button @click="deleteResource(id)" type='button' mode='flat'>
            <template #default>Delete</template>
          </base-button>
        </header>
      </template>
      <template #body>
        <p>
          {{ description }}
        </p>
        <nav>
          <a :href=link target='_blank' rel="noreferrer noopener">View Resource</a>

        </nav>
      </template>
    </base-card>
    <div>

    </div>

  </li>
</template>

<script>

export default {
  name: 'ResourceItem',
  components: {},
  inject: ['deleteResource'],
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>