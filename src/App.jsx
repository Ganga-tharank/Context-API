import React,{useState} from "react";
import Card from "./components/Card";

export const UserContext = React.createContext();

const App = () => {
   const [product, setProduct] = useState([
     {
       id: 1,
       title: "iPhone 9",
       description: "An apple mobile which is nothing like apple",
       price: 549,
       discountPercentage: 12.96,
       rating: "5.0",
       stock: 94,
       brand: "Apple",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
       image: "https://www.igyaan.in/wp-content/uploads/2018/08/Iphone-9-leak-.jpg",
     },
     {
       id: 2,
       title: "iPhone 15pro",
       description:
         "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ",
       price: 899,
       discountPercentage: 17.94,
       rating: "5.0",
       stock: 34,
       brand: "Apple",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail. jpg",
       image: "https://techwires.co/wp-content/uploads/2023/09/Screen-Shot-2023-09-23-at-12.49.15-PM.png",
     },
     {
       id: 3,
       title: "Samsung S23",
       description:
         "Samsung's new variant which goes beyond Galaxy to the Universe",
       price: 1249,
       discountPercentage: 15.46,
       rating: "4.0",
       stock: 36,
       brand: "Samsung",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
       image: "https://miport.ru/assets/img/products/samsung-galaxy-s23-ultra-5g/d1.jpg",
     },
     {
       id: 4,
       title: "Vivo29",
       description: "OPPO F19 is officially announced on April 2021.",
       price: 280,
       discountPercentage: 17.91,
       rating: "4.0",
       stock: 123,
       brand: "OPPO",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
       image: "https://specifications-pro.com/wp-content/uploads/2023/05/Vivo-V29-Pro-600x600.jpg",
     },
     {
       id: 5,
       title: "Huawei P30",
       description:
         "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK",
       price: 499,
       discountPercentage: 10.58,
       rating: "4.0",
       stock: 32,
       brand: "Huawei",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail. jpg",
       image: "https://phonesdata.com/files/models/Huawei--Y6p-378.jpg",
     },
   ]);
  return (
    <>
      <div className="container my-5">
        <UserContext.Provider value={{ product, setProduct }}>
          
         <Card />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;