import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	constructor(private httpService: HttpService) {
		this.httpService.axiosRef.interceptors.response.use(res => res, (error) => {
			if (error.response.status === 401) {
				error.config.headers['Authorization'] = 'jwt-token-test'
				return this.httpService.axiosRef(error.config);
			}
		
			return Promise.reject()
		});
	}

  getResponse() {
    return this.httpService.post('https://b3dc6d2018f6b18fb8433be0dc47b814.m.pipedream.net').toPromise()
  }
}
