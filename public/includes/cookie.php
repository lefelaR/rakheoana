<style>
	section#eucookie {
		background: #444;
		color: #aaa;
		padding: 2em;
		position: fixed;
		right: 0;
		bottom: -200px;
		z-index: 100;
		width: 100%;
		/* transition: 2s all ease-in-out; */

	}

	section#eucookie.active {
		bottom: 0px;
		transition: 1s all ease-in-out;
	}

	section#eucookie * {
		color: #ddd;
	}
	section#eucookie .smaller{
		line-height: 38px !important;
	}
</style>
<?php


if (isset($cookiedata)) {
	$type = get_class($cookiedata);
	if ($type != 'CookieContext') {
		return;
	}
}

?>

<section id="eucookie">
	<div class="container my-3">
		<p>[ This is Just a demonstration of how i implement cookies for POPI ACT compliance on any project ] <br/> 
		We uses cookies to improve user experience. Choose what cookies you allow us to use. You can read more about our Cookie Policy in our 
		<a href="<?php url('home/privacypolicy') ?>">Privacy Policy</a>. </p>
		<!-- <p class="float-left"><?php //echo $cookiedata->name; 
									?></p> -->
		<a href="#" onclick="handle_eucookie()" class="main-btn float-right smaller">got it</a>
	</div>
</section>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		var euCookie = document.cookie.indexOf('euCookieAccepted=');
		if (euCookie == -1) {
			setTimeout(() => {
				document.querySelector('#eucookie').classList.add('active');
			}, 100);
		}
	});

	function handle_eucookie() {
		document.cookie = "euCookieAccepted=Accepted; max-age=5184000; path=/";
		document.querySelector('#eucookie').classList.remove('active');
		event.stopPropagation();
		console.log('cookie');
	}
</script>