import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="bg-category-item-gradient w-full h-[150px] rounded-tl-lg rounded-tr-lg flex items-center justify-center">
          <Image 
            src={category.imageUrl}
            alt={category.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-auto max-w-[80%] max-h-[70%]"
            style={{
              objectFit: "contain"
            }}
          />
        </div>

        <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
          <p className="text-sm font-semibold text-center">{category.name}</p>
        </div>
      </div>
    </Link>
   );
}
 
export default CategoryItem;