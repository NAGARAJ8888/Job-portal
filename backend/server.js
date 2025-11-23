import app from "./app.js";
import cors from "cors";
import cloudinary from "cloudinary";

app.use(cors({
  origin: ["https://daily-job-portal.netlify.app"],
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type, Authorization"
}));

app.options("*", cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
