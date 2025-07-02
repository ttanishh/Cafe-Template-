interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  flavorNotes: string[];
  mood: string;
}

const MenuCard = ({ name, description, price, image, flavorNotes, mood }: MenuCardProps) => {
  return (
    <div className="card-coffee group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">
          {price}
        </div>
        <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
          {mood}
        </div>
      </div>
      
      <div>
        <h3 className="font-serif text-xl font-semibold text-primary mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {flavorNotes.map((note, index) => (
            <span 
              key={index}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
            >
              {note}
            </span>
          ))}
        </div>
        
        <button className="w-full btn-coffee text-sm">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuCard;