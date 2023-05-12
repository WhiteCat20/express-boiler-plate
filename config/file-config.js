import multer from "multer";

const storage = multer.diskStorage({
  //define the destination of the uploaded file
  destination: (req, file, cb) => {
    //file checking
    let uploadPath = "uploads/";
    switch (file.fieldname) {
      case "photo":
        uploadPath = "uploads/photo/";
        break;
      case "bukti_pembayaran":
        uploadPath = "uploads/bukti_pembayaran/";
        break;
      default:
        break;
    }

    // create the upload folder if it doesn't exist
    fs.mkdirSync(uploadPath, { recursive: true });

    //move the file(s)
    cb(null, uploadPath);
  },
  //define the name of the file
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "photo", maxCount: 1 },
  { name: "bukti_pembayaran", maxCount: 1 },
]);

export default upload;
