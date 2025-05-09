import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import tab1_image from "./assets/images/illustration-features-tab-1.svg";
import tab2_image from "./assets/images/illustration-features-tab-2.svg";
import tab3_image from "./assets/images/illustration-features-tab-3.svg";
import chrome from "./assets/images/logo-chrome.svg";
import firefox from "./assets/images/logo-firefox.svg";
import opera from "./assets/images/logo-opera.svg";

const HEADER = [
  {
    text: "FEATURES",
    class: "border-t-1 border-t-gray-500",
  },
  { text: "PRICING", class: "border-t-1 border-t-gray-500" },
  {
    text: "CONTACT",
    class: "border-t-1 border-b-1 border-t-gray-500 border-b-gray-500",
  },
];

const SOCIALS = [
  {
    icon: facebook,
    alt: "facebook icon",
  },
  {
    icon: twitter,
    alt: "twitter icon",
  },
];

const TAB_DATA = [
  {
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab1_image,
  },
  {
    label: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: tab2_image,
  },
  {
    label: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: tab3_image,
  },
];

const EXTENSION_DATA = [
  {
    title: "Add to Chrome",
    text: "Minimum version 62",
    image: chrome,
    alt: "chrome icon",
  },
  {
    title: "Add to Firefox",
    text: "Minimum version 55",
    image: firefox,
    alt: "firefox icon",
  },
  {
    title: "Add to Opera",
    text: "Minimum version 12",
    image: opera,
    alt: "opera icon",
  },
];

const FAQ_DATA = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    class: "border-t-1 border-t-[#b7b7b7]",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
export { HEADER, SOCIALS, TAB_DATA, EXTENSION_DATA, FAQ_DATA };
