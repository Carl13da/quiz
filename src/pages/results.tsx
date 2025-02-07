/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // ✅ Correct import
import { getGameData } from '../utils/firebaseConfig';
import Results from '../components/Results';

const ResultsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams?.get('code');
  const [gameData, setGameData] = useState<any>(null);

  useEffect(() => {
    if (code) {
      getGameData(code).then(setGameData);
    }
  }, [code]);

  if (!gameData) return <p>Loading results...</p>;

  return <Results gameData={gameData} />;
};

export default ResultsPage;
