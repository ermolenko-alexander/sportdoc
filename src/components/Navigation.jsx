import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: '🏠', label: 'Главная' },
    { path: '/courses', icon: '📚', label: 'Курсы' },
    { path: '/progress', icon: '📊', label: 'Прогресс' },
    { path: '/ai-coach', icon: '🤖', label: 'AI Тренер' },
    { path: '/profile', icon: '👤', label: 'Профиль' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full h-full ${
              location.pathname === item.path
                ? 'text-blue-500'
                : 'text-gray-500'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 