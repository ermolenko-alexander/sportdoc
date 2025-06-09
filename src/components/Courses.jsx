import { useState } from 'react';

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: 'Начальный уровень',
      description: 'Базовые упражнения для новичков',
      duration: '4 недели',
      level: 'Начальный',
      image: '🏋️‍♂️'
    },
    {
      id: 2,
      title: 'Средний уровень',
      description: 'Интенсивные тренировки для продвинутых',
      duration: '6 недель',
      level: 'Средний',
      image: '💪'
    },
    {
      id: 3,
      title: 'Продвинутый уровень',
      description: 'Профессиональные тренировки',
      duration: '8 недель',
      level: 'Продвинутый',
      image: '🔥'
    }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Доступные курсы</h1>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-start">
              <div className="text-4xl mr-4">{course.image}</div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⏱ {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
                <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg">
                  Начать курс
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 