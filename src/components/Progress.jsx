import { useState } from 'react';

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [progress] = useState({
    week: [
      { day: 'Пн', workouts: 2, minutes: 45 },
      { day: 'Вт', workouts: 1, minutes: 30 },
      { day: 'Ср', workouts: 0, minutes: 0 },
      { day: 'Чт', workouts: 2, minutes: 60 },
      { day: 'Пт', workouts: 1, minutes: 30 },
      { day: 'Сб', workouts: 0, minutes: 0 },
      { day: 'Вс', workouts: 1, minutes: 45 },
    ],
    month: [
      { week: '1', workouts: 8, minutes: 240 },
      { week: '2', workouts: 7, minutes: 210 },
      { week: '3', workouts: 9, minutes: 270 },
      { week: '4', workouts: 6, minutes: 180 },
    ]
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ваш прогресс</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex space-x-2 mb-4">
          <button
            className={`flex-1 py-2 rounded-lg ${
              selectedPeriod === 'week'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setSelectedPeriod('week')}
          >
            Неделя
          </button>
          <button
            className={`flex-1 py-2 rounded-lg ${
              selectedPeriod === 'month'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setSelectedPeriod('month')}
          >
            Месяц
          </button>
        </div>

        {selectedPeriod === 'week' ? (
          <div className="space-y-4">
            {progress.week.map((day, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 text-center">{day.day}</div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${(day.minutes / 60) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-24 text-right text-sm text-gray-600">
                  {day.minutes} мин
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {progress.month.map((week, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 text-center">Неделя {week.week}</div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${(week.minutes / 300) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-24 text-right text-sm text-gray-600">
                  {week.minutes} мин
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Достижения</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-50 p-3 rounded-lg text-center">
            <span className="text-2xl">🏆</span>
            <p className="font-medium">Первая тренировка</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <span className="text-2xl">🔥</span>
            <p className="font-medium">5 дней подряд</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress; 