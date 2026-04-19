import HTMLFlipBook from "react-pageflip";
import page1 from "../../assets/DIU_SEC_Magazine/Typing Titan-Meraj.jpg";
import page2 from "../../assets/DIU_SEC_Magazine/Iftar-Meraj.jpg";
import page3 from "../../assets/DIU_SEC_Magazine/get together-Meraj.jpg";
import page4 from "../../assets/DIU_SEC_Magazine/Beyond The Frame-Meraj.jpg";
import page5 from "../../assets/DIU_SEC_Magazine/5.jpg";

export default function MyBook(props) {
  return (
    <HTMLFlipBook width={400} height={800}>
      <div className="demoPage ">
        <img src={page1} alt="" />
      </div>
      <div className="demoPage ">
        <img src={page2} alt="" />
      </div>
      <div className="demoPage ">
        <img src={page3} alt="" />
      </div>
      <div className="demoPage ">
        <img src={page4} alt="" />
      </div>
      <div className="demoPage ">
        <img src={page5} alt="" />
      </div>
    </HTMLFlipBook>
  );
}
