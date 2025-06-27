import { LoggerInterface } from "@/types/logger.type";

/**
 * read log from API
 * @param label
 * @param logs
 * @returns
 */
export const Logger = (label: string, logs:LoggerInterface) => {
  if (process.env.NODE_ENV === 'production') return;
  console.group(label);
  console.table(logs);
  console.groupEnd();
}