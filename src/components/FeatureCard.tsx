interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

const FeatureCard = ({ icon, title, description, image, onClick }: FeatureCardProps) => {
  return (
    <div className={`card-coffee group ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:animate-bounce">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-primary mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;