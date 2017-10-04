import 'whatwg-fetch'


export default class HttpService {

    getProducts = (searchQuery) => {        
            var promise = new Promise((resolve,reject) => {
                fetch(`https://itunes.apple.com/search?term=${searchQuery}&country=us&entity=movie`)
                .then(response => {
                    resolve(response.json());
                })
            });

            return promise;
    }

}