import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  getAllBoards(): Promise<Board[]> {
    return this.boardRepository.getAllBoards();
  }

  getAllBoardsByUser(user: User): Promise<Board[]> {
    return this.boardRepository.getAllBoardsByUser(user);
  }

  getBoardById(id: number): Promise<Board> {
    return this.boardRepository.getBoardById(id);
  }

  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  deleteBoard(id: number, user: User): Promise<void> {
    return this.boardRepository.deleteBoard(id, user);
  }

  updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    return this.boardRepository.updateBoardStatus(id, status);
  }
}
