const jokeScreen = document.getElementById("html");

async function getJoke(category) {
    const url = "https://v2.jokeapi.dev/joke/"+category;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const jokeData = await response.json();

        const jokeElement = document.getElementById('joke');
        if (jokeData.type === 'single') {
            jokeElement.innerHTML = jokeData.joke;
        } else if (jokeData.type === 'twopart') {
            jokeElement.innerHTML = `<strong>Setup:</strong> ${jokeData.setup}<br><br><br><strong>Delivery:</strong> ${jokeData.delivery}`;
        } else {
            jokeElement.innerHTML = 'Unknown joke format.';
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('joke').innerHTML = 'Failed to fetch a joke.';
    }
}