import {User} from "../../core/user.entity";

export class CreateChatDto {
  text: string;
  room: string;
  user: User;
}
