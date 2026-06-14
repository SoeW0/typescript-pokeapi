import fs from "fs";
import path from "path";

export function saveJSON(filePath: string, data: unknown): void {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Dados salvos em: ${filePath}`);
}

export function loadJSON<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");

  if (!raw.trim()) {
    return null;
  }

  return JSON.parse(raw) as T;
}
