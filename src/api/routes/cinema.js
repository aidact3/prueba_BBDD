
const { getCinemas, postCinema, updateCinema, deleteCinema } = require("../controllers/cinema");

const cinemaRouter = require("express").Router();

cinemaRouter.get("/:id", getCinema);
cinemaRouter.get("/", getCinemas);
cinemaRouter.post("/", postCinema);
cinemaRouter.put("/:id", updateCinema);
cinemaRouter.delete("/:id", deleteCinema);

module.exports = cinemaRouter;