import { motion } from 'framer-motion';

const PartyEffect: React.FC = () => (
  <motion.div
    animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.1, 1, 1.1, 1] }}
    transition={{ duration: 0.5 }}
  >
    🎉🎊✨ Congratulations! Here are the results! 🎉🎊✨
  </motion.div>
);

export default PartyEffect;
