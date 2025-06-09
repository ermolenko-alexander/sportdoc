import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    totalMinutes: 0,
    streak: 0
  });

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    if (tg.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
            {user?.first_name?.[0] || '👤'}
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold">
              {user?.first_name} {user?.last_name}
            </h1>
            <p className="text-gray-600">@{user?.username}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-3">Статистика</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{stats.totalWorkouts}</p>
            <p className="text-sm text-gray-600">Тренировок</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{stats.totalMinutes}</p>
            <p className="text-sm text-gray-600">Минут</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{stats.streak}</p>
            <p className="text-sm text-gray-600">Дней подряд</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Настройки</h2>
        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <span>Уведомления</span>
            <span>🔔</span>
          </button>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <span>Темная тема</span>
            <span>🌙</span>
          </button>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <span>Язык</span>
            <span>🌐</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 