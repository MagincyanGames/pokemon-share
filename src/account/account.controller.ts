import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { GetAccountDTO } from './dto/get-account.dto';
import { CreateAccountRequestDTO, CreateAccountResponseDTO } from './dto/create-account.dto';

@ApiTags('accounts')
@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService) { }

    @Get()
    @ApiOperation({})
    @ApiResponse({
        status: 200,
        description: 'Get list of all users',
        type: GetAccountDTO,
        isArray: true,
    })
    async findAll(): Promise<GetAccountDTO[]> {
        const accounts = await this.accountService.findAll();
        return accounts.map(a => new GetAccountDTO(a));
    }

    @Post()
    @ApiOperation({
    })
    @ApiResponse({
        status: 201,
        description: 'Create new account',
        type: CreateAccountResponseDTO
    })
    async create(@Body() createAccountResponse: CreateAccountRequestDTO): Promise<CreateAccountResponseDTO> {
        var created = await this.accountService.create(createAccountResponse);

        return {
            id: created.id,
            name: created.name,
            displayName: created.displayName,
        }
    }
}
