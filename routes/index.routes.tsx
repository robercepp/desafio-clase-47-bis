import { Router } from "../dependencies/dep.tsx";
import * as indexController from "../controllers/index.controllers.tsx";
const router = Router();

router.get("/", indexController.main);

router.get("/style.css", indexController.style);

router.post("/colors", indexController.saveColor);

export default router;
