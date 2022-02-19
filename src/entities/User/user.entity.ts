import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Race, Role, UserStatus } from 'src/types/enums/user';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  password: string;

  // @Field()
  // @Column({
  //   nullable: true,
  // })
  // name: string;

  // @Field()
  // @Column({
  //   type: 'enum',
  //   enum: Role,
  //   default: Role.USUAL,
  //   nullable: true,
  // })
  // role: Role;

  // @Field(() => String, { nullable: true })
  // @Column({
  //   nullable: true,
  // })
  // gender: string | null;

  // @Field(() => String, { nullable: true })
  // @Column({
  //   type: 'enum',
  //   enum: Race,
  //   default: Race.HUMAN,
  //   nullable: true,
  // })
  // race: Race | null;

  // @Field(() => String, { nullable: true })
  // @Column({
  //   nullable: true,
  // })
  // email: string;

  // @Field()
  // @Column({
  //   type: 'enum',
  //   enum: UserStatus,
  //   default: UserStatus.IN_PROCESS
  // })
  // status: UserStatus
}
