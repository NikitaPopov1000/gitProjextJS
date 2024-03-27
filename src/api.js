import axios from "axios";

const URL_API = "https://api.github.com/search/repositories?q="

const Github = {
    async getProjects(searchText) {
        const response = await axios.get(URL_API + searchText);
        return response.data;
    }

}

export default Github;
