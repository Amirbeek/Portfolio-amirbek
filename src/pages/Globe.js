import Blog_header from "../components/Blog_header";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";

function Globe() {
    const codeString = `// Lights setup
const ambientLight = new THREE.AmbientLight(0xbbbbbb, parameters.ambientLightIntensity);

const directionalLight = new THREE.DirectionalLight(0xffffff, parameters.directionalLightIntensity);
directionalLight.position.set(parameters.lightPositionX, parameters.lightPositionY, parameters.lightPositionZ).normalize();
directionalLight.castShadow = true;

const directionalLight2 = new THREE.DirectionalLight(0xffffff, parameters.directionalLightIntensity);
directionalLight2.position.set(-parameters.lightPositionX, parameters.lightPositionY, parameters.lightPositionZ).normalize();

const pointLight = new THREE.PointLight(0x8566cc, parameters.pointLightIntensity);
pointLight.position.set(-400, 500, 200);`;


    return (
        <>
            <Blog_header
                type={'Development'}
                title={'Flight data visualization on a globe, inspired by Github\'s homepage'}
                date={'December 29, 2024'}
                image={'./images/GitHub_Globe1.png'}
            >

                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                    Inspiration
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                    If you visited <a href="https://github.com/home" className={'navigate'}>Github's
                    homepage</a> recently, you probably seen their new, re-designed landing page. It is incredibly
                    well-made. One thing that stands out is the globe, where they display recent pull request activity
                    on Github. It is fascinating to see 3D becoming more and more popular in web design.
                </Typography>
                <img src="./images/githubpage.png" style={{width: '100%'}} alt="Figma Inspiration"/>

                <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                    I wanted to re-create it.
                </Typography>
                <Typography variant="h4" gutterBottom
                            sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)'}}>
                    Three-Globe.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                    Doing a Portal Scene with in R3F and Three.js from scratch really helped me to familiarize myself
                    with ThreeJS concepts. At first, I did not have any idea where to start. Luckily, I found a package
                    named <span style={{fontWeight: 'bold'}}>three-globe</span> that allows users to display data on a
                    globe. It had a pretty well-written documentation too. However, it was ugly and nowhere near to the
                    globe design made by Github
                </Typography>
                <img src="./images/git_0.png" style={{width: '100%'}} alt="Figma Inspiration"/>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)'}}>
                    Creating an environment
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ marginBottom: 'var(--space-md)' }}>
                    After extensive testing with various lighting setups, I successfully recreated a dreamy space environment using four distinct light sources. An <span style={{ fontWeight: "bold" }}>Ambient Light</span> bathes the entire scene in a gentle, diffuse glow, enhancing the soft exposure of the globe. Above the globe, a <span style={{ fontWeight: "bold" }}>Directional Light</span> casts a strong, focused illumination on the upper hemisphere, highlighting its features. Additional depth and texture are provided by two colored <span style={{ fontWeight: "bold" }}>Directional Lights</span>, which add nuanced shading. A <span style={{ fontWeight: "bold" }}>Point Light</span> is strategically placed to introduce realistic shadows, further enhancing the visual complexity and realism of the globe.
                </Typography>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
                <Box sx={{
                    width: '100%',
                    overflow: 'hidden',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <video
                        preload="metadata"
                        style={{width: '100%', height: '100%'}}
                        loop
                        autoPlay
                        muted
                    >
                        <source src="/images/Git.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </Box>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)'}}>
                    Displaying my boarded flights from 2022-2023
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ marginBottom: 'var(--space-md)' }}>
                    The source code is available on the <a href="https://github.com/Amirbeek/github-globe-visualization" className="navigate">amirbeek/github-globe-visualization</a> repository. This visualization displays all my flights from 2022 to 2023 on a globe, using data retrieved from my Google Calendar. It looks cool, but there are still many aspects to refine. The project is deployed on Vercel and can be viewed here: <a href="https://github-globe-visualization.vercel.app" className="navigate">GitHub Flight Visualization</a>.
                </Typography>

            </Blog_header>
        </>
    )
}

export default Globe;