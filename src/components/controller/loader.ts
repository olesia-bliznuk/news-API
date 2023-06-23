import { IData } from '../app/interfaces';

type RequestOptions = Record<string, string>;

class Loader {
  private baseLink: string;
  private options: RequestOptions;

  constructor(baseLink: string, options: RequestOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: { endpoint: string; options?: RequestOptions },
    callback: (data: IData) => void = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: RequestOptions, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: (data: IData) => void, options: RequestOptions = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }

}

export default Loader;