import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompleteChallenges.module.css";

function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompleteChallenges;
