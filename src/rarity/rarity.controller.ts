import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RarityService } from './rarity.service';
import { CreateRarityRequestDTO, CreateRarityResponseDTO } from './dto/create-rarity.dto';

@Controller('rarity')
export class RarityController {

    constructor(private readonly rarityService: RarityService) { }

    //TODO: Agregar DTO para las rarezas
    @Get()
    @ApiOperation({})
    async findAll() {
        return await this.rarityService.findAll()
    }

    @Post()
    @ApiOperation({})
    async create(@Body() createRarity: CreateRarityRequestDTO): Promise<CreateRarityResponseDTO> {
        var created = await this.rarityService.create(createRarity);

        return new CreateRarityResponseDTO(created);
    }

}
