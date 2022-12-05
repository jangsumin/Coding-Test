function solution(keyinput, board) {
  const loc = {
      "x": 0,
      "y": 0
  };
  
  keyinput.map(inp => {
      if (inp === "left") loc["x"] -= 1;
      if (inp === "right") loc["x"] += 1;
      if (inp === "down") loc["y"] -= 1;
      if (inp === "up") loc["y"] += 1;
      if (loc["x"] > (board[0] - 1) / 2) loc["x"] = (board[0] - 1) / 2;
      if (loc["x"] < -((board[0] - 1) / 2)) loc["x"] = -((board[0] - 1) / 2);
      if (loc["y"] > (board[1] - 1) / 2) loc["y"] = (board[1] - 1) / 2;
      if (loc["y"] < -((board[1] - 1) / 2)) loc["y"] = -((board[1] - 1) / 2);
  });
  
  // if (Math.abs(loc["x"]) > ((board[0] - 1) / 2)) {
  //     if (loc["x"] < 0) loc["x"] = -((board[0] - 1) / 2);
  //     if (loc["x"] >= 0) loc["x"] = (board[0] - 1) / 2;
  // }
  // if (Math.abs(loc["y"]) > ((board[1] - 1) / 2)) {
  //     if (loc["y"] < 0) loc["y"] = -((board[1] - 1) / 2);
  //     if (loc["y"] >= 0) loc["y"] = (board[1] - 1) / 2;
  // }
  
  return Object.values(loc);
}