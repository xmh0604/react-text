import ReactDom from "react-dom";

const title = (
    <>
    <h1>阿里腾讯字节跳动</h1>
    <ul className="dadada">
        <li>你是谁</li>
        <li>我是谁</li>
        <li>他又是谁</li>
    </ul>
    </>
)

ReactDom.render(title,document.querySelector('#root'))