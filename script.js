// Interactive Quiz
function checkAnswer() {
  const options = document.getElementsByName('quiz');
  let selected = '';
  for (const option of options) {
    if (option.checked) {
      selected = option.value;
    }
  }

  const result = document.getElementById('quiz-result');
  if (selected === 'C') {
    result.textContent = '✅ Correct! Paris is the capital of France.';
    result.style.color = 'green';
  } else {
    result.textContent = '❌ Wrong answer. Try again!';
    result.style.color = 'red';
  }
}

// Fetch Joke from API
async function fetchJoke() {
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    document.getElementById('joke-text').textContent = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    document.getElementById('joke-text').textContent = 'Failed to load joke.';
  }
}
