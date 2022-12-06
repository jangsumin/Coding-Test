function solution(id_pw, db) {
  let result = "fail";
  db.map(info => {
      if (info[0] === id_pw[0] && info[1] === id_pw[1]) result = "login";
      if (info[0] === id_pw[0] && info[1] !== id_pw[1]) result = "wrong pw";
  });
  return result;
}