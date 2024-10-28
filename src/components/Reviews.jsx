import React from "react";
import ReviewCard from "./SingleReview";


const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center px-5 pt-[-20px]  md:px-13 md:py-13  bg-white pb-10" id="reviews">

      <h1 className=" font-semibold text-center text-DarkColor text-4xl lg:mt-14 mt-24 ">
        Feedback Corner
      </h1>

      <div className=" flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard name="Emily Davis" />
        <ReviewCard name="Madison Mitchell" />
        <ReviewCard name="Aubrey Carter" />
      </div>
    </div>
  );
};

export default Review;