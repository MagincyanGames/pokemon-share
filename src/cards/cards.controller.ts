import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './entity/card.entity';
import { CreateCardRequestDTO, CreateCardResponseDTO } from './dto/create-card.dto';
import { GetCardDTO } from './dto/get-card.dto';

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) { }

    @Get()
    async findAll(): Promise<GetCardDTO[]> {
        return (await this.cardsService.findAll()).map(c => new GetCardDTO(c));
    }

    @Post()
    async create(@Body() createCard: CreateCardRequestDTO) {
        return new CreateCardResponseDTO(await this.cardsService.create(createCard));
    }
}
