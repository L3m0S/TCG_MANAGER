import  { Router } from "express";

const UserRouter = Router();

UserRouter.get(
    "/login", (req, res) => {
        res.send({teste: 'teste ok'})
    }
)

export { UserRouter } 