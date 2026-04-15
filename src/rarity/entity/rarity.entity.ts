import { Card } from "src/cards/entity/card.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rarity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    name!: string;

    @Column()
    percent!: number;
    
    @OneToMany(()=>Card, (card) => card.rarity)
    cards!: Card[]
}