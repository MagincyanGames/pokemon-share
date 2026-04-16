import { ApiProperty } from "@nestjs/swagger";
import { Card } from "../entity/card.entity";

export class CreateCardRequestDTO {
    @ApiProperty()
    name!: string;

    @ApiProperty()
    description!: string;

    @ApiProperty()
    rarityId!: number;
}

export class CreateCardResponseDTO {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    description?: string;

    @ApiProperty()
    rarityId?: number;

    constructor(base: Partial<Card>) {
        this.id = base.id;
        this.name = base.name;
        this.description = base.description
        this.rarityId = base.rarity?.id;
    }

}