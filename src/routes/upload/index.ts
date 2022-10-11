import { Router } from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const multer = require("multer");
const router = Router();

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "uploads/");
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const uploadStorage = multer({ storage: storage });

// Single file
router.post("/single", uploadStorage.single("file"), (req:any, res:any) => {
  console.log(req.file);
  console.log(req);
  return res.send({message: "Single file",  file: req.files});
});

//Multiple files
router.post(
  "/multiple",
  uploadStorage.array("file", 10),
  (req: any, res: any) => {
    console.log(req.body);
    console.log(req.files);
    return res.send({message: "Multiple files", file: req.files} );
  }
);

const uploadRouter = router;
export { uploadRouter };
