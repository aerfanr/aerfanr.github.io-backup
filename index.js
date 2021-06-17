const linkHtml = '<a href="https://nc.aerfanr.ir/apps/calendar/p/PtjXxopxaK3EMtL9"> https://nc.aerfanr.ir/apps/calendar/p/PtjXxopxaK3EMtL9</a>'

document.getElementById("cal-url").innerHTML = "Currently not available";

fetch('https://status.aerfanr.ir')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		if (data.status === 'success') {
			document.getElementById('cal-url').innerHTML = linkHtml;
		}
	})
