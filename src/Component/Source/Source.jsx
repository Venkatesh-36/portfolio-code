import './Source.css';
export default function Source({ icon, children, link }) {
    return (
        <div id="source">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <i className={icon}></i>
            </a>
        </div>
    );
}