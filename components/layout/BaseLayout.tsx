import { FunctionComponent } from "react";
import Navbar from "../navbar";
import Image from "next/image";

const BaseLayout: FunctionComponent = ({children}) => {

  return (
    <>
      <Navbar />
      <div className="text-center">
              <img
                src="/images/oranges.png"
                alt=""
             />
             </div>
      <div>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseLayout;