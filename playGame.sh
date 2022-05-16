function playMove(){
  move=$1
  node puzzle.js $move
  # open targetDir/puzzle.html
}

function main() {
  local init=resources/init.json;
  local statusFile=resources/gameStatus.json;
  cp $init $statusFile
  playMove b2

  while grep -q 'false' $statusFile
  do
    read -p 'Enter position : ' move
    playMove $move
  done
}

main
