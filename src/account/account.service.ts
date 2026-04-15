import { Injectable } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';
import { Repository } from 'typeorm';
import { CreateAccountRequestDTO } from './dto/create-account.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
    ) { }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10; // El estándar de seguridad actual
        return await bcrypt.hash(password, saltRounds);
    }

    async findAll(): Promise<Account[]> {
        return await this.accountRepository.find({})
    }

    async create(account: CreateAccountRequestDTO) {
        let res = this.accountRepository.create({
            name: account.name,
            displayName: account.displayName,
            hash: await this.hashPassword(account.password)
        });
        
        return await this.accountRepository.save(res);
    }
}
