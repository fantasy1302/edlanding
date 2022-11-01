const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    // The type of chart we want to create
	type: 'radar', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Академическая мотивация", "Самоорганизация", "Саморегуляция эмоций", "Навыки общения", "Навыки речи", "Цифровая компетентность"],
		// Information about the dataset
    datasets: [{
			label: "Ваши результаты",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 0,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Precipitation in Toronto'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Precipitation in mm'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});
 