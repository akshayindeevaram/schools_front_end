import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import Nav from '../../component/nav/Nav'
import "./About.css"

export default function About() {
  return (
    <div>
        <Header/>
        <Nav />
        
      <h1 className="main_heading">Welcome to our School</h1>
      <div className='main_details'>
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
            <Footer/>
    </div>
  )
}
