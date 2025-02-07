'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SelectPlayer: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const storedPlayer = localStorage.getItem('selectedPlayer');
    if (storedPlayer) {
      router.push('/'); // Se já escolheu antes, vai direto para a Home
    }
  }, [router]);

  const handleSelect = (player: string) => {
    localStorage.setItem('selectedPlayer', player);
    router.push('/'); // Vai para a tela principal
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white text-center p-6'>
      <h1 className='text-2xl font-bold mb-6'>Quem é você?</h1>
      <button
        className='bg-pink-500 text-white px-6 py-3 rounded-lg mb-4'
        onClick={() => handleSelect('Pam')}
      >
        Eu sou a Pam
      </button>
      <button
        className='bg-blue-500 text-white px-6 py-3 rounded-lg'
        onClick={() => handleSelect('Carlos')}
      >
        Eu sou o Carlos
      </button>
    </div>
  );
};

export default SelectPlayer;
