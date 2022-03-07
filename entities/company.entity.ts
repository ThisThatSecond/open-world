import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique, OneToMany, Index } from "typeorm";
import { Poll } from "./poll.entity";
import { Option } from "./option.entity";
import { PairVote } from "./pair_vote.entity";

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({    nullable: false})
  name: string;
  @Column({    default: null})
  website: string;
  @Column({    default:null})
  logo: string;
  @Column({    default:null})
  company_size: string;
  @Column({    default:null})
  company_type: string;
  @Column({    nullable:false})
  email_domain_name: string;
  @Column({    nullable:false})
  owner_id:string;
}
