import { marked } from "marked";
import { useState } from "react";
import MarkdownData from "../data/Markdown.js";

marked.setOptions({
  breaks: true
})
const renderer = new marked.Renderer();

const Markdown = () => {
  const [text, setText] = useState(MarkdownData);
  const html = marked.parse(text);

  function textHandler (e) {
    setText(e.target.value);
  }  

  return (
    <div className="row">
      <div className="col-md-6">
        <textarea
          type="text"
          value={text}
          id="editor"
          onChange={textHandler}
          className="form-control w-100 h-100 shadow-none"
        />
      </div>

      <div className="col-md-6">
        <div
          className="card card-body"
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(html, { renderer: renderer }),
          }}></div>
      </div>
    </div>
  );
};

export default Markdown;
