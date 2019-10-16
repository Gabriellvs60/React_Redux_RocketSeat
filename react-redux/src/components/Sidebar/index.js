import React, { Component } from 'react'

import {connect} from 'react-redux';

const Sidebar = ({modules}) => (
        <aside>
        {modules.map(module => (
               <div key={module.id}>
                   <strong>{module.tile}</strong>
                   <ul>
                       {module.lessons.map(lesson => (
                           <li key={lesson.id}>{lesson.title}</li>
                       ))}
                   </ul>
               </div>
           ))}
    </aside>
    );
    //crie uma propriedade(modules) que recebe o estado inteiro do redux
    export default connect(state => ({modules: state}))(Sidebar);

