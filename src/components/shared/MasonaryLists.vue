<script setup>
import { ref, onMounted } from 'vue'
const activeUsers = {
	'Logged In Users': 33,
	'Current Guests': 97,
	'logins Since Reset': 67,
	'Logins Last Hour': 17,
	'Logins Last Day': 197,
	'The Most Logins': 11,
	'The Least Logins': 1
}
const loggedinUsers = {
	'trip': 'Firefox on Linux, 1 hour ago',
	'admin': ' Firefox on Windows, 2 hours ago.',
	'cryptoBro': 'Chrome on Windows, yesterday',
	'tosh': ' Firefox on  Windows, yesterday',
	'mac': 'Chrome on iPhone, 2 days ago.',
	'vic': 'Firefox on Linux 2 days ago.'
}

const errors = {
	'/.env': 66,
'/systembc/password.php': 43,
'/cgi-bin/luci/;stok=/locale': 39,
'/categories': 32,
'/.git/config': 26,
'/assets/language/en-US/tags.js': 12,
'/assets/language/en-US/modules.js': 12
}

</script>

<template>
	<div class="container px-5 mb-5">
		<div class="row">

			<section class="col-md-4">
				<div class="card card-body h-100 user-list">
					<h6>ACTIVE USERS</h6>
					<ul id="active-users">
						<li v-for="(value, key) in activeUsers" :key="key">
							<span class="key">{{ key }}</span>: {{ value }}
						</li>
					</ul>
				</div>
			</section>

			<section class="col-md-4">
				<div class="card card-body h-100 user-list">
					<h6>LOGGED IN USERS</h6>
					<ul id="loggedin-users">
						<li v-for="(value, key) in loggedinUsers" :key="key">
							<a href="#">{{ key }}</a>: {{ value }}
						</li>
					</ul>
				</div>
			</section>

			<section class="col-md-4">
				<div class="card card-body h-100 user-list">
					<h6>ERRORS</h6>
					<ul id="loggedin-users">
						<li v-for="(value, key) in errors" :key="key">
							<a href="#">{{ key }}</a>: {{ value }}
						</li>
					</ul>
				</div>
			</section>

		</div>
	</div>
</template>

<style scoped>
h6 {
	margin-bottom: 15px;
}

ul#active-users,
ul#loggedin-users {
	display: block;
	list-style: none !important;
	padding: 0 0 .33rem .33rem;
}

.user-list li {
	border-bottom: 1px solid #d7d7d7;
	padding-bottom: 5px;
	margin-bottom: 10px;
}

.dark .user-list li {
	border-bottom: 1px solid #212121;
}

.key {
	color: #7d7d7d;
}
</style>