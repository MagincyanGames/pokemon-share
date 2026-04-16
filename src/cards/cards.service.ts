import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entity/card.entity';
import { CreateCardRequestDTO, CreateCardResponseDTO } from './dto/create-card.dto';
import { Rarity } from 'src/rarity/entity/rarity.entity';
import { error } from 'console';

@Injectable()
export class CardsService {

    constructor(
        @InjectRepository(Card)
        private readonly cardRepository: Repository<Card>,
        @InjectRepository(Rarity)
        private readonly rarityRepository: Repository<Rarity>

    ) { }

    async findAll(): Promise<Card[]> {
        return await this.cardRepository.find();
    }

    async create(createCard: CreateCardRequestDTO): Promise<Card> {
        const rarity = await this.rarityRepository.findOneBy({
            id: createCard.rarityId
        })

        if (!rarity) throw new BadRequestException(`Invalid rarity ${createCard.rarityId}`)

        const card = this.cardRepository.create(createCard);
        card.rarity = rarity;

        return await this.cardRepository.save(card);
    }
}
