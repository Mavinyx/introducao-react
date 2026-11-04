import axios from "axios";

const axiosInstance = axios.create();
//chamadas do mock
export const ToDoApi = {
    async getAll(){
        const response = await axiosInstance.get('/api/todos');
        console.log(response)
    }
};