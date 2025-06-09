import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    if (tg.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать!</h1>
      
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Ваш прогресс</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Тренировок выполнено</p>
            <p className="text-2xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Дней подряд</p>
            <p className="text-2xl font-bold text-green-600">5</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Следующая тренировка</h2>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-medium">Кардио тренировка</p>
          <p className="text-sm text-gray-600">30 минут • Средняя интенсивность</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">
            Начать тренировку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 