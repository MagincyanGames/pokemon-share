import { ApiTags } from "@nestjs/swagger";

@ApiTags('accounts')
export class CreateAccountRequestDTO {
    name: string;
    displayName: string;
    password: string;
}

@ApiTags('accounts')
export class CreateAccountResponseDTO {
    id: number;
    name: string;
    displayName: string;
}

