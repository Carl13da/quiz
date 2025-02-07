/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { generateRandomQuestions } from './generateQuestions';
import { generateGameCode } from './helpers';

const firebaseConfig = {
  apiKey: 'AIzaSyD9gmAzG9L9zbOmmqxf875lX7Q9eeGgKvw',
  authDomain: 'quiz-68697.firebaseapp.com',
  projectId: 'quiz-68697',
  storageBucket: 'quiz-68697.firebasestorage.app',
  messagingSenderId: '537054954777',
  appId: '1:537054954777:web:19e6f0ed2dae119261f188',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/**
 * Saves a new game to Firestore
 * @param mode - "onlyPam" (questions about her) or "both" (both answer)
 * @returns gameCode - Unique game code
 */
export const saveGameToFirebase = async (
  mode: 'onlyPam' | 'both'
): Promise<string> => {
  const gameCode = generateGameCode();
  const randomQuestions = generateRandomQuestions(); // 🔹 Gera perguntas organizadas

  if (
    !randomQuestions.truthOrLie ||
    !randomQuestions.haveOrNever ||
    !randomQuestions.openEnded ||
    !randomQuestions.multipleChoice ||
    !randomQuestions.funnyQuestions ||
    randomQuestions.truthOrLie.length !== 10 ||
    randomQuestions.haveOrNever.length !== 10 ||
    randomQuestions.openEnded.length !== 7 ||
    randomQuestions.multipleChoice.length !== 8 ||
    randomQuestions.funnyQuestions.length !== 5
  ) {
    console.error(
      '❌ Erro: O jogo não gerou 40 perguntas corretamente!',
      randomQuestions
    );
    return '';
  }

  try {
    await setDoc(doc(db, 'games', gameCode), {
      code: gameCode,
      mode,
      questions: {
        truthOrLie: randomQuestions.truthOrLie,
        haveOrNever: randomQuestions.haveOrNever,
        openEnded: randomQuestions.openEnded,
        multipleChoice: randomQuestions.multipleChoice,
        funnyQuestions: randomQuestions.funnyQuestions,
      },
      responses: {},
    });

    console.log('✅ Jogo salvo no Firestore:', gameCode, randomQuestions);
    return gameCode;
  } catch (error) {
    console.error('❌ Erro ao criar o jogo:', error);
    throw error;
  }
};

/**
 * Saves a user's responses to Firestore
 * @param gameCode - Unique game identifier
 * @param userId - ID of the player
 * @param responses - Object containing answers
 */
export const saveUserResponse = async (
  gameCode: string,
  userId: string,
  responses: any
): Promise<void> => {
  try {
    const gameRef = doc(db, 'games', gameCode);
    await updateDoc(gameRef, {
      [`responses.${userId}`]: responses,
    });
  } catch (error) {
    console.error('Error saving responses:', error);
    throw error;
  }
};

/**
 * Retrieves game data from Firestore
 * @param gameCode - Unique game identifier
 * @returns Game data object or null if not found
 */
export const getGameData = async (gameCode: string): Promise<any> => {
  try {
    const gameRef = doc(db, 'games', gameCode);
    const gameSnap = await getDoc(gameRef);
    console.log('gameSnap: ', gameSnap.data());

    return gameSnap.exists() ? gameSnap.data() : null;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error;
  }
};

export { db, collection, addDoc, doc, getDoc, updateDoc };
