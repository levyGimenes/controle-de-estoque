import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    console.log("Hello world!");
});

export { router };
