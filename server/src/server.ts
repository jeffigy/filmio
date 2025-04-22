import app from "./app";
import { PORT } from "@/config/env.config";
import { connectDb } from "./db";

void (async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`App is running @ port ${PORT}`);
  });
})();
