<template>
  <section class="grid stores">
    <grid-element v-for="store in stores" v-bind:store="store"></grid-element>
  </section>
</template>

<script>
import GridElement from './GridElement'

export default {
  name: 'collection',
  components: {
    GridElement
  },
  data () {
    return {
    }
  },
  firebase: function () {
    return {
      stores: firebase.database().ref('stores').orderByChild('visibility')
    }
  }
}
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
