import './Project.css';
import ProjectApp from '../ProjectApp/ProjectApp';
import aran from "../../assets/images/aran.png";
import ArrayDeque from "../../assets/images/ArrayDeque.png";
import formsafe from "../../assets/images/formsafe.jpg";
import datamanager from "../../assets/images/datamanager.png";
import automation from "../../assets/images/automation.jpg";
import Hospital from "../../assets/images/Hospital.png";
import redbus from "../../assets/images/redbus.jpeg";
import calculator from "../../assets/images/Calculator.png";
import game from "../../assets/images/game.png";
import scanner from "../../assets/images/scanner.jpg";
import day from "../../assets/images/day.jpg";
import patterns from "../../assets/images/pattern.jpg";
import age from "../../assets/images/age.jpg";
import planet from "../../assets/images/planet.jpg";
import stone from "../../assets/images/stone.png";
import weather from "../../assets/images/weather.png";
import Fylo from "../../assets/images/Fylo.png";
import Phantom from "../../assets/images/Phantom.png";
import ColatSapien from "../../assets/images/Col at Sapien.png";
import { useState } from 'react';
export default function Project() {
    const allProjects = [
        { name: "Aran360", image: aran, describe: "Aran360 is a platform for learning cybersecurity and practice your skills online.", tech: ["MySQL","React","Java"], isCode:true, link:"https://github.com/Venkatesh-36/regexLab" },
        { name: "Array Deque", image: ArrayDeque, describe: "A custom implementation of an Array Deque data structure with all methods built from scratch.", tech:["Java"], isCode:true, link:"https://github.com/Venkatesh-36/java-project-2_ArrayDeque" },
        { name: "Hospital Management System", image: Hospital, describe: "A system to manage patients, appointments, and hospital operations efficiently.", tech:["Java","MySQL"], isCode:true, link:"https://github.com/Venkatesh-36/Venkat-hub" },
        { name: "FormSafe", image: formsafe, describe: "A practice app to understand form submissions, data retrieval, and security vulnerabilities.", tech:["Java","MySql","Testing"], isCode:true, link:"https://github.com/Venkatesh-36/basic-security-testing" },
        { name: "DataManager", image: datamanager, describe: "A simple MVC-based module for managing data input and retrieval in a structured and scalable way.", tech:["Java","MySql"], isCode:true, link:"https://github.com/Venkatesh-36/flow-model" },
        { name: "Automation Lab", image: automation , describe: "Hands-on automation testing of random websites to understand test scripts, validation, and bug detection.", tech:["Java","Testing"], isCode:true, link:"https://github.com/Venkatesh-36/basic-testing" },
        { name: "Planets", image: planet, describe: "A Node.js app showcasing an interactive planets page with dynamic planetary data.", tech:["Node.js"], isCode:true, link:"https://github.com/Venkatesh-36/planet-Assignment" },
        { name: "Calculator", image: calculator, describe: "A calculator that performs both basic arithmetic operations and advanced scientific functions.", tech:["JavaScript","HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-ja0msw7g-8443.zcodecorp.in/project/Mini%20project/Calculator1/calculator1.html", link:"https://github.com/Venkatesh-36/calculator" },
        { name: "Patterns", image: patterns, describe: "Implemented JavaScript patterns to practice logic, loops, and algorithmic thinking for structured output.", tech:["JavaScript","HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-ja0msw7g-8443.zcodecorp.in/project/Assignment/Assignment-003/pattern.html",link:"https://github.com/Venkatesh-36/patterns" },
        { name: "Age Calculator", image: age, describe: "Built a JavaScript age calculator to compute age accurately from the user’s date of birth, handling dynamic inputs", tech:["JavaScript","HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-ja0msw7g-8443.zcodecorp.in/project/Assignment/Assignment-004/age.html", link:"https://github.com/Venkatesh-36/age-calculator" },
        { name: "Stone paper game", image: stone, describe: "Created a Stone-Paper-Scissors game in JavaScript using event listeners for interactive gameplay.", tech:["JavaScript","HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-ja0msw7g-8443.zcodecorp.in/project/Assignment/Assignment-014/event.html", link:"https://github.com/Venkatesh-36/js-pet-projects/tree/main/game" },
        { name: "Weather App", image: weather, describe: "Built a JavaScript weather app fetching real-time data from APIs to display accurate weather information.", tech:["JavaScript","HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-ja0msw7g-8443.zcodecorp.in/project/Assignment/Assignment-020/weather.html",link:"https://github.com/Venkatesh-36/js-pet-projects/tree/main/weather" },
        { name: "Red Bus", image: redbus, describe: "A static Radbus website built using HTML and CSS as part of a frontend training project.", tech:["HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-i4lm3hsq-8443.zcodecorp.in/Learning/Project%20HTML%20&%20CSS/profile..html", link:"https://github.com/Venkatesh-36/Redbus" },
        { name: "Phantom", image: Phantom, describe: "Built a static HTML webpage while learning responsive layouts using CSS Grid and Flexbox.", tech:["HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-i4lm3hsq-8443.zcodecorp.in/Learning/Assignment/Assignment-017/grid.html", link:"https://github.com/Venkatesh-36/html-pet-projects/tree/main/grid" },
        { name: "Col at Sapien", image: ColatSapien, describe: "Built a static HTML webpage while learning responsive layouts using CSS Grid and Flexbox.", tech:["HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-i4lm3hsq-8443.zcodecorp.in/Learning/Assignment/Assignment-014/file.html", link:"https://github.com/Venkatesh-36/html-pet-projects/tree/main/file" },
        { name: "Fylo", image: Fylo, describe: "Built a static HTML webpage while learning responsive layouts using CSS Grid and Flexbox.", tech:["HTML / CSS"], isCode:true, isDemo:true, linkDemo:"https://venkatr-i4lm3hsq-8443.zcodecorp.in/Learning/Assignment/Assignment-013/flex.html", link:"https://github.com/Venkatesh-36/html-pet-projects/tree/main/flex" },
        { name: "Multiverse Escape Game", image: game, describe: "A Scratch game where a player escapes from many universes by solving challenges.", tech:["Scratch"], isDemo:true, linkDemo:"https://scratch.mit.edu/projects/1193227060/" },
        { name: "Picture Scanner", image: scanner, describe: "A Scratch project that scans a picture first, then lets you freely draw and explore your creativity.", tech:["Scratch"], isDemo:true, linkDemo:"https://scratch.mit.edu/projects/1186193801/" },
        { name: "Day Finder", image: day, describe: "A Scratch project that lets users enter a date and instantly finds the day of the week for it.", tech:["Scratch"], isDemo:true, linkDemo:"https://scratch.mit.edu/projects/1186950838/" },
    ];
    const filters = ["All","Java","MySQL","React","Node.js","JavaScript","Testing","HTML / CSS","Scratch"];
    const [selectedFilter, setSelectedFilter] = useState("All");
    const filteredProjects = allProjects.filter(proj => 
        selectedFilter === "All" || proj.tech.map(t => t.toLowerCase()).includes(selectedFilter.toLowerCase())
    );
    return (
        <div id="project">
            <h1>Projects</h1>
            <h2 className="section-title"></h2>
            <div className="project-filters">
                {filters.map(f => (
                    <button
                        key={f}
                        className={selectedFilter === f ? "active" : ""}
                        onClick={() => setSelectedFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="project-row">
                {filteredProjects.map(proj => (
                    <ProjectApp
                        key={proj.name}
                        isCode={proj.isCode}
                        isDemo={proj.isDemo}
                        describe={proj.describe}
                        tech={proj.tech}
                        image={proj.image}
                        link={proj.link}
                        linkDemo={proj.linkDemo}
                    >
                        {proj.name}
                    </ProjectApp>
                ))}
            </div>
        </div>
    );
}