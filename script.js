document.addEventListener('DOMContentLoaded', () => {
    const twetin = document.getElementById('tweetInput');
    const twetbtn = document.getElementById('twetbtn');
    const tcont = document.getElementById('tcont');

    //local storage
    const loadTweets = () => {
        const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        tcont.innerHTML = '';
        tweets.forEach(tweet => {
            displayTweet(tweet);
        });
    };

    // twet batave
    const displayTweet = (tweet) => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.innerHTML = `
            <div class="tweet-content">${tweet.text}</div>
            <button class="like-button" onclick="toggleLike('${tweet.id}')">
            ♥ ${tweet.likes}
            </button>
        `;
        tcont.prepend(tweetDiv);
    };
    // navi tweet
    twetbtn.addEventListener('click', () => {
        const text = twetin.value.trim();
        if (text) {
            const tweet = {
                id: Date.now(),
                text: text,
                likes: 0
            };
            const tweets = JSON.parse(localStorage.getItem('tweets')) || [];
            tweets.push(tweet);
            displayTweet(tweet);
            twetin.value = '';
        }
    });

    //like vadhe
    window.toggleLike = (id) => {
        let tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        tweets = tweets.map(tweet => {
            if (tweet.id == id) {
                tweet.likes += 1;
            }
            return tweet;
        });
    };

    loadTweets();
});