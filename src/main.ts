import * as fs from "fs";
import * as path from "path";

//Pokemon Interface
interface pokemon {
  id: number,
  name: string,
  type: string[],
  height: number,
  weight: number
}
