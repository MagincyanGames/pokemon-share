import { Rarity } from "src/rarity/entity/rarity.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @ManyToOne(() => Rarity, (rarity) => rarity.cards, {
        onDelete: "SET NULL"
    })
    rarity!: Rarity;
}