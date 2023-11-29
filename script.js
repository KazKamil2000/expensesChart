fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((entry) => entry.day);
    const values = data.map((entry) => entry.amount);

    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: ["rgb(236, 117, 93)"],
            borderRadius: 3,
            hoverBackgroundColor: "rgb(118, 181, 188)",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            yAlign: "bottom",
            displayColors: false,
            title: false,
          },
        },
        scales: {
          y: {
            display: false,

            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              drawBorder: false,
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              drawBorder: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });
  });
