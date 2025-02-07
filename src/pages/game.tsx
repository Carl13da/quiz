/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Question from '../components/Question';
import { getGameData, saveUserResponse } from '../utils/firebaseConfig';
import { motion } from 'framer-motion';

const Game: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams?.get('code');
  const player = searchParams?.get('player');
  const router = useRouter();
  const [gameData, setGameData] = useState<any>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>('');

  useEffect(() => {
    if (code && player) {
      getGameData(code)
        .then((data) => {
          if (data && data.questions) {
            // 🔹 Garante que TODAS as categorias existem antes de mapear
            const {
              truthOrLie = [],
              haveOrNever = [],
              openEnded = [],
              multipleChoice = [],
              funnyQuestions = [],
            } = data.questions;

            console.log('🔍 Perguntas carregadas do Firestore:', {
              truthOrLie,
              haveOrNever,
              openEnded,
              multipleChoice,
              funnyQuestions,
            });

            setGameData(data);

            const categorizedQuestions = [
              ...truthOrLie.map((q: string) => ({
                question: q,
                category: 'truthOrLie',
              })),
              ...haveOrNever.map((q: string) => ({
                question: q,
                category: 'haveOrNever',
              })),
              ...openEnded.map((q: string) => ({
                question: q,
                category: 'openEnded',
              })),
              ...multipleChoice.map((q: any) => ({
                ...q,
                category: 'multipleChoice',
              })),
              ...funnyQuestions.map((q: any) => ({
                ...q,
                category: 'funnyQuestions',
              })),
            ];

            setShuffledQuestions(categorizedQuestions);

            // 🔄 Continua de onde parou
            if (data.responses?.[player]) {
              setAnswers(data.responses[player]);
              const answeredQuestions = Object.keys(data.responses[player]);
              const lastAnsweredIndex = categorizedQuestions.findIndex(
                (q) => !answeredQuestions.includes(q.question)
              );
              setCurrentQuestionIndex(
                lastAnsweredIndex !== -1
                  ? lastAnsweredIndex
                  : categorizedQuestions.length - 1
              );
            }
          } else {
            console.error('❌ Erro: Nenhuma pergunta encontrada no jogo!');
          }
        })
        .catch((error) => {
          console.error('❌ Erro ao carregar o jogo do Firestore:', error);
        });
    }
  }, [code, player]);

  useEffect(() => {
    setUserAnswer(
      answers[shuffledQuestions[currentQuestionIndex]?.question] || ''
    );
  }, [currentQuestionIndex, shuffledQuestions]);

  if (!gameData || shuffledQuestions.length === 0) return <p>Carregando...</p>;

  const totalQuestions = shuffledQuestions.length;
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleConfirm = () => {
    const newAnswers = { ...answers, [currentQuestion.question]: userAnswer };
    setAnswers(newAnswers);
    saveUserResponse(code!, player!, newAnswers);
    setUserAnswer('');

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push(`/results?code=${code}&player=${player}`);
    }
  };

  return (
    <div className='flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white p-6'>
      <motion.h1 className='text-2xl font-bold mt-8 mb-4'>
        {currentQuestion.category}
      </motion.h1>

      <motion.div
        key={currentQuestionIndex}
        className='bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg text-center'
      >
        <h2 className='text-lg font-semibold'>
          {currentQuestionIndex + 1} / {totalQuestions}
        </h2>
        <Question
          question={currentQuestion}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
        />
        <div className='mt-6 flex space-x-4 justify-center'>
          <button
            className='px-4 py-2 rounded-lg bg-blue-500 text-white'
            onClick={handleConfirm}
            disabled={!userAnswer}
          >
            Confirmar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Game;
