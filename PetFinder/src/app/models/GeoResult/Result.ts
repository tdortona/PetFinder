import { AddressComponents } from "./AddressComponents";
import { Geometry } from "./Geometry";
import { PlusCode } from "./PlusCode";

export class Result {
    public address_components: AddressComponents[];

    public formatted_address: string;

    public geometry: Geometry;

    public place_id: string;

    public plus_code: PlusCode;

    public types: string[];
}