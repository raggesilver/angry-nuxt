import { consola } from "consola";
import { migrate } from "drizzle-orm/d1/migrator";

export default defineNitroPlugin(async () => {
  if (!import.meta.dev) return;

  onHubReady(async () => {
    await migrate(useDrizzle(), {
      migrationsFolder: "server/db/drizzle",
    })
      .then(() => {
        consola.success("Database migrations done");
      })
      .catch((err) => {
        consola.error("Database migrations failed", err);
      });
  });
});
