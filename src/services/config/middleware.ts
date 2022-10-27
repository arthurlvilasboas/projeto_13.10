import { Express, json } from "express";
import cors from "cors";

export default function middleware(app: Express) {
    app.use(json());
    app.use(cors());
}