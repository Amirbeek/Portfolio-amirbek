import React, { useEffect } from 'react';
import Title from "../components/Title";

const Project_Page = ({ projectData }) => {

    useEffect(() => {
        console.log('PROJECTDATA ' + JSON.stringify(projectData));
    }, [projectData]);

    return (
        <div>
            <Title title={projectData ? projectData.Project_Title : 'No project data'}/>
        </div>
    );

};

export default Project_Page;
