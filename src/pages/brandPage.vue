<template>
  <h1>{{name}}</h1>
</template>

<script>
import { defineComponent } from "@vue/composition-api"; 
import { api } from "boot/axios";

export default defineComponent({
  name: "m-brand",
  data() {
    return {
      name : '',
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
     getBrandInfo() {
       var data = new FormData();
       data.append('token', 'B49K61mY');
       data.append('page_param', '1');
       data.append('per_param', '10');
       data.append('id_brand', this.id);
 
       var config = {
         method: 'post',
         url: '/singlebrand',
         headers: {},
         data : data
       };
 
       return api(config).then(response => {
         let brand = response.data.single_brand;
         this.name = brand.name; 
       }).catch(error => {
         console.log(error);
       });
       
     },
  },
  mounted() { 
    this.getBrandInfo();
  },
  setup() {

  },
});
</script>

<style lang="scss" scoped>
 
</style>
