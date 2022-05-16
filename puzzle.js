const { readFileSync, writeFileSync } = require('fs');
const { generatePage } = require('./generatePage.js');

const isValidMove = function ({ validMoves, empty }, move) {
  return validMoves[empty].includes(move);
};

const updateBoard = function ({ board, empty }, move) {
  const swap = board[empty];
  board[empty] = board[move];
  board[move] = swap;
};

const isGameOver = function ({ board }) {
  return '123 ' === Object.values(board).join('');
};

const play = function (game, move) {
  game.totalMoves++;
  if (!isValidMove(game, move)) {
    return false;
  }
  updateBoard(game, move);
  game.empty = move;
  game.isOver = isGameOver(game);
};

const readFile = function (file) {
  return JSON.parse(readFileSync(file, 'utf8'));
};

const commitStatus = function (file, game) {
  writeFileSync(file, JSON.stringify(game), 'utf-8');
};

const main = function (move, { status, template, target }) {
  const game = readFile(status);
  play(game, move);
  commitStatus(status, game);
  generatePage(template, target, game);
};

const files = {
  status: 'resources/gameStatus.json',
  template: 'resources/template.html',
  target: 'targetDir/puzzle.html'
};

main(process.argv[2], files);
