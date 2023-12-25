import "./Chicago.css";
import imageNew from "../assets/imageNew.png";


function Chicago() {
  return (
    <section className="app__chicago">
      <div className="app__chicago-textbox">
        <h1 className="app__chicago-textbox-header">Little Lemon</h1>
        <h2 className="app__chicago-textbox-subheader">Chicago</h2>
        <p className="app__chicago-textbox-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
        <img src={imageNew} alt="imageCombination" />
    </section>
  );
}

export default Chicago;
