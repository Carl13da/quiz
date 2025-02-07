import { useState } from 'react';
import GameModeCard from './GameModeCard';
import { saveGameToFirebase } from '../utils/firebaseConfig';

const Home: React.FC = () => {
  const [gameCode, setGameCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createGame = async (mode: 'onlyPam' | 'both') => {
    setIsLoading(true);
    try {
      const code = await saveGameToFirebase(mode);
      setGameCode(code);
    } catch (error) {
      console.error('Error creating game:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-pink-300 text-center'>
      <h1 className='text-2xl font-bold'>Pam Quiz</h1>
      <input
        type='text'
        placeholder='Enter game code...'
        className='p-2 mt-4 rounded-lg border border-gray-300'
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value)}
      />
      <div className='mt-6 flex flex-col space-y-4 w-full px-6'>
        <GameModeCard
          title='Only About Pam'
          description='Answer questions about her'
          onClick={() => createGame('onlyPam')}
        />
        <GameModeCard
          title='Both'
          description='Answer questions about each other'
          onClick={() => createGame('both')}
        />
      </div>
      {isLoading && <p className='mt-4 text-gray-600'>Creating game...</p>}
    </div>
  );
};

export default Home;
