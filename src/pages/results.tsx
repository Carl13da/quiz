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

  const countCorrectAnswers = (player: string) => {
    if (!gameData.responses[player]) return { correct: 0, incorrect: 0 };

    let correct = 0;
    let incorrect = 0;

    Object.keys(gameData.responses[player]).forEach((question) => {
      const userAnswer = gameData.responses[player][question];
      const correctAnswer = gameData.correctAnswers?.[question];

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
        {showPamResults && (
          <div className='mt-4'>
            {Object.keys(gameData.responses.Pam || {}).map(
              (question, index) => (
                <div key={index} className='mb-2'>
                  <p className='font-semibold'>{question}</p>
                  <p className='text-blue-700'>
                    Resposta: {gameData.responses.Pam[question]}
                  </p>
                </div>
              )
            )}
          </div>
        )}
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
          <div className='mt-4'>
            {Object.keys(gameData.responses.Carlos || {}).map(
              (question, index) => (
                <div key={index} className='mb-2'>
                  <p className='font-semibold'>{question}</p>
                  <p className='text-blue-700'>
                    Resposta: {gameData.responses.Carlos[question]}
                  </p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
