import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column('int')
  age: number;

  @Column({
    comment: '毛色'
  })
  color: string;

  @Column({
    comment: '生活照'
  })
  picture: string;
}