import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'edb567bad2324a25b7c095c7b67ac26f',
        });
    }
}

export default AppLoader;