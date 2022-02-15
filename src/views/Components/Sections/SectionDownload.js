/*eslint-disable*/
import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import Aos from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8} data-aos="fade-top">
            <h3>Want to build your own digital product?</h3>
            <h4>
              I'm here to help you.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6} data-aos="fade-bottom">
            <Button
              color="facebook"
              size="md"
              href="https://drive.google.com/file/d/1DsO1vZl0vKJQEcnpBU30wyISgjDQZQAI/view?usp=sharing"
              target="_blank"
            >
              Download My CV
            </Button>
            <Button
              color="facebook"
              size="md"
              href="mailto:mfathulilhamm@gmail.com"
              target="_blank"
            >
              Contact Me via Email
            </Button>
          </GridItem>
        </GridContainer>
        {/* <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              We{"'"}ve launched{" "}
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                target="_blank"
              >
                Material Kit PRO React{" "}
              </a>
              .It has a huge number of components, sections and example pages.
              Start Your Development With A Badass Material-UI nspired by
              Material Design.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
              target="_blank"
            >
              Material Kit PRO
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section"
              target="_blank"
            >
              Material Dashboard PRO
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div> */}
      </div> 
    </div>
  );
}
