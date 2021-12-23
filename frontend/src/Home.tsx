import "./App.scss";
import { Paper } from "@mui/material";

function Home() {
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
            <Paper elevation={10}>
              <p>
                Thanks for checking out my portfolio!
              </p>
            </Paper>
          </div>
        </div>
      </div>
    );
}

export default Home;