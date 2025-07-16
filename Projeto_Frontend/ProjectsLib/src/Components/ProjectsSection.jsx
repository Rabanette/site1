import array from '../Lib';
import '../RestonsiveCSSs/StylesPC.css';
import '../RestonsiveCSSs/stylesPhone.css';
import '../RestonsiveCSSs/StylesTablet.css';
import '../../../ProjectsLib/defaults.css';


export default function ProjectsSection(){
        
        return(
            <article id="MY-EXPERIENCE">
            <h1 id="skills-title">Projects</h1>
            <section>
            {array.map((array, index)=>(
            <div key={index} id='my-experience'>
                
                <h1 className="experience-subtitles">{array.Name}</h1>
                <header>{array.Date}</header>
                <p>{array.Description}</p>
                <img src={`${array.ImageURL}`} alt=""/>
                <div className="line2"></div>
                
            </div>
        ))} 
            </section>
            </article>
            );
            
    }    
