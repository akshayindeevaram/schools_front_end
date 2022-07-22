import React, { Component } from "react";
import "./Footer.css";

type handleProps={
  target:{name:string, value:string}
}
export default class Footer extends Component {
  state = {
    name: "",
    email: "",
    items: [],
  };


  handleChange = (e:handleProps) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  storeItems = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { name, email } = this.state;
    // const allItems = this.state.items;

    // allItems.push({ name, email });
    this.setState({
      // items: allItems,
      items:[...this.state.items,{name,email}],
      email: "",
      name: "",
    });
  };

  render() {
    const { name, email, items } = this.state;
    // console.log(items,email,name)
    return (
      <div className="foot">
        <div className="footer">
          <div className="left-footer">
            <label>Get Subscribed</label>
          </div>
          <div className="right-footer">
            <form className="input-section" onSubmit={this.storeItems}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email here"
                value={email}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
            <div className="links">
            <h5>Quick links</h5>
            <p>
              <a className="quick-links" href="https://www.google.com">
                Fee Payment
              </a>
            </p>
            <p>
              <a className="quick-links" href="https://www.facebook.com">
                Latest Notifications
              </a>
            </p>
            </div>
            </div>
        </div>
        <div className="copyright"><h6>© Copyright Agency and contributors 2022. ABN 53 001 228 799</h6></div>
      </div>
      
    );
  }
}

// import React, { useState } from "react";
// import './Footer.css'

// export default function Footer() {
//   const [name, setName]=useState("");
//   const [email, setEmail]=useState("");
//   // const [list, setList]=useState([]);
//   const [items, setItems]=useState([]);

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(name,email);
//     const data={name,email};
//     console.log(data);

//     // if(name&&email){
//     //   setList((ls)=>[...ls,data])
//     //   setName("")
//     //   setEmail("")
//     // }

//     // if(name&&email){
//     //    setArray((ls)=>[...ls,data])
//     //    setName("")
//     // setEmail("")
//     // }
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, email } = this.state;
//     const allItems = items;

//     allItems.push({ name, email });
//     this.setState({
//       items: allItems,
//       email: "",
//       name: "",
//     });
//   };

//   return (
//     <div className="foot">
//       <div className="footer">
//         <div className="left-footer">
//           <label>Get Subscribed</label>

//           <h4>Coddle Vidyalaya</h4>
//           <h5>Cyberpark</h5>
//           <h5>Thondayad Byepass</h5>
//           <h5>Kozhikode 673014</h5>
//         </div>
//         <div className="right-footer">
//           <form onSubmit={handleSubmit}>
//           <input type="name" name="name" placeholder="Enter your name here" value={name} onChange={(e)=>setName(e.target.value)}/>
//           <input type="email" name="email" placeholder="Enter your email here" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//           <button>Submit</button>
//           </form>

//           <h5>Quick links</h5>
//           <p>
//             <a className="quick-links" href="https://www.google.com">
//               Fee Payment
//             </a>
//           </p>
//           <p>
//             <a className="quick-links" href="https://www.facebook.com">
//               Latest Notifications
//             </a>
//           </p>
//           <p>
//             <a className="quick-links" href="https://www.instagram">
//               Accademic Calender
//             </a>
//           </p>
//           <p>
//             <a className="quick-links" href="https://www.google.com">
//               Staffs and Teachers
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
