import React, { Component } from 'react'

export default class Sidebar extends Component {
    state = {
        modules: [
            {
                id: 1, title: "iniciando com React", lessons: [
                    { id: 1, title: 'Primeira aula' },
                    { id: 2, title: 'Segunda aula' },
                ],
                id: 2, title: 'Aprendendo Redux', lessons:[
                    { id: 3, title: 'Terceira aula' },
                    { id: 4, title: 'Quarta aula' },
                ]
            }
        ]
    }
    render() {
        const {module} = this.state;
        return (
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
        )
    }
}
