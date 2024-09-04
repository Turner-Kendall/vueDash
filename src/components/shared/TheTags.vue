
<script setup>
import { ref } from 'vue'
const tags = [
	{
		id: 1,
		name: 'Exploit',
		link: '#',
		cat: 'hack',
		count: 9,
	},
	{
		id: 2,
		name: 'DDOS',
		link: '#',
		cat: 'attack',
		count: 3,
	},
	{
		id: 3,
		name: 'Ransomware',
		link: '#',
		cat: 'malware',
		count: 6
	},
	{
		id: 4,
		name: 'SSH Logins',
		link: '#',
		cat: 'success',
		count: 1,
	},
	{
		id: 5,
		name: 'Alert',
		link: '#',
		cat: 'alert',
		count: 3,
	},
	{
		id: 6,
		name: 'DDOS',
		link: '#',
		cat: 'attack',
		count: 1,
	},
	{
		id: 7,
		name: 'BTC Price',
		link: '#',
		cat: 'caution',
		count: 9,
	},
	{
		id: 8,
		name: 'Attempted Login',
		link: '#',
		cat: 'alert',
		count: 3,
	},
	{
		id: 9,
		name: 'Warning',
		link: '#',
		cat: 'warning',
		count: 5,
	},
	{
		id: 10,
		name: 'Unhandled Request',
		link: '#',
		cat: 'alert',
		count: 3,
	},
	{
		id: 11,
		name: 'Zero Days',
		link: '#',
		cat: 'hack',
		count: 2,
	},
	{
		id: 4,
		name: 'Application Accessed',
		link: '#',
		cat: 'attack',
		count: 3,
	},
	{
		id: 4,
		name: 'App Launched',
		link: '#',
		cat: 'success',
		count: 5,
	},
	{
		id: 4,
		name: 'SSH Attempts',
		link: '#',
		cat: 'alert',
		count: 1,
	},
	{
		id: 4,
		name: 'email sent',
		link: '#',
		cat: 'success',
		count: 13,
	},
]
</script>

<template>
	<section class="container my-4">
		<ul class="tags">
			<a :href="tag.link" v-for="tag in tags" :key="tag.id">
			<li :class="tag.cat" class="tag" >
				{{ tag.name }}({{ tag.count }})
			</li>
		</a>
		</ul>
	</section>
</template>

<style scoped>

ul{
  list-style-type: none!important;
  text-align: center!important; 
  padding: 0;
  margin: 0;
}

li.tag {
  display: inline-block!important;
	margin-right: 10px!important;
}

.tags{
	margin: 2rem 0 2rem 1rem;
}

.tag{
  color: #a8a8a8;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
	font-size: 13px;
	font-weight: 600;
	margin-top: .5rem;
	background-color: #fff;
	border: 1px solid #fff;
}
.tag:hover {
	color: #fff;
	background-color: #a6a9aa;
	border: 1px solid #a6a9aa;
}

.dark .tag{
  color: #57647c;
	background-color: #0d1117;
	border: 1px solid #1d2634;
}

.dark .tag:hover{
  color: #fff;
	background-color: #070a10;
	border: 1px solid #3e454c;
}

</style>