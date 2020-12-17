import React from 'react';
import Card from './card'

const ExerciseList=({exercises})=>(
        <div>
            {exercises.map((el)=>(
        <Card key={el.id} title={el.title} description={el.description} img={el.img} leftColor={el.leftColor} rightColor={el.rightColor} />
  ))}
        </div>
)
export default ExerciseList