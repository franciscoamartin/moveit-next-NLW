import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface ChallengeProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenges: Challenge;
  levelUp: () => void;
  startNewchallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);
export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenges, setActiveChallenges] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  function levelUp() {
    setLevel(level + 1);
  }

  function startNewchallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];
    setActiveChallenges(challenge);
  }

  function resetChallenge() {
    setActiveChallenges(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenges,
        experienceToNextLevel,
        levelUp,
        startNewchallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
