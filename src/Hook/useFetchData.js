import axios from "axios";
import { fetchFailure, fetchRequest, fetchSuccess } from "../redux/actions/ProductsAction";

export const useFetchData = () => {
    console.log("Inside FetchProducts");
    return (dispatch) => {
        console.log("Fetch Request");
        dispatch(fetchRequest());
        axios.get("https://fakestoreapi.com/products")
        .then(response => 
            {
                console.log("Fetch Success");
                dispatch(fetchSuccess(response.data));
                console.log("Data",response.data);
            })
        .catch(error=>{
            console.log("Fetch Failed");
            dispatch(fetchFailure(error.message));
            console.log("Error",error.message);
        })
    }
}