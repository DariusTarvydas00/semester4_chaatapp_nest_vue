import {CreateChatDto} from "./create-chat.dto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateChatDto extends PartialType(CreateChatDto){
    id: number;
}