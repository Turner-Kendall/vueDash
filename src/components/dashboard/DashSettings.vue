<style>
	#dashboard-details{ margin: 1rem 0 -2rem 0; }
	.twitter{ background-color: #D7D7D7; color: #212121; }
	/* .dark .twitter{ background-color: #6ab5db;} */
	.link{color:#1b3cd1!important;}
	.dark .link{color: #6ab5db!important;}
</style>

<template>
	<div class="container px-5" id="dashboard-details">
		<div class="row d-flex justify-content-center align-items-center pt-5">

			<div class="col">
				<div class="card card-body py-3">

					<h3 class="mb-2">Dashboard Details</h3>
					<p class="small mb-0"><BIconStarFill />
						<span class="mx-2">|</span>Created by
						<strong> <a href="https://twitter.com/tr1pwyr">Tr1pwyr</a> </strong> on March 24 2024
					</p>
					<hr class="my-4">
					<div class="d-flex justify-content-start align-items-center">
						<p class="mb-0"><BIconPatchExclamationFill/> <span class="text-muted small">settings </span> </p>
						<span class="ms-3 me-4">|</span>
						<p class="mb-0">&nbsp;<BIconLink /> <span class="text-muted small link"> link</span></p>
						<p class="mb-0"><span class="ms-3 me-4">|</span></p>
						<a href="#!">
							<img src="/images/icons/virus.webp" alt="avatar" class="img-fluid rounded-circle me-3" width="30">
						</a>
						<button type="button" class="btn btn-primary btn-sm btn-floating">
							<BIconLightningFill /> Attention
						</button>
					</div>

					<hr class="my-3">
					<div class="d-flex justify-content-start align-items-center">
						<p class="mb-0"><BIconPatchPlusFill /> <span class="text-muted small">updates</span> </p>
						<span class="ms-3 me-4">|</span>
						<p class="mb-0">&nbsp;<BIconLink /> <span class="text-muted small link"> link</span></p>
						<p class="mb-0"><span class="ms-3 me-4">|</span></p>
						<a href="#!">
							<img src="/images/icons/network.webp" alt="avatar" class="img-fluid rounded-circle me-3" width="30">
						</a>
						<button type="button" class="btn btn-secondary btn-sm btn-floating">
							<BIconCheckLg /> All Good
						</button>
					</div>

					<hr class="my-3">
					<div class="d-flex justify-content-start align-items-center">
						<p class="mb-0"><BIconPatchQuestionFill /> <span class="text-muted small">re-setup </span> </p>
						<span class="ms-3 me-4">|</span>
						<p class="mb-0">&nbsp;<BIconLink /> <span class="text-muted small link"> link</span></p>
						<p class="mb-0"><span class="ms-3 me-4">|</span></p>
						<a href="#!">
							<img src="/images/icons/firewall.webp" alt="avatar" class="img-fluid rounded-circle me-3" width="30">
						</a>
						<button type="button" class="btn btn-secondary btn-sm btn-floating">
							<BIconCheckLg /> All Good
						</button>
					</div>


				</div>


			</div>

			<div class="col">

				<div class="card">
					<div class="card-body text-center">
						<div class="mb-2">
							<img src="/images/kay-so.webp" class="rounded-circle img-fluid" style="width: 100px;" />
						</div>
						<h4 class="mb-2">Tr1pwyr</h4>
						<p class="text-muted mb-4">
							<a href="https://priv-mssg.com/user/trip">
								tr1p@tr1pwyr.com</a>
						</p>
						<div class="mb-4 pb-2">
							<button type="button" class="btn btn-secondary btn-floating">
								<BIconGithub />
							</button>
							<button type="button" class="btn btn-secondary btn-floating">
								<BIconTwitterX />
							</button>
							<button type="button" class="btn btn-secondary btn-floating">
								<BIconVirus />
							</button>
						</div>

						<div class="d-flex justify-content-between text-center mb-2">
							<div>
								<p class="mb-2 h5">8471</p>
								<p class="text-muted mb-0">Balance</p>
							</div>
							<div class="px-3">
								<p class="mb-2 h5">8512</p>
								<p class="text-muted mb-0">Reputation</p>
							</div>
							<div>
								<p class="mb-2 h5">4751</p>
								<p class="text-muted mb-0">Transactions</p>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script setup>
import {
	BIconVirus, BIconGithub, BIconTwitterX, BIconStarFill, BIconPatchPlusFill, 
	BIconLink, BIconLightningFill, BIconCheckLg,  BIconPatchExclamationFill,  BIconPatchQuestionFill
} from "bootstrap-icons-vue";

</script>