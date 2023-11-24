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
            pointStyle: "dash",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        title: {
          display: true,
          text: "Custom Chart Title",
        },
      },
    });
  });
