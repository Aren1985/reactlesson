import "./Prod.css";

const Products = ({ add }) => {
  const products = [
    {
      id: 1,
      image: "/image/iphon2.jpg",
      name: "oldiphon",
      price: "700",
      selected: 1,
    },
    {
      id: 2,
      image: "/image/iphon3.jpg",
      name: "newiphon",
      price: "1400",
      selected: 1,
    },
    {
      id: 3,
      image: "/image/sport.jpg",
      name: "oldsupercar",
      price: "65000",
      selected: 1,
    },
    {
      id: 4,
      image: "/image/maclaren.jpg",
      name: "newsupercar",
      price: "83000",
      selected: 1,
    },
  ];

  return (
    <div className="mlo">
      {products.map((pro) => {
        return (
          <div className="prowrap" key={pro.id}>
            <div className="content">
              <img src={pro.image} alt="name" />
              <h4>{pro.name}</h4>
              <p>{pro.price}$</p>

              <button onClick={() => add(pro)}>ADD TO Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
