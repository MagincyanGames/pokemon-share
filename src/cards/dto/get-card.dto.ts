import { ApiProperty } from "@nestjs/swagger";
import { Card } from "../entity/card.entity";

export class GetCardDTO {
    @ApiProperty()
    name?: string;
    
    @ApiProperty()
    description?: string;
    
    @ApiProperty()
    rarityId?: number;
    
    @ApiProperty()
    percent?: number;
    
    constructor(base: Partial<Card>) {
        this.name = base.name;
        this.description = base.description;
        this.rarityId = base.rarity?.id;
        this.percent = base.rarity ? base.rarity?.percent / base.rarity?.cards.length : undefined;
    }

}