export function initQA() {
    document.getElementById('qa-form').addEventListener('submit', event => {
        event.preventDefault();
        const question = document.getElementById('question-input').value.trim();
        document.getElementById('answer').textContent = question
            ? `Your question: ${question} - AI backend is not connected yet.`
            : 'Please enter a question.';
    });
}
