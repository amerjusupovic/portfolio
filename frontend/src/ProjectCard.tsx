import { Card } from 'antd';
import "./App.scss";
import { Paper } from "@mui/material";

function ProjectCard(props: any) {
    console.log(props.project)
    return (
        <div className="project-card-div">
            <div className="project-card-top-div">
                <Paper elevation={10} className="top-card project-card-top">
                    <p className="project-card-title-text">
                        {props.project.name}
                    </p>
                </Paper>
            </div>
            <div className="project-card-body-div">
                <a href={props.project.svn_url}>
                    <Paper elevation={10} className="project-card-body">
                        <p className="project-card-body-text">
                            {props.project.description}
                        </p>
                    </Paper>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;