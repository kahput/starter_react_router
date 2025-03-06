import express, { Request, Response } from "express";
import VanModel from "../schema/vans";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const vans = await VanModel.find();
        if (vans.length === 0) {
            res.status(404).send("No vans listed!");
        }

        res.status(200).send(vans);

    } catch (err) {
        res.status(500).send(err);
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const entry = await VanModel.find({ id: id });
        if (entry.length === 0) {
            res.status(404).send("No record found for id");
        }

        res.status(200).send(entry);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const newEntry = new VanModel(req.body);
        const savedRecord = await newEntry.save();

        res.status(200).send(savedRecord);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const entry = await VanModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!entry)
            res.status(404).send();

        res.status(200).send(entry);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const entry = await VanModel.findByIdAndDelete(id);

        if (!entry)
            res.status(404).send();

        res.status(200).send(entry);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;
