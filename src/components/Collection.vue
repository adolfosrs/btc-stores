<template>
  <section class="grid stores">
    <grid-element v-for="store in stores" v-bind:store="store"></grid-element>
  </section>
</template>

<script>
import GridElement from './GridElement';
import eventHub from '../eventHub.js';
import _ from 'lodash';

export default {
  name: 'collection',
  components: {
    GridElement
  },
  data () {
    return {
    };
  },
  created: function () {
    eventHub.$on('searching', string => {
      console.log('created', this, string);
      // if (!string){
      //
      // }
      //
      // this.stores = _.filter(this.stores, store => store.name.indexOf(string) >= 0);
    });
  },
  // computed: {
  //   stores: () => {
  //     console.log('computed', this);
  //     return _.orderBy(this.fbStores, 'name');
  //   }
  // },
  firebase: function () {
    return {
      stores: firebase.database().ref('stores').orderByChild('visibility')
    };
  }
};
</script>

<style scope>
.grid{
  margin: 1vw auto 5vw;
  width: 98vw;
  max-width: 1280px;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
}

.stores{
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;

  &:after {
    content: "";
    flex: auto;
  }
}
</style>
