import React from 'react';
import Course from '../Course/Course';

  const CoursesList = ( props ) => (

      <div>
          <form>

            <input type="text" placeholder="Name" name="name" required/>
            <input type="text" placeholder="teacher" name="teacher" required/>
            <input type="hidden" placeholder="ran" name="id" value= { Math.floor(Math.random() *100)}/>
            <input type="submit" value="Guardar" />
            </form>
            <ul>
                {
                    props.courses.map(course =>(
                    <Course 
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        teacher={course.teacher}
                        />
                    ))
                }
            </ul>
        </div>
            )

    export default CoursesList;  