import { PlusCode } from "./PlusCode";
import { Result } from "./Result";

export class GeoResult {
    public plus_code: PlusCode;

    public results: Result[];

    public status: string;
}