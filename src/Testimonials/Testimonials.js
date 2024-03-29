import "./Testimonials.css";

function Testimonial(){
    return (
      <div className="app__testimonials-main-entry">
        <h3 className="app__testimonials-main-entry-rating">Rating</h3>
        <div className="app__testimonials-main-entry-nameImg">
            <img alt="emptyImage"/>
            <h3 className="app__testimonials-main-entry-name">Name</h3>
        </div>
        <h3 className="app__testimonials-main-entry-review">Review</h3>
      </div>
    );
}


function Testimonials() {
  return (
    <section className="app__testimonials">
        <h2 className="app__testimonials-main-title">Testimonials</h2>
        <div className="app__testimonials-main-entries">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
    </section>
  );
}

export default Testimonials;
