import Button from '../Button/Button';
import user from "../../assets/images/user.png";
import './Home.css';
export default function Home() {
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.getElementById("header")?.offsetHeight || 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 10;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
    return(
        <div id='home'>
            <div className="image">
                <img src={user} alt="Venkatesh" />
            </div>
            <div className="details">
                <h1>Hey there! I’m Venkatesh 👋</h1>
                <h3>Software Explorer</h3>
                <p>
                A curious tech enthusiast currently exploring the world of software development. As a student, I enjoy building small projects, learning new technologies, and turning ideas into working solutions.
                </p>
                <Button onClick={() => scrollToSection("project")}>View Projects</Button>
            </div>
        </div>
    );
}