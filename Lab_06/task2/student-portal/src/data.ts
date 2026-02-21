export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "John Smith",
    description: "Learn React basics."
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    instructor: "Anna Lee",
    description: "Deep dive into TypeScript."
  },
  {
    id: 3,
    title: "Advanced Routing",
    instructor: "Michael Brown",
    description: "React Router concepts."
  },
  {
    id: 4,
    title: "Web Architecture",
    instructor: "David Wilson",
    description: "Modern web systems design."
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}