import React from 'react';

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

export default Course;

const Header = ({name}) => <h3>{name}</h3>;
const Content = ({parts}) => {
    const total = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0);
    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
            <p><strong><i>Total of {total} exercises</i></strong></p>
            <br />
        </div>
    );
};

const Part = ({part}) => <p>{part.id}. {part.name} - {part.exercises}</p>;