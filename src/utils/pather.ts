import { join } from "path";
export function pather(dir: 'resources' | 'server' | 'utils', file: string) {
    return join(__dirname + `/../${dir}/${file}`).toString()
}