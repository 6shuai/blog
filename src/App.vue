<!--
 * @Author: liushuai
 * @Date: 2021-12-15 15:34:30
 * @LastEditors: liushuai
 * @LastEditTime: 2021-12-15 15:38:25
 * @Description: file content
 * @FilePath: \lss.github.io\tiezhu\src\App.vue
-->
<script setup>
	import { ref } from 'vue'

	let count = ref(0)
	let count2 = $ref(1)
</script>

<template>
	<h1>让俺来试一试</h1>
	<div>
		<p>{{ count2 }}</p>
	</div>
	<router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
