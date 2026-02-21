import { useParams } from "react-router-dom";
import { getCourseById } from "../data";

export default function CourseDetail() {
  const { id } = useParams();
  const course = getCourseById(Number(id));

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
    </div>
  );
}