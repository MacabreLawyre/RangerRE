// ##############################################################
// FIX WEIRD CONDITIONAL THINGS THAT SHOULD JUST BE IF STATEMENTS
// ##############################################################
//FIND
(;\n)(\t*)([0-9]+) (>|>=|==|<=|<) ([a-zA-Z]*) && \(((.*,\n)*.*)\);
//REPLACE
$1$2if \($3 $4 $5\)\n$2\t<<<<$6;>>>>
//EXAMPLE
while (true) {
	var c = 4 * b, d, e, g = new Int32Array(512), k = a.length, r = 0;
	if (0 == k)
		return 1;
	90 > k && (r = 1);
	d += 8;
	90 >= k && (r = 1);
	d += 8;
	90 == k && (r = 1);
	d += 8;
	90 <= k && (r = 1);
	d += 8;
	90 > k && (r = 1);
	d += 8;
	0 == r && (h = (g[d++] << 6) + g[d++]);
	d += 8;
	// big blast
	d += 8;
	90000000 > k && (r = 1,
	j = 34,
	k += d);
	//aaaaaaaaaaaaa
	Mb[b] = (g[d++] << 6) + g[d++];
	k = 34;
	x = true,
	y = 900,
	z = x && (y > k)
}
// ##############################################################

// ##############################################################
// FIX INDENTING AFTER FIXING SHOULD-BE IF STATEMENTS
// ##############################################################
//FIND
^(\t*)<<<<(.*,\n)^(\t*)(.*,\n)
//REPLACE
$1$2$1<<<<$4
//EXAMPLE
while (true) {
	// big blast
	if(90000000 > k)
		<<<<a = 1,
	b = 2,
	c = 3;>>>>
	// small blast
	if (x = 0)
		<<<<x = 1,
	y = 2;>>>>
	// end
	// huge blast
	if (x = 0)
		<<<<a = 1,
	b = 2,
	b = 2,
	b = 2,
	c = 3;>>>>
}
// ##############################################################

// ##############################################################
// PART 2
// ##############################################################
//FIND
^(\t*)<<<<(.*,\n)^(\t*)(.*;)>>>>\n
//REPLACE
$1$2$1$4\n
//EXAMPLE
while (true) {
	// big blast
	if(90000000 > k)
		a = 1,
		<<<<b = 2,
	c = 3;>>>>
	// small blast
	if (x = 0)
		<<<<x = 1,
	y = 2;>>>>
	// end
	// huge blast
	if (x = 0)
		a = 1,
		b = 2,
		b = 2,
		<<<<b = 2,
	c = 3;>>>>
}
// ##############################################################

// ##############################################################
// INDENT FUNCTIONS
// ##############################################################
//FIND
(\n[^\n]+\n)(function)
//REPLACE
$1\n$2
// ##############################################################

// ##############################################################
// EXPAND TERNARY OPS
// ##############################################################
//FIND
(\t*)(.*?)([a-zA-Z0-9_]+) (>|>=|==|<=|<) ([a-zA-Z0-9_]+) \? (.+) : ([^:\?\n;]+)
(\t*)(.*[\t ])(([a-zA-Z0-9_]+)( (>|>=|==|<=|<) ([a-zA-Z0-9_]+))?) \? (.+?) : ([^:\?\n;]+)
(\t*)(.*[\t ])(([a-zA-Z0-9_]+)( (>|>=|==|<=|<) ([a-zA-Z0-9_]+))?) \? (.+?) : ([^:\?\n;]+)
\n(\t*)([^:\n]*[\t ]\?*\(?)([a-zA-Z0-9_]+ (>|>=|==|<=|<) ([a-zA-Z0-9_]+)|([a-zA-Z0-9_]+)) *\? *(.+?) *: *([^:\?\n;]+)
//REPLACE
$1$2($3 $4 $5)\n$1\t? ($6)\n$1\t: ($7)
{$1$2}($3)\n$1\t? ($8)\n$1\t: ($9)
$1$2($3) ? ($8) t: ($9)
$1$2#if($3){$8}else{$9}#
//EXAMPLE BEFORE
var condition1 = true,
	condition2 = false,
	access = condition1 ? condition2 ? "true true": "true false" : condition2 ? "false true" : "false false";
	access = condition1 ? (condition2 ? "true true": "true false") : (condition2 ? "false true" : "false false");

	condition2 ? "false true" : "false false";
	
function ig(a, b) {
	return a > b ? a : b
}

function K(a, b, c) {
	return a < b ? b : a > c ? c : a
}
function egg(a, b) {
	for (var a = ea * fa - 1; 0 <= a; a--)
		C[a] = 0;
	9 >= f ? uf() : 49 >= f ? vf() : 59 >= f ? wf() : 60 <= f && xf();
	if (0 < ge)
		ge--,
		yf(D, 480, 247, "save OK", 16711680, 6684672);
	if (0 < ke)
		ke--,
		2 == je ? D.b(10, 172) : 3 == je ? D.b(10, 1084672) : 4 == je && D.b(1072);
}
// EXAMPLE AFTER
var condition1 = true,
	condition2 = false,
	access =  (IF(condition1)THEN{(IF(condition2)THEN{"true true"}ELSE{"true false" })}ELSE{(IF(condition2)THEN{"false true"}ELSE{"false false"}) }) ;
	access =  (IF(condition1)THEN{(condition2 ? "true true"}ELSE{"true false") }) : (condition2 ? "false true" : "false false");

	 (IF(condition2)THEN{"false true"}ELSE{"false false"}) ;
	
function ig(a, b) {
	return a >  (IF(b)THEN{a}ELSE{b}) 
}

function K(a, b, c) {
	return a <  (IF(b)THEN{b}ELSE{a >  (IF(c)THEN{c}ELSE{a}) }) 
}
function egg(a, b) {
	for (var a = ea * fa - 1; 0 <= a; a--)
		C[a] = 0;
	9 >=  (IF(f)THEN{uf()}ELSE{49 >=  (IF(f)THEN{vf()}ELSE{59 >=  (IF(f)THEN{wf()}ELSE{60 <= f && xf()}) }) }) ;
	if (0 < ge)
		ge--,
		yf(D, 480, 247, "save OK", 16711680, 6684672);
	if (0 < ke)
		ke--,
		2 ==  (IF(je)THEN{D.b(10, 172)}ELSE{3 ==  (IF(je)THEN{D.b(10, 1084672)}ELSE{4 == je && D.b(1072)}) }) ;
}
// ##############################################################



