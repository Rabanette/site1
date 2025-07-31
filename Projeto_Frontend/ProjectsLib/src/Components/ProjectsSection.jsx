import array from '../Lib';
import '../RestonsiveCSSs/StylesPC.css';
import '../RestonsiveCSSs/stylesPhone.css';
import '../RestonsiveCSSs/StylesTablet.css';
import '../../../ProjectsLib/defaults.css';


export default function ProjectsSection(){
        
        return(
            <article id="MY-EXPERIENCE">
            <h1 id="skills-title" className='type'>Projects</h1>
            <section>
            {array.map((array, index)=>(
            <div key={index} id='my-experience' className='type'>
                
                <h1 className="experience-subtitles type">{array.Name}</h1>
                <header  className='type'>{array.Date}</header>
                <p  className='type'>{array.Description}</p>
                <img  className='type' src={`${array.ImageURL}`} alt=""/>
                <div className="line2 type"></div>
                
            </div>
        ))} 
            </section>
            </article>
            );
            
    }    
