import React from "react";
import Blog_header from "../components/Blog_header";
import Typography from "@mui/material/Typography";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ThreePage() {
    const codeString = `
git clone https://github.com/RenaudRohlinger/vanilla-three-starter.git
npm install --save three`;
    const codeString2 = `
:root {
    --baseline: 24px;
    --space-sm: calc(var(--baseline) / 2);
    --space-md: var(--baseline);
    --space-lg: calc(var(--baseline) * 2);
    --space-xl: calc(var(--baseline) * 3);
}
`;

    return (
        <Blog_header
            type={'Development'}
            title={'Discovering ThreePage.js. How and why this blog was built.'}
            date={'October 9, 2024'}
            image={'./images/Thumbnail.png'}
        >
            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                Why would I need a blog?
            </Typography>

            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                The idea of building my own website wasn’t something that came out of the blue. It’s been on my mind for
                a couple of years now, gradually taking shape as I thought more about what I truly needed. One of the
                main reasons for this decision is my relationship with language. While Uzbek is my native language, I’ve
                always found expressing complex thoughts in English to be more natural for me. However, it’s not without
                challenges—especially when it comes to speaking. I’ve worked hard to improve my English, and although
                I’ve made significant progress, it’s still not where I want it to be. On the other hand, I’ve realized
                that coding languages are where I can truly shine. I feel more comfortable expressing myself through
                code than through spoken words.
                <br/>
                <br/>
                That’s where the idea of a website comes in. A personal website would allow me to showcase my skills,
                projects, and experiences in a way that feels authentic and doesn’t rely on how well I can speak or
                explain things verbally. It’s also a space where I can focus on what matters most: sharing my work,
                growing as a developer, and giving people a glimpse of what I can do.
                <br/>
                <br/>
                I’ve thought about using social media platforms like Instagram or Twitter for this purpose, but they’ve
                never felt right for me. Social media often feels distracting and, at times, toxic. It’s easy to get
                caught up in the endless scrolling, and I’ve realized I’d rather spend my time building something
                meaningful than chasing likes or views. A website, on the other hand, is independent—it’s my space to
                design, refine, and perfect. It’s also a great way to stand out when applying for jobs or connecting
                with companies.
            </Typography>

            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                How Three.js Was Built
            </Typography>

            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-lg)'}}>
                The initial plan was to create a traditional 2D web application, but as I explored the growing trend of
                3D in the digital world, I realized that 3D websites would be the future. I stumbled upon Three.js,
                which simplifies the creation of 3D graphics for the web. This library stood out to me because it not
                only offers a smoother development experience compared to traditional WebGL but also paves the way for a
                more immersive, interactive future of the web.
                <br/><br/>
                As more people adopt 3D web experiences, the tools and frameworks around it will evolve, making 3D
                websites easier to build and use. Three.js seemed like the perfect tool to start building this future of
                the internet, offering easy integration with modern frameworks.
                <br/><br/>
                Once I got familiar with Three.js, I built a basic 3D scene and experimented with immersive features.
                The process was straightforward, and I could see how this kind of development will shape the future of
                websites. Here's how you can start building your own 3D website:


            </Typography>

            <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString}
            </SyntaxHighlighter>
            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-lg)'}}>
                I created Three.js games, a globe, and animated shapes with <span className={'picked'}>GSAP</span>, and
                now I'm learning
                Blender for more advanced 3D designs. This is just the beginning, as I believe 3D will soon dominate how
                websites are experienced in the future.
            </Typography>
            <div style={{paddingBottom: 'var(--space-sm)'}}></div>
            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                Design Improvements
            </Typography>
            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-lg)'}}>
                The default template was looking pretty good, however, it was plain. I especially did not like the
                typography spacing: margins between different text sizes were the same, which was kind of odd for a
                text-rich website. Instead, I used 24px spacing baseline that I successfully tested on a website I did
                for a start-up this summer. The idea is pretty simple: spacing increases incrementally depending on the
                element hierarchy, giving my text a consistent look and better readability.
            </Typography>
            <SyntaxHighlighter language="css" style={dracula}>
                {codeString2}
            </SyntaxHighlighter>
            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-lg)'}}>
                I also added my own touch to the overall design of the website. I tried to use <span className="picked">Material UI</span> React
                along the way, as I was getting more confident with it.
            </Typography>
            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                Deployment
            </Typography>
            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-lg)'}}>
                After some more coding and small design improvements, I have deployed my application to <a
                href={'https://vercel.com'} className="navigate">Vercel</a> through GitHub. On code changes, Vercel
                automatically fetches the new code and deploys a new build, a practice which is known as continuous
                integration.
                Speaking of my contact form, the data is sent using fetch API to my <a href="https://formcarry.com/"
                                                                                       className="navigate">Formcarry</a> endpoint,
                which informs me
                later through email. As an experiment, I have installed an <a href="https://imgbot.net/"
                                                                              className="navigate">ImgBot</a> to my
                repository, that will automatically optimize all of my uploaded images and make a pull request once it
                is done each time.
            </Typography>
            <img src={'./images/portfolio.png'} style={{width: "100%"}}/>
            <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-lg)', marginTop:'var(--space-lg)'}}>
                To make things easier, here is a structure of my blog that is portrayed in the highest level of abstraction possible, while retaining the overall logic.

                By the way, if you are a student, you can get a discount on a domain name just like I did on <a href="https://Namecheap.com" className="navigate">Namecheap.com</a> using <a href="https://Namecheap.com" className="navigate">GitHub Student Developer Pack.</a>
            </Typography>
        </Blog_header>
)
}

export default ThreePage;
