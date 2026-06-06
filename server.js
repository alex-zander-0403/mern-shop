const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

//
const app = express();
const port = process.env.PORT || 8001;
const mongoURI = process.env.MONGO_DB_URI;

// создаем екземпляр клиента для работы mongoBD
const myMongoClient = new MongoClient(mongoURI);

// endpoints
app.get("/", (req, res) => {
  res.send("hello express!");
});

// подключение к бд
async function runDB() {
  try {
    // подключение
    await myMongoClient.connect();

    // пингуем
    // await myMongoClient.db("users").command({ ping: 1 });
    console.log("✅ База данных готова к работе!");

    app.listen(port, () => {
      console.log(`✅ Порт сервера: ${port}`);
    });
  } catch (error) {
    console.log("❌ Не могу подключиться к базе данных!");
    console.log("Ошибка:", error.message); // причина
    await myMongoClient.close();
  }
}

runDB();
