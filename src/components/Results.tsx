/* eslint-disable @typescript-eslint/no-explicit-any */
import PartyEffect from './PartyEffect';

interface ResultsProps {
  gameData: any;
}

const Results: React.FC<ResultsProps> = ({ gameData }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white text-center p-4'>
      <h1 className='text-3xl font-bold'>Results</h1>
      <PartyEffect />
      <div className='mt-6 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-lg'>
        {Object.entries(gameData.responses).map(([player, answers]) => (
          <div key={player} className='mb-4'>
            <h2 className='text-lg font-bold'>{player}s Answers</h2>
            <ul className='text-left'>
              {Object.entries(answers as any).map(([question, answer]) => (
                <li key={question} className='border-b py-2'>
                  <strong>{question}:</strong> {answer as string}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
