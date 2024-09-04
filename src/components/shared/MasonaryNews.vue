<script setup>
const hottestNews = {
	'Chechnya bans fast (and slow) music': 'https://www.cnn.com/2024/04/08/europe/chechnya-music-ban-scli-intl/index.html',
	'CIA Agent Says FBI Was Present At Capitol Riot': 'https://scnr.com/article/cia-agent-says-fbi-was-present-at-capitol-riot-government-finds-ways-to-put-anyone-in-jail_a23b7160f6b711ee9c930242ac1c0002',
	'Civil War: What Is It Good For?': 'https://www.thefp.com/p/civil-war-what-is-it-good-for',
	'Transgender Streetwalkers Aggrieved by Weather': 'https://www.zerohedge.com/news/2024-04-08/climate-changetm-roundup-transgender-indonesian-streetwalkers-aggrieved-weather',
	'Woman faces 11 felonies for random brick throwing': 'https://notthebee.com/article/woman-11-felony-charges-randomly-smashing-car-la',
	'Bitcoin Tops $71K, Bets Rise Ahead of Halving': 'https://www.coindesk.com/markets/2024/04/08/bitcoin-tops-71k-ordinals-bets-rise-ahead-of-halving/',
	'Its beginning to look a lot like 2016 ': 'https://thehill.com/opinion/campaign/4575545-its-beginning-to-look-a-lot-like-2016/.',
	'Democrats Demonize Rural Voters at Their Peril': 'https://www.thefp.com/p/sohrab-ahmari-white-rural-rage',
}
const popularNews = {
	'Ballot initiative to legalize psychedelics': 'https://reason.org/commentary/massachusetts-ballot-initiative-aims-to-legalize-psychedelics/',
	'Arrested For Easter Bible Belting Walgreens Worker': 'https://thesmokinggun.com/buster/battery/bible-belting-bust-639014',
	'Democrats Commit More Dark Money for 2024': 'https://www.theepochtimes.com/article/democrats-commit-vastly-more-dark-money-than-republicans-for-2024-post-5619292',
	'Cascade of errors led to CCP Microsoft email hack': 'https://nypost.com/2024/04/04/us-news/microsoft-could-have-stopped-chinese-hackers-report-says/',
	'The latest on Cannabis Twitter?': 'https://twitter.com/i/topics/s1758034248806903928',
	'AOC shocked by porn deepfake': 'https://www.yahoo.com/news/seeing-fake-porn-myself-shocking-115852651.html',
	'Artificial Intelligence Ethics': 'https://tech.foundzed.com/docs/ai-ethics.html',
	'Eclipse, Earthquakes, Cicadas Due to Climate Change': 'https://twitchy.com/videos/2024/04/09/sunny-hostin-solar-eclipse-earthquakes-and-cicadas-are-all-caused-by-climate-change-n2394916'	
}
</script>

<template>
	<div class="container px-5 mb-4">
		<div class="row">
			<section class="col-md-6">
				<div class="card card-body h-100 link-list">
					<h6>Hottest News</h6>
					<ul id="hottest-news">
						<li v-for="(value, key) in hottestNews" :key="key">
							<a :href="value">{{ key }}</a>
						</li>
					</ul>
				</div>
			</section>

			<section class="col-md-6">
				<div class="card card-body h-100 link-list">
					<h6>Popular News</h6>
					<ul id="popular-news">
						<li v-for="(value, key) in popularNews" :key="key">
							<a :href="value">{{ key }}</a>
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

ul#hottest-news,
ul#popular-news {
	display: block;
	list-style: none !important;
	padding: 0 0 0 .33rem;
}

.link-list li {
	border-bottom: 1px solid #d7d7d7;
	padding-bottom: 5px;
	margin-bottom: 10px;
}

.dark .link-list li {
	border-bottom: 1px solid #212121;
}

.key {
	color: #7d7d7d;
}
</style>
