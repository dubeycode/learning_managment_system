export interface Subject {
  id: string;
  course: string;
  code: string;
  name: string;
  department: string;
  description: string;
}

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 'subj-001',
    course: 'Bachelor of Science',
    code: 'CS101',
    name: 'Introduction to Programming',
    department: 'Computer Science',
    description:
      'Fundamentals of programming using Python: variables, control flow, functions, and basic data structures.',
  },
  {
    id: 'subj-002',
    course: 'Bachelor of Science',
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Mathematics',
    description:
      'Continuation of single-variable calculus covering sequences, series, integration techniques, and applications.',
  },
  {
    id: 'subj-003',
    course: 'Bachelor of Engineering',
    code: 'PHY150',
    name: 'Classical Mechanics',
    department: 'Physics',
    description:
      'Newtonian mechanics: kinematics, energy, momentum, and rotational dynamics with problem-solving focus.',
  },
];

export default MOCK_SUBJECTS;
