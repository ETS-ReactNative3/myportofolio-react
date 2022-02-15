import React, { useEffect } from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";

import benihku1 from "assets/img/benihku-1.png";
import benihku2 from "assets/img/benihku-2.png";
import benihku3 from "assets/img/benihku-3.png";
import benihku4 from "assets/img/benihku-4.png";
import benihku5 from "assets/img/benihku-5.png";
import kanwil1 from "assets/img/kanwil-1.png";
import kanwil2 from "assets/img/kanwil-2.png";
import tajwid1 from "assets/img/tajwid-1.png";
import tajwid2 from "assets/img/tajwid-2.png";
import tajwid3 from "assets/img/tajwid-3.png";
import tajwid4 from "assets/img/tajwid-4.png";
// import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";

const useStyles = makeStyles(styles);

const dataPortfolio = [
  { 
    name: "Real Estate Management",
    desc: "Slicing the UI from UI/UX and build it using React.js and Tailwind",
     img: [
        {name: benihku1}, 
        {name: benihku2},
        {name: benihku3},
        {name: benihku4},
        {name: benihku5}
    ] 
  },
  { 
    name: "E-commerce Benih",
    desc: "Build using Framework Laravel with MySQL for the databases",
     img: [
        {name: benihku1}, 
        {name: benihku2},
        {name: benihku3},
        {name: benihku4},
        {name: benihku5}
    ] 
  },
  { 
    name: "Sistem Informasi Perencanaan Dan Data Kementerian Agama Provinsi Sulawesi Selatan",
    desc: "My first team project with others 4 web developer, my job description here is to get data from all units in Kanwil Kemenag Sulsel as requirements before developing the website",
     img: [
        {name: kanwil1, link:'https://sulsel.kemenag.go.id/perencanaan/'}, 
        {name: kanwil2},
    ], 
    link:'https://sulsel.kemenag.go.id/perencanaan'
  },
  { 
    name: "Belajar Tajwid",
    desc: "Made with android studio using java",
     img: [
        {name: tajwid1}, 
        {name: tajwid2},
        {name: tajwid3},
        {name: tajwid4}
    ]
  },
  // {name:'', img: ,link:''},
];
export default function SectionExamples() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          {dataPortfolio.map((item, index) => (
            <GridItem
              xs={12}
              sm={12}
              md={9}
              style={{ marginBottom: 50 }}
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <a href={item.link} target="_blank">
                <h4 style={{ color: "#000" }}>{item.name}</h4>
                <p style={{ color: "#808080" }}>{item.desc}</p>
                <Carousel interval={3000} controls={false} >
                  {item.img.map(data=>(
                    <Carousel.Item>            
                      <img
                        src={data.name}
                        alt="..."
                        className={
                          classes.imgRaised +
                          " " +
                          classes.imgRounded +
                          " " +
                          classes.imgFluid
                        }
                      />
                  </Carousel.Item>
                ))}
                </Carousel>
              </a>
             </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
