import winzo from "./winzo.png";
import gift from "./gift.png";
import dollar from "./dollar.png";

export const cardsData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: "WINZO",
  bonus: "Sign Up Bonus $550",
  minWithdraw: "Min.Withdraw $110",
  image: winzo, // Ensure this image is in the src/assets directory
  giftImage: gift,
  dollarImage: dollar,
  downloadLink: "#" // Replace with your actual download link
}));

export const downloadButton = {
  text: "DOWNLOAD",
  link: "#" // Replace with your actual download link
};