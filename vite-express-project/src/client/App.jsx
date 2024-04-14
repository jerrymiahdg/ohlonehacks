import { useState } from "react";
import Header from "./Header";

function App() {
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(val.type);
    postImage(e, val);
  };

  const postImage = (e, val) => {
    console.log(URL.createObjectURL(val));
    console.log(val);
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    console.log(e.target.image.files[0]);
    setLoading(true);

    fetch("/post", {
      // headers: {
      //   // "Content-Type": `${val.type}`,
      //   "Content-Type": "multipart/form-data",
      // },
      method: "POST",
      // body: val,
      body: formData,
    })
      .then((e) => {
        return e.json();
      })
      .then((text) => {
        setDiagnosis(text.condition);
        setInfo(text.description);
      });
  };

  const changeHandler = (e) => {
    setVal(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-1 to-blue-2 flex flex-col items-center">
      <Header />
      <form
        className="w-3/5 flex-grow mt-10 flex flex-col gap-5"
        onSubmit={clickHandler}
      >
        {image ? (
          <>
            <img
              src={image}
              alt="hehe"
              className="rounded-3xl object-cover aspect-square w-full"
            />
          </>
        ) : (
          <>
            <label
              for="photo"
              className="btn text-2xl font-bold aspect-square rounded-3xl flex justify-center items-center idek"
            >
              Add Photo
            </label>
            <input
              className="hidden"
              id="photo"
              type="file"
              name="image"
              placeholder="input"
              onChange={changeHandler}
            />
          </>
        )}
        <button className="btn rounded-full p-5" type="submit">
          Process Photo
        </button>
      </form>
      {diagnosis && <div>You have: {diagnosis}</div>}
      {info && <div>{info}</div>}
    </div>
  );
}

export default App;
