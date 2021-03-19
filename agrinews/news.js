fetch('http://newsapi.org/v2/everything?q=Agriculture&from=2021-02-27&sortBy=popularity?country=in&apiKey=7492ea061b604d5b87f1759168417673')
.then(function (response) {
return response.json();
}) 
.then(function (news) {
    console.log(news);
}).catch(function (error) {
    console.error('went wrong');
    console.error('error');
})