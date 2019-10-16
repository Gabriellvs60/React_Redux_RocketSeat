import React from 'react'

import {connect} from 'react-redux';

//pega todos os exports e coloca nesse var
import * as CourseActions from '../../store/actions/course'
//dispatch serve para disparar actions pro redux
const Sidebar = ({modules, toggleLesson}) => (
        <aside>
        {modules.map(module => (
               <div key={module.id}>
                   <strong>{module.tile}</strong>
                   <ul>
                       {module.lessons.map(lesson => (
                           <li key={lesson.id}>{lesson.title}
                           <button onClick={() => 
                           toggleLesson(module, lesson)
                        }>
                           Selecionar</button>
                           </li>
                       ))}
                   </ul>
               </div>
           ))}
    </aside>
    );

    const mapStateToProps = state => ({
        modules: state.course.modules
    });
    //retorna um objeto
    const mapDispatchToProps = dispatch => ({
    toggleLesson:(module, lesson)=> dispatch(CourseActions.toggleLesson(module,lesson))
    })
   
    //crie uma propriedade(modules) que recebe o estado modules do redux
    export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);

