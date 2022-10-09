import { Router } from "express";
import logger from "../../utils/logger";
const router = Router();

router.post("/", (req, res) => {
  const { level, label, error } = req.body;
  logger.info(error || null, {
    level: level || "error",
    label: label || "APP",
  });
  res.status(201).send({ message: "ok" });
});

const loggingRouter = router;
export { loggingRouter };
