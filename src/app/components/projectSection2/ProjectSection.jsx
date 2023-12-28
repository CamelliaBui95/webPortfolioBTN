import React from "react";
import "./projectSectionStyle.css";

const ProjectSection = () => {
  return (
    <section className="project-section" id="projects">
      <h2 className="text-primaryColor text-3xl md:text-4xl text-center">
        Projects
      </h2>
      <div className="project-wrapper">
        <div className="card-container">
          <input type="radio" name="slide" id="c1" defaultChecked/>
          <label
            htmlFor="c1"
            className="card"
            style={{ backgroundImage: "url(/images/projects/1.png)" }}
          >
            <div className="content text-primaryColor">
              <div className="card-index">1</div>
              <div className="description">
                <h4>Project 1</h4>
                <p>Project 1 Description</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label
            htmlFor="c2"
            className="card"
            style={{ backgroundImage: "url(/images/projects/2.png)" }}
          >
            <div className="content text-primaryColor">
              <div className="card-index">2</div>
              <div className="description">
                <h4>Project 2</h4>
                <p>Project 2 Description</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c3"/>
          <label
            htmlFor="c3"
            className="card"
            style={{ backgroundImage: "url(/images/projects/3.png)" }}
          >
            <div className="content text-primaryColor">
              <div className="card-index">3</div>
              <div className="description">
                <h4>Project 3</h4>
                <p>Project 3 Description</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          <label
            htmlFor="c4"
            className="card"
            style={{ backgroundImage: "url(/images/projects/4.png)" }}
          >
            <div className="content text-primaryColor">
              <div className="card-index">4</div>
              <div className="description">
                <h4>Project 4</h4>
                <p>Project 4 Description</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c5" />
          <label
            htmlFor="c5"
            className="card"
            style={{ backgroundImage: "url(/images/projects/5.png)" }}
          >
            <div className="content text-primaryColor">
              <div className="card-index">5</div>
              <div className="description">
                <h4>Project 5</h4>
                <p>Project 5 Description</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
