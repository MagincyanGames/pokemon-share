import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ApiTags('accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    displayName: string;

    @Column()
    hash: string;
}