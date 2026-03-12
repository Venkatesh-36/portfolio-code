import Source from '../Source/Source';
import Tech from '../Tech/Tech';
import './ProjectApp.css';
export default function Project({
    image,
    children,
    describe,
    tech,
    isCode,
    isDemo,
    link,
    linkDemo
}){
    return(
        <div id="projectapp">
            <div className="image">
                <img src={image}/>
            </div>
            <div className="text">
            <h3>{children}</h3>
            <p>{describe}</p>
            <div className = "stack">
                {tech.map((val)=>{
                    return(
                        <Tech>{val}</Tech>
                    );
                })}
            </div>
            <div  className ="source">
                {isCode && <Source icon="fa-brands fa-github" link={link}></Source>}
                {isDemo && <Source icon="fa-solid fa-arrow-up-right-from-square" link={linkDemo}></Source>}
            </div>
            </div>
        </div>
    );
}