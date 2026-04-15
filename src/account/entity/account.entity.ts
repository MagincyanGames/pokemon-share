import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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