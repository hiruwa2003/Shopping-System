import React from "react";

const Title = ({ text1, text2, description }) => {
  return (
    <div className="flex flex-col gap-2 mb-8 items-center text-center">
      {/* Main Title */}
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-500">
        {text1} <span className="text-orange-500">{text2}</span>
      </p>

      {/* Description */}
      {description && (
        <p className="text-gray-700 text-sm sm:text-base md:text-base max-w-2xl">
          {description}
           
        </p>
      )}
    </div>
  );
};

export default Title;
