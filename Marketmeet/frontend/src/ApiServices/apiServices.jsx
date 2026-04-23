import axios from "axios";
import * as qs from "qs";

const BASE_URL = "http://localhost:3005/api/";

class apiServices {
// enquiries
    addEnquiry(data){
        return axios.post(BASE_URL + "enquiry/add",data)
    }
    getEnquiries(data){
        return axios.post(BASE_URL+"enquiry/getall",data)
    }
 //Categories
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
    getsingleCategoryData(data)
    {
            return axios.post(BASE_URL + "category/getsingle",data)
    } 
    updateCategoryData(data)
    {
            return axios.post(BASE_URL + "category/update",data)
        }
//Services    
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
    deleteService(data){
        return axios.post(BASE_URL + "/services/deleteData",qs.stringify(data))
    }
    
    
}

export default new apiServices();