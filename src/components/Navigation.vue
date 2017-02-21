<template>
  <header class="header">
    <a href="#">
      LOGO
    </a>
    <form class="search">
      <input type="search" v-model="queryString"/>
    </form>
    <button class="menu-button"><span>Menu</span></button>
  </header>
</template>

<script>
import eventHub from '../eventHub.js';

export default {
  name: 'navigation',
  data () {
    return {
      queryString: ''
    };
  },
  watch: {
    'queryString': val => {
      eventHub.$emit('searching', val);
    }
  }
};
</script>

<style scope>
.header{
  position: fixed;
  top: 10px;
  @include transform(translate(-50%, 0));
  margin: 0 auto;
  z-index: 2;
  min-height: 70px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  width: 97vw;
  max-width: 1266px;
  height: 100;
  background-color: #353846;
  border-radius: 3px;
}

.header-spacer{
  height: 100px;
  min-height: 70px;
  margin-bottom: 10px;
}

.search{
  display: table;
  width: 50%;
  margin: 0 auto;

  input{
    width: 100%;
    padding: .9em 1.2em;
    color: #fff;
    font-size: em(16px);
    border-radius: 40px;
    border: 0;
    background-color: darken(#353846, 5%);
    outline: none;
  }

}

.menu-button{
  position: relative;
  height: 32px;
  width:32px;

	padding: 0;
	cursor: pointer;
	border: none;
	outline: none;
	background: transparent;

  &:after,
  &:before,
  span{
    background: #5f656f;
  }

  &:after,
  &:before{
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    transform-origin: 50% 50%;
  }

  span {
  	position: absolute;
  	left: 0;
  	overflow: hidden;
  	width: 100%;
  	height: 2px;
  	text-indent: 200%;
  	-webkit-transition: opacity 0.25s;
  	transition: opacity 0.25s;
  }

  &:before{
    -webkit-transform: translate3d(0, -10px, 0) scale3d(0.8, 1, 1);
  	transform: translate3d(0, -10px, 0) scale3d(0.8, 1, 1);
  }

  &:after{
    -webkit-transform: translate3d(0, 10px, 0) scale3d(0.8, 1, 1);
    transform: translate3d(0, 10px, 0) scale3d(0.8, 1, 1);
  }

}

.menu-button--open span {
	opacity: 0;

  &:before{
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
  }
  &:after{
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
  }
}


</style>
