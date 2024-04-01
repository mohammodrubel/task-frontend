import React from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {logout, usreCurrentUser} from '../App/featchers/auth/authSlice'
import {toast,Toaster} from 'sonner'

function Navigation() {
  const userExist = useSelector(usreCurrentUser)
  const dispatch =useDispatch()
  const handelLOgout = ()=>{
    dispatch(logout())
    toast.success('logout successfull');
  }

  return (
    <div className="bg-blue-950 w-full">
      <div style={{width:'90%',margin:'0 auto'}}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[25px] py-4 font-bold text-white">Todo App</h3>
          </div>
         {userExist?.role === 'Admin' && <div className="py-4 font-bold text-white">
            <Link to='/user'>user Data</Link>
          </div>}
          <div>
          <h3 className=" py-4 font-bold text-white">
            {
              userExist?.email ?
              <p onClick={handelLOgout} className="text-cyan-400 cursor-pointer">Logout | {userExist?.role}</p>
              :
              <Link className=" cursor-pointer" to='/login'>Login</Link>
            }
            </h3>
          </div>
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default Navigation;
