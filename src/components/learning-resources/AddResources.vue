<template>
  <base-dialog v-if='inputIsInvalid' title='Invalid Input' @close='confirmError'>
    <template #body>
      <p> At least one input value is invalid</p>
      <p>Please enter the correct inputs</p>
    </template>
    <template #actions>
      <base-button @click='confirmError'>Okay</base-button>
    </template>
  </base-dialog>


  <base-card>
    <template #body>
      <form @submit.prevent='submitData'>
        <div class='form-control'>
          <label for='title'>Title</label>
          <input type='text' name='title' id='title' v-model='resource.title'>
        </div>
        <div class='form-control'>
          <label for='description'>Description</label>
          <textarea type='text' name='description' id='description' aria-multiline='true' rows='3' v-model='resource.description'></textarea>
        </div>
        <div class=' form-control'>
          <label for='link'>Link</label>
          <input type='url' name='link' id='link' v-model='resource.link'>
        </div>
        <div>
          <base-button type='submit'>Add Resource</base-button>
        </div>

      </form>
    </template>
  </base-card>
</template>

<script>
export default {
  name: 'AddResources',
  components: {},
  inject:['addResource'],
  data() {
    return {
      resource: {
        title: '',
        description: '',
        link: ''
      },
      inputIsInvalid:false
    };
  },
  methods: {
    submitData: function() {
      if(!this.resource || !this.resource.title.trim() || !this.resource.description.trim() || !this.resource.link.trim()) {
        this.inputIsInvalid=true;
        return;
      }

      this.addResource(this.resource);
    },
    confirmError(){
      this.inputIsInvalid=false;
    }

  }

};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>