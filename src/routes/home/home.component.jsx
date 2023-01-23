import Directory from "../../components/directory/directory.component";

function Home() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "classic",
      imageUrl: "https://i.ibb.co/B3Rm4dS/pexels-terje-sollie-298863.jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/Q9GpCSP/pexels-mikhail-nilov-7821288.jpg",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
