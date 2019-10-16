const INITIAL_STATE={
    //armazena os valores do modulo e lesson ativo
    activeLesson : {},
    activeModule : {},
    modules: [
        {
            id: 1, 
            title: "iniciando com React", 
            lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' }
            ]
        },
        {
            id: 2, 
            title: 'Aprendendo Redux', 
            lessons:[
                { id: 3, title: 'Terceira aula' },
                { id: 4, title: 'Quarta aula' },
            ]
        }
    ]
};
    //reducer : armazena estado e pode manipulá-lo 
    //actions são ações indicando que precisamos manipular o estado
export default function course(state = INITIAL_STATE,action){
        if (action.type === 'TOGGLE_LESSON'){
            console.log("foi");
            return {...state, 
                activeLesson : action.lesson, 
                activeModule: action.modules
            };
        }
        return state;
    }
    
