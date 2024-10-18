import { drizzle } from "drizzle-orm/d1";

import * as schema from "~~/server/db/schema";
export { and, eq, or, sql } from "drizzle-orm";

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}
