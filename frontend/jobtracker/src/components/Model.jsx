import Card from "./Card";
import {useEffect} from 'react';
const Model = ({ children  , setModel}) => {
    const handelOverLayClick = (event) => {
        if(event.target === event.currentTarget){
            setModel(false)
        }
    }
    useEffect(()=>{
        {/* comp mount effect */}
        document.body.style.overflow = 'hidden';

        {/* comp unmount effect , cleanup */}
        return()=>{
            document.body.style.overflow = 'auto';
        };
    } , [])
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-28 sm:p-12"
    onClick={handelOverLayClick}>
      <Card style={{ maxWidth: "850px", width: "100%" }}>
        {children}
      </Card>
    </div>
  );
};

export default Model;
