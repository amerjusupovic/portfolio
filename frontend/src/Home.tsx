import "./App.scss";
import { useState } from 'react';
import { Paper, Grid } from "@mui/material";
import { LoadingOutlined } from '@ant-design/icons';
import FadeInSection from './FadeInSection';
import ProjectCard from './ProjectCard';

function Home(props: any) {
  const [aboutVisible, setAboutVisible] = useState(false);

  function setAboutVisibleTrue() { setAboutVisible(true) }

  return (
    <div className="end">
      <div className="main fade-in">
        <div className="center-left">
          <div className="container">
            <div className="h title letter">H</div>
            <div className="e title letter">E</div>
            <div className="y title letter">Y</div>
            <div className="ex title letter">!</div>
          </div>
          <div className="container">
            <div className="si subtitle letter">I</div>
            <div className="sap subtitle letter">'</div>
            <div className="sm subtitle letter">M&nbsp;</div>
            <div className="sa subtitle letter">A</div>
            <div className="sm subtitle letter">M</div>
            <div className="se subtitle letter">E</div>
            <div className="sr subtitle letter">R</div>
          </div>
        </div>
        <div className="about-me">
          <Paper className="about-me-card top-card" elevation={10}>
            <div className="card-text-title subtitle">
              My Portfolio
            </div>
          </Paper>
          <div className="lower-card-div">
            <Paper className="about-me-card body-card" onMouseOver={setAboutVisibleTrue} elevation={10}>
              <p className={aboutVisible ? "card-text-body-visible fade-in-faster" : "card-text-body-invisible"}>
                A small gallery of some of the projects I've done over the years and I'm going to continue adding to this collection over time.
                It also includes some quick facts and information about me. 
                If you want to see more, visit my <a href="https://github.com/amerjusupovic">GitHub </a>
                and <a href="https://gitlab.com/amerj00">GitLab </a> pages as well!
              </p>
            </Paper>
          </div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="main center">
        {props.projects.length > 0 ? 
          <FadeInSection>
            <Grid container justifyContent="center" spacing={1}>
              {props.projects.map((project: any) => <Grid item xs={5}>
                <ProjectCard project={project}/>
              </Grid>)}
            </Grid></FadeInSection> : <LoadingOutlined className="loading-icon"/>}
      </div>
    </div>
  );
}

export default Home;