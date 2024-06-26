import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Menu Komponente mit einem prop cat für die Kategorien
const Menu = ({cat}) => {
  //Zustand wird initialisiert mit einem leeren Array gesetzt
  const [posts, setPosts] = useState([]);

  //Mit useEffect werden die Dateien in bezug Beiträge auf die Kategorie abgerufen
  useEffect(() => {
    //Eine Funktion um die Daten abzurufen
    const fetchData = async () => {
      try {
        //Ein API-Aufruf mit axios, um Beiträge in Bezug auf die Kategorie zu erhalten
        const res = await axios.get(`/posts/?cat=${cat}`);
        //Die empfangenen Daten werden im Zustand gespeichert
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    //Aufruf der Funktion, um die Daten abzurufen wenn sich die cat ändert oder die Komponente montiert wird
    fetchData();
    //Die useEffekt Abhängigkeit wird auf cat gesetzt, damit die Funktion aufgerufen wird wenn sich die cat ändert
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className="link" to={`/post/${post.id}`}>
          <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
/* import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = ({cat}) => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/recipes/?cat${cat}`);
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

    // const recipes = [
    //     {
    //       id: 1,
    //       title: "Lorem ipsum blabla blabla blabla blabla blabla",
    //       desc: "Lorem ipsum blabla blabla blabla blabla blabla",
    //       img: "https://www.siftandsimmer.com/wp-content/uploads/2022/04/sakura-strawberry-latte4.jpg",
    //     },
    //     {
    //       id: 2,
    //       title: "Lorem ipsum blabla blabla blabla blabla blabla",
    //       desc: "Lorem ipsum blabla blabla blabla blabla blabla",
    //       img: "https://images.lecker.de/pancake-teig-b2.jpg,id=a53e72bd,b=lecker,w=980,ca=4.80,8.00,94.80,98.13,rm=sk.webp",
    //     },
    //   ];

  return (
    <div className='menu'>
        {/* Rezepte nach Kategorie vorschlagen 
        <h1>Other recipes you may like</h1>
        {recipes.map((recipe) =>(
            <div className='recipe' key={recipe.id}>
                <img src={`../upload/${recipe?.img}`} alt=''/>
                <h2>{recipe.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  );
};

export default Menu; */