import Product from "../Product";

function Category() {
  return (
    <div className="flex justify-around gap-10 w-full h-full">
      <Product
        productLink="/explore"
        imgCover="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2023/02/book-and-sunflowers-illustration.jpg?fit=768%2C1152&ssl=1"
        productTitle="Book Book Book"
      />
      <Product
        productLink="/explore"
        imgCover="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2023/02/book-and-sunflowers-illustration.jpg?fit=768%2C1152&ssl=1"
        productTitle="Book Book Book"
      />
      <Product
        productLink="/explore"
        imgCover="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2023/02/book-and-sunflowers-illustration.jpg?fit=768%2C1152&ssl=1"
        productTitle="Book Book Book"
      />
    </div>
  );
}

export { Category };
