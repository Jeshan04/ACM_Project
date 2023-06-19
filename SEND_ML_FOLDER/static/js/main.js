function sendQuery() {
    const chatGPTQuestion = document.querySelector('.Question');
    const chatGPTResponse = document.querySelector('.Response');

    if (chatGPTQuestion.value.trim() !== '') {
        const queryContainer = document.createElement('div');
        queryContainer.classList.add('queryContainer');
        const query = document.createElement('p');
        query.classList.add('query');
        query.textContent = chatGPTQuestion.value;
        queryContainer.appendChild(query);
        chatGPTResponse.appendChild(queryContainer);

        const answerContainer = document.createElement('div');
        answerContainer.classList.add('answerContainer');
        const answer = document.createElement('p');
        answer.classList.add('answer');
        answer.textContent = getElementById('ty');
        answerContainer.appendChild(answer);
        chatGPTResponse.appendChild(answerContainer);

        chatGPTQuestion.value = '';
    }
}

document.querySelector('.sendButton').addEventListener('click', sendQuery);
document.querySelector('.Question').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendQuery();
    }
});