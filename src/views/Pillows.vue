<template>
    <div>
        <img src="../assets/coussins/1.png" />
        <div id="count">
            <button>-</button>
            <div>{{pillowCount}}</div>
            <button>+</button>
        </div>
        <router-link to="/pillows/save">Next Page</router-link>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Action, Getter} from 'vuex-class';

  const namespace: string = 'pillows';

  @Component
  export default class Pillows extends Vue {
    @Getter('pillowCount', {namespace}) pillowCount: number;


    constructor() {
      super();
    }

  }
</script>
