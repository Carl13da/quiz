interface GameModeCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const GameModeCard: React.FC<GameModeCardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className='bg-gradient-to-r from-blue-400 to-pink-400 text-white p-6 rounded-xl cursor-pointer hover:scale-105 transition-all'
      onClick={onClick}
    >
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className='text-sm'>{description}</p>
    </div>
  );
};

export default GameModeCard;
