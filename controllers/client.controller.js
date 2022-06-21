const { v4: uuidv4 } = require("uuid");
const { response, request } = require("express");

let database = [
   {
      id: 1,
      first_name: "Guy",
      last_name: "Jirieck",
      email: "gjirieck0@over-blog.com",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80",
   },
   {
      id: 2,
      first_name: "Michel",
      last_name: "Yakubov",
      email: "myakubov1@facebook.com",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
   },
   {
      id: 3,
      first_name: "Rafaelia",
      last_name: "Limpkin",
      email: "rlimpkin2@elpais.com",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
   },
   {
      id: 4,
      first_name: "Krishnah",
      last_name: "Lannin",
      email: "klannin3@cbsnews.com",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   },
   {
      id: 5,
      first_name: "Maurise",
      last_name: "Logg",
      email: "mlogg4@ft.com",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   },
   {
      id: 6,
      first_name: "Bobbee",
      last_name: "Jereatt",
      email: "bjereatt5@nsw.gov.au",
      gender: "Female",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
   },
   {
      id: 7,
      first_name: "Rossy",
      last_name: "Dicky",
      email: "rdicky6@blogs.com",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
   },
   {
      id: 8,
      first_name: "Adrian",
      last_name: "Birds",
      email: "abirds7@sakura.ne.jp",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
   },
   {
      id: 9,
      first_name: "Phillip",
      last_name: "Stovine",
      email: "pstovine8@amazonaws.com",
      gender: "Male",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
   },
   {
      first_name: "Dynah",
      last_name: "Fitzackerley",
      email: "dfitzackerley9@seesaa.net",
      id: 10,
      gender: "Female",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
   },
];

const getClient = (req = request, res = response) => {
   const data = database.filter((item) => item.id != 0);
   res.json(data);
};

const getClientById = (req = request, res = response) => {
   const { id } = req.params;
   const data = database.find((item) => item.id == id);
   return res.json(data);
};

const postClient = (req = request, res = response) => {
   const { first_name, last_name, email, gender, image } = req.body;
   let data = { first_name, last_name, email, gender, image, id: uuidv4() };
   database.push(data);
   const client_add = database[database.length - 1];
   res.json({
      client_add,
   });
};

const deleteClient = (req = request, res = response) => {
   const { id } = req.params;
   database.forEach((item) => {
      if (item.id == id) {
         item.id = 0;
      }
   });
   const client = database.find((item) => item.id == id);
   const data = database.filter((item) => item.id != id);
   dabatase = data;
   res.json({
      deleted_client: client || "Client not found",
   });
};

module.exports = {
   getClient,
   getClientById,
   postClient,
   deleteClient,
};
