import { motion } from 'framer-motion';

interface QuestionProps {
  question: { question: string; category: string; options?: string[] };
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  userAnswer,
  setUserAnswer,
}) => {
  const handleButtonClick = (answer: string) => {
    setUserAnswer(answer);
  };

  return (
    <div className='mt-8'>
      {/* 🔹 Exibir pergunta */}
      <h3 className='text-xl font-bold mb-6'>{question.question}</h3>

      {/* 🔹 Perguntas de Verdade ou Mentira */}
      {question.category === 'truthOrLie' && (
        <div className='flex justify-center space-x-4'>
          <button
            className={`px-6 py-3 rounded-lg text-white ${
              userAnswer === 'Verdadeiro'
                ? 'bg-green-600'
                : 'bg-gray-500 hover:bg-green-500'
            }`}
            onClick={() => handleButtonClick('Verdadeiro')}
          >
            Verdadeiro
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white ${
              userAnswer === 'Falso'
                ? 'bg-red-600'
                : 'bg-gray-500 hover:bg-red-500'
            }`}
            onClick={() => handleButtonClick('Falso')}
          >
            Falso
          </button>
        </div>
      )}

      {/* 🔹 Perguntas de Já ou Jamais */}
      {question.category === 'haveOrNever' && (
        <div className='flex justify-center space-x-4'>
          <button
            className={`px-6 py-3 rounded-lg text-white ${
              userAnswer === 'Já'
                ? 'bg-blue-600'
                : 'bg-gray-500 hover:bg-blue-500'
            }`}
            onClick={() => handleButtonClick('Já')}
          >
            Já
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white ${
              userAnswer === 'Jamais'
                ? 'bg-purple-600'
                : 'bg-gray-500 hover:bg-purple-500'
            }`}
            onClick={() => handleButtonClick('Jamais')}
          >
            Jamais
          </button>
        </div>
      )}

      {/* 🔹 Perguntas abertas */}
      {(question.category === 'openEnded' ||
        question.category === 'allFunnyQuestions') && (
        <input
          type='text'
          className='p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Digite sua resposta...'
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      )}

      {/* 🔹 Múltipla escolha */}
      {question.category === 'multipleChoice' && (
        <div className='grid grid-cols-2 gap-4'>
          {question.options?.map((option, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-3 rounded-lg shadow-md transition-all ${
                userAnswer === option
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              onClick={() => setUserAnswer(option)}
            >
              {option}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
