document.getElementById('cal-url').style.display = 'none'
fetch('https://status.aerfanr.ir')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		if (data.status === 'success') {
			document.getElementById('cal-url').style.display = 'inline'
			document.getElementById('cal-not-available').style.display = 'none'
		}
	})
