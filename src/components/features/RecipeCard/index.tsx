import Button from '@/components/base/Button';
import Image from 'next/image';
import Link from 'next/link';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
}

const RecipeCard = ({ id, title, image }: RecipeCardProps) => {
  return (
    <div className="p-4 border flex flex-col justify-between rounded-md shadow hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        width={312}
        height={231}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Link href={`/recipes/${id}`}>
        <Button text="View Recipe" />
      </Link>
    </div>
  );
};

export default RecipeCard;
