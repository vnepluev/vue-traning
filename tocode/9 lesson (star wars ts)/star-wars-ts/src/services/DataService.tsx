/**
 * doc: https://swapi.dev/
 * api: https://swapi.dev/api/people/
 */

const API_URL = `https://swapi.dev/api`;

import axios from "axios";

class DataService {
  getAll(): Promise<any> {
    return axios.get(`${API_URL}/people/`);
  }
}

export default new DataService();
