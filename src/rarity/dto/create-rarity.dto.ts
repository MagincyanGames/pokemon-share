import { ApiTags } from "@nestjs/swagger";

@ApiTags('')
export class CreateRarityRequestDTO {
    name: string;
    percent: number;
}

@ApiTags('')
export class CreateRarityResponseDTO{
    id: number;
    name: string;
    percent: number;
}
