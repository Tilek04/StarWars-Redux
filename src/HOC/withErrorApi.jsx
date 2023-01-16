import { useState, useEffect } from "react";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = View => {
 
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
        <>
          {errorApi ? (
        <ErrorMessage/>
          ) : (
            
<View
setErrorApi={setErrorApi}
{...props}/>
          
          )}
        </>
      );
  };
};
