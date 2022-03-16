import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer
} from '@nestjs/websockets'
import {Server} from "socket.io";
import {UpdateChatDto} from "./dtos/update-chat.dto";
import {ChatsService} from "./chats.service";
import {CreateChatDto} from "./dtos/create-chat.dto";

@WebSocketGateway({
    cors:{
        origin: '*'
    }
})

export class ChatsGateway{
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatsService: ChatsService) {}

    @SubscribeMessage('createChat')
    create(@MessageBody() createChatDto: CreateChatDto) {
        //TODO Store incomming messages using services etc. etc.
        this.server.emit(createChatDto.room, createChatDto);
    }

    @SubscribeMessage('findAllChats')
    findAll() {
        return this.chatsService.findAll();
    }

    @SubscribeMessage('findOneChat')
    findOne(@MessageBody() id: number) {
        return this.chatsService.findOne(id);
    }

    @SubscribeMessage('updateChat')
    update(@MessageBody() updateChatDto: UpdateChatDto) {
        return this.chatsService.update(updateChatDto.id, updateChatDto);
    }

    @SubscribeMessage('removeChat')
    remove(@MessageBody() id: number) {
        return this.chatsService.remove(id);
    }
}
