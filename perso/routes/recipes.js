import express from "express";
import bodyParser from "body-parser";
import RecipesModel from "../models/Recipes";

const recipesRoutes = express.Router();

var jsonParser = bodyParser.json();

recipesRoutes.get("/recipes", (req, res) => {
  RecipesModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

recipesRoutes.get("/recipes/:idRecipe", (req, res) => {
  RecipesModel.findById(req.params.idRecipe)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

recipesRoutes.post("/recipes", jsonParser, (req, res) => {
  const Recipe = new RecipesModel({
    name: req.body.name,
    category: req.body.category,
    id_user: req.body.id_user,
    servings: req.body.servings,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    cooking: req.body.cooking,
    prepTime: req.body.prepTime,
    image: req.body.image,
  });
  Recipe.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

recipesRoutes.patch("/recipes/:idRecipes", jsonParser, (req, res) => {
  RecipesModel.findByIdAndUpdate(req.params.idRecipes, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

recipesRoutes.delete("/recipes/:idRecipes", (req, res) => {
  RecipesModel.findByIdAndDelete(req.params.idRecipes)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

export default recipesRoutes;
