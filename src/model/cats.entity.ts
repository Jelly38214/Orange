import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Cats {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column('double')
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