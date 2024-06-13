document.addEventListener('DOMContentLoaded', function() {
    fetch('get_matches.php')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data); // Debugging line
            const matchesDiv = document.getElementById('matches');
            data.matches.forEach(match => {
                const matchDiv = document.createElement('div');
                matchDiv.classList.add('match');
                matchDiv.innerHTML = `
                    <h2>${match.title}</h2>
                    <p>${match.score}</p>
                `;
                matchesDiv.appendChild(matchDiv);
            });
        })
        .catch(error => console.error('Error fetching match data:', error));
});
