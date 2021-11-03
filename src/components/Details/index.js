import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import "./style.css";

const Details = () => {
  const history = useHistory();
  const [post, setPost] = useState({
    name: "",
    file_path: "",
    category: " ",
    description: "",
  });
  const { name, file_path, category, description } = post;
  const params = useParams();

  useEffect(() => {
    get_single_post();
  }, []);

  const get_single_post = async () => {
    let result = await axios.get("http://127.0.0.1:8000/post/" + params.id);
    setPost(result.data.post);

    console.log(result);
  };

  const deleteOperation = async (id) => {
    await axios
      .get("http://127.0.0.1:8000/post/delete/" + id)
      .then((res) => {
        history.push("/dashboard");
      })
      .catch((errors) => {
        alert("Something wrong!");
      });
  };

  const [comment, setComment] = useState("");

  const createComment = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("comment", comment);

    let result = await axios
      .post("http://127.0.0.1:8000/addcomment", formData)
      .then((response) => console.log(response));

    history.push("/dashboard");
    console.log(result);
  };

  return (
    <div class="dbg">
      <form className="dform ">
        <h1 class="headdt">Details</h1>

        <div class="cardd">
          <img
            style={{ width: 700, height: 300 }}
            src={"http://127.0.0.1:8000/posts/" + file_path}
          />
          <div class="containerd">
            <h2 class="author">{post.name}</h2>
            <br />

            <br />
            <p class="descr">{ReactHtmlParser(post.description)} </p>
            <br />
          </div>
        </div>
        {localStorage.getItem("status") &&
          localStorage.getItem("status") === "Admin" && (
            <tr>
              <td>
                <Link to={`/updatepost/${post.id}`}>
                  <span className="edit">Edit</span>
                </Link>

                <span onClick={() => deleteOperation(post.id)} className="delt">
                  Delete
                </span>
              </td>
            </tr>
          )}
      </form>
      <div></div>
      <form className="commform" onSubmit={createComment}>
        <label>Add a comment</label>
        <input
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <tr>
          <td>
            <button type="submit" className="sub">
              Submit
            </button>
          </td>
        </tr>
      </form>
    </div>
  );
};

export default Details;
