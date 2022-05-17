import { Exclude } from 'class-transformer'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'dummy', orderBy: { createdAt: 'DESC' } })
export class Dummy {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', nullable: true })
  name: string

  @Column({ type: 'varchar', nullable: true })
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn({ select: false })
  @Exclude()
  deletedAt?: Date

  constructor(partial: Partial<Dummy>) {
    Object.assign(this, partial)
  }
}
