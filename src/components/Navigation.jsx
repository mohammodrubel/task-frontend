import React from "react";

function Navigation() {
  return (
    <div className="bg-blue-950 w-full">
      <div style={{width:'90%',margin:'0 auto'}}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[25px] py-4 font-bold text-white">Todo App</h3>
          </div>
          <div>
          <h3 className=" py-4 font-bold text-white">Login</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
