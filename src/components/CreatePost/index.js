import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import "./style.css";

const CreatePost = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  const [healthy, setHealthy] = useState("");
  const [junk, setJunk] = useState("");
  const [village, setVillage] = useState("");
  const [drinks, setDrinks] = useState("");
  const [other, setOther] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);

    formData.append("healthy", healthy);
    formData.append("junk", junk);
    formData.append("village", village);
    formData.append("drinks", drinks);
    formData.append("other", other);

    let result = await axios.post("http://127.0.0.1:8000/addpost", formData);

    history.push("/dashboard");
    console.log(result);
  };
  return (
    <div class="adbg">
      <form className="addform " onSubmit={createPost}>
        <h1 class="headc">Create Post</h1>

        <label>Name</label>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>File</label>

        <input
          type="file"
          placeholder="File"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label> Food Category</label>
        <div class="rowck">
          <div class="columnck">
            <input
              type="checkbox"
              name="healthy"
              onChange={(e) => {
                setHealthy(e.target.checked);
              }}
            />
            <label for="value1">Healthy</label>
            <br />

            <input
              type="checkbox"
              name="junk"
              onChange={(e) => {
                setJunk(e.target.checked);
              }}
            />
            <label for="value2">Junk</label>
            <br />

            <input
              type="checkbox"
              name="village"
              onChange={(e) => {
                setVillage(e.target.checked);
              }}
            />
            <label for="value3">Village</label>
            <br />

            <input
              type="checkbox"
              name="drinks"
              onChange={(e) => {
                setDrinks(e.target.checked);
              }}
            />
            <label for="value4">Drinks</label>
            <br />

            <input
              type="checkbox"
              name="other"
              onChange={(e) => {
                setOther(e.target.checked);
              }}
            />
            <label for="value5">Other</label>
            <br />
          </div>
        </div>
        <label>Description</label>
        <CKEditor
          id="ck_editor"
          editor={ClassicEditor}
          data="<br><br><br><br>"
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
