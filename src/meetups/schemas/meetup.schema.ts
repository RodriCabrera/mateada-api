import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum MeetupStatus {
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Schema()
export class Meetup {
  @Prop({ type: String, required: false })
  id: string;

  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: [String], required: false })
  categories: string[];

  @Prop({ type: String, default: MeetupStatus.PENDING })
  status: MeetupStatus;
}

export const MeetupSchema = SchemaFactory.createForClass(Meetup);
