const { Router } = require("express");
const { check } = require("express-validator");
const {
   getClientById,
   getClient,
   postClient,
   deleteClient,
} = require("../controllers/client.controller");
const { validar_campos } = require("../middlewares/validator_fields");

const router = Router();

router.get("/", getClient);

router.get("/:id", getClientById);

router.post(
   "/",
   [
      check("first_name", 'first name" is required').not().isEmpty(),
      check("last_name", 'last name" is required').not().isEmpty(),
      check("email", "email is required").not().isEmpty(),
      check("email", "Must be a valid email").isEmail(),
      check("gender", "Is not a valid gender, options: [Male, Female]").isIn([
         "Female",
         "Male",
      ]),
      check("image", '"image" is required').not().isEmpty(),
      validar_campos,
   ],
   postClient
);

router.delete(
   "/:id",
   [
      check("id", "The id of the user to delete is mandatory").not().isEmpty(),
      validar_campos,
   ],
   deleteClient
);

module.exports = router;
