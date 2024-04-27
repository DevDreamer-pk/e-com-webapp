import HTTPService from "../utility/httpService";

const httpService = new HTTPService(process.env.REACT_APP_API_URL);

export const signUp =  (data) => {
    return httpService.post(`/api/user/signup`,data );
}