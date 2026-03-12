import Skill from '../Skill/Skill';
import './Stack.css';
export default function Stack(){
    return(
        <div id="stack">
            <h1>Tech Stack</h1>
            <h2 className="section-title"></h2>
            <div className="program">
                <Skill icon="fa-brands fa-java fa-2x">Java</Skill>
                <Skill icon="fa-solid fa-database fa-2x">MySql</Skill>
                <Skill icon="fa-brands fa-react fa-2x">React</Skill>
                <Skill icon="fa-brands fa-node-js fa-2x">Node.Js</Skill>
                <Skill icon="fa-brands fa-square-js fa-2x">Java Script</Skill>
                <Skill icon="fa-brands fa-html5 fa-2x">HTML</Skill>
                <Skill icon="fa-brands fa-css3-alt fa-2x">CSS</Skill>
            </div>
        </div>
    );
}