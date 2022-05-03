import React from "react";

const Tabs = () => {
  return (
    <div>
      <input id="tab1" type="radio" name="tabs" checked />
      <label for="tab1" style={{ margin: "0 0 -1px", padding: "15px 25px" }}>
        About
      </label>

      <input id="tab2" type="radio" name="tabs" />
      <label for="tab2" style={{ margin: "0 0 -1px", padding: "15px 25px" }}>
        Timeline
      </label>

      <section id="content1">
        <div className="row">
          <div className="col-md-6">
            <label>User ID :</label>
          </div>

          <div className="col-md-6">
            <p>123456789</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Name :</label>
          </div>

          <div className="col-md-6">
            <p>Prajwal Ratnaparkhe</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Email ID :</label>
          </div>

          <div className="col-md-6">
            <p>prajwal@gmail.com</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Phone No :</label>
          </div>

          <div className="col-md-6">
            <p>1234567890</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Profession :</label>
          </div>

          <div className="col-md-6">
            <p>Web Devloper</p>
          </div>
        </div>
        <hr />
      </section>

      <section id="content2">
        <p>
          Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick
          fatback boudin ball tip turduckef ribs.
        </p>
        <hr />
      </section>
    </div>
  );
};

export default Tabs;
