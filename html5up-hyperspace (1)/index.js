const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://ozv4tna4ikporkjgjjoqmxlbgy0vnrfp.lambda-url.ca-central-1.on.aws/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
  } catch (error) {
    console.error('Failed to update counter:', error);
    counter.innerHTML = 'Views: unavailable';
  }
}

updateCounter();
