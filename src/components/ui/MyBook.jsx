import HTMLFlipBook from "react-pageflip";

import page0 from "/mag/SWEOrbit  e-Magazine.jpg";
import page1 from "/mag/e-mag_1.jpg";
import page2 from "/mag/e-mag_2.jpg";
import page3 from "/mag/e-mag_3.jpg";
import page4 from "/mag/e-mag_4.jpg";
import page5 from "/mag/e-mag_5.jpg";
import page6 from "/mag/e-mag_6.jpg";
import page7 from "/mag/e-mag_7.jpg";
import page8 from "/mag/e-mag_8.jpg";
import page9 from "/mag/e-mag_9.jpg";
import page10 from "/mag/e-mag_10.jpg";
import page11 from "/mag/e-mag_11.jpg";
import page12 from "/mag/e-mag_12.jpg";
import page13 from "/mag/e-mag_13.jpg";
import page14 from "/mag/e-mag_14.jpg";
import page15 from "/mag/e-mag_15.jpg";
import page16 from "/mag/e-mag_16.jpg";
import page17 from "/mag/e-mag_17.jpg";
import page18 from "/mag/e-mag_18.jpg";
import page19 from "/mag/e-mag_19.jpg";
import page20 from "/mag/e-mag_20.jpg";
import page21 from "/mag/e-mag_21.jpg";
import page22 from "/mag/e-mag_22.jpg";
import page23 from "/mag/e-mag_23.jpg";
import page24 from "/mag/e-mag_24.jpg";
import page25 from "/mag/e-mag_25.jpg";
import page26 from "/mag/e-mag_26.jpg";
import page27 from "/mag/e-mag_27.jpg";
import page28 from "/mag/e-mag_28.jpg";
import page29 from "/mag/e-mag_29.jpg";
import page30 from "/mag/e-mag_30.jpg";
import page31 from "/mag/e-mag_31.jpg";
import page32 from "/mag/e-mag_32.jpg";
import page33 from "/mag/e-mag_33.jpg";
import page34 from "/mag/e-mag_34.jpg";
import page35 from "/mag/e-mag_35.jpg";
import page36 from "/mag/e-mag_36.jpg";

const pages = [
  page0,
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
  page36,
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
