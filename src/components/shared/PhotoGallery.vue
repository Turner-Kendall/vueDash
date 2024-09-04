<script setup>
import { imgs } from "../../js/imgs"
</script>

<template>
	<div class="container" id="photo-gallery">
		<div class="row py-5">
			<div class="col-md-4 mb-4" v-for="i in imgs" :key="i">
				<div class="card card-body h-100 cover">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<h5>{{ i.name }}</h5>
							<img :src="i.path" />
							<p>{{ i.alt }}</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
#photo-gallery{
	margin: 1rem 1rem 1rem 0;
}
#photo-gallery img{
	margin: .5rem;
	border-radius: .5rem;
}
#photo-gallery p {
	font-size: .9rem;
	margin-left: 10px;
}
#photo-gallery h5 {
	font-weight: 800;
	color: rgba(1,1,1, .5);
}
.dark #photo-gallery h5 {
	color: rgba(242, 242, 242, .2);
}
</style>