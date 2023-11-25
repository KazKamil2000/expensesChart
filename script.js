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
            backgroundColor: ["red"],
            borderRadius: 3,
            hoverBackgroundColor: "blue",
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
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
