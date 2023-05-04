import React from "react";

function NameList() {
    const Person = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill: 'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill: 'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill: 'Vue'
        }
    ]
    const PersonList = Person.map(Person => 
    <li key={Person.id}> 
         I am {Person.name}. I am {Person.age} years old. I know {Person.skill}</li> 
        ) 
    return <div><h1>Lists in React</h1>
        <ul>{PersonList}</ul></div>
}

export default NameList;