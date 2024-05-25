import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String })
  userId: number;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: false })
  email: string;
}
