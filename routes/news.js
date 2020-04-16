const fetch = require('node-fetch');

module.exports = {
    async topic(topic) {
        const now = new Date();
        console.log(now);
        const apiKey = 'acef062b396a4219a8e009b9395a424d';
        const country = 'US';
        const from = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() - 5}`;
        console.log(from);
        const url = `http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${topic}&sortBy=popularity&from=${from}`;
        console.log(url);
        const response = await fetch(url);
        const { articles } = await response.json();
        console.log(articles);
        return articles;
    },
};

// eslint-disable-next-line import/prefer-default-export
// export const topic = async (apiKey, country, q, from) => {
//     const response = await fetch(`http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${q}&from=${from}`);
//     const data = await response.json();
//     return data;
// };
