import { ApiTags } from "@nestjs/swagger";
import { Account } from "../entity/account.entity";

@ApiTags('accounts')
export class CreateAccountRequestDTO {
    name!: string;
    displayName!: string;
    password!: string;
}

@ApiTags('accounts')
export class CreateAccountResponseDTO {
    id?: number;
    name?: string;
    displayName?: string;
    
    constructor(base: Partial<Account>) {
        this.id = base.id;
        this.name = base.name;
        this.displayName = base.displayName;
    }
}

