import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rarity } from './entity/rarity.entity';
import { Repository } from 'typeorm';
import { CreateRarityRequestDTO } from './dto/create-rarity.dto';

@Injectable()
export class RarityService {
    constructor(
        @InjectRepository(Rarity)
        private rarityRepository: Repository<Rarity>
    ) { }

    async findAll(): Promise<Rarity[]> {
        return await this.rarityRepository.find({})
    }

    async create(body: CreateRarityRequestDTO): Promise<Rarity> {
        const created = this.rarityRepository.create(body)
        return await this.rarityRepository.save(created);
    }
}
