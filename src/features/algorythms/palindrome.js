import React from "react";

export const Palindrome = ({ text }) => {
  let textReverse = text
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (text === textReverse) {
    return <div>{text} is a palindrome</div>;
  }
  return <div>{text} is not a palindrome</div>;
};
