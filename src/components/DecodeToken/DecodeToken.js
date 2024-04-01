import { jwtDecode } from "jwt-decode"

const DecodeToken = async(token)=>{
    const data =await jwtDecode(token)
    return data
}

export default DecodeToken