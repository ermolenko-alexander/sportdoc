import { useState } from 'react';

const AICoach = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    {
      type: 'bot',
      text: 'Привет! Я ваш персональный ИИ-тренер. Как я могу помочь вам сегодня?'
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Добавляем сообщение пользователя
    setChat(prev => [...prev, { type: 'user', text: message }]);

    // Имитация ответа бота
    setTimeout(() => {
      setChat(prev => [...prev, {
        type: 'bot',
        text: 'Я проанализировал ваш запрос и могу предложить следующие упражнения...'
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Задайте вопрос тренеру..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICoach; 