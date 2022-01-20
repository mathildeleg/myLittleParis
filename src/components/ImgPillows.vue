<template>
    <img :src="getImgUrl()" />
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class ImgPillows extends Vue {
    @Prop([Number]) readonly pillowCount: number
    
    constructor() {
      super();
    }

    getImgUrl() {
        try {
            return require(`../assets/coussins/${this.pillowCount}.png`);
        } catch (error) {
            return null;
        }
    }

  }
</script>
