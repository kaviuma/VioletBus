import { create } from "zustand";
import axios from "axios";

let AuthStore = create((set)=>({ 
  AuthStatus: false ,

SignUp: async (data)=>{
    try {
      let response = await axios.post("http://localhost:5000/api/auth/signup",data)
      set({AuthStatus: response.data.status})
         console.log(response.data);
         alert(response.data.msg);

    } 
    catch (error) {
      console.log(error.msg);
      alert("Signup Error");
      set({AuthStatus:false}); 
    }
},
signin: async (form) => {
   try {
    const response = await axios.post("http://localhost:5000/api/auth/signin",form);

   
    set({ AuthStatus: response.data.status });
    console.log(response.data);
    alert(response.data.msg);

    return response.data; 
  } catch (error) {
    console.log(error.response?.data || error);
    alert("Signin Error");
    set({ AuthStatus: false });
  }
}



}
))

export default AuthStore;