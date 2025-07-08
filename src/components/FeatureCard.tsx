interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

const FeatureCard = ({ icon, title, description, image, onClick }: FeatureCardProps) => {
  return (
    <div className={`card-coffee group hover:scale-105 transform transition-all duration-500 ${onClick ? 'cursor-pointer hover:shadow-2xl' : ''}`} onClick={onClick}>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
        </div>
      )}
      
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:animate-bounce-slow group-hover:scale-125 transform transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;