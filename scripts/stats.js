fetch("https://getlinkclicks-65qwxdodua-ew.a.run.app")
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#statsTable tbody");
    data.forEach(({ id, campaign, source, medium, count }) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${decodeURIComponent(campaign)}</td>
        <td>${decodeURIComponent(source)}</td>
        <td>${decodeURIComponent(medium)}</td>
        <td>${count}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => console.error("Failed to load stats:", err));
