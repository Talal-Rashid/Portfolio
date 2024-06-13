// Fetch portfolio items from the server
fetch('portfolio.json')
  .then(response => response.json())
  .then(data => {
    const portfolioDiv = document.getElementById('portfolio');
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <img src="${item.file_path}" alt="${item.title}">
      `;
      portfolioDiv.appendChild(div);
    });
  })
  .catch(error => console.error('Error fetching portfolio items:', error));
