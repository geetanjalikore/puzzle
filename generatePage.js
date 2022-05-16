const { writeFileSync, readFileSync } = require('fs');
const { element, attribute } = require('./createHtml.js');

const movesHtml = function ({ totalMoves }) {
  return element('div', totalMoves, attribute('class', 'moves'));
};

const boardHtml = function ({ board }) {
  return Object.keys(board).map((block) => {
    return element('div', board[block], attribute('class', 'block'));
  }).join('');
};

const generatePage = function (templateFile, targetFile, game) {
  const template = readFileSync(templateFile, 'utf8');
  const moves = movesHtml(game);
  const blocks = boardHtml(game);
  let html = template.replace('__BLOCKS__', blocks);
  html = html.replace('__MOVES__', moves);
  writeFileSync(targetFile, html, 'utf8');
};

exports.generatePage = generatePage;
