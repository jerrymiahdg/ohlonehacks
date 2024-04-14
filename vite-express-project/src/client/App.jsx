import { useState } from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import Markdown from "react-markdown";

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
        setLoading(false);
        setDiagnosis(text.condition);
        setInfo(text.description);
        console.log(text.description);
      });
  };

  const changeHandler = (e) => {
    setVal(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-1 to-blue-2 flex flex-col p-5 items-center">
      <Header />
      <form
        className="max-w-2xl w-full flex-grow mt-10 flex flex-col gap-5"
        onSubmit={clickHandler}
      >
        {diagnosis || loading ? (
          <>
            <div className="btn aspect-square rounded-3xl flex flex-col justify-center items-center text-center p-5 gap-5">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <h1 className="text-2xl">
                    You may have <span className="font-bold">{diagnosis}</span>
                  </h1>
                  <Markdown>{info}</Markdown>
                </>
              )}
            </div>
            <button className="btn rounded-full p-5" type="button">
              Back
            </button>
          </>
        ) : (
          <>
            {image && (
              <>
                <img
                  src={image}
                  alt="hehe"
                  className="rounded-3xl object-cover aspect-square w-full"
                />
              </>
            )}
            <>
              <label
                for="photo"
                className={`${
                  image && "hidden"
                } btn text-2xl font-bold aspect-square rounded-3xl flex justify-center items-center idek`}
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
            <button className="btn rounded-full p-5" type="submit">
              Process Photo
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
