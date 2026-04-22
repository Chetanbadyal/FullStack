import axios from "axios";
import * as qs from "qs";

const BASE_URL = "http://localhost:3005/api/";

class apiServices {

    addEnquiry(data){
        return axios.post(BASE_URL + "enquiry/add",data)
    }
    getEnquiries(data){
        return axios.post(BASE_URL+"enquiry/getall",data)
    }
    addCategory(data){
        return axios.post(BASE_URL + "category/add",data,{
    headers: {
        "Content-Type": "multipart/form-data"
    }
    })
    }
    getCategoryData(data){
        return axios.post(BASE_URL + "category/getall",qs.stringify(data))
    }
    deleteCategory(data){
        return axios.post(BASE_URL + "category/delete",qs.stringify(data))

    }
    addServices(data){
        return axios.post(BASE_URL + "services/add",data,{
    headers: {
        "Content-Type": "multipart/form-data"
    }
    })
    }
    getServices(data){
        return axios.post(BASE_URL + "services/getall",qs.stringify(data))
    }
    
}

export default new apiServices();