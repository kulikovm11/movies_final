import axios from "axios";

import {baseURL} from "../configs/urls";


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDk5NjViYmI0NGNmNTZhZTY5OTBkZTQzOGE3ZTk0OSIsInN1YiI6IjYzZWY2N2EwMzU4MThmMDA5ZDU0NTY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytx24vqSK-BEHa4XFwdUsRVDZDPPdiJ-clennERQE70'


const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config)=>{
config.headers.Authorization = `Bearer ${token}`
    return config
})

export {apiService}