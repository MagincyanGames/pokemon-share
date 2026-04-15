import { ApiProperty, ApiTags } from "@nestjs/swagger";

@ApiTags('accounts')
export class GetAccountDTO {
    @ApiProperty()
    name: string;

    @ApiProperty()
    displayName: string;

    constructor(
        base: {name: string, displayName: string}
    ) {
        this.name = base.name;
        this.displayName = base.displayName;
    }
}