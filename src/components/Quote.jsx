import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../feature/quote/quoteSlice";

const Quote = () => {


    const {quoteData, isLoading, isError} = useSelector(state => state.quotes)


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchQuote())
    },[])




    if (isLoading){
        return(
            <h1 className="text-center text-warning display-6 mt-2">loading...</h1>
        )
    }


    if (isError){
        return(
            <h1 className="text-center text-danger display-6 mt-2">Something Went Wrong</h1>
        )
    }





  return (
    <>
      <marquee className="mt-3 display-6">{quoteData?.content}- {quoteData?.author}</marquee>
    </>
  );
};

export default Quote;
