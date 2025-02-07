'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { saveGameToFirebase } from '../utils/firebaseConfig';

const Home: React.FC = () => {
  const router = useRouter();
  const [player, setPlayer] = useState<string | null>(null);
  const [gameCode, setGameCode] = useState('');

  useEffect(() => {
    const storedPlayer = localStorage.getItem('selectedPlayer');
    if (!storedPlayer) {
      router.push('/selectPlayer'); // Se não escolheu, vai para a tela de seleção
    } else {
      setPlayer(storedPlayer);
    }
  }, [router]);

  const handleCreateGame = async (mode: 'onlyPam' | 'both') => {
    if (!player) return;
    const newGameCode = await saveGameToFirebase(mode);
    if (newGameCode) {
      router.push(`/game?code=${newGameCode}&player=${player}`);
    } else {
      console.error('❌ Erro ao criar jogo');
    }
  };

  const handleJoinGame = () => {
    if (gameCode.trim() !== '') {
      router.push(`/game?code=${gameCode}&player=${player}`);
    }
  };

  if (!player) return <p>Carregando...</p>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-pink-300 text-center p-6'>
      <h1 className='text-3xl font-bold mb-6'>Bem-vindo, {player}!</h1>

      {/* Input para pesquisar jogo existente */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Código do jogo'
          className='p-3 border border-gray-300 rounded-lg text-center'
          value={gameCode}
          onChange={(e) => setGameCode(e.target.value)}
        />
        <button
          className='ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all'
          onClick={handleJoinGame}
        >
          Entrar
        </button>
      </div>

      {/* Botões para criar jogo novo */}
      <div className='flex flex-col space-y-6 w-full max-w-md'>
        <button
          className='bg-pink-500 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:bg-pink-600 transition-all'
          onClick={() => handleCreateGame('onlyPam')}
        >
          Apenas sobre a Pam
        </button>
        <button
          className='bg-blue-500 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:bg-blue-600 transition-all'
          onClick={() => handleCreateGame('both')}
        >
          Ambos
        </button>
      </div>
    </div>
  );
};

export default Home;
