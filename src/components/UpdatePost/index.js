import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { useParams } from "react-router";
import "./style.css";

const UpdatePost = (props) => {
  const history = useHistory();
  const [description, setDescription] = useState("");
  const [post, setPost] = useState({
    name: "",
    file_path: "",
    description: "",
  });
  const { name, file_path } = post;
  const params = useParams();

  useEffect(() => {
    get_single_post();
  }, []);

  const get_single_post = async () => {
    let result = await axios.get("http://127.0.0.1:8000/post/" + params.id);

    setPost(result.data.post);
    console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, file_path: file_path, description: description };

    const formData = new FormData();

    formData.append("name", name);
    formData.append("file_path", file_path);
    formData.append("description", description);

    axios
      .post("http://127.0.0.1:8000/updatepost/" + params.id, formData)

      .then((res) => {
        history.push("/dashboard");
      })
      .catch((errors) => {
        alert("Something wrong!");
      });
  };

  const handleInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div class="upbg">
      <form className="upform " onSubmit={handleSubmit}>
        <h1 class="headu">Edit Post</h1>

        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          className="name"
          name="name"
          value={name}
          onChange={(e) => handleInput(e)}
        />
        <br />

        <CKEditor
          id="ck_editor"
          editor={ClassicEditor}
          data={post.description}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
        />

        {/* <label>File</label>
        <img
          style={{ width: 100 }}
          src={"http://127.0.0.1:8000/posts/" + file_path}
        />
        <input
          type="file"
          className="uppic"
          onChange={(e) => setPost(e.target.files[0])}
        />
        <br /> */}

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default withRouter(UpdatePost);
