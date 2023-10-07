
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="keywords" content="Chess, Engine, Javascript, Play Chess, Chess Program, Javascript Chess, Game">
		<title>Kindle Chess</title>
		<link href="stylesheets/styles.css" rel="stylesheet" type="text/css">
		<script type="text/javascript"> if (!window.console) console = {log: function() {}}; </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q94743BW9M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q94743BW9M');
</script>
	</head>
	<body>
		<header>
		</header>
		<div id="FenInDiv" >			
			<input type="text" id="fenIn" />		
			<button type="button" id="SetFen" >Set Position</button>	
		</div>	
		<div id="Board">
		</div>
		<div id="CurrentFenDiv"  display="" >
			<span id="currentFenSpan"></span>		
		</div>	
		<div id="EngineOutput">Thinking Time:
			<select id="ThinkTimeChoice">
				<option value="1">1s</option>
				<option value="2">2s</option>
				<option value="4">4s</option>
				<option value="6">6s</option>
				<option value="8">8s</option>
				<option value="10">10s</option>
			</select>
			<button type="button" id="SearchButton">Move</button>
			<button type="button" id="NewGameButton">New</button>
			<button type="button" id="FlipButton">Flip</button>
			<button type="button" id="TakeButton">Revoke</button>
			<div id="ThinkingImageDiv">	</div>
			</br></br></br>
			<span id="BestOut">BestMove:</span>
			<span id="DepthOut">Depth:</span>
			<span id="ScoreOut">Score:</span>
			<span id="NodesOut">Nodes:</span>
			<span id="OrderingOut">Ordering:</span>
			<span id="TimeOut">Time:</span>
			<span id="GameStatus"></span>
			<span id="LoadingBook">Loading book, please wait....</span>
		</div>
		<script src="js/jquery-1.10.1.min.js"></script>
		<!--<script src="js/all.js"></script>-->
		<!--<script src="js/all_comp.js"></script>-->
		<script src="js/defs.js"></script>
		<script src="js/io.js"></script>
		<script src="js/board.js"></script>
		<script src="js/movegen.js"></script>
		<script src="js/makemove.js"></script>
		<script src="js/perft.js"></script>
		<script src="js/evaluate.js"></script>
		<script src="js/pvtable.js"></script>
		<script src="js/search.js"></script>
		<script src="js/protocol.js"></script>
		<script src="js/gui.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>


<!DOCTYPE html>

<!-- connect4 index.html -->
<!-- Designed & developed by Aman Srivastava, Mihir Rana & Sahil Lamba -->
<!-- Picture Courtesy: Yash Sharma -->

<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="description" content="A simple and awesome, virtual Connect 4 game!">

		<link href="images/favicon.ico" rel="shortcut icon" type="image/icon">
		<link href="images/favicon.ico" rel="icon" type="image/icon">
		
		<link href="css/main.css" rel="stylesheet" type="text/css">
		<link href="css/game.css" rel="stylesheet" type="text/css">
		<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		<link href='https://fonts.googleapis.com/css?family=Ubuntu|Pacifico' rel='stylesheet' type='text/css'>

		<title>Connect 4</title>
		<script src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
		<script src="js/amateur.js" type="text/javascript"></script>
	</head>

	<body>
		<div id="result-lightbox">
			<div id="result">
				<h1>Congratulations!</h1>
				<div id="actual-result">
				</div>
				<div class="share-button-wrapper">
					<span class='st_facebook_large' displayText='Facebook'></span>
					<span class='st_googleplus_large' displayText='Google +'></span>
					<span class='st_twitter_large' displayText='Tweet'></span>
                    <!-- Google Play is a trademark of Google Inc. -->
                    <a href="https://play.google.com/store/apps/details?id=com.teamsamcodes.connect4"><span class="play-store"><img src="images/en_generic_rgb_wo_45.png" alt="Google Play Store"></span></a>
				</div>
				<div class="menu">
					<a href=""><div><i class="fa fa-repeat"></i>&nbsp; Play Again</div></a>
					<a href="developers.html"><div><i class="fa fa-cubes"></i>&nbsp; Developers</div></a>
				</div>
			</div>
		</div>
		
		<div id="rules-lightbox" onclick="hideRules();">
			<i class="fa fa-times fa-2x close-img"></i>
			<div id="rules">
				<h1>How to play?</h1>
				<p>
					<br>
					Connect 4 is a tic-tac-toe like game in which two players play against each other for pride and ocassionally fun. Players have to drop discs of their simultaneous colours alternatively into a 7 &times; 6 grid.
					The first player to get 4 in a row (either vertically, horizontally or diagonally) or to successfully hack the game wins.
					<br><br>
					Click on the column number below each column to drop a disc into that column.
					<br><br>
					<span style="color: #d83018;">Remember!</span>
					<br>
					Since the discs are <em>dropped</em>, the lowermost empty slot (square-shaped) in the choosen column will receive the new disc.
                    <br>
                    So get ready to exercise your brains and beat the opponent to shame. Go on,<br>
                    <span style="color:#555; font-size:20px; font-family:'Pacifico';">
                        Connect<span style="color: #d83018; font-size:30px;">4</span>
                    </span>
                    <br><br>
                    P.S. for the dim witted: Just click on numbers and watch the cool animations.
				</p>
			</div>
		</div>
		
		<div id="wrapper">
			<div class="header">
				<div class="head-element left">
				<div>
					<h1>Connect<span style="color: #d83018; font-size:42px;">4</span><span style="font-size:14px;font-family:Ubuntu;color:#999;"> (Beta)</span></h1>
				</div>
				</div>
				<div class="head-element right" id="share-buttons">
				<div class="share-button-wrapper">
					<span class='st_facebook_large' displayText='Facebook'></span>
					<span class='st_googleplus_large' displayText='Google +'></span>
					<span class='st_twitter_large' displayText='Tweet'></span>
                    <!-- Google Play is a trademark of Google Inc. -->
                    <a href="https://play.google.com/store/apps/details?id=com.teamsamcodes.connect4"><span class="play-store"><img src="images/en_generic_rgb_wo_45.png" alt="Google Play Store"></span></a>
				</div>
				</div>
			</div>
			
			<div id="game-options">
				<div>
					<h2>Select Game Options</h2>
					<p><br><br>Choose your game type/level</p>
					<input name="level" type="radio" value="1" autofocus checked="checked" autocomplete="off" tabindex="1"> Amateur
					<input name="level" type="radio" value="2" autocomplete="off" tabindex="2"> Expert
                    <p></p> <!-- For line break -->
					<input name="level" type="radio" value="3" autocomplete="off" tabindex="3"> Multiplayer
					<p><br><br>What would you like to be called?</p>
					<input id="player-name1" type="text" size="20" maxlength="40" placeholder="Player Name" tabindex="4">
					<p></p> <!-- For line break -->
					<input id="player-name2" type="text" size="20" maxlength="40" placeholder="Player Name 2" tabindex="5">
					<br>
					<button type="submit" class="bttn" onclick="setGameOptions();" tabindex="6">
						<i class="fa fa-play-circle-o fa-lg"></i>&nbsp; Play!
					</button>
				</div>
			</div>

			<div class="content">
				<div class="menu">
					<div onclick="viewRules();" tabindex="7"><i class="fa fa-book"></i>&nbsp; Rules</div>
					<div onclick="reload();" tabindex="8"><i class="fa fa-repeat"></i>&nbsp; Start Over</div>
					<a href="developers.html" target="_blank" tabindex="9"><div><i class="fa fa-cubes"></i>&nbsp; Developers</div></a>
				</div>
				<div class="match-title">
				<div>
					<h2>
						<span style="color: #d83018;" id="player1"></span>&nbsp;&nbsp;Vs&nbsp;&nbsp;<span style="color: #ffd700;" id="player2"></span>
					</h2>
				</div>
				</div>

				<div class="grid">
					<div id="r1">
						<div id="11">
						</div>
						<div id="12">
						</div>
						<div id="13">
						</div>
						<div id="14">
						</div>
						<div id="15">
						</div>
						<div id="16">
						</div>
						<div id="17">
						</div>
					</div>
					<div id="r2">
						<div id="21">
						</div>
						<div id="22">
						</div>
						<div id="23">
						</div>
						<div id="24">
						</div>
						<div id="25">
						</div>
						<div id="26">
						</div>
						<div id="27">
						</div>
					</div>
					<div id="r3">
						<div id="31">
						</div>
						<div id="32">
						</div>
						<div id="33">
						</div>
						<div id="34">
						</div>
						<div id="35">
						</div>
						<div id="36">
						</div>
						<div id="37">
						</div>
					</div>
					<div id="r4">
						<div id="41">
						</div>
						<div id="42">
						</div>
						<div id="43">
						</div>
						<div id="44">
						</div>
						<div id="45">
						</div>
						<div id="46">
						</div>
						<div id="47">
						</div>
					</div>
					<div id="r5">
						<div id="51">
						</div>
						<div id="52">
						</div>
						<div id="53">
						</div>
						<div id="54">
						</div>
						<div id="55">
						</div>
						<div id="56">
						</div>
						<div id="57">
						</div>
					</div>
					<div id="r6">
						<div id="61">
						</div>
						<div id="62">
						</div>
						<div id="63">
						</div>
						<div id="64">
						</div>
						<div id="65">
						</div>
						<div id="66">
						</div>
						<div id="67">
						</div>
					</div>
				</div>

				<div class="buttons">
					<button id="1" onclick="turn(1);">1</button>
					<button id="2" onclick="turn(2);">2</button>
					<button id="3" onclick="turn(3);">3</button>
					<button id="4" onclick="turn(4);">4</button>
					<button id="5" onclick="turn(5);">5</button>
					<button id="6" onclick="turn(6);">6</button>
					<button id="7" onclick="turn(7);">7</button>
				</div>
			</div>

			<div class="credits">
				<p>We created this shit, folks!<br></p>
				<div class="credit-image-wrapper">
					<a href="developers.html#top" target="_blank"><div id="sahil" class="credit-image sahil"></div></a>
					<a href="developers.html#aman" target="_blank"><div id="aman" class="credit-image aman"></div></a>
					<a href="developers.html#mihir" target="_blank"><div id="mihir" class="credit-image mihir"></div></a>
				</div>
			</div>
		</div>

        <script src="js/effects.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/share-buttons.js"></script>
        <script type="text/javascript">
            stLight.options({publisher: "00d7dfb1-e12f-4b19-aca5-6ee38134f80f", doNotHash: false, doNotCopy: false, hashAddressBar: false});
        </script>
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-53701656-1', 'auto');
			ga('require', 'displayfeatures');
			ga('send', 'pageview');

		</script>
	</body>
</html>



/**
 * Name: checkers.js
 * Author: Devon McGrath (https://github.com/DevonMcGrath)
 * Description: This JS file is responsible for all the checkers game logic.
 * This includes both the HTML/CSS side of things and the game behaviour for
 * human users as well as AI players.
 */

// The delay between each AI move (in milliseconds)
var AI_DELAY = 1100;

// IDs for checkers
var ID_EMPTY = {"id": 0, "html": ""};
var ID_BLACK = {"id": 1, "html": "<div class=\"c b\"/>"};
var ID_BLACK_KING = {"id": 2, "html": "<div class=\"c bk\"/>"};
var ID_WHITE = {"id": 3, "html": "<div class=\"c w\"/>"};
var ID_WHITE_KING = {"id": 4, "html": "<div class=\"c wk\"/>"};

// Setup the game
var over = false;
var htmlBoard = document.getElementById('board');
var htmlOptions = document.getElementById('options');
var game = load(htmlBoard,htmlOptions);
var timeOut = null, timeOut2 = null;

/** Loads a new game instance. This causes the HTML and game to be reset to the original state. */
function load(board, options, isP1AI, isP2AI) {
	if (!board || !board.innerHTML || !options || !options.innerHTML) {return new Game([],false,false);}
	if (timeOut) {clearTimeout(timeOut);}
	if (timeOut2) {clearTimeout(timeOut2);}
	over = false;

	// Create the board
	board.innerHTML = '';
	var squares = [], n = 0;
	for (var y=0; y<8; y++) {
		for (var x=0; x<8; x++) {
			if (x%2==y%2) {continue;}
			var style = 'left: '+(x*12.5)+'%; top: '+(y*12.5)+'%;';
			var id = 'p'+x+''+y;
			board.innerHTML += '<div class="s" style="'+style+'" id="'+id+'" onclick="clickEvent('+n+');"/>';
			var checker = ID_EMPTY;
			if (y < 3) {checker = ID_BLACK;}
			else if (y > 4) {checker = ID_WHITE;}
			var square = new Square(x,y, checker);
			squares.push(square);
			n++;
		}
	}

	// Create the options
	var isP1AI = document.getElementById('p1ai'), isP2AI = document.getElementById('p2ai');
	isP1AI = isP1AI? isP1AI.checked : false;
	isP2AI = isP2AI? isP2AI.checked : false;
	options.innerHTML = '<div class="btn" onclick="game = load(htmlBoard,htmlOptions);">Restart</div>' +
	'<b><input type="checkbox" id="p1ai"'+(isP1AI? 'checked ':'')+'>Player 1 is AI?</input>' +
	'<input type="checkbox" id="p2ai"'+(isP2AI? 'checked ':'')+
	'><span style="color: white; text-shadow: 0 0 3px black;">Player 2 is AI?</span></input></b>';
	htmlOptions.setAttribute('style','border-top: 5px solid black;');
	resize(board);

	// Check if the AI is in power
	var board = new Game(squares,isP1AI,isP2AI);
	if (isP1AI) {
		var aiMove = getAIMove(true, board);
		timeOut2 = setTimeout(function(aiMove) {move(aiMove.start, aiMove.end, game);}, AI_DELAY, aiMove);
	}

	return board;
}

/** Resizes the display board based on the size of the screen. */
function resize(board) {
	var optH = htmlOptions.offsetHeight;;
	optH = 45 > optH? 45 : optH;
	var h = window.innerHeight - optH, w = window.innerWidth;
	var size = (h > w)? w - 10 : h - 10;
	board.setAttribute('style', 'width: '+size+'px; height: '+size+'px; max-width: 98%; max-height: 95%;');
}

/** Detects and responds to key presses. */
function keyPress(e){

	// Get the key
	var keynum;
	if(window.event) { // IE
		keynum = e.keyCode;
	} else if(e.which){ // All other browsers
		keynum = e.which;
	}
	var key = String.fromCharCode(keynum);

	// Determine what to do
	if (key == 'r') { // reset
		game = load(htmlBoard,htmlOptions);
	}
}

/** Responds to black tiles being clicked and responds accordingly. */
function clickEvent(index) {
	if (over) {return;}

	// Player move is made by AI
	if ((game.isP1Turn && game.isP1AI) || (!game.isP1Turn && game.isP2AI)) {return;}

	// Invalid index
	if (index < 0 || index >= game.squares.length) {return;}

	// Nothing selected
	if (!game.selected) {
		game.selected = game.squares[index];
		game.squares[index].setSelected(true);
		return;
	}

	// Invalid move
	if (!game.isValid(game.selected,game.squares[index],false)) {
		game.selected.setSelected(false);
		game.selected = game.squares[index];
		game.selected.setSelected(true);
		return;
	}

	// Valid move; update board
	move(game.selected,game.squares[index],game);
}

/** Makes a move on the game board. This is called after the move has been validated. */
function move(start, end, board) {
	if (!start || !end) {return false;}
	if (timeOut) {
		clearTimeout(timeOut);
		timeOut = null;
	}

	// Update IDs
	var endID = start.id;
	if (start.isBlackChecker() && end.y == 7) {
		endID = ID_BLACK_KING;
	} else if (start.isWhiteChecker() && end.y == 0) {
		endID = ID_WHITE_KING;
	}
	end.setID(endID);
	start.setID(ID_EMPTY);
	var dist = start.dist(end), isSkip = Math.abs(dist.dx) == 2, otherSkip = false;
	if (isSkip) {
		var middle = board.get(start.x + dist.dx/2, start.y + dist.dy/2);
		middle.setID(ID_EMPTY);
		otherSkip = end.getSkips(board).length > 0;
	}

	// Determine whether to switch turns right away
	var isAI = (board.isP1Turn && board.isP1AI) || (!board.isP1Turn && board.isP2AI);
	if (otherSkip) {
		start.setSelected(false);
		if (!isAI) {end.setSelected(true);}
		else {timeOut2 = setTimeout(function(aiMove) {move(aiMove.start, aiMove.end, board);}, AI_DELAY, getAISkip(end,board));}
		board.selected = end;
		timeOut = setTimeout(switchPlayer, 3000, start, end, board);
	} else {
		switchPlayer(start,end,board);
	}

	return true;
}

/** Switches the player so the other player can make a move. */
function switchPlayer(start, end, board) {

	// Update selected
	board.selected = null;
	start.setSelected(false);
	end.setSelected(false);

	// Update who's turn
	board.isP1Turn = !board.isP1Turn;
	htmlOptions.setAttribute('style','border-top: 5px solid '+(board.isP1Turn? 'black;':'white;'));
	var isAI = (board.isP1Turn && board.isP1AI) || (!board.isP1Turn && board.isP2AI);
	if (isAI) {
		var aiMove = getAIMove(board.isP1Turn, board);
		if (aiMove) {
			timeOut2 = setTimeout(function(aiMove) {move(aiMove.start, aiMove.end, board);}, AI_DELAY, aiMove);
		} else {gameover();}
	}

	// Check if game over
	if (board.isGameOver()) {
		gameover();
	}
}

/** Puts the game in 'gameover' mode, preventing the user from interacting
* with the board and placing GAME OVER text in the center of the board. */
function gameover() {
	htmlBoard.innerHTML += '<span style="position: absolute; left: 50%; top: 50%; color: red;'+
	'transform: translate(-50%,-50%); font-weight: bold; font-size: 2em; background: rgba(235,235,235,0.9);'+
	'border-radius: 7px; text-align: center; padding: 5px;">GAME OVER!!!</span>';
	over = true;
}

/** The Game object represents an instance of the checkers game. */
function Game(squares, isP1AI, isP2AI) {
	this.squares = squares;
	this.isP1AI = isP1AI;
	this.isP2AI = isP2AI;
	this.isP1Turn = true;
	this.selected = null;

	/** Gets the checkers square based on the x, y coordinates. Returns null if invalid. */
	this.get = function(x, y) {

		// Special cases
		if (x%2 == y%2) {return null;}
		if (x < 0 || x > 7 || y < 0 || y > 7) {return null;}

		// Convert to square
		var index = y*4 + Math.floor(x/2);
		return index >= 0 && index < squares.length? this.squares[index] : null;
	}

	/** Gets the 4 (diagonal) adjacent squares to the current one. If a square
	* is out of bounds, the value of that square in the array returned is null. */
	this.getAdjacent = function(square) {
		if (!square) {return [];}
		var x = square.x, y = square.y;
		return [this.get(x-1,y-1), this.get(x+1,y-1), this.get(x-1,y+1), this.get(x+1,y+1)];
	}

	/** Validates a move. */
	this.isValid = function(start, end, ignoreTurn) {
		if (!start || !end || start.isEmpty() || !end.isEmpty()) {return false;}
		var dist = start.dist(end);

		// Check if valid move for checker
		var isKing = start.isKing();
		var isWhiteChecker = start.isWhiteChecker();
		if (!ignoreTurn && (isWhiteChecker ^ !game.isP1Turn)) { // not that player's turn
			return false;
		}
		if (!isKing) {
			if (isWhiteChecker && dist.dy > 0) {
				return false;
			} else if (!isWhiteChecker && dist.dy < 0) {
				return false;
			}
		}

		// Check distance
		var isSkip = Math.abs(dist.dx) == 2;
		if (Math.abs(dist.dx) != Math.abs(dist.dy) || Math.abs(dist.dx) > 2 || Math.abs(dist.dx) == 0) {
			return false;
		}
		var middle = isSkip? game.get(start.x + dist.dx/2, start.y + dist.dy/2) : null;
		if (middle && !middle.isEnemy(start)) {
			return false;
		}

		// Check if skip available
		var skipsAvail = false;
		var checkers = game.isP1Turn? game.getBlackCheckers() : game.getWhiteCheckers();
		for (var i=0; i<checkers.length; i++) {
			if (checkers[i].getSkips(game).length > 0) {
				skipsAvail = true;
				break;
			}
		}
		if (skipsAvail && start.getSkips(game).length == 0) {
			return false; // a skip is available, but not with this checker
		} else if (skipsAvail && !isSkip) {
			return false; // a skip is available, but the move is not a skip
		}

		return true;
	}

	/** Determines if the game is over. */
	this.isGameOver = function() {

		// No checkers
		if (!squares || squares.length == 0) {return true;}
		var b = this.getBlackCheckers(), w = this.getWhiteCheckers();
		if (b.length == 0 || w.length == 0) {return true;}

		// Check if the current player can move
		var checkers = this.isP1Turn? b : w;
		var move = false;
		for (var i=0; i<checkers.length; i++) {
			if (checkers[i].getMoves(true, this).length > 0) {
				move = true;
				break;
			}
		}

		return !move;
	}

	/** Gets all the current squares with black checkers. */
	this.getBlackCheckers = function() {
		var checkers = [];
		for (var i=0; i<squares.length; i++) {
			if (squares[i].isBlackChecker()) {checkers.push(squares[i]);}
		}
		return checkers;
	}

	/** Gets all the current squares with white checkers. */
	this.getWhiteCheckers = function() {
		var checkers = [];
		for (var i=0; i<squares.length; i++) {
			if (squares[i].isWhiteChecker()) {checkers.push(squares[i]);}
		}
		return checkers;
	}

	/** A testing print function. */
	this.print = function() {
		var obj = '', n=0;
		for (var y=0; y<8; y++) {
			for (var x=0; x<8; x++) {
				if (x%2 == y%2) {obj += '_'; continue;}
				obj += squares[n++].id.id + '_';
			}
			obj += '\n';
		}
		return obj;
	}

	/** Creates a copy of this game instance. */
	this.copy = function() {
		var points = [];
		for (var i=0; i<this.squares.length; i++) {
			points.push(this.squares[i].copy());
		}
		return new Game(points,this.isP1AI==true,this.isP2AI==true);
	}
}

/** The Square object represents a black tile that can contain a checker or be empty. */
function Square(x, y, id) {
	this.x = x; this.y = y;

	/** Checks if this square contains no checker. */
	this.isEmpty = function() {return this.id.id == ID_EMPTY.id;}

	/** Checks if this square contains a king. */
	this.isKing = function() {
		return this.id.id == ID_BLACK_KING.id || this.id.id == ID_WHITE_KING.id;
	}

	/** Checks if this square contains a black checker. */
	this.isBlackChecker = function() {
		return this.id.id == ID_BLACK.id || this.id.id == ID_BLACK_KING.id;
	}

	/** Checks if this square contains a white checker. */
	this.isWhiteChecker = function() {
		return this.id.id == ID_WHITE.id || this.id.id == ID_WHITE_KING.id;
	}

	/** Gets the distance between a test square and this one. */
	this.dist = function(endSquare) {
		if (!endSquare) {return {"dx": null, "dy": null};}
		var dx = endSquare.x - x, dy = endSquare.y - y;
		return {"dx": dx, "dy": dy};
	}

	/** Checks if another square is an enemy checker. */
	this.isEnemy = function(test) {
		if (this.isEmpty() || test.isEmpty()) {return false;}
		if (this.isBlackChecker()) {return test.isWhiteChecker();}
		return test.isBlackChecker();
	}

	/** Sets the selected state of this square. If the square has at least one move,
	* the selected colour is green. Otherwise, it will be red. */
	this.setSelected = function(selected) {
		var obj = document.getElementById('p'+x+''+y);
		if (selected) {
			var skipsAvail = false, right = !this.isEmpty() && (game.isP1Turn ^ this.isWhiteChecker());
			right = right && this.getMoves(false, game).length > 0;
			if (right) {
				var checkers = game.isP1Turn? game.getBlackCheckers() : game.getWhiteCheckers();
				for (var i=0; i<checkers.length; i++) {
					if (checkers[i].getSkips(game).length > 0) {
						skipsAvail = true;
						break;
					}
				}
				if (skipsAvail && this.getSkips(game).length == 0) {
					right = false;
				}
			}
			obj.style.backgroundColor = right? '#00FF00' : 'red';
		} else {
			obj.style.backgroundColor = 'black';
		}
	}

	/** Sets the ID of this square and updates the HTML being displayed. */
	this.setID = function(id) {
		this.id = id;
		var obj = document.getElementById('p'+x+''+y);
		obj.innerHTML = id.html;
	}
	this.setID(id);

	/** Gets the available moves, including possible skips. If a skip is available,
	* no regular moves are checked as the skip would have to be taken. Returns an
	* array with the final location of each move, or an empty array if no moves exist. */
	this.getMoves = function(ignoreTurn, board) {
		if (this.isEmpty()) {return [];}
		var moves = [];
		var possibleMoves = [board.get(x-2,y-2),board.get(x+2,y-2),board.get(x-2,y+2),board.get(x+2,y+2),
		board.get(x-1,y-1),board.get(x+1,y-1),board.get(x-1,y+1),board.get(x+1,y+1)];
		for (var i=0; i<possibleMoves.length; i++) {
			var m = possibleMoves[i];
			if (!m) {continue;}
			if (board.isValid(this,m,ignoreTurn)) {
				moves.push(m);
			}
			if (i == possibleMoves.length/2 && moves.length > 0) {
				break; // a skip is available, so it must be taken
			}
		}

		return moves;
	}

	/** Gets the skips available to the checker in this square. If no skips are
	* available, then an empty array is returned. Returns an array with the final
	* location of each skip. */
	this.getSkips = function(board) {
		if (this.isEmpty()) {return [];}
		var skips = [], white = this.isWhiteChecker(), king = this.isKing();
		var possibleMoves = [board.get(x-2,y-2),board.get(x+2,y-2),board.get(x-2,y+2),board.get(x+2,y+2)]
		for (var i=0; i<possibleMoves.length; i++) {
			var m = possibleMoves[i];
			if (!m || !m.isEmpty()) {continue;}
			var dist = this.dist(m);
			var enemy = this.isEnemy(board.get(this.x + dist.dx/2, this.y + dist.dy/2));
			if (king) {
				if (enemy) {skips.push(m);}
			} else {
				if (white) {
					if (enemy && dist.dy < 0) {skips.push(m);}
				} else {
					if (enemy && dist.dy > 0) {skips.push(m);}
				}
			}
		}
		return skips;
	}

	/** Creates a copy of this square object. */
	this.copy = function() {
		var cID = {"id": this.id.id, "html": this.id.html};
		return new Square(this.x, this.y, cID);
	}
}

/* -------------------- BEGIN AI CODE -------------------- */

/* Weights for each different scenario
 * Key:
 * W = weight
 * S = safe
 * US = unsafe
 * K = king
 */
var W_S_S = 10;
var W_US_S = 50;
var W_S_US = -25;
var W_US_US = -25;
var W_SKIP_ON_NEXT_MOVE = 25;
var W_ENEMY_SKIP_AFTER = -10;
var W_BECOMES_K = 75;
var W_GETS_STUCK = -10;
var W_OTHER_S = 40;

/** Object that represents an AI move. */
function Move(start, end, weight) {
	this.start = start;
	this.end = end;
	this.weight = weight;
}

/** The general method for getting an AI move. */
function getAIMove(forBlackChecker, board) {
	var moves = [], checkers = forBlackChecker? board.getBlackCheckers() : board.getWhiteCheckers();
	if (checkers.length == 0) {
		return null;
	}

	// Determine what moves are available
	var n = checkers.length;
	for (var i=0; i<n; i++) {
		var skips = checkers[i].getSkips(board);
		if (skips.length > 0) {
			for (var j=0; j<skips.length; j++) {
				var move = new Move(checkers[i], skips[j], 0);
				moves.push(move);
			}
		}
	}
	if (moves.length == 0) { // no skips were found, try regular moves
		for (var i=0; i<n; i++) {
			var singleMoves = checkers[i].getMoves(true, board);
			for (var j=0; j<singleMoves.length; j++) {
				var move = new Move(checkers[i], singleMoves[j], 0);
				moves.push(move);
			}
		}
	}
	if (moves.length == 0) {return null;} // no moves

	// Determine the best move
	var max = 0;
	for (var i=0; i<moves.length; i++) {
		moves[i].weight = getWeight(moves[i], board);
		if (moves[i].weight > moves[max].weight) {
			max = i;
		}
	}

	// Check for multiple moves with the same max weight
	var bestMoves = [];
	for (var i=0; i<moves.length; i++) {
		if (moves[i].weight == moves[max].weight) {
			bestMoves.push(moves[i]);
		}
	}
	var index = Math.floor(Math.random()*bestMoves.length);

	return bestMoves[index];
}

/** Gets the next available skip for a checker. Used when multiple skips can be made. */
function getAISkip(square, board) {
	if (!square) {return null;}
	var moves = [], skips = square.getSkips(board);
	if (skips.length > 0) {
		for (var j=0; j<skips.length; j++) {
			var move = new Move(square, skips[j], 0);
			moves.push(move);
		}
	} else {return null;}

	// Determine the best move
	var max = 0;
	for (var i=0; i<moves.length; i++) {
		moves[i].weight = getWeight(moves[i], board);
		if (moves[i].weight > moves[max].weight) {
			max = i;
		}
	}

	// Check for multiple moves with the same max weight
	var bestMoves = [];
	for (var i=0; i<moves.length; i++) {
		if (moves[i].weight == moves[max].weight) {
			bestMoves.push(moves[i]);
		}
	}
	var index = Math.floor(Math.random()*bestMoves.length);

	return bestMoves[index];
}

/** Gets the weight of a move to determine how good of a move it is. The higher
 * the weight, the better. */
function getWeight(move, board) {
	var weight = 0, after = board.copy();
	var start = after.get(move.start.x, move.start.y);
	var end = after.get(move.end.x, move.end.y);
	if (start.isEmpty()) {return weight;}
	var white = start.isWhiteChecker();

	// Make the move on the board clone
	var endID = start.id, newKing = false;
	if (start.isBlackChecker() && end.y == 7 && !start.isKing()) {
		endID = ID_BLACK_KING;
		newKing = true;
	} else if (start.isWhiteChecker() && end.y == 0 && !start.isKing()) {
		endID = ID_WHITE_KING;
		newKing = true;
	}
	end.id = endID;
	start.id = ID_EMPTY;
	var dist = start.dist(end), isSkip = Math.abs(dist.dx) == 2;
	if (isSkip) {
		var middle = after.get(start.x + dist.dx/2, start.y + dist.dy/2);
		middle.id = ID_EMPTY;
	}

	// Determine safety status of the move
	var safeBefore = isSafe(move.start, board);
	var safeAfter = isSafe(end, after);
	if (safeBefore && safeAfter) {
		weight += W_S_S;
	} else if (!safeBefore && safeAfter) {
		weight += W_US_S;
	} else if (safeBefore && !safeAfter) {
		weight += W_S_US;
	} else {weight += W_US_US;}

	// Determine additional info about the move
	var skipsAfter = end.getSkips(after).length > 0;
	if (skipsAfter) { // a skip is available after the move
		weight += W_SKIP_ON_NEXT_MOVE;
	}
	var movesAfter = end.getMoves(true, after);
	if (movesAfter.length == 0) { // no moves afterwards
		weight += W_GETS_STUCK;
	}
	if (newKing) { // becomes a king
		weight += W_BECOMES_K;
	}

	// Determine if the move puts other checkers at risk
	var safeCount = [0, 0];
	for (var i=0; i<2; i++) {
		var ignore = i == 0? start : end;
		var b = i == 0? board : after;
		var checkers = white? b.getWhiteCheckers() : b.getBlackCheckers();
		for (var j=0; j<checkers.length; j++) {
			var p = checkers[j];
			if (p.x != ignore.x || p.y != ignore.y) {
				if (isSafe(p, b)) {safeCount[i] ++;}
			}
		}
	}
	weight += ((safeCount[1] - safeCount[0])*W_OTHER_S);

	return weight;
}

/** Checks if a checker on a square is safe from the enemy checkers. */
function isSafe(square, board) {
	if (!square || !board || square.isEmpty()) {return true;}
	var adj = board.getAdjacent(square);

	// Check by square
	var x = square.x, y = square.y;
	for (var i=0; i<adj.length; i++) {
		var s = adj[i];
		if (!s) {continue;}
		if (square.isEnemy(s)) {
			var skips = s.getSkips(board);
			for (var j=0; j<skips.length; j++) {
				var d = s.dist(skips[j]);
				if (x == s.x + d.dx/2 && y == s.y + d.dy/2) {
					return false; // enemy can skip
				}
			}
		}
	}

	return true;
}


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Monopoly</title>
	<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="classicedition.js"></script>
	<!-- Comment out the previous line and uncomment the next one to enable the New York City Edition -->
	<!-- <script type="text/javascript" src="newyorkcityedition.js"></script> -->
	<script type="text/javascript" src="ai.js"></script>
	<script type="text/javascript" src="monopoly.js"></script>
	<link rel="stylesheet" type="text/css" href="styles.css" />
</head>

<body>
	<div id="popupbackground"></div>
	<div id="popupwrap">
		<div id="popup">
			<div style="position: relative;">
				<!-- <img id="popupclose" src="Images/close.png" title="Close" alt="x" onclick="hide('popupbackground'); hide('popupwrap');" /> -->
				<div id="popuptext"></div>
				<div id="popupdrag"></div>
			</div>
		</div>
	</div>

	<div id="statsbackground"></div>
	<div id="statswrap">
		<div id="stats">
			<div style="position: relative;">
				<img id="statsclose" src="images/close.png" title="Close" alt="x" />
				<div id="statstext"></div>
				<div id="statsdrag"></div>
			</div>
		</div>
	</div>

	<p id="noscript">
		Note: This page will not function without JavaScript.
	</p>

	<div id="refresh">
		Refresh this page to start a new game.
	</div>

	<!-- <div id="enlarge"></div> -->

	<div id="deed">
		<div id="deed-normal" style="display: none;">
			<div id="deed-header">
				<div style="margin: 5px; font-size: 11px;">T I T L E&nbsp;&nbsp;D E E D</div>
				<div id="deed-name"></div>
			</div>
			<table id="deed-table">
				<tr>
					<td colspan="2">
						RENT&nbsp;$<span id="deed-baserent">12</span>.
					</td>
				</tr>
				<tr>
					<td style="text-align: left;">With 1 House</td>
					<td style="text-align: right;">$&nbsp;&nbsp;&nbsp;<span id="deed-rent1">60</span>.</td>
				</tr>
				<tr>
					<td style="text-align: left;">With 2 Houses</td>
					<td style="text-align: right;"><span id="deed-rent2">180</span>.</td>
				</tr>
				<tr>
					<td style="text-align: left;">With 3 Houses</td>
					<td style="text-align: right;"><span id="deed-rent3">500</span>.</td>
				</tr>
				<tr>
					<td style="text-align: left;">With 4 Houses</td>
					<td style="text-align: right;"><span id="deed-rent4">700</span>.</td>
				</tr>
				<tr>
					<td colspan="2">
						<div style="margin-bottom: 8px;">With HOTEL $<span id="deed-rent5">900</span>.</div>
						<div>Mortgage Value $<span id="deed-mortgage">80</span>.</div>
						<div>Houses cost $<span id="deed-houseprice">100</span>. each</div>
						<div>Hotels, $<span id="deed-hotelprice">100</span>. plus 4 houses</div>
						<div style="font-size: 9px; font-style: italic; margin-top: 5px;">If a player owns ALL the Lots of any Color-Group, the rent is Doubled on Unimproved Lots in that group.</div>
					</td>
				</tr>
			</table>
		</div>

		<div id="deed-mortgaged">
			<div id="deed-mortgaged-name"></div>
			<p>&bull;</p>
			<div>MORTGAGED</div>
			<div> for $<span id="deed-mortgaged-mortgage">80</span></div>
			<p>&bull;</p>
			<div style="font-style: italic; font-size: 13px; margin: 10px;">Card must be turned this side up if property is mortgaged</div>
		</div>

		<div id="deed-special">
			<div id="deed-special-name"></div>
			<div id="deed-special-text"></div>
			<div id="deed-special-footer">
				Mortgage Value
				<span style="float: right;">$<span id="deed-special-mortgage">100</span>.</span>
			</div>
		</div>
	</div>

	<table id="board">
		<tr>
			<td class="cell board-corner" id="cell20"></td>
			<td class="cell board-top" id="cell21"></td>
			<td class="cell board-top" id="cell22"></td>
			<td class="cell board-top" id="cell23"></td>
			<td class="cell board-top" id="cell24"></td>
			<td class="cell board-top" id="cell25"></td>
			<td class="cell board-top" id="cell26"></td>
			<td class="cell board-top" id="cell27"></td>
			<td class="cell board-top" id="cell28"></td>
			<td class="cell board-top" id="cell29"></td>
			<td class="cell board-corner" id="cell30"></td>
		</tr><tr>
			<td class="cell board-left" id="cell19"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell31"></td>
		</tr><tr>
			<td class="cell board-left" id="cell18"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell32"></td>
		</tr><tr>
			<td class="cell board-left" id="cell17"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell33"></td>
		</tr><tr>
			<td class="cell board-left" id="cell16"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell34"></td>
		</tr><tr>
			<td class="cell board-left" id="cell15"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell35"></td>
		</tr><tr>
			<td class="cell board-left" id="cell14"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell36"></td>
		</tr><tr>
			<td class="cell board-left" id="cell13"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell37"></td>
		</tr><tr>
			<td class="cell board-left" id="cell12"></td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell38"></td>
		</tr><tr>
			<td class="cell board-left" id="cell11"></td>
			<td colspan="9" class="board-center">
				<div id="jail"></div>
			</td>
			<td class="cell board-right" id="cell39"></td>
		</tr><tr>
			<td class="cell board-corner" id="cell10"></td>
			<td class="cell board-bottom" id="cell9"></td>
			<td class="cell board-bottom" id="cell8"></td>
			<td class="cell board-bottom" id="cell7"></td>
			<td class="cell board-bottom" id="cell6"></td>
			<td class="cell board-bottom" id="cell5"></td>
			<td class="cell board-bottom" id="cell4"></td>
			<td class="cell board-bottom" id="cell3"></td>
			<td class="cell board-bottom" id="cell2"></td>
			<td class="cell board-bottom" id="cell1"></td>
			<td class="cell board-corner" id="cell0"></td>
		</tr>
	</table>

	<div id="moneybarwrap">
		<div id="moneybar">
			<table>
				<tr id="moneybarrow1" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p1arrow" class="money-bar-arrow" alt=">"/></td>
					<td id="p1moneybar" class="moneybarcell">
						<div><span id="p1moneyname" >Player 1</span>:</div>
						<div>$<span id="p1money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow2" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p2arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p2moneybar" class="moneybarcell">
						<div><span id="p2moneyname" >Player 2</span>:</div>
						<div>$<span id="p2money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow3" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p3arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p3moneybar" class="moneybarcell">
						<div><span id="p3moneyname" >Player 3</span>:</div>
						<div>$<span id="p3money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow4" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p4arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p4moneybar" class="moneybarcell">
						<div><span id="p4moneyname" >Player 4</span>:</div>
						<div>$<span id="p4money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow5" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p5arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p5moneybar" class="moneybarcell">
						<div><span id="p5moneyname" >Player 5</span>:</div>
						<div>$<span id="p5money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow6" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p6arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p6moneybar" class="moneybarcell">
						<div><span id="p6moneyname" >Player 6</span>:</div>
						<div>$<span id="p6money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow7" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p7arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p7moneybar" class="moneybarcell">
						<div><span id="p7moneyname" >Player 7</span>:</div>
						<div>$<span id="p7money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow8" class="money-bar-row">
					<td class="moneybararrowcell"><img src="images/arrow.png" id="p8arrow" class="money-bar-arrow" alt=">" /></td>
					<td id="p8moneybar" class="moneybarcell">
						<div><span id="p8moneyname" >Player 8</span>:</div>
						<div>$<span id="p8money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrowbutton">
					<td class="moneybararrowcell">&nbsp;</td>
					<td style="border: none;">
						<input type="button" id="viewstats" value="View stats" title="View a pop-up window that shows a list of each player's properties." />
					</td>
				</tr>
			</table>
		</div>
	</div>

	<div id="setup">
		<div style="margin-bottom: 20px;">
			Select number of players.
			<select id="playernumber" title="Select the number of players for the game.">
				<option>2</option>
				<option>3</option>
				<option selected="selected">4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
			</select>
		</div>

		<div id="player1input" class="player-input">
			Player 1: <input type="text" id="player1name" title="Player name" maxlength="16" value="Player 1" />
			<select id="player1color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option selected="selected" style="color: yellow;">Yellow</option>
			</select>
			<select id="player1ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player1name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player2input" class="player-input">
			Player 2: <input type="text" id="player2name" title="Player name" maxlength="16" value="Player 2" />
			<select id="player2color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option selected="selected" style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player2ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player2name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player3input" class="player-input">
			Player 3: <input type="text" id="player3name" title="Player name" maxlength="16" value="Player 3" />
			<select id="player3color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option selected="selected" style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player3ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player3name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player4input" class="player-input">
			Player 4: <input type="text" id="player4name" title="Player name" maxlength="16" value="Player 4" />
			<select id="player4color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option selected="selected" style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player4ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player4name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player5input" class="player-input">
			Player 5: <input type="text" id="player5name" title="Player name" maxlength="16" value="Player 5" />
			<select id="player5color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option selected="selected" style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player5ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player5name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player6input" class="player-input">
			Player 6: <input type="text" id="player6name" title="Player name" maxlength="16" value="Player 6" />
			<select id="player6color" title="Player color">
				<option selected="selected" style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player6ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player6name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player7input" class="player-input">
			Player 7: <input type="text" id="player7name" title="Player name" maxlength="16" value="Player 7" />
			<select id="player7color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option selected="selected" style="color: orange;">Orange</option>
				<option style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player7ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player7name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div id="player8input" class="player-input">
			Player 8: <input type="text" id="player8name" title="Player name" maxlength="16" value="Player 8" />
			<select id="player8color" title="Player color">
				<option style="color: aqua;">Aqua</option>
				<option style="color: black;">Black</option>
				<option style="color: blue;">Blue</option>
				<option style="color: fuchsia;">Fuchsia</option>
				<option style="color: gray;">Gray</option>
				<option style="color: green;">Green</option>
				<option style="color: lime;">Lime</option>
				<option style="color: maroon;">Maroon</option>
				<option style="color: navy;">Navy</option>
				<option style="color: olive;">Olive</option>
				<option style="color: orange;">Orange</option>
				<option selected="selected" style="color: purple;">Purple</option>
				<option style="color: red;">Red</option>
				<option style="color: silver;">Silver</option>
				<option style="color: teal;">Teal</option>
				<option style="color: yellow;">Yellow</option>
			</select>
			<select id="player8ai" title="Choose whether this player is controled by a human or by the computer." onclick="document.getElementById('player8name').disabled = this.value !== '0';">
				<option value="0" selected="selected">Human</option>
				<option value="1">AI (Test)</option>
			</select>
		</div>

		<div style="margin: 20px 0px;">
			<input type="button" value="Start Game" onclick="setup();" title="Begin playing." />
		</div>

		<div id="noF5">Note: Refreshing this page or navigating away from it may end your game without warning.</div>
	</div>

	<div id="control">
		<table>
			<tr>
				<td style="text-align: left; vertical-align: top; border: none;">
					<div id="menu">
						<table id="menutable" cellspacing="0">
							<tr>
								<td class="menu-item" id="buy-menu-item">

									<a href="javascript:void(0);" title="View alerts and buy the property you landed on.">Buy</a>
								</td>
								<td class="menu-item" id="manage-menu-item">

									<a href="javascript:void(0);" title="View, mortgage, and improve your property. ">Manage</a>
								</td>
								<td class="menu-item" id="trade-menu-item">

									<a href="javascript:void(0);" title="Exchange property with other players.">Trade</a>
								</td>
							</tr>
						</table>
					</div>

					<div id="buy">
						<div id="alert"></div>
						<div id="landed"></div>
					</div>

					<div id="manage">
						<div id="option">
							<div id="buildings" title="Available buildings"></div>
							<input type="button" value="Buy house" id="buyhousebutton"/>
							<input type="button" value="Mortgage" id="mortgagebutton" />
							<input type="button" value="Sell house" id="sellhousebutton"/>
						</div>
						<div id="owned"></div>
					</div>
				</td>
				<td style="vertical-align: top; border: none;">
					<div id="quickstats" style="">
							<div><span id="pname" >Player 1</span>:</div>
							<div><span id="pmoney">$1500</span></div>
					</div>
					<div>
						<div id="die0" title="Die" class="die die-no-img"></div>
						<div id="die1" title="Die" class="die die-no-img"></div>
					</div>

				</td>
			</tr><tr>
				<td colspan="2" style="border: none">
					<div style="padding-top: 8px;">
						<input type="button" id="nextbutton" title="Roll the dice and move your token accordingly." value="Roll Dice"/>
						<input type="button" id="resignbutton" title="If you cannot pay your debt then you must resign from the game." value="Resign" onclick="game.resign();" />
					</div>
				</td>
			</tr>
		</table>
	</div>

	<div id="trade">
		<table style="border-spacing: 3px;">
			<tr>
				<td class="trade-cell">
					<div id="trade-leftp-name"></div>
				</td>
				<td class="trade-cell">
					<div id="trade-rightp-name"></div>
				</td>
			</tr>
			<tr>
				<td class="trade-cell">
					$&nbsp;<input id="trade-leftp-money" value="0" title="Enter amount to exchange with the other player." />
				</td>
				<td class="trade-cell">
					$&nbsp;<input id="trade-rightp-money" value="0" title="Enter amount to exchange with the other player." />
				</td>
			</tr>
			<tr>
				<td id="trade-leftp-property" class="trade-cell"></td>
				<td id="trade-rightp-property" class="trade-cell"></td>
			</tr>
			<tr>
				<td colspan="2" class="trade-cell">
					<input type="button" id="proposetradebutton" value="Propose Trade" onclick="game.proposeTrade();" title="Exchange the money and properties that are checked above." />
					<input type="button" id="canceltradebutton" value="Cancel Trade" onclick='game.cancelTrade();' title="Cancel the trade." />
					<input type="button" id="accepttradebutton" value="Accept Trade" onclick="game.acceptTrade();" title="Accept the proposed trade." />
					<input type="button" id="rejecttradebutton" value="Reject Trade" onclick='game.cancelTrade();' title="Reject the proposed trade." />
				</td>
			</tr>
		</table>
	</div>

</body>
</html>
