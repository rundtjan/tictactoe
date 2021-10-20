var app = angular.module("tictac", []);

app.controller("myCtrl", function ($scope, $timeout) {
  test = $scope.turn;
  $scope.beginning = (function () {
    //creates look in beginning
    $(".xo").animate(
      {
        top: "100px",
        left: "100px",
      },
      1
    );
    $("#turn").css("opacity", "0");
  })();
  $scope.exit = function () {
    //exits the board
    $(".xo").animate(
      {
        top: "100px",
        left: "100px",
      },
      500
    );
    $(".xo").animate(
      {
        opacity: "0",
      },
      500
    );
    $timeout(function () {
      $(".menu").css("display", "block");
      $(".menu").animate(
        {
          opacity: "0.8",
        },
        500
      );
    }, 1200);
    $("#turn").animate(
      {
        opacity: "0",
      },
      1000
    );
  };
  $scope.enter = function () {
    //enters the board
    $scope.start();
    $(".menu").animate(
      {
        opacity: "0",
      },
      500
    );
    $(".menu").css("display", "none");
    $(".board").css("z-index", "1");
    $(".xo").animate(
      {
        opacity: "1",
      },
      500
    );
    $("#a").animate($scope.xo.a, 500);
    $("#b").animate($scope.xo.b, 500);
    $("#c").animate($scope.xo.c, 500);
    $("#d").animate($scope.xo.d, 500);
    $("#e").animate($scope.xo.e, 500);
    $("#f").animate($scope.xo.f, 500);
    $("#g").animate($scope.xo.g, 500);
    $("#h").animate($scope.xo.h, 500);
    $("#i").animate($scope.xo.i, 500);
    $("#turn").animate(
      {
        opacity: "0.8",
      },
      1200
    );
  };

  $scope.a = 0;
  $scope.b = 0;
  $scope.c = 0;
  $scope.d = 0;
  $scope.e = 0;
  $scope.f = 0;
  $scope.g = 0;
  $scope.h = 0;
  $scope.i = 0;
  $scope.level = "medium";
  $scope.level2 = { color: "#FF7E47" };
  $scope.player2 = "mach";
  $scope.change = "no";
  $scope.button2 = {
    color: "#FF7E47",
  };
  $scope.level1 = {};
  $scope.levelchanger = function (x) {
    console.log(x);
    $scope.level = x;
    console.log("level: " + $scope.level);
    switch (
      x //changes the level
    ) {
      case "easy":
        $scope.level1 = { color: "#FF7E47" };
        $scope.level2 = $scope.level3 = {};
        break;
      case "medium":
        $scope.level2 = { color: "#FF7E47" };
        $scope.level1 = $scope.level3 = {};
        break;
      case "hard":
        $scope.level3 = { color: "#FF7E47" };
        $scope.level1 = $scope.level2 = {};
        break;
    }
    console.log($scope.level1, $scope.level2, $scope.level3);
  };
  $scope.changer = function (x) {
    //changes which symbol you play with
    if (x === "x") {
      $scope.change = "yes";
      console.log("x");
      $scope.button1 = {
        color: "#FF7E47",
      };
      $scope.button2 = {
        color: "grey",
      };
    } else {
      $scope.change = "no";
      console.log("o");
      $scope.button1 = {
        color: "grey",
      };
      $scope.button2 = {
        color: "#FF7E47",
      };
    }
  };
  $scope.changeplayer = function () {
    //changes wether one player or two
    switch ($scope.player2) {
      case "mach":
        $scope.player2 = "";
        break;
      case "":
        $scope.player2 = "mach";
        break;
    }
    $scope.scoresplayer1 = $scope.scoresplayer2 = 0;
    if ($scope.player2 !== "mach") {
      $scope.levelstyle = { display: "none" };
    } else {
      $scope.levelstyle = {};
    }
  };
  $scope.display = function (x) {
    //kind of a filter for different purposes
    if (x === "plays") {
      if ($scope.player2 === "mach") {
        return "Choose your symbol:";
      } else {
        return "Player 1 plays symbol:";
      }
    }
    if (x === "start") {
      if ($scope.turn === "player1" || $scope.turn === "player2") {
        return "Start game";
      } else {
        return "Continue";
      }
    }
    if (x === "player1") {
      if ($scope.player2 === "mach") {
        return "You";
      } else {
        return "Player 1";
      }
    }

    if (x === "player2") {
      if ($scope.player2 === "mach") {
        return "Computer";
      } else {
        return "Player 2";
      }
    }
    if (x === "turn") {
      if ($scope.turn === "player2") {
        switch ($scope.player2) {
          case "mach":
            return "Computer";
            break;
          case "":
            return "Player 2";
            break;
        }
      } else if ($scope.turn === "player1") {
        switch ($scope.player2) {
          case "mach":
            return "Your turn";
            break;
          case "":
            return "Player 1";
            break;
        }
      } else {
        return $scope.turn;
      }
    } else if (x !== "mach") {
      var y = $scope[x];
      var answer;
      switch (y) {
        case 0:
          answer = "";
          break;
        case 1:
          if ($scope.change === "no") {
            answer = "O";
          } else {
            answer = "X";
          }
          break;
        case 10:
          if ($scope.change === "no") {
            answer = "X";
          } else {
            answer = "O";
          }
          break;
      }
      return answer;
    } else if (x === "mach") {
      if ($scope.player2 === "mach") {
        return "One player";
      } else if (x === "player2") {
        if ($scope.player2 === "mach") {
          return "Computer";
        } else {
          return "Player 2";
        }
      } else {
        return "Two players";
      }
    }
  };

  $scope.xo = {
    //the board
    a: {
      top: "0px",
      left: "0px",
    },
    b: {
      top: "0px",
      left: "100px",
    },
    c: {
      top: "0px",
      left: "200px",
    },
    d: {
      top: "100px",
      left: "0px",
    },
    e: {
      top: "100px",
      left: "100px",
    },
    f: {
      top: "100px",
      left: "200px",
    },
    g: {
      top: "200px",
      left: "0px",
    },
    h: {
      top: "200px",
      left: "100px",
    },
    i: {
      top: "200px",
      left: "200px",
    },
  };
  $scope.scoresplayer1 = 0;
  $scope.scoresplayer2 = 0;
  $scope.next = "";
  $scope.getit = [];
  $scope.count = 0;
  $scope.starter = "player2";
  $scope.turn = $scope.starter;
  $scope.reset = function () {
    //changes everything back to the startingpoint
    $scope.a =
      $scope.b =
      $scope.c =
      $scope.d =
      $scope.e =
      $scope.f =
      $scope.g =
      $scope.h =
      $scope.i =
      $scope.count =
        0;
    $scope.getit = [];
    $scope.next = "";
    $scope.danger = [];
    if ($scope.starter === "player1") {
      $scope.starter = "player2";
    } else {
      $scope.starter = "player1";
    }
    $scope.turn = $scope.starter;
  };
  $scope.rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["a", "d", "g"],
    ["b", "e", "h"],
    ["c", "f", "i"],
    ["a", "e", "i"],
    ["c", "e", "g"],
  ];
  $scope.sum = function () {
    return (
      $scope.a +
      $scope.b +
      $scope.c +
      $scope.d +
      $scope.e +
      $scope.f +
      $scope.g +
      $scope.i +
      $scope.h
    );
  };
  $scope.mark = function (x, y) {
    //the act of marking a spot on the board
    console.log("mark", x, y);
    if ($scope[x] === 0) {
      // if the spot is not taken
      switch ($scope.turn) {
        case "player1":
          if (!y) {
            $scope[x] = 1;
          } else {
            return;
          }
          $scope.count++;
          break;
        case "player2":
          if ($scope.player2 === "mach" && y !== "mach") {
            //checks that the computer makes player2-moves
            return;
          }
          $scope[x] = 10;
          $scope.count++;
      }
      if ($scope.turn === "player1") {
        $scope.turn = "player2";
      } else {
        $scope.turn = "player1";
      }
      $scope.check();
    }
  };
  $scope.danger = [];
  var sum = 0;

  $scope.winner = function (y, x) {
    //what happens when someone wins
    $scope.win = [];
    console.log("winner", y);
    if (y === 3) {
      $scope.scoresplayer1++;
      if ($scope.player2 === "mach") {
        $scope.turn = "You win!";
      } else {
        $scope.turn = "Player 1 wins!";
      }
    } else {
      $scope.scoresplayer2++;
      if ($scope.player2 === "mach") {
        $scope.turn = "You lose!";
      } else {
        $scope.turn = "Player 2 wins!";
      }
    }
    ["a", "b", "c", "d", "e", "f", "g", "h", "i"].forEach(function (elem) {
      if (!x.includes(elem)) {
        $scope.win.push("#" + elem);
      }
    });
    console.log($scope.win);
    $scope.win.forEach(function (elem) {
      $(elem).animate(
        {
          opacity: "0",
        },
        800
      );
      console.log(elem);
    });
    $timeout($scope.exit, 1400);
  };
  $scope.tie = function () {
    //what happens when there's a tie
    console.log("tie");
    $scope.turn = "It's a tie!";
    $timeout($scope.exit, 1000);
  };
  var mach = function () {
    //the AI of the game
    console.log("mach", $scope.count);
    if ($scope.level === "medium") {
      if (Math.random() > 0.86) {
        $scope.random();
        return;
      }
    }
    if ($scope.level === "easy") {
      if (Math.random() > 0.75) {
        $scope.random();
        return;
      }
    }
    if ($scope.level === "hard") {
      if (Math.random() > 0.95) {
        $scope.random();
        return;
      }
    }

    if ($scope.getit.length > 0) {
      //take the spot to win
      console.log("getit");
      var z = 0;
      while ($scope.getit.length > 0) {
        if ($scope[$scope.getit[z]] === 0) {
          $scope.mark($scope.getit[z], "mach");
          $scope.getit = [];
          return;
        } else {
          $scope.getit.shift();
        }
      }
    }

    if ($scope.danger.length > 0 && $scope[$scope.danger[0]] === 0) {
      //if none of above but player1 is winning - take the spot
      console.log("danger");
      $scope.mark($scope.danger[0], "mach");
      $scope.danger = [];
      return;
    } else if ($scope.count === 0) {
      if (Math.random() > 0.2) {
        $scope.firststart();
      } else {
        $scope.random();
      }
      return;
    } //if player2 is starting - take the first step
    else if ($scope.next === $scope.secondstart && $scope.count === 2) {
      if ($scope.e === 0) {
        //if second move and centre not taken
        $scope.next();
        return;
      } else {
        if (Math.random() < 0.49) {
          $scope.secondcentre();
          return;
        } else {
          $scope.secondcentre2();
          return;
        }
      }
    } else if ($scope.next === $scope.thirdstart && $scope.count === 4) {
      $scope.next();
      return;
    } else if ($scope.next === $scope.thirdcentre) {
      if ($scope.a + $scope.c + $scope.i + $scope.g === 21) {
        $scope.thirdstart();
        return;
      }
    } else if ($scope.count === 1) {
      if ($scope.e === 0) {
        $scope.firstsecond();
      } else {
        $scope.firstsecondcentre();
      }
      return;
    } else if ($scope.next === $scope.secondsecond && $scope.count === 3) {
      $scope.secondsecond();
      return;
    } else {
      console.log("NB");
      $scope.random();
    }
  };
  $scope.start = function () {
    $scope.reset();
    if ($scope.turn === "player2" && $scope.player2 === "mach") {
      $timeout(function () {
        mach();
      }, 2000);
    }
  };
  $scope.check = function () {
    //checks for rows close to winning or winning
    console.log("check");
    for (var y = 0; y < $scope.rows.length; y++) {
      sum = 0;
      sum = $scope.rows[y].reduce(function (a, b) {
        return a + $scope[b];
      }, 0);
      if (sum === 2) {
        //player one is 1 move from finishing
        $scope.danger.push(
          $scope.rows[y][
            $scope.rows[y].findIndex(function (element) {
              //where to try and save
              return $scope[element] === 0;
            })
          ]
        );
      }
      if (sum === 20) {
        //player 2 is 1 move from finishing
        $scope.getit.push(
          $scope.rows[y][
            $scope.rows[y].findIndex(function (element) {
              //where to put next draw
              return $scope[element] === 0;
            })
          ]
        );
      } else if (sum === 3 || sum === 30) {
        //found a winning row
        $scope.winner(sum, $scope.rows[y]);
        return;
      }
    }
    if ($scope.sum() === 45 || $scope.sum() === 54) {
      $scope.tie();
      return;
    }
    if ($scope.turn === "player2" && $scope.player2 === "mach") {
      //if it is the computers' turn, starts next draw
      $timeout(function () {
        mach();
      }, 800);
    }
  };
  $scope.firststart = function () {
    console.log("firststart");
    $scope.pos = ["a", "c", "g", "i"];
    $scope.mark($scope.pos.splice(Math.floor(Math.random() * 4), 1), "mach"); //take any corner
    $scope.next = $scope.secondstart;
  };
  $scope.secondstart = function () {
    console.log("secondstart");
    $scope.next = $scope.thirdstart;
    $scope.pos2 = [];
    $scope.pos.reduce(function (a, b) {
      if ($scope[b] === 0) {
        $scope.pos2.push(b);
      }
    }, 0);
    if ($scope.pos2.length === 2) {
      $scope.mark(
        $scope.pos2.splice(Math.floor(Math.random() * $scope.pos2.length), 1),
        "mach"
      );
      return;
    } else if ($scope.pos2.length === 3) {
      for (var y = 0; y < $scope.rows.length; y++) {
        //check all rows for sum 11 and remove the corners affected from possible
        sum = 0;
        sum = $scope.rows[y].reduce(function (a, b) {
          return a + $scope[b];
        }, 0);

        if (sum === 11) {
          switch ($scope.rows[y][1]) {
            case "b":
              if ($scope.a !== 0) {
                $scope.mark("g", "mach");
                return;
              } else {
                $scope.mark("i", "mach");
                return;
              }

              break;
            case "d":
              if ($scope.a !== 0) {
                $scope.mark("c", "mach");
                return;
              } else {
                $scope.mark("i", "mach");
                return;
              }

              break;
            case "f":
              if ($scope.c !== 0) {
                $scope.mark("a", "mach");
                return;
              } else {
                $scope.mark("g", "mach");
                return;
              }

              break;
            case "h":
              if ($scope.g !== 0) {
                $scope.mark("a", "mach");
                return;
              } else {
                $scope.mark("c", "mach");
                return;
              }
          }
          return;
        }
        $scope.mark(
          $scope.pos2[Math.floor(Math.random() * $scope.pos2.length)],
          "mach"
        );
        return;
      }
    }
  };
  $scope.secondcentre = function () {
    $scope.next = $scope.thirdcentre;
    console.log("secondcentre");
    if ($scope.a === 10) {
      $scope.mark("i", "mach");
      return;
    }
    if ($scope.c === 10) {
      $scope.mark("g", "mach");
      return;
    }
    if ($scope.g === 10) {
      $scope.mark("c", "mach");
      return;
    }
    if ($scope.i === 10) {
      $scope.mark("a", "mach");
      return;
    }
  };
  $scope.secondcentre2 = function () {
    console.log("secondcentre2");
    if ($scope.a === 10) {
      if (Math.random() < 0.49) {
        $scope.mark("f", "mach");
      } else {
        $scope.mark("h", "mach");
      }
    }
    if ($scope.c === 10) {
      if (Math.random() < 0.49) {
        $scope.mark("d", "mach");
      } else {
        $scope.mark("h", "mach");
      }
    }

    if ($scope.g === 10) {
      if (Math.random() < 0.49) {
        $scope.mark("b", "mach");
      } else {
        $scope.mark("f", "mach");
      }
    }
    if ($scope.i === 10) {
      if (Math.random() < 0.49) {
        $scope.mark("b", "mach");
      } else {
        $scope.mark("d", "mach");
      }
    }
  };
  $scope.thirdstart = function () {
    console.log("thirdstart");
    if ($scope.pos2.length === 1) {
      $scope.mark($scope.pos2[0], "mach");
    } else {
      $scope.mark("e", "mach");
    }
    $scope.next = $scope.random;
  };
  $scope.firstsecond = function () {
    console.log("firstsecond");
    $scope.mark("e", "mach");
    $scope.next = $scope.secondsecond;
    return;
  };
  $scope.secondsecond = function () {
    console.log("secondsecond");
    $scope.pos = [];
    ["b", "d", "f", "h"].forEach(function (elem) {
      if ($scope[elem] === 0) {
        $scope.pos.push(elem);
      }
    });
    $scope.mark(
      $scope.pos[Math.floor(Math.random() * $scope.pos.length)],
      "mach"
    );
    $scope.next = $scope.random;
    return;
  };
  $scope.firstsecondcentre = function () {
    console.log("firstsecondcentre");
    $scope.mark(["a", "c", "g", "i"][Math.floor(Math.random() * 4)], "mach");
    $scope.next = $scope.random;
    return;
  };
  $scope.random = function () {
    console.log("random!");
    $scope.ranpos = [];
    ["a", "b", "c", "d", "e", "f", "g", "h", "i"].forEach(function (elem) {
      if ($scope[elem] === 0) {
        $scope.ranpos.push(elem);
      }
    });
    $scope.mark(
      $scope.ranpos[Math.floor(Math.random() * $scope.ranpos.length)],
      "mach"
    );
    $scope.next = $scope.random;
  };
});
