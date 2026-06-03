import fs from "fs/promise";
import path from "path";

export async function saveJson(filepath: string, data: unknown): Promise<void> {
  const dir = path.dirname(filepath);
  await fs.mkdir(dir, { recursive: true});
  await fs.writeFile(filepath, JSON.stringfy(data, null, 2), "utf-8");
  console.log(`Saved to ${filePath}`);
}
