import HTMLFlipBook from "react-pageflip";

import page1 from "/mag/1.jpg";
import page2 from "/mag/2.jpg";
import page3 from "/mag/3.jpg";
import page4 from "/mag/4.jpg";
import page5 from "/mag/5.jpg";
import page6 from "/mag/6.jpg";
import page7 from "/mag/7.jpg";
import page8 from "/mag/8.jpg";
import page9 from "/mag/9.jpg";
import page10 from "/mag/10.jpg";
import page11 from "/mag/11.jpg";
import page12 from "/mag/12.jpg";
import page13 from "/mag/13.jpg";
import page14 from "/mag/14.jpg";
import page15 from "/mag/15.jpg";
import page16 from "/mag/16.jpg";
import page17 from "/mag/17.jpg";
import page18 from "/mag/18.jpg";
import page19 from "/mag/19.jpg";
import page20 from "/mag/20.jpg";
import page21 from "/mag/21.jpg";
import page22 from "/mag/22.jpg";
import page23 from "/mag/23.jpg";
import page24 from "/mag/24.jpg";
import page25 from "/mag/25.jpg";
import page26 from "/mag/26.jpg";
import page27 from "/mag/27.jpg";
import page28 from "/mag/28.jpg";
import page29 from "/mag/29.jpg";
import page30 from "/mag/30.jpg";
import page31 from "/mag/31.jpg";
import page32 from "/mag/32.jpg";
import page33 from "/mag/33.jpg";
import page34 from "/mag/34.jpg";
import page35 from "/mag/35.jpg";

const pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22,
  page23,
  page24,
  page25,
  page26,
  page27,
  page28,
  page29,
  page30,
  page31,
  page32,
  page33,
  page34,
  page35,
];

export default function MyBook(props) {
  return (
    <HTMLFlipBook width={400} height={800}>
      {pages.map((page, index) => (
        <div className="demoPage" key={index}>
          <img src={page} alt={`Page ${index + 1}`} />
        </div>
      ))}
    </HTMLFlipBook>
  );
}
