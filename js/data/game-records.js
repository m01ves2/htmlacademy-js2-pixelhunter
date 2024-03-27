const records = [
  {
    date: 1234567567898, // Дата создания статистики в ms
    answers: ['correct', 'wrong', 'fast', 'wrong', 'correct', 'wrong', 'unknown', 'unknown', 'unknown', 'unknown'], // Статистика ответа пользователя
    lives: 0 // Кол-во оставшихся жизней
  },
  {
    date: 1234567567898, // Дата создания статистики в ms
    answers: ['correct', 'wrong', 'fast', 'slow', 'correct', 'wrong', 'fast', 'slow', 'correct', 'correct'], // Статистика ответа пользователя
    lives: 1 // Кол-во оставшихся жизней
  }
];

export default records;
