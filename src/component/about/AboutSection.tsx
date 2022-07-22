import React from "react";
import about from "../images/about.jpg";
import "./AboutSection.css";


export default class AboutSection extends React.Component<{},any> {

//   componentDidMount(){
//   axios.get("http://localhost:3001/about").then(res=>{
//     console.log(res);
//     this.setState({about:res.data})
//   })
// }



  // componentDidMount(){
  // axios({
  //   method:"get",
  //   url:"http://localhost:3001/about",
  // })

  // .then(function(response){
  //   const data = response.data
  // })
  // }



  constructor(props:{type:any; payload:any;}){
    super(props);
    this.state = {about: "us !"};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({about: "Coddle Vidyalaya !"})
    },3000)
  }
  shouldComponentUpdate() {
    return true;
  }



  render() {
    return (
      <div>
        <h2 className="us">About {this.state.about}</h2>
        <div className="About">
          <div className="About-img">
            <img src={about} className="AboutClass" alt="no" />
          </div>
          <div className="About-des">
            <p>
              
              A school is an educational environment where children go to learn
              from a teacher. Topics such as reading, writing and mathematics
              are central to education. Most of a student's time is spent in a
              classroom. This is where 10 to 30 people sit to take part in
              educational discussion. In the United States, the average number
              of students per classroom in primary schools is 23.1.[1] The term
              "school" is used for many educational environments--particularly
              in North America. There are different types of schools: elementary
              schools (primary in the UK), middle schools (secondary in the UK),
              and so on.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
