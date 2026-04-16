import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Account } from "../entity/account.entity";

@ApiTags('accounts')
export class GetAccountDTO {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    displayName?: string;

    constructor(
        base: Partial<Account>
    ) {
        this.id = base.id;
        this.name = base.name;
        this.displayName = base.displayName;
    }
}