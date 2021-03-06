import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer, ConnectedSocket,
} from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import {Server, Socket} from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatsGateway {
  @WebSocketServer()
  server: Server;

  doOnce = false;
  constructor(private readonly chatsService: ChatsService) {
    this.chatsService.typingUsers$.subscribe((data) => {
      if (this.doOnce) this.server.emit('getIsTyping', data);
      else this.doOnce = true;
    });
  }

  @SubscribeMessage('isTyping')
  async onTypingStart(
      @MessageBody() message: any,
      @ConnectedSocket() socket: Socket,
  ) {
    this.chatsService.handleUserTyping(message.user);
  }

  @SubscribeMessage('createChat')
  async create(@MessageBody() message: any, @ConnectedSocket() socket: Socket) {
    socket.join(message.nameOfRoom);
    this.server.emit(
        'getAllRooms',
        await this.chatsService.findAll(this.server.sockets.adapter.rooms),
    );
  }

  @SubscribeMessage('findAllChats')
    async findAll(@ConnectedSocket() socket: Socket) {
      socket.emit(
          'getAllRooms',
          await this.chatsService.findAll(this.server.sockets.adapter.rooms),
      );
  }

  @SubscribeMessage('sendMessage')
  sendMessage(@MessageBody() message: any, @ConnectedSocket() socket: Socket) {
    console.log(message);
    //Check login
    this.server.to(message.room).emit('messageReceived', {
      user: message.user,
      text: message.text,
    });
    //this.server.emit(createChatDto.room, createChatDto);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client Disconnected :  ${client.id} `);
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    client.emit(
        'getAllRooms',
        await this.chatsService.findAll(this.server.sockets.adapter.rooms),
    );
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
