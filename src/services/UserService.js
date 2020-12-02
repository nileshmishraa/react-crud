import axios from 'axios'

const URL = 'http://localhost:8080/all'

class userService {

    getUsers(){
        return axios.get(URL);
    }
}
export default new userService();

