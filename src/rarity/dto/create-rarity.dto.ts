import { ApiTags } from "@nestjs/swagger";
import { Rarity } from "../entity/rarity.entity";

@ApiTags('rarity')
export class CreateRarityRequestDTO {
    name!: string;
    percent!: number;
}

@ApiTags('rarity')
export class CreateRarityResponseDTO {
    id?: number;
    name?: string;
    percent?: number;
    
    constructor(base: Partial<Rarity>){
        this.id = base.id;
        this.name = base.name;
        this.percent = base.percent;
    }
}
