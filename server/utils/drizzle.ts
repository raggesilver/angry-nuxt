import { drizzle } from "drizzle-orm/d1";
export { and, eq, or, sql } from "drizzle-orm";

import * as schema from "~~/server/db/schema";

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}
