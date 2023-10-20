import ProductItem from "@/components/ui/product-item";
import { computeProductsTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
  return ( 
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map(product => 
          <div key={product.id} className="w-[170px] max-w-[170px]">
            <ProductItem product={computeProductsTotalPrice(product)} />
          </div>
        )}
    </div> 
  );
}
 
export default ProductList;