import React  from "react";
import tech from "./tech.jpeg";
import tech2 from "./tech2.jpeg";
import tech3 from "./tech3.jpeg";
import ds from './ds.jpeg'
import wd from './wd.jpeg'
import sales from './sales.jpeg'
const Home = () => {
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-4">Different Career Opportunities</h1>
    <div className="container ">
    <div className="row my-1">
  <div className="col-sm">
    <div className="card" >
    {/* <div class="bg-image hover-zoom"> */}
    {/* <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank"> */}
  <img src={tech} alt="..." height="250px" className="card-img-top" />
  {/* </a> */}
  {/* <a src="https://en.wikipedia.org/wiki/Computer_security"> */}
  {/* <div class="mask" style="background-color: rgba(57, 192, 237, 0.2)"></div> */}
  {/* </a> */}
  {/* </div> */}
  <div className="card-body">
    <h5 className="card-title">Medical </h5>
    <p className="card-text">Saving Lives</p>
    <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
    {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
      <img src={tech2} className="card-img-top" alt="..." height="250px" />
    {/* </a> */}
  <div className="card-body">
    <h5 className="card-title">Engineering</h5>
    <p className="card-text">Creating new Technologies</p>
    <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={tech3} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Chartered Accountants</h5>
    <p className="card-text"> Managing accounts and taxes of people</p>
    <a href="https://en.wikipedia.org/wiki/Machine_learning" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={ds} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Teachers</h5>
    <p className="card-text"> Creating all other fields by teching students</p>
    <a href="https://en.wikipedia.org/wiki/Data_science" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={wd} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Buisnessman</h5>
    <p className="card-text"></p>
    <a href="https://en.wikipedia.org/wiki/Web_development" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
  <img src={sales} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Sales and Marketing</h5>
    <p className="card-text">Trying to Sell different types of Products. 
</p>
    <a href="https://en.wikipedia.org/wiki/Sales" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div>
</div>
</React.Fragment>
  );
};

export default Home;
