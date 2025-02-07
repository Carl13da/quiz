/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getGameData } from '../utils/firebaseConfig';

const Results: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams?.get('code');
  const [gameData, setGameData] = useState<any>(null);
  const [showPamResults, setShowPamResults] = useState(false);
  const [showCarlosResults, setShowCarlosResults] = useState(false);

  useEffect(() => {
    if (code) {
      getGameData(code).then((data) => {
        setGameData(data);
      });
    }
  }, [code]);

  if (!gameData) return <p>Carregando resultados...</p>;

  const questions = gameData.questions; // 🔹 Perguntas na ordem original
  console.log('questions: ', questions);
  const correctAnswers = gameData.correctAnswers || {}; // 🔹 Respostas corretas no Firestore

  const countCorrectAnswers = (player: string) => {
    if (!gameData.responses[player]) return { correct: 0, incorrect: 0 };

    let correct = 0;
    let incorrect = 0;

    const allQuestions = Object.values(gameData.questions).flat();

    allQuestions.forEach((q: any) => {
      const questionText = typeof q === 'string' ? q : q.question;
      const userAnswer = gameData.responses[player]?.[questionText];
      const correctAnswer = correctAnswers[questionText];

      if (userAnswer === correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    return { correct, incorrect };
  };

  const pamResults = countCorrectAnswers('Pam');
  const carlosResults = countCorrectAnswers('Carlos');

  const renderResults = (player: string) => {
    if (!gameData.responses[player]) return <p>Nenhuma resposta registrada.</p>;
    const allQuestions = Object.values(gameData.questions).flat();

    return allQuestions.map((q: any, index: number) => {
      const questionText = typeof q === 'string' ? q : q.question;
      const userAnswer = gameData.responses[player]?.[questionText];
      const correctAnswer = correctAnswers[questionText];
      const isCorrect = userAnswer === correctAnswer;

      return (
        <div
          key={index}
          className={`p-3 rounded-md mb-2 flex items-center ${
            isCorrect
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <span className='mr-2 text-xl'>{isCorrect ? '✅' : '❌'}</span>
          <div>
            <p className='font-semibold'>{questionText}</p>
            <p className='text-gray-700'>
              Resposta: {userAnswer || 'Sem resposta'}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white p-6'>
      <h1 className='text-3xl font-bold mb-6'>Resultados do Jogo</h1>

      <div className='w-full max-w-2xl bg-white text-gray-900 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Resumo</h2>
        <p className='text-lg'>
          <strong>Pam:</strong> {pamResults.correct} certas /{' '}
          {pamResults.incorrect} erradas
        </p>
        <p className='text-lg'>
          <strong>Carlos:</strong> {carlosResults.correct} certas /{' '}
          {carlosResults.incorrect} erradas
        </p>
      </div>

      {/* Resultados da Pam */}
      <div className='w-full max-w-2xl bg-white text-gray-900 p-4 rounded-lg shadow-md mt-6'>
        <button
          className='w-full text-left text-xl font-bold p-2 bg-pink-500 text-white rounded-lg'
          onClick={() => setShowPamResults(!showPamResults)}
        >
          {showPamResults
            ? '🔼 Ocultar Respostas da Pam'
            : '🔽 Mostrar Respostas da Pam'}
        </button>
        {showPamResults && <div className='mt-4'>{renderResults('Pam')}</div>}
      </div>

      {/* Resultados do Carlos */}
      <div className='w-full max-w-2xl bg-white text-gray-900 p-4 rounded-lg shadow-md mt-6'>
        <button
          className='w-full text-left text-xl font-bold p-2 bg-blue-500 text-white rounded-lg'
          onClick={() => setShowCarlosResults(!showCarlosResults)}
        >
          {showCarlosResults
            ? '🔼 Ocultar Respostas do Carlos'
            : '🔽 Mostrar Respostas do Carlos'}
        </button>
        {showCarlosResults && (
          <div className='mt-4'>{renderResults('Carlos')}</div>
        )}
      </div>
    </div>
  );
};

export default Results;
