import './Skill.css';
export default function Skill({icon,children}){
    return(
        <div id="skill">
            <i className={icon}></i>
            <h3>{children}</h3>
        </div>
    );
}