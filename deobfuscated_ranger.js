/*	Copyright (C) 2008 ha55ii, http://dan-ball.jp/
	The games source code use is prohibition.*/

var aa, 
	ca = 0, 
	da = window, 
	ea = 512, 
	fa = 384, 
	ga = 0, 
	ha, ja, ma, na, oa, qa, ra, sa, 
	ua = 0, va = 0, 
	xa = new wa, Aa = new wa, Ba = new wa, Da = new wa, Fa = new wa, Ga = new wa, 
	Ha, Ia, 
	Ka = [0, 0, 0, 0, 0, 0, 0, 0], 
	La, 
	Ma = new wa, Na = new wa, 
	Pa = Array(13), 
	Qa = new wa, Ra = new wa, Ua = new wa, Va = new wa, Ya = new wa, Za = new wa, $a = new wa, cb = new wa, db = new wa, fb = new wa, gb = new wa, hb = new wa, ib = new wa, jb = new wa, kb = new wa, lb = new wa, 
	f = 0, mb = 0, h = 0, nb = 0, sb = 0, l = 0, 
	tb = 3, 
	ub = !1, 
	vb = 0, 
	wb = 0, 
	xb = 0, 
	yb = [0, 0, 0, 0], zb = [0, 0, 0, 0], Ab = [0, 0, 0, 0], Eb = [0, 0, 0, 0], 
	Fb = 0, Gb = 0, Hb = 0, Ib = 0, Jb = 0, Kb = 100, Lb = 0, 
	PLAYER_LEVEL = [1, 1], 
	Nb = [1, 1], 
	$b = [0, 0], 
	ac = [0, 0, 0, 0, 0, 0, 0, 0], 
	EXP = 0, 
	MONEY = 0, 
	ec = [0, 0, 0, 0, 0, 0, 0, 0], 
	p = [50, 50, 50, 50, 50, 50, 50, 50], 
	fc = [0, 0, 0, 0, 0, 0, 0, 0], 
	LIFE_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0], 
	STR_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0], 
	DEX_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0], 
	MAG_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0], 
	kc = [50, 50, 50, 50, 50, 50, 50, 50], 
	lc = [0, 0, 0, 0, 0, 0, 0, 0], 
	mc = [0, 0, 0, 0, 0, 0, 0, 0], 
	nc = [0, 0, 0, 0, 0, 0, 0, 0], 
	oc = [0, 0, 0, 0, 0, 0, 0, 0], 
	pc = [0, 0, 0, 0, 0, 0, 0, 0], 
	qc = [0, 0, 0, 0, 0, 0, 0, 0], 
	rc = [0, 0, 0, 0, 0, 0, 0, 0], 
	tc = [0, 0, 0, 0, 0, 0, 0, 0], 
	uc = [1, 1, 1, 1, 1, 1, 1, 1], 
	vc = 0, wc = 0, xc = 0, yc = 0, zc = 1, 
	Ac = [0, 0, 0, 0, 0, 0, 0, 0], 
	Bc = [0, 0, 0, 0, 0, 0, 0, 0], 
	Cc = [0, 0, 0, 0, 0, 0, 0, 0], 
	q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
	Dc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
	Ec = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
	s = 4, 
	Fc = 16, 
	Gc = 40, 
	Hc = 41, 
	Ic = 59, 
	CLASSES = "Stickman Boxer Gladiator Sniper Magician Priest Gunner Whipper Angel".split(" "), 
	Kc = "123456789S".split(""), 
	Lc = [
		[
			[3, 7, 11, 15, 54, 64, 68, 72, 116, 121, 131, 137, 153, 178, 202, 214, 226, 253, 312, 328, 345, 360, 394, 410, 429, 451, 471, 479, 496, 504, 512, 520, 549], [4, 8, 12, 16, 55, 65, 69, 73, 117, 122, 132, 138, 154, 179, 203, 215, 227, 254, 313, 329, 346, 361, 395, 411, 430, 452, 472, 480, 497, 505, 513, 521, 550], [5, 9, 13, 17, 56, 66, 70, 74, 118, 123, 133, 139, 155, 180, 204, 216, 228, 255, 314, 330, 347, 362, 396, 412, 431, 453, 473, 481, 498, 506, 514, 522, 551], [6, 10, 14, 18, 57, 67, 71, 75, 119, 124, 134, 140, 156, 181, 205, 217, 229, 256, 315, 331, 348, 363, 397, 413, 432, 454, 474, 482, 499, 507, 515, 523, 552], [58, 60, 61, 62, 63, 115, 126, 127, 128, 129, 135, 141, 157, 182, 206, 218, 230, 257, 316, 332, 349, 364, 398, 414, 433, 455, 475, 483, 500, 508, 516, 524, 553], [76, 77, 78, 79, 80, 81, 82, 83, 120, 125, 136, 142, 158, 183, 207, 219, 231, 258, 317, 333, 350, 365, 399, 415, 434, 456, 476, 484, 501, 509, 517, 525, 554], [188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 208, 220, 232, 259, 318, 334, 351, 366, 400, 416, 435, 457, 477, 485, 502, 510, 518, 526, 555], [289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 319, 335, 352, 367, 401, 417, 436, 458, 478, 486, 503, 511, 519, 527, 556]
		],[
			[19, 20, 21, 22, 23, 0, 0, 0, 0], [24, 25, 26, 27, 28, 0, 0, 0, 0], [31, 32, 33, 34, 35, 36, 37, 38, 0], [29, 39, 40, 41, 42, 43, 44, 45, 47, 46, 341, 389, 406, 441, 459], [51, 52, 53, 48, 0, 0, 0, 0, 0], [243, 244, 245, 0, 0, 0, 0, 0, 0], [277, 285, 0, 0, 0, 0, 0, 0, 0]
		],[
			[270, 270, 0, 0, 0, 0, 0, 0, 0], [271, 271, 0, 0, 0, 0, 0, 0, 0], [272, 272, 0, 0, 0, 0, 0, 0, 0], [273, 273, 0, 0, 0, 0, 0, 0, 0], [274, 274, 0, 0, 0, 0, 0, 0, 0], [275, 275, 0, 0, 0, 0, 0, 0, 0], [276, 276, 0, 0, 0, 0, 0, 0, 0], [307, 307, 0, 0, 0, 0, 0, 0, 0]
		],[
			[19, 84, 143, 209, 323, 418, 20, 85, 144, 210, 324, 419, 21, 86, 145, 211, 325, 420, 22, 87, 146, 212, 326, 421, 23, 88, 147, 213, 327, 422], [24, 89, 148, 221, 336, 0, 25, 90, 149, 222, 337, 0, 26, 91, 150, 223, 338, 0, 27, 92, 151, 224, 339, 0, 28, 93, 152, 225, 340, 0], [31, 96, 161, 260, 369, 0, 32, 97, 162, 261, 370, 0, 33, 98, 163, 262, 371, 0, 34, 99, 164, 263, 372, 0, 35, 100, 165, 264, 373, 0, 36, 101, 166, 265, 374, 0, 37, 102, 167, 266, 375, 0, 38, 103, 168, 267, 376, 0], [39, 104, 169, 237, 353, 0, 40, 105, 170, 242, 354, 0, 41, 106, 171, 240, 355, 0, 42, 107, 172, 268, 0, 0, 43, 108, 173, 269, 356, 0, 44, 109, 174, 238, 357, 0, 45, 110, 175, 249, 0, 0, 47, 111, 176, 239, 358, 0, 46, 130, 177, 241, 359, 0, 341, 342, 343, 344, 368, 0, 389, 390, 391, 392, 393, 0, 406, 407, 408, 409, 0, 0, 459, 460, 461, 462, 463, 0], [385, 386, 387, 388, 0, 0, 0, 0, 0], [243, 244, 245, 246, 247, 248, 250, 251, 252, 320, 321, 322], [277, 285, 377, 279, 287, 379, 281, 308, 381, 283, 310, 0]
		]
	], 
	Mc = 0, Nc = 1, Oc = 2, Pc = 3, Qc = 4, Rc = 5, Sc = 6, 
	AT_MIN_INDEX = 10, AT_MAX_INDEX = 11, Vc = 12, AGI_MIN_INDEX = 14, AGI_MAX_INDEX = 15, RANGE_INDEX = 16, 
	Zc = 19, $c = 34, 
	ad = 35, bd = 36, cd = 37, dd = 39, ed = 40, fd = 44, hd = 7, t = 8, id = 9, jd = 10, kd = 11, ld = 1, md = 2, nd = 3, od = 4, 
	pd = 5, qd = 6, rd = 7, sd = 8, td = 9, ud = 10, vd = 11, wd = 12, xd = 37, yd = 13, zd = 14, Ad = 15, Bd = 16, Cd = 17, Dd = 18, 
	Ed = 19, Fd = 20, Gd = 21, Hd = 22, Id = 23, Jd = 24, Kd = 25, Ld = 26, Md = 27, Nd = 28, Od = 29, Pd = 32, Qd = 33, Rd = 34, 
	Sd = 35, Td = 36, Ud = 38, Vd = 39, Wd = 40, Xd = 41, Yd = 42, Zd = 43, $d = 44, ae = 45, be = 46, ce = 47, de = 48, ee = 49, 
	ITEMS = Array(558);

defineItems();

var fe = 0,
	ge = 0,
	he = "";
	
window.GameSave = ie;

function ie(a) {
	return 0 == a.length ? "" : he
}

var je = 0,
	ke = 0,
	le = "";

window.GameLoad = gameLoad;
function gameLoad(a) {
	if (0 != a.length)
		return le = a,
		0;
	if (0 == a.length) {
		if (0 == le.length)
			return -1;
		l = sb = nb = h = mb = f = 0;
		tb = 3;
		ub = !1;
		for (a = 0; 4 > a; a++)
			fc[a] = 0;
		Jb = 0;
		v.j();
		ne.j();
		oe.j();
		pe.j();
		qe.j();
		je = re(le, 0);
		0 < je ? ke = 50 : he = se(0);
		le = "";
		te()
	}
	return -1
}

window.AutoSave = autoSave;
function autoSave(a) {
	if (0 == a.length || 0 == fe)
		return "";
	fe = 0;
	ge = 50;
	return ie("0")
}

function w(a, b) {
	return ITEMS[a].length <= b ? 0 : b == Sc || b == Zc || b == fd ? ITEMS[a][b] >>> 0 : ITEMS[a][b]
}

var we = !1,
	xe = !1;

function x(a, b) {
	xe = we = !1;
	w(Dc[a], hd) == b && (we = !0);
	w(Ec[a], hd) == b && (xe = !0);
	return we || xe ? !0 : !1
}

function y(a, b) {
	var c = 0;
	we && (c += w(Dc[a], b));
	xe && (c += w(Ec[a], b));
	return c
}
var ye = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.*".split("");

function se(a) {
	var b, c, d = "", e = new Int32Array(512);
	b = 0;
	e[b++] = 1;
	e[b++] = 0;
	e[b++] = 0;
	e[b++] = floor(A(64));
	e[b++] = floor(A(64));
	for (c = 0; 8 > c; c++)
		e[b++] = Ka[c];
	if (0 == a)
		e[b++] = h >> 6 & 63,
		e[b++] = h >> 0 & 63;
	e[b++] = PLAYER_LEVEL[0] >> 6 & 63;
	e[b++] = PLAYER_LEVEL[0] >> 0 & 63;
	if (1 == a)
		e[b++] = $b[0];
	for (c = 0; 4 > c; c++)
		e[b++] = ac[c] >> 6 & 63,
		e[b++] = ac[c] >> 0 & 63;
	if (0 == a)
		e[b++] = EXP >> 18 & 63,
		e[b++] = EXP >> 12 & 63,
		e[b++] = EXP >> 6 & 63,
		e[b++] = EXP >> 0 & 63,
		e[b++] = MONEY >> 18 & 63,
		e[b++] = MONEY >> 12 & 63,
		e[b++] = MONEY >> 6 & 63,
		e[b++] = MONEY >> 0 & 63;
	for (c = 0; 4 > c; c++)
		e[b++] = ec[c] >> 0 & 63;
	if (0 == a)
		for (c = 0; 4 > c; c++)
			e[b++] = p[c] >> 12 & 63,
			e[b++] = p[c] >> 6 & 63,
			e[b++] = p[c] >> 0 & 63;
	for (c = 0; 4 > c; c++)
		e[b++] = LIFE_LEVELS[c] >> 6 & 63,
		e[b++] = LIFE_LEVELS[c] >> 0 & 63,
		e[b++] = STR_LEVELS[c] >> 6 & 63,
		e[b++] = STR_LEVELS[c] >> 0 & 63,
		e[b++] = DEX_LEVELS[c] >> 6 & 63,
		e[b++] = DEX_LEVELS[c] >> 0 & 63,
		e[b++] = MAG_LEVELS[c] >> 6 & 63,
		e[b++] = MAG_LEVELS[c] >> 0 & 63;
	for (c = s; c < s + 4; c++)
		e[b++] = q[c] >> 6 & 63,
		e[b++] = q[c] >> 0 & 63,
		e[b++] = Dc[c] >> 6 & 63,
		e[b++] = Dc[c] >> 0 & 63,
		e[b++] = Ec[c] >> 6 & 63,
		e[b++] = Ec[c] >> 0 & 63;
	if (0 == a) {
		for (c = Fc; c < Hc; c++)
			e[b++] = q[c] >> 6 & 63,
			e[b++] = q[c] >> 0 & 63,
			e[b++] = Dc[c] >> 6 & 63,
			e[b++] = Dc[c] >> 0 & 63,
			e[b++] = Ec[c] >> 6 & 63,
			e[b++] = Ec[c] >> 0 & 63;
		for (c = 0; 4 > c; c++)
			e[b++] = uc[c];
		e[b++] = vc;
		e[b++] = wc;
		e[b++] = xc;
		e[b++] = yc;
		e[b++] = zc;
		for (c = 0; 3 > c; c++)
			e[b++] = 0;
		for (c = 0; c < ze; c++) {
			d = Ae[c];
			for (a = 0; c < ze - 1 && d == Ae[c + 1]; c++)
				if (a++,
				31 == a) {
					c++;
					break
				}
			e[b++] = d;
			if (0 < a)
				e[b++] = 16 + a;
		}
	}
	for (c = a = 0; c < b; c++)
		a += e[c] * (floor(c / 7) + 1);
	e[1] = a >> 6 & 63;
	e[2] = a & 63;
	for (c = a = 0; c < b; c++)
		a += e[c] * ((c & 15) + 1);
	e[b++] = a >> 8 & 47;
	e[b++] = a >> 4 & 31;
	e[b++] = a >> 0 & 15;
	d = "" + ye[e[0]];
	d += ye[e[1]];
	d += ye[e[2]];
	a = e[2];
	for (c = 3; c < b; c++)
		d += ye[e[c] + a & 63],
		a += e[c] + c + e[1];
	return d
}

function re(a, b) {
	var c = 4 * b, d, e, g = new Int32Array(512), k = a.length, r = 0;
	if (0 == k)
		return 1;
	if (90 > k)
		r = 1;
	for (d = 0; d < k; d++) {
		var m = a.charAt(d);
		for (e = 0; e < ye.length; e++)
			if (ye[e] == m) {
				g[d] = e;
				break
			}
	}
	if (0 >= g[0])
		return 2;
	e = g[2];
	for (d = 3; d < k; d++)
		g[d] = g[d] - e & 63,
		e += g[d] + d + g[1];
	for (d = e = 0; d < k - 3; d++)
		e += g[d] * ((d & 15) + 1);
	if (g[d + 0] != (e >> 8 & 47) || g[d + 1] != (e >> 4 & 31) || g[d + 2] != (e >> 0 & 15))
		return 3;
	if (0 == b)
		for (d = 0; 8 > d; d++)
			if (g[d + 5] != Ka[d])
				return 4;
	d = 0;
	d++;
	d++;
	d++;
	d++;
	d++;
	d += 8;
	if (0 == r)
		h = (g[d++] << 6) + g[d++];
	PLAYER_LEVEL[b] = (g[d++] << 6) + g[d++];
	if (1 == r)
		$b[b] = g[d++];
	for (e = c; e < c + 4; e++)
		ac[e] = (g[d++] << 6) + g[d++];
	if (0 == r)
		EXP = (g[d++] << 18) + (g[d++] << 12) + (g[d++] << 6) + g[d++],
		MONEY = (g[d++] << 18) + (g[d++] << 12) + (g[d++] << 6) + g[d++];
	for (e = c; e < c + 4; e++)
		ec[e] = g[d++];
	if (0 == r)
		for (e = c; e < c + 4; e++)
			p[e] = (g[d++] << 12) + (g[d++] << 6) + g[d++];
	for (e = c; e < c + 4; e++)
		LIFE_LEVELS[e] = (g[d++] << 6) + g[d++],
		STR_LEVELS[e] = (g[d++] << 6) + g[d++],
		DEX_LEVELS[e] = (g[d++] << 6) + g[d++],
		MAG_LEVELS[e] = (g[d++] << 6) + g[d++];
	for (e = s + c; e < s + 4 + c; e++)
		q[e] = (g[d++] << 6) + g[d++],
		Dc[e] = (g[d++] << 6) + g[d++],
		Ec[e] = (g[d++] << 6) + g[d++];
	if (1 == r)
		return 0;
	for (e = Fc; e < Hc; e++)
		q[e] = (g[d++] << 6) + g[d++],
		Dc[e] = (g[d++] << 6) + g[d++],
		Ec[e] = (g[d++] << 6) + g[d++];
	for (e = 0; 4 > e; e++)
		uc[e] = g[d++];
	vc = g[d++];
	wc = g[d++];
	xc = g[d++];
	yc = g[d++];
	zc = g[d++];
	for (e = 0; 3 > e; e++)
		d++;
	for (e = 0; e < ze; e++)
		Ae[e] = 0;
	for (e = 0; d < k - 3; d++)
		if (16 > g[d])
			Ae[e++] = g[d];
		else
			for (c = 0; c < g[d] - 16; c++)
				Ae[e++] = g[d - 1];
	for (e = 0; e < ze; e++)
		0 != (Ae[e] & Be) && (Ae[e] |= Ce,
		0 < De[e][3] && (Ae[De[e][3]] |= Ce),
		0 < De[e][4] && (Ae[De[e][4]] |= Ce));
	return 0
}
da.fff = Ee;

function Ee(a) {
	var b, c = "", d = new Int32Array(16);
	b = 0;
	d[b++] = floor(A(64));
	d[b++] = floor(A(64));
	d[b++] = floor(A(64));
	d[b++] = floor(A(64));
	d[b++] = $b[0];
	d[b++] = $b[1];
	d[b++] = a;
	d[b++] = va >> 18 & 63;
	d[b++] = va >> 12 & 63;
	d[b++] = va >> 6 & 63;
	d[b++] = va & 63;
	var e = 0;
	for (a = 0; a < b; a++)
		e += d[a] * ((a & 15) + 1);
	d[b++] = e >> 8 & 47;
	d[b++] = e >> 4 & 31;
	d[b++] = e >> 0 & 15;
	c = "" + ye[d[0]];
	c += ye[d[1]];
	e = d[1];
	for (a = 2; a < b; a++)
		c += ye[d[a] + e & 63],
		e += d[a] + a + d[0];
	return c
}
var Fe = 0,
	Ge = 0,
	He = [],
	Ie = 0,
	Je = 0,
	Ke = 0;
da.fff = Le;

function Le() {
	var a, b, c;
	He = new Int32Array(ITEMS.length);
	for (a = 0; a < ITEMS.length; a++)
		for (b = He[a] = 0; b < ITEMS[a].length; b++)
			"number" == typeof ITEMS[a][b] && (He[a] += ITEMS[a][b] & 255);
	for (a = Ie = 0; a < Me.length; a++)
		for (b = 0; b < Me[a].length; b++)
			for (c = 0; c < Me[a][b].length; c++)
				Ie += Me[a][b][c];
	for (a = Je = 0; a < B.length; a++)
		for (b = 0; b < B[a].length; b++)
			Je += B[a][b] & 65535;
	for (c = Ke = 0; c < Lc.length; c++)
		for (a = 0; a < Lc[c].length; a++)
			for (b = 0; b < Lc[c][a].length; b++)
				Ke += Lc[c][a][b] * b & 65535
}

function Ne() {
	var a, b, c, d;
	if (0 > PLAYER_LEVEL[0] || 99 < PLAYER_LEVEL[0])
		C = null;
	if (0 > PLAYER_LEVEL[1] || 99 < PLAYER_LEVEL[1])
		C = null;
	if (0 > EXP || 9999999 < EXP)
		C = null;
	if (0 > MONEY || 9999999 < MONEY)
		C = null;
	for (a = 0; 8 > a; a++) {
		if (0 > ac[a] || 196 < ac[a])
			C = null;
		if (0 > LIFE_LEVELS[a] || 196 < LIFE_LEVELS[a])
			C = null;
		if (0 > STR_LEVELS[a] || 196 < STR_LEVELS[a])
			C = null;
		if (0 > DEX_LEVELS[a] || 196 < DEX_LEVELS[a])
			C = null;
		if (0 > MAG_LEVELS[a] || 196 < MAG_LEVELS[a])
			C = null
	}
	for (a = 0; 8 > a; a++)
		0 != q[s + a] && w(q[s + a], Rc) != ec[a] && (C = null);
	for (a = 0; 8 > a; a++) {
		b = w(q[s + a], Rc);
		c = w(q[s + a], $c);
		d = w(q[s + a], Vc);
		if (0 != Dc[s + a]) {
			9 != w(Dc[s + a], Rc) && (C = null);
			w(Dc[s + a], hd) == w(Ec[s + a], hd) && (C = null);
			var e = w(Dc[s + a], hd);
			!1 == Oe(e, b, c, d) && (C = null)
		}
		0 != Ec[s + a] && Ec[s + a] != Ic && (9 != w(Ec[s + a], Rc) && (C = null),
		e = w(Ec[s + a], hd),
		!1 == Oe(e, b, c, d) && (C = null))
	}
	if (0 == ga || 2 == ga) {
		for (a = c = 0; a < ze; a++)
			if (0 != (Ae[a] & Ce))
				for (d = Pe[a + 1] - Pe[a],
				b = 0; b < d; b++)
					c < B[Pe[a] + b][Qe] && (c = B[Pe[a] + b][Qe]),
					b += B[Pe[a] + b][Re];
		c + 10 + 2 < PLAYER_LEVEL[0] && (C = null)
	}
	if (0 == ga || 2 == ga) {
		b = 4753E3;
		a = 9999999;
		if (98 > PLAYER_LEVEL[0]) {
			b = 0;
			for (a = 1; a < PLAYER_LEVEL[0]; a++)
				b += 1E3 * a;
			a = b + 1E3 * a
		}
		if (EXP < b || a < EXP)
			C = null
	}
	for (a = d = 0; 8 > a; a++)
		d += ac[a];
	for (a = 0; 8 > a; a++)
		d += LIFE_LEVELS[a];
	for (a = 0; 8 > a; a++)
		d += STR_LEVELS[a];
	for (a = 0; 8 > a; a++)
		d += DEX_LEVELS[a];
	for (a = 0; 8 > a; a++)
		d += MAG_LEVELS[a];
	d != 8 * (PLAYER_LEVEL[0] - 1) + 8 * (PLAYER_LEVEL[1] - 1) && (C = null);
	d = Ge;
	d += (EXP | 1) * (d & 15 | 1);
	d += (MONEY | 1) * (d & 15 | 1);
	for (a = 0; 2 > a; a++)
		d += (PLAYER_LEVEL[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (ac[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (LIFE_LEVELS[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (STR_LEVELS[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (DEX_LEVELS[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (MAG_LEVELS[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (ec[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (p[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (fc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (kc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (lc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (mc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (nc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (oc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (pc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (qc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (rc[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (tc[a] | 1) * (d & 15 | 1);
	for (a = 0; a < Hc; a++)
		d += (q[a] | 1) * (d & 15 | 1);
	for (a = 0; a < Hc; a++)
		d += (Dc[a] | 1) * (d & 15 | 1);
	for (a = 0; a < Hc; a++)
		d += (Ec[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (Ac[a] | 1) * (d & 15 | 1);
	for (a = 0; 8 > a; a++)
		d += (Bc[a] | 1) * (d & 15 | 1);
	for (a = 0; a < ze; a++)
		d += (Ae[a] | 1) * (d & 15 | 1);
	d += (ga | 1) * (d & 15 | 1);
	d += (Nb[0] | 1) * (d & 15 | 1);
	d += (Nb[1] | 1) * (d & 15 | 1);
	d += ($b[0] | 1) * (d & 15 | 1);
	d += ($b[1] | 1) * (d & 15 | 1);
	d != (Fe ^ 16777215) && (C = null);
	if (1 > A(100))
		for (a = 0; a < ITEMS.length; a++) {
			for (b = d = 0; b < ITEMS[a].length; b++)
				"number" == typeof ITEMS[a][b] && (d += ITEMS[a][b] & 255);
			d != He[a] && (C = null)
		}
	if (1 > A(100)) {
		for (a = d = 0; a < Me.length; a++)
			for (b = 0; b < Me[a].length; b++)
				for (c = 0; c < Me[a][b].length; c++)
					d += Me[a][b][c];
		d != Ie && (C = null)
	}
	if (1 > A(100)) {
		for (a = d = 0; a < B.length; a++)
			for (b = 0; b < B[a].length; b++)
				d += B[a][b] & 65535;
		d != Je && (C = null)
	}
	if (1 > A(100)) {
		for (c = d = 0; c < Lc.length; c++)
			for (a = 0; a < Lc[c].length; a++)
				for (b = 0; b < Lc[c][a].length; b++)
					d += Lc[c][a][b] * b & 65535;
		d != Ke && (C = null)
	}
}

function te() {
	var a, b = floor(A(1024));
	Ge = b;
	b += (EXP | 1) * (b & 15 | 1);
	b += (MONEY | 1) * (b & 15 | 1);
	for (a = 0; 2 > a; a++)
		b += (PLAYER_LEVEL[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (ac[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (LIFE_LEVELS[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (STR_LEVELS[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (DEX_LEVELS[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (MAG_LEVELS[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (ec[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (p[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (fc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (kc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (lc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (mc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (nc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (oc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (pc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (qc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (rc[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (tc[a] | 1) * (b & 15 | 1);
	for (a = 0; a < Hc; a++)
		b += (q[a] | 1) * (b & 15 | 1);
	for (a = 0; a < Hc; a++)
		b += (Dc[a] | 1) * (b & 15 | 1);
	for (a = 0; a < Hc; a++)
		b += (Ec[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (Ac[a] | 1) * (b & 15 | 1);
	for (a = 0; 8 > a; a++)
		b += (Bc[a] | 1) * (b & 15 | 1);
	for (a = 0; a < ze; a++)
		b += (Ae[a] | 1) * (b & 15 | 1);
	b += (ga | 1) * (b & 15 | 1);
	b += (Nb[0] | 1) * (b & 15 | 1);
	b += (Nb[1] | 1) * (b & 15 | 1);
	b += ($b[0] | 1) * (b & 15 | 1);
	b += ($b[1] | 1) * (b & 15 | 1);
	Fe = b ^ 16777215
}
var Se = 0;

function Te(a, b, c, d, e, g, k, r, m, n, F, H, M) {
	if (0 == Se) {
		ha = null != a ? a : "";
		La = "0" == b ? !0 : !1;
		Ha = null != c ? c : "";
		ga = null != d ? ~~d : 0;
		ja = null != e ? e : "";
		oa = null != g ? g : "";
		Ia = null != k ? k : "";
		ua = null != r ? ~~r : 0;
		va = null != m ? ~~m : 0;
		ma = null != n ? n : "";
		na = null != F ? F : "";
		qa = null != H ? H : "";
		ra = null != M ? M : "";
		for (a = 0; 8 > a && a < ha.length; a++)
			for (b = ha.charAt(a),
			c = 0; c < ye.length; c++)
				if (ye[c] == b) {
					Ka[a] = c;
					break
				}
		Ue(Ve);
		We.width = ea;
		We.height = fa;
		for (a = 0; 513 > a; a++)
			Xe[a] = new Float32Array(2);
		for (a = 0; 512 > a; a++)
			b = 360 * a / 512 * PI / 180,
			Xe[a][0] = Math.cos(b),
			Xe[a][1] = Math.sin(b);
		Xe[a][0] = Xe[0][0];
		Xe[a][1] = Xe[0][1];
		for (a = 0; 256 > a; a++)
			Ze[a] = !1,
			$e[a] = !1,
			af[a] = !1,
			bf[a] = 0,
			cf[a] = 0;
		for (a = 0; 10 > a; a++)
			bf[48 + a] = 48 + a;
		for (a = 0; 9 > a; a++)
			cf[49 + a] = 33 + a;
		for (a = 0; 4 > a; a++)
			bf[37 + a] = 37 + a;
		for (a = 0; 4 > a; a++)
			cf[37 + a] = 37 + a;
		bf[13] = cf[13] = 13;
		bf[16] = cf[16] = 16;
		bf[17] = cf[17] = 17;
		bf[18] = cf[18] = 18;
		bf[32] = cf[32] = 32;
		bf[186] = 58;
		cf[186] = 42;
		bf[187] = 59;
		cf[187] = 43;
		bf[188] = 44;
		cf[188] = 60;
		bf[189] = 45;
		cf[189] = 61;
		bf[190] = 46;
		cf[190] = 62;
		bf[191] = 47;
		cf[191] = 63;
		bf[192] = 64;
		cf[192] = 96;
		bf[219] = 91;
		cf[219] = 123;
		bf[220] = 92;
		cf[220] = 124;
		bf[221] = 93;
		cf[221] = 125;
		bf[222] = 94;
		cf[222] = 126;
		bf[226] = 92;
		cf[226] = 95;
		bf[58] = 58;
		cf[58] = 42;
		bf[59] = 59;
		cf[59] = 43;
		bf[173] = 45;
		cf[173] = 61;
		bf[64] = 64;
		cf[64] = 96;
		bf[160] = 94;
		cf[160] = 126;
		for (a = 0; 1024 > a; a++)
			df[a] = a / 1024;
		for (a = 0; 1024 > a; a++)
			b = floor(1024 * Math.random()),
			c = df[a],
			df[a] = df[b],
			df[b] = c;
		ef = floor(1024 * Math.random()) & 1023;
		ff = floor(512 * Math.random()) | 1;
		for (a = 0; a < ea * fa; a++)
			C[a] = 0;
		for (a = 0; a < ea * fa * 4; a++)
			gf[a] = 255;
		D.j("font.gif", 8, 12);
		kf.j("font_s.gif", 5, 7);
		for (a = 0; 13 > a; a++)
			Pa[a] = new wa,
			Pa[a].j("gt" + a + ".gif");
		Qa.j("pl.gif");
		Ra.j("icon.gif");
		Ua.j("item.gif");
		Va.j("en.gif");
		Ya.j("next.gif");
		Za.j("mag.gif");
		$a.j("title.gif");
		cb.j("ef.gif");
		db.j("town.gif");
		fb.j("water.gif");
		gb.j("water2.gif");
		hb.j("tree.gif");
		ib.j("map.gif");
		jb.j("mt.gif");
		kb.j("map2.gif");
		lb.j("mt2.gif");
		lf() ? Se-- : Se++
	}
	if (1 == Se) {
		mf(D.N);
		mf(kf.N);
		for (a = 0; 13 > a; a++)
			mf(Pa[a]);
		mf(Qa);
		mf(Ra);
		mf(Ua);
		mf(Va);
		mf(Ya);
		mf(Za);
		mf($a);
		mf(cb);
		mf(db);
		mf(fb);
		mf(gb);
		mf(hb);
		mf(ib);
		mf(jb);
		mf(kb);
		mf(lb);
		0 != nf ? of(Te, pf()) : Se++
	}
	2 == Se && (v.j(),
	ne.j(),
	oe.j(),
	pe.j(),
	qe.j(),
	1 == ga && re(Ia, 1),
	re(Ha, 0),
	he = se(0),
	Le(),
	te(),
	qf(Ma, ea, fa),
	rf())
}
da.fff = sf;

function sf() {
	if (0 < tf)
		tf++;
	else {
		gameLoad("");
		autoSave("");
		for (var a = ea * fa - 1; 0 <= a; a--)
			C[a] = 0;
		9 >= f ? uf() : 49 >= f ? vf() : 59 >= f ? wf() : 60 <= f && xf();
		if (0 < ge)
			ge--,
			yf(D, 480, 247, "save OK", 16711680, 6684672);
		if (0 < ke)
			ke--,
			2 == je ? D.b(10, 10, "VERSION ERROR", 16711680, 6684672) : 3 == je ? D.b(10, 10, "DATA ERROR", 16711680, 6684672) : 4 == je && D.b(10, 10, "USER ERROR", 16711680, 6684672);
		if (1 == ca)
			D.b(0, 0, zf + Af, 16777215, 0),
			1 == ca && D.b(48, 0, Bf + "sl", 16777215, 0);
		Ne()
	}
}
da.fff = uf;

function uf() {
	var a;
	if (0 == f)
		if (v.j(),
		G.j(0),
		f++,
		1 == ga)
			f = 60;
		else {
			if (2 == ga || 3 == ga)
				f = 70
		}
	else if (1 == f)
		nb = 0,
		I.j(0) && (v.set(0, 20, I.o[20]),
		v.set(1, 28, I.o[28]),
		v.set(2, 36, I.o[36]),
		v.set(3, 44, I.o[44]),
		Cf(),
		G.j(1),
		f++);
	else if (2 == f) {
		v.move();
		Cf();
		I.b();
		v.b();
		J($a, 256, 100, 365, 121, 0, La ? 0 : 121, 365, 121, 16777215);
		var b = 100;
		for (a = s; a < Gc; a++)
			w(q[a], hd) == de && (b += w(q[a], t)),
			w(Dc[a], hd) == de && (b += w(Dc[a], t)),
			w(Ec[a], hd) == de && (b += w(Ec[a], t)),
			w(q[a], hd) == ee && (b += 1),
			w(Dc[a], hd) == ee && (b += 1),
			w(Ec[a], hd) == ee && (b += 1);
		b = K(b, 100, 300);
		100 == b ? yf(D, 256, 195, "NEW GAME", 16777215, 10053171) : yf(D, 256, 195, "               NEW GAME with the Crown", 16777215, 10053171);
		if (Df(100 == b ? 256 : 316, 195, 100 == b ? 128 : 248, 24)) {
			if (Ef) {
				Ne();
				tb = l = 3;
				for (a = 0; 4 > a; a++)
					yb[a] = ec[a],
					zb[a] = q[s + a],
					Ab[a] = Dc[s + a],
					Eb[a] = Ec[s + a],
					ec[a] = 0,
					q[s + a] = 0,
					Dc[s + a] = 0,
					Ec[s + a] = 0;
				f++;
				te();
				Cf()
			}
			100 == b ? L(192, 203, 320, 203, 11141120) : L(192, 203, 440, 203, 11141120)
		}
		0 != ec[0] && 0 != ec[1] && 0 != ec[2] && 0 != ec[3] && (yf(D, 256, 235, "LOAD GAME", 16777215, 10053171),
		Df(256, 235, 128, 24) && (Ef && (f = 5),
		L(192, 243, 320, 243, 11141120)));
		yf(D, 256, 275, "VS MODE", 16777215, 5066137);
		Df(256, 275, 128, 24) && (Ef && (location.pathname = La ? "/javagame/ranger/versus.html" : "/en/javagame/ranger/versus.html"),
		L(192, 283, 320, 283, 11141120));
		Ff()
	} else if (3 == f) {
		v.move();
		I.b();
		v.b();
		Gf(D, 256, 50, "Player's Class Selection", 204, 148, 73, 255, 100, 0, 0, 255, 16, 24);
		for (a = 0; 4 > a; a++)
			Df(160 + 64 * a, 140, 24, 24) && (Ef && (tb = l = a),
			Hf(160 + 64 * a, 140, 24, 24, 8388608)),
			If(160 + 64 * a, 140, 25, 25, 16777215),
			J(Qa, 160 + 64 * a, 140, 24, 24, 24 * ec[a], 0, 24, 24, 16777215);
		If(160 + 64 * l, 140, 25, 25, 16711680);
		Ne();
		for (a = 0; 8 > a; a++) {
			var b = 46 + 60 * a,
				c = CLASSES[a + 1],
				d = D;
			d.Q = -1;
			yf(d, b, 220, c, 13407305, 6553600);
			d.Q = 0;
			Df(46 + 60 * a, 240, 24, 24) && (Ef && (ec[l] = a + 1,
			q[s + l] = [3, 4, 5, 6, 58, 76, 188, 289][a],
			Dc[s + l] = 0,
			Ec[s + l] = 0),
			Hf(46 + 60 * a, 240, 24, 24, 8388608));
			If(46 + 60 * a, 240, 25, 25, 16777215);
			J(Qa, 46 + 60 * a, 240, 24, 24, 24 * (a + 1), 0, 24, 24, 16777215)
		}
		0 != ec[0] && 0 != ec[1] && 0 != ec[2] && 0 != ec[3] && (yf(D, 464, 300, "START", 16777215, 10053171),
		Df(464, 300, 128, 24) && (Ef && f++,
		L(416, 308, 512, 308, 11141120)));
		yf(D, 48, 300, "RETURN", 16777215, 10053171);
		if (Df(48, 300, 128, 24)) {
			if (Ef) {
				for (a = 0; 4 > a; a++)
					ec[a] = yb[a],
					q[s + a] = zb[a],
					Dc[s + a] = Ab[a],
					Ec[s + a] = Eb[a];
				f = 2
			}
			L(0, 308, 96, 308, 11141120)
		}
		te();
		Ff()
	} else if (4 == f) {
		Ne();
		b = 100;
		c = 0;
		for (a = s; a < Gc; a++)
			w(q[a], hd) == de && (b += w(q[a], t)),
			w(Dc[a], hd) == de && (b += w(Dc[a], t)),
			w(Ec[a], hd) == de && (b += w(Ec[a], t)),
			w(q[a], hd) == ee && (c = 1),
			w(Dc[a], hd) == ee && (c = 1),
			w(Ec[a], hd) == ee && (c = 1);
		b = K(b, 100, 300);
		h = 0;
		PLAYER_LEVEL[0] = 1;
		Nb[0] = 1;
		for (a = MONEY = EXP = $b[0] = 0; 4 > a; a++)
			ac[a] = 0,
			p[a] = 50,
			fc[a] = 0,
			LIFE_LEVELS[a] = 0,
			STR_LEVELS[a] = 0,
			DEX_LEVELS[a] = 0,
			MAG_LEVELS[a] = 0,
			uc[a] = 1;
		yc = xc = wc = vc = 0;
		zc = 1;
		for (a = Fc; a < Hc; a++)
			q[a] = 0,
			Dc[a] = 0,
			Ec[a] = 0;
		for (a = 0; a < ze; a++)
			Ae[a] = 0;
		Ae[0] = Be | Ce;
		Ae[1] = Ce;
		for (a = 0; 4 > a; a++)
			v.step[a] = 0;
		300 <= b ? q[Fc + 0] = 560 : 250 <= b ? q[Fc + 0] = 559 : 200 <= b ? q[Fc + 0] = 558 : 150 <= b && (q[Fc + 0] = 557);
		1 == c && 100 == b && (q[Fc + 0] = 561);
		1 == c && 100 != b && (q[Fc + 1] = 561);
		nb = qe.t = 0;
		f = 6;
		te();
		Ff()
	} else
		5 == f ? (nb = 0,
		f = 6) : 6 == f && (qe.b(),
		Jf(2))
}
da.fff = vf;

function vf() {
	var a, b, c, d;
	a = "";
	if (10 == f) {
		if (I.j(h)) {
			v.set(0, 0, I.o[0]);
			v.set(1, 1, I.o[1]);
			v.set(2, 2, I.o[2]);
			v.set(3, 3, I.o[3]);
			G.j(1);
			var e = floor(N(12, 28)),
				g = floor(N(28, 44)),
				k = floor(N(44, 60));
			Kb = 100;
			for (b = s; b < Gc; b++)
				w(q[b], hd) == de && (Kb += w(q[b], t)),
				w(Dc[b], hd) == de && (Kb += w(Dc[b], t)),
				w(Ec[b], hd) == de && (Kb += w(Ec[b], t));
			Kb = K(Kb, 100, 300);
			var r = floor((Me[h][nb].length - 2) / 3);
			for (a = 0; a < r; a++) {
				var m = Me[h][nb][3 * a + 2],
					n = Me[h][nb][3 * a + 3],
					F = Me[h][nb][3 * a + 4],
					F = floor(F * Kb / 100);
				for (b = 0; b < F; b++) {
					if (m == O)
						c = floor(N(12, 60)),
						d = Kf(I.o[c], I.I[c]);
					else if (m == P)
						c = floor(N(12, 28)),
						d = Kf(I.o[c], I.I[c]);
					else if (m == Q)
						c = floor(N(28, 44)),
						d = Kf(I.o[c], I.I[c]);
					else if (m == R)
						c = floor(N(44, 60)),
						d = Kf(I.o[c], I.I[c]);
					else if (m == S)
						c = floor(N(12, 60)),
						d = floor(N(I.$[c] + 2, I.I[c]));
					else if (m == Lf)
						c = floor(N(12, 60)),
						d = floor(N(I.$[c] + 2, I.hb[c]));
					else if (m == T && 0 < I.ab)
						d = floor(A(I.ab)),
						c = I.gb[d] & 63,
						d = floor(I.gb[d] / 64);
					else if (m == Mf)
						c = e,
						d = Kf(I.o[c], I.I[c]);
					else if (m == Nf)
						c = g,
						d = Kf(I.o[c], I.I[c]);
					else if (m == Of)
						c = k,
						d = Kf(I.o[c], I.I[c]);
					else if (m == Pf)
						c = floor(N(12, 60)),
						d = I.$[c];
					else if (m == Qf)
						c = floor(N(12, 28)),
						d = I.$[c];
					else if (m == Rf)
						c = floor(N(28, 44)),
						d = I.$[c];
					else if (m == Sf)
						c = floor(N(44, 60)),
						d = I.$[c];
					else
						continue;
					G.add(c, d, n)
				}
			}
			oe.index = 0;
			ne.index = 0;
			pe.index = 0;
			mb = sb = Ib = Hb = Gb = Fb = pe.J = 0;
			f++
		}
	} else if (11 == f) {
		Tf(0);
		Jf(0);
		r = 30;
		a = "";
		if (0 == nb) {
			r = 110;
			a = Uf[h];
		} else if (nb + 1 == Me[h].length) {
			r = 110;
			a = "BOSS AREA";
		}
		Vf(255 - floor(255 * (30 > mb ? mb : 30) / 30));
		if (110 == r) {
			b = 255;
			if (30 > mb)
				b = floor(255 * mb / 30)
			else
				80 < mb && (b = 255 - floor(255 * (mb - 80) / 30));
			Gf(D, 256, 128, a, 255, 255, 255, b, 64, 64, 64, b, 16, 24),
			c = -1024 + floor(512 * mb / 30),
			L(c, 112, c + 1024, 112, 8421504),
			c = 512 - floor(512 * mb / 30),
			L(c, 141, c + 1024, 141, 8421504)
		};
		mb++;
		if (mb == r) {
			mb = 0;
			f++;
		};
	} else if (12 == f) {
		Tf(0),
		Jf(0),
		0 == p[0] + p[1] + p[2] + p[3] ? (mb = 0, f = 30) : 0 != sb ? f++ : Wf(364, 4, 56, 20) ? (Ef ? f = 20 : Ze[32] && (f = 20),
		D.b(368, 8, "Option", 16711680, 0)) : Ze[32] ? f = 20 : Wf(428, 4, 80, 20) && (Ef && (f = 6),
		D.b(432, 8, "World Map", 16711680, 0));
	} else if (13 == f) {
		Tf(0),
		Jf(0),
		Vf(floor(255 * mb / 30)),
		mb++,
		30 == mb && (
			1 == sb ? (sb = 0, nb++, mb = 0, f = 10) : 2 == sb && (mb = nb = sb = 0,
			Ne(),
			Ae[h] |= Be,
			0 < De[h][3] && (Ae[De[h][3]] |= Ce),
			0 < De[h][4] && (Ae[De[h][4]] |= Ce),
			te(),
			f = 6,
			-1 == De[h][3] && (f = 40)),
			he = se(0),
			fe = 1
		);
	} else if (20 == f) {
		Tf(1);
		Jf(1);
		r = 12;
		0 != h && 20 != h && 47 != h && 70 != h && 77 != h || 1 != nb || (r = 52);
		Wf(364, 4, 56, 20) ? (Ef ? f = r : Ze[32] && (f = r),
		D.b(368, 8, "Option", 16711680, 0)) : Ze[32] && (f = r);
		Xf = 1;
		V(128, 42, 256, 151, 3425907507);
		Xf = 0;
		yf(D, 256, 58, "OPTION", 16777215, 0);
		for (a = 0; 4 > a; a++)
			J(Qa, 256 + 32 * a, 78, 24, 24, 24 * w(q[s + a], Rc), 0, 24, 24, 16777215),
			Yf(256 + 32 * a - 12, 66, 24 * w(q[s + a], Rc), w(q[s + a], Sc));
		yf(D, 180, 98, "Auto move", 16777215, 0);
		b = ["OFF", "ON"];
		for (a = 0; 4 > a; a++)
			yf(D, 256 + 32 * a, 98, b[uc[a]], 16777215, 0),
			Df(256 + 32 * a, 98, 32, 13) && (yf(D, 256 + 32 * a, 98, b[uc[a]], 16711680, 0),
			Ef && (uc[a] = 1 - uc[a]));
		D.b(128, 108, "  Move of dying: " + b[vc], 16777215, 0);
		Wf(128, 108, 256, 13) && (D.b(128, 108, "  Move of dying: " + b[vc], 16711680, 0),
		vc = Zf(vc + $f, 0, 1));
		a = ["PLAYER&ENEMY", "PLAYER", "ENEMY", "OFF"];
		D.b(128, 121, "  Damage Effect: " + a[wc], 16777215, 0);
		Wf(128, 121, 256, 13) && (D.b(128, 121, "  Damage Effect: " + a[wc], 16711680, 0),
		wc = Zf(wc + $f, 0, 3));
		a = ["OFF", "PLAYER", "ENEMY", "PLAYER&ENEMY"];
		D.b(128, 134, "  LP Bar       : " + a[xc], 16777215, 0);
		Wf(128, 134, 256, 13) && (D.b(128, 134, "  LP Bar       : " + a[xc], 16711680, 0),
		xc = Zf(xc + $f, 0, 3));
		a = ["SQUARE", "TRIANGLE", "SHADOW", "OFF"];
		D.b(128, 147, "  PL Symbol    : " + a[yc], 16777215, 0);
		Wf(128, 147, 256, 13) && (D.b(128, 147, "  PL Symbol    : " + a[yc], 16711680, 0),
		yc = Zf(yc + $f, 0, 3));
		D.b(128, 160, "  Drag DeadBody: " + b[zc], 16777215, 0);
		Wf(128, 160, 256, 13) && (D.b(128, 160, "  Drag DeadBody: " + b[zc], 16711680, 0),
		zc = Zf(zc + $f, 0, 1));
		yf(D, 256, 182, "Space Key: open & close", 12632256, 0);
		Df(256, 182, 256, 13) && (yf(D, 256, 182, "Space Key: open & close", 16711680, 0),
		0 != $f && (f = r))
	} else if (30 == f) {
		if (Tf(0),
		Jf(0),
		100 > mb && mb++,
		b = floor(255 * mb / 100),
		Gf(D, 256, 128, "GAME OVER", 100, 20, 10, b, 200, 0, 0, b, 16, 24),
		100 == mb && Ef) {
			Ne();
			for (a = 0; 4 > a; a++)
				0 == p[a] && (p[a] = 1);
			te();
			f = 1
		}
	} else if (40 == f) {
		Gf(D, 256, 112, "Congratulation", 204, 148, 73, 255, 100, 0, 0, 255, 16, 24);
		Gf(D, 256, 144, "Game Clear", 204, 148, 73, 255, 100, 0, 0, 255, 16, 24);
		yf(D, 256, 256, "(C) 2008-2017 DAN-BALL", 13407305, 6553600);
		for (a = 0; 4 > a; a++) {
			c = 166 + 60 * a - v.a[a][2].x;
			d = 224 - v.a[a][2].y;
			for (b = 0; 21 > b; b++)
				v.a[a][b].x += c,
				v.a[a][b].y += d;
			ag(Pa[12], 166 + 60 * a - 12, 233, 24, 8, 0, 0, 24, 8)
		}
		v.b();
		if (Ef) {
			Ne();
			for (a = 0; 4 > a; a++)
				0 == p[a] && (p[a] = 1);
			te();
			f = 1
		}
	}
}
da.fff = wf;

function wf() {
	var a, b, c, d, e = "";
	if (50 == f) {
		I.j(h) && (v.set(0, 16, I.o[0]),
		v.set(1, 19, I.o[1]),
		v.set(2, 22, I.o[2]),
		v.set(3, 25, I.o[3]),
		G.j(1),
		oe.index = 0,
		ne.index = 0,
		pe.index = 0,
		mb = sb = Ib = Hb = Gb = Fb = pe.J = 0,
		f++);
	} 
	else if (51 == f) {
		Tf(0),
		Jf(0),
		e = "",
		0 == h ? e = "TOWN" : 20 == h ? e = "VILLAGE" : 47 == h ? e = "RESORT" : 70 == h ? e = "Forget Tree" : 77 == h && (e = "ISLAND"),
		Vf(255 - floor(255 * (30 > mb ? mb : 30) / 30)),
		c = 255,
		30 > mb ? c = floor(255 * mb / 30) : 80 < mb && (c = 255 - floor(255 * (mb - 80) / 30)),
		Gf(D, 256, 128, e, 255, 255, 255, c, 64, 64, 64, c, 16, 24),
		b = -1024 + floor(512 * mb / 30),
		L(b, 112, b + 1024, 112, 8421504),
		b = 512 - floor(512 * mb / 30),
		L(b, 141, b + 1024, 141, 8421504),
		mb++,
		110 == mb && (mb = 0,
		f++);
	} 
	// town?
	else if (52 == f) {
		if (Tf(0),
		Jf(0),
		0 != sb)
			f = 59;
		else if (Wf(364, 4, 56, 20))
			Ef ? f = 20 : Ze[32] && (f = 20),
			D.b(368, 8, "Option", 16711680, 0);
		else if (Ze[32])
			f = 20;
		else if (Wf(428, 4, 80, 20))
			Ef && (f = 6),
			D.b(432, 8, "World Map", 16711680, 0);
		else if (70 == h)
			if (Df(256, 128, 40, 24) && (yf(D, 256, 128, "FORGET", 16711680, 1054740),
			Ef && (f = 55,
			xb = wb = vb = 0)),
			Df(256, 160, 40, 24)) {
				var g = 0;
				for (a = 0; 4 > a; a++)
					g += kc[a] - p[a];
				yf(D, 256, 160, "INN", 16711680, 1054740);
				D.b(280, 154, "charge of " + g, 16711680, 1054740);
				if (g <= MONEY && Ef) {
					Ne();
					for (a = 0; 4 > a; a++)
						p[a] != kc[a] && ne.add(v.a[a][0].x, v.a[a][0].y, 0, kc[a] - p[a], 65280),
						p[a] = kc[a];
					MONEY -= g;
					te()
				}
			} else
				Df(256, 184, 48, 24) && (yf(D, 256, 184, "BOOK", 16711680, 1054740),
				Ef && (f = 54,
				xb = wb = vb = 0));
		else if (Df(400, 168, 40, 24)) {
			for (a = g = 0; 4 > a; a++)
				g += kc[a] - p[a];
			yf(D, 400, 168, "INN", 16711680, 13800762);
			yf(D, 400, 208, "charge of " + g, 16777215, 3219229);
			if (g <= MONEY && Ef) {
				Ne();
				for (a = 0; 4 > a; a++)
					p[a] != kc[a] && ne.add(v.a[a][0].x, v.a[a][0].y, 0, kc[a] - p[a], 65280),
					p[a] = kc[a];
				MONEY -= g;
				te()
			}
		} else
			Df(40, 152, 72, 24) ? (0 == h ? yf(D, 40, 152, "SHOP", 16711680, 13800762) : 20 == h ? yf(D, 40, 152, " COMPO SHOP", 16711680, 13800762) : 47 == h ? yf(D, 40, 152, " JUNK SHOP", 16711680, 13800762) : 77 == h && yf(D, 40, 152, " COMPO SHOP", 16711680, 13800762),
			Ef && (f = 53,
			xb = wb = vb = 0)) : Df(40, 184, 48, 24) && (yf(D, 40, 184, "BOOK", 16711680, 13800762),
			Ef && (f = 54,
			xb = wb = vb = 0));
	} 
	// shop?
	else if (53 == f) {
		Tf(0);
		e = sb = 0;
		0 == h ? e = 0 : 20 == h ? e = 1 : 47 == h ? e = 2 : 77 == h && (e = 3);
		var k = [[3, 4, 5, 6, 12, 14, 15, 18], [7, 8, 9, 10, 11, 16, 17], [3, 4, 5, 6, 12, 14, 15, 18], [7, 8, 9, 10, 11, 16, 17]];
		c = 80;
		d = 28;
		Xf = 1;
		V(c - 4, d - 4, 243, 168, 2147483648);
		Xf = 0;
		bg(c + 0, d + 0, 236, 161, 16777215);
		Wf(c + 8, d + 4, 16 * k[e].length, 12) && (b = floor((cg - (c + 8)) / 16),
		Ef && (vb = b,
		wb = K(wb, 0, floor(Lc[e][vb].length / 3) - 1)),
		V(c + 8 + 16 * b, d + 4, 12, 12, 10027008));
		dg = 2;
		for (a = 0; a < k[e].length; a++)
			eg(Ra, c + 8 + 16 * a, d + 4, 12, 12, 12 * k[e][a], 0, 12, 12, 16777215);
		dg = 0;
		bg(c + 8 + 16 * vb - 1, d + 4 - 1, 14, 14, 10027008);
		L(c + 0, d + 20 - 1, c + 235, d + 20 - 1, 16777215);
		Wf(c + 120, d + 24, 84, 84) && (b = floor((cg - (c + 120)) / 28),
		a = floor((fg - (d + 24)) / 28),
		Ef && (xb = 3 * a + b),
		V(c + 120 + 28 * b, d + 24 + 28 * a, 24, 24, 10027008));
		b = (3 * wb + xb) % Lc[e][vb].length;
		k = Lc[e][vb][b];
		g = 1;
		for (a = 0; a < ze; a++)
			0 < (Ae[a] & Be) && g < gg[a] && (g = gg[a]);
		0 == h && g <= b && (k = 0);
		hg(c + 8, d + 24, ITEMS[k][Mc] + " " + (ITEMS[k][Nc] ? ITEMS[k][Nc] : ""), -1, 2631720, -2);
		hg(c + 8, d + 24, ITEMS[k][Mc] + " " + (ITEMS[k][Nc] ? ITEMS[k][Nc] : ""), 16777215, -1, -2);
		a = w(k, Rc);
		if (9 == a) {
			D.b(c + 8, d + 40, "Compo Item", -1, 5263440),
			hg(c + 8, d + 56, ITEMS[k][jd], -1, 2631720, -2),
			hg(c + 8, d + 56, ITEMS[k][jd], 16777215, -1, -2),
			hg(c + 8, d + 68, ITEMS[k][kd], -1, 2631720, -2),
			hg(c + 8, d + 68, ITEMS[k][kd], 16777215, -1, -2);
		} else {
			D.b(c + 8, d + 40, "AT " + ITEMS[k][AT_MIN_INDEX] + "-" + ITEMS[k][AT_MAX_INDEX], 16777215, 0);
			D.b(c + 8, d + 52, "AGI " + ITEMS[k][AGI_MIN_INDEX] + "-" + ITEMS[k][AGI_MAX_INDEX], 16777215, 0);
			D.b(c + 8, d + 64, "RANGE " + ITEMS[k][RANGE_INDEX], 16777215, 0);
			var r = w(k, $c),
				m = w(k, ad),
				n = ig(w(k, bd), 0),
				F = w(k, dd),
				H = w(k, ed);
			D.b(c + 8, d + 80, "TYPE " + "physical fire ice thunder poison freeze".split(" ")[r], 16777215, 0);
			D.b(c + 8, d + 92, "AT " + F + "-" + H, 16777215, 0);
			if (6 == a) {
				D.b(c + 8, d + 104, "$$ " + n, 16777215, 0);
			} else {
				D.b(c + 8, d + 104, "MP " + n, 16777215, 0);
			}
			if (2 == r) {
				D.b(c + 8, d + 116, "SLOW " + m + "%", 16777215, 0)
			} else if (4 == r) {
				D.b(c + 8, d + 116, "TIME " + m / 50 + "s", 16777215, 0)
			} else if (5 == r) {
				D.b(c + 8, d + 116, "TIME " + m / 50 + "s", 16777215, 0)
			}
		}
		for (a = 0; 9 > a; a++) {
			r = (3 * wb + a) % Lc[e][vb].length;
			(0 == h) && (g <= r) || (
				dg = 2,
				eg(Ua, c + 120 + a % 3 * 28, d + 24 + 28 * floor(a / 3), 24, 24, 24 * w(Lc[e][vb][r], Qc), 0, 24, 24, w(Lc[e][vb][r], Sc)),
				dg = 0,
				ITEMS[Lc[e][vb][r]][Nc] && kf.b(c + 120 + a % 3 * 28 + 19, d + 24 + 28 * floor(a / 3) + 17, "" + ITEMS[Lc[e][vb][r]][Nc], 16777215, -1)
			);
		}
		bg(c + 120 + xb % 3 * 28, d + 24 + 28 * floor(xb / 3), 24, 24, 10027008);
		g = w(k, Oc);
		2 == e && 1 == b && (g *= 10);
		if (Wf(c + 176 - 56, d + 120 - 10, 108, 20)) {
			if (0 != k && g <= MONEY && Ef) {
				Ne();
				a = 0;
				if (0 == e || 2 == e && 0 == b)
					a = Ic;
				pe.add(40, 200, k, 0, a);
				MONEY -= g;
				te()
			}
			V(c + 176 - 56, d + 120 - 10, 108, 20, 10027008)
		}
		yf(D, c + 176, d + 120, "" + g + "$ BUY", 16777215, 0);
		bg(c + 176 - 56, d + 120 - 10, 108, 20, 10027008);
		k = 16777215;
		Wf(c + 216 - 12, d + 36 - 12, 24, 24) && (Ef && (wb = Zf(wb - 1, 0, floor(Lc[e][vb].length / 3) - 1)),
		k = 10027008);
		bg(c + 216 - 12, d + 36 - 12, 24, 24, 16777215);
		V(c + 216 - 1, d + 36 - 8, 2, 2, k);
		V(c + 216 - 2, d + 36 - 6, 4, 2, k);
		V(c + 216 - 3, d + 36 - 4, 6, 2, k);
		V(c + 216 - 4, d + 36 - 2, 8, 2, k);
		V(c + 216 - 5, d + 36 + 0, 10, 2, k);
		V(c + 216 - 6, d + 36 + 2, 12, 2, k);
		V(c + 216 - 7, d + 36 + 4, 14, 2, k);
		V(c + 216 - 8, d + 36 + 6, 16, 2, k);
		k = 16777215;
		Wf(c + 216 - 12, d + 92 - 12, 24, 24) && (Ef && (wb = Zf(wb + 1, 0, floor(Lc[e][vb].length / 3) - 1)),
		k = 10027008);
		bg(c + 216 - 12, d + 92 - 12, 24, 24, 16777215);
		V(c + 216 - 8, d + 92 - 8, 16, 2, k);
		V(c + 216 - 7, d + 92 - 6, 14, 2, k);
		V(c + 216 - 6, d + 92 - 4, 12, 2, k);
		V(c + 216 - 5, d + 92 - 2, 10, 2, k);
		V(c + 216 - 4, d + 92 + 0, 8, 2, k);
		V(c + 216 - 3, d + 92 + 2, 6, 2, k);
		V(c + 216 - 2, d + 92 + 4, 4, 2, k);
		V(c + 216 - 1, d + 92 + 6, 2, 2, k);
		L(c + 0, d + 136 - 1, c + 235, d + 136 - 1, 16777215);
		L(c + 120, d + 136 - 1, c + 120, d + 160, 16777215);
		
		Wf(c + 0 + 1, d + 136, 120, 24) && 0 != q[Gc] 
			? (g = floor(w(q[Gc], Oc) / 8),
				Ef && (Ne(),
					pe.add(40, 200, 1, g, 0),
					q[Gc] = 0,
					Dc[Gc] = 0,
					Ec[Gc] = 0,
					te()),
				V(c + 0 + 1, d + 136, 119, 24, 10027008),
				yf(D, c + 60, d + 148, "" + g + "$ SELL", 16777215, 0)
			)
			: Wf(c + 0 + 1, d + 136, 120, 24) && 0 == q[Gc] && 0 == Jb
				? (Ef && (Jb = 1),
					V(c + 0 + 1, d + 136, 119, 24, 10027008),
					yf(D, c + 60, d + 148, "CLICK TO SELL", 16777215, 0)
				)
				: Wf(c + 0 + 1, d + 136, 120, 24) && 0 == q[Gc] && 1 == Jb
					? (Ef && (Jb = 0),
						V(c + 0 + 1, d + 136, 119, 24, 10027008),
						yf(D, c + 60, d + 148, "CANCEL", 16777215, 0)
					)
					: 1 == Jb 
						? yf(D, c + 60, d + 148, "CANCEL", 16777215, 0) 
						: yf(D, c + 60, d + 148, "DRAG TO SELL", 16777215, 0);
		Wf(c + 120 + 1, d + 136, 114, 24) && (Ef && (Jb = 0,
			f = 52),
			V(c + 120 + 1, d + 136, 114, 24, 10027008)
		);
		yf(D, c + 176, d + 148, "EXIT", 16777215, 0);
		Jf(1)
	} 
	// book store?
	else if (54 == f) {
		Tf(0);
		sb = 0;
		k = 10;
		c = 80;
		d = 28;
		Xf = 1;
		70 == h ? V(c - 4, d - 4, 328, 168, 3422552064) : V(c - 4, d - 4, 328, 168, 2147483648);
		Xf = 0;
		bg(c + 0, d + 0, 321, 161, 16777215);
		L(c + 160, d + 0, c + 160, d + 160, 16777215);
		e = "WORLD MAP " + (100 > vb ? " " : "");
		e += "" + floor(vb / k + 1) + "/" + floor((jg.length - 1) / k + 1);
		D.b(c + 20, d + 4, e, -1, 32768);
		Wf(c + 8, d + 16, 144, 12 * k) && (a = floor((fg - (d + 16)) / 12),
		Ef && (wb = a),
		V(c + 8, d + 16 + 12 * a, 144, 12, 10027008));
		for (a = 0; a < k; a++)
			e = jg[vb + a],
			0 != e && (0 < (Ae[e] & Be) ? D.b(c + 8, d + 16 + 12 * a, Uf[e], 16777215, 0) : D.b(c + 8, d + 16 + 12 * a, "???", 16777215, 0));
		e = jg[vb + wb];
		0 != e && (0 < (Ae[e] & Be) ? D.b(c + 8, d + 16 + 12 * wb, Uf[e], 16711680, 0) : D.b(c + 8, d + 16 + 12 * wb, "???", 16711680, 0));
		L(c + 0, d + 140, c + 160, d + 140, 16777215);
		Wf(c + 8, d + 144 - 2, 48, 17) && (Ef && (vb = Zf(floor(vb / k) - 1, 0, floor((jg.length - 1) / k)) * k),
		V(c + 8, d + 144 - 2, 48, 17, 10027008));
		D.b(c + 16, d + 144 + 1, "Prev", 16777215, 0);
		Wf(c + 56, d + 144 - 2, 48, 17) && (Ef && (vb = Zf(floor(vb / k) + 1, 0, floor((jg.length - 1) / k)) * k),
		V(c + 56, d + 144 - 2, 48, 17, 10027008));
		D.b(c + 64, d + 144 + 1, "Next", 16777215, 0);
		Wf(c + 104, d + 144 - 2, 48, 17) && (Ef && (f = 52),
		V(c + 104, d + 144 - 2, 48, 17, 10027008));
		D.b(c + 112, d + 144 + 1, "EXIT", 16777215, 0);
		if (0 != e)
			if (0 < (Ae[e] & kg)) {
				k = Pe[e + 1] - Pe[e];
				for (a = k - 1; 0 <= a; a--)
					k -= B[Pe[e] + a][Re];
				g = c + 80 - 16 * k;
				Wf(g + 160, d + 0, 32 * k, 52) && (b = floor((cg - (g + 160)) / 32),
				Ef && (xb = b),
				V(g + 160 + 32 * b + 2, d + 0 + 2, 28, 52, 10027008));
				V(g + 160 + 32 * xb + 2, d + 48 + 2, 28, 4, 10027008);
				xb = K(xb, 0, k - 1);
				for (a = 0; a < k; a++)
					ag(Pa[Me[e][Me[e].length - 1][0]], g + 164 + 32 * a, d + 44, 24, 8, 0, 0, 24, 8);
				k = Pe[e + 1] - Pe[e];
				for (b = a = 0; a < k; a++,b++)
					G.M(Pe[e] + a, g + 164 + 12 + 32 * b, d + 44 - 1, 0),
					a += B[Pe[e] + a][Re];
				e = Pe[e] + xb;
				D.b(c + 164, d + 56, "Lv   " + B[e][Qe], 16777215, 0);
				D.b(c + 164, d + 68, "LP   " + B[e][lg], 16777215, 0);
				D.b(c + 164, d + 80, "GOLD " + B[e][mg], 16777215, 0);
				D.b(c + 164, d + 92, "EXP  " + B[e][ng], 16777215, 0);
				D.b(c + 164, d + 108, "Drop Item", 16777215, 0);
				for (b = a = 0; 6 > a; a += 2)
					k = B[e][og + a],
					0 != k && (dg = 2,
					eg(Ra, c + 164, d + 4 * (30 + 3 * b), 12, 12, 12 * w(k, Pc), 0, 12, 12, w(k, Sc)),
					dg = 0,
					hg(c + 164, d + 4 * (30 + 3 * b), "  " + ITEMS[k][Mc] + " " + (ITEMS[k][Nc] ? ITEMS[k][Nc] : ""), 16777215, 0, -1),
					b++);
				D.b(c + 256, d + 56, "strong", 16777215, 0);
				0 < B[e][pg] && kf.b(c + 256, d + 68 + 2, "Ph          ", 8421504, 0);
				0 < B[e][qg] && kf.b(c + 256, d + 68 + 2, "  Fi        ", 16711680, 0);
				0 < B[e][rg] && kf.b(c + 256, d + 68 + 2, "    Ic      ", 2105599, 0);
				0 < B[e][sg] && kf.b(c + 256, d + 68 + 2, "      Th    ", 16777024, 0);
				0 < B[e][tg] && kf.b(c + 256, d + 68 + 2, "        Po  ", 65280, 0);
				0 < B[e][ug] && kf.b(c + 256, d + 68 + 2, "          Fr", 12632319, 0);
				D.b(c + 256, d + 80, "weak", 16777215, 0);
				0 > B[e][pg] && kf.b(c + 256, d + 92 + 2, "Ph          ", 8421504, 0);
				0 > B[e][qg] && kf.b(c + 256, d + 92 + 2, "  Fi        ", 16711680, 0);
				0 > B[e][rg] && kf.b(c + 256, d + 92 + 2, "    Ic      ", 2105599, 0);
				0 > B[e][sg] && kf.b(c + 256, d + 92 + 2, "      Th    ", 16777024, 0);
				0 > B[e][tg] && kf.b(c + 256, d + 92 + 2, "        Po  ", 65280, 0);
				0 > B[e][ug] && kf.b(c + 256, d + 92 + 2, "          Fr", 12632319, 0)
			} else
				0 < (Ae[e] & Be) ? (yf(D, c + 240, d + 40, "Information fee", 16777215, 0),
				g = 1E3 * (vb + wb + 1),
				Df(c + 240, d + 80, 160, 160) && (g <= MONEY && Ef && (Ne(),
				Ae[e] |= kg,
				MONEY -= g,
				te()),
				Hf(c + 240, d + 80, 120, 32, 10027008)),
				yf(D, c + 240, d + 80, "" + g + "$ BUY", 16777215, 0)) : (yf(D, c + 240, d + 40, "?????", 16777215, 0),
				yf(D, c + 240, d + 80, "???", 16777215, 0));
		Jf(1)
	}
	else if (55 == f) {
		Tf(0);
		sb = 0;
		c = 80;
		d = 28;
		Xf = 1;
		V(c - 4, d - 4, 328, 168, 3422552064);
		Xf = 0;
		bg(c + 0, d + 0, 321, 161, 16777215);
		L(c + 160, d + 0, c + 160, d + 160, 16777215);
		c = 100;
		d = 60;
		for (a = 0; 4 > a; a++) {
			if (Wf(c + 32 * a - 4, d + 0 - 4, 32, 32)) {
				V(c + 32 * a, d + 0, 24, 24, 10027008);
				if (Ef)
					vb = a;
			} else {
				V(c + 32 * a, d + 0, 24, 24, 0);
			}
			eg(Qa, c + 32 * a, d, 24, 24, 24 * w(q[s + a], Rc), 0, 24, 24, 16777215);
			Yf(c + 32 * a, d, 24 * w(q[s + a], Rc), w(q[s + a], Sc));
		}
		bg(c + 32 * vb - 1, d - 1, 26, 26, 16711680);
		D.b(c, d - 16, CLASSES[w(q[s + vb], Rc)], 16777215, 0);
		c = 100;
		d = 74;
		D.b(c, d + 16, "LP  " + LIFE_LEVELS[vb], 16777215, 0);
		D.b(c, d + 28, "STR " + STR_LEVELS[vb], 16777215, 0);
		D.b(c, d + 40, "DEX " + DEX_LEVELS[vb], 16777215, 0);
		D.b(c, d + 52, "MAG " + MAG_LEVELS[vb], 16777215, 0);
		D.b(c, d + 68, "LV  " + PLAYER_LEVEL[0], 16777215, 0);
		D.b(c, d + 68, "        SP " + ac[vb], 16777215, 0);
		c = 80;
		d = 28;
		L(c + 0, d + 140, c + 160, d + 140, 16777215);
		Wf(c + 56, d + 144 - 2, 48, 17) && (Ef && (f = 52),
		V(c + 56, d + 144 - 2, 48, 17, 10027008));
		D.b(c + 64, d + 144 + 1, "EXIT", 16777215, 0);
		g = 1E3 * (LIFE_LEVELS[vb] + STR_LEVELS[vb] + DEX_LEVELS[vb] + MAG_LEVELS[vb]);
		Df(c + 240, d + 80, 120, 32) && 0 < g && (g <= MONEY && Ef && (Ne(),
		ac[vb] += LIFE_LEVELS[vb] + STR_LEVELS[vb] + DEX_LEVELS[vb] + MAG_LEVELS[vb],
		LIFE_LEVELS[vb] = 0,
		STR_LEVELS[vb] = 0,
		DEX_LEVELS[vb] = 0,
		MAG_LEVELS[vb] = 0,
		MONEY -= g,
		te()),
		Hf(c + 240, d + 80, 120, 32, 10027008));
		yf(D, c + 240, d + 72, "Forget", 16777215, 0);
		yf(D, c + 240, d + 88, "" + g + "$ BUY", 16777215, 0);
		Jf(1)
	}
	else if (59 == f) {
		Tf(0),
		Jf(0),
		Vf(floor(255 * mb / 30)),
		mb++,
		if (30 == mb) {
			mb = nb = sb = 0;
			f = 6;
			Ne();
			Ae[h] |= Be;
			if (0 < De[h][3])
				Ae[De[h][3]] |= Ce;
			if (0 < De[h][4])
				Ae[De[h][4]] |= Ce;
			te();
			he = se(0);
			fe = 1;
		}
	}
}
da.fff = xf;

function xf() {
	var a, b, c;
	if (70 == f)
		h = 0,
		nb = 1,
		I.j(h) && (v.set(0, 26, I.o[0]),
		v.set(1, 30, I.o[1]),
		v.set(2, 34, I.o[2]),
		v.set(3, 38, I.o[3]),
		G.j(1),
		oe.index = 0,
		ne.index = 0,
		pe.index = 0,
		mb = sb = Ib = Hb = Gb = Fb = pe.J = 0,
		f++);
	else if (71 == f || 72 == f || 73 == f || 74 == f)
		if (I.b(),
		v.move(),
		pe.move(),
		ne.move(),
		oe.move(),
		pe.b(),
		v.b(),
		oe.b(),
		ne.b(),
		Jf(0),
		71 == f)
			0 == ua ? La ? vg(xa, "\u30b3\u30e1\u30f3\u30c8\u3092\u8a18\u5165\u3057\u3066\uff2f\uff2b\u3092\u62bc\u3057\u3066\u4e0b\u3055\u3044") : vg(xa, "Enter comments and click OK.") : La ? 100 == ua ? vg(xa, "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f") : 1 == ua ? vg(xa, "\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059") : 2 == ua ? vg(xa, "1\u65e5\u306b1\u56de\u306e\u307f\u3067\u3059") : 3 == ua ? vg(xa, "10\u4ef6\u4ee5\u4e0a\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51fa\u6765\u307e\u305b\u3093") : vg(xa, "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51fa\u6765\u307e\u305b\u3093") : 100 == ua ? vg(xa, "The upload has been completed.") : 1 == ua ? vg(xa, "User registration is required.") : 2 == ua ? vg(xa, "1 time in 1 day only.") : 3 == ua ? vg(xa, "Cannot upload more than 10 posts.") : vg(xa, "Cannot upload."),
			f++;
		else if (72 == f) {
			if (Hf(256, 100, 300, 100, 8421504),
			yf(D, 256, 70, "UPLOAD", 16752800, 0),
			J(xa, 256, 90, xa.ITEMS_MAYBE, 16, 0, 0, xa.ITEMS_MAYBE, 16, 0),
			0 == ua) {
				b = wg;
				V(136, 108, 240, 16, 16777215);
				bg(135, 107, 242, 18, 0);
				if (Wf(136, 108, 240, 16) && (bg(135, 107, 242, 18, 16711680),
				xg)) {
					c = null;
					try {
						c = prompt("UPLOAD", b)
					} catch (d) {}
					null != c && (b = c)
				}
				vg(yg, b);
				eg(yg, 137, 108, 238, 16, 0, 0, 238, 16, 0);
				wg = b;
				b = Df(256, 140, 16, 12);
				yf(D, 256, 140, "OK", b ? 16711680 : 16777215, 0);
				if (b && xg)
					if (2 > wg.length)
						La ? vg(xa, "\u30b3\u30e1\u30f3\u30c8\u3092\uff12\u6587\u5b57\u4ee5\u4e0a\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : vg(xa, "The comment must be longer than 2 characters.");
					else {
						b = wg;
						c = 0;
						a = b.length;
						for (var e = 0; e < a; e++) {
							var g = b.charCodeAt(e);
							c = 0 <= g && 128 >= g || 65377 <= g && 65439 >= g ? c + 1 : c + 2
						}
						20 < c ? La ? vg(xa, "\u30b3\u30e1\u30f3\u30c8\u3092\uff11\uff10\u6587\u5b57\u4ee5\u4e0b\u3067\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : vg(xa, "The comment must be shorter than 10 characters.") : f++
					}
			}
		} else
			73 == f ? (b = encodeURIComponent(wg),
			0 == b.length ? (La ? vg(xa, "\u30a8\u30e9\u30fc") : vg(xa, "Error"),
			f = 72) : 0 == q[s + 0] || 0 == q[s + 1] || 0 == q[s + 2] || 0 == q[s + 3] ? (La ? vg(xa, "\u6b66\u5668\u3092\u88c5\u5099\u3057\u3066\u4e0b\u3055\u3044") : vg(xa, "Equip a weapon."),
			f = 72) : (Ne(),
			he = se(1),
			c = zg(47, 115, 99, 111, 114, 101, 47, 114, 97, 110, 103, 101, 114, 95, 101, 110, 116, 114, 121, 46, 112, 104, 112, 63, 97, 61),
			c += ha,
			c += Ag + (La ? "0" : "1"),
			c += Bg + b,
			c += Cg + he,
			Ue(c),
			Dg(c),
			f++)) : 74 == f && 0 != Eg && (ua = "ok" == Fg[0] ? 100 : "err1" == Fg[0] ? 1 : "err2" == Fg[0] ? 2 : "err3" == Fg[0] ? 3 : "err4" == Fg[0] ? 4 : "err5" == Fg[0] ? 5 : 6,
			f = 71);
	else if (60 == f) {
		if (h = 0,
		nb = 1,
		I.j(h)) {
			v.set(0, 10, I.o[0]);
			v.set(1, 11, I.o[1]);
			v.set(2, 12, I.o[2]);
			v.set(3, 13, I.o[3]);
			v.set(4, 53, I.o[0]);
			v.set(5, 52, I.o[1]);
			v.set(6, 51, I.o[2]);
			v.set(7, 50, I.o[3]);
			Cf();
			Ne();
			for (a = 0; 8 > a; a++)
				p[a] = kc[a];
			for (a = 0; 8 > a; a++)
				fc[a] = 0;
			MONEY = 9999999;
			te();
			G.j(1);
			oe.index = 0;
			ne.index = 0;
			pe.index = 0;
			mb = sb = Ib = Hb = Gb = Fb = pe.J = 0;
			f++
		}
	} else if (61 == f || 62 == f || 63 == f || 64 == f)
		for (I.b(),
		61 == f && (v.fb = 1),
		v.move(),
		ne.move(),
		oe.move(),
		v.fb = 0,
		v.b(),
		oe.b(),
		ne.b(),
		Cf(),
		61 == f ? (mb = K(mb + 1, 0, 30),
		a = floor(255 * mb / 30),
		L(0, 110, floor(512 * mb / 30), 110, 8421504),
		L(512 - floor(512 * mb / 30), 143, 512, 143, 8421504),
		Df(256, 127, 512, 32) && 30 == mb ? (Ef && (f++,
		mb = 0),
		Hf(256, 127, 512, 32, 8388608),
		Gf(D, 256, 128, "FIGHT", 255, 255, 255, 255, 0, 0, 0, 255, 16, 24)) : Gf(D, 256, 128, "READY", 255, 255, 255, a, 0, 0, 0, a, 16, 24),
		Xf = 1,
		b = 110,
		c = 120,
		vg(xa, ma),
		J(xa, b, c + 0 - 2, xa.ITEMS_MAYBE, 16, 0, 0, xa.ITEMS_MAYBE, 16, a << 24 | 16777215),
		vg(Aa, na),
		J(Aa, b, c + 16 - 2, Aa.ITEMS_MAYBE, 16, 0, 0, Aa.ITEMS_MAYBE, 16, a << 24 | 16777215),
		b = 402,
		vg(Ba, qa),
		J(Ba, b, c + 0 - 2, Ba.ITEMS_MAYBE, 16, 0, 0, Ba.ITEMS_MAYBE, 16, a << 24 | 16777215),
		vg(Da, ra),
		J(Da, b, c + 16 - 2, Da.ITEMS_MAYBE, 16, 0, 0, Da.ITEMS_MAYBE, 16, a << 24 | 16777215),
		Xf = 0) : 62 == f ? 0 == p[0] + p[1] + p[2] + p[3] ? (sa = 2,
		f++) : 0 == p[4] + p[5] + p[6] + p[7] && (sa = 1,
		f++) : 63 == f ? (0 == ua && (ua = 1,
		c = zg(47, 115, 99, 111, 114, 101, 47, 114, 97, 110, 103, 101, 114, 95, 118, 115, 46, 112, 104, 112, 63, 97, 61),
		c += ha,
		c += Ag + (La ? "0" : "1"),
		c += Bg + ja,
		c += Cg + oa,
		0 != q[s + 0] && 0 != q[s + 1] && 0 != q[s + 2] && 0 != q[s + 3] && (c += Gg + Ee(sa)),
		Ue(c),
		Dg(c)),
		f++) : 64 == f && (mb = K(mb + 1, 0, 50),
		a = floor(255 * mb / 50),
		Df(256, 128, 96, 32) && 50 == mb && (Ef && (f = 60),
		Hf(256, 128, 96, 32, 8388608)),
		If(256, 128, 96, 32, 0 | floor(a / 2) << 16),
		Gf(D, 256, 129, "RETRY", 255, 255, 255, a, 0, 0, 0, a, 16, 24),
		b = 60,
		c = 72,
		Xf = 1,
		eg(xa, b, c + 0 - 2, xa.ITEMS_MAYBE, 16, 0, 0, xa.ITEMS_MAYBE, 16, a << 24 | 16777215),
		Xf = 0,
		Gf(D, b + 60, c + 40, 1 == sa ? "WIN" : "LOSE", 255, 255, 255, a, 1 == sa ? 255 : 0, 0, 1 == sa ? 0 : 255, a, 32, 48),
		0 != Eg && ("ok" == Fg[0] ? (D.M(b, c + 64, "" + Fg[1] + " win " + Fg[2] + " lose", 255, 255, 255, a, 0, 0, 0, a, 8, 12),
		D.M(b, c + 80, "Winning per " + Fg[3] + "%", 255, 255, 255, a, 0, 0, 0, a, 8, 12)) : D.M(b, c + 64, " RANKING ERROR", 255, 255, 255, a, 0, 0, 0, a, 8, 12)),
		b = 332,
		Xf = 1,
		eg(Ba, b, c + 0 - 2, Ba.ITEMS_MAYBE, 16, 0, 0, Ba.ITEMS_MAYBE, 16, a << 24 | 16777215),
		Xf = 0,
		Gf(D, b + 60, c + 40, 2 == sa ? "WIN" : "LOSE", 255, 255, 255, a, 2 == sa ? 255 : 0, 0, 2 == sa ? 0 : 255, a, 32, 48),
		0 != Eg && ("ok" == Fg[0] ? (D.M(b, c + 64, "" + Fg[4] + " win " + Fg[5] + " lose", 255, 255, 255, a, 0, 0, 0, a, 8, 12),
		D.M(b, c + 80, "Winning per " + Fg[6] + "%", 255, 255, 255, a, 0, 0, 0, a, 8, 12)) : D.M(b, c + 64, " RANKING ERROR", 255, 255, 255, a, 0, 0, 0, a, 8, 12))),
		V(0, 257, 512, 126, [13407305, 9480368, 7241784, 10993609, 11302740, 24586, 7297069, 7297069, 10053120][Me[h][nb][0]]),
		kf.M(10, 374, Hg, 0, 0, 0, 0, 0, 0, 0, 128, 5, 7),
		Gf(D, 256, 328, "VS", 255, 255, 255, 255, 0, 0, 0, 255, 16, 24),
		b = 40,
		c = 268,
		eg(xa, b, c + 0 - 2, xa.ITEMS_MAYBE, 16, 0, 0, xa.ITEMS_MAYBE, 16, 0),
		D.b(b, c + 16, "LV " + PLAYER_LEVEL[0], 16777215, 0),
		D.b(b, c + 16, "        FP " + Nb[0], 16777215, 0),
		vg(Fa, "\u300c " + na + " \u300d"),
		J(Fa, b + 60, c + 88, Fa.ITEMS_MAYBE, 16, 0, 0, Fa.ITEMS_MAYBE, 16, 0),
		b = 206,
		Gf(D, b, c + 20 + 2, "Rank", 0, 0, 0, 0, 0, 0, 0, 128, 8, 12),
		Gf(D, b, c + 60, "" + Kc[$b[0]], 0, 0, 0, 0, 0, 0, 0, 80, 32, 48),
		b = 352,
		eg(Ba, b, c + 0 - 2, Ba.ITEMS_MAYBE, 16, 0, 0, Ba.ITEMS_MAYBE, 16, 0),
		D.b(b, c + 16, "LV " + PLAYER_LEVEL[1], 16777215, 0),
		D.b(b, c + 16, "        FP " + Nb[1], 16777215, 0),
		vg(Ga, "\u300c " + ra + " \u300d"),
		J(Ga, b + 60, c + 88, Ga.ITEMS_MAYBE, 16, 0, 0, Ga.ITEMS_MAYBE, 16, 0),
		b = 306,
		Gf(D, b, c + 20 + 2, "Rank", 0, 0, 0, 0, 0, 0, 0, 128, 8, 12),
		Gf(D, b, c + 60, "" + Kc[$b[1]], 0, 0, 0, 0, 0, 0, 0, 80, 32, 48),
		b = 40,
		c = 316,
		a = 0; 8 > a; a++)
			4 <= a && (b = 224),
			V(b + 32 * a, c - 12, floor(24 * p[a] / kc[a]), 4, 8388608),
			e = ig(w(q[s + a], bd), 1),
			g = w(q[s + a], Rc),
			4 != g && 5 != g && 6 != g && V(b + 32 * a, c - 6, floor(23 * fc[a] / e) + 1, 2, 128),
			V(b + 32 * a, c + 0, 24, 24, 0),
			eg(Qa, b + 32 * a, c, 24, 24, 24 * w(q[s + a], Rc), 0, 24, 24, 16777215),
			Yf(b + 32 * a, c, 24 * w(q[s + a], Rc), w(q[s + a], Sc))
}

function Ff() {
	V(0, 368, 512, 16, 0);
	yf(D, 256, 376, Ve, -1, 6697728)
}
da.fff = Tf;

function Tf(a) {
	var b;
	I.b();
	if (0 == h && 1 == nb || 20 == h && 1 == nb || 47 == h && 1 == nb || 77 == h && 1 == nb)
		J(db, 400, 183, 117, 84, 0, 0, 78, 56, 16777215),
		J(db, 40, 170, 156, 112, 0, 0, 78, 56, 16777215),
		yf(D, 400, 168, "INN", 16777215, 13800762),
		0 == h ? yf(D, 40, 152, "SHOP", 16777215, 13800762) : 20 == h ? yf(D, 40, 152, " COMPO SHOP", 16777215, 13800762) : 47 == h ? yf(D, 40, 152, " JUNK SHOP", 16777215, 13800762) : 77 == h && yf(D, 40, 152, " COMPO SHOP", 16777215, 13800762),
		yf(D, 40, 184, "BOOK", 16777215, 13800762);
	70 == h && 1 == nb && (eg(hb, 0, -288, 512, 512, 0, 0, 64, 64, 16777215),
	52 == f && (yf(D, 256, 128, "FORGET", 16777215, 1054740),
	yf(D, 256, 160, "INN", 16777215, 1054740),
	yf(D, 256, 184, "BOOK", 16777215, 1054740)));
	if (0 == a)
		v.move(),
		G.move(),
		pe.move(),
		ne.move(),
		oe.move();
	b = I;
	if (55 != b.w && 89 != b.w && nb != Me[b.w].length - 1 || 0 == G.index) {
		var c;
		c = 7 == Me[h][nb][1] ? 8 * b.o[63] - 16 : 8 * b.I[63] - 16;
		ag(Ya, 480, c, 32, 24, 0, 0, 32, 24);
		nb == Me[b.w].length - 1 ? 88 == b.w ? yf(kf, 496, c + 8, "END", 0, -1) : yf(kf, 496, c + 8, "MAP", 0, -1) : nb == Me[b.w].length - 2 ? yf(kf, 496, c + 8, "BOSS", 0, -1) : yf(kf, 496, c + 8, "NEXT", 0, -1)
	}
	G.b();
	pe.b();
	v.b();
	oe.b();
	var d = I, e, g, k;
	k = C;
	switch (d.w) {
	case 15:
	case 16:
	case 30:
	case 31:
	case 32:
	case 33:
	case 66:
	case 67:
	case 68:
	case 69:
		Xf = 1;
		dg = 3;
		C = Ma.f;
		b = N(1.7, 3.69);
		b *= b * b * b;
		J(Za, N(0, 512), 256 - b, 256, 32, 96, 0, 16, 16, 150994943);
		e = 256 * ea;
		if (3 > A(100))
			for (b = 64 * ea; b < e; b++)
				C[b] = 250 * C[b] >> 8;
		C = k;
		for (b = 64 * ea; b < e; b++)
			d = Ma.f[b] & 255,
			c = C[b] >> 16 & 255,
			k = ((255 - c) * d >> 8) + c,
			c = C[b] >> 8 & 255,
			g = ((255 - c) * d >> 8) + c,
			c = C[b] & 255,
			c = ((255 - c) * d >> 8) + c,
			C[b] = k << 16 | g << 8 | c;
		Xf = dg = 0;
		break;
	case 17:
	case 18:
	case 19:
	case 48:
	case 49:
	case 50:
	case 83:
	case 84:
		C = Ma.f;
		e = 256 * ea;
		for (b = 0; b < e; b++)
			C[b] = 255;
		Xf = dg = 3;
		for (b = 0; 4 > b; b++)
			J(Za, v.a[b][0].x, v.a[b][0].y, 80, 80, 33, 1, 14, 14, 3238002687);
		for (b = 0; b < oe.index; b++)
			1 != oe.F[b] && J(Za, oe.a[b].x, oe.a[b].y, 32, 32, 33, 1, 14, 14, 2164260863);
		for (b = 0; 4 > b; b++)
			if (8 == v.step[b])
				for (c = 0; 6 > c; c++)
					0 != v.O[b][c] && J(Za, v.a[b][15 + c].x, v.a[b][15 + c].y, 32, 32, 33, 1, 14, 14, 2164260863);
		for (b = 0; b < pe.index; b++)
			J(Za, pe.a[b].x, pe.a[b].y - 6, 32, 32, 33, 1, 14, 14, 4294967295);
		J(Za, cg, fg, 80, 80, 33, 1, 14, 14, 3238002687);
		C = k;
		Xf = 1;
		for (b = 0; b < e; b++)
			d = Ma.f[b],
			255 == d ? C[b] = 251658240 : (c = C[b] >> 16 & 255,
			k = (-c * d >> 8) + c,
			c = C[b] >> 8 & 255,
			g = (-c * d >> 8) + c,
			c = C[b] & 255,
			c = (-c * d >> 8) + c,
			C[b] = k << 16 | g << 8 | c);
		Xf = dg = 0;
		break;
	case 34:
	case 35:
	case 36:
	case 37:
	case 38:
	case 40:
	case 41:
	case 43:
		b = 1 * Ig & 511;
		for (g = 0; 256 > g; g++) {
			c = 512 * g;
			k = ~~(4 * Xe[b][1] + 0.5);
			for (e = 0; 512 > e; e++)
				Ma.f[c + e] = C[c + K(e + k, 0, 511)];
			b = b + 6 & 511
		}
		e = 256 * ea;
		for (c = 0; c < e; c++)
			C[c] = Ma.f[c];
		break;
	case 51:
	case 52:
	case 56:
	case 57:
	case 58:
	case 59:
	case 60:
	case 61:
		e = 1;
		57 == d.w ? e = 2 : 58 == d.w ? e = 2 : 59 == d.w ? e = 2 : 60 == d.w ? e = 3 : 61 == d.w && (e = 3);
		for (b = 0; b < e; b++)
			Ma.f[floor(A(24576))] = 1;
		for (b = 224 * ea - 1; 0 <= b; b--)
			1 == Ma.f[b] && ((g = I.e[b >> 12][(b & 511) >> 3],
			-1 == g || 0 == g && 3 > (b & 7) && 3 > (b >> 9 & 7) || 2 == g && 4 < (b & 7) && 3 > (b >> 9 & 7)) ? !(50 > A(100)) && (c = 57 == d.w || 58 == d.w || 61 == d.w ? b + ea + floor(A(4)) - 2 : b + ea + floor(A(3)) - 1,
			1 != Ma.f[c] && (g = I.e[c >> 12][(c & 511) >> 3],
			-1 == g || 0 == g && 3 > (c & 7) && 3 > (c >> 9 & 7) || 2 == g && 4 < (c & 7) && 3 > (c >> 9 & 7))) && (Ma.f[c] = Ma.f[b],
			Ma.f[b] = 0) : Ma.f[b] = 0);
		C = Ma.f;
		for (b = 0; 4 > b; b++)
			0 != p[b] && (Hf(v.a[b][0].x, v.a[b][0].y, 3, 3, 0),
			Hf(v.a[b][9].x, v.a[b][9].y, 1, 1, 0),
			Hf(v.a[b][10].x, v.a[b][10].y, 1, 1, 0));
		for (b = 0; b < oe.index; b++)
			1 == oe.U[b] && Hf(oe.a[b].x, oe.a[b].y, 3, 3, 0);
		C = k;
		for (b = 224 * ea - 1; 0 <= b; b--)
			1 == Ma.f[b] && (C[b] = 15266040)
	}
	ne.b();
	Xf = 1;
	V(4, 4, 8 * (Uf[h].length + 6) + 8, 20, 2151694400);
	Xf = 0;
	0 == h && 1 == nb || 20 == h && 1 == nb || 47 == h && 1 == nb || 70 == h && 1 == nb || 77 == h && 1 == nb ? D.b(8, 8, Uf[h], 16777215, 0) : nb + 1 == Me[h].length ? D.b(8, 8, Uf[h] + ": BOSS", 16777215, 0) : D.b(8, 8, Uf[h] + ": " + (nb + 1), 16777215, 0);
	Xf = 1;
	V(364, 4, 56, 20, 2151694400);
	Xf = 0;
	D.b(368, 8, "Option", 16777215, 0);
	Xf = 1;
	V(428, 4, 80, 20, 2151694400);
	Xf = 0;
	D.b(432, 8, "World Map", 16777215, 0);
	if (0 < Hb && (0 == a && Hb--,
	V(196, 10, 120, 12, 3158064),
	V(196, 10, floor(120 * Fb / Gb), 12, 6291456),
	0 < (Ae[h] & kg))) {
		yf(kf, 256, 16, "" + Fb + "/" + Gb, 16777215, 0);
		G.M(Ib, 206, 33, 1);
		kf.b(216, 25, "DROP", 16777215, 0);
		for (b = a = 0; 6 > a; a += 2)
			c = B[Ib][og + a],
			0 != c && (dg = 2,
			eg(Ra, 236 + 12 * b, 23, 12, 12, 12 * w(c, Pc), 0, 12, 12, w(c, Sc)),
			dg = 0,
			b++);
		a = Jg(G, Ib, 1);
		kf.b(276, 25, "EXP " + a, 16777215, 0)
	}
}
da.fff = Cf;

function Cf() {
	var a, b;
	Ne();
	Nb[0] = PLAYER_LEVEL[0];
	Nb[1] = PLAYER_LEVEL[1];
	for (a = 0; 4 > a; a++)
		Nb[0] += 2 * w(q[s + a], Nc) + w(Dc[s + a], Nc) + w(Ec[s + a], Nc);
	for (a = 4; 8 > a; a++)
		Nb[1] += 2 * w(q[s + a], Nc) + w(Dc[s + a], Nc) + w(Ec[s + a], Nc);
	$b[0] = 9 > floor((Nb[0] - 1) / 20) ? floor((Nb[0] - 1) / 20) : 9;
	$b[1] = 9 > floor((Nb[1] - 1) / 20) ? floor((Nb[1] - 1) / 20) : 9;
	var c = 1 != ga ? 4 : 8;
	for (a = 0; a < c; a++) {
		lc[a] = 0 + STR_LEVELS[a];
		mc[a] = 0 + DEX_LEVELS[a];
		nc[a] = 0 + MAG_LEVELS[a];
		x(s + a, md) && (lc[a] += y(s + a, t));
		x(s + a, nd) && (mc[a] += y(s + a, t));
		x(s + a, od) && (nc[a] += y(s + a, t));
		x(s + a, pd) && (lc[a] += y(s + a, t),
		mc[a] += y(s + a, t),
		nc[a] += y(s + a, t));
		b = w(q[s + a], AT_MIN_INDEX);
		var d = w(q[s + a], AT_MAX_INDEX),
			e = w(q[s + a], AGI_MIN_INDEX),
			g = w(q[s + a], AGI_MAX_INDEX),
			k = w(q[s + a], RANGE_INDEX);
		1 == ec[a] ? (oc[a] = b + floor(lc[a] / 2),
		pc[a] = d + floor(lc[a] / 2),
		qc[a] = e < ig(e - mc[a], 5) ? e : ig(e - mc[a], 5),
		rc[a] = g < ig(g - mc[a], 10) ? g : ig(g - mc[a], 10),
		tc[a] = k,
		kc[a] = 50 + 10 * LIFE_LEVELS[a] + 4 * lc[a] + 3 * mc[a] + 2 * nc[a]) : 2 == ec[a] ? (pc[a] = d + lc[a],
		oc[a] = b + mc[a] < pc[a] ? b + mc[a] : pc[a],
		qc[a] = e,
		rc[a] = g,
		tc[a] = k,
		x(s + a, Hd) && (tc[a] += y(s + a, t)),
		x(s + a, ae) && (tc[a] += y(s + a, id)),
		kc[a] = 50 + 10 * LIFE_LEVELS[a] + 4 * lc[a] + 4 * mc[a] + 2 * nc[a]) : 3 == ec[a] ? (oc[a] = b + floor(mc[a] / 4),
		pc[a] = d + floor(mc[a] / 3),
		qc[a] = e,
		rc[a] = g,
		tc[a] = k + 2 * lc[a],
		x(s + a, Id) && (tc[a] += y(s + a, t)),
		kc[a] = 50 + 8 * LIFE_LEVELS[a] + 2 * lc[a] + 3 * mc[a] + 2 * nc[a]) : 4 == ec[a] ? (oc[a] = b + floor(nc[a] / 4),
		pc[a] = d + floor(nc[a] / 3),
		qc[a] = ig(e - mc[a], 50),
		rc[a] = ig(g - mc[a], 60),
		tc[a] = k + 2 * lc[a],
		x(s + a, Id) && (tc[a] += y(s + a, t)),
		kc[a] = 50 + 8 * LIFE_LEVELS[a] + 2 * lc[a] + 2 * mc[a] + 2 * nc[a]) : 5 == ec[a] ? (oc[a] = b,
		pc[a] = d,
		qc[a] = e,
		rc[a] = g,
		tc[a] = k + 2 * nc[a],
		x(s + a, Id) && (tc[a] += y(s + a, t)),
		kc[a] = 50 + 8 * LIFE_LEVELS[a] + 2 * lc[a] + 2 * mc[a] + 2 * nc[a]) : 6 == ec[a] ? (oc[a] = b + floor(b * lc[a] / 50),
		pc[a] = d + floor(d * lc[a] / 50),
		qc[a] = ig(floor(50 * e / (mc[a] + 50)), 5),
		rc[a] = ig(floor(50 * g / (mc[a] + 50)), 10),
		tc[a] = k,
		x(s + a, Id) && (tc[a] += y(s + a, t)),
		kc[a] = 50 + 8 * LIFE_LEVELS[a] + 2 * lc[a] + 2 * mc[a] + 2 * nc[a]) : 7 == ec[a] ? (oc[a] = b + floor(lc[a] / 2),
		pc[a] = d + floor(lc[a] / 2),
		qc[a] = e,
		rc[a] = g,
		tc[a] = k,
		kc[a] = 50 + 10 * LIFE_LEVELS[a] + 3 * lc[a] + 3 * mc[a] + 2 * nc[a]) : 8 == ec[a] && (oc[a] = b + floor(lc[a] / 4),
		pc[a] = d + floor(lc[a] / 3),
		qc[a] = e,
		rc[a] = g,
		tc[a] = k,
		x(s + a, Id) && (tc[a] += y(s + a, t)),
		kc[a] = 50 + 10 * LIFE_LEVELS[a] + 4 * lc[a] + 2 * mc[a] + 2 * nc[a]);
		x(s + a, ld) && (kc[a] += y(s + a, t));
		x(s + a, Pd) && (kc[a] += floor(y(s + a, t) * kc[a] / 100));
		x(s + a, ce) && (kc[a] += y(s + a, id));
		1 == w(q[s + a], Rc) || 2 == w(q[s + a], Rc) || 3 == w(q[s + a], Rc) || 7 == w(q[s + a], Rc) || 8 == w(q[s + a], Rc) ? (x(s + a, qd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, rd) && (oc[a] += floor(y(s + a, t) * oc[a] / 100),
		pc[a] += floor(y(s + a, t) * pc[a] / 100)),
		x(s + a, ae) && (oc[a] += floor(y(s + a, t) * oc[a] / 100),
		pc[a] += floor(y(s + a, t) * pc[a] / 100))) : 4 == w(q[s + a], Rc) || 5 == w(q[s + a], Rc) ? (x(s + a, yd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, Ad) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, Cd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, Dd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id))) : 6 == w(q[s + a], Rc) && (x(s + a, qd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, rd) && (oc[a] += floor(y(s + a, t) * oc[a] / 100),
		pc[a] += floor(y(s + a, t) * pc[a] / 100)),
		0 == w(q[s + a], cd) && (x(s + a, yd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, Ad) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, Cd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id)),
		x(s + a, Dd) && (oc[a] += y(s + a, t),
		pc[a] += y(s + a, id))));
		x(s + a, Gd) && (b = y(s + a, t),
		qc[a] -= floor(qc[a] * b / 100),
		rc[a] -= floor(rc[a] * b / 100));
		oc[a] += floor(oc[a] * Ac[a] / 100);
		pc[a] += floor(pc[a] * Ac[a] / 100);
		if (1 == ga)
			kc[a] *= [1, 5, 5, 5, 5, 3, 4, 5, 5][ec[a]],
			kc[a] *= $b[1] + 1;
		p[a] = K(p[a], 0, kc[a])
	}
	for (a = 0; a < c; a++)
		Ac[a] = 0,
		Bc[a] = 0,
		Cc[a] = 0;
	for (a = 0; a < c; a++)
		if (5 == ec[a] && 5 == w(q[s + a], Rc) && 0 != p[a])
			for (d = floor(floor(v.a[a][9].x + v.a[a][10].x) / 2),
			e = floor(floor(v.a[a][9].y + v.a[a][10].y) / 2),
			b = a >> 2 << 2; b < (a >> 2 << 2) + 4; b++)
				0 != p[b] && (g = floor(floor(v.a[b][9].y + v.a[b][10].y) / 2),
				Kg(d - floor(floor(v.a[b][9].x + v.a[b][10].x) / 2)) < tc[a] && Kg(e - g) < tc[a] && (Ac[b] += lc[a],
				Bc[b] += mc[a],
				Cc[b] += nc[a]));
	for (a = 0; a < c; a++)
		0 != p[a] && x(s + a, Nd) && (Ac[a] += y(s + a, t));
	te()
}
da.fff = Jf;

function Jf(a) {
	var b, c, d, e, g;
	(Lg || Ef) && 256 <= fg ? ub = !0 : (Lg || Ef) && 256 > fg && (ub = !1);
	V(0, 257, 512, 126, [13407305, 9480368, 7241784, 7630870, 11302740, 13599032, 10993609, 6322320, 1921195, 10053120, 6714227, 6313296, 6313296][Me[h][nb][0]]);
	kf.M(10, 374, Hg, 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	e = 10;
	g = 260;
	var k = 4753E3;
	c = 9999999;
	if (98 > PLAYER_LEVEL[0]) {
		k = 0;
		for (b = 1; b < PLAYER_LEVEL[0]; b++)
			k += 1E3 * b;
		c = k + 1E3 * b
	}
	Cf();
	if (2 == a) {
		Ne();
		for (b = 0; 4 > b; b++)
			Ac[b] = 0,
			Bc[b] = 0,
			Cc[b] = 0;
		te()
	}
	if (4 > l) {
		b = "LP  " + p[l] + "/" + kc[l];
		d = "STR " + lc[l];
		var r = "DEX " + mc[l],
			m = "MAG " + nc[l];
		D.b(e, g + 0, CLASSES[w(q[s + l], Rc)], 16777215, 0);
		D.b(e, g + 16, b, 16777215, 0);
		if (v.step[l] != Mg)
			if (D.b(e, g + 28, d, 16777215, 0),
			D.b(e, g + 40, r, 16777215, 0),
			D.b(e, g + 52, m, 16777215, 0),
			kf.b(e, g + 28 + 2, "              AT ", -1, 0),
			kf.b(e, g + 40 + 2, "              AGI ", -1, 0),
			kf.b(e, g + 52 + 2, "              RANGE ", -1, 0),
			kf.b(e, g + 28 + 2, "                 " + oc[l] + "-" + pc[l], 0, -1),
			kf.b(e, g + 40 + 2, "                  " + qc[l] + "-" + rc[l], 0, -1),
			kf.b(e, g + 52 + 2, "                    " + tc[l], 0, -1),
			5 == ec[l])
				kf.b(e, g + 64 + 2, "AURA          AURA", -1, 0),
				kf.b(e, g + 64 + 2, "     (AT)" + lc[l] + "%", 0, -1),
				kf.b(e, g + 64 + 2, "                   (DF)" + mc[l] / 5, 0, -1);
			else if (7 == ec[l])
				kf.b(e, g + 64 + 2, "              BULLET", -1, 0),
				kf.b(e, g + 64 + 2, "                     +" + mc[l] / 5, 0, -1);
			else if (8 == ec[l]) {
				var n = 0,
					n = 10 > mc[l] ? 0 + (mc[l] - 0) / 10 : 30 > mc[l] ? 1 + (mc[l] - 10) / 20 : 60 > mc[l] ? 2 + (mc[l] - 30) / 30 : 100 > mc[l] ? 3 + (mc[l] - 60) / 40 : 4;
				kf.b(e, g + 64 + 2, "              RING", -1, 0);
				kf.b(e, g + 64 + 2, "                   +" + ("" + n).substring(0, 5 > ("" + n).length ? ("" + n).length : 5), 0, -1)
			}
		D.b(e, g + 76, "LV  " + PLAYER_LEVEL[0], 16777215, 0);
		D.b(e, g + 76, "        SP " + ac[l], 16777215, 0);
		D.b(e, g + 88, "EXP " + EXP + "(" + floor(100 * (EXP - k) / (c - k)) + "%)", 16777215, 0);
		D.b(e, g + 100, "$$$ " + MONEY, 16777215, 0);
		kf.b(e + 105, g + 100 + 2, "FP " + Nb[0], -1, 0);
		v.step[l] == Mg ? (k = ig(floor(MONEY / 10), 10 * PLAYER_LEVEL[0]),
		b = "Revival $ " + k,
		D.b(e, g + 40, b, 8421504, 0),
		Wf(e, g + 40, 8 * b.length, 12) && ub && (k <= MONEY && Ef && 0 != p[0] + p[1] + p[2] + p[3] && (Ne(),
		p[l] += floor(kc[l] / 4),
		MONEY -= k,
		v.set(l, floor(v.a[l][0].x / 8), floor(v.a[l][0].y / 8)),
		te()),
		D.b(e, g + 40, b, 16711680, 0))) : 0 < ac[l] && (k = Ef,
		Ne(),
		Wf(e, g + 16, 8 * b.length + 16, 12) && ub ? (k && (LIFE_LEVELS[l]++,
		ac[l]--),
		D.b(e, g + 16, b, 16711680, 0)) : Wf(e, g + 28, 8 * d.length + 16, 12) && ub ? (k && (STR_LEVELS[l]++,
		ac[l]--),
		D.b(e, g + 28, d, 16711680, 0)) : Wf(e, g + 40, 8 * r.length + 16, 12) && ub ? (k && (DEX_LEVELS[l]++,
		ac[l]--),
		D.b(e, g + 40, r, 16711680, 0)) : Wf(e, g + 52, 8 * m.length + 16, 12) && ub && (k && (MAG_LEVELS[l]++,
		ac[l]--),
		D.b(e, g + 52, m, 16711680, 0)),
		te(),
		D.b(e + 8 * b.length, g + 16, " +", 16711680, 0),
		D.b(e + 8 * d.length, g + 28, " +", 16711680, 0),
		D.b(e + 8 * r.length, g + 40, " +", 16711680, 0),
		D.b(e + 8 * m.length, g + 52, " +", 16711680, 0))
	} else if (m = q[l],
	8 <= l && 11 >= l && (m = Dc[s + l - 8]),
	12 <= l && 15 >= l && (m = Ec[s + l - 12]),
	hg(e, g + 0, ITEMS[m][Mc] + " " + (ITEMS[m][Nc] ? ITEMS[m][Nc] : ""), 16777215, 0, -1),
	0 != m && m != Ic)
		if (b = w(m, Rc),
		9 == b)
			D.b(e, g + 16, "Compo Item", -1, 0),
			hg(e, g + 32, ITEMS[m][jd], 16777215, 0, -1),
			hg(e, g + 44, ITEMS[m][kd], 16777215, 0, -1);
		else {
			D.b(e, g + 16, "AT " + ITEMS[m][AT_MIN_INDEX] + "-" + ITEMS[m][AT_MAX_INDEX], 16777215, 0);
			D.b(e, g + 28, "AGI " + ITEMS[m][AGI_MIN_INDEX] + "-" + ITEMS[m][AGI_MAX_INDEX], 16777215, 0);
			D.b(e, g + 40, "RANGE " + ITEMS[m][RANGE_INDEX], 16777215, 0);
			c = w(m, $c);
			d = w(m, ad);
			k = ig(w(m, bd), 0);
			r = w(m, dd);
			m = w(m, ed);
			if (1 == c || 2 == c || 3 == c || 4 == c || 5 == c)
				x(l, yd) && (r += y(l, t),
				m += y(l, id)),
				x(l, Ad) && (r += y(l, t),
				m += y(l, id)),
				x(l, Cd) && (r += y(l, t),
				m += y(l, id)),
				x(l, Dd) && (r += y(l, t),
				m += y(l, id)),
				x(l, Bd) && (d += y(l, t)),
				x(l, Ed) && (d += y(l, t)),
				x(l, Fd) && (d += y(l, t));
			D.b(e, g + 56, "TYPE " + "physical fire ice thunder poison freeze".split(" ")[c], 16777215, 0);
			D.b(e, g + 68, "AT " + r + "-" + m, 16777215, 0);
			6 == b ? D.b(e, g + 80, "$$ " + k, 16777215, 0) : D.b(e, g + 80, "MP " + k, 16777215, 0);
			2 == c ? D.b(e, g + 80, "        SLOW " + d + "%", 16777215, 0) : 4 == c ? D.b(e, g + 80, "        TIME " + d / 50 + "s", 16777215, 0) : 5 == c && D.b(e, g + 80, "        TIME " + d / 50 + "s", 16777215, 0);
			V(e + 0, g + 96, 12, 12, 0);
			V(e + 75, g + 96, 12, 12, 0);
			dg = 2;
			eg(Ra, e + 0, g + 96, 12, 12, 12 * w(Dc[l], Pc), 0, 12, 12, w(Dc[l], Sc));
			eg(Ra, e + 75, g + 96, 12, 12, 12 * w(Ec[l], Pc), 0, 12, 12, w(Ec[l], Sc));
			dg = 0;
			kf.b(e + 16, g + 96 + 3, ITEMS[Dc[l]][Mc].substring(0, 8 < ITEMS[Dc[l]][Mc].length ? 8 : ITEMS[Dc[l]][Mc].length) + " " + ITEMS[Dc[l]][Nc], -1, 0);
			kf.b(e + 75 + 16, g + 96 + 3, ITEMS[Ec[l]][Mc].substring(0, 8 < ITEMS[Ec[l]][Mc].length ? 8 : ITEMS[Ec[l]][Mc].length) + " " + ITEMS[Ec[l]][Nc], -1, 0)
		}
	e = 192;
	g = 271;
	Gf(kf, e - 15, g + 0 + 8, "PLA  ", 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	Gf(kf, e - 15, g + 0 + 16, "  YER", 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	Gf(kf, e - 15, g + 28 + 8, "WEA  ", 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	Gf(kf, e - 15, g + 28 + 16, "  PON", 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	Gf(kf, e - 15, g + 56 + 12, "COMPO", 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	Gf(kf, e - 15, g + 84 + 12, "COMPO", 0, 0, 0, 0, 0, 0, 0, 128, 5, 7);
	for (b = 0; 4 > b; b++)
		V(e + 32 * b, g - 12, 24, 4, 0),
		V(e + 32 * b, g - 12, floor(24 * p[b] / kc[b]), 4, 10027008),
		k = ig(w(q[s + b], bd), 1),
		c = w(q[s + b], Rc),
		4 != c && 5 != c && 6 != c && V(e + 32 * b, g - 6, floor(23 * fc[b] / k) + 1, 2, 128),
		V(e + 32 * b, g + 0, 24, 24, 0),
		V(e + 32 * b, g + 28, 24, 24, 0),
		Ng(b, 0) && V(e + 32 * b, g + 56, 24, 24, 0),
		Ng(b, 1) && V(e + 32 * b, g + 84, 24, 24, 0),
		eg(Qa, e + 32 * b, g, 24, 24, 24 * w(q[s + b], Rc), 0, 24, 24, 16777215),
		Yf(e + 32 * b, g, 24 * w(q[s + b], Rc), w(q[s + b], Sc)),
		dg = 2,
		eg(Ua, e + 32 * b, g + 28, 24, 24, 24 * w(q[s + b], Qc), 0, 24, 24, w(q[s + b], Sc)),
		Ng(b, 0) && eg(Ua, e + 32 * b, g + 56, 24, 24, 24 * w(Dc[s + b], Qc), 0, 24, 24, w(Dc[s + b], Sc)),
		Ng(b, 1) && eg(Ua, e + 32 * b, g + 84, 24, 24, 24 * w(Ec[s + b], Qc), 0, 24, 24, w(Ec[s + b], Sc)),
		dg = 0,
		ITEMS[q[s + b]][Nc] && kf.b(e + 32 * b + 19, g + 28 + 17, "" + ITEMS[q[s + b]][Nc], 16777215, -1),
		ITEMS[Dc[s + b]][Nc] && Ng(b, 0) && kf.b(e + 32 * b + 19, g + 56 + 17, "" + ITEMS[Dc[s + b]][Nc], 16777215, -1),
		ITEMS[Ec[s + b]][Nc] && Ng(b, 1) && kf.b(e + 32 * b + 19, g + 84 + 17, "" + ITEMS[Ec[s + b]][Nc], 16777215, -1);
	bg(e + 32 * tb - 1, g - 1, 26, 26, 16711680);
	e = 344;
	g = 271;
	D.b(e, g + -12, "ITEM", 16777215, 0);
	for (b = 0; 24 > b; b++)
		V(e + b % 6 * 28, g + 28 * floor(b / 6), 24, 24, 0),
		dg = 2,
		eg(Ua, e + b % 6 * 28, g + 28 * floor(b / 6), 24, 24, 24 * w(q[Fc + b], Qc), 0, 24, 24, w(q[Fc + b], Sc)),
		dg = 0,
		ITEMS[q[Fc + b]][Nc] && kf.b(e + b % 6 * 28 + 19, g + 28 * floor(b / 6) + 17, "" + ITEMS[q[Fc + b]][Nc], 16777215, -1);
	b = -1;
	e = 192;
	g = 271;
	Wf(e - 4, g - 4, 128, 112) && ub && (c = floor((cg - e + 4) / 32),
	d = floor((fg - g + 4) / 28),
	b = 4 * d + c,
	Og(e + 32 * c, g + 28 * d, 24, 24, 8388608));
	e = 344;
	g = 271;
	Wf(e - 4, g - 4, 168, 112) && ub && (c = floor((cg - e + 4) / 28),
	d = floor((fg - g + 4) / 28),
	b = Fc + 6 * d + c,
	Og(e + 28 * c, g + 28 * d, 24, 24, 8388608));
	Ne();
	if (0 <= b && 3 >= b && 0 == q[Gc] && Ef)
		tb = b;
	else if (s <= b && b < s + 4 && Ef) {
		if (0 == q[Gc] || w(q[Gc], Rc) == ec[b - 4])
			a = q[b],
			q[b] = q[Gc],
			q[Gc] = a,
			a = Dc[b],
			Dc[b] = Dc[Gc],
			Dc[Gc] = a,
			a = Ec[b],
			Ec[b] = Ec[Gc],
			Ec[Gc] = a,
			fc[b - 4] = 0,
			v.pa[b - 4] = 0
	} else
		8 <= b && 11 >= b && Ef ? 9 == w(q[Gc], Rc) && Ng(b - 8, 0) && (Dc[s + b - 8] = q[Gc],
		q[Gc] = 0,
		Dc[Gc] = 0,
		Ec[Gc] = 0,
		fc[b - 8] = 0) : 12 <= b && 15 >= b && Ef ? 9 == w(q[Gc], Rc) && Ng(b - 12, 1) && (Ec[s + b - 12] = q[Gc],
		q[Gc] = 0,
		Dc[Gc] = 0,
		Ec[Gc] = 0,
		fc[b - 12] = 0) : Fc <= b && b < Gc && Ef ? 1 == Jb && 0 != q[b] ? (k = floor(w(q[b], Oc) / 8),
		Ef && (pe.add(40, 200, 1, k, 0),
		q[b] = 0,
		Dc[b] = 0,
		Ec[b] = 0)) : (a = q[b],
		q[b] = q[Gc],
		q[Gc] = a,
		a = Dc[b],
		Dc[b] = Dc[Gc],
		Dc[Gc] = a,
		a = Ec[b],
		Ec[b] = Ec[Gc],
		Ec[Gc] = a) : -1 == b && 0 != q[Gc] && Ef && 256 > fg && 0 == a && (pe.add(v.a[tb][0].x, v.a[tb][0].y, q[Gc], Dc[Gc], Ec[Gc]),
		q[Gc] = 0,
		Dc[Gc] = 0,
		Ec[Gc] = 0);
	te();
	l = -1 == b ? tb : b;
	0 != q[Gc] && (dg = 2,
	J(Ua, cg, fg, 24, 24, 24 * w(q[Gc], Qc), 0, 24, 24, w(q[Gc], Sc)),
	dg = 0);
	1 == Jb && (c = K(cg, 56, ea - 56),
	d = K(fg - 8, 10, fa - 10),
	Fc <= b && b < Gc ? (k = floor(w(q[b], Oc) / 8),
	yf(D, c, d, "" + k + "$ SELL", 16777215, 0)) : yf(D, c, d, "CLICK TO SELL", 16777215, 0))
}

function Ng(a, b) {
	if (0 == q[Gc] || 9 != w(q[Gc], Rc))
		return !0;
	if (0 == q[s + a] || 0 == b && Dc[s + a] == Ic || 1 == b && Ec[s + a] == Ic)
		return !1;
	var c = w(q[Gc], hd);
	return 0 == b && c == w(Ec[s + a], hd) || 1 == b && c == w(Dc[s + a], hd) ? !1 : Oe(c, w(q[s + a], Rc), w(q[s + a], $c), w(q[s + a], Vc))
}

function Oe(a, b, c, d) {
	if (a == ld || a == md || a == nd || a == od || a == pd)
		return !0;
	if (a == qd) {
		if (1 == b || 2 == b || 3 == b || 6 == b || 7 == b || 8 == b)
			return !0
	} else if (a == rd) {
		if (1 == b || 2 == b || 3 == b || 6 == b || 7 == b || 8 == b)
			return !0
	} else {
		if (a == sd || a == td || a == ud)
			return !0;
		if (a == vd) {
			if (1 == b || 2 == b || 7 == b)
				return !0
		} else if (a == wd) {
			if (1 == b || 2 == b || 7 == b)
				return !0
		} else if (a == xd) {
			if (1 == b || 2 == b || 7 == b)
				return !0
		} else if (a == yd) {
			if (1 == c)
				return !0
		} else if (a == zd) {
			if (1 == c)
				return !0
		} else if (a == Ad) {
			if (2 == c)
				return !0
		} else if (a == Bd) {
			if (2 == c)
				return !0
		} else if (a == Cd) {
			if (3 == c)
				return !0
		} else if (a == Dd) {
			if (4 == c)
				return !0
		} else if (a == Ed) {
			if (4 == c)
				return !0
		} else if (a == Fd) {
			if (5 == c)
				return !0
		} else {
			if (a == Gd)
				return !0;
			if (a == Hd) {
				if (2 == b)
					return !0
			} else if (a == Id) {
				if (3 == b || 4 == b || 5 == b || 6 == b || 8 == b)
					return !0
			} else if (a == Jd) {
				if (3 == b || 4 == b || 6 == b)
					return !0
			} else if (a == Kd) {
				if (3 == b || 4 == b || 6 == b)
					return !0
			} else if (a == Ld) {
				if (2 <= d)
					return !0
			} else if (a == Md) {
				if (1 == b || 3 == b || 6 == b || 8 == b)
					return !0
			} else if (a == Zd) {
				if (1 == b || 3 == b || 4 == b || 6 == b || 7 == b)
					return !0
			} else if (a == Od) {
				if (1 == b || 2 == b || 3 == b || 6 == b || 7 == b || 8 == b)
					return !0
			} else if (a == Nd) {
				if (1 == b || 2 == b || 7 == b)
					return !0
			} else if (a == $d) {
				if (3 == b || 4 == b || 6 == b || 7 == b || 8 == b)
					return !0
			} else {
				if (a == Pd || a == Qd || a == Rd || a == Sd || a == Td || a == Ud || a == Vd || a == Wd || a == Xd)
					return !0;
				if (a == Yd) {
					if (1 == b || 7 == b)
						return !0
				} else if (a == ae) {
					if (2 == b)
						return !0
				} else {
					if (a == be)
						return !0;
					if (a == ce) {
						if (8 == b)
							return !0
					} else if (a == de || a == ee)
						return !0
				}
			}
		}
	}
	return !1
}
var Mg = 9,
	v = new Pg;

function Pg() {
	var a, b;
	this.a = Array(8);
	for (a = 0; 8 > a; a++)
		this.a[a] = Array(21);
	this.c = Array(8);
	for (a = 0; 8 > a; a++)
		this.c[a] = Array(21);
	this.step = new Int32Array(8);
	this.count = new Int32Array(8);
	this.h = new Int32Array(8);
	this.g = new Int32Array(8);
	this.l = new Int32Array(8);
	this.qa = new Int32Array(8);
	this.pa = new Int32Array(8);
	this.Za = new Int32Array(8);
	this.v = -1;
	this.T = 0;
	this.search = new Int32Array(8);
	this.L = this.fb = 0;
	this.C = new Int32Array(8);
	this.X = new Int32Array(8);
	this.D = new Int32Array(8);
	this.H = new Int32Array(8);
	this.B = new Int32Array(8);
	this.O = Array(8);
	for (a = 0; 8 > a; a++)
		this.O[a] = new Int32Array(6);
	this.aa = Array(8);
	for (a = 0; 8 > a; a++)
		this.aa[a] = new Int32Array(6);
	this.ba = Array(8);
	for (a = 0; 8 > a; a++)
		this.ba[a] = new Int32Array(6);
	for (a = 0; 8 > a; a++)
		for (b = 0; 21 > b; b++)
			this.a[a][b] = new Qg;
	for (a = 0; 8 > a; a++)
		for (b = 0; 21 > b; b++)
			this.c[a][b] = new Qg
}
Pg.prototype.j = function() {
	this.v = -1;
	this.T = 0
}
;
Pg.prototype.set = function(a, b, c) {
	b *= 8;
	c *= 8;
	for (var d = 0; 21 > d; d++)
		Rg(this.a[a][d], b + A(4), c + A(4)),
		this.c[a][d].set(this.a[a][d]);
	this.step[a] = ec[a];
	this.count[a] = 0;
	this.h[a] = 0;
	this.g[a] = -1;
	this.l[a] = 0;
	this.qa[a] = 0;
	this.pa[a] = 0;
	this.Za[a] = 0;
	this.search[a] = 0;
	this.C[a] = 0;
	this.X[a] = 0;
	this.D[a] = 0;
	this.H[a] = 0;
	for (d = this.B[a] = 0; 6 > d; d++)
		this.O[a][d] = 0,
		this.aa[a][d] = 0,
		this.ba[a][d] = 0
}
;
da.fff = Pg.prototype.kb;
Pg.prototype.kb = function(a, b) {
	var c = this.a[a][b],
		d = new Qg;
	d.q(c, this.c[a][b]);
	c.set(this.c[a][b]);
	var e = (Sg(d) >> 2) + 1;
	Tg(d, 1 / e);
	var g, k, r;
	k = K(c.x, 0, 511) >> 3;
	r = K(c.y, 0, 383) >> 3;
	k = I.e[r][k];
	if (9 == k)
		Tg(d, 0.95),
		this.h[a] |= 2;
	var m = 0.5;
	8 == Me[I.w][nb][0] && (m = 1);
	for (var n = 0; n < e; n++)
		g = c.y + d.y,
		k = K(c.x, 0, 511) >> 3,
		r = K(g, 0, 383) >> 3,
		k = I.e[r][k],
		384 <= g || (0 <= k && 8 >= k ? (d.x *= m,
		d.y = -d.y,
		this.h[a] |= 1) : c.y = g),
		g = c.x + d.x,
		k = K(g, 0, 511) >> 3,
		r = K(c.y, 0, 383) >> 3,
		k = I.e[r][k],
		0 > g || 512 <= g || (0 <= k && 8 >= k ? (d.y *= m,
		d.x = -d.x,
		this.h[a] |= 1) : c.x = g)
}
;
Pg.prototype.m = function(a, b, c, d, e) {
	var g = 0.5 * (a + c),
		k = 1E3,
		r = -1;
	if (1 == this.fb)
		return r;
	for (var m = e + 4; e < m; e++) {
		this.search[e] = 0;
		var n = this.a[e][2];
		this.step[e] == Mg || n.x - 5 > c || n.x + 5 < a || n.y - 10 > d || n.y + 10 < b || (this.search[e] = 1,
		Kg(n.x - g) < k && (k = Kg(n.x - g),
		r = e))
	}
	return r
}
;
Pg.prototype.K = function(a, b, c, d, e, g, k, r, m, n) {
	var F = -1;
	this.L = 0;
	r *= 0.5;
	m *= 0.5;
	for (var H = n + 4; n < H; n++)
		if (this.step[n] != Mg && !(this.a[n][2].x - 5 > g + r || this.a[n][2].x + 5 < g - r || this.a[n][2].y - 10 > k + m || this.a[n][2].y + 10 < k - m)) {
			var F = -1,
				M = d + floor(A(e - d + 1));
			this.qa[n] = 2;
			var E = 16711680;
			if (4 <= n)
				F = 1,
				E = 12632256;
			x(s + n, Nd) && (M += floor(M * y(s + n, id) / 100));
			var la = 0;
			1 == b && x(s + n, Pd) && (M += floor(M * y(s + n, id) / 100));
			if (2 == b)
				x(s + n, Ud) && A(100) < y(s + n, t) && (la = 1),
				0 == la && (this.C[n] = 500,
				this.X[n] = c,
				x(s + n, td) && (this.C[n] -= floor(this.C[n] * y(s + n, t) / 100)));
			else if (4 == b) {
				x(s + n, Vd) && A(100) < y(s + n, t) && (la = 1);
				if (0 == la)
					this.D[n] = c,
					this.H[n] = M,
					x(s + n, td) && (this.D[n] -= floor(this.D[n] * y(s + n, t) / 100),
					this.H[n] -= floor(this.H[n] * y(s + n, t) / 100));
				F = n;
				continue
			} else
				5 == b && (x(s + n, Wd) && A(100) < y(s + n, t) && (la = 1),
				0 == la && (this.B[n] = floor(c / 10),
				x(s + n, td) && (this.B[n] -= floor(this.B[n] * y(s + n, t) / 100))));
			if (0 == b)
				M = ig(1, M - floor(Bc[n] / 5));
			x(s + n, sd) && 0 == b && (M = ig(1, M - y(s + n, t)));
			x(s + n, td) && 0 != b && (M -= floor(M * y(s + n, t) / 100));
			x(s + n, ud) && A(100) < y(s + n, t) && (M = 0,
			this.qa[n] = 0,
			E = 16744576);
			Ne();
			p[n] = K(p[n] - M, 0, kc[n]);
			te();
			2 > wc && ne.add(this.a[n][0].x, this.a[n][0].y, F, M, E);
			this.L += M;
			F = n;
			if (0 == a)
				break
		}
	return F
}
;
da.fff = Pg.prototype.jb;
Pg.prototype.jb = function() {
	var a = new Qg, b, c;
	if (-1 == this.v && 1 != ga) {
		if (Ef) {
			b = 20;
			a.x = cg - this.c[tb][0].x;
			a.y = fg - (this.c[tb][0].y - 8);
			c = Sg(a);
			20 > c && c < b && (0 != p[tb] || 0 != zc) && (b = c,
			this.v = tb,
			this.T = 0);
			for (var d = 0; 4 > d; d++)
				if (0 != p[d] || 0 != zc)
					for (var e = 0; 10 > e; e++)
						a.x = cg - this.c[d][e].x,
						a.y = fg - this.c[d][e].y,
						c = Sg(a),
						20 > c && c < b && (b = c,
						this.v = d,
						this.T = e,
						tb = d)
		}
	} else
		Ug || (this.v = -1,
		this.T = 0)
}
;
Pg.prototype.p = function(a, b, c, d) {
	var e = new Qg,
		g = a;
	if (8 > a)
		g = q[s + a];
	var k = w(g, 8) % 100,
		r = floor(w(g, 8) / 100),
		m = w(g, 17),
		n = w(g, 18),
		F = w(g, Zc),
		H = w(g, 20),
		M = w(g, 21),
		E = w(g, 22),
		la = w(g, 23),
		Ja = w(g, 24),
		Ea = w(g, 25),
		Ca = w(g, 26),
		Z = w(g, 27),
		X = w(g, 28),
		$ = w(g, 29),
		ob = w(g, 30),
		pb = w(g, 31),
		Wa = w(g, 32),
		ta = w(g, 33),
		ya = 0,
		rb = w(g, 9),
		ia = 8 > a ? oc[a] : w(g, AT_MIN_INDEX),
		ka = 8 > a ? pc[a] : w(g, AT_MAX_INDEX),
		za = w(g, Vc),
		bb = w(g, 13),
		ab = w(g, $c),
		pa = w(g, ad),
		Xa = w(g, cd),
		Bb = w(g, 42),
		Cb = w(g, 43),
		Sa = w(g, fd),
		Oa = w(g, 45),
		Ob = w(g, 46),
		Pb = w(g, 47),
		Qb = w(g, 48),
		Rb = w(g, 49),
		Sb = w(g, 50),
		Tb = w(g, 51),
		qb = w(g, 52),
		Ub = w(g, 53),
		Vb = w(g, 54),
		Wb = w(g, 55),
		Xb = w(g, 56),
		Yb = w(g, 57),
		Zb = w(g, 38),
		ba = w(g, dd),
		U = w(g, ed),
		sc = w(g, 41),
		gd = ab,
		Ta = pa;
	if (8 > a) {
		var Db = w(q[s + a], Rc);
		1 == Db || 2 == Db || 7 == Db ? (ia = w(q[s + a], dd),
		ka = w(q[s + a], ed),
		x(s + a, yd) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, zd) && (Z += y(s + a, t)),
		x(s + a, Ad) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, Bd) && (pa += y(s + a, t)),
		x(s + a, Cd) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, Dd) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, Ed) && (pa += y(s + a, t)),
		x(s + a, Fd) && (pa += y(s + a, t)),
		ia += floor(ia * Ac[a] / 100),
		ka += floor(ka * Ac[a] / 100),
		7 == Db && (za += floor(mc[a] / 5))) : 3 == Db ? (402 != g && (pa = ab = 0),
		Ne(),
		g = w(q[s + a], bd),
		fc[a] = fc[a] + nc[a] < g ? fc[a] + nc[a] : g,
		fc[a] == g && 0 < g ? fc[a] = 0 : Xa = 0,
		te(),
		x(s + a, yd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, zd) && (qb += y(s + a, t)),
		x(s + a, Ad) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Bd) && (Ta += y(s + a, t)),
		x(s + a, Cd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Dd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Ed) && (Ta += y(s + a, t)),
		x(s + a, Fd) && (Ta += y(s + a, t)),
		ba += floor(ba * Ac[a] / 100),
		U += floor(U * Ac[a] / 100),
		x(s + a, Jd) && A(100) < y(s + a, t) && (pb = 1),
		x(s + a, Kd) && (ta += y(s + a, t)),
		x(s + a, Md) && A(100) < y(s + a, t) && (rb = 1),
		x(s + a, Od) && A(100) < y(s + a, t) && (ia += floor(y(s + a, id) * ia / 100),
		ka += floor(y(s + a, id) * ka / 100))) : 4 == Db || 5 == Db ? (x(s + a, yd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, zd) && (Z += y(s + a, t),
		qb += y(s + a, t)),
		x(s + a, Ad) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Bd) && (pa += y(s + a, t),
		Ta += y(s + a, t)),
		x(s + a, Cd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Dd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Ed) && (pa += y(s + a, t),
		Ta += y(s + a, t)),
		x(s + a, Fd) && (pa += y(s + a, t),
		Ta += y(s + a, t)),
		ba += floor(ba * Ac[a] / 100),
		U += floor(U * Ac[a] / 100),
		x(s + a, Jd) && A(100) < y(s + a, t) && (pb = 1),
		x(s + a, Kd) && (ta += y(s + a, t))) : 6 == Db ? (0 != Xa && (pa = ab = 0),
		x(s + a, yd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, zd) && (qb += y(s + a, t)),
		x(s + a, Ad) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Bd) && (Ta += y(s + a, t)),
		x(s + a, Cd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Dd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Ed) && (Ta += y(s + a, t)),
		x(s + a, Fd) && (Ta += y(s + a, t)),
		ba += floor(ba * Ac[a] / 100),
		U += floor(U * Ac[a] / 100),
		x(s + a, Jd) && A(100) < y(s + a, t) && (pb = 1),
		x(s + a, Kd) && (ta += y(s + a, t)),
		x(s + a, Md) && A(100) < y(s + a, t) && (rb = 1),
		x(s + a, Od) && A(100) < y(s + a, t) && (ia += floor(y(s + a, id) * ia / 100),
		ka += floor(y(s + a, id) * ka / 100))) : 8 == Db && (ia = w(q[s + a], dd),
		ka = w(q[s + a], ed),
		x(s + a, yd) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, yd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, zd) && (Z += y(s + a, t),
		qb += y(s + a, t)),
		x(s + a, Ad) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, Ad) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Bd) && (pa += y(s + a, t),
		Ta += y(s + a, t)),
		x(s + a, Cd) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, Cd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Dd) && (ia += y(s + a, t),
		ka += y(s + a, id)),
		x(s + a, Dd) && (ba += y(s + a, t),
		U += y(s + a, id)),
		x(s + a, Ed) && (pa += y(s + a, t),
		Ta += y(s + a, t)),
		x(s + a, Fd) && (pa += y(s + a, t),
		Ta += y(s + a, t)),
		ia += floor(ia * Ac[a] / 100),
		ka += floor(ka * Ac[a] / 100),
		ba += floor(ba * Ac[a] / 100),
		U += floor(U * Ac[a] / 100));
		x(s + a, Ld) && (za += y(s + a, t) + floor(za * y(s + a, id) / 100));
		(3 == Db || 4 == Db || 6 == Db) && x(s + a, Zd) && A(100) < y(s + a, t) && (ya = y(s + a, id));
		x(s + a, $d) && A(100) < y(s + a, t) && (Wa = 2)
	}
	Db = 0;
	1 != ga ? 6 == k ? (g = G.a[d][0].x,
	d = G.a[d][0].y) : (g = G.a[d][G.n].x,
	d = G.a[d][G.n].y) : (Db = 1 - (d >> 2),
	g = this.a[d][2].x,
	d = this.a[d][2].y);
	if (0 != k)
		if (1 == k)
			k = b + 10 * e.x,
			a = c + 10 * e.y,
			oe.add(Db, k, a, 0, 0, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
		else if (2 == k) {
			e = g - b;
			e /= Kg(e);
			k = b + 10 * e;
			a = c;
			for (var bc = e * bb * 0.1, eb = 0; eb < za; eb++)
				oe.add(Db, k, a, bc, 0, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta)
		} else if (3 == k) {
			Rg(e, g - b, d - c);
			for (var ve = 0 < r ? r : 16, r = floor(512 * Vg(e) / TAU), r = r - floor((za - 1) * ve / 2), eb = 0; eb < za; eb++) {
				e.x = Xe[r & 511][0];
				e.y = -Xe[r & 511][1];
				k = b + 10 * e.x;
				a = c + 10 * e.y;
				var bc = e.x * bb * 0.1,
					hf = e.y * bb * 0.1;
				oe.add(Db, k, a, bc, hf, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
				r += ve
			}
		} else if (4 == k)
			for (eb = 0; eb < za; eb++) {
				Rg(e, g - b, d - c);
				ve = 0 < r ? r : za + 4;
				if (1 < za) {
					var bc = floor(A(512)),
						jf = A(4) * ve;
					e.x += Xe[bc][0] * jf;
					e.y += Xe[bc][1] * jf
				}
				k = b;
				a = c;
				bc = e.x / bb;
				hf = (e.y - 0.5 * bb * bb * $ * 0.01) / bb;
				oe.add(Db, k, a, bc, hf, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta)
			}
		else if (5 == k)
			for (eb = 0; eb < za; eb++)
				0 == r ? (k = b + N(-40, 40),
				a = c + N(-60, 0)) : (k = b + N(-10 * (r - 1), 10 * (r - 1)),
				a = c + N(-60, -50)),
				Rg(e, g - k, d - a),
				Xg(e),
				Tg(e, bb),
				oe.add(Db, k, a, e.x, e.y, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
		else if (6 == k)
			for (eb = 0; eb < za; eb++)
				k = g + N(-bb, bb),
				a = d + N(-bb, bb),
				oe.add(Db, k, a, 0, 0, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
		else if (7 == k || 10 == k)
			for (e.x = b - this.a[a][5].x,
			e.y = c - this.a[a][5].y,
			10 == k && 0 < e.y && (e.y = -e.y),
			k = this.a[a][5].x + 0.5 * e.x,
			a = this.a[a][5].y + 0.5 * e.y,
			Xg(e),
			Tg(e, 0.1 * bb),
			eb = 0; eb < za; eb++)
				oe.add(Db, k, a, e.x, e.y, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
		else if (12 == k)
			for (e = b - this.a[a][0].x,
			e /= Kg(e),
			k = this.a[a][0].x,
			a = this.a[a][0].y,
			bc = e * bb * 0.1,
			eb = 0; eb < za; eb++)
				oe.add(Db, k, a, bc, 0, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
		else if (8 == k)
			for (eb = 0; eb < za; eb++)
				k = 0 == r ? g + N(-40, 40) : g + N(-10 * (r - 1), 10 * (r - 1)),
				a = d + N(-30, -60),
				oe.add(Db, k, a, 0, 0, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta);
		else if (9 == k)
			for (0 == r ? (k = g,
			a = d) : (k = b,
			a = c),
			b = floor(512 / za),
			bc = floor(A(b)),
			eb = 0; eb < za; eb++)
				e.x = Xe[bc][0] * bb,
				e.y = Xe[bc][1] * bb,
				oe.add(Db, k, a, e.x, e.y, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta),
				bc += b;
		else if (11 == k)
			for (Rg(e, g - b, d - c),
			jf = Xg(e),
			ve = 0 < r ? r : 0,
			eb = 0; eb < za; eb++)
				bc = N(-ve, ve),
				k = b + e.x * jf / 2 + e.y * bc,
				a = c + e.y * jf / 2 - e.x * bc,
				bc = bb * (eb + 1) / za * e.x,
				hf = bb * (eb + 1) / za * e.y,
				oe.add(Db, k, a, bc, hf, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, U, sc, gd, Ta)
}
;

function Yg(a, b) {
	if (0 != uc[b] || 1 == ga)
		if (0 < a.Za[b])
			a.Za[b]--;
		else if (!(20 > floor(100 * p[b] / kc[b]) && 1 != ga && 0 == vc)) {
			var c = 0.5 * (a.a[b][9].x + a.a[b][10].x), d = 0.5 * (a.a[b][9].y + a.a[b][10].y), e = tc[b], g;
			g = 1 != ga ? G.m(c - 200 - e, d - 20 - e, c + 200 + e, d + 100 + e) : v.m(c - 600, d - 300, c + 600, d + 300, 1 - (b >> 2) << 2);
			-1 != g && (a.Za[b] = 15,
			e = 0.6,
			c < (1 != ga ? G.a[g][G.n].x : a.a[g][2].x) ? (c = floor(K(c + 14, 0, 511) / 8),
			d = floor(K(d - 6, 8, 383) / 8),
			0 <= I.e[d][c] && 8 >= I.e[d][c] && (e = 2),
			0 <= I.e[d - 1][c] && 8 >= I.e[d - 1][c] && (e = 4),
			a.a[b][9].x < a.a[b][10].x ? (a.a[b][7].x += 4,
			a.a[b][7].y -= 3 * e) : (a.a[b][8].x += 4,
			a.a[b][8].y -= 3 * e)) : (c = floor(K(c - 14, 0, 511) / 8),
			d = floor(K(d - 6, 8, 383) / 8),
			0 <= I.e[d][c] && 8 >= I.e[d][c] && (e = 2),
			0 <= I.e[d - 1][c] && 8 >= I.e[d - 1][c] && (e = 4),
			a.a[b][9].x > a.a[b][10].x ? (a.a[b][7].x -= 4,
			a.a[b][7].y -= 3 * e) : (a.a[b][8].x -= 4,
			a.a[b][8].y -= 3 * e)))
		}
}

function Zg(a, b) {
	if (0 != uc[b] && !(20 > floor(100 * p[b] / kc[b]) && 0 == vc)) {
		var c = 0.5 * (a.a[b][9].x + a.a[b][10].x),
			d = 0.5 * (a.a[b][9].y + a.a[b][10].y),
			e = tc[b],
			e = 1 != ga ? G.m(c - 200 - e, d - 100 - e, c + 200 + e, d + 100 + e) : v.m(c - 600, d - 300, c + 600, d + 300, 1 - (b >> 2) << 2);
		-1 != e && 9 == I.e[floor(K(d, 8, 383) / 8)][floor(K(c, 0, 511) / 8)] && (c < (1 != ga ? G.a[e][G.n].x : a.a[e][2].x) ? (a.a[b][0].x += 0.25,
		a.a[b][1].x += 0.25) : (a.a[b][0].x -= 0.25,
		a.a[b][1].x -= 0.25),
		d < (1 != ga ? G.a[e][G.n].y : a.a[e][2].y) ? (a.a[b][0].y += 0.25,
		a.a[b][1].y += 0.25) : (a.a[b][0].y -= 0.25,
		a.a[b][1].y -= 0.25),
		a.a[b][0].x += N(-0.25, 0.25),
		a.a[b][0].y += N(-0.25, 0.25),
		a.a[b][1].x += N(-0.25, 0.25),
		a.a[b][1].y += N(-0.25, 0.25))
	}
}
da.fff = Pg.prototype.move;
Pg.prototype.move = function() {
	var a, b, c;
	this.jb();
	var d = 1 != ga ? 4 : 8;
	for (a = 0; a < d; a++)
		if (0 < this.D[a] && 0 < p[a] && (this.D[a]--,
		Ne(),
		p[a] = ig(p[a] - this.H[a], 0),
		te()),
		0 < this.B[a] && 0 < p[a])
			this.B[a]--;
		else {
			if (0 < this.C[a] && 0 < p[a] && (this.C[a]--,
			A(100) < this.X[a]))
				continue;
			0 != p[a] && (this.step[a] = 0 == q[s + a] ? 0 : ec[a]);
			if ((55 != h && 89 != h && nb != Me[h].length - 1 || 0 == G.index) && 0 < (this.h[a] & 1) && 0 != p[a]) {
				b = (this.a[a][9].x + this.a[a][10].x) / 2;
				c = (this.a[a][9].y + this.a[a][10].y) / 2;
				var e = I.I[63];
				7 == Me[h][nb][1] && (e = I.o[63]);
				500 < b && 10 > Kg(8 * e - c) && (sb = nb != Me[h].length - 1 ? 1 : 2)
			}
			this.count[a]++;
			if (0 == p[a])
				for (b = 0; 11 > b; b++)
					W(this.a[a][b], this.c[a][b], 0.05, 0.99);
			else if (2 == this.h[a])
				for (b = 0; 11 > b; b++)
					W(this.a[a][b], this.c[a][b], 0.01, 0.99);
			else if (10 > this.count[a])
				W(this.a[a][0], this.c[a][0], -0.2, 0.99),
				W(this.a[a][1], this.c[a][1], 0, 0.99),
				W(this.a[a][2], this.c[a][2], -0.1, 0.99),
				W(this.a[a][3], this.c[a][3], 0, 0.99),
				W(this.a[a][4], this.c[a][4], 0, 0.99),
				W(this.a[a][5], this.c[a][5], 0, 0.99),
				W(this.a[a][6], this.c[a][6], 0, 0.99),
				W(this.a[a][7], this.c[a][7], 0, 0.99),
				W(this.a[a][8], this.c[a][8], 0, 0.99),
				W(this.a[a][9], this.c[a][9], 0.3, 0.99),
				W(this.a[a][10], this.c[a][10], 0.3, 0.99);
			else
				for (b = 0; 11 > b; b++)
					W(this.a[a][b], this.c[a][b], 0.05, 0.99);
			if (0 == p[a] && this.step[a] != Mg) {
				this.step[a] = Mg;
				for (b = 0; 11 > b; b++)
					this.a[a][b].x += N(-2, 2),
					this.a[a][b].y += N(-1, -3);
				if (1 == ga)
					for (e = 1 - (a >> 2) << 2,
					b = 0; 4 > b; b++)
						x(s + e + b, Xd) && A(100) < y(s + e + b, t) && (c = v.m(this.a[a][0].x - 600, this.a[a][0].y - 300, this.a[a][0].x + 600, this.a[a][0].y + 300, a >> 2 << 2),
						-1 != c && v.p(y(s + e + b, id), this.a[a][0].x, this.a[a][0].y, c))
			}
			this.v == a && 1 != ga && (this.a[this.v][this.T].x += (cg - this.a[this.v][this.T].x) * (0 == p[a] ? 0.04 : 0.2),
			this.a[this.v][this.T].y += (fg - this.a[this.v][this.T].y) * (0 == p[a] ? 0.04 : 0.2));
			0 == this.step[a] || 1 == this.step[a] ? this.sa(a) : 2 == this.step[a] ? this.ta(a) : 3 == this.step[a] ? this.ua(a) : 4 == this.step[a] ? this.ma(a) : 5 == this.step[a] ? this.na(a) : 6 == this.step[a] ? this.va(a) : 7 == this.step[a] ? this.wa(a) : 8 == this.step[a] ? this.xa(a) : this.step[a] == Mg && (Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5),
			Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5),
			Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5),
			Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5),
			Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5));
			0 < (this.h[a] & 1) && (this.count[a] = 0);
			for (b = this.h[a] = 0; 11 > b; b++)
				this.kb(a, b)
		}
}
;
da.fff = Pg.prototype.sa;
Pg.prototype.sa = function(a) {
	var b, c, d = new Qg, e = 1 - (a >> 2) << 2;
	b = oc[a];
	var g = pc[a],
		k = qc[a] + $g(rc[a] - qc[a] + 1);
	c = tc[a];
	if (0 != this.h[a] && 0 != this.step[a] && this.v != a) {
		0 < this.l[a] && this.l[a]--;
		var r = 0.5 * (this.a[a][9].x + this.a[a][10].x),
			m = 0.5 * (this.a[a][9].y + this.a[a][10].y);
		c = 1 != ga ? G.m(r - c, m - c, r + c, m) : v.m(r - c, m - c, r + c, m, e);
		if (0 == this.l[a] && -1 != c) {
			this.l[a] = k;
			r < (1 != ga ? G.a[c][G.n].x : this.a[c][2].x) ? this.a[a][5].x < this.a[a][6].x ? (this.a[a][5].x += 4,
			this.a[a][4].x -= 4,
			this.a[a][2].y += 1,
			this.g[a] = 5) : (this.a[a][6].x += 4,
			this.a[a][3].x -= 4,
			this.a[a][2].y += 1,
			this.g[a] = 6) : this.a[a][5].x > this.a[a][6].x ? (this.a[a][5].x -= 4,
			this.a[a][4].x += 4,
			this.a[a][2].y += 1,
			this.g[a] = 5) : (this.a[a][6].x -= 4,
			this.a[a][3].x += 4,
			this.a[a][2].y += 1,
			this.g[a] = 6);
			Ne();
			k = w(q[s + a], bd);
			fc[a] = fc[a] + nc[a] < k ? fc[a] + nc[a] : k;
			if (fc[a] == k && 0 < k || -1 == k)
				fc[a] = 0,
				this.p(a, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, c);
			x(s + a, be) && (k = y(s + a, t),
			p[a] = K(p[a] + k, 0, kc[a]),
			ne.add(this.a[a][0].x, this.a[a][0].y, 0, k, 65280));
			te()
		}
		-1 == c && Yg(this, a);
		Zg(this, a)
	}
	if (-1 != this.g[a] && 0 != this.step[a] && this.v != a && (c = w(q[s + a], 9),
	x(s + a, Md) && A(100) < y(s + a, t) && (c = 1),
	x(s + a, Od) && A(100) < y(s + a, t) && (b += floor(y(s + a, id) * b / 100),
	g += floor(y(s + a, id) * g / 100)),
	k = 12,
	r = 8,
	x(s + a, Yd) && (k += floor(12 * y(s + a, t) / 100),
	r += floor(8 * y(s + a, t) / 100)),
	e = 1 != ga ? G.K(c, 0, 0, b, g, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, k, r) : v.K(c, 0, 0, b, g, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, k, r, e),
	-1 != e)) {
		this.g[a] = -1;
		x(s + a, vd) && (k = ig(1, floor(this.L * y(s + a, t) / 100)),
		Ne(),
		p[a] = K(p[a] + k, 0, kc[a]),
		te(),
		ne.add(this.a[a][0].x, this.a[a][0].y, 0, k, 65280));
		x(s + a, wd) && 0 == ga && A(100) < y(s + a, t) && pe.add(this.a[a][0].x, this.a[a][0].y, 2, 0, 0);
		if (x(s + a, xd) && 0 == ga && A(100) < y(s + a, t)) {
			g = 100;
			for (b = 0; 4 > b; b++)
				x(s + b, Sd) && (g += y(s + b, t));
			pe.add(this.a[a][0].x, this.a[a][0].y, 1, floor(this.L * g / 100), 0)
		}
		x(s + a, Zd) && A(100) < y(s + a, t) && (b = y(s + a, id),
		1 != ga ? d.q(G.a[e][0], this.a[a][1]) : d.q(v.a[e][1], this.a[a][1]),
		Xg(d),
		Tg(d, 0.2 * b),
		1 != ga ? Tg(d, ah[B[G.id[e]][bh]] / B[G.id[e]][ch]) : Tg(d, 0.1),
		1 != ga ? G.c[e][0].sub(d) : v.c[e][0].sub(d))
	}
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1)
}
;
da.fff = Pg.prototype.ta;
Pg.prototype.ta = function(a) {
	var b, c, d = new Qg, e = 1 - (a >> 2) << 2;
	b = oc[a];
	var g = pc[a],
		k = qc[a] + $g(rc[a] - qc[a] + 1),
		r = tc[a];
	if (0 != this.h[a] && this.v != a) {
		0 < this.l[a] && this.l[a]--;
		var m = 0.5 * (this.a[a][9].x + this.a[a][10].x),
			n = 0.5 * (this.a[a][9].y + this.a[a][10].y);
		c = 1 != ga ? G.m(m - r, n - r, m + r, n) : v.m(m - r, n - r, m + r, n, e);
		0 == this.l[a] && -1 != c && (this.l[a] = k,
		m < (1 != ga ? G.a[c][G.n].x : this.a[c][2].x) ? (this.a[a][5].x += 3,
		this.a[a][5].y += 0.2 * (n - 2 - this.a[a][5].y),
		this.a[a][6].x = this.a[a][5].x - 2,
		this.a[a][6].y = this.a[a][5].y,
		this.a[a][1].x -= 3) : (this.a[a][5].x -= 3,
		this.a[a][5].y += 0.2 * (n - 2 - this.a[a][5].y),
		this.a[a][6].x = this.a[a][5].x + 2,
		this.a[a][6].y = this.a[a][5].y,
		this.a[a][1].x += 3),
		this.g[a] = 5,
		Ne(),
		k = w(q[s + a], bd),
		fc[a] = fc[a] + nc[a] < k ? fc[a] + nc[a] : k,
		fc[a] == k && 0 < k && (fc[a] = 0,
		this.pa[a] = w(q[s + a], 41)),
		x(s + a, be) && (k = y(s + a, t),
		p[a] = K(p[a] + k, 0, kc[a]),
		ne.add(this.a[a][0].x, this.a[a][0].y, 0, k, 65280)),
		te());
		-1 == c && Yg(this, a);
		Zg(this, a)
	}
	if (-1 != this.g[a] && (x(s + a, Od) && A(100) < y(s + a, t) && (b += floor(y(s + a, id) * b / 100),
	g += floor(y(s + a, id) * g / 100)),
	d.q(this.a[a][5], this.a[a][6]),
	Xg(d),
	Tg(d, r),
	c = this.a[a][6].x + d.x / 2,
	k = this.a[a][6].y + d.y / 2,
	-1 != (1 != ga ? G.K(1, 0, 0, b, g, c, k, Kg(d.x), Kg(d.y)) : v.K(1, 0, 0, b, g, c, k, Kg(d.x), Kg(d.y), e)) && (this.g[a] = -1,
	x(s + a, vd) && (k = ig(1, floor(this.L * y(s + a, t) / 100)),
	Ne(),
	p[a] = K(p[a] + k, 0, kc[a]),
	te(),
	ne.add(this.a[a][0].x, this.a[a][0].y, 0, k, 65280)),
	x(s + a, wd) && 0 == ga && A(100) < y(s + a, t) && pe.add(this.a[a][0].x, this.a[a][0].y, 2, 0, 0),
	x(s + a, xd) && 0 == ga && A(100) < y(s + a, t)))) {
		g = 100;
		for (b = 0; 4 > b; b++)
			x(s + b, Sd) && (g += y(s + b, t));
		pe.add(this.a[a][0].x, this.a[a][0].y, 1, floor(this.L * g / 100), 0)
	}
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][4], 4.8, 0.01, 0.01);
	Y(this.a[a][5], this.a[a][6], 2.4, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1);
	0 < this.pa[a] && (this.pa[a]--,
	d.q(this.a[a][5], this.a[a][6]),
	Xg(d),
	Tg(d, r),
	d.add(this.a[a][6]),
	1 != ga ? this.p(a, d.x, d.y, 0) : this.p(a, d.x, d.y, e))
}
;
da.fff = Pg.prototype.ua;
Pg.prototype.ua = function(a) {
	var b;
	b = 1 - (a >> 2) << 2;
	var c = qc[a] + $g(rc[a] - qc[a] + 1),
		d = tc[a],
		e = 0.5 * (this.a[a][9].x + this.a[a][10].x),
		g = 0.5 * (this.a[a][9].y + this.a[a][10].y);
	b = 1 != ga ? G.m(e - d, g - d, e + d, g + d) : v.m(e - d, g - d, e + d, g + d, b);
	-1 != b && (e < (1 != ga ? G.a[b][G.n].x : this.a[b][2].x) ? (this.a[a][6].x += 0.2,
	this.a[a][6].y -= 0.2,
	this.a[a][5].x -= 0.2) : (this.a[a][6].x -= 0.2,
	this.a[a][6].y -= 0.2,
	this.a[a][5].x += 0.2),
	this.a[a][5].y += 0.2);
	0 != this.h[a] && this.v != a && (0 < this.l[a] && this.l[a]--,
	0 == this.l[a] && (-1 != b && (this.l[a] = c,
	Y(this.a[a][5], this.a[a][6], 2, 0.2, 0.2),
	this.g[a] = 6),
	-1 != this.g[a] && (this.p(a, this.a[a][6].x, this.a[a][6].y, b),
	this.g[a] = -1,
	x(s + a, be) && (c = y(s + a, t),
	Ne(),
	p[a] = K(p[a] + c, 0, kc[a]),
	te(),
	ne.add(this.a[a][0].x, this.a[a][0].y, 0, c, 65280)))),
	-1 == b && (Yg(this, a),
	Zg(this, a)));
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][5], this.a[a][6], 9.6, 0.02, 0.02);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1)
}
;
da.fff = Pg.prototype.ma;
Pg.prototype.ma = function(a) {
	var b;
	b = 1 - (a >> 2) << 2;
	var c = qc[a] + $g(rc[a] - qc[a] + 1),
		d = tc[a],
		e = 0.5 * (this.a[a][9].x + this.a[a][10].x),
		g = 0.5 * (this.a[a][9].y + this.a[a][10].y);
	b = 1 != ga ? G.m(e - d, g - d, e + d, g + d) : v.m(e - d, g - d, e + d, g + d, b);
	-1 != b && (e < (1 != ga ? G.a[b][G.n].x : this.a[b][2].x) ? (this.a[a][5].x += 0.1,
	this.a[a][6].x += 0.1,
	this.a[a][1].x -= 0.2) : (this.a[a][5].x -= 0.1,
	this.a[a][6].x -= 0.1,
	this.a[a][1].x += 0.2));
	0 != this.h[a] && this.v != a && (0 < this.l[a] && this.l[a]--,
	0 == this.l[a] && (-1 != b && (this.l[a] = c,
	e < (1 != ga ? G.a[b][G.n].x : this.a[b][2].x) ? (Y(this.a[a][5], this.a[a][6], 0, 0.1, 0.1),
	this.g[a] = 6) : (Y(this.a[a][5], this.a[a][6], 0, 0.1, 0.1),
	this.g[a] = 5)),
	-1 != this.g[a] && (this.p(a, this.a[a][6].x, this.a[a][6].y, b),
	this.g[a] = -1,
	x(s + a, be) && (c = y(s + a, t),
	Ne(),
	p[a] = K(p[a] + c, 0, kc[a]),
	te(),
	ne.add(this.a[a][0].x, this.a[a][0].y, 0, c, 65280)))),
	-1 == b && (Yg(this, a),
	Zg(this, a)));
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][5], this.a[a][6], 10.8, 0.01, 0.01);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1)
}
;
da.fff = Pg.prototype.na;
Pg.prototype.na = function(a) {
	var b, c, d = 1 - (a >> 2) << 2;
	b = qc[a] + $g(rc[a] - qc[a] + 1);
	c = tc[a];
	var e = 0.5 * (this.a[a][9].x + this.a[a][10].x),
		g = 0.5 * (this.a[a][9].y + this.a[a][10].y);
	c = 1 != ga ? G.m(e - c, g - c / 2, e + c, g + c / 2) : v.m(e - c, g - c / 2, e + c, g + c / 2, d);
	if (0 != this.h[a] && this.v != a) {
		0 < this.l[a] && this.l[a]--;
		if (0 == this.l[a] && -1 != c) {
			this.l[a] = b;
			this.a[a][6].y -= 2;
			this.a[a][5].y += 2;
			if (1 != ga)
				for (b = 0; b < G.index; b++)
					0 != G.search[b] && this.p(a, this.a[a][6].x, this.a[a][6].y, b);
			else
				for (b = d; b < d + 4; b++)
					0 != v.search[b] && this.p(a, this.a[a][6].x, this.a[a][6].y, b);
			if (x(s + a, be)) {
				d = y(s + a, t);
				Ne();
				for (b = a >> 2 << 2; b < (a >> 2 << 2) + 4; b++)
					a != b && 0 != p[b] && (p[b] = K(p[b] + d, 0, kc[b]),
					ne.add(this.a[b][0].x, this.a[b][0].y, 0, d, 65280));
				te()
			}
		}
		-1 == c && (Yg(this, a),
		Zg(this, a))
	}
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1)
}
;
da.fff = Pg.prototype.va;
Pg.prototype.va = function(a) {
	var b, c, d = new Qg;
	c = 1 - (a >> 2) << 2;
	b = qc[a] + $g(rc[a] - qc[a] + 1);
	var e = tc[a],
		g = 0.5 * (this.a[a][9].x + this.a[a][10].x),
		k = 0.5 * (this.a[a][9].y + this.a[a][10].y);
	c = 1 != ga ? G.m(g - e, k - e, g + e, k + e) : v.m(g - e, k - e, g + e, k + e, c);
	-1 != c && this.v != a && (1 != ga ? d.q(G.a[c][G.n], this.a[a][6]) : d.q(this.a[c][2], this.a[a][6]),
	Xg(d),
	this.a[a][5].x += 0.2 * d.x,
	this.a[a][5].y += 0.2 * d.y,
	this.a[a][6].x += 0.2 * d.x,
	this.a[a][6].y += 0.2 * d.y,
	this.a[a][1].x -= 0.4 * d.x,
	this.a[a][1].y -= 0.4 * d.y);
	if (0 != this.h[a] && this.v != a) {
		0 < this.l[a] && this.l[a]--;
		if (0 == this.l[a] && (-1 != c && (this.l[a] = b,
		this.a[a][5].y -= 1.5,
		this.a[a][6].y -= 1.5,
		this.a[a][3].y += 1.6,
		this.a[a][4].y += 1.6,
		this.g[a] = 6),
		-1 != this.g[a])) {
			e = w(q[s + a], bd);
			g = 1;
			258 == q[s + a] && (g = w(q[s + a], Vc),
			x(s + a, Ld) && (g += y(s + a, t) + floor(g * y(s + a, id) / 100)));
			Ne();
			if (0 < e && (e = ig(e - nc[a], 1),
			e * g <= MONEY)) {
				MONEY = K(MONEY - e * g, 0, 9999999);
				for (b = 0; b < g; b++)
					ne.add(this.a[a][6].x, this.a[a][6].y, 0 > d.x ? 0.5 : -0.5, e, 16776960);
				e = 0
			}
			0 == e && (this.p(a, this.a[a][6].x, this.a[a][6].y, c),
			x(s + a, be) && (d = y(s + a, t),
			p[a] = K(p[a] + d, 0, kc[a]),
			ne.add(this.a[a][0].x, this.a[a][0].y, 0, d, 65280)));
			te();
			this.g[a] = -1
		}
		-1 == c && (Yg(this, a),
		Zg(this, a))
	}
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][5], this.a[a][6], 1.2, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1)
}
;
da.fff = Pg.prototype.wa;
Pg.prototype.wa = function(a) {
	var b, c = new Qg, d = 1 - (a >> 2) << 2, e = oc[a], g = pc[a], k = qc[a] + $g(rc[a] - qc[a] + 1), r = tc[a];
	for (b = 11; 14 >= b; b++)
		W(this.a[a][b], this.c[a][b], 0.05, 0.95);
	if (0 != this.h[a] && this.v != a) {
		0 < this.l[a] && this.l[a]--;
		b = 0.5 * (this.a[a][9].x + this.a[a][10].x);
		var m = 0.5 * (this.a[a][9].y + this.a[a][10].y);
		b = 1 != ga ? G.m(b - r, m - r - 20, b + r, m + 20) : v.m(b - r, m - r - 20, b + r, m + 20, d);
		0 == this.l[a] && -1 != b && (this.l[a] = k,
		this.a[a][5].x < this.a[a][6].x ? (this.a[a][5].x += 4,
		this.a[a][4].x -= 4) : (this.a[a][6].x += 4,
		this.a[a][3].x -= 4),
		this.a[a][2].y += 1,
		this.g[a] = 14,
		Ne(),
		k = w(q[s + a], bd),
		fc[a] = fc[a] + nc[a] < k ? fc[a] + nc[a] : k,
		x(s + a, be) && (k = y(s + a, t),
		p[a] = K(p[a] + k, 0, kc[a]),
		ne.add(this.a[a][0].x, this.a[a][0].y, 0, k, 65280)),
		te());
		-1 == b && Yg(this, a);
		Zg(this, a)
	}
	if (-1 != this.g[a] && (x(s + a, Od) && A(100) < y(s + a, t) && (e += floor(y(s + a, id) * e / 100),
	g += floor(y(s + a, id) * g / 100)),
	k = 20,
	x(s + a, Yd) && (k += floor(20 * y(s + a, t) / 100)),
	d = 1 != ga ? G.K(1, 0, 0, e, g, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, k, k) : v.K(1, 0, 0, e, g, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, k, k, d),
	-1 != d)) {
		Ne();
		k = w(q[s + a], bd);
		if (fc[a] == k && 0 < k || -1 == k)
			fc[a] = 0,
			e = this.a[a][this.g[a]].y,
			g = floor(K(this.a[a][this.g[a]].x, 0, 511) / 8),
			k = floor(K(this.a[a][this.g[a]].y, 0, 255) / 8),
			0 <= k - I.o[g] ? e = 8 * I.o[g] + 7 : 3 >= Kg(k - I.I[g]) && (e = 8 * I.I[g] + 7),
			this.p(a, this.a[a][this.g[a]].x, e, d);
		te();
		this.g[a] = -1;
		x(s + a, vd) && (k = ig(1, floor(this.L * y(s + a, t) / 100)),
		Ne(),
		p[a] = K(p[a] + k, 0, kc[a]),
		te(),
		ne.add(this.a[a][0].x, this.a[a][0].y, 0, k, 65280));
		x(s + a, wd) && 0 == ga && A(100) < y(s + a, t) && pe.add(this.a[a][0].x, this.a[a][0].y, 2, 0, 0);
		if (x(s + a, xd) && 0 == ga && A(100) < y(s + a, t)) {
			e = 100;
			for (b = 0; 4 > b; b++)
				x(s + b, Sd) && (e += y(s + b, t));
			pe.add(this.a[a][0].x, this.a[a][0].y, 1, floor(this.L * e / 100), 0)
		}
		x(s + a, Zd) && A(100) < y(s + a, t) && (e = y(s + a, id),
		1 != ga ? c.q(G.a[d][0], this.a[a][1]) : c.q(v.a[d][1], this.a[a][1]),
		Xg(c),
		Tg(c, 0.2 * e),
		1 != ga ? Tg(c, ah[B[G.id[d]][bh]] / B[G.id[d]][ch]) : Tg(c, 0.1),
		1 != ga ? G.c[d][0].sub(c) : v.c[d][0].sub(c))
	}
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][5], this.a[a][6], 14.4, 0.02, 0.02);
	Y(this.a[a][5], this.a[a][11], 4.8, 0, 0.3);
	Y(this.a[a][11], this.a[a][12], 4.8, 0, 0.3);
	Y(this.a[a][12], this.a[a][13], 4.8, 0, 0.3);
	Y(this.a[a][13], this.a[a][14], 4.8, 0, 0.3);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1)
}
;
da.fff = Pg.prototype.xa;
Pg.prototype.xa = function(a) {
	var b, c, d = new Qg, e = 1 - (a >> 2) << 2, g = oc[a], k = pc[a], r = qc[a] + $g(rc[a] - qc[a] + 1), m = tc[a], n;
	n = 10 > mc[a] ? 1 : 30 > mc[a] ? 2 : 60 > mc[a] ? 3 : 100 > mc[a] ? 4 : 5;
	x(s + a, ce) && (n += 1);
	for (b = 11; 14 >= b; b++)
		W(this.a[a][b], this.c[a][b], 0.05, 0.95);
	for (b = 15; 20 >= b; b++)
		W(this.a[a][b], this.c[a][b], 0, 1);
	this.a[a][11].x -= 0.1;
	this.a[a][11].y -= 0.1;
	this.a[a][12].x -= 0.1;
	this.a[a][12].y += 0.1;
	this.a[a][13].x += 0.1;
	this.a[a][13].y -= 0.1;
	this.a[a][14].x += 0.1;
	this.a[a][14].y += 0.1;
	if (0 != this.h[a] && this.v != a) {
		0 < this.l[a] && this.l[a]--;
		b = 0.5 * (this.a[a][9].x + this.a[a][10].x);
		c = 0.5 * (this.a[a][9].y + this.a[a][10].y);
		c = 1 != ga ? G.m(b - m, c - m, b + m, c + m) : v.m(b - m, c - m, b + m, c + m, e);
		for (b = 0; b < n && 0 != this.O[a][b]; b++)
			;
		0 == this.l[a] && -1 != c && b != n && (this.l[a] = r,
		this.O[a][b] = 1,
		this.aa[a][b] = floor(m / 2) + 20,
		this.ba[a][b] = 0,
		this.a[a][12].x -= 2,
		this.a[a][14].x += 2,
		this.g[a] = 15 + b,
		this.a[a][this.g[a]].set(this.a[a][0]),
		this.a[a][this.g[a]].y -= 5,
		this.c[a][this.g[a]].set(this.a[a][this.g[a]]),
		1 != ga ? d.q(G.a[c][G.n], this.a[a][this.g[a]]) : d.q(this.a[c][1], this.a[a][this.g[a]]),
		Xg(d),
		Tg(d, 2),
		this.a[a][this.g[a]].add(d));
		-1 == c && (Yg(this, a),
		Zg(this, a))
	}
	for (b = 0; b < n; b++)
		if (0 != this.O[a][b] && (this.g[a] = 15 + b,
		this.aa[a][b]--,
		0 >= this.aa[a][b] && (1 == this.O[a][b] ? (this.O[a][b]++,
		d.set(this.a[a][0]),
		d.y -= 5,
		this.c[a][this.g[a]].set(this.a[a][this.g[a]]),
		d.q(d, this.a[a][this.g[a]]),
		r = Xg(d),
		Tg(d, 2),
		this.a[a][this.g[a]].add(d),
		this.aa[a][b] = floor(r / 2)) : (this.O[a][b] = 0,
		this.aa[a][b] = 0,
		this.ba[a][b] = 0)),
		this.ba[a][b]--,
		!(0 < this.ba[a][b]) && (r = 0,
		x(s + a, Md) && A(100) < y(s + a, t) && (r = 1),
		x(s + a, Od) && A(100) < y(s + a, t) && (g += floor(y(s + a, id) * g / 100),
		k += floor(y(s + a, id) * k / 100)),
		r = 1 != ga ? G.K(r, 0, 0, g, k, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, 10, 10) : v.K(r, 0, 0, g, k, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, 10, 10, e),
		-1 != r))) {
			Ne();
			m = w(q[s + a], bd);
			fc[a] = fc[a] + nc[a] < m ? fc[a] + nc[a] : m;
			if (fc[a] == m && 0 < m || -1 == m)
				fc[a] = 0,
				this.p(a, this.a[a][this.g[a]].x, this.a[a][this.g[a]].y, r);
			x(s + a, be) && (r = y(s + a, t),
			p[a] = K(p[a] + r, 0, kc[a]),
			ne.add(this.a[a][0].x, this.a[a][0].y, 0, r, 65280));
			te();
			this.ba[a][b] = w(q[s + a], 7)
		}
	Y(this.a[a][0], this.a[a][1], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][2], 3.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][3], 4.8, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][4], 4.8, 0.5, 0.5);
	Y(this.a[a][3], this.a[a][5], 4.8, 0.5, 0.5);
	Y(this.a[a][4], this.a[a][6], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][7], 4.8, 0.5, 0.5);
	Y(this.a[a][2], this.a[a][8], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][9], 4.8, 0.5, 0.5);
	Y(this.a[a][8], this.a[a][10], 4.8, 0.5, 0.5);
	Y(this.a[a][7], this.a[a][8], 6, 0.1, 0.1);
	Y(this.a[a][1], this.a[a][11], 3.6, 0, 0.1);
	Y(this.a[a][1], this.a[a][12], 12, 0, 0.1);
	Y(this.a[a][11], this.a[a][12], 9.6, 0.5, 0.5);
	Y(this.a[a][1], this.a[a][13], 3.6, 0, 0.1);
	Y(this.a[a][1], this.a[a][14], 12, 0, 0.1);
	Y(this.a[a][13], this.a[a][14], 9.6, 0.5, 0.5)
}
;
da.fff = Pg.prototype.b;
Pg.prototype.b = function() {
	var a, b, c = new Qg, d = new Qg, e = 1 != ga ? 4 : 8;
	for (a = 0; a < e; a++) {
		var g = w(q[s + a], RANGE_INDEX),
			k = w(q[s + a], Sc),
			r = 15908203,
			m = 16777215;
		x(s + a, Pd) && (r = 13421772,
		m = 3342438);
		0 < this.B[a] ? (r = 1989840,
		m = 5934817) : 0 < this.C[a] ? (r = 9840,
		m = 1989840) : 0 < this.D[a] && (r = 3381504,
		m = 3407616);
		0 < this.qa[a] && (this.qa[a]--,
		m = 16711680);
		dg = Xf = 1;
		if (a == tb && 0 == ga && 2 == yc)
			for (b = 0; 11 > b; b++)
				J(cb, floor(this.a[a][b].x), floor(this.a[a][b].y), 12, 12, 0, 0, 12, 12, 1358888960);
		else if (0 < Lb) {
			Lb--;
			var n = 64 > Lb ? Lb : 64;
			for (b = 0; 11 > b; b++)
				J(cb, floor(this.a[a][b].x), floor(this.a[a][b].y), 24, 24, 0, 0, 12, 12, n << 24 | 16777062);
			120 < Lb && (b = $g(11),
			v.p(563, v.a[a][b].x, v.a[a][b].y, 0))
		} else
			for (b = 0; 11 > b; b++)
				J(cb, floor(this.a[a][b].x), floor(this.a[a][b].y), 12, 12, 0, 0, 12, 12, 1073741824);
		Xf = dg = 0;
		8 == this.step[a] && (b = (k & 16711680) >> 17 << 16 | (k & 65280) >> 9 << 8 | (k & 255) >> 1,
		L(this.a[a][1].x, this.a[a][1].y, this.a[a][11].x, this.a[a][11].y, b),
		L(this.a[a][1].x, this.a[a][1].y, this.a[a][12].x, this.a[a][12].y, b),
		L(this.a[a][11].x, this.a[a][11].y, this.a[a][12].x, this.a[a][12].y, b),
		L(this.a[a][1].x, this.a[a][1].y, this.a[a][13].x, this.a[a][13].y, b),
		L(this.a[a][1].x, this.a[a][1].y, this.a[a][14].x, this.a[a][14].y, b),
		L(this.a[a][13].x, this.a[a][13].y, this.a[a][14].x, this.a[a][14].y, b));
		L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, m);
		this.step[a] != Mg && (L(this.a[a][1].x, this.a[a][1].y, this.a[a][3].x, this.a[a][3].y, m),
		L(this.a[a][1].x, this.a[a][1].y, this.a[a][4].x, this.a[a][4].y, m));
		L(this.a[a][3].x, this.a[a][3].y, this.a[a][5].x, this.a[a][5].y, m);
		L(this.a[a][4].x, this.a[a][4].y, this.a[a][6].x, this.a[a][6].y, m);
		this.step[a] != Mg && (L(this.a[a][2].x, this.a[a][2].y, this.a[a][7].x, this.a[a][7].y, m),
		L(this.a[a][2].x, this.a[a][2].y, this.a[a][8].x, this.a[a][8].y, m));
		L(this.a[a][7].x, this.a[a][7].y, this.a[a][9].x, this.a[a][9].y, m);
		L(this.a[a][8].x, this.a[a][8].y, this.a[a][10].x, this.a[a][10].y, m);
		bg(floor(this.a[a][0].x) - 2, floor(this.a[a][0].y) - 2, 5, 5, r);
		dg = 2;
		x(s + a, de) && eg(Ra, floor(this.a[a][0].x) - 6, floor(this.a[a][0].y) - 6 - 6, 12, 12, 228, 0, 12, 12, 16766720);
		x(s + a, ee) && eg(Ra, floor(this.a[a][0].x) - 6, floor(this.a[a][0].y) - 6 - 6, 12, 12, 228, 0, 12, 12, 14540253);
		dg = 0;
		if (1 == this.step[a])
			g = 3,
			x(s + a, Yd) && (g = 5),
			V(floor(this.a[a][5].x) - 1, floor(this.a[a][5].y) - 1, g, g, k),
			V(floor(this.a[a][6].x) - 1, floor(this.a[a][6].y) - 1, g, g, k);
		else if (2 == this.step[a])
			x(s + a, Hd) && (g += y(s + a, t)),
			x(s + a, ae) && (g += y(s + a, id)),
			c.q(this.a[a][5], this.a[a][6]),
			Xg(c),
			Tg(c, g),
			c.add(this.a[a][6]),
			L(this.a[a][6].x, this.a[a][6].y, c.x, c.y, k);
		else if (3 == this.step[a])
			c.q(this.a[a][6], this.a[a][5]),
			Xg(c),
			d.set(c),
			dh(d),
			Tg(c, 18),
			c.add(this.a[a][5]),
			L(this.a[a][5].x, this.a[a][5].y, c.x, c.y, k),
			Tg(d, 8),
			eh(c, this.a[a][6], d),
			L(this.a[a][5].x, this.a[a][5].y, c.x, c.y, 8421504),
			d.q(this.a[a][6], d),
			L(this.a[a][5].x, this.a[a][5].y, d.x, d.y, 8421504),
			L(c.x, c.y, d.x, d.y, 12632256);
		else if (4 == this.step[a])
			eh(c, this.a[a][5], this.a[a][6]),
			Tg(c, 0.5),
			V(floor(c.x) - 1, floor(c.y) - 1, 3, 3, k);
		else if (5 == this.step[a])
			c.x = this.a[a][0].x + N(-10, 10),
			c.y = this.a[a][0].y + N(-10, 0),
			c.q(this.a[a][6], this.a[a][4]),
			Xg(c),
			dh(c),
			Tg(c, 8),
			L(this.a[a][6].x - c.x, this.a[a][6].y - c.y, this.a[a][6].x + c.x, this.a[a][6].y + c.y, 8421504),
			V(floor(this.a[a][6].x + c.x) - 1, floor(this.a[a][6].y + c.y) - 1, 3, 3, k);
		else if (6 == this.step[a])
			g = floor(K(floor(this.a[a][6].x) - floor(this.a[a][1].x), -8, 8) / 2),
			-4 == g ? V(floor(this.a[a][6].x) - 5, floor(this.a[a][6].y) - 2, 7, 2, k) : -3 == g ? V(floor(this.a[a][6].x) - 4, floor(this.a[a][6].y) - 2, 6, 2, k) : -2 == g ? V(floor(this.a[a][6].x) - 3, floor(this.a[a][6].y) - 2, 5, 2, k) : -1 == g ? V(floor(this.a[a][6].x) - 2, floor(this.a[a][6].y) - 2, 3, 2, k) : 0 == g ? V(floor(this.a[a][6].x) - 1, floor(this.a[a][6].y) - 3, 2, 2, k) : 1 == g ? V(floor(this.a[a][6].x) - 1, floor(this.a[a][6].y) - 2, 3, 2, k) : 2 == g ? V(floor(this.a[a][6].x) - 2, floor(this.a[a][6].y) - 2, 5, 2, k) : 3 == g ? V(floor(this.a[a][6].x) - 2, floor(this.a[a][6].y) - 2, 6, 2, k) : 4 == g && V(floor(this.a[a][6].x) - 2, floor(this.a[a][6].y) - 2, 7, 2, k),
			V(floor(this.a[a][6].x) - 1, floor(this.a[a][6].y) - 2, 2, 4, k);
		else if (7 == this.step[a])
			g = 3,
			x(s + a, Yd) && (g = 5),
			b = (k & 16711680) >> 17 << 16 | (k & 65280) >> 9 << 8 | (k & 255) >> 1,
			L(this.a[a][5].x, this.a[a][5].y, this.a[a][11].x, this.a[a][11].y, b),
			L(this.a[a][11].x, this.a[a][11].y, this.a[a][12].x, this.a[a][12].y, b),
			L(this.a[a][12].x, this.a[a][12].y, this.a[a][13].x, this.a[a][13].y, b),
			L(this.a[a][13].x, this.a[a][13].y, this.a[a][14].x, this.a[a][14].y, b),
			V(floor(this.a[a][14].x) - 1, floor(this.a[a][14].y) - 1, g, g, k);
		else if (8 == this.step[a]) {
			g = 10 > mc[a] ? 1 : 30 > mc[a] ? 2 : 60 > mc[a] ? 3 : 100 > mc[a] ? 4 : 5;
			x(s + a, ce) && (g += 1);
			for (b = 0; b < g && 0 != this.O[a][b]; b++)
				;
			b != g && J(cb, floor(this.a[a][0].x), floor(this.a[a][0].y) - 5, 7, 3, 33, 0, 7, 3, k);
			for (b = 0; b < g; b++)
				0 != this.O[a][b] && J(cb, floor(this.a[a][15 + b].x), floor(this.a[a][15 + b].y), 7, 3, 33, 0, 7, 3, k)
		}
		40 != f && (0 < Ac[a] + Bc[a] && (Xf = 2,
		dg = 1,
		k = Ac[a],
		k < Bc[a] && (k = Bc[a]),
		k < Cc[a] && (k = Cc[a]),
		k = 4278190080 | 255 * Ac[a] / k << 16 | 255 * Bc[a] / k << 8 | 255 * Cc[a] / k,
		J(cb, floor(floor(this.a[a][9].x + this.a[a][10].x) / 2), floor(floor(this.a[a][9].y + this.a[a][10].y) / 2), 20, 12, 12, 0, 20, 12, k),
		Xf = dg = 0),
		0 < (xc & 1) && 0 < p[a] && (V(floor(this.a[a][0].x) - 6, floor(this.a[a][0].y) - 6, 13, 2, 10027008),
		V(floor(this.a[a][0].x) - 6, floor(this.a[a][0].y) - 6, floor(13 * p[a] / kc[a]), 2, 52224)),
		a == tb && 0 == ga && (0 == yc ? V(floor(this.a[a][0].x) - 1, floor(this.a[a][0].y) - 8, 3, 3, 16776960) : 1 == yc && (L(floor(this.a[a][0].x) - 3, floor(this.a[a][0].y) - 14, floor(this.a[a][0].x) + 3, floor(this.a[a][0].y) - 14, 16776960),
		L(floor(this.a[a][0].x) - 3, floor(this.a[a][0].y) - 14, floor(this.a[a][0].x) + 0.5, floor(this.a[a][0].y) - 7, 16776960),
		L(floor(this.a[a][0].x) + 3.5, floor(this.a[a][0].y) - 14, floor(this.a[a][0].x) + 0.5, floor(this.a[a][0].y) - 7, 16776960))))
	}
}
;
var Pe = [0, 0, 5, 9, 14, 19, 23, 27, 31, 35, 39, 41, 45, 49, 53, 57, 61, 65, 70, 75, 80, 80, 85, 90, 94, 98, 102, 106, 110, 114, 116, 120, 124, 128, 130, 134, 138, 142, 146, 150, 154, 158, 162, 164, 168, 172, 176, 180, 180, 185, 190, 195, 199, 203, 207, 211, 215, 219, 223, 227, 231, 235, 239, 243, 245, 249, 253, 257, 260, 264, 268, 268, 270, 274, 278, 282, 286, 290, 290, 294, 298, 302, 306, 310, 315, 320, 324, 328, 332, 338, 339],
	Qe = 0,
	bh = 1,
	ch = 3,
	lg = 6,
	pg = 35,
	qg = 36,
	rg = 37,
	sg = 38,
	tg = 39,
	ug = 40,
	Re = 60,
	ng = 61,
	mg = 62,
	og = 63,
	B = [[1, 0, 1, 1, 3394611, 10053171, 10, 2, 1, 1, 4294967091, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 1, 3, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 1, 7, 40, 189, 40, 19, 80], [2, 0, 1, 1, 3394815, 10053171, 20, 2, 1, 1, 4294967091, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 2, 3, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 3, 8, 15, 290, 15, 20, 40], [3, 0, 2, 1, 13369344, 10053171, 50, 2, 1, 1, 4294967091, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 3, 5, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 10, 9, 60, 60, 40, 21, 70], [4, 0, 3, 1, 255, 10053171, 40, 4, 0, 2, 4286611584, 1, 16, 16, 8, 8, 0, 0, 100, 10, 5, 100, 0, 0, 0, 0, 4, 5, 1, 100, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 15, 10, 15, 77, 15, 22, 40], [5, 0, 2, 2, 8421504, 10053171, 500, 3, 0, 2, 4286611584, 1, 8, 8, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 1, 3, 10, 10, 10, 15, 120, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 100, 9, 3, 7, 5, 48, 10], [5, 1, 4, 1, 3394611, 3381555, 50, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 3, 4, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 10, 13, 40, 0, 0, 23, 80], [6, 1, 2, 1, 8421504, 10053171, 80, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 4, 6, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 20, 14, 20, 0, 0, 24, 60], [7, 1, 4, 1, 13382451, 10027008, 90, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 6, 8, 3, 20, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 30, 12, 15, 78, 15, 25, 30], [8, 1, 4, 2, 3394611, 3381555, 200, 3, 1, 4, 4294967295, 1, 24, 24, 12, 12, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 8, 12, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 30, 11, 15, 0, 0, 39, 50], [8, 2, 4, 1, 16764057, 13408563, 60, 3, 1, 9, 4294967295, 1, 16, 16, 8, 8, 0, 0, 50, 30, 0, 100, 0, 0, 0, 0, 3, 4, 1, 10, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 30, 15, 30, 0, 0, 26, 70], [9, 0, 2, 1, 13395456, 10053171, 120, 2, 1, 1, 4294967091, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 8, 12, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 30, 17, 30, 79, 40, 28, 80], [10, 0, 3, 1, 6684825, 13408563, 110, 4, 0, 2, 4286611584, 1, 16, 16, 8, 8, 0, 0, 150, 10, 4, 100, 0, 0, 0, 0, 6, 8, 1, 120, 50, 20, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 40, 18, 20, 0, 0, 19, 40], [11, 2, 4, 1, 16737792, 13408563, 110, 3, 1, 9, 4294967295, 1, 16, 16, 8, 8, 0, 0, 50, 30, 0, 100, 0, 0, 0, 0, 6, 8, 3, 10, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 16, 20, 0, 0, 23, 40], [12, 2, 4, 2, 8421504, 10053171, 500, 3, 1, 9, 4286611584, 1, 16, 16, 8, 8, 0, 0, 150, 30, 0, 100, 0, 0, 0, 0, 5, 6, 12, 20, 50, 15, 100, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 200, 16, 5, 0, 0, 40, 10], [10, 3, 4, 1, 10079232, 6710886, 90, 1, 1, 2, 4288269312, 1, 8, 8, 8, 8, 0, 0, 100, 20, 5, 100, 0, 0, 0, 0, 1, 4, 1, 0, 20, 50, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 40, 61, 20, 0, 0, 31, 80], [10, 1, 2, 1, 6723840, 6710784, 200, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 8, 12, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 40, 0, 0, 0, 0, 33, 80], [11, 2, 4, 1, 6723840, 6710784, 140, 3, 1, 9, 4294967295, 1, 16, 16, 8, 8, 0, 0, 50, 30, 0, 100, 0, 0, 0, 0, 6, 8, 2, 10, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 50, 291, 20, 0, 0, 35, 80], [12, 3, 4, 2, 10027008, 3342336, 160, 1, 1, 2, 4288217088, 1, 8, 8, 8, 8, 0, 0, 100, 20, 5, 100, 0, 0, 0, 0, 1, 8, 1, 0, 20, 100, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 60, 190, 10, 0, 0, 36, 30], [14, 3, 4, 3, 13395456, 10027008, 800, 3, 1, 2, 4291585536, 1, 16, 16, 8, 8, 0, 0, 150, 30, 3, 100, 0, 0, 0, 0, 4, 8, 1, 20, 20, 200, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 41, 10, 0, 0, 459, 10], [10, 1, 5, 1, 3381759, 3368652, 180, 3, 1, 11, 4288269567, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 4, 5, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 40, 0, 0, 0, 0, 37, 100], [10, 0, 3, 1, 8421504, 10053171, 140, 4, 0, 12, 4294967295, 1, 8, 8, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 3, 6, 2, 100, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 62, 10, 191, 10, 34, 40], [12, 1, 5, 1, 13382451, 10027008, 220, 3, 1, 11, 4294927974, 1, 16, 16, 8, 8, 0, 0, 200, 40, 0, 100, 0, 0, 0, 0, 3, 4, 1, 5, 20, 100, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 60, 0, 0, 0, 0, 32, 30], [14, 1, 5, 2, 3381759, 3368652, 330, 3, 1, 11, 4288269567, 1, 32, 32, 16, 16, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 9, 15, 1, 10, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 200, 0, 0, 0, 0, 42, 50], [11, 5, 2, 1, 3385907, 10053171, 200, 4, 0, 13, 4281571635, 1, 16, 16, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 1, 2, 2, 100, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 54, 40, 80, 40, 0, 0], [11, 1, 4, 1, 13369548, 10053171, 180, 3, 1, 4, 4294954239, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 8, 12, 1, 5, 20, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 55, 30, 0, 0, 27, 50], [13, 5, 2, 1, 15636787, 10053171, 250, 3, 1, 5, 4294926352, 1, 16, 32, 16, 16, 0, 0, 40, 20, -1, 99, 0, 0, 0, 0, 1, 2, 1, 15, 20, 200, 80, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 70, 56, 15, 0, 0, 0, 0], [15, 5, 2, 2, 10027008, 10053171, 1E3, 4, 0, 13, 4288230195, 1, 16, 16, 8, 8, 0, 0, 200, 10, 5, 100, 0, 0, 0, 0, 2, 4, 9, 150, 50, 20, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 300, 57, 15, 0, 0, 43, 30], [12, 5, 2, 1, 8421504, 10053171, 220, 4, 0, 12, 4288243251, 1, 16, 16, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 2, 5, 1, 100, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 293, 30, 0, 0, 0, 0], [12, 2, 5, 1, 3385907, 10053171, 160, 3, 1, 9, 4294967295, 1, 16, 16, 8, 8, 0, 0, 50, 30, 0, 100, 0, 0, 0, 0, 6, 8, 3, 10, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 192, 20, 0, 0, 0, 0], [14, 2, 5, 1, 15636787, 10053171, 210, 3, 1, 5, 4294926352, 1, 16, 32, 16, 16, 0, 0, 40, 20, -1, 99, 0, 0, 0, 0, 1, 2, 1, 15, 20, 200, 60, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 63, 20, 0, 0, 0, 0], [16, 5, 2, 3, 6684825, 10053171, 1600, 4, 0, 12, 4284874905, 1, 16, 16, 8, 8, 0, 0, 200, 10, 5, 100, 0, 0, 0, 0, 10, 12, 3, 100, 50, 20, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 0, 0, 0, 0, 44, 10], [13, 5, 2, 1, 8421504, 10053171, 240, 4, 0, 13, 4288243251, 1, 16, 16, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 1, 2, 3, 100, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 64, 20, 0, 0, 0, 0], [12, 6, 1, 1, 3385907, 10053171, 120, 2, 1, 1, 4294967295, 1, 16, 16, 8, 8, 0, 0, 10, 20, 0, 100, 0, 0, 0, 0, 8, 12, 1, 1, 100, 200, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 65, 20, 0, 0, 0, 0], [14, 6, 1, 1, 13421619, 10053171, 180, 1, 0, 14, 4294967142, 1, 32, 32, 32, 32, 0, 0, 10, 10, 0, 100, 0, 0, 0, 1, 8, 12, 1, 0, 100, 200, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 66, 20, 67, 20, 0, 0], [16, 6, 2, 2, 15636787, 10053171, 1200, 1, 0, 5, 4294926352, 2, 32, 32, 32, 16, 0, 0, 200, 20, 50, 100, 0, 1, 0, 1, 1, 2, 1, 0, 20, 200, 150, 1, 50, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 400, 81, 5, 0, 0, 45, 10], [14, 4, 4, 1, 13421772, 10053171, 200, 2, 1, 1, 4294918208, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 6, 8, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 60, 68, 50, 0, 0, 38, 100], [15, 4, 4, 1, 13369344, 10053171, 240, 4, 0, 2, 4286611584, 1, 8, 8, 8, 8, 0, 0, 300, 10, 3, 100, 0, 0, 0, 0, 1, 3, 4, 150, 50, 15, 150, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 2164219920, 1, 16, 48, 12, 36, 50, 20, 0, 100, 0, 0, 0, 1, 2, 1, 0, 200, 90, 70, 20, 82, 20, 0, 0], [14, 6, 1, 1, 15636787, 10053171, 160, 1, 0, 5, 4294926352, 2, 32, 32, 32, 16, 0, 0, 100, 20, 50, 100, 0, 1, 0, 1, 1, 2, 1, 0, 100, 200, 150, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 60, 69, 20, 0, 0, 0, 0], [16, 4, 4, 2, 13421772, 10053171, 2E3, 5, 1, 1, 4294918208, 1, 40, 16, 40, 8, 0, 0, 100, 20, 5, 99, 0, 0, 0, 0, 10, 20, 1, 0, 50, 300, 40, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 500, 71, 3, 0, 0, 47, 10], [20, 4, 4, 3, 13421772, 10053171, 5E3, 5, 1, 1, 4294918208, 1, 48, 16, 48, 8, 0, 0, 100, 20, 5, 99, 0, 0, 0, 0, 20, 40, 1, 0, 50, 300, 40, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1E3, 1E3, 29, 3, 0, 0, 30, 20], [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 4286611584, 1, 8, 8, 8, 8, 0, 0, 300, 10, 3, 100, 0, 0, 0, 0, 3, 4, 12, 200, 50, 15, 200, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 2164219920, 1, 16, 48, 12, 36, 50, 20, 0, 100, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [10, 0, 1, 2, 6723840, 10053171, 900, 2, 1, 1, 4294918208, 1, 32, 48, 48, 32, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 10, 20, 1, 1, 50, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 30, 0, 0, 2, 1, 244, 20], [10, 0, 1, 1, 3368448, 6697728, 90, 2, 1, 1, 4294967091, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 3, 4, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 30, 0, 0, 0, 0, 0, 0], [11, 0, 3, 1, 10053120, 6697728, 120, 4, 0, 2, 4284900966, 1, 16, 16, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 6, 8, 1, 100, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 40, 292, 20, 0, 0, 0, 0], [13, 0, 3, 2, 13421772, 6710886, 900, 4, 0, 2, 4288256409, 1, 32, 32, 16, 16, 0, 0, 150, 20, 5, 100, 0, 0, 0, 1, 10, 20, 1, 120, 10, 15, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 200, 285, 10, 0, 0, 341, 10], [11, 2, 4, 2, 6710988, 13408563, 600, 3, 1, 11, 4281545625, 1, 32, 32, 16, 16, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 8, 16, 1, 10, 50, 30, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 40, 0, 0, 2, 1, 243, 30], [11, 2, 4, 1, 6710988, 13408563, 90, 3, 1, 11, 4281545625, 1, 16, 16, 8, 8, 0, 0, 60, 40, 0, 100, 0, 0, 0, 0, 3, 4, 1, 10, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 40, 294, 20, 0, 0, 0, 0], [12, 5, 4, 1, 6723891, 10053171, 230, 3, 1, 9, 4291624908, 1, 16, 16, 8, 8, 0, 0, 60, 30, 0, 100, 0, 0, 0, 0, 3, 4, 2, 10, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 40, 295, 20, 0, 0, 0, 0], [14, 2, 4, 2, 16737792, 13408563, 900, 3, 1, 11, 4291585536, 1, 16, 16, 8, 8, 0, 0, 150, 40, 0, 100, 0, 0, 0, 0, 6, 8, 12, 10, 50, 15, 80, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 200, 277, 10, 0, 0, 389, 10], [12, 1, 1, 2, 3394611, 10053171, 900, 3, 1, 1, 4294918208, 1, 16, 32, 16, 16, 0, 0, 40, 40, 0, 100, 0, 0, 0, 0, 15, 25, 1, 10, 50, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 50, 115, 10, 2, 1, 0, 0], [12, 1, 5, 2, 3381555, 6697728, 900, 3, 1, 11, 4281584691, 1, 16, 16, 8, 8, 0, 0, 80, 40, 0, 100, 0, 0, 0, 0, 5, 9, 3, 10, 50, 30, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 50, 0, 0, 2, 1, 245, 15], [13, 5, 4, 1, 10027110, 10053171, 240, 4, 0, 13, 4288217190, 1, 16, 16, 8, 8, 0, 0, 120, 10, 5, 100, 0, 0, 0, 0, 3, 4, 2, 100, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 40, 193, 20, 0, 0, 0, 0], [15, 1, 2, 2, 13421772, 10053171, 1100, 3, 1, 4, 4294967295, 1, 32, 32, 16, 16, 0, 0, 150, 40, 0, 100, 0, 0, 0, 0, 5, 15, 1, 30, 10, 15, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 200, 0, 0, 0, 0, 46, 10], [15, 7, 4, 1, 13408563, 4465152, 150, 3, 1, 11, 4294967295, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 6, 8, 1, 10, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 60, 0, 0, 0, 0, 53, 200], [16, 5, 4, 1, 10027110, 10053171, 300, 3, 0, 12, 4291572633, 1, 16, 16, 8, 8, 0, 0, 120, 10, 0, 100, 0, 0, 0, 0, 5, 7, 1, 10, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 60, 0, 0, 0, 0, 52, 100], [17, 7, 2, 1, 3381555, 13056, 300, 3, 1, 11, 4281597747, 1, 16, 16, 8, 8, 0, 0, 80, 10, 0, 100, 0, 0, 0, 0, 8, 12, 1, 10, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 0, 0, 0, 0, 51, 100], [18, 7, 2, 2, 13421772, 13421772, 3E3, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 150, 40, 0, 100, 0, 0, 50, 0, 3, 5, 5, 20, 80, 100, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 700, 49, 10, 0, 0, 406, 10], [15, 1, 4, 1, 13408563, 4465152, 240, 3, 1, 4, 4291598643, 1, 16, 16, 8, 8, 0, 0, 40, 60, 0, 100, 0, 0, 0, 0, 8, 9, 1, 10, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 72, 20, 0, 0, 84, 60], [16, 8, 6, 1, 3368448, 10066329, 260, 3, 0, 6, 4281558528, 1, 16, 16, 8, 8, 0, 0, 50, 20, 0, 95, 0, 0, 0, 0, 1, 1, 1, 5, 10, 1E3, 500, 4, 10, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 80, 75, 40, 0, 0, 86, 80], [17, 1, 4, 1, 13382451, 4465152, 120, 3, 1, 4, 4291572531, 1, 16, 16, 8, 8, 0, 0, 80, 60, 0, 100, 0, 0, 0, 0, 12, 15, 1, 10, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 50, 73, 20, 0, 0, 85, 60], [18, 8, 6, 2, 6723840, 10066329, 1E3, 4, 0, 12, 4284913920, 1, 16, 16, 8, 8, 0, 0, 150, 20, 5, 100, 0, 0, 0, 0, 3, 5, 3, 100, 10, 1E3, 500, 0, 0, 0, 0, 0, 0, 100, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 74, 15, 83, 15, 104, 30], [16, 2, 4, 1, 13408563, 4465152, 180, 3, 1, 9, 4291598643, 1, 16, 16, 8, 8, 0, 0, 30, 30, 0, 100, 0, 0, 0, 0, 4, 5, 2, 10, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 195, 20, 0, 0, 88, 60], [17, 8, 6, 1, 6684825, 10066329, 280, 3, 0, 6, 4284874905, 1, 16, 16, 8, 8, 0, 0, 50, 20, 0, 95, 0, 0, 0, 0, 1, 1, 1, 5, 10, 1E3, 500, 4, 15, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 80, 141, 20, 0, 0, 87, 60], [18, 2, 4, 1, 13382451, 4465152, 220, 3, 1, 9, 4291572531, 1, 16, 16, 8, 8, 0, 0, 50, 30, 0, 100, 0, 0, 0, 0, 3, 4, 4, 15, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 50, 126, 20, 296, 20, 0, 0], [19, 8, 6, 3, 10053324, 10066329, 3500, 4, 0, 12, 4278216192, 1, 16, 16, 8, 8, 0, 0, 150, 20, 5, 100, 0, 0, 0, 0, 1, 1, 1, 120, 25, 1E3, 500, 4, 100, 0, 0, 0, 0, 100, 80, 3, 0, 6, 4278216192, 1, 16, 16, 8, 8, 50, 20, 0, 96, 1, 1, 0, 1, 1, 5, 0, 1E3, 800, 128, 5, 105, 10, 460, 10], [17, 0, 2, 1, 13395456, 10066329, 300, 2, 1, 1, 4291585536, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 10, 15, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 40, 119, 20, 0, 0, 93, 60], [18, 1, 6, 1, 10092339, 10066329, 240, 3, 1, 4, 4288282419, 1, 16, 16, 8, 8, 0, 0, 40, 40, 0, 100, 0, 0, 0, 0, 9, 10, 1, 10, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 40, 118, 20, 0, 0, 102, 60], [19, 1, 6, 1, 16711680, 10066329, 300, 3, 1, 9, 4294901760, 1, 16, 16, 8, 8, 0, 0, 80, 40, 0, 100, 0, 0, 0, 0, 4, 5, 1, 15, 50, 30, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 90, 120, 15, 0, 0, 89, 50], [20, 0, 2, 2, 16777215, 10066329, 4400, 3, 0, 13, 4294967295, 1, 16, 16, 8, 8, 0, 0, 150, 10, 0, 100, 0, 1, 0, 0, 4, 5, 10, 10, 15, 15, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 700, 0, 0, 103, 10, 106, 10], [20, 7, 4, 1, 16776960, 13421568, 77, 1, 0, 14, 4294967040, 1, 32, 32, 32, 32, 0, 0, 10, 10, 0, 100, 0, 0, 0, 1, 1, 9, 1, 0, 100, 200, 20, 0, 0, 1E3, 100, 100, 100, 100, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 777, 0, 0, 100, 10, 112, 10], [18, 2, 4, 1, 6684927, 6710937, 240, 3, 1, 4, 4284875007, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 8, 10, 1, 5, 50, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 117, 20, 0, 0, 92, 60], [19, 2, 4, 1, 13369599, 10053273, 240, 3, 1, 9, 4291559679, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 4, 5, 2, 10, 50, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 116, 20, 0, 0, 98, 60], [20, 2, 5, 1, 16711833, 13408665, 280, 3, 1, 11, 4294901913, 1, 16, 16, 8, 8, 0, 0, 80, 10, 0, 100, 0, 0, 0, 0, 2, 4, 1, 15, 50, 30, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 100, 0, 0, 90, 60, 99, 60], [21, 2, 4, 2, 16777215, 10066329, 4E3, 3, 1, 9, 4294967295, 1, 16, 16, 8, 8, 20, 0, 150, 10, 0, 100, 0, 0, 0, 0, 4, 5, 10, 10, 15, 15, 90, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 700, 287, 10, 0, 0, 107, 10], [20, 7, 2, 1, 16776960, 13421568, 77, 1, 0, 14, 4294967040, 1, 32, 32, 32, 32, 0, 0, 10, 10, 0, 100, 0, 0, 0, 1, 1, 9, 1, 0, 100, 200, 20, 0, 0, 1E3, 100, 100, 100, 100, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 777, 0, 0, 100, 10, 113, 10], [19, 4, 4, 1, 13408512, 13421721, 300, 2, 1, 1, 4294918208, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 10, 15, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 60, 127, 20, 0, 0, 91, 60], [19, 2, 4, 1, 13395456, 13408614, 240, 3, 1, 9, 4291585536, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 3, 4, 3, 10, 50, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 60, 194, 20, 0, 0, 97, 60], [21, 4, 4, 1, 13382400, 13408665, 300, 3, 1, 5, 4294926352, 1, 16, 32, 16, 16, 0, 0, 25, 20, -1, 99, 0, 1, 0, 0, 2, 3, 1, 10, 20, 200, 40, 1, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 100, 196, 20, 0, 0, 96, 60], [22, 4, 4, 2, 13382400, 13408665, 1E3, 3, 1, 5, 4294926352, 1, 16, 32, 16, 16, 0, 0, 40, 20, -1, 99, 0, 1, 0, 0, 4, 5, 1, 15, 20, 200, 80, 1, 80, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 150, 297, 20, 279, 40, 108, 40], [20, 7, 5, 1, 16776960, 13421568, 77, 1, 0, 14, 4294967040, 1, 32, 32, 32, 32, 0, 0, 10, 10, 0, 100, 0, 0, 0, 1, 1, 9, 1, 0, 100, 200, 20, 0, 0, 1E3, 100, 100, 100, 100, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 777, 0, 0, 100, 10, 114, 10], [21, 0, 7, 1, 3394611, 10053171, 300, 2, 1, 11, 4281584691, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 10, 15, 1, 1, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 0, 0, 0, 0, 101, 60], [22, 0, 7, 1, 3394815, 10053171, 300, 2, 1, 11, 4281584895, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 10, 20, 1, 1, 50, 20, 40, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 125, 20, 0, 0, 0, 0], [23, 0, 7, 1, 13369344, 10053171, 600, 4, 1, 12, 4294926352, 1, 16, 16, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 5, 15, 1, 80, 50, 30, 120, 1, 0, 0, 50, 0, 0, 0, 0, 1, 0, 6, 2164219920, 1, 32, 32, 16, 16, 10, 20, 0, 100, 0, 0, 1, 5, 15, 1, 0, 400, 120, 197, 10, 0, 0, 0, 0], [22, 5, 7, 1, 255, 10053171, 400, 3, 1, 13, 4284887808, 1, 16, 16, 8, 8, 0, 0, 80, 10, 0, 100, 0, 0, 0, 0, 8, 12, 1, 10, 50, 30, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 90, 129, 20, 0, 0, 0, 0], [24, 0, 7, 3, 8421504, 10053171, 4800, 3, 1, 3, 4286611584, 1, 16, 32, 16, 16, 0, 0, 150, 20, 5, 100, 0, 0, 0, 0, 8, 15, 3, 100, 30, 200, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 900, 111, 10, 0, 0, 342, 10], [22, 1, 7, 1, 13421823, 10053171, 330, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 20, 20, 0, 100, 0, 0, 0, 0, 10, 15, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 121, 20, 0, 0, 0, 0], [23, 1, 7, 1, 10027008, 10053171, 660, 3, 1, 4, 4288217088, 1, 16, 32, 16, 16, 0, 0, 20, 20, 0, 100, 0, 0, 0, 0, 20, 30, 1, 5, 50, 30, 40, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 120, 122, 10, 0, 0, 0, 0], [22, 2, 7, 1, 13421823, 10053171, 280, 3, 0, 12, 4294967295, 1, 16, 16, 8, 8, 0, 0, 60, 20, 0, 100, 0, 0, 0, 0, 8, 12, 1, 10, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 70, 123, 20, 0, 0, 0, 0], [23, 2, 7, 1, 10027008, 10053171, 440, 3, 0, 12, 4288217088, 1, 16, 16, 8, 8, 0, 0, 60, 20, 0, 100, 0, 0, 0, 0, 4, 8, 5, 10, 50, 30, 40, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 110, 124, 10, 0, 0, 0, 0], [25, 1, 7, 3, 8421504, 10053171, 5200, 3, 1, 4, 4286611584, 1, 16, 32, 16, 16, 0, 0, 150, 20, 10, 100, 0, 0, 0, 0, 8, 12, 5, 50, 30, 200, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 900, 110, 10, 0, 0, 390, 10], [23, 1, 8, 1, 65535, 26214, 340, 3, 1, 4, 4278255615, 1, 16, 16, 8, 8, 0, 0, 20, 20, 0, 100, 0, 0, 0, 0, 10, 15, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 298, 20, 0, 0, 0, 0], [23, 3, 8, 1, 65535, 16777215, 220, 5, 0, 13, 4278255615, 1, 16, 16, 8, 8, 50, 0, 150, 10, 5, 100, 0, 0, 0, 0, 1, 5, 6, 0, 50, 30, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 80, 198, 20, 0, 0, 0, 0], [25, 5, 8, 1, 16711935, 13421772, 800, 3, 1, 5, 4294926352, 2, 16, 32, 16, 16, 0, 0, 150, 40, 0, 100, 1, 0, 0, 1, 4, 6, 3, 10, 50, 30, 150, 1, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 150, 131, 10, 132, 10, 133, 10], [26, 3, 8, 3, 65535, 16777215, 4800, 5, 0, 12, 4278255615, 1, 16, 16, 8, 8, 50, 0, 150, 10, 5, 100, 0, 0, 0, 0, 1, 9, 12, 0, 30, 200, 80, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 900, 246, 10, 0, 0, 109, 10], [24, 0, 8, 1, 13434726, 6723840, 300, 4, 0, 13, 4291624806, 1, 16, 16, 8, 8, 0, 0, 150, 10, 5, 100, 0, 0, 0, 0, 1, 3, 1, 100, 50, 50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 40, 26, 30, 134, 50, 0, 0], [24, 2, 7, 1, 13434726, 6723840, 200, 3, 1, 9, 4291624806, 1, 16, 16, 8, 8, 0, 0, 80, 10, 0, 100, 0, 0, 0, 0, 1, 3, 2, 10, 50, 25, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 40, 26, 30, 135, 50, 0, 0], [25, 4, 9, 1, 16764006, 16777164, 400, 5, 1, 10, 3439316019, 2, 16, 16, 8, 8, 50, 0, 100, 10, 5, 100, 0, 0, 0, 0, 2, 3, 9, 0, 50, 30, 60, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 80, 91, 20, 136, 30, 0, 0], [27, 4, 9, 2, 16764006, 16777164, 6E3, 5, 1, 10, 4294954035, 2, 32, 32, 16, 16, 0, 0, 100, 10, 30, 100, 0, 0, 0, 0, 30, 50, 1, 0, 20, 200, 40, 3, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 900, 130, 10, 0, 0, 407, 10], [26, 7, 7, 1, 13421823, 10066380, 400, 3, 1, 4, 4291611903, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 10, 18, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 90, 199, 30, 0, 0, 146, 90], [26, 9, 7, 1, 16764159, 10053273, 300, 3, 0, 12, 4294954239, 1, 16, 16, 8, 8, 0, 0, 80, 10, 0, 100, 0, 0, 0, 0, 10, 15, 1, 10, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 90, 137, 30, 0, 0, 143, 80], [28, 9, 8, 1, 16711884, 3342387, 450, 3, 0, 15, 4294901964, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 98, 0, 1, 0, 0, 10, 15, 1, 5, 50, 50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 130, 140, 10, 0, 0, 0, 0], [29, 9, 7, 2, 16764006, 16777164, 7E3, 3, 0, 15, 4278190080, 1, 32, 32, 16, 16, 0, 10, 500, 10, 0, 90, 0, 1, 0, 0, 20, 40, 1, 100, 20, 50, 150, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 900, 138, 5, 0, 0, 172, 10], [27, 5, 8, 1, 3368448, 13056, 400, 3, 1, 11, 4288269312, 1, 16, 16, 4, 4, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 6, 8, 1, 2, 100, 15, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 90, 139, 50, 0, 0, 145, 200], [27, 7, 7, 1, 16764159, 10053273, 420, 3, 1, 4, 4294954239, 1, 16, 16, 8, 8, 0, 0, 40, 10, 0, 100, 0, 0, 0, 0, 12, 18, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 100, 299, 10, 0, 0, 144, 50], [29, 0, 8, 1, 16711884, 3342387, 480, 3, 1, 17, 4294901964, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 10, 15, 1, 15, 50, 50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 130, 142, 10, 0, 0, 147, 50], [30, 5, 8, 3, 10027008, 3342336, 8E3, 3, 1, 11, 4291585638, 1, 16, 16, 4, 4, 0, 10, 500, 10, 0, 100, 0, 0, 0, 0, 10, 22, 15, 3, 50, 15, 180, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 900, 174, 10, 0, 0, 461, 10], [28, 7, 7, 1, 21916, 21916, 400, 3, 1, 13, 1610612736, 1, 16, 16, 4, 4, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 3, 4, 1, 3, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 90, 301, 30, 0, 0, 151, 80], [28, 7, 2, 1, 8421504, 6697728, 500, 3, 1, 3, 4278190080, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 12, 18, 1, 15, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 100, 0, 0, 150, 40, 152, 40], [30, 9, 10, 1, 13382400, 0, 500, 3, 1, 5, 4294926352, 2, 16, 32, 16, 16, 0, 0, 150, 40, 0, 100, 1, 0, 0, 1, 6, 9, 1, 10, 50, 30, 150, 1, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 150, 0, 0, 148, 30, 149, 30], [31, 9, 7, 2, 21916, 21916, 2E3, 3, 1, 17, 1073741824, 1, 16, 16, 4, 4, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 10, 22, 2, 10, 50, 20, 180, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 248, 20, 0, 0, 171, 50], [32, 7, 7, 1, 15658496, 13421568, 500, 1, 0, 14, 4293848576, 1, 16, 16, 16, 16, 0, 0, 50, 20, 0, 100, 0, 0, 0, 0, 1, 9, 1, 0, 25, 100, 20, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 150, 182, 20, 0, 0, 186, 60], [32, 7, 10, 1, 8421504, 2105376, 600, 3, 1, 17, 4278190233, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 5, 10, 1, 15, 50, 20, 80, 0, 0, 0, 0, 0, -100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 120, 178, 30, 201, 30, 184, 80], [33, 7, 10, 2, 8421504, 2105376, 800, 3, 1, 17, 4278229248, 1, 32, 32, 16, 16, 0, 0, 150, 10, 0, 100, 1, 0, 0, 0, 10, 20, 1, 10, 50, 20, 150, 0, 0, 0, 0, 0, -100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 200, 179, 10, 0, 0, 185, 30], [36, 7, 10, 4, 8421504, 2105376, 12E3, 3, 1, 17, 4288217088, 1, 48, 48, 24, 24, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 20, 40, 1, 15, 50, 20, 180, 0, 0, 0, 0, 0, -100, 0, 80, 3, 0, 6, 2151677952, 1, 16, 16, 8, 8, 100, 10, 0, 99, 0, 0, 0, 10, 20, 9, 0, 3E3, 999, 308, 10, 0, 0, 175, 10], [40, 9, 7, 4, 13421772, 8388608, 4E4, 3, 0, 7, 4291611903, 1, 32, 32, 24, 24, 0, 20, 400, 10, 0, 95, 0, 1, 40, 0, 5, 5, 1, 40, 50, 300, 200, 5, 2500, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4E3, 4E3, 94, 5, 0, 0, 95, 20], [0, 0, 0, 0, 0, 0, 0, 3, 1, 5, 4294926352, 2, 24, 48, 24, 24, 0, 0, 300, 40, 0, 100, 1, 0, 0, 1, 3, 5, 3, 10, 50, 300, 300, 1, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [29, 8, 7, 1, 16777164, 16764057, 800, 6, 0, 13, 4294954137, 1, 16, 16, 4, 4, 0, 10, 200, 10, 3, 99, 0, 0, 0, 0, 6, 8, 6, 25, 200, 1E3, 500, 0, 0, 10, -100, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 120, 155, 20, 0, 0, 168, 80], [29, 5, 7, 1, 16777164, 10053171, 800, 4, 1, 3, 4288243251, 1, 16, 16, 8, 8, 50, 0, 200, 10, 4, 100, 0, 0, 0, 0, 14, 18, 1, 160, 100, 20, 80, 0, 0, 0, -100, 50, 50, 50, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 120, 157, 30, 300, 30, 164, 80], [31, 2, 8, 1, 3394560, 3381504, 300, 3, 0, 6, 4281571584, 1, 16, 16, 8, 8, 0, 0, 250, 20, 0, 100, 0, 0, 0, 0, 1, 1, 1, 2, 300, 25, 80, 4, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 90, 153, 10, 0, 0, 167, 50], [33, 8, 7, 3, 16777164, 16764057, 11E3, 706, 0, 12, 4294954137, 1, 16, 16, 8, 8, 30, 0, 300, 10, 3, 99, 0, 0, 0, 0, 33, 33, 23, 40, 100, 1E3, 500, 0, 0, 30, -100, 50, 50, 100, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2500, 300, 170, 10, 0, 0, 343, 10], [30, 2, 7, 1, 16763955, 13382400, 400, 3, 1, 9, 4294954035, 1, 16, 16, 8, 8, 0, 0, 100, 20, 0, 100, 0, 0, 0, 0, 3, 4, 3, 10, 50, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 158, 30, 0, 0, 161, 100], [31, 3, 7, 1, 16763955, 13382400, 400, 3, 1, 9, 4291572480, 1, 16, 16, 8, 8, 0, 0, 100, 20, 0, 100, 0, 0, 0, 0, 3, 4, 5, 10, 50, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 154, 30, 0, 0, 162, 100], [31, 5, 7, 1, 13382400, 3355443, 800, 7, 0, 0, 4278190080, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, -2, 0, 1, 0, 300, 30, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 100, 156, 10, 200, 10, 0, 0], [34, 5, 7, 2, 13382400, 3355443, 8E3, 7, 0, 0, 4278190080, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, -2, 0, 5, 0, 100, 8, 500, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2500, 300, 281, 10, 0, 0, 177, 10], [31, 6, 8, 1, 39168, 13056, 80, 1, 0, 6, 4278216192, 1, 32, 32, 16, 16, 0, 0, 50, 20, 0, 100, 0, 0, 0, 0, 1, 1, 1, 0, 100, 200, 20, 4, 50, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 130, 180, 30, 0, 0, 166, 120], [32, 4, 7, 1, 10066176, 3355443, 180, 4, 0, 12, 4288217088, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 4, 100, 0, 0, 0, 0, 10, 10, 1, 150, 50, 30, 60, 0, 0, -10, 0, 0, 0, 0, 0, 4, 0, 5, 4294926352, 2, 16, 32, 16, 32, 100, 10, 4, 98, 0, 1, 0, 6, 9, 5, 0, 200, 140, 181, 20, 0, 0, 163, 80], [32, 8, 9, 1, 10066176, 3355443, 300, 8003, 1, 9, 4288230144, 1, 16, 16, 8, 8, 0, 20, 200, 10, 0, 100, 1, 0, 20, 0, 8, 16, 2, 20, 200, 1E3, 500, 0, 0, -10, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 150, 183, 20, 0, 0, 165, 80], [35, 5, 9, 3, 10066176, 3355443, 9E3, 4003, 1, 9, 4288230144, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 50, 60, 7, 13, 100, 50, 200, 0, 0, -10, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2500, 400, 247, 10, 0, 0, 176, 10], [33, 10, 8, 1, 13369548, 13421772, 1E3, 3, 1, 4, 4291559628, 1, 16, 16, 8, 8, 0, 0, 10, 10, 1, 100, 0, 0, 0, 0, 1, 1, 1, 5, 10, 100, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 10, 152, 50, 0, 0, 187, 200], [36, 10, 8, 2, 13369548, 13421772, 1E4, 1003, 1, 9, 4291559628, 1, 16, 16, 8, 8, 20, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 1, 7, 20, 10, 100, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 10, 173, 10, 169, 10, 391, 10], [38, 10, 11, 1, 15449209, 4210752, 600, 3, 1, 4, 4293639289, 1, 16, 16, 8, 8, 0, 0, 10, 10, 1, 100, 0, 0, 0, 0, 1, 3, 1, 5, 10, 100, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 150, 202, 30, 208, 30, 302, 30], [39, 1, 11, 1, 15449209, 13599032, 600, 4, 1, 3, 4291789112, 1, 16, 16, 8, 8, 0, 20, 200, 10, 5, 100, 0, 0, 0, 0, 1, 1, 5, 80, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 160, 205, 30, 206, 30, 0, 80], [40, 0, 12, 1, 6710886, 3355443, 1E3, 3, 1, 18, 4294967040, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 1, 0, 0, 0, 20, 40, 1, 10, 200, 30, 200, 3, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 200, 203, 10, 207, 10, 0, 50], [42, 0, 12, 3, 6710886, 3355443, 15E3, 3, 1, 18, 4294967040, 1, 16, 16, 16, 16, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 1, 1, 1, 40, 5, 1E3, 250, 3, 0, 30, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 1E3, 204, 5, 0, 0, 237, 10], [38, 2, 11, 1, 15449209, 13599032, 400, 3, 1, 4, 4293639289, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 1, 3, 1, 5, 10, 100, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 150, 218, 40, 0, 0, 0, 80], [41, 3, 12, 1, 13382451, 16737894, 500, 3, 1, 18, 4294901760, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 1, 0, 0, 0, 6, 9, 9, 10, 200, 20, 120, 1, 100, 0, 100, -50, 0, 0, -50, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 160, 0, 10, 0, 0, 210, 50], [41, 6, 12, 1, 6710886, 11184810, 1E3, 1, 0, 14, 4294967295, 1, 32, 32, 32, 32, 0, 0, 10, 10, 0, 100, 0, 0, 0, 1, 10, 10, 1, 0, 200, 20, 20, 0, 0, 30, 50, 80, -100, 50, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 200, 0, 20, 0, 0, 209, 80], [43, 0, 12, 3, 6710886, 3355443, 15E3, 404, 1, 3, 2162932857, 1, 16, 16, 4, 4, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 1, 7, 30, 120, 50, 30, 250, 0, 0, 30, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 1100, 250, 10, 0, 0, 238, 10], [39, 11, 13, 1, 10079232, 39168, 400, 3, 1, 9, 4288269312, 1, 16, 16, 4, 4, 0, 5, 200, 10, 0, 100, 0, 0, 0, 0, 1, 3, 9, 20, 50, 1E3, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 50, 303, 30, 0, 0, 211, 100], [39, 11, 13, 1, 13395711, 13408563, 400, 103, 1, 9, 4291585791, 1, 16, 16, 4, 4, 30, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 3, 3, 20, 50, 1E3, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 50, 220, 30, 0, 0, 212, 100], [42, 11, 11, 1, 16737843, 10027008, 600, 3, 1, 18, 4294927923, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 1, 0, 0, 0, 10, 10, 1, 10, 50, 1E3, 500, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 200, 0, 10, 0, 0, 213, 50], [44, 11, 13, 2, 15658496, 47872, 2500, 3, 1, 10, 4293848576, 2, 16, 24, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 1, 9, 1, 80, 5, 1E3, 500, 3, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 800, 214, 20, 0, 0, 239, 50], [40, 2, 11, 1, 16737843, 13599032, 500, 3, 1, 5, 4294926352, 2, 16, 32, 16, 16, 0, 0, 100, 40, 0, 100, 1, 0, 0, 0, 4, 6, 1, 10, 50, 30, 40, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 180, 217, 30, 0, 0, 0, 80], [40, 11, 13, 1, 13421772, 13408614, 450, 103, 1, 9, 4291611852, 1, 16, 16, 4, 4, 30, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 4, 3, 20, 50, 1E3, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 50, 216, 30, 0, 0, 0, 80], [43, 10, 13, 1, 16737843, 6710886, 1E3, 4, 0, 12, 4288217088, 1, 16, 16, 8, 8, 0, 0, 200, 10, 5, 100, 0, 0, 0, 0, 1, 3, 1, 100, 50, 30, 150, 1, 50, 0, 0, 0, 0, 0, 0, 1, 0, 5, 2164219920, 1, 16, 32, 12, 32, 200, 20, 0, 100, 0, 0, 0, 1, 3, 1, 0, 500, 200, 215, 30, 0, 0, 0, 80], [45, 10, 13, 2, 16737843, 10027008, 16E3, 4, 1, 12, 4288217088, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 4, 6, 9, 100, 50, 100, 150, 1, 50, 0, 0, 0, 0, 0, 80, 1, 0, 5, 2164219920, 1, 16, 32, 12, 32, 200, 20, 0, 100, 0, 0, 0, 1, 3, 1, 0, 3E3, 1200, 219, 5, 0, 0, 240, 10], [44, 10, 13, 2, 16724736, 6697728, 8E3, 3, 1, 16, 4294914816, 2, 16, 16, 8, 8, 0, 0, 500, 10, 0, 100, 1, 0, 0, 0, 10, 10, 3, 10, 250, 30, 200, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 1500, 0, 30, 2, 1, 221, 40], [44, 11, 13, 2, 13421568, 10053120, 9E3, 3, 1, 9, 4291611648, 1, 32, 32, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 20, 40, 1, 20, 100, 1E3, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 500, 0, 30, 2, 1, 222, 40], [41, 9, 11, 1, 3394815, 26265, 1E3, 4, 0, 12, 4281584895, 1, 16, 16, 8, 8, 0, 0, 200, 10, 5, 100, 0, 0, 0, 0, 1, 9, 1, 80, 50, 30, 80, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 100, 224, 20, 252, 20, 225, 20], [46, 4, 11, 1, 16777164, 16764006, 1E3, 4, 0, 13, 3439329228, 2, 16, 16, 8, 8, 0, 20, 200, 10, 15, 100, 0, 0, 0, 0, 5, 5, 1, 40, 25, 100, 80, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 200, 223, 99, 304, 99, 241, 450], [42, 9, 11, 1, 13421823, 10053375, 600, 3, 0, 7, 4291611903, 1, 16, 16, 8, 8, 0, 10, 100, 10, 0, 95, 0, 1, 0, 0, 5, 5, 1, 20, 50, 30, 80, 5, 250, 0, 0, 100, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 150, 227, 30, 0, 0, 233, 80], [43, 9, 13, 1, 10079283, 10053120, 700, 3, 0, 6, 4288269363, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 1, 0, 0, 1, 1, 1, 5, 50, 20, 100, 4, 8, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 180, 0, 30, 0, 0, 234, 80], [45, 9, 12, 1, 13382451, 16751001, 800, 3, 1, 6, 4294926352, 2, 16, 24, 8, 8, 0, 0, 50, 10, 0, 95, 1, 0, 0, 0, 2, 3, 1, 10, 10, 100, 50, 1, 50, 0, 100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 200, 0, 30, 0, 0, 235, 80], [47, 9, 12, 2, 16777062, 3355443, 18E3, 3, 0, 2, 4294967142, 2, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 20, 50, 1, 40, 50, 100, 250, 3, 0, 0, 0, 0, 100, 0, 80, 2, 0, 15, 4294967142, 1, 16, 16, 8, 8, 50, 10, 0, 0, 0, 0, 0, 1, 9, 30, 0, 3E3, 200, 229, 3, 236, 10, 310, 10], [44, 12, 7, 1, 16777215, 3342438, 1200, 2, 1, 15, 4294967295, 1, 16, 16, 8, 8, 0, 0, 40, 40, 0, 100, 0, 0, 0, 0, 11, 15, 1, 1, 50, 30, 20, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 66, 228, 30, 0, 0, 0, 80], [44, 2, 4, 1, 16777215, 3342438, 1E3, 3, 1, 9, 4294967295, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 9, 11, 1, 10, 50, 30, 40, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 66, 230, 30, 0, 0, 0, 80], [46, 12, 8, 1, 10027008, 13056, 666, 1, 0, 6, 4284874803, 1, 16, 16, 4, 4, 0, 0, 200, 20, 0, 100, 0, 0, 0, 0, 1, 1, 1, 0, 10, 100, 500, 4, 66, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 666, 231, 10, 305, 10, 251, 20], [48, 12, 4, 2, 16777215, 16777215, 18E3, 4, 1, 6, 4284874803, 1, 16, 20, 8, 8, 50, 0, 1E3, 20, 0, 100, 0, 0, 0, 0, 6, 6, 6, 1E3, 350, 1E3, 500, 4, 66, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 666, 226, 5, 232, 5, 242, 10], [44, 12, 11, 1, 16777215, 3342438, 1200, 3, 1, 18, 4294967295, 1, 8, 12, 8, 8, 0, 0, 40, 40, 0, 100, 0, 0, 0, 0, 11, 15, 1, 10, 50, 30, 40, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 66, 255, 40, 0, 0, 0, 80], [45, 2, 13, 1, 10066431, 153, 800, 3, 1, 9, 4284901119, 1, 16, 16, 8, 8, 10, 0, 100, 10, 0, 100, 0, 0, 0, 0, 1, 1, 3, 10, 50, 30, 40, 5, 250, 0, 0, 100, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 200, 254, 30, 0, 0, 0, 80], [47, 1, 13, 1, 16736272, 13369344, 1200, 1, 0, 5, 4294926352, 2, 12, 32, 8, 16, 0, 0, 200, 20, 8, 100, 0, 1, 0, 0, 3, 4, 1, 0, 10, 100, 500, 1, 50, 0, 100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 300, 256, 20, 257, 20, 0, 20], [49, 1, 13, 2, 16760848, 13395456, 19E3, 1, 0, 6, 4294938640, 2, 28, 28, 16, 16, 0, 0, 500, 20, 0, 100, 1, 0, 0, 0, 3, 4, 1, 0, 10, 100, 500, 1, 50, 0, 100, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 666, 283, 10, 0, 0, 249, 10], [50, 12, 11, 3, 4340274, 4469538, 8E4, 104, 1, 6, 2164219920, 2, 16, 20, 12, 12, 50, 0, 100, 10, -1, 99, 0, 1, 0, 0, 6, 6, 50, 40, 300, 100, 60, 1, 50, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6E3, 3E3, 159, 5, 0, 0, 160, 20], [0, 0, 0, 0, 0, 0, 0, 4, 1, 3, 4284874803, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 8, 100, 0, 0, 0, 0, 1, 1, 1, 80, 150, 50, 500, 4, 66, 0, 0, 0, 0, 0, 0, 2, 0, 6, 4284874854, 2, 16, 16, 8, 8, 66, 20, 0, 86, 0, 0, 0, 1, 1, 30, 0, 0, 0, 0, 20, 0, 0, 0, 100], [45, 10, 7, 1, 16763955, 13382400, 1E3, 3, 1, 4, 4294954035, 1, 16, 16, 8, 8, 0, 0, 10, 10, 1, 100, 0, 0, 0, 0, 2, 3, 1, 5, 10, 100, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 150, 253, 30, 0, 0, 0, 100], [48, 10, 7, 2, 13382400, 3355443, 5E3, 7, 0, 0, 4278190080, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, -1, 0, 1, 0, 50, 30, 500, 0, 0, 50, 50, 50, 50, 50, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 258, 20, 306, 20, 2, 1], [47, 5, 12, 1, 6710886, 13408614, 1200, 4, 0, 2, 4284900966, 1, 16, 16, 8, 8, 0, 0, 200, 10, 8, 100, 0, 0, 0, 0, 40, 50, 1, 100, 50, 20, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 300, 259, 10, 0, 0, 0, 20], [50, 5, 12, 2, 6684672, 13408614, 18E3, 4, 0, 2, 4284900966, 1, 16, 16, 8, 8, 0, 0, 200, 10, 8, 100, 0, 0, 0, 0, 40, 50, 1, 100, 50, 30, 500, 1, 0, 0, 0, 0, 0, 0, 80, 3, 0, 6, 2164219920, 2, 16, 16, 8, 8, 200, 40, 0, 90, 0, 2, 1, 8, 12, 10, 0, 3E3, 1500, 268, 10, 0, 0, 392, 10], [47, 10, 4, 1, 13382400, 4467234, 800, 3, 1, 9, 4291572480, 1, 16, 16, 8, 8, 0, 0, 60, 10, 0, 100, 0, 0, 0, 0, 5, 10, 1, 10, 50, 30, 60, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 200, 0, 30, 0, 0, 260, 150], [48, 3, 8, 1, 12303155, 13421772, 800, 1, 1, 17, 4290493235, 1, 16, 16, 8, 8, 0, 0, 100, 10, 5, 100, 0, 0, 0, 0, 5, 10, 1, 0, 50, 30, 200, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 300, 0, 20, 0, 0, 264, 80], [49, 7, 14, 2, 13421772, 2237064, 3E3, 1, 0, 14, 4291611852, 1, 32, 32, 24, 24, 0, 50, 60, 10, 0, 100, 1, 0, 0, 0, 80, 90, 1, 0, 50, 20, 40, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 500, 0, 10, 0, 0, 262, 20], [51, 7, 14, 3, 13421772, 2237064, 2E4, 4, 0, 14, 4291572531, 1, 64, 64, 56, 56, 0, 100, 110, 10, 0, 95, 1, 0, 0, 1, 150, 200, 1, 20, 50, 30, 300, 0, 0, 0, 0, 50, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4E3, 1500, 269, 10, 0, 0, 462, 10], [48, 2, 5, 1, 6737100, 13107, 900, 3, 1, 17, 4278242355, 1, 16, 16, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 10, 20, 1, 4, 50, 30, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 250, 0, 20, 0, 0, 265, 80], [49, 3, 5, 1, 10066431, 13421772, 900, 1, 1, 17, 4281545727, 1, 16, 16, 8, 8, 0, 0, 200, 10, 3, 100, 0, 0, 0, 0, 10, 20, 1, 0, 50, 30, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 250, 0, 20, 0, 0, 263, 80], [50, 13, 14, 1, 13421772, 3355443, 1E3, 3, 1, 17, 4294967295, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 1, 5, 1, 15, 20, 50, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 500, 0, 20, 0, 0, 267, 80], [52, 13, 14, 1, 13395456, 6697728, 3E3, 3, 1, 18, 4294914816, 1, 16, 16, 8, 8, 0, 0, 500, 10, 0, 100, 0, 0, 0, 0, 1, 5, 1, 6, 20, 50, 150, 1, 100, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1500, 1E3, 261, 40, 0, 0, 266, 40], [51, 1, 12, 9, 15449209, 13599032, 2E3, 0, 0, 0, 4278190080, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 200, 0, 0, 100, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 2E3, 0, 10, 0, 0, 322, 20], [49, 7, 11, 1, 7914239, 35839, 1100, 3, 1, 16, 4294967295, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 10, 20, 1, 15, 50, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 250, 0, 20, 0, 0, 0, 80], [50, 5, 14, 1, 39168, 3355443, 1400, 3, 1, 16, 4281584691, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 1, 1, 15, 50, 20, 200, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 250, 0, 20, 0, 0, 0, 80], [53, 13, 14, 1, 16763904, 13408512, 5E3, 3, 1, 10, 4294967142, 1, 16, 16, 8, 8, 0, 0, 500, 10, 0, 100, 0, 0, 0, 0, 1, 99, 1, 30, 50, 30, 300, 3, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4E3, 1500, 344, 10, 0, 0, 408, 10], [51, 2, 15, 1, 6710886, 3355443, 1200, 3, 1, 11, 4288256409, 1, 8, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 5, 10, 1, 10, 50, 30, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 312, 90, 0, 0, 0, 100], [53, 2, 15, 1, 13382451, 6684672, 1400, 3, 1, 18, 4291572531, 1, 8, 16, 8, 8, 0, 0, 500, 10, 0, 100, 0, 2, 0, 0, 10, 20, 1, 10, 100, 100, 80, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 313, 10, 0, 0, 0, 30], [53, 3, 15, 1, 6723891, 3355443, 1400, 3, 1, 11, 4284913971, 1, 8, 16, 8, 8, 0, 0, 500, 10, 0, 100, 0, 0, 0, 0, 1, 1, 1, 2, 300, 100, 200, 4, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 314, 10, 0, 0, 0, 30], [55, 2, 15, 2, 13369344, 6710886, 22E3, 3, 1, 18, 4291559424, 1, 8, 16, 8, 8, 0, 0, 1500, 10, 0, 100, 0, 2, 0, 0, 10, 20, 3, 10, 100, 50, 80, 1, 50, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 1500, 315, 3, 0, 0, 358, 10], [52, 9, 15, 1, 6724044, 3368601, 1E3, 7203, 0, 15, 4281545523, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 2, 0, 0, 1, 9, 4, 15, 50, 30, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 0, 10, 0, 0, 320, 20], [52, 2, 15, 1, 13421772, 6710886, 1400, 3, 1, 11, 4288256409, 1, 8, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 5, 10, 1, 10, 50, 30, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 316, 90, 0, 0, 0, 100], [53, 12, 15, 1, 13408767, 3342438, 3600, 2, 1, 15, 4291598847, 1, 16, 16, 8, 8, 0, 0, 40, 40, 0, 100, 0, 0, 0, 0, 10, 40, 1, 1, 50, 20, 20, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 66, 317, 30, 0, 0, 0, 50], [54, 12, 15, 1, 6723840, 13056, 3666, 3, 0, 6, 4284913920, 1, 16, 16, 4, 4, 0, 0, 1E3, 20, 0, 100, 0, 2, 0, 0, 1, 1, 1, 1, 10, 100, 500, 4, 6, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 666, 318, 10, 0, 0, 0, 30], [56, 12, 15, 2, 10027008, 6697779, 26E3, 3, 1, 18, 4291559424, 1, 8, 16, 8, 8, 0, 0, 1500, 10, 0, 100, 0, 2, 0, 0, 10, 20, 5, 10, 100, 50, 300, 1, 50, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 1500, 319, 5, 0, 0, 356, 10], [56, 9, 15, 3, 6724044, 3368601, 55E3, 7203, 0, 15, 4281545523, 1, 24, 24, 16, 16, 0, 0, 200, 10, 0, 100, 0, 2, 0, 0, 15, 45, 4, 15, 50, 50, 60, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5500, 5500, 321, 1, 0, 0, 0, 10], [54, 2, 15, 1, 6723840, 13056, 1600, 3, 0, 6, 4278216192, 1, 16, 16, 4, 4, 0, 0, 200, 20, 0, 100, 0, 0, 0, 0, 1, 1, 1, 2, 50, 30, 80, 4, 10, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 0, 50, 0, 0, 325, 150], [54, 2, 15, 1, 16737792, 10040064, 1600, 3, 0, 13, 4294927872, 1, 16, 16, 4, 4, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 1, 1, 15, 50, 20, 80, 1, 50, 0, 100, 0, 0, 0, 0, 1, 0, 5, 2164219920, 1, 16, 32, 12, 24, 100, 20, 5, 100, 0, 1, 0, 3, 4, 1, 0, 400, 300, 0, 50, 0, 0, 324, 150], [54, 2, 15, 1, 16777062, 6710784, 1600, 3, 1, 10, 4294967193, 1, 16, 16, 4, 4, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 9, 1, 20, 50, 20, 40, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 300, 0, 50, 0, 0, 326, 150], [57, 5, 15, 2, 10027008, 6697779, 28E3, 3, 1, 18, 4291559424, 1, 8, 16, 8, 8, 0, 0, 1500, 10, 0, 100, 0, 2, 0, 0, 10, 20, 7, 10, 100, 50, 300, 1, 50, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 1500, 0, 5, 0, 0, 357, 10], [53, 9, 15, 1, 16777062, 3355443, 1E3, 0, 0, 15, 4278190080, 1, 16, 16, 16, 16, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 0, 0, 0, 10, 50, 50, 80, 0, 0, 1E4, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 9999, 0, 5, 0, 0, 0, 10], [55, 1, 7, 1, 16777215, 11059400, 2E3, 3, 1, 4, 4294967295, 1, 16, 16, 8, 8, 0, 0, 20, 40, 0, 100, 0, 0, 0, 0, 5, 5, 1, 5, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 300, 328, 90, 0, 0, 0, 100], [56, 0, 3, 1, 6710886, 3355443, 1600, 4, 0, 2, 4281545523, 1, 16, 16, 12, 12, 0, 10, 1E3, 10, 8, 100, 0, 0, 0, 0, 10, 50, 1, 80, 50, 20, 150, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 500, 330, 15, 0, 0, 327, 30], [57, 0, 3, 1, 11059400, 4931105, 1600, 4, 1, 16, 4289249480, 1, 16, 16, 8, 8, 0, 10, 1E3, 10, 5, 100, 0, 0, 0, 0, 5, 5, 1, 100, 50, 20, 150, 2, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 400, 332, 20, 0, 0, 323, 40], [59, 0, 3, 2, 16777215, 3355443, 3E4, 4, 0, 2, 4294967295, 1, 32, 32, 24, 24, 0, 10, 300, 10, 5, 100, 0, 1, 0, 1, 100, 500, 1, 120, 250, 50, 300, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 2E3, 329, 3, 0, 0, 354, 10], [56, 4, 16, 1, 16777215, 16777215, 1100, 4, 0, 13, 4294967295, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 5, 100, 0, 0, 0, 0, 5, 5, 1, 40, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 100, 333, 90, 0, 0, 0, 100], [57, 4, 16, 2, 10066329, 16777215, 2200, 4, 0, 2, 4288256409, 1, 16, 16, 12, 12, 0, 0, 1E3, 10, 2, 100, 0, 0, 0, 0, 15, 15, 1, 160, 50, 20, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 200, 334, 30, 0, 0, 0, 60], [58, 4, 16, 3, 14527231, 16777215, 3300, 4, 0, 2, 4292717311, 1, 16, 16, 12, 12, 0, 0, 500, 40, 2, 100, 0, 2, 0, 0, 30, 30, 1, 160, 150, 20, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 335, 20, 0, 0, 0, 40], [60, 4, 16, 4, 16777215, 16777215, 33E3, 4, 0, 2, 4294967295, 1, 32, 32, 24, 24, 0, 0, 1200, 10, 1, 100, 0, 2, 0, 1, 300, 300, 1, 320, 250, 50, 320, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 500, 331, 5, 0, 0, 355, 10], [57, 5, 13, 1, 10035746, 3355443, 2E3, 4, 0, 12, 4288256409, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 2, 100, 0, 0, 0, 0, 1, 3, 1, 200, 10, 50, 80, 0, 0, 1E4, 0, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 300, 0, 50, 0, 0, 336, 150], [57, 5, 13, 1, 10066176, 3355443, 2E3, 6, 0, 13, 4284900966, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 1, 100, 0, 0, 0, 0, 1, 3, 5, 15, 50, 50, 80, 0, 0, 1E4, 100, 100, 0, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 300, 0, 50, 0, 0, 337, 150], [59, 6, 13, 1, 3355545, 3355443, 1E3, 1, 0, 6, 2164219920, 1, 16, 16, 12, 12, 0, 0, 20, 20, 0, 100, 0, 0, 0, 0, 2, 3, 1, 0, 5, 500, 200, 1, 50, 1E4, 100, 0, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 1E3, 0, 20, 0, 0, 339, 10], [61, 6, 16, 2, 10066329, 10066329, 35E3, 6, 0, 15, 4288256409, 1, 16, 16, 16, 16, 0, 90, 100, 10, 5, 95, 0, 1, 0, 0, 50, 100, 10, 20, 250, 20, 80, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 500, 338, 10, 0, 0, 340, 10], [61, 14, 7, 1, 10035746, 6710886, 1500, 1, 0, 12, 4288256409, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 5, 100, 0, 0, 0, 0, 1, 1, 1, 0, 10, 50, 60, 1, 50, 0, 100, 100, 100, 100, 100, 1, 0, 5, 2164219920, 2, 16, 32, 16, 32, 300, 20, 0, 0, 0, 0, 0, 1, 1, 1, 0, 500, 500, 0, 50, 0, 0, 373, 200], [61, 4, 16, 1, 6710886, 10035746, 2500, 1, 0, 5, 2164219920, 2, 16, 32, 16, 32, 0, 0, 200, 20, 10, 100, 0, 1, 0, 0, 1, 1, 1, 0, 10, 200, 80, 1, 50, 0, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 500, 0, 50, 0, 0, 370, 200], [63, 0, 3, 2, 6710886, 10035746, 35E3, 4, 0, 2, 4288256409, 1, 16, 16, 16, 16, 0, 0, 1E3, 10, 5, 100, 0, 0, 0, 0, 33, 33, 1, 120, 200, 20, 200, 1, 50, 0, 100, 100, 100, 100, 100, 6, 0, 5, 2164219920, 2, 16, 32, 16, 32, 50, 20, 20, 95, 0, 1, 0, 3, 6, 30, 0, 5E3, 5E3, 0, 20, 2, 1, 369, 20], [65, 14, 7, 2, 10035746, 6710886, 3E4, 1, 0, 2, 4288256409, 1, 16, 16, 16, 16, 0, 0, 1E3, 10, 5, 100, 0, 0, 0, 0, 66, 66, 1, 0, 50, 20, 80, 1, 50, 0, 100, 100, 100, 100, 100, 6, 0, 5, 2164219920, 2, 16, 32, 16, 32, 500, 20, 20, 95, 0, 1, 0, 3, 6, 30, 0, 6500, 5E3, 0, 5, 0, 0, 375, 5], [70, 13, 2, 2, 10040115, 3355443, 2E4, 104, 1, 6, 2164219920, 2, 16, 20, 12, 12, 30, 0, 100, 10, -1, 99, 0, 1, 0, 0, 3, 4, 30, 40, 300, 100, 60, 1, 50, 0, 100, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8E3, 9999, 403, 4, 0, 0, 0, 5], [70, 13, 5, 2, 3355545, 3355443, 2E4, 3, 0, 7, 4291611903, 1, 32, 32, 24, 24, 0, 20, 200, 10, 0, 95, 0, 1, 40, 0, 5, 5, 1, 40, 50, 100, 200, 5, 500, 0, 0, 100, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8E3, 9999, 383, 4, 0, 0, 0, 5], [70, 13, 9, 2, 10066227, 3355443, 2E4, 3, 0, 2, 4294967142, 2, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 50, 1, 40, 100, 100, 250, 3, 0, 0, 0, 0, 100, 0, 100, 2, 0, 15, 4294967142, 1, 16, 16, 8, 8, 50, 10, 0, 0, 0, 0, 0, 1, 9, 30, 0, 8E3, 9999, 402, 4, 0, 0, 0, 5], [70, 13, 6, 2, 3381555, 3355443, 2E4, 4, 1, 3, 4284874803, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 8, 100, 0, 0, 0, 0, 1, 1, 1, 80, 200, 50, 500, 4, 66, 0, 0, 0, 0, 100, 100, 2, 0, 6, 4284874854, 2, 16, 16, 8, 8, 66, 20, 0, 86, 0, 0, 0, 1, 1, 30, 0, 8E3, 9999, 404, 4, 0, 0, 0, 5], [58, 2, 15, 1, 10066278, 16777164, 800, 3, 1, 9, 4294967244, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 5, 15, 1, 10, 50, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 100, 0, 50, 0, 0, 0, 100], [58, 10, 15, 1, 6723993, 13434879, 800, 3, 1, 4, 4291624959, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 5, 15, 1, 5, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 100, 0, 50, 0, 0, 0, 100], [60, 5, 8, 1, 13369599, 10066380, 2400, 3, 1, 4, 4284901119, 1, 16, 16, 8, 8, 0, 0, 300, 40, 0, 100, 0, 0, 0, 0, 10, 30, 3, 10, 50, 30, 180, 2, 50, 0, 0, 100, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 1E3, 346, 10, 0, 0, 352, 10], [62, 3, 16, 2, 16777215, 10027008, 38E3, 4, 0, 2, 4286611584, 1, 16, 16, 16, 16, 0, 0, 300, 10, 3, 100, 0, 0, 0, 0, 10, 10, 1, 200, 50, 15, 350, 1, 50, 0, 50, 0, 0, 0, 90, 1, 0, 5, 3439288336, 1, 16, 48, 16, 48, 1E3, 20, 0, 100, 0, 0, 0, 6, 9, 1, 0, 6E3, 1E3, 359, 10, 0, 0, 463, 10], [59, 5, 13, 2, 16777011, 3355392, 25E3, 5, 1, 10, 4294967091, 2, 16, 32, 8, 32, 0, 0, 500, 10, 2, 100, 0, 0, 0, 0, 1, 29, 1, 0, 5, 100, 180, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 999, 348, 20, 2, 1, 349, 20], [60, 8, 14, 2, 17408, 14548957, 25E3, 3, 0, 13, 4278255360, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 0, 2, 0, 0, 1, 1, 32, 5, 50, 1E3, 500, 4, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 2500, 345, 20, 2, 1, 0, 40], [61, 10, 11, 2, 6710886, 13421772, 25E3, 104, 1, 6, 2164219920, 2, 16, 20, 12, 12, 50, 0, 100, 10, -1, 99, 0, 1, 0, 0, 2, 3, 50, 40, 250, 1, 60, 1, 50, 0, 100, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 5E3, 351, 20, 2, 1, 0, 40], [63, 4, 16, 1, 16777215, 10027008, 38E3, 3, 1, 1, 4288217088, 1, 8, 8, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 5, 5, 1, 10, 5, 1E3, 150, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6500, 2E3, 347, 3, 350, 3, 353, 10], [60, 3, 7, 1, 16764108, 10053222, 900, 3, 0, 12, 4294954188, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 5, 15, 1, 2, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 150, 361, 50, 0, 0, 0, 100], [61, 3, 13, 1, 16711782, 6684723, 900, 1, 1, 17, 4294901862, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 5, 100, 0, 0, 0, 0, 10, 10, 1, 0, 30, 200, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 400, 365, 50, 0, 0, 0, 100], [62, 0, 3, 2, 13421823, 6710886, 25E3, 4, 0, 7, 4291611903, 2, 16, 16, 12, 12, 0, 0, 1E3, 10, 5, 100, 0, 0, 0, 0, 5, 5, 9, 150, 250, 20, 300, 5, 1500, 0, 100, 0, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5E3, 5E3, 360, 20, 2, 1, 363, 20], [64, 5, 14, 2, 13421823, 16711782, 3E4, 3, 0, 2, 4291611903, 2, 16, 16, 8, 8, 0, 300, 300, 10, 0, 100, 0, 2, 0, 0, 0, 0, 1, 10, 50, 50, 300, 2, 20, 0, 0, 0, 0, 0, 90, 2, 1, 4, 4291611903, 2, 8, 16, 8, 8, 80, 10, 0, 100, 0, 0, 0, 5, 10, 30, 0, 6500, 3E3, 0, 5, 0, 0, 368, 10], [63, 0, 3, 1, 16751001, 6697779, 2500, 4, 0, 12, 4294914867, 1, 16, 16, 8, 8, 0, 10, 1E3, 10, 3, 100, 0, 0, 0, 0, 10, 30, 1, 200, 200, 1E3, 1E3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 150, 362, 90, 0, 0, 0, 100], [63, 0, 3, 1, 13395507, 6697728, 2500, 4, 0, 13, 4288243251, 1, 16, 16, 8, 8, 0, 10, 1E3, 10, 3, 100, 0, 0, 0, 0, 1, 5, 7, 200, 200, 1E3, 1E3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 150, 367, 60, 0, 0, 0, 100], [63, 5, 10, 1, 16763904, 10053120, 2500, 3, 1, 17, 4294953984, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 5, 15, 1, 5, 400, 1E3, 1E3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 150, 366, 40, 0, 0, 0, 80], [66, 4, 16, 1, 13395507, 16763904, 6E3, 2, 1, 17, 4294914867, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 5, 15, 1, 15, 300, 1E3, 1E3, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 650, 1E3, 364, 30, 0, 0, 393, 100], [64, 8, 13, 1, 3355647, 10066380, 1E3, 3, 1, 16, 4291611903, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 5, 5, 1, 5, 200, 1E3, 500, 5, 1E3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 100, 0, 50, 0, 0, 371, 100], [65, 1, 14, 9, 16777215, 3355494, 4E4, 4, 1, 17, 4288221457, 1, 32, 48, 32, 32, 0, 50, 500, 10, 3, 100, 0, 0, 0, 0, 10, 50, 1, 200, 150, 20, 300, 1, 50, 0, 0, 0, 0, 0, 0, 3, 0, 6, 3439288336, 2, 16, 16, 16, 16, 80, 20, 0, 90, 0, 2, 0, 6, 9, 50, 0, 5500, 550, 0, 20, 2, 1, 372, 20], [63, 1, 16, 1, 16750848, 10053120, 3E3, 3, 1, 4, 4281584691, 1, 16, 16, 8, 8, 0, 0, 20, 20, 0, 100, 0, 0, 0, 0, 5, 20, 1, 5, 50, 50, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 200, 0, 50, 0, 0, 374, 200], [67, 1, 16, 9, 16777164, 13408512, 6E4, 4, 1, 17, 4284901017, 1, 32, 48, 32, 32, 0, 50, 1E3, 10, 3, 100, 0, 0, 0, 0, 10, 50, 1, 200, 150, 20, 300, 5, 1800, 0, 0, 0, 0, 0, 90, 3, 1, 9, 4291624959, 2, 16, 16, 16, 16, 50, 20, 0, 90, 0, 2, 0, 5, 15, 50, 0, 7E3, 1E3, 0, 5, 0, 0, 376, 10], [65, 1, 15, 1, 16777215, 10066380, 2E3, 2, 0, 13, 4284900966, 1, 16, 16, 8, 8, 0, 0, 500, 10, 0, 100, 0, 0, 0, 0, 2, 3, 1, 5, 50, 30, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 150, 394, 90, 0, 0, 400, 90], [66, 1, 15, 1, 16777079, 7829367, 2E3, 5, 1, 10, 4294967091, 2, 16, 16, 8, 16, 0, 0, 500, 10, 1, 98, 0, 0, 0, 0, 1, 29, 1, 0, 50, 20, 200, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 150, 395, 90, 0, 0, 401, 90], [67, 5, 8, 2, 16750848, 10040064, 15E3, 203, 0, 2, 3439288336, 2, 16, 16, 8, 8, 0, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 5, 10, 30, 5, 150, 30, 500, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 3E3, 396, 15, 397, 15, 399, 15], [69, 5, 8, 3, 16763955, 16750848, 3E4, 3, 1, 16, 4294926352, 2, 32, 32, 24, 24, 0, 0, 1E3, 10, 0, 99, 1, 0, 200, 0, 5, 20, 1, 5, 300, 20, 500, 1, 50, 0, 0, 0, 0, 0, 95, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3E3, 3E3, 398, 10, 0, 0, 409, 20], [64, 14, 15, 1, 26316, 10066380, 3E3, 1, 1, 9, 4291611903, 1, 16, 20, 4, 20, 0, 0, 200, 10, 5, 100, 0, 1, 0, 0, 5, 5, 1, 0, 50, 50, 500, 2, 25, 0, 0, 50, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 500, 0, 30, 0, 0, 385, 50], [65, 1, 5, 2, 16777215, 3355494, 15E3, 104, 0, 12, 4294967295, 1, 16, 16, 8, 8, 30, 50, 300, 10, 3, 100, 0, 0, 0, 0, 10, 30, 5, 200, 150, 20, 500, 0, 0, 0, 0, 50, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 1500, 0, 20, 0, 0, 386, 30], [66, 5, 8, 2, 16776960, 6710886, 15E3, 1, 1, 18, 4294967057, 2, 7, 32, 8, 32, 0, 0, 40, 10, 50, 100, 0, 1, 0, 0, 1, 99, 1, 0, 5, 250, 80, 3, 0, 0, 0, 50, 0, 0, 80, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 550, 2E3, 0, 20, 2, 1, 387, 50], [68, 8, 14, 3, 16777215, 26316, 65E3, 104, 1, 9, 4278216396, 1, 16, 20, 8, 8, 200, 0, 500, 10, 3, 100, 0, 0, 0, 0, 25, 50, 30, 200, 150, 1E3, 500, 0, 0, 0, 0, 50, 0, 0, 100, 1, 1, 9, 4278216396, 2, 16, 20, 4, 20, 500, 10, 5, 100, 0, 1, 0, 25, 50, 1, 0, 7E3, 3E3, 0, 5, 0, 0, 388, 10], [70, 10, 13, 4, 2368552, 4931105, 25E4, 4, 1, 17, 4291607446, 1, 32, 32, 8, 8, 0, 25, 200, 10, 8, 100, 0, 0, 0, 0, 100, 200, 1, 80, 50, 100, 100, 0, 0, 0, 0, 100, 0, 0, 100, 3, 1, 6, 4283121185, 1, 16, 16, 8, 8, 50, 40, 0, 94, 0, 2, 0, 8, 8, 15, 1, 8E3, 8E3, 377, 10, 379, 10, 381, 10], [0, 0, 0, 0, 0, 0, 0, 6406, 1, 3, 4291611903, 2, 16, 16, 8, 8, 0, 25, 2E3, 10, 0, 100, 0, 2, 0, 0, 25, 50, 2, 10, 100, 100, 500, 5, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 100], [66, 5, 17, 1, 6710886, 3355443, 9E3, 0, 0, 1, 4294967295, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 1, 1, 1, 0, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 413, 60, 0, 0, 0, 80], [68, 14, 17, 1, 13421772, 6710886, 2E3, 1, 1, 17, 4291598592, 1, 16, 16, 4, 4, 0, 0, 500, 10, 2, 100, 0, 0, 0, 0, 20, 30, 1, 0, 50, 30, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 200, 412, 50, 0, 0, 0, 80], [68, 0, 17, 1, 13421772, 6710886, 3E3, 2, 1, 17, 4291572480, 1, 16, 16, 4, 4, 0, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 10, 20, 1, 5, 50, 30, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 200, 415, 60, 0, 0, 0, 80], [71, 5, 17, 2, 16724991, 10027212, 7E4, 4, 0, 12, 4294915071, 1, 16, 16, 8, 8, 0, 0, 1E3, 10, 2, 100, 0, 2, 0, 0, 50, 60, 1, 150, 10, 50, 500, 0, 0, 0, 0, 0, 0, 0, 95, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 3E3, 414, 3, 0, 0, 0, 20], [67, 7, 19, 1, 16751103, 13434726, 3E3, 3, 1, 4, 4278190182, 1, 16, 16, 8, 8, 0, 0, 40, 20, 0, 100, 0, 0, 0, 0, 20, 30, 1, 5, 50, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 416, 90, 0, 0, 0, 80], [68, 10, 18, 1, 13395558, 6697779, 5E3, 3, 0, 13, 4281545523, 1, 16, 16, 4, 4, 0, 0, 80, 20, 0, 100, 0, 0, 0, 0, 7, 13, 1, 10, 20, 200, 80, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 450, 300, 411, 60, 0, 0, 0, 80], [69, 9, 19, 1, 13421619, 6723840, 6E3, 4, 1, 14, 4294967142, 1, 16, 16, 8, 8, 20, 60, 120, 10, 2, 100, 0, 0, 0, 0, 1, 45, 10, 50, 50, 30, 250, 3, 0, 0, 100, 100, 0, 0, 95, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 300, 410, 20, 0, 0, 0, 40], [72, 9, 19, 2, 16777164, 13408767, 75E3, 1, 0, 15, 4280427042, 1, 24, 24, 16, 16, 0, 80, 1E3, 20, 1, 92, 0, 0, 0, 0, 1, 90, 1, 0, 10, 200, 500, 0, 0, 0, 100, 100, 0, 0, 95, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 3E3, 417, 3, 0, 0, 0, 20], [69, 5, 17, 1, 16737843, 6710784, 9E3, 104, 0, 13, 4294941030, 1, 16, 16, 4, 4, 40, 0, 200, 10, 3, 100, 0, 0, 0, 0, 10, 20, 10, 150, 200, 30, 80, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 400, 0, 50, 0, 0, 419, 100], [69, 8, 7, 1, 16751001, 16777164, 9E3, 6, 0, 13, 4294967244, 1, 16, 16, 4, 4, 0, 10, 200, 10, 3, 99, 0, 0, 0, 0, 20, 30, 6, 25, 200, 1E3, 500, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 400, 0, 50, 0, 0, 418, 100], [70, 14, 18, 1, 13382604, 6697728, 9E3, 1, 0, 12, 4284874905, 1, 16, 16, 8, 8, 0, 0, 500, 40, 1, 98, 0, 0, 0, 0, 8, 8, 1, 0, 15, 200, 500, 4, 50, 0, 0, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 800, 0, 10, 0, 0, 421, 20], [73, 6, 18, 2, 13421619, 10053120, 12E4, 104, 0, 13, 4284913920, 1, 16, 16, 4, 4, 50, 0, 300, 10, 3, 100, 0, 0, 0, 0, 8, 8, 10, 200, 150, 30, 500, 4, 50, 0, 0, 0, 0, 100, 95, 3, 1, 6, 4291611648, 1, 16, 16, 8, 8, 1E3, 40, 0, 99, 0, 2, 0, 8, 8, 3, 0, 6E3, 4E3, 0, 5, 0, 0, 464, 10], [70, 15, 8, 1, 6750003, 3368448, 1E4, 3, 0, 13, 4284887808, 1, 16, 16, 4, 4, 0, 0, 100, 10, 0, 100, 0, 0, 0, 0, 8, 9, 1, 5, 50, 20, 60, 0, 0, 0, -50, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 100, 0, 80, 0, 0, 420, 100], [70, 15, 8, 2, 6750003, 3368448, 3E4, 4, 0, 12, 4284926976, 1, 16, 16, 8, 8, 0, 0, 300, 10, 3, 100, 0, 0, 0, 0, 1, 1, 1, 150, 100, 20, 180, 4, 40, 0, -50, 0, 0, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 500, 0, 50, 0, 0, 422, 80], [74, 15, 8, 3, 6750003, 3368448, 15E4, 4, 0, 2, 4288217292, 1, 16, 16, 8, 8, 0, 0, 500, 10, 3, 100, 0, 0, 0, 0, 8, 8, 1, 200, 150, 30, 500, 4, 50, 0, 0, 0, 0, 100, 95, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 5E3, 0, 5, 0, 0, 423, 10], [71, 4, 17, 1, 16737792, 16750899, 9E3, 4, 0, 12, 4294926352, 2, 16, 16, 4, 4, 0, 20, 100, 10, 20, 100, 0, 0, 0, 0, 6, 8, 1, 40, 50, 50, 80, 1, 50, 1E4, -600, 100, 100, 100, 100, 1, 0, 5, 2164219920, 2, 16, 32, 16, 32, 100, 20, 0, 0, 0, 0, 0, 6, 8, 1, 0, 600, 500, 0, 50, 0, 0, 424, 100], [71, 4, 17, 1, 13421568, 16777164, 9E3, 4, 1, 10, 4294967091, 2, 16, 16, 4, 4, 0, 20, 100, 10, 20, 100, 0, 0, 0, 0, 1, 15, 1, 40, 50, 50, 80, 3, 0, 1E4, 100, 100, -600, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 500, 0, 50, 0, 0, 425, 100], [71, 4, 17, 1, 6724095, 13209, 9E3, 4, 1, 9, 4284914175, 2, 16, 16, 4, 4, 0, 20, 100, 10, 20, 100, 0, 0, 0, 0, 4, 5, 1, 40, 50, 50, 80, 2, 50, 1E4, 100, -600, 100, 100, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 500, 0, 50, 0, 0, 427, 80], [75, 4, 19, 2, 6710886, 16777215, 12E4, 806, 1, 17, 4284900966, 1, 16, 16, 4, 4, 40, 20, 300, 10, 10, 99, 0, 0, 0, 0, 20, 30, 16, 50, 50, 100, 500, 0, 0, -100, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 5E3, 426, 5, 0, 0, 428, 5], [73, 1, 12, 9, 4210752, 13421568, 8E3, 4, 1, 18, 4294967056, 2, 16, 16, 8, 8, 0, 500, 500, 10, 3, 100, 0, 0, 0, 0, 0, 0, 1, 150, 150, 50, 500, 3, 0, 99999, 100, 100, 100, 100, 100, 1, 0, 18, 4294967057, 2, 64, 500, 40, 500, 10, 10, 0, 0, 1, 0, 1, 1, 9999, 1, 0, 1200, 7E3, 430, 10, 432, 10, 434, 10], [72, 2, 12, 1, 16764006, 16777164, 5E3, 3, 1, 9, 4288243200, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 0, 0, 0, 0, 6, 9, 1, 2, 50, 50, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 500, 431, 80, 0, 0, 0, 80], [72, 15, 12, 1, 6736947, 16777164, 1E4, 1, 0, 9, 4288243200, 1, 16, 16, 4, 16, 0, 0, 200, 10, 5, 100, 0, 1, 0, 0, 6, 9, 1, 0, 50, 50, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 500, 429, 80, 0, 0, 0, 80], [76, 1, 12, 9, 4210752, 10027008, 12E3, 2, 1, 18, 4294910480, 2, 32, 64, 64, 4, 0, 0, 1E3, 10, 0, 100, 1, 0, 0, 1, 10, 10, 1, 5, 250, 50, 500, 1, 50, 99999, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6E3, 7E3, 433, 6, 435, 6, 436, 6], [74, 16, 18, 1, 10027212, 13421823, 1E4, 3, 0, 13, 4284874905, 1, 16, 16, 4, 4, 0, 0, 250, 10, 0, 100, 0, 0, 0, 0, 1, 1, 1, 5, 10, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 700, 70, 0, 50, 437, 99, 438, 100], [77, 16, 18, 2, 13369548, 13421823, 15E4, 4803, 0, 12, 4288217241, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 0, 2, 0, 0, 1, 1, 3, 10, 5, 1E3, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7E3, 77, 0, 10, 439, 10, 440, 10], [74, 4, 20, 1, 13421772, 6710886, 15E3, 2, 1, 19, 4294967295, 1, 8, 16, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 10, 15, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 100, 0, 80, 0, 0, 445, 300], [75, 4, 20, 1, 13382400, 4473924, 1E4, 104, 1, 6, 4294926352, 2, 8, 8, 8, 8, 6, 0, 50, 10, -1, 99, 0, 1, 0, 0, 5, 8, 3, 40, 10, 500, 40, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 200, 0, 10, 0, 0, 443, 20], [75, 0, 20, 1, 3355443, 8921600, 25E3, 4, 1, 17, 4294926352, 1, 24, 16, 8, 8, 0, 500, 500, 10, 3, 100, 0, 0, 0, 0, 0, 0, 1, 150, 250, 50, 500, 1, 50, 0, 0, 0, 0, 0, 0, 6, 0, 5, 2164219920, 2, 16, 32, 16, 32, 100, 20, 5, 99, 0, 1, 0, 3, 5, 9, 0, 800, 200, 0, 10, 0, 0, 444, 20], [78, 0, 20, 3, 3355443, 8921600, 15E4, 1604, 1, 17, 4294926352, 1, 24, 16, 8, 8, 0, 0, 500, 10, 3, 100, 0, 0, 0, 0, 10, 15, 3, 150, 50, 10, 500, 1, 50, 0, 0, 0, 0, 0, 100, 6, 0, 5, 2164219920, 2, 16, 32, 16, 32, 100, 20, 5, 99, 0, 1, 0, 3, 5, 9, 0, 8E3, 500, 441, 5, 0, 0, 442, 10], [75, 16, 20, 1, 13421772, 6710886, 1E4, 3, 1, 19, 4294967295, 1, 6, 6, 8, 8, 0, 0, 80, 10, 0, 100, 0, 0, 0, 0, 1, 9, 1, 5, 50, 20, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 300, 2, 2, 446, 300, 447, 300], [77, 1, 18, 2, 16776960, 6697728, 9E4, 6, 1, 19, 3439329041, 2, 16, 16, 16, 16, 0, 20, 200, 10, 0, 96, 0, 0, 500, 0, 1, 33, 9, 50, 50, 50, 40, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 5E3, 451, 5, 0, 0, 448, 20], [77, 5, 13, 2, 13434624, 3355392, 9E4, 3, 1, 18, 4291624755, 2, 8, 8, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 33, 1, 30, 9, 250, 300, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 5E3, 449, 20, 0, 0, 450, 20], [79, 5, 20, 3, 3355443, 16772608, 18E4, 3, 1, 19, 4294962688, 2, 8, 8, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 500, 0, 1, 33, 1, 30, 4, 250, 500, 3, 0, 0, 0, 0, 100, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8E3, 5E3, 0, 5, 0, 0, 465, 10], [76, 11, 20, 1, 13421772, 6714227, 15E3, 4, 1, 19, 4288256409, 1, 8, 8, 4, 4, 0, 0, 200, 10, 5, 100, 0, 0, 0, 0, 9, 12, 1, 120, 50, 1E3, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 300, 453, 80, 0, 0, 0, 100], [78, 11, 20, 3, 10079487, 6714227, 9E4, 4503, 1, 19, 3432631551, 2, 12, 12, 8, 8, 0, 0, 200, 10, 0, 100, 0, 2, 0, 0, 1, 1, 5, 20, 5, 1E3, 500, 5, 500, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4E3, 4E3, 452, 10, 0, 0, 0, 20], [76, 1, 17, 1, 13382400, 6714227, 15E3, 3, 1, 6, 4294926352, 2, 16, 16, 8, 8, 0, 0, 50, 10, -1, 99, 1, 0, 0, 0, 3, 6, 1, 5, 20, 40, 40, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 300, 454, 80, 0, 0, 0, 100], [80, 0, 17, 3, 13382400, 6714227, 18E4, 1, 0, 2, 4294926368, 2, 32, 32, 24, 24, 0, 0, 2E3, 10, 0, 100, 1, 0, 500, 0, 3, 6, 1, 0, 500, 1E3, 500, 1, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8E3, 6E3, 0, 5, 0, 0, 467, 10], [77, 17, 17, 1, 43520, 4469538, 15E3, 3, 1, 12, 4278233600, 2, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 0, 0, 6, 9, 1, 10, 50, 20, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 500, 455, 60, 0, 0, 0, 100], [77, 17, 20, 1, 39355, 2245700, 15E3, 4, 1, 19, 4278229435, 2, 8, 8, 8, 8, 0, 0, 200, 10, 5, 100, 1, 0, 0, 0, 9, 12, 1, 120, 50, 20, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 500, 457, 60, 0, 0, 0, 100], [79, 17, 11, 1, 13382400, 3355443, 15E3, 3, 0, 6, 4294926352, 2, 16, 16, 8, 8, 0, 0, 200, 10, 0, 98, 1, 0, 0, 0, 2, 3, 1, 20, 10, 200, 120, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 1500, 458, 40, 0, 0, 0, 20], [81, 5, 13, 3, 13408563, 4469538, 2E5, 4, 1, 17, 4291598643, 2, 16, 16, 8, 8, 10, 0, 1E3, 10, 1, 100, 0, 0, 0, 0, 9, 12, 30, 200, 100, 50, 500, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8E3, 7E3, 456, 5, 0, 0, 468, 10], [79, 4, 12, 2, 4473924, 5592405, 9E4, 4, 1, 17, 4284900966, 1, 80, 64, 16, 16, 0, 0, 200, 10, 4, 100, 0, 0, 0, 0, 100, 200, 1, 100, 200, 20, 100, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 9999, 2, 2, 471, 20, 0, 100], [79, 4, 12, 2, 4473924, 4473924, 9E4, 6, 1, 3, 4288243251, 1, 16, 16, 8, 8, 0, 0, 200, 10, 4, 100, 0, 0, 0, 0, 60, 90, 10, 30, 200, 20, 200, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 9999, 2, 2, 472, 20, 0, 100], [79, 4, 12, 2, 4473924, 3355443, 9E4, 1, 1, 1, 4291559526, 2, 24, 24, 12, 12, 0, 170, 200, 20, 0, 100, 1, 0, 200, 0, 100, 200, 1, 0, 200, 20, 200, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 9999, 2, 2, 477, 20, 0, 20], [82, 4, 11, 1, 10066329, 10066329, 5E4, 1604, 1, 17, 4288269567, 2, 16, 16, 8, 8, 10, 100, 1E3, 10, 1, 100, 0, 0, 0, 0, 10, 20, 6, 250, 200, 20, 100, 5, 250, 0, 0, 100, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2E3, 9999, 476, 10, 0, 0, 466, 25], [80, 2, 20, 1, 16777011, 10053171, 12E3, 6403, 1, 20, 4294967091, 2, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 9, 2, 30, 50, 50, 80, 3, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 500, 478, 100, 0, 0, 0, 100], [80, 16, 18, 1, 39168, 10053171, 12E3, 5603, 0, 13, 4278229248, 1, 16, 16, 4, 4, 0, 0, 500, 10, 0, 100, 0, 0, 0, 0, 1, 1, 9, 5, 300, 1, 300, 4, 66, 0, 0, 0, 0, 75, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 500, 475, 90, 0, 0, 0, 100], [81, 3, 19, 1, 16736272, 10053171, 15E3, 3, 1, 22, 4294926352, 2, 16, 16, 12, 12, 0, 0, 200, 20, 0, 98, 1, 0, 0, 0, 8, 8, 1, 20, 10, 50, 200, 1, 50, 0, 75, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 1500, 473, 20, 0, 0, 0, 20], [83, 8, 8, 2, 26316, 26316, 2E5, 403, 1, 22, 4281571839, 2, 16, 16, 8, 8, 25, 0, 1E3, 10, 0, 100, 0, 0, 0, 0, 2, 4, 8, 10, 25, 1E3, 1E3, 5, 500, 0, 0, 100, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9E3, 3E3, 474, 2, 0, 0, 469, 10], [81, 4, 19, 1, 16764108, 10040166, 2E4, 2, 1, 1, 4288230246, 1, 16, 16, 8, 8, 0, 0, 10, 20, 0, 100, 0, 0, 0, 0, 15, 30, 1, 20, 50, 50, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 400, 483, 100, 0, 0, 0, 100], [81, 4, 19, 1, 13421823, 6697881, 2E4, 3, 1, 9, 4284887961, 1, 16, 16, 8, 8, 0, 0, 150, 10, 0, 100, 0, 0, 0, 0, 4, 6, 1, 8, 50, 50, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 400, 486, 100, 0, 0, 0, 100], [82, 0, 20, 3, 16764108, 10040166, 1E5, 104, 1, 3, 4294927974, 1, 16, 16, 8, 8, 100, 10, 1E3, 10, 5, 100, 0, 0, 50, 0, 10, 20, 50, 150, 300, 50, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 4E3, 481, 5, 0, 0, 0, 20], [84, 0, 20, 5, 13421823, 6697881, 2E5, 104, 1, 3, 4291585791, 1, 16, 16, 8, 8, 100, 10, 160, 10, 5, 100, 0, 2, 100, 0, 10, 20, 50, 150, 300, 50, 1E3, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9E3, 4E3, 484, 3, 0, 0, 470, 10], [82, 5, 20, 1, 13408563, 10053171, 2E4, 4, 1, 20, 4291598643, 1, 16, 16, 8, 8, 0, 10, 1E3, 10, 3, 100, 0, 0, 0, 0, 10, 30, 1, 200, 150, 1E3, 1E3, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 900, 480, 100, 0, 0, 0, 100], [82, 5, 20, 1, 3394764, 10053171, 2E4, 4, 1, 19, 4281584844, 1, 8, 8, 8, 8, 0, 10, 1E3, 10, 3, 100, 0, 0, 0, 0, 10, 30, 1, 200, 150, 50, 1E3, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 900, 479, 100, 0, 0, 0, 100], [82, 11, 20, 1, 13395660, 6710886, 2E4, 4, 1, 9, 4291585740, 1, 16, 16, 8, 8, 0, 10, 1E3, 10, 3, 100, 0, 0, 0, 0, 10, 30, 1, 200, 50, 1E3, 1E3, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 900, 482, 100, 0, 0, 0, 100], [85, 0, 18, 2, 16763904, 13408563, 2E5, 2, 1, 18, 4294914833, 2, 16, 16, 8, 8, 0, 0, 500, 10, 0, 100, 1, 0, 0, 0, 20, 30, 1, 10, 10, 20, 300, 1, 50, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9E3, 9E3, 485, 3, 541, 10, 543, 10], [83, 10, 18, 1, 13382400, 3355443, 2E4, 2, 1, 20, 4294926352, 2, 16, 16, 8, 8, 0, 0, 200, 20, 0, 99, 0, 0, 20, 0, 2, 3, 1, 1, 10, 100, 500, 1, 50, 0, 100, 0, 0, -200, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 1500, 0, 100, 0, 0, 492, 160], [83, 10, 18, 1, 13408512, 3355443, 2E4, 2, 1, 20, 4294967091, 2, 16, 16, 8, 8, 0, 0, 200, 20, 0, 100, 0, 0, 0, 0, 1, 30, 1, 1, 10, 100, 500, 3, 0, 0, 0, 0, 100, -200, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 1500, 0, 100, 0, 0, 491, 160], [83, 10, 18, 1, 26316, 3355443, 2E4, 2, 1, 20, 4281558732, 2, 16, 16, 8, 8, 0, 0, 200, 20, 0, 100, 0, 0, 0, 0, 5, 5, 1, 1, 10, 100, 500, 5, 50, 0, 0, 100, 0, -200, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 1500, 0, 100, 0, 0, 494, 160], [86, 10, 18, 2, 52224, 3355443, 2E5, 603, 1, 20, 4281584691, 2, 16, 16, 8, 8, 20, 0, 250, 10, 0, 100, 0, 0, 0, 0, 1, 1, 40, 10, 300, 20, 200, 4, 666, 0, 0, 0, 0, 100, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9E3, 9999, 493, 3, 495, 6, 544, 10], [84, 7, 21, 1, 13382400, 13395507, 22E3, 3, 1, 9, 4294941030, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 5, 15, 1, 10, 50, 50, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 3333, 487, 50, 0, 0, 0, 100], [84, 5, 21, 1, 2254370, 4491332, 22E3, 6406, 0, 13, 4286028151, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 5, 5, 5, 5, 50, 50, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 3333, 488, 25, 0, 0, 0, 100], [84, 14, 21, 1, 3368652, 10066380, 22E3, 1, 1, 17, 4291611903, 1, 16, 16, 8, 8, 0, 0, 200, 10, 3, 100, 0, 0, 0, 0, 5, 5, 1, 0, 50, 50, 200, 5, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 3333, 490, 200, 0, 0, 0, 100], [87, 16, 21, 3, 10053120, 16763904, 25E4, 6403, 0, 13, 4294953984, 1, 16, 16, 8, 8, 0, 0, 250, 10, 0, 100, 0, 0, 0, 0, 5, 15, 7, 10, 10, 1E3, 400, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 9999, 489, 3, 547, 10, 548, 10], [85, 5, 8, 1, 3394815, 13158, 24E3, 3, 0, 12, 4281584895, 2, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 6, 8, 1, 6, 50, 50, 200, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 300, 497, 80, 0, 0, 0, 100], [85, 18, 8, 1, 13382655, 3342438, 24E3, 4, 0, 12, 4291572735, 2, 16, 16, 8, 8, 0, 0, 200, 10, 2, 100, 0, 0, 0, 0, 6, 8, 1, 100, 50, 50, 200, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 300, 503, 80, 0, 0, 0, 100], [86, 2, 13, 1, 13382400, 10053171, 3E4, 104, 1, 22, 2164219920, 2, 12, 12, 6, 6, 30, 0, 100, 10, -1, 99, 1, 0, 0, 0, 4, 6, 30, 80, 200, 100, 30, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 900, 498, 10, 0, 0, 528, 30], [88, 5, 6, 3, 13434675, 10066227, 24E4, 104, 0, 12, 4294967091, 2, 16, 16, 8, 8, 90, 0, 300, 10, 3, 100, 0, 2, 0, 0, 8, 9, 30, 150, 100, 50, 500, 3, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9E3, 5E3, 499, 3, 502, 3, 529, 5], [86, 16, 21, 1, 15658496, 3355443, 15E4, 6403, 1, 20, 4294967091, 2, 12, 12, 6, 6, 0, 0, 150, 10, 0, 100, 0, 2, 0, 0, 3, 3, 3, 10, 10, 250, 200, 3, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 5E3, 496, 10, 500, 10, 501, 10], [86, 5, 6, 1, 13408512, 10053120, 24E3, 4, 0, 12, 4294954035, 2, 16, 16, 8, 8, 0, 0, 200, 10, 3, 100, 0, 0, 0, 0, 6, 8, 1, 100, 50, 50, 200, 0, 0, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 400, 505, 100, 0, 0, 0, 100], [86, 18, 6, 1, 10066380, 6710937, 24E3, 1, 0, 7, 4288269567, 2, 12, 12, 8, 8, 0, 0, 200, 10, 2, 100, 0, 0, 0, 0, 1, 5, 1, 0, 100, 50, 200, 5, 500, 0, -100, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 400, 504, 100, 507, 100, 510, 100], [87, 1, 13, 1, 16724736, 16750848, 3E4, 3, 1, 18, 4294926352, 2, 16, 16, 8, 8, 0, 0, 1E3, 10, 0, 100, 1, 0, 0, 0, 10, 20, 1, 5, 50, 50, 500, 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 1E3, 509, 10, 0, 0, 530, 20], [89, 5, 8, 3, 16724736, 16750848, 24E4, 2406, 1, 20, 4294926352, 2, 16, 16, 8, 8, 0, 0, 1500, 10, 0, 100, 0, 2, 0, 0, 30, 50, 7, 5, 100, 50, 500, 1, 50, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9E3, 6E3, 508, 3, 511, 3, 531, 5], [87, 16, 21, 1, 16763904, 3355443, 15E4, 12806, 1, 20, 4294967091, 2, 12, 12, 6, 6, 0, 0, 150, 10, 0, 100, 0, 2, 0, 0, 4, 4, 4, 10, 10, 250, 200, 3, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 6E3, 506, 10, 532, 20, 545, 40], [87, 6, 21, 1, 39168, 13395456, 2E4, 1, 0, 21, 4291624908, 1, 16, 16, 8, 8, 0, 0, 30, 30, 0, 100, 0, 0, 0, 0, 4, 6, 1, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 300, 519, 150, 515, 150, 538, 400], [87, 6, 21, 2, 8930304, 13395456, 26E3, 104, 1, 3, 4284887808, 1, 16, 16, 8, 8, 20, 0, 500, 10, 3, 100, 0, 0, 0, 0, 5, 5, 2, 150, 5, 250, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 400, 512, 15, 518, 15, 539, 30], [88, 6, 21, 3, 13421619, 13395456, 32E3, 1, 1, 18, 4294967091, 2, 8, 32, 8, 32, 0, 0, 40, 10, 50, 100, 0, 1, 0, 0, 1, 55, 1, 0, 5, 250, 250, 3, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 500, 513, 15, 514, 15, 537, 30], [90, 6, 21, 4, 16724736, 16750848, 25E4, 104, 1, 21, 4294926352, 2, 32, 32, 24, 24, 60, 0, 900, 10, 3, 99, 0, 2, 0, 0, 12, 16, 15, 100, 100, 50, 500, 1, 50, 0, 100, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 600, 516, 3, 517, 3, 540, 5], [88, 1, 20, 1, 13434879, 16764006, 5E3, 3, 1, 4, 4291624959, 1, 32, 32, 16, 16, 0, 0, 30, 30, 0, 100, 0, 0, 0, 0, 10, 20, 1, 20, 100, 50, 50, 0, 0, 1E3, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 500, 522, 200, 526, 200, 535, 500], [89, 16, 13, 5, 4473907, 15658496, 7E4, 3, 1, 20, 4294967091, 2, 32, 16, 4, 4, 0, 0, 200, 10, 0, 100, 0, 0, 0, 0, 1, 30, 1, 30, 5, 1E3, 300, 3, 0, 0, 0, 0, 100, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 700, 520, 5, 533, 10, 534, 10], [89, 13, 10, 3, 4469555, 16728080, 8E4, 3, 1, 6, 4294926352, 2, 32, 40, 32, 32, 0, 0, 100, 10, -1, 98, 0, 1, 0, 0, 12, 15, 2, 20, 5, 250, 300, 1, 50, 0, 100, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 600, 521, 5, 523, 5, 524, 5], [91, 1, 20, 1, 16737996, 16764006, 25E4, 2, 1, 19, 3439290060, 2, 32, 32, 32, 32, 0, 0, 1E3, 10, 0, 100, 1, 0, 0, 0, 500, 600, 1, 5, 600, 50, 500, 0, 0, 1E3, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 1E3, 525, 3, 527, 3, 536, 5], [89, 4, 4, 1, 13421772, 3355494, 3E4, 2, 1, 1, 4294914867, 1, 16, 16, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 0, 60, 80, 1, 1, 50, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 1E3, 549, 200, 0, 0, 550, 200], [90, 4, 4, 1, 13369344, 3355494, 5E4, 4, 0, 2, 4284900966, 1, 8, 8, 8, 8, 0, 0, 300, 10, 3, 100, 0, 0, 0, 0, 10, 30, 4, 150, 50, 15, 150, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 24, 4294926352, 1, 16, 48, 12, 36, 100, 20, 0, 100, 0, 0, 0, 10, 20, 1, 0, 1E3, 3E3, 553, 40, 555, 40, 556, 40], [90, 0, 3, 1, 13369344, 13421772, 5E4, 104, 1, 17, 4284901068, 1, 16, 16, 8, 8, 50, 20, 300, 10, 5, 100, 0, 0, 50, 0, 5, 5, 10, 100, 50, 15, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 3E3, 551, 25, 552, 25, 554, 25], [92, 4, 4, 2, 13421772, 3355494, 3E5, 5, 1, 1, 4294914867, 1, 32, 16, 32, 8, 0, 0, 200, 20, 5, 99, 0, 0, 0, 0, 300, 500, 5, 0, 150, 100, 250, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 9999, 542, 10, 0, 0, 546, 10], [99, 4, 4, 3, 12303291, 8934690, 999999, 3, 0, 2, 4294926352, 2, 16, 16, 16, 16, 0, 0, 100, 20, 0, 98, 1, 0, 0, 0, 6, 7, 24, 15, 60, 300, 100, 1, 100, 0, 0, 100, 0, 0, 100, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 99999, 9999, 557, 2, 0, 0, 0, 10], [0, 0, 0, 0, 0, 0, 0, 5, 1, 20, 4284914175, 2, 8, 8, 4, 4, 0, 0, 300, 10, 3, 100, 0, 0, 0, 0, 5, 5, 10, 0, 60, 300, 300, 2, 20, 0, 0, 0, 0, 0, 0, 2, 0, 15, 4288269567, 2, 8, 8, 4, 4, 50, 20, 0, 98, 0, 0, 0, 5, 5, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 9, 1, 18, 4294967091, 2, 8, 16, 16, 16, 30, 0, 100, 10, 0, 100, 0, 0, 0, 0, 1, 33, 6, 50, 60, 300, 500, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 4, 1, 3, 4284887808, 1, 16, 16, 16, 16, 50, 50, 400, 10, 2, 100, 0, 0, 0, 0, 1, 1, 20, 300, 60, 300, 500, 4, 66, 0, 0, 0, 0, 0, 0, 1, 0, 6, 4284913920, 1, 32, 32, 24, 24, 50, 50, 0, 100, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 3, 1, 17, 4288269567, 2, 16, 16, 4, 4, 0, 0, 100, 10, 0, 100, 0, 2, 0, 0, 8, 8, 1, 75, 60, 300, 500, 5, 1800, 0, 0, 0, 0, 0, 0, 1, 0, 7, 4288269567, 2, 48, 48, 16, 16, 10, 6, 0, 100, 0, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 8, 0, 25, 4288217088, 1, 64, 64, 40, 48, 0, 90, 100, 20, 0, 100, 0, 0, 0, 1, 9999, 9999, 1, 0, 60, 300, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [95, 13, 21, 1, 16766720, 10040064, 99999, 1, 1, 17, 4294914816, 2, 8, 8, 4, 4, 0, 0, 300, 10, 3, 99, 0, 0, 0, 0, 10, 20, 1, 0, 60, 50, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 9999, 561, 100, 0, 0, 0, 5], []],
	fh = [20, 20, 20, 20, 18, 8, 20, 20, 8, 20, 16, 16, 20, 20, 16, 16, 16, 14, 8],
	gh = [20, 20, 20, 20, 24, 40, 20, 20, 20, 20, 16, 24, 20, 20, 16, 16, 16, 14, 40],
	ah = [1, 0.2, 1, 0.2, 2, 0.5, 1, 0.1, 1, 0.1, 1, 1, 0.1, 0.1, 1, 1, 0.2, 1, 0.5],
	G = new hh;

function hh() {
	var a, b;
	this.a = Array(300);
	for (a = 0; 300 > a; a++)
		this.a[a] = Array(21);
	this.c = Array(300);
	for (a = 0; 300 > a; a++)
		this.c[a] = Array(21);
	this.id = new Int32Array(300);
	this.step = new Int32Array(300);
	this.d = new Int32Array(300);
	this.count = new Int32Array(300);
	this.state = new Int32Array(300);
	this.r = new Int32Array(300);
	this.l = new Int32Array(300);
	this.search = new Int32Array(300);
	this.S = new Int32Array(300);
	this.C = new Int32Array(300);
	this.X = new Int32Array(300);
	this.D = new Int32Array(300);
	this.H = new Int32Array(300);
	this.B = new Int32Array(300);
	this.bb = this.index = 0;
	this.n = 20;
	for (a = 0; 300 > a; a++)
		for (b = 0; 21 > b; b++)
			this.a[a][b] = new Qg;
	for (a = 0; 300 > a; a++)
		for (b = 0; 21 > b; b++)
			this.c[a][b] = new Qg
}
aa = hh.prototype;
aa.j = function() {
	this.bb = this.index = 0
}
;
aa.add = function(a, b, c) {
	var d;
	d = floor(100 * Kb / 100);
	if (this.index != d && this.bb != d) {
		a *= 8;
		b *= 8;
		for (d = 0; 21 > d; d++)
			Rg(this.a[this.index][d], a + A(1), b + A(1)),
			this.c[this.index][d].set(this.a[this.index][d]);
		this.id[this.index] = c;
		this.step[this.index] = B[c][bh];
		this.d[this.index] = 0;
		this.count[this.index] = 0;
		this.state[this.index] = 0;
		this.r[this.index] = B[c][lg];
		this.l[this.index] = 0;
		this.search[this.index] = 0;
		this.S[this.index] = 0;
		this.C[this.index] = 0;
		this.X[this.index] = 0;
		this.D[this.index] = 0;
		this.H[this.index] = 0;
		this.B[this.index] = 0;
		this.index++;
		this.bb++
	}
}
;
aa.sub = function(a) {
	for (var b = 0; 21 > b; b++)
		this.a[a][b].set(this.a[this.index - 1][b]),
		this.c[a][b].set(this.c[this.index - 1][b]);
	this.id[a] = this.id[this.index - 1];
	this.step[a] = this.step[this.index - 1];
	this.d[a] = this.d[this.index - 1];
	this.count[a] = this.count[this.index - 1];
	this.state[a] = this.state[this.index - 1];
	this.r[a] = this.r[this.index - 1];
	this.l[a] = this.l[this.index - 1];
	this.search[a] = this.search[this.index - 1];
	this.S[a] = this.S[this.index - 1];
	this.C[a] = this.C[this.index - 1];
	this.X[a] = this.X[this.index - 1];
	this.D[a] = this.D[this.index - 1];
	this.H[a] = this.H[this.index - 1];
	this.B[a] = this.B[this.index - 1];
	this.index--
}
;
aa.h = function(a, b, c) {
	var d = new Qg;
	d.q(this.a[a][b], this.c[a][b]);
	this.a[a][b].set(this.c[a][b]);
	var e = (Sg(d) >> 2) + 1;
	Tg(d, 1 / e);
	for (var g, k, r, m = 0; m < e; m++)
		g = this.a[a][b].y + d.y,
		k = K(this.a[a][b].x, 0, 511) >> 3,
		r = K(g, 0, 255) >> 3,
		k = I.e[r][k],
		0 > g || 256 <= g || (0 <= k && 8 >= k ? (0 < d.y && (this.state[a] |= 2),
		d.x *= c,
		d.y = -d.y) : this.a[a][b].y = g),
		g = this.a[a][b].x + d.x,
		k = K(g, 0, 511) >> 3,
		r = K(this.a[a][b].y, 0, 255) >> 3,
		k = I.e[r][k],
		0 > g || 512 <= g || (0 <= k && 8 >= k ? (d.y *= c,
		d.x = -d.x,
		this.state[a] |= 1) : this.a[a][b].x = g)
}
;
aa.m = function(a, b, c, d) {
	for (var e = 0.5 * (a + c), g = 1E3, k = -1, r, m, n, F = 0; F < this.index; F++)
		r = B[this.id[F]][ch],
		m = B[this.id[F]][bh],
		n = (fh[m] >> 1) * ((r >> 1) + 1),
		r *= gh[m] >> 1,
		this.search[F] = 0,
		m = this.a[F][this.n],
		0 == this.r[F] || m.x - n > c || m.x + n < a || m.y - r > d || m.y + r < b || (this.search[F] = 1,
		Kg(m.x - e) < g && (g = Kg(m.x - e),
		k = F));
	return k
}
;
aa.K = function(a, b, c, d, e, g, k, r, m) {
	var n = -1, F, H, M;
	v.L = 0;
	r *= 0.5;
	m *= 0.5;
	for (var E = 0; E < this.index && (F = B[this.id[E]][ch],
	H = B[this.id[E]][bh],
	M = floor(fh[H] / 2) * floor(F / 2 + 1),
	F *= floor(gh[H] / 2),
	0 == this.r[E] || this.a[E][this.n].x - M > g + r || this.a[E][this.n].x + M < g - r || this.a[E][this.n].y - F > k + m || this.a[E][this.n].y + F < k - m || (M = d + floor(A(e - d + 1)),
	4 == b ? (this.D[E] = c - floor(c * B[this.id[E]][tg] / 100),
	this.H[E] = M,
	0 > B[this.id[E]][tg] && (this.H[E] = ig(1, M - floor(M * B[this.id[E]][tg] / 100)))) : (0 == b ? M = ig(1, M - B[this.id[E]][pg]) : 1 == b ? M = ig(1, M - floor(M * B[this.id[E]][qg] / 100)) : 2 == b ? M = ig(1, M - floor(M * B[this.id[E]][rg] / 100)) : 3 == b && (M = ig(1, M - floor(M * B[this.id[E]][sg] / 100))),
	this.r[E] = ig(this.r[E] - M, 0),
	0 == (wc & 1) && ne.add(this.a[E][this.n].x, this.a[E][this.n].y - F, 1, M, 12632256),
	this.S[E] = M),
	2 == b ? (this.C[E] = 500 - floor(500 * B[this.id[E]][rg] / 100),
	this.X[E] = c) : 5 == b && (this.B[E] = c - floor(c * B[this.id[E]][ug] / 100)),
	n = E,
	v.L += M,
	Fb = this.r[E],
	Gb = B[this.id[E]][lg],
	Hb = 100,
	Ib = this.id[E],
	0 != a)); E++)
		;
	return n
}
;
aa.p = function(a, b) {
	var c = new Qg,
		d = this.id[a] + b,
		e = B[d],
		g = e[7] % 100,
		k = floor(e[7] / 100),
		r = e[8],
		m = e[9],
		n = e[10],
		F = e[11],
		H = e[12],
		M = e[13],
		E = e[14],
		la = e[15],
		Ja = e[16],
		Ea = e[17],
		Ca = e[18],
		Z = e[19],
		X = e[20],
		$ = e[21],
		ob = e[22],
		pb = e[23],
		Wa = e[24],
		ta = e[25],
		ya = e[26],
		rb = e[27],
		ia = e[28],
		ka = e[29],
		za = e[30],
		bb = e[31],
		ab = e[32],
		pa = e[33],
		Xa = e[34],
		Bb = e[41],
		Cb = e[42],
		Sa = e[43],
		Oa = e[44],
		Ob = e[45],
		Pb = e[46],
		Qb = e[47],
		Rb = e[48],
		Sb = e[49],
		Tb = e[50],
		qb = e[51],
		Ub = e[52],
		Vb = e[53],
		Wb = e[54],
		Xb = e[55],
		Yb = e[56],
		Zb = e[57],
		ba = e[58],
		e = e[59];
	if (0 < this.l[a])
		this.l[a]--;
	else if (!(A(1E3) > bb) && (bb = v.m(this.a[a][0].x - ab, this.a[a][0].y - ab, this.a[a][0].x + ab, this.a[a][0].y + ab, 0),
	-1 != bb && (this.l[a] = za,
	0 != g)))
		if (1 == g) {
			var g = this.a[a][0].x + 10 * c.x,
				U = this.a[a][0].y + 10 * c.y;
			oe.add(1, g, U, 0, 0, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa)
		} else if (2 == g)
			c = v.a[bb][2].x - this.a[a][0].x,
			c /= Kg(c),
			g = this.a[a][0].x + 10 * c,
			U = this.a[a][0].y,
			oe.add(1, g, U, c * ka * 0.1, 0, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa);
		else if (3 == g || 6 == g)
			for (3 == g ? Rg(c, v.a[bb][2].x - this.a[a][0].x, v.a[bb][2].y - this.a[a][0].y) : 6 == g && Rg(c, 0, -1),
			d = 0 < k ? k : 16,
			k = floor(512 * Vg(c) / TAU),
			k -= floor((ia - 1) * d / 2),
			za = 0; za < ia; za++) {
				c.x = Xe[k & 511][0];
				c.y = -Xe[k & 511][1];
				var g = this.a[a][0].x + 10 * c.x,
					U = this.a[a][0].y + 10 * c.y,
					ab = c.x * ka * 0.1,
					sc = c.y * ka * 0.1;
				oe.add(1, g, U, ab, sc, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa);
				k += d
			}
		else if (4 == g)
			for (za = 0; za < ia; za++)
				Rg(c, v.a[bb][2].x - this.a[a][0].x, v.a[bb][2].y - this.a[a][0].y),
				d = 0 < k ? k : ia,
				0 < ia && (U = floor(A(512)),
				g = A(10) * d,
				c.x += Xe[U][0] * g,
				c.y += Xe[U][1] * g),
				g = this.a[a][0].x,
				U = this.a[a][0].y,
				ab = c.x / ka,
				sc = (c.y - 0.5 * ka * ka * X * 0.01) / ka,
				oe.add(1, g, U, ab, sc, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa);
		else if (5 == g)
			for (za = 0; za < ia; za++)
				g = this.a[a][0].x + N(-ab, ab),
				U = this.a[a][0].y + N(-ab, 0),
				oe.add(1, g, U, 0, 0, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa);
		else if (7 == g)
			for (za = 0; za < ia; za++)
				g = floor(this.a[a][0].x / 8),
				U = floor(this.a[a][0].y / 8),
				this.add(g, U, d + ya);
		else if (8 == g)
			for (za = 0; za < ia; za++)
				U = $g(4),
				g = v.a[U][2].x,
				U = v.a[U][2].y,
				oe.add(1, g, U, 0, 0, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa);
		else if (9 == g)
			for (za = 0; za < ia; za++)
				U = $g(4),
				Rg(c, v.a[U][0].x - this.a[a][0].x, v.a[U][0].y - this.a[a][0].y),
				Xg(c),
				g = this.a[a][0].x + 10 * c.x,
				U = this.a[a][0].y + 10 * c.y,
				ab = c.x * ka * 0.1,
				sc = c.y * ka * 0.1,
				oe.add(1, g, U, ab, sc, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, 0, ta, ya, rb, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, 0, 0, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb, ba, e, pa, Xa)
}
;

function Jg(a, b, c) {
	for (var d, e = 0, g = 0; g < ze; g++)
		if (0 != (Ae[g] & Ce)) {
			var k = Pe[g + 1] - Pe[g];
			for (d = 0; d < k; d++)
				e < B[Pe[g] + d][Qe] && (e = B[Pe[g] + d][Qe]),
				d += B[Pe[g] + d][Re]
		}
	d = 1 == c ? b : a.id[b];
	k = Kg(PLAYER_LEVEL[0] - B[d][Qe]);
	g = 0;
	g = 10 > k ? floor(B[d][ng] * (10 - k) / 10) : e + 10 <= PLAYER_LEVEL[0] ? 0 : 1;
	e = 100;
	for (d = 0; 4 > d; d++)
		x(s + d, Td) && (e += y(s + d, t));
	g = floor(g * e / 100);
	if (1 == c)
		return g;
	Ne();
	EXP = K(EXP + g, 0, 9999999);
	c = 4753E3;
	d = 9999999;
	if (98 > PLAYER_LEVEL[0]) {
		c = 0;
		for (d = 1; d < PLAYER_LEVEL[0]; d++)
			c += 1E3 * d;
		d = c + 1E3 * d
	}
	if (d <= EXP && 99 > PLAYER_LEVEL[0]) {
		PLAYER_LEVEL[0]++;
		for (d = 0; 4 > d; d++)
			ac[d] += 2;
		c = 0;
		for (d = s; d < Gc; d++)
			w(q[d], hd) == ee && (c = 1),
			w(Dc[d], hd) == ee && (c = 1),
			w(Ec[d], hd) == ee && (c = 1);
		if (1 == c)
			for (Lb = 480,
			b = 0; 4 > b; b++)
				v.p(562, v.a[b][0].x, v.a[b][0].y, 0),
				p[b] != kc[b] && ne.add(v.a[b][0].x, v.a[b][0].y, 0, kc[b] - p[b], 65280),
				p[b] = kc[b]
	}
	te();
	c = B[a.id[b]][mg];
	k = g = e = 100;
	for (d = 0; 4 > d; d++)
		x(s + d, Qd) && (e += y(s + d, t)),
		x(s + d, Rd) && (g += y(s + d, t)),
		x(s + d, Sd) && (k += y(s + d, t));
	for (d = 0; 4 > d; d++)
		if (x(s + d, Xd) && A(100) < y(s + d, t)) {
			var r = G.m(a.a[b][0].x - 600, a.a[b][0].y - 300, a.a[b][0].x + 600, a.a[b][0].y + 300);
			-1 != r && v.p(y(s + d, id), a.a[b][0].x, a.a[b][0].y, r)
		}
	r = 0;
	17 == a.step[b] && (r = a.d[b] - 1);
	for (d = og; d < og + 6; d += 2)
		0 != B[a.id[b]][d] && Math.random() * B[a.id[b]][d + 1] * 100 < e && pe.add(a.a[b][r].x, a.a[b][r].y, B[a.id[b]][d], 0, 0);
	1 > 3 * Math.random() && pe.add(a.a[b][r].x, a.a[b][r].y, 1, floor(c * k / 100), 0);
	500 * Math.random() < g && pe.add(a.a[b][r].x, a.a[b][r].y, 2, 0, 0);
	return 0
}
da.fff = hh.prototype.move;
hh.prototype.move = function() {
	var a;
	for (a = 0; a < this.index; a++) {
		var b = this.step[a];
		0 < this.D[a] && 0 < this.r[a] && (this.D[a]--,
		this.r[a] = ig(this.r[a] - this.H[a], 0),
		Fb = this.r[a],
		Gb = B[this.id[a]][lg],
		Hb = 100,
		Ib = this.id[a]);
		if (0 < this.B[a] && 0 < this.r[a])
			this.B[a]--;
		else {
			if (0 < this.C[a] && 0 < this.r[a] && (this.C[a]--,
			A(100) < this.X[a]))
				continue;
			0 == b ? a = this.lb(a) : 1 == b ? a = this.sa(a) : 2 == b ? a = this.ta(a) : 3 == b ? a = this.ua(a) : 4 == b ? a = this.ma(a, b) : 5 == b ? a = this.na(a, b) : 6 == b ? a = this.va(a) : 7 == b ? a = this.wa(a) : 8 == b ? a = this.xa(a) : 9 == b ? a = this.eb(a, b) : 10 == b ? a = this.mb(a) : 11 == b ? a = this.nb(a) : 12 == b ? a = this.ma(a, b) : 13 == b ? a = this.eb(a, b) : 14 == b ? a = this.ob(a) : 15 == b ? a = this.pb(a) : 16 == b ? a = this.qb(a) : 17 == b ? a = this.rb(a) : 18 == b && (a = this.na(a, b))
		}
	}
}
;
da.fff = hh.prototype.lb;
hh.prototype.lb = function(a) {
	var b;
	b = B[this.id[a]][ch];
	if (0 == this.d[a]) {
		this.a[a][0].x += 1;
		this.a[a][0].y += 0 - 4 * (b - 1);
		this.a[a][1].x += 0;
		this.a[a][1].y += 2 - 4 * (b - 1);
		this.a[a][2].x += 2;
		this.a[a][2].y += 2 - 4 * (b - 1);
		for (b = 0; 3 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a] = 1
	} else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], -0.05, 0.99);
		W(this.a[a][1], this.c[a][1], 0.05, 0.99);
		W(this.a[a][2], this.c[a][2], 0.05, 0.99);
		if (0 < (this.state[a] & 3)) {
			var c = -0.1;
			2 == this.d[a] && (c *= -1);
			this.a[a][1].x += A(c);
			this.a[a][2].x += A(c);
			1 > A(100) && (this.d[a] = Zf(this.d[a] + 1, 1, 2))
		}
		Y(this.a[a][0], this.a[a][1], 9 * b, 0.2, 0.2);
		Y(this.a[a][0], this.a[a][2], 9 * b, 0.2, 0.2);
		Y(this.a[a][1], this.a[a][2], 11 * b, 0.2, 0.2);
		this.p(a, 0);
		for (b = this.state[a] = 0; 3 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = 0; 3 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 3 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		for (b = this.state[a] = 0; 3 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.sa;
hh.prototype.sa = function(a) {
	var b;
	if (0 == this.d[a]) {
		this.a[a][0].x += 0;
		this.a[a][1].x += 1;
		this.a[a][2].x += 2;
		for (b = 0; 3 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a] = 1
	} else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0.05, 0.99);
		W(this.a[a][1], this.c[a][1], 0.05, 0.9);
		W(this.a[a][2], this.c[a][2], 0.05, 0.9);
		b = v.m(this.a[a][0].x - 200, this.a[a][0].y - 50, this.a[a][0].x + 200, this.a[a][0].y + 50, 0);
		-1 != b && (this.a[a][0].x += v.a[b][2].x < this.a[a][0].x ? -0.001 : 0.001);
		if (0 < (this.state[a] & 2)) {
			var c = 0,
				c = -1 != b ? v.a[b][2].x < this.a[a][0].x ? -1 : 1 : Kf(-1, 1);
			10 > A(100) && (this.a[a][0].x += N(0.4, 0.6) * c,
			this.a[a][0].y += N(-1.5, -2))
		}
		Y(this.a[a][0], this.a[a][1], 0, 0, 0.01);
		Y(this.a[a][1], this.a[a][2], 0, 0, 0.01);
		this.p(a, 0);
		this.state[a] = 0;
		this.h(a, 0, 0.5);
		b = this.state[a];
		this.h(a, 1, 0.5);
		this.h(a, 2, 0.5);
		this.state[a] = b;
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = 0; 3 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 3 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		for (b = this.state[a] = 0; 3 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.ta;
hh.prototype.ta = function(a) {
	var b, c = new Qg;
	b = B[this.id[a]][ch];
	if (0 == this.d[a]) {
		this.a[a][0].x += 1;
		this.a[a][0].y += 1;
		this.a[a][1].x += 1;
		this.a[a][1].y += 1;
		this.a[a][2].x += 0;
		this.a[a][2].y += 0;
		this.a[a][3].x += 0;
		this.a[a][3].y += 2;
		this.a[a][4].x += 1;
		this.a[a][4].y += 1;
		this.a[a][5].x += 2;
		this.a[a][5].y += 0;
		this.a[a][6].x += 2;
		this.a[a][6].y += 2;
		for (b = 0; 7 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a] = 1
	} else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0, 0.99);
		W(this.a[a][1], this.c[a][1], 0, 0.99);
		W(this.a[a][2], this.c[a][2], 0, 0.99);
		W(this.a[a][3], this.c[a][3], 0, 0.99);
		W(this.a[a][4], this.c[a][4], 0, 0.99);
		W(this.a[a][5], this.c[a][5], 0, 0.99);
		W(this.a[a][6], this.c[a][6], 0, 0.99);
		Rg(c, 0, 0);
		var d = v.m(this.a[a][0].x - 150, this.a[a][0].y - 150, this.a[a][0].x + 150, this.a[a][0].y + 150, 0);
		-1 != d && (c.q(v.a[d][2], this.a[a][0]),
		d = Xg(c),
		d -= B[this.id[a]][32] - 10,
		0 > d ? Tg(c, -0.05) : Tg(c, 0.05));
		this.a[a][0].add(c);
		10 > A(100) && (this.a[a][0].x += N(-1, 1),
		this.a[a][0].y += N(-1, 1));
		this.a[a][2].x += N(0, -0.1);
		this.a[a][3].x += N(0, -0.1);
		this.a[a][5].x += N(0, 0.1);
		this.a[a][6].x += N(0, 0.1);
		c = 0.5;
		d = 6 * b;
		Y(this.a[a][0], this.a[a][1], 3 * b, c, c);
		Y(this.a[a][0], this.a[a][4], 3 * b, c, c);
		Y(this.a[a][1], this.a[a][2], d, c, c);
		Y(this.a[a][1], this.a[a][3], d, c, c);
		Y(this.a[a][2], this.a[a][3], d, c, c);
		Y(this.a[a][4], this.a[a][5], d, c, c);
		Y(this.a[a][4], this.a[a][6], d, c, c);
		Y(this.a[a][5], this.a[a][6], d, c, c);
		this.p(a, 0);
		for (b = this.state[a] = 0; 7 > b; b++)
			this.h(a, b, 1);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = 0; 7 > b; b++)
				this.a[a][b].x += N(-1, 1),
				this.a[a][b].y -= N(1, 2);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 8 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		c = 0.5;
		d = 6 * (150 - this.count[a]) / 150;
		Y(this.a[a][1], this.a[a][2], d, c, c);
		Y(this.a[a][1], this.a[a][3], d, c, c);
		Y(this.a[a][2], this.a[a][3], d, c, c);
		Y(this.a[a][4], this.a[a][5], d, c, c);
		Y(this.a[a][4], this.a[a][6], d, c, c);
		Y(this.a[a][5], this.a[a][6], d, c, c);
		for (b = this.state[a] = 0; 7 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.ua;
hh.prototype.ua = function(a) {
	var b, c = new Qg, d = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.d[a] = 1;
	else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0, 0.99);
		for (b = 1; 6 > b; b++)
			W(this.a[a][b], this.c[a][b], 0, 0.9);
		Rg(c, 0, 0);
		b = v.m(this.a[a][0].x - 200, this.a[a][0].y - 200, this.a[a][0].x + 200, this.a[a][0].y + 200, 0);
		-1 != b && (c.q(v.a[b][2], this.a[a][0]),
		b = Xg(c),
		b -= B[this.id[a]][32] / 2 - 10,
		0 > b ? Tg(c, -0.01) : Tg(c, 0.01));
		b = I.e[floor(K(this.a[a][0].y + 24, 0, 255) / 8)][floor(K(this.a[a][0].x, 0, 511) / 8)];
		0 <= b && 8 >= b && (c.y -= 0.02);
		2 > A(100) && (c.x += N(-0.5, 0.5),
		c.y += N(-0.5, 0.5));
		this.a[a][0].add(c);
		c = 0.02;
		d *= 5;
		for (b = 0; 5 > b; b++)
			Y(this.a[a][b], this.a[a][b + 1], d, 0, c);
		this.p(a, 0);
		for (b = this.state[a] = 0; 6 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = this.count[a] = 0; 6 > b; b++)
				this.a[a][b].x += N(-1, 1),
				this.a[a][b].y -= N(1, 2);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 6 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		c = 0.5;
		d = 10 * (150 - this.count[a]) / 150;
		Y(this.a[a][1], this.a[a][2], d, c, c);
		Y(this.a[a][2], this.a[a][3], d, c, c);
		Y(this.a[a][3], this.a[a][4], d, c, c);
		for (b = this.state[a] = 0; 6 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.ma;
hh.prototype.ma = function(a, b) {
	var c;
	c = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.d[a] = 1;
	else if (1 == this.d[a] || 2 == this.d[a]) {
		4 == b ? (W(this.a[a][0], this.c[a][0], -0.2, 0.99),
		W(this.a[a][1], this.c[a][1], 0, 0.99),
		W(this.a[a][2], this.c[a][2], -0.1, 0.99),
		W(this.a[a][3], this.c[a][3], 0, 0.99),
		W(this.a[a][4], this.c[a][4], 0, 0.99),
		W(this.a[a][5], this.c[a][5], 0, 0.99),
		W(this.a[a][6], this.c[a][6], 0, 0.99),
		W(this.a[a][7], this.c[a][7], 0, 0.99),
		W(this.a[a][8], this.c[a][8], 0, 0.99),
		W(this.a[a][9], this.c[a][9], 0.3, 0.99),
		W(this.a[a][10], this.c[a][10], 0.3, 0.99)) : 12 == b && (W(this.a[a][0], this.c[a][0], -0.02, 0.99),
		W(this.a[a][1], this.c[a][1], 0, 0.99),
		W(this.a[a][2], this.c[a][2], -0.01, 0.99),
		W(this.a[a][3], this.c[a][3], 0, 0.99),
		W(this.a[a][4], this.c[a][4], 0, 0.99),
		W(this.a[a][5], this.c[a][5], 0, 0.99),
		W(this.a[a][6], this.c[a][6], 0, 0.99),
		W(this.a[a][7], this.c[a][7], 0, 0.99),
		W(this.a[a][8], this.c[a][8], 0, 0.99),
		W(this.a[a][9], this.c[a][9], 0.1, 0.99),
		W(this.a[a][10], this.c[a][10], 0.1, 0.99));
		if (50 > A(100) && 0 < (this.state[a] & 3)) {
			var d = v.m(this.a[a][0].x - 200, this.a[a][0].y - 50, this.a[a][0].x + 200, this.a[a][0].y + 50, 0);
			-1 != d ? this.d[a] = v.a[d][2].x < this.a[a][0].x ? 1 : 2 : 10 > A(100) && (this.d[a] = Kf(1, 2));
			var e = d = 1,
				g = 0;
			if (12 == b)
				d = 0.25,
				e = 0.3,
				g = 0.25;
			1 == this.d[a] ? (this.a[a][9].x < this.a[a][10].x ? (this.a[a][10].x += A(-d),
			this.a[a][10].y += -e) : (this.a[a][9].x += A(-d),
			this.a[a][9].y += -e),
			this.a[a][5].x += A(-g),
			this.a[a][6].x += A(-g)) : (this.a[a][9].x < this.a[a][10].x ? (this.a[a][9].x += A(d),
			this.a[a][9].y += -e) : (this.a[a][10].x += A(d),
			this.a[a][10].y += -e),
			this.a[a][5].x += A(g),
			this.a[a][6].x += A(g))
		}
		d = 0.5;
		e = 1.2 * c;
		if (12 == b)
			d = 0.02,
			e = 1 * c;
		Y(this.a[a][0], this.a[a][1], 3 * e, d, d);
		Y(this.a[a][1], this.a[a][2], 3 * e, d, d);
		Y(this.a[a][1], this.a[a][3], 4 * e, d, d);
		Y(this.a[a][1], this.a[a][4], 4 * e, d, d);
		Y(this.a[a][3], this.a[a][5], 4 * e, d, d);
		Y(this.a[a][4], this.a[a][6], 4 * e, d, d);
		Y(this.a[a][2], this.a[a][7], 4 * e, d, d);
		Y(this.a[a][2], this.a[a][8], 4 * e, d, d);
		Y(this.a[a][7], this.a[a][9], 4 * e, d, d);
		Y(this.a[a][8], this.a[a][10], 4 * e, d, d);
		Y(this.a[a][7], this.a[a][8], 5 * e, d, d);
		332 == this.id[a] ? this.p(a, $g(6)) : (this.p(a, 0),
		0 != B[this.id[a]][Re] && this.p(a, 1));
		for (c = this.state[a] = 0; 11 > c; c++)
			this.h(a, c, 0.5);
		this.a[a][this.n].set(this.a[a][1]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (c = this.count[a] = 0; 11 > c; c++)
				this.a[a][c].x += N(-1, 1),
				this.a[a][c].y -= N(1, 2);
			Jg(this, a, 0)
		}
	} else {
		for (c = 0; 11 > c; c++)
			W(this.a[a][c], this.c[a][c], 0.05, 0.99);
		d = 0.5;
		e = 1.2 * (150 - this.count[a]) / 150;
		Y(this.a[a][1], this.a[a][2], 3 * e, d, d);
		Y(this.a[a][3], this.a[a][5], 4 * e, d, d);
		Y(this.a[a][4], this.a[a][6], 4 * e, d, d);
		Y(this.a[a][7], this.a[a][9], 4 * e, d, d);
		Y(this.a[a][8], this.a[a][10], 4 * e, d, d);
		for (c = this.state[a] = 0; 11 > c; c++)
			this.h(a, c, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.na;
hh.prototype.na = function(a, b) {
	var c, d = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.d[a] = floor(N(4, 8));
	else if (10 > this.d[a]) {
		if (5 == b) {
			for (c = 0; c < this.d[a] - 1; c++)
				W(this.a[a][c], this.c[a][c], -0.04, 0.99);
			W(this.a[a][c], this.c[a][c], 1, 0.99)
		} else {
			for (c = 0; c < this.d[a] - 1; c++)
				W(this.a[a][c], this.c[a][c], 0.04, 0.99);
			W(this.a[a][c], this.c[a][c], -1, 0.99)
		}
		10 > A(100) && (c = floor(A(4)),
		this.a[a][c].x += N(-0.5, 0.5));
		Y(this.a[a][0], this.a[a][1], 8 * d, 0.2, 0.2);
		for (c = 1; c < this.d[a] - 2; c++)
			Y(this.a[a][c], this.a[a][c + 1], 6 * d, 0.2, 0.2);
		Y(this.a[a][c], this.a[a][c + 1], 6 * d, 0.2, 0);
		this.p(a, 0);
		for (c = this.state[a] = 0; c < this.d[a]; c++)
			this.h(a, c, 0.5);
		this.a[a][this.n].x = 0.5 * (this.a[a][0].x + this.a[a][this.d[a] - 1].x);
		this.a[a][this.n].y = 0.5 * (this.a[a][0].y + this.a[a][this.d[a] - 1].y);
		if (0 >= this.r[a]) {
			for (c = 0; c < this.d[a]; c++)
				this.a[a][c].x += N(-0.5, 0.5),
				this.a[a][c].y -= N(2, 3);
			this.d[a] += 10;
			Jg(this, a, 0)
		}
	} else {
		for (c = 0; c < this.d[a] - 10; c++)
			W(this.a[a][c], this.c[a][c], 0.05, 0.99);
		for (c = this.state[a] = 0; c < this.d[a] - 10; c++)
			this.h(a, c, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.va;
hh.prototype.va = function(a) {
	var b, c = B[this.id[a]][ch];
	if (0 == this.d[a]) {
		this.a[a][0].x += 1;
		this.a[a][0].y += 1;
		this.a[a][1].x += 1;
		this.a[a][1].y += 0;
		this.a[a][2].x += 1.85;
		this.a[a][2].y += 0.5;
		this.a[a][3].x += 1.85;
		this.a[a][3].y += 1.5;
		this.a[a][4].x += 1;
		this.a[a][4].y += 2;
		this.a[a][5].x += 1 - 0.85;
		this.a[a][5].y += 1.5;
		this.a[a][6].x += 1 - 0.85;
		this.a[a][6].y += 0.5;
		for (b = 0; 7 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a] = 1
	} else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0.5, 0.99);
		for (b = 1; 7 > b; b++)
			W(this.a[a][b], this.c[a][b], 0, 0.99);
		b = v.m(this.a[a][0].x - 200, this.a[a][0].y - 50, this.a[a][0].x + 200, this.a[a][0].y + 50, 0);
		-1 != b && 40 > A(100) && 0 < (this.state[a] & 2) && (this.a[a][0].x += v.a[b][2].x < this.a[a][0].x ? -2 : 2);
		var d = 0.1,
			c = 1.2 * c;
		for (b = 1; 4 > b; b++)
			Y(this.a[a][b], this.a[a][b + 3], 20 * c, d, d);
		for (b = 1; 5 > b; b++)
			Y(this.a[a][b], this.a[a][b + 2], 17 * c, d, d);
		Y(this.a[a][b + 0], this.a[a][1], 17 * c, d, d);
		Y(this.a[a][b + 1], this.a[a][2], 17 * c, d, d);
		for (b = 1; 6 > b; b++)
			Y(this.a[a][b], this.a[a][b + 1], 10 * c, d, d);
		Y(this.a[a][b], this.a[a][1], 10 * c, d, d);
		for (b = 1; 7 > b; b++)
			Y(this.a[a][0], this.a[a][b], 10 * c, 0.2, 0.2);
		this.p(a, 0);
		for (b = this.state[a] = 0; 7 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = this.count[a] = 0; 7 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 7 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		d = 0.5;
		c = 1.2 * c * (150 - this.count[a]) / 150;
		for (b = 1; 6 > b; b++)
			Y(this.a[a][b], this.a[a][b + 1], 10 * c, d, d);
		for (b = this.state[a] = 0; 7 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.wa;
hh.prototype.wa = function(a) {
	var b, c = new Qg, d = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.d[a] = 1;
	else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0, 0.99);
		for (b = 1; 5 > b; b++)
			W(this.a[a][b], this.c[a][b], 0, 0.9);
		Rg(c, 0, 0);
		b = v.m(this.a[a][0].x - 150, this.a[a][0].y - 50, this.a[a][0].x + 150, this.a[a][0].y + 50, 0);
		-1 != b && (c.q(v.a[b][2], this.a[a][0]),
		b = Xg(c),
		b -= B[this.id[a]][32] / 2 - 10,
		0 > b ? Tg(c, -0.01) : Tg(c, 0.01));
		0 > I.e[floor(K(this.a[a][0].y - 7, 0, 255) / 8)][floor(K(this.a[a][0].x, 0, 511) / 8)] && (c.y += 0.03);
		2 > A(100) && (c.x += N(-0.5, 0.5),
		c.y += N(-0.5, 0.5));
		this.a[a][0].add(c);
		c = 0.1;
		b = 6 * d;
		Y(this.a[a][0], this.a[a][1], 9 * d, 0, c);
		Y(this.a[a][1], this.a[a][2], 5 * d, 0, c);
		Y(this.a[a][2], this.a[a][3], 6 * d, 0, c);
		Y(this.a[a][2], this.a[a][4], 6 * d, 0, c);
		Y(this.a[a][3], this.a[a][4], 8 * d, c, c);
		this.p(a, 0);
		for (b = this.state[a] = 0; 5 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].set(this.a[a][1]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = this.count[a] = 0; 5 > b; b++)
				this.a[a][b].x += N(-2, 2),
				this.a[a][b].y -= N(2, 4);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 5 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		c = 0.5;
		b = 7 * d * (150 - this.count[a]) / 150;
		Y(this.a[a][2], this.a[a][3], b, c, c);
		Y(this.a[a][2], this.a[a][4], b, c, c);
		Y(this.a[a][3], this.a[a][4], b, c, c);
		for (b = this.state[a] = 0; 5 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.xa;
hh.prototype.xa = function(a) {
	var b, c = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.a[a][0].x += 0,
		this.a[a][0].y += 0,
		this.a[a][1].x += 0,
		this.a[a][1].y += 1,
		this.a[a][2].x += 0,
		this.a[a][2].y += 3,
		this.d[a]++;
	else if (1 == this.d[a]) {
		for (b = 0; 2 > b; b++)
			W(this.a[a][b], this.c[a][b], -0.04, 0.99);
		W(this.a[a][b], this.c[a][b], 1, 0.99);
		Y(this.a[a][0], this.a[a][1], 7 * c, 0.2, 0.2);
		Y(this.a[a][1], this.a[a][2], 5 * c, 0.2, 0);
		this.a[a][0].x = this.a[a][1].x = this.a[a][2].x;
		0 < this.l[a] ? this.l[a]-- : 0 < this.S[a] && (this.a[a][0].y += N(0, 1),
		this.p(a, 0));
		this.S[a] = 0;
		for (b = this.state[a] = 0; 3 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].x = this.a[a][0].x;
		this.a[a][this.n].y = 0.5 * (this.a[a][0].y + this.a[a][1].y);
		if (0 >= this.r[a]) {
			this.d[a]++;
			for (b = 0; 3 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 3 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		for (b = this.state[a] = 0; 3 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.eb;
hh.prototype.eb = function(a, b) {
	var c, d = new Qg, e = B[this.id[a]][ch];
	if (0 == this.d[a])
		50 > A(100) ? this.d[a] = 1 : this.d[a] = 2;
	else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0, 0.98);
		for (c = 1; 6 > c; c++)
			W(this.a[a][c], this.c[a][c], 0, 0.9);
		if (9 == b) {
			Rg(d, 0, 0);
			c = v.m(this.a[a][0].x - 150, this.a[a][0].y - 50, this.a[a][0].x + 150, this.a[a][0].y + 50, 0);
			-1 != c && (d.q(v.a[c][2], this.a[a][0]),
			c = Xg(d),
			c -= B[this.id[a]][32] / 2 - 10,
			0 > c ? (Tg(d, -0.05),
			384 < this.a[a][0].x && dh(d),
			128 > this.a[a][0].x && (dh(d),
			Tg(d, -1))) : Tg(d, 0.01));
			c = floor(K(this.a[a][0].x, 0, 511) / 8);
			var g = floor(K(this.a[a][0].y - 7, 0, 255) / 8);
			c = I.e[g][c];
			if (0 > c)
				d.y += 0.05;
			c = floor(K(this.a[a][0].x + d.x, 0, 511) / 8);
			g = floor(K(this.a[a][0].y + d.y, 0, 255) / 8);
			c = I.e[g][c];
			0 <= c && 8 >= c && dh(d)
		} else
			Rg(d, 0, 0),
			c = v.m(this.a[a][0].x - 500, this.a[a][0].y - 500, this.a[a][0].x + 500, this.a[a][0].y + 500, 0),
			-1 != c && (d.q(v.a[c][2], this.a[a][0]),
			c = Xg(d),
			c -= B[this.id[a]][32] / 2 - 10,
			0 > c ? (1 == this.d[a] ? Tg(d, -0.05) : Tg(d, 0.05),
			dh(d)) : Tg(d, 0.02)),
			c = floor(K(this.a[a][0].x + d.x, 0, 511) / 8),
			g = floor(K(this.a[a][0].y + d.y, 0, 255) / 8),
			c = I.e[g][c],
			0 <= c && 8 >= c && (dh(d),
			2 == this.d[a] && Tg(d, -1)),
			c = floor(K(this.a[a][0].x + d.x, 0, 511) / 8),
			g = floor(K(this.a[a][0].y + d.y, 0, 255) / 8),
			c = I.e[g][c],
			0 <= c && 8 >= c && (dh(d),
			2 == this.d[a] && Tg(d, -1));
		2 > A(100) && (d.x += N(-0.5, 0.5),
		d.y += N(-0.5, 0.5));
		this.a[a][0].add(d);
		for (c = 0; 6 > c; c++)
			Y(this.a[a][c], this.a[a][c + 1], 6 * e, 0, 0.5);
		0 == B[this.id[a]][Re] ? this.p(a, 0) : this.p(a, 50 > A(100) ? 0 : 1);
		for (c = this.state[a] = 0; 6 > c; c++)
			this.h(a, c, 0.5);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (c = this.count[a] = 0; 6 > c; c++)
				this.a[a][c].x += N(-2, 2),
				this.a[a][c].y -= N(2, 4);
			Jg(this, a, 0)
		}
	} else {
		for (c = 0; 6 > c; c++)
			W(this.a[a][c], this.c[a][c], 0.05, 0.99);
		d = 6 * (150 - this.count[a]) / 150;
		for (c = 1; 5 > c; c++)
			Y(this.a[a][c], this.a[a][c + 1], d * e, 0, 0.5);
		for (c = this.state[a] = 0; 6 > c; c++)
			this.h(a, c, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.mb;
hh.prototype.mb = function(a) {
	var b;
	b = B[this.id[a]][ch];
	if (0 == this.d[a]) {
		this.a[a][0].x += 4;
		this.a[a][0].y += 0;
		this.a[a][1].x += 0;
		this.a[a][1].y += 0;
		this.a[a][2].x += 0;
		this.a[a][2].y += 7.99;
		this.a[a][3].x += 7.99;
		this.a[a][3].y += 0;
		this.a[a][4].x += 7.99;
		this.a[a][4].y += 7.99;
		this.a[a][5].x += 0;
		this.a[a][5].y += 0;
		this.a[a][6].x += 0;
		this.a[a][6].y += 7.99;
		this.a[a][7].x += 7.99;
		this.a[a][7].y += 0;
		this.a[a][8].x += 7.99;
		this.a[a][8].y += 7.99;
		for (b = 0; 9 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a] = 1
	} else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], -0.05, 0.99);
		W(this.a[a][1], this.c[a][1], -0.1, 0.99);
		W(this.a[a][2], this.c[a][2], 0.8, 0.99);
		W(this.a[a][3], this.c[a][3], -0.1, 0.99);
		W(this.a[a][4], this.c[a][4], 0.8, 0.99);
		W(this.a[a][5], this.c[a][5], -0.1, 0.99);
		W(this.a[a][6], this.c[a][6], 0.8, 0.99);
		W(this.a[a][7], this.c[a][7], -0.1, 0.99);
		W(this.a[a][8], this.c[a][8], 0.8, 0.99);
		if (50 > A(100) && 0 < (this.state[a] & 3)) {
			var c = v.m(this.a[a][0].x - 500, this.a[a][0].y - 25, this.a[a][0].x + 500, this.a[a][0].y + 25, 0);
			-1 != c ? this.d[a] = v.a[c][2].x < this.a[a][0].x ? 1 : 2 : 10 > A(100) && (this.d[a] = Kf(1, 2));
			1 == this.d[a] ? (this.a[a][2].x < this.a[a][6].x ? (this.a[a][6].x += A(-1),
			this.a[a][6].y += N(-1, -1)) : (this.a[a][2].x += A(-1),
			this.a[a][2].y += N(-1, -1)),
			this.a[a][4].x < this.a[a][8].x ? (this.a[a][8].x += A(-1),
			this.a[a][8].y += N(-1, -1)) : (this.a[a][4].x += A(-1),
			this.a[a][4].y += N(-1, -1)),
			1 > A(100) && (this.a[a][0].x -= 1,
			this.a[a][0].y -= 3)) : (this.a[a][2].x < this.a[a][6].x ? (this.a[a][2].x += A(1),
			this.a[a][2].y += N(-1, -1)) : (this.a[a][6].x += A(1),
			this.a[a][6].y += N(-1, -1)),
			this.a[a][4].x < this.a[a][8].x ? (this.a[a][4].x += A(1),
			this.a[a][4].y += N(-1, -1)) : (this.a[a][8].x += A(1),
			this.a[a][8].y += N(-1, -1)),
			1 > A(100) && (this.a[a][0].x += 1,
			this.a[a][0].y -= 3))
		}
		c = 0.3;
		b *= 2.2;
		Y(this.a[a][0], this.a[a][5], 3 * b, 0.1 * c, c);
		Y(this.a[a][0], this.a[a][7], 3 * b, 0.1 * c, c);
		Y(this.a[a][0], this.a[a][6], 3 * b, 0.1 * c, c);
		Y(this.a[a][5], this.a[a][6], 2 * b, 0.2 * c, 0.2 * c);
		Y(this.a[a][0], this.a[a][8], 3 * b, 0.1 * c, c);
		Y(this.a[a][7], this.a[a][8], 2 * b, 0.2 * c, 0.2 * c);
		Y(this.a[a][0], this.a[a][1], 4 * b, 0.1 * c, c);
		Y(this.a[a][0], this.a[a][3], 4 * b, 0.1 * c, c);
		Y(this.a[a][0], this.a[a][2], 4 * b, 0.1 * c, c);
		Y(this.a[a][1], this.a[a][2], 3 * b, 0.2 * c, 0.2 * c);
		Y(this.a[a][0], this.a[a][4], 4 * b, 0.1 * c, c);
		Y(this.a[a][3], this.a[a][4], 3 * b, 0.2 * c, 0.2 * c);
		Y(this.a[a][2], this.a[a][4], 8 * b, 0.1 * c, 0.1 * c);
		Y(this.a[a][5], this.a[a][7], 7 * b, 0.1 * c, 0.1 * c);
		this.p(a, 0);
		0 != B[this.id[a]][Re] && this.p(a, 1);
		for (b = this.state[a] = 0; 9 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			this.count[a] = 0;
			for (b = 1; 9 > b; b++)
				this.a[a][b].x += N(-1, 1),
				this.a[a][b].y -= N(1, 2);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 9 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		c = 0.5;
		b = 1.2 * (150 - this.count[a]) / 150;
		Y(this.a[a][1], this.a[a][2], 4 * b, c, c);
		Y(this.a[a][3], this.a[a][4], 4 * b, c, c);
		Y(this.a[a][5], this.a[a][6], 3 * b, c, c);
		Y(this.a[a][7], this.a[a][8], 3 * b, c, c);
		for (b = this.state[a] = 0; 9 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.nb;
hh.prototype.nb = function(a) {
	var b, c = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.a[a][0].x += 1,
		this.a[a][0].y += 0,
		this.a[a][1].x += 0,
		this.a[a][1].y += 1,
		this.a[a][2].x += 2,
		this.a[a][2].y += 1,
		this.a[a][3].x += 1,
		this.a[a][3].y += 2,
		this.d[a]++;
	else if (1 == this.d[a]) {
		for (b = 0; 3 > b; b++)
			W(this.a[a][b], this.c[a][b], -0.04, 0.99);
		W(this.a[a][b], this.c[a][b], 1, 0.99);
		Y(this.a[a][0], this.a[a][3], 20 * c, 0.2, 0);
		Y(this.a[a][1], this.a[a][3], 15 * c, 0.2, 0);
		Y(this.a[a][2], this.a[a][3], 20 * c, 0.2, 0);
		this.a[a][0].x = this.a[a][3].x;
		this.a[a][1].x = this.a[a][3].x - 8 * c;
		this.a[a][2].x = this.a[a][3].x + 8 * c;
		0 < this.l[a] ? this.l[a]-- : 0 < this.S[a] && (this.a[a][0].y += N(0, 1),
		this.a[a][1].y += N(0, 1),
		this.a[a][2].y += N(0, 1),
		this.p(a, 0));
		this.S[a] = 0;
		for (b = this.state[a] = 0; 4 > b; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].x = this.a[a][0].x;
		this.a[a][this.n].y = 0.5 * (this.a[a][0].y + this.a[a][1].y);
		if (0 >= this.r[a]) {
			this.d[a]++;
			for (b = 0; 4 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 4 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		for (b = this.state[a] = 0; 4 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.ob;
hh.prototype.ob = function(a) {
	var b, c = new Qg;
	b = B[this.id[a]][ch];
	if (0 == this.d[a]) {
		this.a[a][0].x += 2;
		this.a[a][0].y += 4;
		this.a[a][1].x += 2;
		this.a[a][1].y += 2;
		this.a[a][2].x += 0;
		this.a[a][2].y += 0;
		this.a[a][3].x += 4;
		this.a[a][3].y += 0;
		for (b = 0; 4 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a] = 1
	} else if (1 == this.d[a] || 2 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], 0.1, 0.99);
		W(this.a[a][1], this.c[a][1], 0.1, 0.99);
		W(this.a[a][2], this.c[a][2], -0.1, 0.99);
		W(this.a[a][3], this.c[a][3], -0.1, 0.99);
		Rg(c, 0, 0);
		var d = v.m(this.a[a][0].x - 150, this.a[a][0].y - 250, this.a[a][0].x + 150, this.a[a][0].y + 250, 0);
		-1 != d && (c.x = v.a[d][2].x - this.a[a][0].x,
		c.y = v.a[d][2].y - 10 - this.a[a][0].y,
		c.x = -10 > c.x ? -0.02 : 10 < c.x ? 0.02 : N(-0.02, 0.02),
		d = B[this.id[a]][32] / 2,
		c.y = c.y < -d ? -0.02 : c.y > d ? 0.02 : N(-0.1, 0.1));
		this.a[a][0].add(c);
		this.a[a][2].x -= A(0.8);
		this.a[a][3].x += A(0.8);
		c = 0.3;
		Y(this.a[a][1], this.a[a][2], 8 * b, c, c);
		Y(this.a[a][1], this.a[a][3], 8 * b, c, c);
		Y(this.a[a][2], this.a[a][3], 16 * b, c, c);
		Y(this.a[a][0], this.a[a][2], 12 * b, c, c);
		Y(this.a[a][0], this.a[a][3], 12 * b, c, c);
		this.p(a, 0);
		for (b = this.state[a] = 0; 4 > b; b++)
			this.h(a, b, 1);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a] = 3;
			for (b = 0; 4 > b; b++)
				this.a[a][b].x += N(-1, 1),
				this.a[a][b].y -= N(1, 2);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 4 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		c = 0.3;
		b = (150 - this.count[a]) / 150;
		Y(this.a[a][1], this.a[a][2], 8 * b, c, c);
		Y(this.a[a][1], this.a[a][3], 8 * b, c, c);
		Y(this.a[a][2], this.a[a][3], 16 * b, c, c);
		for (b = this.state[a] = 0; 4 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.pb;
hh.prototype.pb = function(a) {
	var b;
	b = B[this.id[a]][ch];
	if (0 == this.d[a]) {
		this.a[a][0].x += 1;
		this.a[a][0].y += 0;
		this.a[a][1].x += 0;
		this.a[a][1].y += 1;
		this.a[a][2].x += 2;
		this.a[a][2].y += 1;
		for (b = 0; 3 > b; b++)
			this.c[a][b].set(this.a[a][b]);
		this.d[a]++
	} else if (1 == this.d[a]) {
		W(this.a[a][0], this.c[a][0], -0.15, 0.99);
		W(this.a[a][1], this.c[a][1], 0.1, 0.99);
		W(this.a[a][2], this.c[a][2], 0.1, 0.99);
		var c = v.m(this.a[a][0].x - 200, this.a[a][0].y - 50, this.a[a][0].x + 200, this.a[a][0].y + 50, 0);
		if (0 < (this.state[a] & 2) && 5 > A(100)) {
			var d = 0,
				d = -1 != c ? v.a[c][2].x < this.a[a][0].x ? -1 : 1 : Kf(-1, 1);
			this.a[a][0].x += N(0.4, 0.6) * d;
			this.a[a][0].y += N(-1.5, -2)
		}
		c = 0.01;
		Y(this.a[a][0], this.a[a][1], 5 * b, c, c);
		Y(this.a[a][0], this.a[a][2], 5 * b, c, c);
		Y(this.a[a][1], this.a[a][2], 6 * b, c, c);
		1 < b && 0 < this.S[a] && 10 > A(100) && this.add(floor(this.a[a][0].x / 8), floor(this.a[a][0].y / 8), this.id[a] - 1);
		this.S[a] = 0;
		this.p(a, 0);
		for (b = this.state[a] = 0; 3 > b; b++)
			this.h(a, b, 0.9);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a]++;
			this.a[a][3].set(this.a[a][0]);
			this.c[a][3].set(this.a[a][0]);
			for (b = 0; 4 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 4 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		c = 0.01;
		b = (150 - this.count[a]) / 150;
		Y(this.a[a][0], this.a[a][1], 5 * b, c, c);
		Y(this.a[a][0], this.a[a][2], 5 * b, c, c);
		Y(this.a[a][1], this.a[a][2], 6 * b, c, c);
		for (b = this.state[a] = 0; 4 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.qb;
hh.prototype.qb = function(a) {
	var b, c = new Qg, d = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.d[a]++;
	else if (1 == this.d[a]) {
		for (b = 0; 10 > b; b++)
			W(this.a[a][b], this.c[a][b], 0, 0.98);
		0 >= this.count[a] && 5 > A(100) && (b = floor(A(3)),
		0 == b ? (c.x = (this.a[a][8].x + this.a[a][9].x) / 2 - this.a[a][7].x,
		c.y = (this.a[a][8].y + this.a[a][9].y) / 2 - this.a[a][7].y,
		Xg(c),
		Tg(c, d),
		this.a[a][7].add(c)) : 1 == b ? (c.x = (this.a[a][9].x + this.a[a][7].x) / 2 - this.a[a][8].x,
		c.y = (this.a[a][9].y + this.a[a][7].y) / 2 - this.a[a][8].y,
		Xg(c),
		Tg(c, d),
		this.a[a][8].add(c)) : 2 == b && (c.x = (this.a[a][7].x + this.a[a][8].x) / 2 - this.a[a][9].x,
		c.y = (this.a[a][7].y + this.a[a][8].y) / 2 - this.a[a][9].y,
		Xg(c),
		Tg(c, d),
		this.a[a][9].add(c)),
		this.count[a] = 25 * d);
		Rg(c, 0, 0);
		b = v.m(this.a[a][0].x - 200, this.a[a][0].y - 200, this.a[a][0].x + 200, this.a[a][0].y + 200, 0);
		if (-1 != b)
			for (c.q(v.a[b][2], this.a[a][0]),
			Xg(c),
			b = 4; 7 > b; b++)
				this.a[a][b].x += 0.02 * c.x,
				this.a[a][b].y += 0.02 * c.y;
		c = 0.05;
		for (b = 1; 4 > b; b++)
			Y(this.a[a][0], this.a[a][b], 3 * d, c, c);
		for (b = 1; 4 > b; b++)
			Y(this.a[a][b], this.a[a][b + 3], 3 * d, c, c);
		for (b = 4; 7 > b; b++)
			Y(this.a[a][b], this.a[a][b + 3], 3 * d, c, 0.01);
		5 > this.count[a]-- && (c = 0.01 / d,
		Y(this.a[a][7], this.a[a][8], 20 * d, c, c),
		Y(this.a[a][8], this.a[a][9], 20 * d, c, c),
		Y(this.a[a][9], this.a[a][7], 20 * d, c, c));
		this.p(a, 0);
		for (b = this.state[a] = 0; 10 > b; b++)
			this.h(a, b, 0.9);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			this.d[a]++;
			for (b = this.count[a] = 0; 4 > b; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			Jg(this, a, 0)
		}
	} else {
		for (b = 0; 10 > b; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.98);
		var c = 0.05,
			e = (150 - this.count[a]) / 150;
		for (b = 1; 4 > b; b++)
			Y(this.a[a][b], this.a[a][b + 3], 3 * d * e, c, c);
		for (b = 4; 7 > b; b++)
			Y(this.a[a][b], this.a[a][b + 3], 3 * d * e, c, c);
		for (b = this.state[a] = 0; 10 > b; b++)
			this.h(a, b, 0.5);
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.rb;
hh.prototype.rb = function(a) {
	var b, c = B[this.id[a]][ch];
	if (0 == this.d[a])
		this.d[a] = floor(N(4, 7)),
		this.count[a] = floor(A(400));
	else if (10 > this.d[a]) {
		500 > this.count[a] ? W(this.a[a][0], this.c[a][0], 0.1, 0.99) : W(this.a[a][0], this.c[a][0], -0.1, 0.99);
		for (b = 1; b < this.d[a] - 1; b++)
			W(this.a[a][b], this.c[a][b], 0, 0.99);
		W(this.a[a][b], this.c[a][b], 1, 0.99);
		10 > A(100) && (b = floor(A(4)),
		this.a[a][b].x += N(-0.5, 0.5));
		this.count[a]++;
		600 < this.count[a] && (this.count[a] = floor(A(400)));
		Y(this.a[a][0], this.a[a][1], 8 * c, 0.2, 0.2);
		for (b = 1; b < this.d[a] - 2; b++)
			Y(this.a[a][b], this.a[a][b + 1], 6 * c, 0.2, 0.2);
		Y(this.a[a][b], this.a[a][b + 1], 6 * c, 0.2, 0);
		this.p(a, 0);
		this.state[a] = 0;
		for (b = this.d[a] - 1; b < this.d[a]; b++)
			this.h(a, b, 0.5);
		this.a[a][this.n].set(this.a[a][0]);
		if (0 >= this.r[a]) {
			for (b = 0; b < this.d[a]; b++)
				this.a[a][b].x += N(-0.5, 0.5),
				this.a[a][b].y -= N(2, 3);
			this.count[a] = 0;
			Jg(this, a, 0);
			this.d[a] += 10
		}
	} else {
		for (b = 0; b < this.d[a] - 10; b++)
			W(this.a[a][b], this.c[a][b], 0.05, 0.99);
		this.state[a] = 0;
		150 < this.count[a]++ && this.sub(a--)
	}
	return a
}
;
da.fff = hh.prototype.b;
hh.prototype.b = function() {
	var a, b;
	for (a = 0; a < this.index; a++) {
		var c = B[this.id[a]][2],
			d = B[this.id[a]][4],
			e = B[this.id[a]][5],
			g = B[this.id[a]][ch];
		0 < this.B[a] ? (d = 5934817,
		e = 1989840) : 0 < this.C[a] ? (d = 1989840,
		e = 9840) : 0 < this.D[a] && (d = 3407616,
		e = 3381504);
		var k = (150 - this.count[a]) / 150 * g;
		switch (this.step[a]) {
		case 0:
			If(floor(this.a[a][1].x - 0.5), floor(this.a[a][1].y) - 2 * g, floor(4 * k) + 1, floor(4 * k) + 1, e);
			If(floor(this.a[a][2].x - 0.5), floor(this.a[a][2].y) - 2 * g, floor(4 * k) + 1, floor(4 * k) + 1, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 1:
			J(Va, floor(this.a[a][2].x), floor(this.a[a][2].y - 2 * k), floor(8 * k), floor(8 * k), 16 * c, 0, 16, 16, e);
			J(Va, floor(this.a[a][1].x), floor(this.a[a][1].y - 3 * k), floor(12 * k), floor(12 * k), 16 * c, 0, 16, 16, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y - 4 * k), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 2:
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			L(this.a[a][2].x, this.a[a][2].y, this.a[a][3].x, this.a[a][3].y, e);
			L(this.a[a][3].x, this.a[a][3].y, this.a[a][1].x, this.a[a][1].y, e);
			L(this.a[a][4].x, this.a[a][4].y, this.a[a][5].x, this.a[a][5].y, e);
			L(this.a[a][5].x, this.a[a][5].y, this.a[a][6].x, this.a[a][6].y, e);
			L(this.a[a][6].x, this.a[a][6].y, this.a[a][4].x, this.a[a][4].y, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 3:
			3 > this.d[a] && (L(this.a[a][0].x, this.a[a][0].y, this.a[a][1].x, this.a[a][1].y, e),
			L(this.a[a][4].x, this.a[a][4].y, this.a[a][5].x, this.a[a][5].y, e));
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			L(this.a[a][2].x, this.a[a][2].y, this.a[a][3].x, this.a[a][3].y, e);
			L(this.a[a][3].x, this.a[a][3].y, this.a[a][4].x, this.a[a][4].y, e);
			Hf(floor(this.a[a][5].x), floor(this.a[a][5].y), floor(2 * k), floor(2 * k), d);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 4:
		case 12:
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			3 > this.d[a] && (L(this.a[a][1].x, this.a[a][1].y, this.a[a][3].x, this.a[a][3].y, e),
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][4].x, this.a[a][4].y, e));
			L(this.a[a][3].x, this.a[a][3].y, this.a[a][5].x, this.a[a][5].y, e);
			L(this.a[a][4].x, this.a[a][4].y, this.a[a][6].x, this.a[a][6].y, e);
			3 > this.d[a] && (L(this.a[a][2].x, this.a[a][2].y, this.a[a][7].x, this.a[a][7].y, e),
			L(this.a[a][2].x, this.a[a][2].y, this.a[a][8].x, this.a[a][8].y, e));
			L(this.a[a][7].x, this.a[a][7].y, this.a[a][9].x, this.a[a][9].y, e);
			L(this.a[a][8].x, this.a[a][8].y, this.a[a][10].x, this.a[a][10].y, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			332 == this.id[a] && J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y - 3 * k), floor(16 * k), floor(16 * k), 352, 0, 16, 16, 16777215);
			break;
		case 5:
		case 18:
			var r = 5 == this.step[a] ? -2 : 2;
			for (b = 10 > this.d[a] ? this.d[a] - 1 : this.d[a] - 11; 0 < b; b--)
				If(floor(this.a[a][b].x), floor(this.a[a][b].y + r * k), floor(4 * k) + 1, floor(4 * k) + 1, e);
			5 == this.step[a] ? J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d) : J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 15, 16, -16, d);
			break;
		case 6:
			for (b = 1; 6 > b; b++)
				L(this.a[a][b].x, this.a[a][b].y, this.a[a][b + 1].x, this.a[a][b + 1].y, e);
			3 > this.d[a] && L(this.a[a][b].x, this.a[a][b].y, this.a[a][1].x, this.a[a][1].y, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 7:
			L(this.a[a][2].x, this.a[a][2].y, this.a[a][3].x, this.a[a][3].y, e);
			L(this.a[a][2].x, this.a[a][2].y, this.a[a][4].x, this.a[a][4].y, e);
			L(this.a[a][3].x, this.a[a][3].y, this.a[a][4].x, this.a[a][4].y, e);
			If(floor(this.a[a][1].x), floor(this.a[a][1].y), floor(6 * k) + 1, floor(6 * k) + 1, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 8:
			If(floor(this.a[a][2].x) + floor(1 * k), floor(this.a[a][2].y - 2 * k), floor(8 * k) + 1, floor(4 * k) + 1, e);
			If(floor(this.a[a][1].x), floor(this.a[a][1].y - 2 * k), floor(4 * k) + 1, floor(4 * k) + 1, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 9:
		case 13:
			Hf(floor(this.a[a][5].x), floor(this.a[a][5].y), floor(2 * k), floor(2 * k), d);
			J(Va, floor(this.a[a][4].x), floor(this.a[a][4].y), floor(8 * k), floor(8 * k), 16 * c, 0, 16, 16, e);
			J(Va, floor(this.a[a][3].x), floor(this.a[a][3].y), floor(10 * k), floor(10 * k), 16 * c, 0, 16, 16, e);
			J(Va, floor(this.a[a][2].x), floor(this.a[a][2].y), floor(12 * k), floor(12 * k), 16 * c, 0, 16, 16, e);
			J(Va, floor(this.a[a][1].x), floor(this.a[a][1].y), floor(14 * k), floor(14 * k), 16 * c, 0, 16, 16, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 10:
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			3 > this.d[a] && (L(this.a[a][0].x, this.a[a][0].y, this.a[a][1].x, this.a[a][1].y, e),
			L(this.a[a][0].x, this.a[a][0].y, this.a[a][3].x, this.a[a][3].y, e));
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			L(this.a[a][3].x, this.a[a][3].y, this.a[a][4].x, this.a[a][4].y, e);
			3 > this.d[a] && (L(this.a[a][0].x, this.a[a][0].y, this.a[a][5].x, this.a[a][5].y, e),
			L(this.a[a][0].x, this.a[a][0].y, this.a[a][7].x, this.a[a][7].y, e));
			L(this.a[a][5].x, this.a[a][5].y, this.a[a][6].x, this.a[a][6].y, e);
			L(this.a[a][7].x, this.a[a][7].y, this.a[a][8].x, this.a[a][8].y, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 11:
			If(floor(this.a[a][3].x), floor(this.a[a][3].y - 7 * k), floor(4 * k) + 1, floor(14 * k) + 1, e);
			If(floor(this.a[a][2].x) + 0, floor(this.a[a][2].y), floor(4 * k) + 1, floor(9 * k) + 1, e);
			If(floor(this.a[a][1].x) + 1, floor(this.a[a][1].y), floor(4 * k) + 1, floor(8 * k) + 1, e);
			J(Va, floor(this.a[a][0].x) + 1, floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 14:
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			L(this.a[a][2].x, this.a[a][2].y, this.a[a][3].x, this.a[a][3].y, e);
			L(this.a[a][3].x, this.a[a][3].y, this.a[a][1].x, this.a[a][1].y, e);
			J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 15:
			L(this.a[a][0].x, this.a[a][0].y, this.a[a][1].x, this.a[a][1].y, e);
			L(this.a[a][0].x, this.a[a][0].y, this.a[a][2].x, this.a[a][2].y, e);
			L(this.a[a][1].x, this.a[a][1].y, this.a[a][2].x, this.a[a][2].y, e);
			2 > this.d[a] ? J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d) : J(Va, floor(this.a[a][3].x), floor(this.a[a][3].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 16:
			if (2 > this.d[a])
				for (b = 1; 4 > b; b++)
					L(this.a[a][0].x, this.a[a][0].y, this.a[a][b].x, this.a[a][b].y, e);
			for (b = 4; 10 > b; b++)
				L(this.a[a][b - 3].x, this.a[a][b - 3].y, this.a[a][b].x, this.a[a][b].y, e);
			if (2 > this.d[a])
				for (b = 7; 10 > b; b++)
					Hf(floor(this.a[a][b].x), floor(this.a[a][b].y), floor(2 * g), floor(2 * g), d);
			else
				for (b = 7; 10 > b; b++)
					Hf(floor(this.a[a][b].x) + 1, floor(this.a[a][b].y) + 1, floor(2 * k), floor(2 * k), d);
			2 > this.d[a] ? J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * g), floor(16 * g), 16 * c, 0, 16, 16, d) : J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d);
			break;
		case 17:
			if (10 > this.d[a]) {
				for (b = this.d[a] - 1; 0 < b; b--)
					Hf(floor(this.a[a][b].x), floor(this.a[a][b].y - 2 * g), floor(4 * g), floor(4 * g), e);
				J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * g), floor(16 * g), 16 * c, 0, 16, 16, d)
			} else {
				for (b = this.d[a] - 11; 0 < b; b--)
					If(floor(this.a[a][b].x), floor(this.a[a][b].y - 2 * k), floor(4 * k) + 1, floor(4 * k) + 1, e);
				J(Va, floor(this.a[a][0].x), floor(this.a[a][0].y), floor(16 * k), floor(16 * k), 16 * c, 0, 16, 16, d)
			}
		}
		0 < (xc & 2) && 0 < this.r[a] && (V(floor(this.a[a][0].x) - 6 * g, floor(this.a[a][0].y) - 10 * g, 12 * g, 1, 10027008),
		V(floor(this.a[a][0].x) - 6 * g, floor(this.a[a][0].y) - 10 * g, floor(12 * g * this.r[a] / B[this.id[a]][lg]), 1, 52224))
	}
}
;
hh.prototype.M = function(a, b, c, d) {
	var e = B[a][2],
		g = B[a][4],
		k = B[a][5],
		r = K(B[a][ch], 1, 4);
	if (1 == d)
		r = 1;
	d = r;
	var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	switch (B[a][bh]) {
	case 0:
		m[0] = b + 0 * d;
		n[0] = c - 7 * d;
		m[1] = b - 5.5 * d;
		n[1] = c - 0 * d;
		m[2] = b + 6 * d;
		n[2] = c - 0 * d;
		break;
	case 1:
		m[0] = b - 3 * d;
		n[0] = c - 8 * d;
		m[1] = b + 1 * d;
		n[1] = c - 7 * d;
		m[2] = b + 4 * d;
		n[2] = c - 1 * d;
		break;
	case 2:
		m[0] = b + 0 * d;
		n[0] = c - 8 * d;
		m[1] = b - 4 * d;
		n[1] = c - 8 * d;
		m[2] = b - 9 * d;
		n[2] = c - 9 * d;
		m[3] = b - 7 * d;
		n[3] = c - 4 * d;
		m[4] = b + 3 * d;
		n[4] = c - 8 * d;
		m[5] = b + 9 * d;
		n[5] = c - 10 * d;
		m[6] = b + 7 * d;
		n[6] = c - 4 * d;
		break;
	case 3:
		m[0] = b - 3 * d;
		n[0] = c - 10 * d;
		m[1] = b + 1 * d;
		n[1] = c - 10 * d;
		m[2] = b + 4 * d;
		n[2] = c - 8 * d;
		m[3] = b + 5 * d;
		n[3] = c - 6 * d;
		m[4] = b + 5 * d;
		n[4] = c - 4 * d;
		m[5] = b + 3 * d;
		n[5] = c - 1 * d;
		break;
	case 4:
		m[0] = b + 0 * d;
		n[0] = c - 15 * d;
		m[1] = b + 0 * d;
		n[1] = c - 10 * d;
		m[2] = b + 0 * d;
		n[2] = c - 7 * d;
		m[3] = b - 2 * d;
		n[3] = c - 8 * d;
		m[4] = b + 3 * d;
		n[4] = c - 11 * d;
		m[5] = b - 5 * d;
		n[5] = c - 7 * d;
		m[6] = b + 5 * d;
		n[6] = c - 8 * d;
		m[7] = b - 3 * d;
		n[7] = c - 3 * d;
		m[8] = b + 3 * d;
		n[8] = c - 5 * d;
		m[9] = b - 1 * d;
		n[9] = c - 1 * d;
		m[10] = b + 2 * d;
		n[10] = c - 0 * d;
		break;
	case 5:
		m[0] = b + 0 * d;
		n[0] = c - 20 * d;
		m[1] = b + 0 * d;
		n[1] = c - 12 * d;
		m[2] = b - 1 * d;
		n[2] = c - 6 * d;
		m[3] = b + 0 * d;
		n[3] = c - 0 * d;
		break;
	case 18:
		d = K(d, 1, 2);
		m[0] = b + 0 * d;
		n[0] = c + 20 * d - 40;
		m[1] = b + 0 * d;
		n[1] = c + 12 * d - 40;
		m[2] = b - 1 * d;
		n[2] = c + 6 * d - 40;
		m[3] = b + 0 * d;
		n[3] = c + 0 * d - 40;
		break;
	case 6:
		m[0] = b + 0 * d;
		n[0] = c - 10 * d;
		m[1] = b - 7 * d;
		n[1] = c - 19 * d;
		m[2] = b + 5 * d;
		n[2] = c - 21 * d;
		m[3] = b + 12 * d;
		n[3] = c - 12 * d;
		m[4] = b + 7 * d;
		n[4] = c - 2 * d;
		m[5] = b - 5 * d;
		n[5] = c - 0 * d;
		m[6] = b - 12 * d;
		n[6] = c - 10 * d;
		break;
	case 7:
		m[0] = b - 5 * d;
		n[0] = c - 13 * d;
		m[1] = b + 0 * d;
		n[1] = c - 9 * d;
		m[2] = b + 5 * d;
		n[2] = c - 6 * d;
		m[3] = b + 8 * d;
		n[3] = c - 11 * d;
		m[4] = b + 10 * d;
		n[4] = c - 3 * d;
		break;
	case 8:
		m[0] = b + 0 * d;
		n[0] = c - 12 * d;
		m[1] = b + 0 * d;
		n[1] = c - 5 * d;
		m[2] = b + 0 * d;
		n[2] = c - 0 * d;
		break;
	case 9:
	case 13:
		m[0] = b - 4 * d;
		n[0] = c - 20 * d;
		m[1] = b + 2 * d;
		n[1] = c - 16 * d;
		m[2] = b + 4 * d;
		n[2] = c - 11 * d;
		m[3] = b + 2 * d;
		n[3] = c - 6 * d;
		m[4] = b - 1 * d;
		n[4] = c - 3 * d;
		m[5] = b - 5 * d;
		n[5] = c - 2 * d;
		break;
	case 10:
		m[0] = b + 0 * d;
		n[0] = c - 6 * d;
		m[1] = b - 9 * d;
		n[1] = c - 9 * d;
		m[2] = b - 7 * d;
		n[2] = c - 0 * d;
		m[3] = b + 9 * d;
		n[3] = c - 9 * d;
		m[4] = b + 7 * d;
		n[4] = c - 0 * d;
		m[5] = b - 7 * d;
		n[5] = c - 5 * d;
		m[6] = b - 5 * d;
		n[6] = c - 0 * d;
		m[7] = b + 7 * d;
		n[7] = c - 5 * d;
		m[8] = b + 5 * d;
		n[8] = c - 0 * d;
		break;
	case 11:
		m[0] = b + 0 * d;
		n[0] = c - 19 * d;
		m[1] = b - 8 * d;
		n[1] = c - 13 * d;
		m[2] = b + 8 * d;
		n[2] = c - 18 * d;
		m[3] = b + 0 * d;
		n[3] = c - 0 * d;
		break;
	case 12:
		m[0] = b + 0 * d;
		n[0] = c - 16 * d;
		m[1] = b + 0 * d;
		n[1] = c - 10 * d;
		m[2] = b + 2 * d;
		n[2] = c - 7 * d;
		m[3] = b - 2 * d;
		n[3] = c - 8 * d;
		m[4] = b - 3 * d;
		n[4] = c - 11 * d;
		m[5] = b - 5 * d;
		n[5] = c - 7 * d;
		m[6] = b - 8 * d;
		n[6] = c - 10 * d;
		m[7] = b - 1 * d;
		n[7] = c - 4 * d;
		m[8] = b + 2 * d;
		n[8] = c - 5 * d;
		m[9] = b - 0 * d;
		n[9] = c - 1 * d;
		m[10] = b + 4 * d;
		n[10] = c - 0 * d;
		break;
	case 14:
		m[0] = b + 0 * d;
		n[0] = c - 8 * d;
		m[1] = b - 0 * d;
		n[1] = c - 14 * d;
		m[2] = b - 8 * d;
		n[2] = c - 16 * d;
		m[3] = b + 8 * d;
		n[3] = c - 16 * d;
		break;
	case 15:
		m[0] = b - 1 * d;
		n[0] = c - 12 * d;
		m[1] = b - 3 * d;
		n[1] = c - 0 * d;
		m[2] = b + 3 * d;
		n[2] = c - 0 * d;
		break;
	case 16:
		m[0] = b - 0 * d;
		n[0] = c - 10 * d;
		m[1] = b - 3 * d;
		n[1] = c - 11 * d;
		m[4] = b - 6 * d;
		n[4] = c - 12 * d;
		m[7] = b - 9 * d;
		n[7] = c - 13 * d;
		m[2] = b + 3 * d;
		n[2] = c - 11 * d;
		m[5] = b + 6 * d;
		n[5] = c - 12 * d;
		m[8] = b + 8 * d;
		n[8] = c - 14 * d;
		m[3] = b + 1 * d;
		n[3] = c - 7 * d;
		m[6] = b + 2 * d;
		n[6] = c - 4 * d;
		m[9] = b + 1 * d;
		n[9] = c - 1 * d;
		break;
	case 17:
		m[0] = b + 2 * d,
		n[0] = c - 16 * d,
		m[1] = b + 2 * d,
		n[1] = c - 6 * d,
		m[2] = b - 3 * d,
		n[2] = c - 5 * d,
		m[3] = b - 2 * d,
		n[3] = c - 0 * d
	}
	switch (B[a][bh]) {
	case 0:
		If(floor(m[1] - 0.5), floor(n[1]) - 2 * r, floor(4 * d) + 1, floor(4 * d) + 1, k);
		If(floor(m[2] - 0.5), floor(n[2]) - 2 * r, floor(4 * d) + 1, floor(4 * d) + 1, k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 1:
		J(Va, floor(m[2]), floor(n[2] - 2 * d), floor(8 * d), floor(8 * d), 16 * e, 0, 16, 16, k);
		J(Va, floor(m[1]), floor(n[1] - 3 * d), floor(12 * d), floor(12 * d), 16 * e, 0, 16, 16, k);
		J(Va, floor(m[0]), floor(n[0] - 4 * d), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 2:
		L(m[1], n[1], m[2], n[2], k);
		L(m[2], n[2], m[3], n[3], k);
		L(m[3], n[3], m[1], n[1], k);
		L(m[4], n[4], m[5], n[5], k);
		L(m[5], n[5], m[6], n[6], k);
		L(m[6], n[6], m[4], n[4], k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 3:
		L(m[0], n[0], m[1], n[1], k);
		L(m[4], n[4], m[5], n[5], k);
		L(m[1], n[1], m[2], n[2], k);
		L(m[2], n[2], m[3], n[3], k);
		L(m[3], n[3], m[4], n[4], k);
		Hf(floor(m[5]), floor(n[5]), floor(2 * d), floor(2 * d), g);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 4:
	case 12:
		L(m[1], n[1], m[2], n[2], k);
		L(m[1], n[1], m[3], n[3], k);
		L(m[1], n[1], m[4], n[4], k);
		L(m[3], n[3], m[5], n[5], k);
		L(m[4], n[4], m[6], n[6], k);
		L(m[2], n[2], m[7], n[7], k);
		L(m[2], n[2], m[8], n[8], k);
		L(m[7], n[7], m[9], n[9], k);
		L(m[8], n[8], m[10], n[10], k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		332 == a && J(Va, floor(m[0]), floor(n[0] - 3 * d), floor(16 * d), floor(16 * d), 352, 0, 16, 16, 16766720);
		break;
	case 5:
		for (a = 3; 0 < a; a--)
			If(floor(m[a]), floor(n[a] - 2 * d), floor(4 * d) + 1, floor(4 * d) + 1, k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 18:
		d = K(d, 1, 2);
		for (a = 3; 0 < a; a--)
			If(floor(m[a]), floor(n[a] + 2 * d), floor(4 * d) + 1, floor(4 * d) + 1, k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 15, 16, -16, g);
		break;
	case 6:
		for (a = 1; 6 > a; a++)
			L(m[a], n[a], m[a + 1], n[a + 1], k);
		L(m[a], n[a], m[1], n[1], k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 7:
		L(m[2], n[2], m[3], n[3], k);
		L(m[2], n[2], m[4], n[4], k);
		L(m[3], n[3], m[4], n[4], k);
		If(floor(m[1]), floor(n[1]), floor(6 * d) + 1, floor(6 * d) + 1, k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 8:
		If(floor(m[2]) + floor(1 * d), floor(n[2] - 2 * d), floor(8 * d) + 1, floor(4 * d) + 1, k);
		If(floor(m[1]), floor(n[1] - 2 * d), floor(4 * d) + 1, floor(4 * d) + 1, k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 9:
	case 13:
		Hf(floor(m[5]), floor(n[5]), floor(2 * d), floor(2 * d), g);
		J(Va, floor(m[4]), floor(n[4]), floor(8 * d), floor(8 * d), 16 * e, 0, 16, 16, k);
		J(Va, floor(m[3]), floor(n[3]), floor(10 * d), floor(10 * d), 16 * e, 0, 16, 16, k);
		J(Va, floor(m[2]), floor(n[2]), floor(12 * d), floor(12 * d), 16 * e, 0, 16, 16, k);
		J(Va, floor(m[1]), floor(n[1]), floor(14 * d), floor(14 * d), 16 * e, 0, 16, 16, k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 10:
		L(floor(m[0]), floor(n[0]), floor(m[1]), floor(n[1]), k);
		L(floor(m[0]), floor(n[0]), floor(m[3]), floor(n[3]), k);
		L(floor(m[1]), floor(n[1]), floor(m[2]), floor(n[2]), k);
		L(floor(m[3]), floor(n[3]), floor(m[4]), floor(n[4]), k);
		L(floor(m[0]), floor(n[0]), floor(m[5]), floor(n[5]), k);
		L(floor(m[0]), floor(n[0]), floor(m[7]), floor(n[7]), k);
		L(floor(m[5]), floor(n[5]), floor(m[6]), floor(n[6]), k);
		L(floor(m[7]), floor(n[7]), floor(m[8]), floor(n[8]), k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 11:
		If(floor(m[3]), floor(n[3] - 7 * d), floor(4 * d) + 1, floor(14 * d) + 1, k);
		If(floor(m[2]) + 0, floor(n[2]), floor(4 * d) + 1, floor(9 * d) + 1, k);
		If(floor(m[1]) + 1, floor(n[1]), floor(4 * d) + 1, floor(8 * d) + 1, k);
		J(Va, floor(m[0]) + 1, floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 14:
		L(floor(m[1]), floor(n[1]), floor(m[2]), floor(n[2]), k);
		L(floor(m[1]), floor(n[1]), floor(m[3]), floor(n[3]), k);
		L(floor(m[2]), floor(n[2]), floor(m[3]), floor(n[3]), k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 15:
		L(floor(m[0]), floor(n[0]), floor(m[1]), floor(n[1]), k);
		L(floor(m[0]), floor(n[0]), floor(m[2]), floor(n[2]), k);
		L(floor(m[1]), floor(n[1]), floor(m[2]), floor(n[2]), k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 16:
		for (a = 1; 4 > a; a++)
			L(floor(m[0]), floor(n[0]), floor(m[a]), floor(n[a]), k);
		for (a = 4; 10 > a; a++)
			L(floor(m[a - 3]), floor(n[a - 3]), floor(m[a]), floor(n[a]), k);
		for (a = 7; 10 > a; a++)
			Hf(floor(m[a]), floor(n[a]), floor(2 * d), floor(2 * d), g);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g);
		break;
	case 17:
		for (a = 3; 0 < a; a--)
			Hf(floor(m[a]), floor(n[a] - 2 * d), floor(4 * d), floor(4 * d), k);
		J(Va, floor(m[0]), floor(n[0]), floor(16 * d), floor(16 * d), 16 * e, 0, 16, 16, g)
	}
}
;
var ze = 90,
	Ae = [3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	Ce = 1,
	Be = 2,
	kg = 4,
	jg = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 9, 10, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 0, 0, 0, 0, 0],
	gg = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 5, 6, 7, 1, 8, 8, 9, 9, 9, 1, 10, 11, 11, 12, 12, 13, 13, 14, 14, 12, 13, 14, 1, 15, 15, 15, 16, 16, 1, 17, 17, 18, 17, 18, 18, 18, 1, 19, 19, 19, 20, 20, 20, 21, 23, 20, 21, 21, 22, 22, 23, 22, 23, 24, 24, 24, 24, 24, 25, 1, 1, 24, 25, 26, 26, 26, 1, 27, 27, 28, 28, 1, 29, 30, 31, 32, 33, 1, 1],
	Uf = "Town;Opening Street;Grassland 1;Grassland 2;Grassland 3;Grassland 4;Grassland 5;Grassland 6;Grassland 7;Castle Gate;Castle;Hill Country 1;Hill Country 2;Hill Country 3;Lake;Forest 1;Forest 2;Cavern 1;Cavern 2;Cavern 3;Village;Seaside 1;Seaside 2;Seaside 3;Seaside 4;Submarine 1;Submarine 2;Submarine 3;Submarine 4;Submarine Shrine;Mist Grove 1;Mist Grove 2;Mist Grove 3;???;Desert 1;Desert 2;Desert 3;Desert 4;Desert 5;Oasis;Desert 6;Desert 7;Pyramid;Desert 8;Beach 1;Beach 2;Beach 3;Resort;Cavern 4;Cavern 5;Cavern 6;Snowfield 1;Snowfield 2;Mountain 1;Mountain 2;Mountaintop;Snowfield 3;Snowfield 4;Snowfield 5;Snowfield 6;Snowfield 7;Snowfield 8;Frozen Lake;Ice Castle;Snowfield 9;Beach 4;Forest 3;Forest 4;Forest 5;Forest 6;Forget Tree;!!!;Hell 1;Hell 2;Hell 3;Hell 4;Hell 5;Island;Hell 6;Inferno 1;Inferno 2;Inferno 3;Blood Lake;Cavern 7;Cavern 8;Hell 7;Hell 8;Hell Gate;Hell Castle;Volcano".split(";"),
	De = [[6, 28, 0, 1, 0], [10, 28, 0, 2, 0], [11, 24, 0, 3, 11], [10, 20, 0, 4, 5], [8, 16, 0, 6, 0], [12, 17, 0, 6, 14], [11, 12, 0, 7, 0], [15, 13, 0, 8, 0], [20, 13, 0, 9, 15], [24, 16, 0, 10, 0], [28, 16, 1, 21, 0], [15, 23, 0, 12, 0], [18, 20, 0, 13, 0], [22, 19, 0, 9, 0], [15, 17, 0, 0, 0], [20, 10, 0, 16, 0], [22, 7, 0, 17, 0], [22, 4, 1, 18, 0], [14, 3, 0, 19, 0], [6, 4, 1, 20, 0], [4, 7, 0, 0, 0], [33, 16, 0, 22, 30], [34, 12, 0, 23, 0], [37, 9, 0, 24, 0], [41, 10, 0, 25, 0], [42, 13, 0, 26, 28], [39, 16, 0, 27, 0], [43, 19, 0, 29, 0], [45, 14, 0, 29, 0], [48, 17, 2, 34, 0], [35, 20, 0, 31, 0], [38, 21, 0, 32, 0], [42, 24, 0, 33, 0], [46, 24, 0, 0, 0], [53, 17, 0, 35, 36], [57, 16, 0, 37, 0], [57, 20, 0, 38, 0], [60, 14, 0, 39, 0], [61, 19, 0, 39, 0], [63, 16, 1, 40, 41], [66, 14, 0, 42, 0], [66, 18, 0, 42, 43], [69, 16, 1, 48, 0], [70, 20, 0, 44, 0], [72, 24, 0, 45, 0], [76, 26, 0, 46, 0], [72, 30, 0, 47, 0], [65, 28, 0, 0, 0], [74, 14, 1, 49, 0], [78, 8, 0, 50, 0], [84, 10, 1, 51, 0], [87, 12, 0, 52, 56], [86, 16, 0, 53, 0], [81, 18, 0, 54, 0], [78, 14, 0, 55, 0], [79, 11, 0, 0, 0], [91, 11, 0, 57, 0], [93, 14, 0, 58, 59], [96, 16, 0, 62, 63], [94, 19, 0, 60, 0], [97, 21, 0, 61, 63], [96, 25, 0, 0, 0], [97, 13, 0, 0, 0], [101, 18, 1, 64, 65], [105, 16, 0, 72, 0], [106, 23, 0, 66, 0], [102, 28, 0, 67, 0], [110, 30, 0, 68, 0], [114, 29, 0, 69, 0], [115, 26, 0, 70, 0], [113, 22, 1, 71, 0], [109, 19, 0, 0, 0], [113, 16, 0, 73, 0], [117, 15, 0, 74, 0], [121, 18, 0, 75, 0], [126, 21, 0, 76, 79], [130, 18, 0, 77, 78], [126, 14, 0, 0, 0], [135, 17, 0, 83, 0], [125, 25, 0, 80, 0], [130, 27, 0, 81, 0], [135, 25, 0, 82, 0], [137, 21, 0, 0, 0], [136, 14, 1, 84, 0], [145, 12, 1, 85, 0], [143, 17, 0, 86, 0], [139, 15, 0, 87, 0], [140, 10, 0, 88, 0], [140, 7, 1, -1, 89], [130, 23, 1, 0, 0]],
	O = 1,
	P = 2,
	Q = 3,
	R = 4,
	S = 5,
	T = 6,
	Mf = 7,
	Nf = 8,
	Of = 9,
	Lf = 10,
	Pf = 11,
	Qf = 12,
	Rf = 13,
	Sf = 14,
	Me = [[[0, 0, O, 0, 0, O, 0, 0, O, 0, 0, O, 0, 0], [0, 100, O, 0]], [[0, 1, O, 0, 5, Q, 1, 1], [0, 1, O, 0, 6, Q, 1, 3], [0, 1, O, 0, 6, P, 1, 2, Q, 2, 1], [0, 1, O, 1, 5, Q, 2, 3], [0, 1, O, 2, 5, Q, 1, 2], [0, 1, O, 0, 20], [0, 1, O, 2, 8, Q, 3, 1], [0, 1, O, 2, 8, P, 0, 3, Q, 3, 2], [0, 1, O, 2, 8, P, 3, 1, Q, 3, 2, R, 3, 3], [0, 100, P, 2, 2, Q, 3, 2, R, 4, 1]], [[0, 2, P, 5, 1, Q, 5, 2, R, 5, 3], [0, 2, O, 5, 6, Q, 6, 2], [0, 2, P, 5, 6, Q, 6, 4], [0, 2, P, 5, 12], [0, 2, O, 5, 6, P, 6, 2, Q, 6, 2, R, 7, 1], [0, 2, P, 6, 3, Q, 7, 2, R, 6, 3], [0, 2, P, 7, 3, Q, 6, 4], [0, 100, P, 5, 1, Q, 5, 6, R, 8, 12]], [[0, 2, O, 9, 2, P, 10, 1, Q, 10, 1, R, 10, 1], [0, 2, O, 9, 3, P, 10, 1, Q, 10, 3, R, 10, 2], [0, 2, P, 10, 1, Q, 10, 1, R, 9, 5], [0, 2, O, 9, 3, P, 10, 2, Q, 10, 3, R, 11, 2], [0, 2, O, 11, 3, P, 10, 3, Q, 10, 3, R, 10, 3], [0, 2, O, 10, 8, P, 10, 4, Q, 9, 3, R, 12, 1], [0, 2, O, 10, 8, P, 9, 3, Q, 12, 1, R, 11, 5], [0, 2, O, 9, 5, P, 10, 3, Q, 12, 3, R, 11, 3], [0, 100, P, 12, 2, Q, 13, 1, R, 11, 2]], [[0, 2, O, 15, 3, Q, 14, 1, R, 14, 1], [0, 2, O, 15, 3, P, 16, 1, Q, 14, 1, R, 14, 1], [0, 2, P, 15, 3, Q, 16, 3, R, 14, 3], [0, 2, O, 16, 6, P, 14, 1, Q, 14, 1, R, 14, 1], [0, 2, O, 15, 9, R, 17, 1], [0, 2, O, 17, 1, P, 15, 6, Q, 16, 3, R, 14, 3], [0, 2, O, 17, 2, P, 14, 3, Q, 14, 3, R, 14, 3], [0, 2, O, 17, 3, P, 15, 6, Q, 16, 3, R, 16, 3], [0, 100, P, 15, 3, Q, 18, 1, R, 15, 3]], [[0, 2, O, 19, 5], [0, 2, O, 19, 10], [0, 2, O, 19, 15], [0, 2, P, 19, 5, Q, 19, 5, R, 21, 1], [0, 2, O, 19, 10, Q, 20, 3], [0, 2, O, 19, 10, P, 21, 1, Q, 20, 2, R, 21, 1], [0, 2, O, 19, 5, P, 19, 3, Q, 20, 3, R, 21, 3], [0, 100, P, 19, 2, Q, 19, 6, R, 22, 12]], [[0, 2, O, 23, 6], [0, 2, O, 23, 8, Q, 24, 3], [0, 2, O, 24, 6, P, 23, 2, Q, 23, 2, R, 23, 2], [0, 2, Q, 24, 6, R, 23, 6], [0, 2, O, 23, 9, Q, 25, 1], [0, 2, O, 23, 9, P, 25, 1, Q, 25, 1, R, 25, 1], [0, 2, O, 23, 12, P, 24, 3, Q, 25, 2, R, 25, 2], [0, 2, O, 25, 6, P, 24, 3, Q, 24, 3, R, 24, 3], [0, 100, O, 26, 3, P, 23, 3, Q, 25, 3, R, 24, 3]], [[0, 2, Q, 27, 5, R, 28, 1], [0, 2, O, 27, 5, P, 28, 1, Q, 28, 1, R, 28, 1], [0, 2, O, 27, 5, P, 29, 1, Q, 29, 1, R, 29, 1], [0, 2, O, 28, 5, P, 29, 1, Q, 29, 1, R, 29, 1], [0, 2, P, 27, 5, Q, 28, 3, R, 29, 2], [0, 2, O, 27, 9, Q, 27, 9], [0, 2, O, 28, 5, Q, 29, 5], [0, 100, O, 28, 5, P, 29, 2, Q, 30, 1, R, 29, 2]], [[0, 2, Q, 32, 1, R, 32, 2], [0, 2, O, 31, 3, P, 32, 1, Q, 32, 2, R, 32, 2], [0, 2, P, 31, 3, Q, 32, 2, R, 32, 3], [0, 2, O, 31, 5, Q, 33, 2], [0, 2, O, 32, 8, Q, 33, 1, R, 33, 2], [0, 2, P, 31, 5, Q, 33, 4, R, 33, 3], [0, 2, O, 31, 8, P, 32, 2, Q, 32, 3, R, 33, 4], [0, 100, P, 32, 3, Q, 33, 3, R, 34, 1]], [[1, 1, Q, 35, 10, R, 36, 1], [1, 1, P, 35, 1, Q, 35, 15, R, 36, 1], [1, 1, O, 35, 15, P, 37, 1, Q, 37, 1, R, 37, 1], [1, 1, O, 35, 15, P, 36, 1, Q, 36, 1, R, 36, 1], [1, 1, O, 37, 5, P, 36, 2, Q, 35, 10, R, 36, 2], [1, 100, O, 36, 3, Q, 38, 1]], [[1, 100, O, 39, 0], [1, 100, R, 39, 1]], [[2, 3, Q, 41, 1, O, 42, 3], [2, 3, Q, 41, 1, Q, 42, 6], [2, 3, Q, 41, 1, R, 43, 6], [2, 3, O, 41, 2, O, 43, 5], [2, 3, O, 41, 3, O, 42, 9], [2, 3, O, 41, 3, O, 42, 9, O, 43, 6], [2, 100, Q, 44, 1, Q, 43, 6]], [[2, 3, Q, 45, 1, O, 46, 3], [2, 3, Q, 45, 1, S, 46, 5], [2, 3, Q, 45, 1, O, 47, 5], [2, 3, O, 45, 2, O, 47, 9], [2, 3, S, 45, 3, S, 46, 6], [2, 3, S, 45, 2, S, 46, 6, O, 47, 5], [2, 100, R, 48, 1, Q, 45, 2]], [[2, 3, O, 49, 1, O, 50, 1], [2, 3, O, 49, 1, O, 51, 5], [2, 3, O, 50, 1, O, 51, 5], [2, 3, O, 49, 1, O, 50, 1, O, 51, 9], [2, 100, Q, 52, 1, Q, 49, 2, Q, 50, 2]], [[0, 4, T, 53, 10, T, 55, 5], [0, 4, T, 53, 20, T, 55, 5], [0, 4, T, 53, 15, O, 54, 10], [0, 4, T, 55, 8, O, 54, 10], [0, 4, T, 53, 30, T, 55, 5], [0, 4, T, 53, 30, O, 54, 5], [0, 4, T, 53, 20, O, 54, 5, T, 55, 5], [0, 101, T, 56, 1, O, 54, 5, T, 55, 5]], [[3, 1, O, 58, 3], [3, 1, O, 58, 4, O, 57, 5], [3, 1, O, 58, 5, O, 59, 5], [3, 1, O, 58, 5, Q, 57, 5, P, 59, 5], [3, 1, Q, 57, 8, R, 59, 8], [3, 1, O, 58, 15, O, 57, 1, O, 59, 1], [3, 1, O, 58, 6, O, 57, 6, O, 59, 6], [3, 100, Q, 60, 3, O, 58, 10]], [[3, 1, O, 62, 3, O, 61, 2], [3, 1, O, 62, 4, O, 63, 3], [3, 1, O, 62, 5, S, 61, 5], [3, 1, O, 62, 5, S, 63, 5], [3, 1, S, 61, 5, S, 63, 5], [3, 1, O, 62, 15, S, 61, 1, S, 63, 1], [3, 1, O, 62, 6, S, 61, 6, S, 63, 6], [3, 100, Q, 64, 1, O, 62, 3, S, 61, 1, S, 63, 1]], [[4, 5, T, 69, 1, O, 65, 5], [4, 5, T, 69, 1, O, 65, 5, Q, 66, 5], [4, 5, T, 69, 1, O, 65, 5, R, 67, 5], [4, 5, T, 69, 1, Q, 66, 5, Q, 65, 5], [4, 5, T, 69, 1, P, 66, 5, Q, 65, 5, R, 67, 5], [4, 5, T, 69, 1, O, 66, 6, O, 65, 6, O, 67, 6], [4, 102, Q, 68, 1]], [[4, 5, T, 74, 1, O, 70, 8], [4, 5, T, 74, 1, O, 70, 8, O, 71, 5], [4, 5, T, 74, 1, O, 70, 8, O, 72, 5], [4, 5, T, 74, 1, Q, 71, 8, O, 72, 5], [4, 5, T, 74, 1, P, 70, 6, Q, 71, 6, R, 72, 6], [4, 5, T, 74, 1, O, 70, 8, O, 71, 8, O, 72, 8], [4, 102, Q, 73, 1, O, 71, 8]], [[4, 5, T, 79, 1, O, 75, 5, Q, 76, 1], [4, 5, T, 79, 1, O, 75, 5, O, 77, 2], [4, 5, T, 79, 1, O, 75, 5, S, 76, 5], [4, 5, T, 79, 1, Q, 75, 4, Q, 76, 4, Q, 77, 2], [4, 5, T, 79, 1, O, 75, 5, S, 76, 5, O, 77, 3], [4, 102, Q, 78, 2, R, 78, 3, Q, 77, 5, R, 77, 10]], [[0, 0, O, 80, 0], [0, 100, O, 80, 0]], [[0, 6, O, 80, 10, Q, 83, 2], [0, 6, O, 81, 10, O, 83, 5], [0, 6, O, 80, 12, Q, 83, 3, R, 82, 1], [0, 6, O, 83, 12, O, 81, 5, Q, 82, 1], [0, 6, P, 80, 8, Q, 81, 8, R, 83, 8, O, 82, 5], [0, 100, R, 84, 1]], [[0, 6, O, 85, 15, Q, 86, 1], [0, 6, O, 85, 15, Q, 86, 2, S, 87, 5, S, 88, 1], [0, 6, S, 87, 20, S, 88, 2], [0, 6, O, 85, 15, Q, 86, 1, S, 87, 15, S, 88, 1], [0, 6, O, 85, 10, Q, 86, 4, S, 87, 5, S, 88, 4], [0, 100, R, 89, 1]], [[0, 6, Q, 92, 1, Q, 92, 2], [0, 6, Q, 90, 15, Q, 92, 1], [0, 6, O, 91, 15, Q, 91, 5, Q, 92, 1], [0, 6, S, 91, 15, Q, 92, 1], [0, 6, Q, 90, 15, S, 91, 10, Q, 92, 1], [0, 100, R, 93, 1]], [[0, 6, Q, 94, 10, R, 94, 10, R, 96, 5], [0, 6, S, 95, 20, O, 96, 5], [0, 6, O, 94, 30, S, 95, 30, O, 96, 5], [0, 6, Q, 94, 30, S, 95, 30, Q, 96, 5], [0, 100, Q, 97, 1, Q, 96, 20]], [[4, 4, T, 99, 10, T, 100, 1], [4, 4, T, 98, 10, T, 99, 10, T, 100, 1], [4, 4, P, 98, 10, R, 98, 10, T, 100, 1], [4, 4, T, 99, 20, T, 100, 5], [4, 4, Q, 98, 10, T, 98, 10, T, 99, 5, T, 100, 2], [4, 101, T, 101, 1]], [[4, 4, O, 102, 20, T, 103, 3], [4, 4, O, 102, 30, O, 104, 3], [4, 4, Q, 102, 20, T, 103, 3, R, 104, 3], [4, 4, O, 102, 20, T, 103, 8, R, 104, 5], [4, 101, O, 102, 50, Q, 105, 1]], [[4, 4, T, 106, 10, T, 107, 3], [4, 4, T, 106, 20, T, 108, 2], [4, 4, T, 106, 20, T, 107, 5, T, 108, 1], [4, 4, T, 106, 15, T, 107, 10, T, 108, 1], [4, 4, T, 106, 35, T, 108, 3], [4, 101, T, 109, 5]], [[4, 4, T, 111, 10, T, 112, 1], [4, 4, T, 111, 20, T, 112, 1], [4, 4, T, 110, 30, T, 112, 1], [4, 4, T, 111, 20, T, 112, 2], [4, 101, T, 113, 1, T, 112, 2, T, 111, 10]], [[1, 101, T, 114, 0], [1, 101, T, 114, 1]], [[3, 2, O, 116, 5, S, 118, 3], [3, 2, O, 116, 12, O, 117, 12], [3, 2, Q, 116, 10, O, 116, 5, S, 118, 5], [3, 2, O, 117, 12, S, 118, 8], [3, 2, O, 116, 10, Q, 117, 10, S, 118, 5], [3, 100, Q, 119, 1, S, 118, 3]], [[3, 2, R, 122, 1, O, 120, 5], [3, 2, R, 122, 3, O, 120, 10], [3, 2, R, 122, 5, O, 121, 10, R, 120, 10], [3, 100, Q, 123, 1, O, 120, 10]], [[3, 3, O, 124, 20], [3, 3, O, 125, 20], [3, 3, O, 126, 20], [3, 2, O, 124, 10, O, 125, 5, O, 126, 5], [3, 2, R, 124, 10, O, 125, 10, Q, 126, 5], [3, 3, Q, 124, 30], [3, 100, Q, 127, 1]], [[3, 1, O, 128, 10], [3, 1, O, 128, 50], [3, 100, O, 128, 99, O, 129, 1]], [[5, 7, O, 130, 10, O, 132, 1], [5, 7, O, 130, 15, O, 131, 15, R, 132, 2], [5, 7, O, 131, 30, O, 132, 2], [5, 7, Q, 130, 30, R, 132, 3], [5, 7, O, 130, 20, Q, 131, 20, O, 132, 3], [5, 100, Q, 133, 1, R, 132, 5]], [[5, 7, O, 134, 10, S, 135, 1], [5, 7, O, 134, 30, Q, 136, 5, S, 135, 3], [5, 7, S, 134, 10, O, 136, 10, S, 135, 2], [5, 7, Q, 134, 10, Q, 136, 5, S, 135, 4], [5, 7, S, 134, 30, Q, 136, 5, S, 135, 3], [5, 100, Q, 137, 1, Q, 135, 2]], [[5, 7, P, 138, 5, Q, 139, 5, R, 140, 1], [5, 7, Q, 139, 10, R, 138, 10, O, 140, 2], [5, 7, O, 138, 25, Q, 140, 3], [5, 7, O, 139, 25, Q, 140, 3], [5, 7, P, 138, 15, Q, 140, 3, R, 139, 15], [5, 7, Q, 139, 20, O, 140, 5], [5, 100, O, 141, 5, O, 138, 30]], [[5, 7, O, 143, 10, Q, 142, 3], [5, 7, O, 143, 15, Q, 142, 3, Q, 144, 3], [5, 7, Q, 143, 1, S, 142, 20, Q, 144, 5], [5, 7, Q, 143, 1, S, 142, 10, O, 144, 15], [5, 7, P, 143, 10, S, 142, 10, Q, 144, 10], [5, 100, Q, 145, 1, O, 143, 8]], [[5, 7, Q, 146, 1, R, 147, 1, T, 148, 1], [5, 7, O, 146, 3, T, 148, 2], [5, 7, O, 147, 3, T, 148, 3], [5, 7, O, 146, 2, O, 147, 2, T, 148, 3], [5, 7, Q, 146, 1, Q, 147, 1, T, 148, 30], [5, 100, Q, 149, 25, R, 149, 25]], [[5, 4, T, 150, 10, Q, 151, 10], [5, 4, T, 151, 10, Q, 152, 10], [5, 4, T, 152, 10, Q, 150, 10], [5, 4, P, 150, 10, Q, 151, 10, R, 152, 10], [5, 4, T, 150, 10, T, 151, 10, T, 152, 10], [5, 101, T, 153, 1]], [[5, 7, O, 154, 3, S, 155, 2, R, 156, 1], [5, 7, O, 154, 15, Q, 154, 10, Q, 156, 1], [5, 7, S, 155, 20, Q, 156, 1], [5, 7, O, 154, 15, S, 155, 15, O, 156, 2], [5, 7, P, 154, 15, S, 155, 15, O, 156, 2], [5, 100, Q, 157, 1]], [[5, 7, P, 158, 10, Q, 160, 1, R, 158, 10], [5, 7, S, 159, 20, Q, 160, 2], [5, 7, P, 158, 10, S, 159, 20, O, 160, 3], [5, 7, Q, 159, 20, Q, 160, 5], [5, 100, Q, 161, 1, O, 160, 5]], [[5, 102, Q, 162, 0], [5, 102, Q, 162, 1]], [[5, 2, P, 164, 10, R, 165, 1], [5, 2, O, 165, 2], [5, 2, O, 164, 30, O, 166, 3], [5, 2, P, 164, 10, R, 165, 1, O, 166, 3], [5, 100, Q, 167, 1, R, 165, 1]], [[5, 8, O, 168, 15, S, 169, 3], [5, 8, O, 168, 20, T, 170, 1], [5, 8, O, 168, 20, S, 169, 5, T, 170, 2], [5, 8, S, 169, 30, T, 170, 2], [5, 8, O, 168, 10, S, 169, 5, T, 170, 3], [5, 101, Q, 171, 1, T, 170, 3]], [[5, 8, S, 172, 5, S, 173, 5, S, 174, 1], [5, 8, S, 172, 20, S, 174, 3], [5, 8, S, 173, 20, S, 174, 3], [5, 8, S, 172, 10, S, 173, 10, S, 174, 3], [5, 8, S, 173, 3, S, 173, 3, S, 174, 15], [5, 101, S, 175, 10]], [[5, 8, T, 177, 10, O, 178, 10], [5, 8, Q, 176, 1, T, 177, 10], [5, 8, Q, 176, 1, O, 178, 10], [5, 8, Q, 176, 1, T, 177, 10, O, 178, 10], [5, 101, Q, 176, 2, T, 179, 1]], [[0, 0, O, 180, 0], [0, 100, O, 180, 0]], [[4, 9, O, 180, 20, T, 184, 1], [4, 9, O, 180, 30, O, 181, 3, T, 184, 2], [4, 9, O, 180, 40, O, 182, 3, T, 184, 3], [4, 9, O, 180, 50, O, 181, 3, O, 182, 3], [4, 9, O, 180, 60, T, 184, 10], [4, 103, Q, 183, 1, O, 180, 20]], [[4, 9, O, 185, 30, Q, 186, 3], [4, 9, O, 185, 40, O, 186, 10, R, 187, 1], [4, 9, O, 185, 40, Q, 186, 20, Q, 187, 1], [4, 9, O, 185, 70, Q, 187, 1, R, 187, 1], [4, 9, O, 185, 40, T, 189, 1], [4, 103, R, 188, 1, O, 186, 5]], [[4, 9, O, 190, 80, T, 194, 1], [4, 9, O, 191, 80, T, 194, 1], [4, 9, O, 192, 80, T, 194, 1], [4, 103, Q, 193, 1]], [[7, 3, R, 195, 30, Q, 196, 1], [7, 3, R, 195, 30, Q, 197, 3], [7, 3, O, 195, 50, Q, 196, 3, Q, 197, 3], [7, 3, R, 195, 50, Q, 196, 3, Q, 197, 3], [7, 100, Q, 198, 1, Q, 197, 3]], [[7, 3, O, 199, 30, Q, 200, 2], [7, 3, O, 199, 40, Q, 201, 2], [7, 3, Q, 200, 20, Q, 201, 2], [7, 3, O, 199, 20, Q, 200, 10, R, 201, 2], [7, 3, O, 201, 5], [7, 100, Q, 202, 1, O, 199, 90]], [[3, 10, O, 203, 30, Q, 205, 1], [3, 10, O, 204, 30, Q, 205, 1], [3, 10, O, 205, 5], [3, 10, O, 203, 20, Q, 204, 20, O, 205, 1], [3, 100, Q, 206, 1, P, 203, 5, R, 204, 5]], [[4, 10, S, 207, 30, R, 208, 30], [4, 10, S, 207, 50, Q, 208, 10, R, 209, 1], [4, 10, S, 207, 10, O, 208, 50, R, 209, 1], [4, 10, S, 207, 10, O, 208, 10, O, 209, 3], [4, 100, Q, 210, 1, S, 207, 10, O, 208, 10]], [[0, 1, Q, 4, 1, P, 8, 1, S, 13, 1, S, 18, 1, P, 22, 1, Q, 26, 1, Q, 30, 1, R, 34, 1], [2, 10, Q, 44, 1, S, 48, 1, Q, 52, 1, Q, 38, 1], [3, 10, Q, 60, 1, Q, 64, 1, R, 68, 1, S, 73, 1, P, 78, 1], [0, 8, Q, 84, 1, Q, 89, 1, S, 93, 1, Q, 97, 1], [4, 101, T, 56, 1, T, 101, 1, Q, 105, 1, T, 109, 1, T, 113, 1, T, 153, 1], [3, 1, P, 119, 1, R, 123, 1, Q, 127, 1], [5, 1, Q, 133, 1, Q, 137, 1, O, 141, 1, R, 145, 1, P, 149, 1, R, 157, 1, P, 161, 1, Q, 167, 1], [5, 8, Q, 171, 1, S, 175, 1, T, 179, 1], [4, 103, S, 183, 1, Q, 188, 1, Q, 193, 1], [1, 100, S, 211, 1, S, 212, 1, S, 213, 1, S, 214, 1]], [[7, 3, P, 215, 3, R, 216, 3, Q, 217, 3], [7, 3, S, 215, 80, O, 217, 1], [7, 3, O, 216, 80, O, 217, 1], [7, 3, S, 215, 40, O, 216, 40, O, 217, 2], [7, 100, Q, 218, 1, R, 217, 1]], [[7, 3, P, 219, 1, Q, 220, 1, R, 219, 1], [7, 3, P, 221, 1, Q, 220, 1, R, 221, 1], [7, 3, O, 221, 3, Q, 219, 1], [7, 3, Q, 219, 1, O, 220, 3, Q, 221, 1], [7, 100, P, 221, 1, Q, 220, 1, R, 219, 1, Q, 222, 1]], [[7, 1, S, 223, 50, Q, 225, 1], [7, 1, S, 224, 50, Q, 225, 1], [7, 1, S, 223, 20, S, 224, 20, O, 225, 2], [7, 100, Q, 226, 1]], [[7, 1, Q, 227, 30], [7, 1, Q, 229, 15, R, 227, 30], [7, 1, O, 228, 50], [7, 1, O, 228, 30, Q, 227, 30], [7, 1, O, 228, 10, Q, 229, 30, R, 227, 10], [7, 100, R, 230, 30]], [[7, 1, Q, 232, 1, O, 231, 5], [7, 1, Q, 232, 1, O, 231, 50], [7, 1, Q, 232, 2, O, 231, 15], [7, 100, Q, 234, 1, O, 233, 99]], [[7, 1, O, 235, 50, Q, 237, 1], [7, 1, O, 236, 50, Q, 237, 1], [7, 1, P, 237, 1, Q, 237, 1, R, 237, 1], [7, 1, Q, 235, 30, Q, 236, 30, R, 237, 1], [7, 100, P, 238, 1, Q, 238, 1, R, 238, 1]], [[8, 100, S, 239, 5, O, 241, 3], [8, 100, O, 240, 2, O, 241, 5], [8, 100, S, 239, 5, Q, 240, 5], [8, 100, S, 239, 5, R, 240, 1, O, 241, 5], [8, 100, Q, 242, 1]], [[7, 102, Q, 243, 0], [7, 102, Q, 243, 1]], [[7, 6, O, 247, 30], [7, 6, P, 245, 20, Q, 247, 20], [7, 6, O, 245, 20, S, 246, 30], [7, 6, O, 245, 20, S, 246, 20, R, 247, 20], [7, 100, Q, 248, 1]], [[7, 8, T, 249, 30, R, 251, 1], [7, 8, T, 249, 50, R, 251, 3], [7, 8, O, 250, 40, R, 251, 1], [7, 8, T, 249, 30, Q, 250, 30, R, 251, 2], [7, 101, T, 252, 1, T, 251, 3]], [[9, 1, Q, 253, 30, S, 255, 1], [9, 1, O, 254, 30, S, 255, 1], [9, 1, Q, 253, 20, O, 254, 20, S, 255, 1], [9, 1, P, 253, 10, O, 254, 10, S, 255, 3], [9, 100, S, 256, 1, S, 255, 1]], [[9, 1, Q, 258, 1], [9, 1, O, 258, 10], [9, 100, Q, 259, 1]], [[9, 1, O, 262, 30, Q, 260, 30], [9, 1, O, 260, 30, Q, 261, 30], [9, 1, O, 262, 30, Q, 261, 30], [9, 100, Q, 263, 1, R, 260, 2, R, 261, 2, R, 262, 2]], [[9, 1, Q, 264, 1, S, 265, 80], [9, 1, Q, 264, 1, O, 266, 80], [9, 1, Q, 264, 1, S, 265, 40, O, 266, 40], [9, 100, Q, 267, 1, R, 264, 1]], [[9, 0, O, 268, 0], [9, 100, O, 268, 0]], [[4, 101, S, 268, 30], [4, 101, S, 268, 60], [4, 101, S, 268, 99, S, 269, 1]], [[10, 1, Q, 270, 20, R, 271, 1], [10, 1, O, 270, 40, Q, 271, 1, R, 271, 1], [10, 1, O, 270, 40, Q, 271, 1, R, 272, 1], [10, 1, O, 270, 40, Q, 272, 1, R, 272, 1], [10, 1, O, 270, 10, O, 271, 3, O, 272, 3], [10, 1, Q, 270, 60], [10, 100, Q, 273, 1, O, 270, 30]], [[10, 11, S, 274, 50, Q, 276, 1], [10, 11, S, 274, 50, Q, 275, 1], [10, 11, O, 274, 50, R, 276, 1, Q, 275, 1], [10, 11, O, 274, 50, O, 275, 2], [10, 11, O, 274, 50, P, 276, 1, R, 276, 1], [10, 100, Q, 274, 50, Q, 277, 1]], [[10, 11, Q, 279, 1, P, 278, 10, R, 280, 10], [10, 11, O, 279, 2, O, 278, 40], [10, 11, O, 279, 2, O, 280, 60], [10, 11, O, 279, 2, O, 278, 30, O, 280, 20], [10, 100, P, 279, 1, R, 279, 1, Q, 281, 1]], [[10, 10, Q, 282, 10, R, 282, 10], [10, 10, O, 283, 30, Q, 282, 10], [10, 10, O, 282, 30, O, 284, 5], [10, 10, O, 283, 30, O, 284, 5], [10, 10, O, 284, 10, Q, 282, 5, R, 283, 5], [10, 100, Q, 285, 1, P, 282, 3, Q, 284, 3, R, 283, 3]], [[10, 1, P, 286, 1, Q, 286, 1, R, 286, 2], [10, 1, P, 287, 1, Q, 287, 1, R, 287, 2], [10, 1, P, 288, 1, Q, 288, 1, R, 288, 2], [10, 1, O, 286, 3, O, 287, 3], [10, 1, O, 287, 3, O, 288, 2], [10, 1, O, 288, 3, O, 286, 3], [10, 100, P, 286, 1, Q, 287, 1, R, 288, 1, O, 289, 5]], [[0, 0, O, 290, 0], [0, 100, O, 290, 0]], [[10, 1, S, 290, 60, Q, 291, 5], [10, 1, S, 290, 60, Q, 292, 2], [10, 1, S, 291, 60, Q, 292, 2], [10, 1, S, 292, 10, S, 290, 2, S, 291, 2], [10, 100, Q, 293, 1, S, 290, 1, S, 291, 1, S, 292, 1]], [[11, 10, O, 294, 30, Q, 296, 1], [11, 10, O, 295, 30, Q, 296, 1], [11, 10, Q, 296, 1, R, 296, 1], [11, 10, Q, 294, 50, R, 295, 50], [11, 10, P, 294, 20, Q, 295, 20, R, 296, 1], [11, 100, Q, 297, 1]], [[11, 1, Nf, 298, 100], [11, 1, Nf, 299, 100], [11, 1, Nf, 300, 100], [11, 100, Mf, 298, 20, Nf, 300, 20, Of, 299, 20, R, 301, 1]], [[11, 1, R, 302, 20, Nf, 302, 20], [11, 1, O, 303, 40], [11, 1, R, 304, 20, Nf, 304, 20], [11, 1, P, 302, 15, Q, 304, 15, R, 303, 15], [11, 100, Q, 305, 1]], [[11, 4, T, 306, 10, Q, 307, 5], [11, 4, T, 306, 30, Lf, 308, 10], [11, 4, O, 307, 20, Lf, 308, 10], [11, 4, T, 306, 10, Q, 307, 5, Lf, 308, 40], [11, 4, T, 306, 30, Q, 307, 10, Lf, 308, 5], [11, 101, Q, 309, 1, Lf, 308, 10]], [[11, 9, Q, 310, 10, Rf, 311, 10, T, 314, 1], [11, 9, O, 310, 30, Rf, 311, 10, Q, 312, 1, T, 314, 1], [11, 9, Q, 310, 10, Pf, 311, 30, Q, 312, 1, T, 314, 1], [11, 9, O, 310, 30, Pf, 311, 30, O, 312, 2, T, 314, 1], [11, 103, O, 312, 2, Q, 313, 1]], [[11, 9, Q, 315, 10, Rf, 316, 10, T, 319, 1], [11, 9, O, 315, 30, Rf, 316, 10, Q, 317, 1, T, 319, 1], [11, 9, Q, 315, 20, Pf, 316, 20, Q, 317, 1, T, 319, 1], [11, 9, O, 315, 40, Pf, 316, 15, O, 317, 2, T, 319, 1], [11, 103, Q, 318, 1]], [[10, 1, Q, 320, 50, R, 320, 50], [10, 1, R, 321, 5, O, 320, 20], [10, 1, S, 322, 3, O, 320, 20], [10, 1, S, 322, 2, S, 321, 3, O, 320, 20], [10, 100, S, 323, 1, S, 322, 1, Q, 321, 1, Q, 320, 1]], [[10, 11, O, 324, 10], [10, 11, O, 324, 50, S, 325, 1], [10, 11, O, 324, 50, S, 326, 1], [10, 11, O, 324, 50, S, 325, 1, S, 326, 1], [10, 100, O, 324, 50, R, 327, 1]], [[1, 1, Q, 328, 10, R, 329, 1], [1, 1, P, 328, 1, Q, 328, 15, R, 329, 1], [1, 1, O, 328, 15, P, 330, 1, Q, 330, 1, R, 330, 1], [1, 1, O, 328, 15, P, 329, 1, Q, 329, 1, R, 329, 1], [1, 1, O, 330, 5, P, 329, 2, Q, 328, 10, R, 329, 2], [1, 100, Q, 331, 1, O, 329, 3]], [[12, 100, Q, 332, 0], [12, 100, Q, 332, 1]], [[7, 100, Q, 198, 1, Q, 202, 1, Q, 218, 1, Q, 222, 1], [7, 100, Q, 234, 1, Q, 238, 1, Q, 226, 1, R, 230, 1], [4, 100, Q, 206, 1, S, 210, 1], [8, 100, Q, 242, 1, Q, 248, 1], [9, 100, Q, 267, 1, S, 256, 1], [9, 100, Q, 259, 1, Q, 263, 1], [10, 100, Q, 273, 1, R, 277, 1, Q, 281, 1], [10, 100, Q, 285, 1, O, 289, 1, Q, 293, 1], [11, 100, Q, 297, 1, R, 301, 1, Q, 305, 1], [11, 101, T, 252, 1, T, 309, 1], [11, 103, Q, 313, 1, Q, 318, 1], [1, 100, P, 323, 1, Q, 327, 1, R, 331, 1], [12, 100, S, 338, 100]], []],
	oe = new ih;

function ih() {
	var a;
	this.F = new Int32Array(1E3);
	this.a = Array(1E3);
	this.k = Array(1E3);
	this.d = new Int32Array(1E3);
	this.Ya = new Int32Array(1E3);
	this.N = new Int32Array(1E3);
	this.G = new Int32Array(1E3);
	this.Wa = new Int32Array(1E3);
	this.Ua = new Int32Array(1E3);
	this.Va = new Int32Array(1E3);
	this.ja = new Int32Array(1E3);
	this.ka = new Int32Array(1E3);
	this.ha = new Int32Array(1E3);
	this.oa = new Int32Array(1E3);
	this.count = new Int32Array(1E3);
	this.ia = new Int32Array(1E3);
	this.e = new Int32Array(1E3);
	this.i = new Int32Array(1E3);
	this.ya = new Int32Array(1E3);
	this.Y = new Int32Array(1E3);
	this.ra = new Int32Array(1E3);
	this.la = new Int32Array(1E3);
	this.ga = new Int32Array(1E3);
	this.ea = new Int32Array(1E3);
	this.fa = new Int32Array(1E3);
	this.U = new Int32Array(1E3);
	this.V = new Int32Array(1E3);
	this.sub = new Int32Array(1E3);
	this.Ha = new Int32Array(1E3);
	this.Sa = new Int32Array(1E3);
	this.Ea = new Int32Array(1E3);
	this.za = new Int32Array(1E3);
	this.Pa = new Int32Array(1E3);
	this.Qa = new Int32Array(1E3);
	this.La = new Int32Array(1E3);
	this.Ma = new Int32Array(1E3);
	this.Ga = new Int32Array(1E3);
	this.Na = new Int32Array(1E3);
	this.Fa = new Int32Array(1E3);
	this.Ia = new Int32Array(1E3);
	this.Ja = new Int32Array(1E3);
	this.Ta = new Int32Array(1E3);
	this.Oa = new Int32Array(1E3);
	this.Ka = new Int32Array(1E3);
	this.Ra = new Int32Array(1E3);
	this.Aa = new Int32Array(1E3);
	this.Ba = new Int32Array(1E3);
	this.A = new Int32Array(1E3);
	this.Ca = new Int32Array(1E3);
	this.Da = new Int32Array(1E3);
	for (a = this.index = 0; 1E3 > a; a++)
		this.a[a] = new Qg;
	for (a = 0; 1E3 > a; a++)
		this.k[a] = new Qg
}
aa = ih.prototype;
aa.j = function() {
	this.index = 0
}
;
aa.add = function(a, b, c, d, e, g, k, r, m, n, F, H, M, E, la, Ja, Ea, Ca, Z, X, $, ob, pb, Wa, ta, ya, rb, ia, ka, za, bb, ab, pa, Xa, Bb, Cb, Sa, Oa, Ob, Pb, Qb, Rb, Sb, Tb, qb, Ub, Vb, Wb, Xb, Yb, Zb) {
	1E3 != this.index && (this.F[this.index] = a,
	Rg(this.a[this.index], b, c),
	Rg(this.k[this.index], d, e),
	this.d[this.index] = 0,
	this.Ya[this.index] = g,
	this.N[this.index] = k,
	this.G[this.index] = r,
	this.Wa[this.index] = m,
	this.Ua[this.index] = n,
	this.Va[this.index] = F,
	this.ja[this.index] = H,
	this.ka[this.index] = M,
	this.ha[this.index] = floor(A(E)),
	this.oa[this.index] = la,
	this.count[this.index] = Ja,
	this.ia[this.index] = Ea,
	this.e[this.index] = Ca,
	this.i[this.index] = Z,
	this.ya[this.index] = X,
	this.Y[this.index] = $,
	this.ra[this.index] = ob,
	this.la[this.index] = pb,
	this.ga[this.index] = Wa,
	this.ea[this.index] = ta,
	this.fa[this.index] = ya,
	this.U[this.index] = rb,
	this.V[this.index] = ia,
	this.sub[this.index] = ka,
	this.Ha[this.index] = za,
	this.Sa[this.index] = bb,
	this.Ea[this.index] = ab,
	this.za[this.index] = pa,
	this.Pa[this.index] = Xa,
	this.Qa[this.index] = Bb,
	this.La[this.index] = Cb,
	this.Ma[this.index] = Sa,
	this.Ga[this.index] = Oa,
	this.Na[this.index] = Ob,
	this.Fa[this.index] = Pb,
	this.Ia[this.index] = Qb,
	this.Ja[this.index] = Rb,
	this.Ta[this.index] = Sb,
	this.Oa[this.index] = Tb,
	this.Ka[this.index] = qb,
	this.Ra[this.index] = Ub,
	this.Aa[this.index] = Vb,
	this.Ba[this.index] = Wb,
	this.A[this.index] = Xb,
	this.Ca[this.index] = Yb,
	this.Da[this.index] = Zb,
	this.index++)
}
;
aa.q = function(a) {
	this.F[a] = this.F[this.index - 1];
	this.a[a].set(this.a[this.index - 1]);
	this.k[a].set(this.k[this.index - 1]);
	this.d[a] = this.d[this.index - 1];
	this.Ya[a] = this.Ya[this.index - 1];
	this.N[a] = this.N[this.index - 1];
	this.G[a] = this.G[this.index - 1];
	this.Wa[a] = this.Wa[this.index - 1];
	this.Ua[a] = this.Ua[this.index - 1];
	this.Va[a] = this.Va[this.index - 1];
	this.ja[a] = this.ja[this.index - 1];
	this.ka[a] = this.ka[this.index - 1];
	this.ha[a] = this.ha[this.index - 1];
	this.oa[a] = this.oa[this.index - 1];
	this.count[a] = this.count[this.index - 1];
	this.ia[a] = this.ia[this.index - 1];
	this.e[a] = this.e[this.index - 1];
	this.i[a] = this.i[this.index - 1];
	this.ya[a] = this.ya[this.index - 1];
	this.Y[a] = this.Y[this.index - 1];
	this.ra[a] = this.ra[this.index - 1];
	this.la[a] = this.la[this.index - 1];
	this.ga[a] = this.ga[this.index - 1];
	this.ea[a] = this.ea[this.index - 1];
	this.fa[a] = this.fa[this.index - 1];
	this.U[a] = this.U[this.index - 1];
	this.V[a] = this.V[this.index - 1];
	this.sub[a] = this.sub[this.index - 1];
	this.Ha[a] = this.Ha[this.index - 1];
	this.Sa[a] = this.Sa[this.index - 1];
	this.Ea[a] = this.Ea[this.index - 1];
	this.za[a] = this.za[this.index - 1];
	this.Pa[a] = this.Pa[this.index - 1];
	this.Qa[a] = this.Qa[this.index - 1];
	this.La[a] = this.La[this.index - 1];
	this.Ma[a] = this.Ma[this.index - 1];
	this.Ga[a] = this.Ga[this.index - 1];
	this.Na[a] = this.Na[this.index - 1];
	this.Fa[a] = this.Fa[this.index - 1];
	this.Ia[a] = this.Ia[this.index - 1];
	this.Ja[a] = this.Ja[this.index - 1];
	this.Ta[a] = this.Ta[this.index - 1];
	this.Oa[a] = this.Oa[this.index - 1];
	this.Ka[a] = this.Ka[this.index - 1];
	this.Ra[a] = this.Ra[this.index - 1];
	this.Aa[a] = this.Aa[this.index - 1];
	this.Ba[a] = this.Ba[this.index - 1];
	this.A[a] = this.A[this.index - 1];
	this.Ca[a] = this.Ca[this.index - 1];
	this.Da[a] = this.Da[this.index - 1];
	this.index--
}
;
aa.h = function(a, b) {
	var c = 0;
	b.set(this.k[a]);
	var d = floor(Sg(b) / 4) + 1;
	Tg(b, 1 / d);
	for (var e, g, k, r = 0; r < d; r++)
		if (e = this.a[a].y + b.y,
		g = floor(K(this.a[a].x, 0, 511) / 8),
		k = floor(K(e, 0, 255) / 8),
		g = I.e[k][g],
		0 <= g && 8 >= g && 0 == this.ya[a] ? 0 == this.Y[a] ? c = 1 : 2 == this.Y[a] && (b.y *= -1,
		this.k[a].y *= -1) : this.a[a].y = e,
		e = this.a[a].x + b.x,
		g = floor(K(e, 0, 511) / 8),
		k = floor(K(this.a[a].y, 0, 255) / 8),
		g = I.e[k][g],
		0 <= g && 8 >= g && 0 == this.ya[a]) {
			if (0 == this.Y[a] || 1 == this.Y[a])
				c = 1;
			2 == this.Y[a] && (b.x *= -1,
			this.k[a].x *= -1)
		} else
			this.a[a].x = e;
	return c
}
;
aa.move = function() {
	var a, b, c = new Qg, d, e;
	for (a = 0; a < this.index; a++)
		if (-64 > this.a[a].x || 576 < this.a[a].x)
			this.q(a--);
		else if (0 < this.ha[a])
			this.ha[a]--;
		else if (1 == this.d[a])
			this.count[a]++,
			this.count[a] >= this.ia[a] && this.q(a--);
		else {
			0 < this.ra[a] && (d = this.ra[a],
			d = 1 != ga ? 0 == this.F[a] ? G.m(this.a[a].x - d, this.a[a].y - d, this.a[a].x + d, this.a[a].y + d) : v.m(this.a[a].x - d, this.a[a].y - d, this.a[a].x + d, this.a[a].y + d, 0) : v.m(this.a[a].x - d, this.a[a].y - d, this.a[a].x + d, this.a[a].y + d, 1 - this.F[a] << 2),
			-1 != d && (1 != ga ? 0 == this.F[a] ? c.q(G.a[d][0], this.a[a]) : c.q(v.a[d][0], this.a[a]) : c.q(v.a[d][0], this.a[a]),
			Xg(c),
			d = Sg(this.k[a]),
			this.k[a].x = 0.85 * this.k[a].x + 0.15 * c.x + N(-0.1, 0.1),
			this.k[a].y = 0.85 * this.k[a].y + 0.15 * c.y + N(-0.1, 0.1),
			Xg(this.k[a]),
			Tg(this.k[a], ig(d, 1))));
			this.k[a].y += 0.01 * this.e[a];
			Tg(this.k[a], 0.01 * this.i[a]);
			d = this.h(a, c);
			b = 1;
			1 == this.U[a] && 0 != this.V[a] && A(1E3) > this.V[a] && (b = 0);
			0 < this.oa[a] && (this.oa[a]--,
			b = 0);
			e = -1;
			if (1 == b)
				e = 1 != ga ? 0 == this.F[a] ? G.K(this.ga[a], this.U[a], this.V[a], this.ea[a], this.fa[a], this.a[a].x, this.a[a].y, this.ja[a], this.ka[a]) : v.K(this.ga[a], this.U[a], this.V[a], this.ea[a], this.fa[a], this.a[a].x, this.a[a].y, this.ja[a], this.ka[a], 0) : v.K(this.ga[a], this.U[a], this.V[a], this.ea[a], this.fa[a], this.a[a].x, this.a[a].y, this.ja[a], this.ka[a], 1 - this.F[a] << 2);
			-1 != e && 0 != this.la[a] && (1 != ga ? 0 == this.F[a] ? c.q(G.a[e][0], this.a[a]) : c.q(v.a[e][0], this.a[a]) : c.q(v.a[e][0], this.a[a]),
			Xg(c),
			Tg(c, 0.1 * this.la[a]),
			1 != ga && 0 == this.F[a] ? Tg(c, ah[B[G.id[e]][bh]] / B[G.id[e]][ch]) : Tg(c, 0.1),
			1 != ga ? 0 == this.F[a] ? G.c[e][0].sub(c) : v.c[e][0].sub(c) : v.c[e][0].sub(c),
			this.la[a] = 0);
			1 == this.U[a] && 0 != this.V[a] && (e = -1);
			if (1 == d || -1 != e)
				if (this.d[a] = 1,
				this.count[a] = 0,
				1 == this.sub[a] || 3 == this.sub[a] || 4 == this.sub[a] || 5 == this.sub[a] || 6 == this.sub[a] || 7 == this.sub[a] || 8 == this.sub[a] || 9 == this.sub[a]) {
					var g = floor(A(512));
					for (b = 0; b < this.A[a]; b++) {
						if (1 == this.sub[a])
							Rg(c, 0, 0);
						else if (3 == this.sub[a]) {
							var g = floor(A(512)),
								k = N(0.05, 0.1);
							c.x = this.A[a] * Xe[g][0] * k;
							c.y = this.A[a] * Xe[g][1] * k
						} else
							4 == this.sub[a] ? (c.x = N(0.1 * -this.A[a], 0.1 * this.A[a]),
							c.y = N(0.2 * -this.A[a], 0.1 * -this.A[a])) : 5 == this.sub[a] ? (c.x = this.k[a].x,
							c.y = this.k[a].y) : 6 == this.sub[a] ? (c.x = N(0.01 * -this.A[a], 0.01 * this.A[a]),
							c.y = N(0.2 * -this.A[a], 0.05 * -this.A[a])) : 7 == this.sub[a] ? (k = floor(g + 512 * b / this.A[a]) & 511,
							c.x = this.A[a] * Xe[k][0],
							c.y = this.A[a] * Xe[k][1]) : 8 == this.sub[a] ? (g = floor(A(512)),
							k = N(0, 0.1),
							c.x = this.A[a] * Xe[g][0] * k,
							c.y = this.A[a] * Xe[g][1] * k) : 9 == this.sub[a] && (c.x = this.k[a].x,
							c.y = this.k[a].y,
							Xg(c));
						oe.add(this.F[a], this.a[a].x, this.a[a].y, c.x, c.y, this.Ha[a], this.Sa[a], this.Ea[a], this.za[a], this.Pa[a], this.Qa[a], this.La[a], this.Ma[a], this.Ga[a], this.Na[a], this.Fa[a], this.Ia[a], this.Ja[a], this.Ta[a], this.Oa[a], this.Ka[a], 0, 0, this.Ra[a], this.Aa[a], this.Ba[a], this.Ca[a], this.Da[a], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
					}
				}
			0 < this.count[a] && this.count[a]--;
			0 == this.count[a] && (this.d[a] = 1);
			2 == this.sub[a] && (A(100) < this.A[a] || 1 == d || -1 != e) && (c.x = N(-1, 1),
			c.y = N(-1, 1),
			oe.add(this.F[a], this.a[a].x, this.a[a].y, c.x, c.y, this.Ha[a], this.Sa[a], this.Ea[a], this.za[a], this.Pa[a], this.Qa[a], this.La[a], this.Ma[a], this.Ga[a], this.Na[a], this.Fa[a], this.Ia[a], this.Ja[a], this.Ta[a], this.Oa[a], this.Ka[a], 0, 0, this.Ra[a], this.Aa[a], this.Ba[a], this.Ca[a], this.Da[a], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))
		}
}
;
aa.b = function() {
	var a, b, c, d = new Qg, e = new Qg, g = new Qg, k = new Qg;
	for (a = 0; a < this.index; a++)
		if (!(0 < this.ha[a])) {
			b = 16 * this.N[a];
			c = 1 == this.d[a] ? floor((this.G[a] >> 24 & 255) * (this.ia[a] - this.count[a]) / this.ia[a]) << 24 | this.G[a] & 16777215 : this.G[a];
			0 < this.oa[a] && (c = floor((c >> 24 & 255) / 2) << 24 | c & 16777215);
			Xf = this.Wa[a];
			dg = 1;
			if (0 == this.Ya[a])
				J(Za, floor(this.a[a].x), floor(this.a[a].y), this.Ua[a], this.Va[a], b, 0, 16, 16, c);
			else {
				e.set(this.k[a]);
				d.set(e);
				dh(d);
				Xg(d);
				Xg(e);
				Tg(d, this.Ua[a] >> 1);
				Tg(e, this.Va[a] >> 1);
				g.q(e, d);
				eh(k, e, d);
				var r = this.a[a].x + g.x,
					m = this.a[a].y + g.y,
					n = b,
					F = this.a[a].x + k.x,
					H = this.a[a].y + k.y,
					M = b + 16,
					E = this.a[a].x - g.x,
					la = this.a[a].y - g.y,
					Ja = b + 16,
					Ea = this.a[a].x - k.x,
					Ca = this.a[a].y - k.y,
					Z = 0,
					X = 0,
					$ = 16,
					ob = 16,
					pb = Za,
					r = r << 16,
					m = m << 16,
					F = F << 16,
					H = H << 16,
					E = E << 16,
					la = la << 16,
					Ea = Ea << 16,
					Ca = Ca << 16,
					n = 65535 * n,
					Z = 65535 * Z,
					M = 65535 * M,
					X = 65535 * X,
					Ja = 65535 * Ja,
					$ = 65535 * $;
				b *= 65535;
				var ob = 65535 * ob,
					Wa = void 0,
					ta = void 0,
					ya = void 0,
					rb = Wa = void 0,
					ia = void 0,
					ka = void 0,
					za = void 0,
					bb = void 0,
					ab = void 0,
					pa = void 0,
					Xa = void 0,
					Bb = void 0,
					Cb = void 0,
					Sa = void 0,
					Sa = void 0,
					ya = fa << 16,
					Oa = 0;
				ya > m && (ya = m);
				ya > H && (ya = H);
				ya > la && (ya = la);
				ya > Ca && (ya = Ca);
				Oa < m && (Oa = m);
				Oa < H && (Oa = H);
				Oa < la && (Oa = la);
				Oa < Ca && (Oa = Ca);
				ya >>= 16;
				Oa >>= 16;
				if (0 > ya)
					ya = 0;
				Oa >= fa && (Oa = fa - 1);
				for (ta = ya; ta <= Oa; ta++)
					jh[ta] = ea,
					kh[ta] = -1;
				lh(r, m, n, Z, F, H, M, X);
				lh(F, H, M, X, E, la, Ja, $);
				lh(E, la, Ja, $, Ea, Ca, b, ob);
				lh(Ea, Ca, b, ob, r, m, n, Z);
				Xa = c >> 24 & 255;
				bb = c >> 16 & 255;
				ab = c >> 8 & 255;
				pa = c & 255;
				for (ta = ya; ta <= Oa; ta++)
					for (ya = ta * ea + jh[ta],
					Wa = kh[ta] - jh[ta] + 1,
					ka = (mh[ta] - nh[ta]) / Wa,
					za = (oh[ta] - ph[ta]) / Wa,
					rb = nh[ta],
					ia = ph[ta],
					Wa = jh[ta]; Wa <= kh[ta]; Wa++,
					ya++,
					rb += ka,
					ia += za)
						0 > Wa || ea <= Wa || (Sa = pb.f[(ia >> 16) * pb.i + (rb >> 16)],
						0 == dg ? -1 != Sa && (Bb = bb * ((Sa & 16711680) >> 16) >> 8,
						Cb = ab * ((Sa & 65280) >> 8) >> 8,
						Sa = pa * (Sa & 255) >> 8,
						C[ya] = 0 == Xf ? Bb << 16 | Cb << 8 | Sa : qh(C[ya], Bb << 16 | Cb << 8 | Sa, Xa)) : (Sa = Xa * (Sa & 255) >> 8,
						0 != Sa && (C[ya] = qh(C[ya], c, Sa))))
			}
			dg = Xf = 0
		}
}
;
var ne = new rh;

function rh() {
	var a;
	this.a = Array(1E3);
	this.k = Array(1E3);
	this.value = new Int32Array(1E3);
	this.G = new Int32Array(1E3);
	this.count = new Int32Array(1E3);
	for (a = this.index = 0; 1E3 > a; a++)
		this.a[a] = new Qg;
	for (a = 0; 1E3 > a; a++)
		this.k[a] = new Qg
}
aa = rh.prototype;
aa.j = function() {
	this.index = 0
}
;
aa.add = function(a, b, c, d, e) {
	1E3 != this.index && (a = K(a, 16, 495),
	b = K(b, 8, 247),
	Rg(this.a[this.index], a, b),
	Rg(this.k[this.index], c, -2),
	0 != c && (this.k[this.index].x += N(-0.2, 0.2),
	this.k[this.index].y += N(-0.2, 0.2)),
	this.value[this.index] = d,
	this.G[this.index] = e,
	this.count[this.index] = 0,
	this.index++)
}
;
aa.sub = function(a) {
	this.a[a].set(this.a[this.index - 1]);
	this.k[a].set(this.k[this.index - 1]);
	this.value[a] = this.value[this.index - 1];
	this.G[a] = this.G[this.index - 1];
	this.count[a] = this.count[this.index - 1];
	this.index--
}
;
aa.move = function() {
	var a;
	for (a = 0; a < this.index; a++) {
		if (0 == this.k[a].x) {
			var b = this.a[a],
				c = this.k[a];
			c.y += 0;
			Tg(c, 0.96)
		} else
			b = this.a[a],
			c = this.k[a],
			c.y += 0.05,
			Tg(c, 0.99);
		b.add(c);
		this.a[a].x = K(this.a[a].x, 16, 495);
		this.a[a].y = K(this.a[a].y, 8, 247);
		this.count[a]++;
		100 <= this.count[a] && this.sub(a--)
	}
}
;
aa.b = function() {
	var a, b, c, d, e;
	for (a = 0; a < this.index; a++)
		b = this.G[a] >> 16 & 255,
		c = this.G[a] >> 8 & 255,
		d = this.G[a] & 255,
		e = floor(255 * (50 > 100 - this.count[a] ? 100 - this.count[a] : 50) / 50),
		Gf(kf, floor(this.a[a].x), floor(this.a[a].y), "" + this.value[a], b, c, d, e, 0, 0, 0, e, 5, 7)
}
;
var pe = new sh;

function sh() {
	var a;
	this.a = Array(100);
	this.k = Array(100);
	this.item = new Int32Array(100);
	this.value = new Int32Array(100);
	this.da = new Int32Array(100);
	this.count = new Int32Array(100);
	for (a = this.J = this.index = 0; 100 > a; a++)
		this.a[a] = new Qg;
	for (a = 0; 100 > a; a++)
		this.k[a] = new Qg
}
aa = sh.prototype;
aa.j = function() {
	this.J = this.index = 0
}
;
aa.add = function(a, b, c, d, e) {
	if (100 != this.index)
		for (a = K(a, 16, 495),
		b = K(b, 8, 247),
		Rg(this.a[this.index], a, b),
		this.k[this.index].x = cg < a ? N(-0.5, -1) : N(0.5, 1),
		this.k[this.index].y = N(-1, -2),
		this.item[this.index] = c,
		this.value[this.index] = d,
		this.da[this.index] = e,
		this.count[this.index] = 0,
		this.index++,
		c = this.J = 0; c < this.index; c++)
			this.J += 7 * this.item[c] + 3 * this.value[c] + 11 * this.da[c]
}
;
aa.sub = function(a) {
	this.a[a].set(this.a[this.index - 1]);
	this.k[a].set(this.k[this.index - 1]);
	this.item[a] = this.item[this.index - 1];
	this.value[a] = this.value[this.index - 1];
	this.da[a] = this.da[this.index - 1];
	this.count[a] = this.count[this.index - 1];
	this.index--;
	for (a = this.J = 0; a < this.index; a++)
		this.J += 7 * this.item[a] + 3 * this.value[a] + 11 * this.da[a]
}
;
aa.move = function() {
	var a, b;
	for (a = b = 0; a < this.index; a++)
		b += 7 * this.item[a] + 3 * this.value[a] + 11 * this.da[a];
	this.J != b && (C = null);
	for (a = 0; a < this.index; a++) {
		this.k[a].y += 0.04;
		Tg(this.k[a], 0.98);
		var c, d;
		b = K(this.a[a].y + this.k[a].y, 8, 247);
		c = floor(this.a[a].x / 8);
		d = floor(b / 8);
		c = I.e[d][c];
		0 <= c && 8 >= c || (this.a[a].y = b);
		b = K(this.a[a].x + this.k[a].x, 16, 495);
		c = floor(b / 8);
		d = floor(this.a[a].y / 8);
		c = I.e[d][c];
		0 <= c && 8 >= c || (this.a[a].x = b);
		if (100 > this.count[a])
			this.count[a]++;
		else if (b = v.m(this.a[a].x - 12, this.a[a].y - 6 - 12, this.a[a].x + 12, this.a[a].y - 6 + 12, 0),
		-1 != b) {
			Ne();
			if (1 == this.item[a])
				MONEY = K(MONEY + this.value[a], 0, 9999999),
				ne.add(this.a[a].x, this.a[a].y, 0, this.value[a], 16776960);
			else if (2 == this.item[a]) {
				for (c = 0; 4 > c; c++)
					0 != v.search[c] && floor(100 * p[b] / kc[b]) > floor(100 * p[c] / kc[c]) && (b = c);
				if (p[b] == kc[b])
					continue;
				Ne();
				p[b] = K(p[b] + floor(kc[b] / 5), 0, kc[b]);
				te();
				ne.add(this.a[a].x, this.a[a].y, 0, floor(kc[b] / 5), 65280)
			} else {
				for (b = Fc; b < Gc; b++)
					if (0 == q[b]) {
						q[b] = this.item[a];
						Dc[b] = this.value[a];
						Ec[b] = this.da[a];
						break
					}
				if (b == Gc) {
					this.k[a].x = N(-1, 1);
					this.k[a].y = N(-1, -2);
					this.count[a] = 0;
					continue
				}
			}
			te();
			this.sub(a--)
		}
	}
}
;
aa.b = function() {
	var a;
	dg = 2;
	for (a = 0; a < this.index; a++)
		100 != this.count[a] && 0 == (this.count[a] & 6) || eg(Ra, floor(this.a[a].x) - 6, floor(this.a[a].y) - 12, 12, 12, 12 * w(this.item[a], Pc), 0, 12, 12, w(this.item[a], Sc));
	dg = 0
}
;
var I = new th;

function th() {
	this.i = 64;
	this.s = 48;
	this.e = Array(this.s);
	this.o = new Int32Array(this.i);
	this.I = new Int32Array(this.i);
	this.$ = new Int32Array(this.i);
	this.hb = new Int32Array(this.i);
	this.gb = new Int32Array(48 * this.s);
	this.w = this.ab = 0;
	this.cb = -1;
	for (var a = 0; a < this.s; a++)
		this.e[a] = new Int32Array(this.i)
}
th.prototype.j = function(a) {
	var b, c;
	this.w = a;
	this.cb != Me[this.w][nb][1] && (this.cb = Me[this.w][nb][1],
	Na = new wa,
	Na.j("st" + this.cb + ".gif"));
	mf(Na);
	if (0 != nf)
		return !1;
	this.s = Na.s;
	for (c = 0; c < this.s; c++)
		for (b = 0; b < this.i; b++)
			this.e[c][b] = -1;
	var d = floor(A(Na.i - 64));
	for (c = 0; c < this.s; c++)
		for (b = 0; b < this.i; b++) {
			a = c * Na.i + K(b, 3, 60) + d;
			var e = Na.f[3 >= b || this.i - 3 <= b ? a : a - 1],
				g = Na.f[2 >= b || this.i - 4 <= b ? a : a + 1],
				k = Na.f[0 == c ? a : a - Na.i],
				r = Na.f[c == this.s - 1 ? a : a + Na.i];
			0 == Na.f[a] ? 0 != e && 0 == g && 0 != k && 0 == r ? this.e[c][b] = 0 : 0 == e && 0 == g && 0 != k && 0 == r ? this.e[c][b] = 1 : 0 == e && 0 != g && 0 != k && 0 == r ? this.e[c][b] = 2 : 0 != e && 0 == g && 0 == k && 0 == r ? this.e[c][b] = 3 : 0 == e && 0 == g && 0 == k && 0 == r ? this.e[c][b] = 4 : 0 == e && 0 != g && 0 == k && 0 == r ? this.e[c][b] = 5 : 0 != e && 0 == g && 0 == k && 0 != r ? this.e[c][b] = 6 : 0 == e && 0 == g && 0 == k && 0 != r ? this.e[c][b] = 7 : 0 == e && 0 != g && 0 == k && 0 != r && (this.e[c][b] = 8) : 255 == Na.f[a] && (this.e[c][b] = 9)
		}
	for (b = 0; b < this.i; b++)
		for (c = this.s - 1; 0 <= c; c--)
			if (0 > this.e[c][b] || 8 < this.e[c][b]) {
				this.o[b] = c;
				break
			}
	for (b = 0; b < this.i; b++)
		for (c = 1; c < this.s; c++)
			if ((0 > this.e[c - 1][b] || 8 < this.e[c - 1][b]) && 0 <= this.e[c][b] && 8 >= this.e[c][b]) {
				this.I[b] = c - 1;
				break
			}
	for (b = 0; b < this.i; b++)
		for (c = 0; c < this.s; c++)
			if (0 > this.e[c][b] || 8 < this.e[c][b]) {
				this.$[b] = c;
				break
			}
	for (b = 0; b < this.i; b++)
		for (this.hb[b] = this.$[b],
		c = 1; c < this.s; c++)
			if ((0 > this.e[c - 1][b] || 8 < this.e[c - 1][b]) && 0 <= this.e[c][b] && 9 >= this.e[c][b]) {
				this.hb[b] = c - 1;
				break
			}
	this.ab = 0;
	for (b = 12; 60 > b; b++)
		for (c = 1; c < this.s - 1; c++)
			9 == this.e[c - 1][b] && 9 == this.e[c][b] && (this.gb[this.ab++] = c * this.i + b);
	if (0 == nb) {
		for (a = 0; a < ea * fa; a++)
			Ma.f[a] = 0;
		b = C;
		switch (this.w) {
		case 15:
		case 16:
		case 30:
		case 31:
		case 32:
		case 33:
		case 66:
		case 67:
		case 68:
		case 69:
			Xf = 1;
			dg = 3;
			C = Ma.f;
			for (a = 0; a < ea * fa; a++)
				C[a] = 0;
			for (a = 0; 100 > a; a++)
				c = N(1.7, 3.69),
				c *= c * c * c,
				J(Za, floor(N(0, 512)), floor(256 - c), 256, 32, 96, 0, 16, 16, 419430399);
			C = b;
			Xf = dg = 0
		}
	}
	return !0
}
;
th.prototype.b = function() {
	var a, b, c = new Int32Array([0, 8, 16, 0, 8, 16, 0, 8, 16]), d = new Int32Array([0, 0, 0, 8, 8, 8, 16, 16, 16]), e = Pa[Me[this.w][nb][0]];
	for (b = 0; b < this.s; b++)
		for (a = 0; a < this.i; a++) {
			var g = this.e[b][a];
			-1 != g && (9 == g ? 82 == this.w ? -1 == this.e[b - 1][a] ? ag(gb, 8 * a, 8 * b, 8, 8, 0, 0, 8, 8) : Og(8 * a - 4, 8 * b, 16, 8, 5570560) : -1 == this.e[b - 1][a] ? ag(fb, 8 * a, 8 * b, 8, 8, 0, 0, 8, 8) : Og(8 * a - 4, 8 * b, 16, 8, 21916) : ag(e, 8 * a, 8 * b, 8, 8, c[g], d[g], 8, 8))
		}
}
;
var qe = new uh;

function uh() {
	this.i = 78;
	this.s = 16;
	this.t = 0;
	this.e = Array(this.s);
	this.W = Array(this.s);
	for (var a = 0; a < this.s; a++)
		this.e[a] = new Int32Array(this.i),
		this.W[a] = new Int32Array(this.i)
}
uh.prototype.j = function() {
	var a, b, c;
	for (c = 0; c < this.s; c++)
		for (b = 0; b < this.i; b++)
			this.e[c][b] = -1;
	for (c = 0; c < this.s; c++)
		for (b = 0; b < this.i; b++) {
			a = c * ib.i + b;
			var d = 0 == b ? 0 : -1,
				e = b == this.i - 1 ? 0 : 1,
				g = 0 == c ? 0 : -this.i,
				k = c == this.s - 1 ? 0 : this.i,
				r = ib.f[a + d + g],
				m = ib.f[a + g],
				g = ib.f[a + e + g],
				n = ib.f[a + d],
				F = ib.f[a + e],
				d = ib.f[a + d + k],
				H = ib.f[a + k],
				e = ib.f[a + e + k];
			65535 == kb.f[a] ? this.e[c][b] = 15 : 6684672 == kb.f[a] ? this.e[c][b] = 17 : 0 != ib.f[a] && (13209 == ib.f[a] ? this.e[c][b] = 13 : 16764006 == kb.f[a] ? this.e[c][b] = 14 : 6710886 == kb.f[a] ? this.e[c][b] = 16 : (a = ib.f[a],
			m >= a && n >= a && F >= a && H >= a && e < a ? this.e[c][b] = 3 : m >= a && n >= a && F >= a && H >= a && d < a ? this.e[c][b] = 4 : m >= a && n >= a && F >= a && H >= a && g < a ? this.e[c][b] = 8 : m >= a && n >= a && F >= a && H >= a && r < a ? this.e[c][b] = 9 : n < a && F >= a && m < a && H >= a ? this.e[c][b] = 0 : n >= a && F >= a && m < a && H >= a ? this.e[c][b] = 1 : n >= a && F < a && m < a && H >= a ? this.e[c][b] = 2 : n < a && F >= a && m >= a && H >= a ? this.e[c][b] = 5 : n >= a && F < a && m >= a && H >= a ? this.e[c][b] = 7 : n < a && F >= a && m >= a && H < a ? this.e[c][b] = 10 : n >= a && F >= a && m >= a && H < a ? this.e[c][b] = 11 : n >= a && F < a && m >= a && H < a && (this.e[c][b] = 12)))
		}
	for (c = 0; c < this.s; c++)
		for (b = 0; b < this.i; b++)
			a = c * kb.i + b,
			this.W[c][b] = -1,
			26112 == kb.f[a] ? this.W[c][b] = 0 : 10066329 == kb.f[a] ? this.W[c][b] = 1 : 8404992 == kb.f[a] ? this.W[c][b] = 2 : 13434879 == kb.f[a] ? this.W[c][b] = 5 : 12288 == kb.f[a] && (this.W[c][b] = 6)
}
;
uh.prototype.b = function() {
	var a, b, c, d, e = new Qg, g = new Qg;
	20 > cg && 256 > fg ? this.t = K(this.t + 4, -720, 0) : 492 < cg && 256 > fg && (this.t = K(this.t - 4, -720, 0));
	for (d = 0; d < this.s; d++)
		for (b = 0; b < this.i; b++)
			-1 != this.e[d][b] && ag(jb, this.t + 16 * b, 16 * d, 16, 16, this.e[d][b] % 5 * 16, 16 * floor(this.e[d][b] / 5), 16, 16);
	for (a = 0; a < ze; a++)
		if (0 != (Ae[a] & Be))
			for (b = 3; 4 >= b; b++)
				if (!(0 >= De[a][b]) && 32 != a && 70 != a && 88 != a)
					for (e.x = 8 * De[a][0],
					e.y = 8 * De[a][1],
					g.x = 8 * (De[De[a][b]][0] - De[a][0]),
					g.y = 8 * (De[De[a][b]][1] - De[a][1]),
					d = Xg(g) / 8 - 1,
					Tg(g, 8),
					e.add(g),
					c = 0; c < d; c++)
						Hf(this.t + e.x, e.y, 2, 2, 13421772),
						e.add(g);
	for (d = 0; d < this.s; d++)
		for (b = 0; b < this.i; b++)
			-1 != this.W[d][b] && ag(lb, this.t + 16 * b + 8, 16 * d + 8, 16, 16, 16 * this.W[d][b], 0, 16, 16);
	eg(lb, this.t + 384 - 8, 124, 16, 16, 16, 0, 16, 16, 8421631);
	eg(lb, this.t + 504 - 8, 116, 16, 16, 48, 0, 16, 16, 16777215);
	eg(lb, this.t + 552 - 8, 116, 16, 16, 64, 0, 16, 16, 16777215);
	eg(lb, this.t + 592 - 8, 100, 16, 16, 32, 0, 16, 16, 16777215);
	eg(lb, this.t + 672 - 8, 68, 16, 16, 32, 0, 16, 16, 16777215);
	eg(lb, this.t + 808 - 8, 132, 16, 16, 16, 0, 16, 16, 13434879);
	eg(lb, this.t + 904 - 8, 164, 16, 16, 112, 0, 16, 16, 13434879);
	eg(lb, this.t + 1040 - 8, 172, 16, 16, 128, 0, 16, 16, 13434879);
	eg(lb, this.t + 1088 - 8, 100, 16, 16, 32, 0, 16, 16, 16777215);
	eg(lb, this.t + 1160 - 8, 84, 16, 16, 32, 0, 16, 16, 16777215);
	eg(lb, this.t + 1112 - 8, 44, 32, 16, 144, 0, 32, 16, 16777215);
	for (a = 0; a < ze; a++)
		0 != Ae[a] && (b = 8 * De[a][0],
		d = 8 * De[a][1],
		c = 0 == a || 20 == a || 47 == a || 77 == a ? 16777215 : 33 == a ? 0 : 71 == a ? 0 : 0 != (Ae[a] & Be) ? 10027008 : 13421568,
		0 == De[a][2] && Hf(this.t + b, d, 6, 6, c),
		c = 71 == a ? 3 : 24,
		Df(this.t + b, d, c, c) && If(this.t + b, d, c, c, 13369344));
	b = 8 * De[h][0];
	d = 8 * De[h][1];
	ag(Qa, this.t + b + 1 - 12, d - 14 - 11, 24, 22, 0, 0, 24, 22);
	for (a = 0; a < ze; a++)
		0 != Ae[a] && (b = 8 * De[a][0],
		d = 8 * De[a][1],
		c = 71 == a ? 3 : 24,
		Df(this.t + b, d, c, c)) && (!Ef || 0 != a && 20 != a && 47 != a && 70 != a && 77 != a ? Ef && 0 != a && (h = a,
		nb = 0,
		f = 10) : (h = a,
		nb = 1,
		f = 50),
		b = K(cg, 1 + 4 * Uf[a].length, 510 - 4 * Uf[a].length),
		d = K(fg - 24, 8, 256),
		yf(D, b, d, Uf[a], 16777215, 5263440));
	a = D;
	a.Q = 4;
	yf(a, 256, 16, "WORLD MAP", -1, 13158600);
	a.Q = 0;
	0 > this.t && yf(D, 12, 16, "<<", 13158600, 5263440);
	-720 < this.t && yf(D, 500, 16, ">>", 13158600, 5263440)
}
;
var vh = document,
	We = vh.getElementById("cv"),
	wh = We.getContext("2d"),
	xh = wh.createImageData(ea, fa),
	gf = new Uint8Array(xh.data.buffer),
	yh = da.console,
	zg = String.fromCharCode,
	of = setTimeout,
	zh = location.hostname;
da.fff = Ah;

function Ah(a, b, c) {
	try {
		We = vh.getElementById("cv"),
		wh = We.getContext("2d"),
		wh.putImageData(a, b, c)
	} catch (d) {}
}
da.fff = Ue;

function Ue(a) {
	try {
		yh.log(a)
	} catch (b) {}
}
da.Init = Te;
var Hg = zg(40, 67, 41, 32, 50, 48, 48, 56, 32, 104, 97, 53, 53, 105, 105, 32, 68, 65, 78, 45, 66, 65, 76, 76, 46, 106, 112),
	Ve = zg(67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 40, 67, 41, 32, 50, 48, 48, 56, 32, 104, 97, 53, 53, 105, 105, 32, 68, 65, 78, 45, 66, 65, 76, 76, 46, 106, 112),
	Bh = zg(46, 47, 100, 97, 116, 97, 47),
	Af = zg(102, 112, 115),
	Ch = zg(99, 97, 110, 118, 97, 115),
	Dh = zg(50, 100),
	Eh = 0,
	Fh = zg(100, 97, 110, 45, 98, 97, 108, 108, 46, 106, 112),
	C = new Int32Array(ea * fa),
	jh = new Int32Array(fa),
	kh = new Int32Array(fa),
	nh = new Float32Array(fa),
	mh = new Float32Array(fa),
	ph = new Float32Array(fa),
	oh = new Float32Array(fa);

function rf() {
	if (Gh) {
		Gh(rf);
		Hh++;
		Ih = Date.now();
		var a = floor(60 * (Ih - Jh) / 1E3 + 0.5);
		if (0 > a || 60 <= a)
			Hh = 0,
			zf = Kh,
			Kh = 0,
			Bf = floor((2 * Bf + Lh) / 3),
			Lh = 0,
			Jh = Ih,
			a = 0;
		else if (a == Mh)
			return;
		Kh++;
		Mh = a
	}
	Ef = !1 == Ug && !0 == Nh;
	xg = !0 == Ug && !1 == Nh;
	Oh = !0 == Ph && !1 == Qh;
	Ug = Nh;
	Ph = Qh;
	Lg = !(xg | Ug | Oh | Ph);
	$f = xg ? 1 : Oh ? -1 : 0;
	cg = Rh;
	fg = Sh;
	for (a = 0; 256 > a; a++)
		Ze[a] = $e[a],
		$e[a] = !1;
	ef = ef + floor(1024 * Math.random()) & 1023;
	ff = floor(512 * Math.random()) | 1;
	sf();
	var b, c = 11 == Eh ? ea * fa : 0;
	for (b = a = 0; a < c; a++)
		gf[b++] = C[a] >> 16 & 255,
		gf[b++] = C[a] >> 8 & 255,
		gf[b++] = C[a] & 255,
		b++;
	Ah(xh, 0, 0);
	Gh ? Lh += Date.now() - Ih : of(rf, pf())
}
var tf = 1;

function lf() {
	if (zh.length != Fh.length)
		return !0;
	for (tf = 0; Eh < zh.length; Eh++)
		if (zh[Eh] != Fh[Eh])
			return !0;
	return !1
}
var Gh = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
	Hh = 0,
	Mh = 0,
	Kh = 0,
	zf = 0,
	Lh = 0,
	Bf = 0,
	Th = 20,
	Ih = Date.now(),
	Jh = Ih,
	Uh = Ih + Th,
	Vh = Ih,
	Ig = 0;

function pf() {
	Ih = Date.now();
	var a = K(Uh - Ih, 5, Th);
	Kh++;
	Ig++;
	Lh += a;
	Uh += Th;
	if (Ih + a >= Vh || Ih < Jh)
		Bf = Bf + Lh >> 1,
		Lh = 0,
		zf = Kh,
		Kh = 0,
		Uh = Ih + Th,
		Vh = Ih + 1E3;
	Jh = Ih;
	return a
}
var nf = 0;

function wa() {
	this.Z = 0;
	this.file = "";
	this.ib = this.ca = this.Xa = this.ITEMS_MAYBE = this.d = this.f = this.shift = this.s = this.i = 0
}

function qf(a, b, c) {
	a.i = b;
	a.s = c;
	for (b = a.shift = 0; 16 > b; b++)
		1 << b == a.i && (a.shift = b);
	a.f = new Int32Array(a.i * a.s)
}
wa.prototype.j = function(a) {
	this.file != a && (nf++,
	this.file = a,
	this.Z = new Image,
	this.Z.src = Bh + a + "?18.9",
	delete this.f,
	this.d = this.f = 0)
}
;

function mf(a) {
	if (0 == a.d && a.Z.complete) {
		nf--;
		var b = a.Z.width,
			c = a.Z.height;
		if (0 == b || 0 == c)
			throw delete a.Z,
			a.file = "",
			Wh;
		var d = vh.createElement(Ch);
		d.width = b;
		d.height = c;
		d = d.getContext(Dh);
		d.drawImage(a.Z, 0, 0);
		d = d.getImageData(0, 0, b, c).data;
		qf(a, b, c);
		b = 0;
		for (c = d.length; b < c; b += 4)
			a.f[b >> 2] = 0 == d[b + 3] ? -1 : d[b + 0] << 16 | d[b + 1] << 8 | d[b + 2];
		delete a.Z;
		a.d = 1
	}
}

function vg(a, b) {
	0 == a.d && (a.d = 1,
	qf(a, ea, 16),
	a.Xa = vh.createElement(Ch),
	a.Xa.width = a.i,
	a.Xa.height = a.s,
	a.ca = a.Xa.getContext(Dh));
	var c = b + "sans-serif014";
	if (a.ib != c) {
		a.ib = c;
		a.ca.fillStyle = "#000000";
		a.ca.fillRect(0, 0, a.i, a.s);
		c = "14px sans-serif";
		a.ca.font = c;
		a.ca.fillStyle = "#ffffff";
		a.ca.fillText(b, 0, 14);
		for (var d = a.ca.getImageData(0, 0, a.i, a.s).data, c = 0, e = d.length; c < e; c += 4)
			a.f[c >> 2] = 1 <= d[c + 0] ? 16777215 : -1;
		for (c = d = a.ITEMS_MAYBE = 0; d < a.s; d++)
			for (e = 0; e < a.i; e++,
			c++)
				16777215 == a.f[c] && a.ITEMS_MAYBE <= e && (a.ITEMS_MAYBE = e + 1)
	}
}
var Xh = [[0, 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]],
	Yh = [[0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]],
	D = new Zh,
	kf = new Zh;

function Zh() {
	this.N = new wa;
	this.P = this.Q = this.$a = this.R = 0
}
Zh.prototype.j = function(a, b, c) {
	this.N.j(a);
	this.R = b;
	this.$a = c;
	this.P = this.Q = 0
}
;
Zh.prototype.b = function(a, b, c, d, e) {
	var g, k, r, m, n, F, H, M = ea - this.R, E = this.N.i - this.R, la = -1 < d ? 16777215 : 1, Ja = -1 < e ? 0 : 1, Ea = c.length;
	for (g = 0; g < Ea; g++,
	a += this.R + this.Q)
		if (n = c.charCodeAt(g) - 32,
		0 != n) {
			96 <= n && (n = 31);
			0 != this.P && (a -= Xh[this.P - 1][n]);
			F = n * this.R;
			m = b * ea + a;
			for (r = 0; r < this.$a; r++,
			m += M,
			F += E)
				for (k = 0; k < this.R; k++,
				m++,
				F++)
					H = this.N.f[F],
					H == la ? C[m] = d : H == Ja && (C[m] = e);
			0 != this.P && (a -= Yh[this.P - 1][n])
		}
	this.P = 0
}
;

function yf(a, b, c, d, e, g) {
	b -= d.length * (a.R + a.Q) >> 1;
	c -= a.$a >> 1;
	a.b(b, c, d, e, g)
}

function hg(a, b, c, d, e, g) {
	var k = D;
	k.Q = g;
	k.b(a, b, c, d, e);
	k.Q = 0
}
Zh.prototype.M = function(a, b, c, d, e, g, k, r, m, n, F, H, M) {
	d = d * k >> 8;
	e = e * k >> 8;
	g = g * k >> 8;
	k = 255 - k;
	r = r * F >> 8;
	m = m * F >> 8;
	n = n * F >> 8;
	F = 255 - F;
	var E, la, Ja, Ea, Ca, Z, X, $, ob, pb = ea - H, Wa = 255 != k ? 16777215 : 1, ta = 255 != F ? 0 : 1, ya = c.length;
	for (E = 0; E < ya; E++,
	a += H + this.Q)
		if (Ca = c.charCodeAt(E) - 32,
		0 != Ca) {
			96 <= Ca && (Ca = 31);
			0 != this.P && (a -= floor(Xh[this.P - 1][Ca] * H / this.R));
			Z = Ca * this.R;
			Ea = b * ea + a;
			for (Ja = 0; Ja < M; Ja++,
			Ea += pb)
				for ($ = floor(Ja * this.$a / M) * this.N.i + Z << 8,
				ob = floor((this.R << 8) / H),
				la = 0; la < H; la++,
				Ea++,
				$ += ob)
					X = this.N.f[$ >> 8],
					X == Wa ? (X = C[Ea],
					C[Ea] = d + ((X >> 16 & 255) * k >> 8) << 16 | e + ((X >> 8 & 255) * k >> 8) << 8 | g + ((X & 255) * k >> 8)) : X == ta && (X = C[Ea],
					C[Ea] = r + ((X >> 16 & 255) * F >> 8) << 16 | m + ((X >> 8 & 255) * F >> 8) << 8 | n + ((X & 255) * F >> 8));
			0 != this.P && (a -= floor(Yh[this.P - 1][Ca] * H / this.R))
		}
	this.P = 0
}
;

function Gf(a, b, c, d, e, g, k, r, m, n, F, H, M, E) {
	b -= d.length * (M + a.Q) >> 1;
	a.M(b, c - (E >> 1), d, e, g, k, r, m, n, F, H, M, E)
}

function Vf(a) {
	var b, c, d, e, g;
	b = 0 * ea;
	for (c = 384 * ea; b < c; b++)
		d = C[b] >> 16 & 255,
		e = ((0 - d) * a >> 8) + d,
		d = C[b] >> 8 & 255,
		g = ((0 - d) * a >> 8) + d,
		d = C[b] & 255,
		d = ((0 - d) * a >> 8) + d,
		C[b] = e << 16 | g << 8 | d
}
var Xf = 0;

function qh(a, b, c) {
	var d = Xf,
		e = 0,
		g = 0,
		k = 0;
	1 == d ? (d = a >> 16 & 255,
	e = (((b >> 16 & 255) - d) * c >> 8) + d,
	d = a >> 8 & 255,
	g = (((b >> 8 & 255) - d) * c >> 8) + d,
	d = a & 255,
	k = (((b & 255) - d) * c >> 8) + d) : 2 == d ? (e = ((b >> 16 & 255) * c >> 8) + (a >> 16 & 255),
	255 < e && (e = 255),
	g = ((b >> 8 & 255) * c >> 8) + (a >> 8 & 255),
	255 < g && (g = 255),
	k = ((b & 255) * c >> 8) + (a & 255),
	255 < k && (k = 255)) : 3 == d ? (e = (a >> 16 & 255) - ((b >> 16 & 255) * c >> 8),
	0 > e && (e = 0),
	g = (a >> 8 & 255) - ((b >> 8 & 255) * c >> 8),
	0 > g && (g = 0),
	k = (a & 255) - ((b & 255) * c >> 8),
	0 > k && (k = 0)) : 4 == d ? (e = (b >> 16 & 255) * (a >> 16 & 255) >> 8,
	g = (b >> 8 & 255) * (a >> 8 & 255) >> 8,
	k = (b & 255) * (a & 255) >> 8) : 5 == d ? (d = a >> 16 & 255,
	e = d + ((b >> 16 & 255) * d * c >> 16),
	255 < e && (e = 255),
	d = a >> 8 & 255,
	g = d + ((b >> 8 & 255) * d * c >> 16),
	255 < g && (g = 255),
	d = a & 255,
	k = d + ((b & 255) * d * c >> 16),
	255 < k && (k = 255)) : 6 == d && (d = a >> 16 & 255,
	e = d + (c - (2 * d * c >> 8)),
	d = a >> 8 & 255,
	g = d + (c - (2 * d * c >> 8)),
	d = a & 255,
	k = d + (c - (2 * d * c >> 8)));
	return e << 16 | g << 8 | k
}
var dg = 0;

function L(a, b, c, d, e) {
	c -= a;
	d -= b;
	var g, k;
	Kg(c) >= Kg(d) ? (k = floor(Kg(c)),
	0 != k && (d = floor(65536 * d / k)),
	c = 0 <= c ? 65536 : -65536) : (k = floor(Kg(d)),
	0 != k && (c = floor(65536 * c / k)),
	d = 0 <= d ? 65536 : -65536);
	a = floor(65536 * a) + 32768;
	for (b = floor(65536 * b) + 32768; 0 <= k; k--,
	a += c,
	b += d)
		0 > a || ea <= a >> 16 || 0 > b || fa <= b >> 16 || (g = (b >> 16) * ea + (a >> 16),
		C[g] = 0 == Xf ? e : qh(C[g], e, e >> 24 & 255))
}

function bg(a, b, c, d, e) {
	c--;
	d--;
	L(a, b, a + c, b, e);
	L(a, b + d, a + c, b + d, e);
	L(a, b, a, b + d, e);
	L(a + c, b, a + c, b + d, e)
}

function If(a, b, c, d, e) {
	bg(a - (c >> 1), b - (d >> 1), c, d, e)
}

function V(a, b, c, d, e) {
	var g;
	c = a + c > ea ? ea : ~~(a + c);
	d = b + d > fa ? fa : ~~(b + d);
	a = 0 > a ? 0 : ~~a;
	b = (0 > b ? 0 : ~~b) * ea + a;
	g = ea - (c - a);
	c = b + c - a;
	d *= ea;
	if (0 == Xf)
		for (; b < d; b += g,
		c += ea)
			for (; b < c; b++)
				C[b] = e;
	else
		for (; b < d; b += g,
		c += ea)
			for (; b < c; b++)
				C[b] = qh(C[b], e, e >> 24 & 255)
}

function Hf(a, b, c, d, e) {
	V(a - (c >> 1), b - (d >> 1), c, d, e)
}

function ag(a, b, c, d, e, g, k, r, m) {
	var n, F;
	if (0 != d && 0 != e)
		for (r = ~~((r << 8) / d),
		m = ~~((m << 8) / e),
		g <<= 8,
		k <<= 8,
		0 > b && (g += r * -b),
		0 > c && (k += m * -c),
		d = b + d > ea ? ea : ~~(b + d),
		e = c + e > fa ? fa : ~~(c + e),
		b = 0 > b ? 0 : ~~b,
		c = (0 > c ? 0 : ~~c) * ea + b,
		n = ea - (d - b),
		d = c + d - b,
		e *= ea; c < e; c += n,
		d += ea,
		k += m)
			for (b = ((k >> 8) * a.i << 8) + g; c < d; c++,
			b += r)
				F = a.f[b >> 8],
				-1 != F && (C[c] = F)
}

function eg(a, b, c, d, e, g, k, r, m, n) {
	var F, H, M, E;
	if (0 != d && 0 != e) {
		r = floor((r << 8) / d);
		m = floor((m << 8) / e);
		g <<= 8;
		k <<= 8;
		if (0 > b)
			g += r * -b;
		0 > c && (k += m * -c);
		d = b + d > ea ? ea : floor(b + d);
		e = c + e > fa ? fa : floor(c + e);
		b = 0 > b ? 0 : floor(b);
		c = 0 > c ? 0 : floor(c);
		var la = n >> 24 & 255, Ja = n >> 16 & 255, Ea = n >> 8 & 255, Ca = n & 255, Z, X, $;
		if (0 == dg)
			for (; c < e; c++,
			k += m)
				for (H = c * ea + b,
				M = ((k >> 8) * a.i << 8) + g,
				F = b; F < d; F++,
				H++,
				M += r)
					E = a.f[M >> 8],
					-1 != E && (Z = Ja * (E >> 16 & 255) >> 8,
					X = Ea * (E >> 8 & 255) >> 8,
					$ = Ca * (E & 255) >> 8,
					0 == Xf ? C[H] = Z << 16 | X << 8 | $ : 1 == Xf ? (E = C[H] >> 16 & 255,
					Z = ((Z - E) * la >> 8) + E,
					E = C[H] >> 8 & 255,
					X = ((X - E) * la >> 8) + E,
					E = C[H] & 255,
					$ = (($ - E) * la >> 8) + E,
					C[H] = Z << 16 | X << 8 | $) : 2 == Xf ? (Z = (Z * la >> 8) + (C[H] >> 16 & 255),
					255 < Z && (Z = 255),
					X = (X * la >> 8) + (C[H] >> 8 & 255),
					255 < X && (X = 255),
					$ = ($ * la >> 8) + (C[H] & 255),
					255 < $ && ($ = 255),
					C[H] = Z << 16 | X << 8 | $) : 5 == Xf && (E = C[H] >> 16 & 255,
					Z = E + (Z * E * la >> 16),
					255 < Z && (Z = 255),
					E = C[H] >> 8 & 255,
					X = E + (X * E * la >> 16),
					255 < X && (X = 255),
					E = C[H] & 255,
					$ = E + ($ * E * la >> 16),
					255 < $ && ($ = 255),
					C[H] = Z << 16 | X << 8 | $));
		else if (1 == dg)
			for (; c < e; c++,
			k += m)
				for (H = c * ea + b,
				M = ((k >> 8) * a.i << 8) + g,
				F = b; F < d; F++,
				H++,
				M += r)
					E = la * (a.f[M >> 8] & 255) >> 8,
					0 != E && (1 == Xf ? (Z = C[H] >> 16 & 255,
					Z = ((Ja - Z) * E >> 8) + Z,
					X = C[H] >> 8 & 255,
					X = ((Ea - X) * E >> 8) + X,
					$ = C[H] & 255,
					$ = ((Ca - $) * E >> 8) + $,
					C[H] = Z << 16 | X << 8 | $) : 2 == Xf ? (Z = (C[H] >> 16 & 255) + (Ja * E >> 8),
					255 < Z && (Z = 255),
					X = (C[H] >> 8 & 255) + (Ea * E >> 8),
					255 < X && (X = 255),
					$ = (C[H] & 255) + (Ca * E >> 8),
					255 < $ && ($ = 255),
					C[H] = Z << 16 | X << 8 | $) : 3 == Xf ? (Z = (C[H] >> 16 & 255) - E,
					0 > Z && (Z = 0),
					X = (C[H] >> 8 & 255) - E,
					0 > X && (X = 0),
					$ = (C[H] & 255) - E,
					0 > $ && ($ = 0),
					C[H] = Z << 16 | X << 8 | $) : C[H] = qh(C[H], n, E));
		else if (2 == dg)
			for (; c < e; c++,
			k += m)
				for (H = c * ea + b,
				M = ((k >> 8) * a.i << 8) + g,
				F = b; F < d; F++,
				H++,
				M += r)
					E = a.f[M >> 8],
					0 != E && (Z = E >> 16 & 255,
					X = E >> 8 & 255,
					$ = E & 255,
					C[H] = Z == X && X == $ ? Ja * Z >> 8 << 16 | Ea * X >> 8 << 8 | Ca * $ >> 8 : Z << 16 | X << 8 | $);
		else if (3 == dg)
			for (; c < e; c++,
			k += m)
				for (H = c * ea + b,
				M = ((k >> 8) * a.i << 8) + g,
				F = b; F < d; F++,
				H++,
				M += r)
					E = la * (a.f[M >> 8] & 255) >> 8,
					0 != E && (1 == Xf ? C[H] = ((255 - C[H]) * E >> 8) + C[H] : 2 == Xf ? (Z = (C[H] >> 16 & 255) + (Ja * E >> 8),
					255 < Z && (Z = 255),
					X = (C[H] >> 8 & 255) + (Ea * E >> 8),
					255 < X && (X = 255),
					$ = (C[H] & 255) + (Ca * E >> 8),
					255 < $ && ($ = 255),
					C[H] = Z << 16 | X << 8 | $) : 3 == Xf && (E = C[H] - E,
					0 > E && (E = 0),
					C[H] = E))
	}
}

function J(a, b, c, d, e, g, k, r, m, n) {
	eg(a, b - (d >> 1), c - (e >> 1), d, e, g, k, r, m, n)
}

function Og(a, b, c, d, e) {
	var g;
	c = a + c > ea ? ea : ~~(a + c);
	d = b + d > fa ? fa : ~~(b + d);
	a = 0 > a ? 0 : ~~a;
	b = (0 > b ? 0 : ~~b) * ea + a;
	g = ea - (c - a);
	c = b + c - a;
	for (d *= ea; b < d; b += g,
	c += ea)
		for (; b < c; b++)
			0 == (C[b] & 16777215) && (C[b] = e)
}

function Yf(a, b, c, d) {
	var e = Qa, g, k, r, m, n, F = 0 > a ? -a : 0, H = a + 24 > ea ? 24 - (a + 24 - ea) : 24, M = b + 24 > fa ? 24 - (b + 24 - fa) : 24;
	for (k = 0 > b ? -b : 0; k < M; k++)
		for (r = (b + k) * ea + (a + F),
		m = (0 + floor(24 * k / 24)) * e.i + c,
		g = F; g < H; g++,
		r++)
			n = m + floor(24 * g / 24),
			16711680 == e.f[n] && (C[r] = d)
}

function lh(a, b, c, d, e, g, k, r) {
	var m = ig(Kg(e - a >> 16), Kg(g - b >> 16)) + 1;
	e = floor((e - a) / m);
	g = floor((g - b) / m);
	k = floor((k - c) / m);
	r = floor((r - d) / m);
	c = floor(c);
	d = floor(d);
	for (var n, F, H = 0; H < m; H++,
	a += e,
	b += g,
	c += k,
	d += r)
		n = a >> 16,
		F = b >> 16,
		0 > F || fa <= F || (jh[F] > n && (jh[F] = n,
		nh[F] = c,
		ph[F] = d),
		kh[F] < n && (kh[F] = n,
		mh[F] = c,
		oh[F] = d))
}
var $h = new Qg;

function Y(a, b, c, d, e) {
	$h.q(a, b);
	c -= Xg($h);
	d *= c;
	e *= c;
	a.x += $h.x * d;
	a.y += $h.y * d;
	b.x -= $h.x * e;
	b.y -= $h.y * e
}

function W(a, b, c, d) {
	$h.q(a, b);
	b.set(a);
	$h.y += c;
	Tg($h, d);
	a.add($h)
}
var Ef = !1,
	xg = !1,
	Ug = !1,
	Nh = !1,
	Oh = !1,
	Ph = !1,
	Qh = !1,
	Lg = !1,
	$f = 0,
	cg = 0,
	fg = 0,
	Rh = 0,
	Sh = 0;

function Wf(a, b, c, d) {
	return cg < a || a + c <= cg || fg < b || b + d <= fg ? !1 : !0
}

function Df(a, b, c, d) {
	return Wf(a - c / 2, b - d / 2, c, d)
}

function ai(a) {
	var b = We.getBoundingClientRect();
	Rh = floor(a.clientX - b.left);
	Sh = floor(a.clientY - b.top)
}
vh.onmousemove = ai;
vh.onmousedown = function(a) {
	ai(a);
	bi = !1;
	if (!(0 > Rh || ea <= Rh || 0 > Sh || fa <= Sh) && (bi = !0,
	0 == a.button && (Nh = !0),
	2 == a.button && (Qh = !0),
	bi))
		return !1
}
;
vh.onmouseup = function(a) {
	ai(a);
	0 == a.button && (Nh = !1);
	2 == a.button && (Qh = !1)
}
;
vh.oncontextmenu = function() {
	if (bi)
		return !1
}
;

function ci(a) {
	for (var b = 0, c = 0, d = We; null !== d; d = d.offsetParent)
		b += d.offsetLeft,
		c += d.offsetTop;
	a = a.touches;
	Rh = floor(a[0].pageX - b);
	Sh = floor(a[0].pageY - c)
}
We.ontouchstart = function(a) {
	ci(a);
	Nh = !0;
	1 < a.touches.length && (Qh = !0);
	return !1
}
;
We.ontouchmove = function(a) {
	ci(a);
	return !1
}
;
We.ontouchend = function(a) {
	1 > a.touches.length && (Nh = !1);
	return Qh = !1
}
;
We.ontouchcancel = function() {
	Qh = Nh = !1
}
;
var Ze = Array(256),
	$e = Array(256),
	af = Array(256),
	bf = Array(256),
	cf = Array(256);
vh.onkeydown = function(a) {
	var b = a.keyCode;
	65 <= b & 90 >= b ? a.shiftKey || (b += 32) : b = a.shiftKey ? cf[b] : bf[b];
	0 <= b && 256 > b && (af[b] = !0,
	$e[b] = !0);
	if (0 != b && bi)
		return !1
}
;
vh.onkeyup = function(a) {
	var b = a.keyCode;
	65 <= b & 90 >= b ? a.shiftKey || (b += 32) : b = a.shiftKey ? cf[b] : bf[b];
	0 <= b && 256 > b && (af[b] = !1);
	if (0 != b && bi)
		return !1
}
;
var bi = !1,
	wg = "",
	yg = new wa,
	Fg = Array(100),
	Eg = 0,
	di = zg(80, 79, 83, 84),
	Ag = zg(38, 98, 61),
	Bg = zg(38, 99, 61),
	Cg = zg(38, 100, 61),
	Gg = zg(38, 101, 61);
zg(38, 102, 61);
zg(38, 103, 61);
zg(38, 104, 61);
zg(38, 105, 61);
zg(38, 106, 61);
zg(38, 107, 61);
zg(111, 107);
var Wh = zg(69, 82, 82, 79, 82),
	ei = zg(61),
	fi = zg(10),
	gi = zg(67, 111, 110, 116, 101, 110, 116, 45, 84, 121, 112, 101),
	hi = zg(97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 120, 45, 119, 119, 119, 45, 102, 111, 114, 109, 45, 117, 114, 108, 101, 110, 99, 111, 100, 101, 100);

function Dg(a) {
	for (var b = Eg = 0; 100 > b; b++)
		Fg[b] = "";
	try {
		var c = new XMLHttpRequest;
		c.onreadystatechange = function() {
			if (4 == c.readyState)
				if (200 == c.status) {
					var a, b, d = 0, r = c.responseText.length;
					for (a = 0; a < r; a++)
						if (b = c.responseText[a],
						b == ei) {
							for (a += 1; a < r; a++) {
								b = c.responseText[a];
								if (b == fi)
									break;
								Fg[d] += b
							}
							d++
						} else
							for (; a < r && c.responseText[a] != fi; a++)
								;
					Eg = 1
				} else
					Eg = -1
		}
		;
		c.open(di, a, !0);
		c.setRequestHeader(gi, hi);
		c.send("")
	} catch (d) {
		Eg = -2
	}
}

function Qg() {
	this.y = this.x = 0
}
Qg.prototype.set = function(a) {
	this.x = a.x;
	this.y = a.y;
	return this
}
;

function Rg(a, b, c) {
	a.x = b;
	a.y = c
}
Qg.prototype.add = function(a) {
	this.x += a.x;
	this.y += a.y;
	return this
}
;

function eh(a, b, c) {
	a.x = b.x + c.x;
	a.y = b.y + c.y
}
Qg.prototype.sub = function(a) {
	this.x -= a.x;
	this.y -= a.y;
	return this
}
;
Qg.prototype.q = function(a, b) {
	this.x = a.x - b.x;
	this.y = a.y - b.y;
	return this
}
;

function Tg(a, b) {
	a.x *= b;
	a.y *= b
}

function dh(a) {
	var b = a.x;
	a.x = a.y;
	a.y = -b
}

function Sg(a) {
	return Math.sqrt(a.x * a.x + a.y * a.y)
}

function Xg(a) {
	var b = Sg(a);
	if (0 == b)
		return 0;
	a.x /= b;
	a.y /= b;
	return b
}

function Vg(a) {
	var b = Math.acos(a.x / Math.sqrt(a.x * a.x + a.y * a.y));
	0 < a.y && (b = TAU - b);
	return b
}
var df = new Float32Array(1024),
	ef = 0,
	ff = 0;

function A(a) {
	ef += ff;
	ef &= 1023;
	return df[ef] * a
}

function N(a, b) {
	ef += ff;
	ef &= 1023;
	return df[ef] * (b - a) + a
}

function Kf(a, b) {
	ef += ff;
	ef &= 1023;
	return 0.5 > df[ef] ? a : b
}

function $g(a) {
	ef += ff;
	ef &= 1023;
	return ~~(df[ef] * a)
}
var Xe = Array(513),
	PI = 3.1415927,
	TAU = 6.2831855;

function Kg(a) {
	return 0 > a ? -a : a
}

function ig(a, b) {
	return a > b ? a : b
}

function K(a, b, c) {
	return a < b ? b : a > c ? c : a
}

function Zf(a, b, c) {
	return a < b ? c : a > c ? b : a
}

function floor(a) {
	return Math.floor(a)
}
;

function defineItems () {
	ITEMS[0] = ["NONE", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[59] = ["NG", 0, 0, 13, 12, 9, 4287137928, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[1] = ["gold", 0, 0, 1, 0, 0, 4294967295, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[2] = ["onigiri", 0, 0, 2, 0, 0, 4294967295, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[3] = ["glove", 0, 100, 3, 2, 1, 4284901119, 1, 0, 0, 1, 3, 0, 0, 15, 20, 15, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[4] = ["sword", 0, 100, 4, 3, 2, 4287137928, 1, 0, 0, 1, 5, 0, 0, 20, 30, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[5] = ["bow", 0, 100, 5, 4, 3, 4294954086, 1, 4, 0, 2, 3, 1, 100, 30, 40, 90, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[6] = ["magic", 0, 100, 6, 5, 4, 4278255615, 1, 3, 0, 5, 10, 1, 30, 80, 90, 90, 0, 2, 4278225151, 1, 16, 16, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[58] = ["staff", 0, 100, 12, 11, 5, 4288217343, 1, 6, 0, 1, 2, 1, 0, 80, 90, 70, 0, 15, 4291598847, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[76] = ["gun", 0, 100, 14, 13, 6, 4288256409, 1, 3, 0, 2, 6, 1, 30, 20, 30, 60, 1, 17, 4288256409, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[7] = ["mach punch", 1, 250, 3, 2, 1, 4291611852, 1, 0, 0, 1, 3, 0, 0, 5, 10, 15, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[11] = ["thunder glove", 1, 500, 3, 2, 1, 4294967142, 1, 3, 0, 2, 4, 1, 10, 15, 22, 15, 1, 1, 4294967040, 1, 12, 48, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 3, 0, 10, 0, 0, 1, 29, 0];
	ITEMS[15] = ["fire glove", 1, 750, 3, 2, 1, 4294919236, 1, 3, 0, 2, 4, 1, 8, 15, 22, 15, 1, 5, 4294927889, 2, 16, 32, 16, 32, 0, 0, 40, 10, 0, 100, 0, 0, 0, 1, 50, 10, 0, 0, 7, 9, 0];
	ITEMS[54] = ["poison glove", 1, 1E3, 3, 2, 1, 4278255360, 1, 3, 0, 2, 4, 1, 8, 15, 22, 15, 1, 6, 4278255360, 2, 16, 16, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 4, 15, 12, 0, 0, 2, 2, 0];
	ITEMS[64] = ["freeze glove", 2, 1500, 3, 2, 1, 4291611903, 1, 3, 0, 2, 4, 1, 10, 15, 24, 15, 1, 4, 4291611903, 1, 16, 32, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 5, 5, 15, 0, 0, 8, 12, 0];
	ITEMS[68] = ["needle glove", 2, 2E3, 3, 2, 1, 4291603080, 1, 3, 0, 2, 4, 9, 20, 15, 24, 15, 1, 9, 4291603080, 1, 16, 16, 16, 16, 30, 5, 10, 10, 0, 100, 0, 0, 0, 0, 0, 50, 0, 0, 10, 12, 0];
	ITEMS[72] = ["spark glove", 2, 2500, 3, 2, 1, 4294967176, 1, 4, 0, 2, 4, 6, 30, 15, 24, 15, 0, 13, 4294967244, 2, 16, 16, 8, 8, 8, 20, 80, 10, 5, 100, 0, 1, 0, 3, 0, 50, 0, 0, 1, 29, 0];
	ITEMS[116] = ["sonic punch", 2, 3E3, 3, 2, 1, 4294967295, 1, 1, 1, 1, 3, 0, 0, 5, 10, 15, 0, 14, 4294967295, 2, 16, 16, 0, 0, 0, 1, 0, 15, 0, 0, 0, 0, 0, 0, 0, -1, 0];
	ITEMS[121] = ["thunder knuckle", 3, 4E3, 3, 18, 1, 4294967142, 1, 3, 0, 4, 8, 2, 10, 15, 26, 15, 1, 10, 4294967091, 2, 12, 32, 16, 16, 10, 0, 8, 8, 0, 100, 0, 0, 0, 3, 0, 25, 0, 0, 1, 29, 0];
	ITEMS[131] = ["fire knuckle", 3, 4500, 3, 18, 1, 4294919236, 1, 2, 0, 5, 10, 1, 1, 15, 26, 15, 1, 5, 4294927889, 2, 16, 32, 32, 16, 0, 0, 40, 10, 0, 100, 0, 0, 0, 1, 50, 25, 0, 0, 15, 18, 0];
	ITEMS[137] = ["mach knuckle", 3, 5E3, 3, 18, 1, 4291611852, 1, 0, 0, 12, 18, 0, 0, 5, 10, 15, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[153] = ["poison knuckle", 3, 5500, 3, 18, 1, 4278255360, 1, 3, 0, 6, 12, 1, 8, 15, 26, 15, 1, 9, 4278255360, 2, 16, 32, 16, 16, 0, 0, 10, 20, 0, 100, 0, 0, 0, 4, 15, 30, 0, 0, 4, 4, 0];
	ITEMS[178] = ["freeze knuckle", 4, 6E3, 3, 18, 1, 4291611903, 1, 3, 0, 8, 16, 2, 10, 15, 28, 15, 1, 4, 4291611903, 1, 16, 32, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 5, 10, 30, 0, 0, 12, 20, 0];
	ITEMS[202] = ["needle knuckle", 4, 6500, 3, 18, 1, 4291603080, 1, 403, 0, 8, 16, 18, 20, 15, 28, 15, 1, 9, 4291603080, 1, 16, 16, 16, 16, 50, 5, 10, 10, 0, 100, 0, 0, 0, 0, 0, 80, 0, 0, 11, 13, 0];
	ITEMS[214] = ["spark knuckle", 4, 7E3, 3, 18, 1, 4294967176, 1, 1204, 0, 8, 16, 8, 30, 15, 28, 15, 1, 18, 4294967244, 2, 2, 8, 8, 8, 8, 20, 100, 10, 5, 100, 0, 2, 0, 3, 0, 80, 0, 0, 1, 50, 0];
	ITEMS[226] = ["sonic knuckle", 4, 7500, 3, 18, 1, 4294967295, 1, 5703, 1, 12, 18, 9, 10, 5, 10, 15, 1, 12, 4287137928, 2, 16, 3, 0, 0, 0, 10, 10, 15, 0, 90, 1, 0, 0, 0, 0, -1, 0];
	ITEMS[253] = ["thunder claw", 5, 8E3, 3, 19, 1, 4294967142, 1, 3, 0, 9, 18, 3, 20, 15, 30, 15, 1, 9, 4294967091, 2, 8, 24, 16, 16, 3, 3, 10, 10, 0, 95, 0, 0, 0, 3, 0, 35, 0, 0, 1, 45, 0];
	ITEMS[312] = ["fire claw", 5, 8500, 3, 19, 1, 4294919236, 1, 3, 0, 9, 18, 3, 3, 15, 30, 15, 1, 9, 4294927889, 2, 8, 24, 16, 16, 0, 0, 60, 10, 0, 100, 0, 0, 0, 1, 50, 35, 0, 0, 10, 15, 0];
	ITEMS[328] = ["mach claw", 5, 9E3, 3, 19, 1, 4291611852, 1, 0, 0, 36, 54, 0, 0, 5, 10, 15, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[345] = ["poison claw", 5, 9500, 3, 19, 1, 4278255360, 1, 3, 0, 9, 18, 3, 8, 15, 30, 15, 1, 9, 4278255360, 2, 8, 20, 8, 8, 0, 7, 10, 20, 0, 100, 0, 0, 0, 4, 15, 40, 0, 0, 5, 5, 0];
	ITEMS[360] = ["freeze claw", 6, 1E4, 3, 19, 1, 4291611903, 1, 3, 0, 10, 20, 3, 10, 15, 32, 15, 1, 9, 2295123199, 2, 8, 32, 8, 8, 0, 9, 10, 10, 0, 100, 1, 0, 0, 5, 15, 45, 0, 0, 18, 36, 0];
	ITEMS[394] = ["needle claw", 6, 11E3, 3, 19, 1, 4291603080, 1, 303, 0, 10, 20, 30, 20, 15, 32, 15, 1, 9, 4291603080, 1, 8, 8, 8, 8, 0, 5, 10, 10, 0, 90, 0, 2, 0, 0, 0, 90, 0, 0, 12, 14, 0];
	ITEMS[410] = ["spark claw", 6, 12E3, 3, 19, 1, 4294967176, 1, 109, 0, 10, 20, 10, 1, 15, 32, 15, 1, 13, 4294967244, 2, 8, 8, 8, 8, 8, 20, 120, 10, 1, 99, 0, 2, 20, 3, 0, 100, 0, 0, 1, 99, 0];
	ITEMS[429] = ["sonic claw", 6, 13E3, 3, 19, 1, 4294967295, 1, 3, 1, 36, 54, 7, 10, 5, 10, 15, 1, 12, 1157627903, 2, 32, 3, 0, 0, 0, 10, 10, 10, 0, 90, 1, 0, 0, 0, 0, -1, 0];
	ITEMS[451] = ["thunder cestus", 7, 15E3, 3, 20, 1, 4294967142, 1, 9, 0, 11, 22, 5, 4, 15, 34, 15, 1, 20, 4294967091, 2, 16, 48, 16, 16, 10, 3, 10, 10, 0, 95, 1, 0, 0, 3, 0, 40, 0, 0, 1, 120, 0];
	ITEMS[471] = ["fire cestus", 7, 16E3, 3, 20, 1, 4294919236, 1, 9, 0, 11, 22, 5, 2, 15, 34, 15, 1, 22, 4294927889, 2, 4, 24, 16, 16, 10, 0, 50, 10, 0, 95, 1, 0, 0, 1, 50, 40, 0, 0, 20, 40, 0];
	ITEMS[479] = ["mach cestus", 7, 17E3, 3, 20, 1, 4291611852, 1, 0, 0, 80, 120, 0, 0, 4, 6, 15, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[496] = ["poison cestus", 7, 18E3, 3, 20, 1, 4278255360, 1, 109, 0, 11, 22, 6, 5, 15, 34, 15, 0, 6, 4278242304, 2, 16, 16, 24, 24, 0, 9, 10, 10, 0, 80, 0, 1, 0, 4, 5, 50, 0, 0, 24, 24, 0];
	ITEMS[504] = ["freeze cestus", 8, 19E3, 3, 20, 1, 4291611903, 1, 109, 0, 12, 24, 6, 10, 15, 36, 15, 1, 16, 2295123199, 2, 16, 16, 12, 12, 0, 9, 10, 30, 0, 60, 1, 0, 0, 5, 20, 60, 0, 0, 26, 60, 0];
	ITEMS[8] = ["iron sword", 1, 250, 4, 3, 2, 4289374890, 1, 0, 0, 5, 10, 0, 0, 20, 30, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[12] = ["fire sword", 1, 500, 4, 3, 2, 4294919236, 1, 1, 0, 10, 15, 0, 0, 20, 30, 30, 0, 5, 4294927889, 2, 16, 32, 16, 32, 0, 0, 50, 10, 50, 100, 0, 1, 0, 1, 20, 10, 0, 0, 1, 3, 10];
	ITEMS[16] = ["thunder sword", 1, 750, 4, 3, 2, 4294967142, 1, 1, 0, 10, 15, 0, 0, 20, 30, 30, 1, 10, 4294967108, 2, 16, 16, 8, 8, 0, 0, 12, 10, 50, 100, 0, 0, 0, 3, 0, 10, 0, 0, 1, 7, 10];
	ITEMS[55] = ["ice sword", 1, 1E3, 4, 3, 2, 4289374975, 1, 1, 0, 10, 15, 0, 0, 20, 30, 30, 0, 8, 2292886271, 2, 12, 12, 8, 8, 0, 0, 10, 10, 0, 100, 0, 0, 0, 2, 20, 12, 0, 0, 3, 5, 10];
	ITEMS[65] = ["long sword", 2, 1500, 4, 3, 2, 4290493371, 1, 0, 0, 10, 20, 0, 0, 20, 30, 35, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[69] = ["lightsaber", 2, 2E3, 4, 3, 2, 4294967142, 2, 7, 0, 10, 15, 1, 1, 20, 30, 30, 1, 10, 2298478404, 2, 16, 32, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 3, 0, 70, 0, 0, 1, 7, 70];
	ITEMS[73] = ["flame sword", 2, 2500, 4, 3, 2, 4294919236, 1, 7, 1, 10, 15, 1, 5, 20, 30, 30, 1, 6, 4294927889, 2, 8, 32, 16, 16, 0, 0, 20, 10, 0, 100, 0, 0, 0, 1, 50, 70, 0, 0, 1, 3, 70];
	ITEMS[117] = ["frozen sword", 2, 3E3, 4, 3, 2, 4288269567, 1, 7, 1, 10, 15, 1, 20, 20, 30, 30, 1, 4, 4288269567, 2, 16, 64, 64, 32, 0, 5, 10, 40, 0, 100, 0, 0, 0, 2, 20, 70, 0, 0, 20, 30, 3];
	ITEMS[122] = ["sabel", 3, 4E3, 4, 21, 2, 4289374890, 1, 0, 0, 20, 40, 0, 0, 20, 30, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[132] = ["fire sabel", 3, 4500, 4, 21, 2, 4294919236, 1, 7, 0, 12, 18, 1, 1, 20, 30, 30, 1, 6, 4294927889, 2, 20, 6, 16, 16, 0, 0, 50, 15, 0, 99, 1, 0, 0, 1, 25, 20, 0, 0, 5, 6, 10];
	ITEMS[138] = ["thunder sabel", 3, 5E3, 4, 21, 2, 4294967142, 1, 10, 0, 12, 18, 1, 20, 20, 30, 30, 1, 10, 4294967108, 2, 16, 16, 8, 8, 0, 3, 9, 10, 10, 100, 0, 0, 0, 3, 0, 20, 0, 0, 1, 29, 10];
	ITEMS[154] = ["ice sabel", 3, 5500, 4, 21, 2, 4289374975, 1, 7, 0, 12, 18, 1, 1, 20, 30, 30, 1, 4, 2292886271, 2, 16, 32, 16, 16, 0, 0, 50, 10, 0, 90, 1, 0, 0, 2, 20, 25, 0, 0, 10, 20, 10];
	ITEMS[179] = ["long sabel", 4, 6E3, 4, 21, 2, 4290493371, 1, 0, 0, 20, 50, 0, 0, 20, 30, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[203] = ["lightsaber", 4, 6500, 4, 21, 2, 4284940134, 2, 7, 0, 15, 20, 1, 1, 20, 30, 30, 1, 18, 2286223172, 2, 16, 32, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 3, 0, 100, 0, 0, 1, 14, 100];
	ITEMS[215] = ["flame sabel", 4, 7E3, 4, 21, 2, 4294919236, 1, 7, 1, 15, 20, 1, 5, 20, 30, 30, 1, 6, 4294927889, 2, 8, 32, 16, 16, 0, 0, 20, 10, 0, 100, 0, 0, 50, 1, 50, 100, 0, 0, 2, 6, 100];
	ITEMS[227] = ["frozen sabel", 4, 7500, 4, 21, 2, 4288269567, 1, 7, 0, 15, 20, 1, 15, 20, 30, 30, 1, 4, 4288269567, 2, 12, 16, 8, 8, 0, 15, 100, 10, 0, 100, 0, 0, 100, 5, 5, 100, 0, 0, 20, 30, 10];
	ITEMS[254] = ["blade", 5, 8E3, 4, 22, 2, 4289374890, 1, 0, 0, 50, 80, 0, 0, 20, 30, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[313] = ["fire blade", 5, 8500, 4, 22, 2, 4294919236, 1, 7, 0, 20, 20, 1, 1, 20, 30, 30, 1, 9, 2298439185, 2, 8, 32, 16, 16, 0, 0, 200, 15, 0, 99, 0, 0, 0, 1, 30, 30, 0, 0, 3, 4, 10];
	ITEMS[329] = ["thunder blade", 5, 9E3, 4, 22, 2, 4294967142, 1, 7, 0, 20, 20, 30, 1, 20, 30, 30, 1, 10, 2298478404, 2, 16, 40, 32, 16, 90, 0, 3, 3, 0, 100, 0, 0, 0, 3, 0, 30, 0, 0, 1, 29, 1];
	ITEMS[346] = ["ice blade", 5, 9500, 4, 22, 2, 4289374975, 1, 7, 0, 20, 20, 1, 15, 20, 30, 30, 1, 4, 2292886271, 2, 8, 16, 8, 8, 0, 20, 60, 10, 0, 100, 1, 0, 50, 2, 20, 35, 0, 0, 15, 35, 10];
	ITEMS[361] = ["long blade", 6, 1E4, 4, 22, 2, 4290493371, 1, 0, 0, 50, 100, 0, 0, 20, 30, 45, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[395] = ["lightsaber", 6, 11E3, 4, 22, 2, 4284901119, 2, 7, 0, 20, 25, 1, 1, 20, 30, 30, 1, 9, 2286175487, 2, 16, 32, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 3, 0, 120, 0, 0, 1, 45, 120];
	ITEMS[411] = ["flame blade", 6, 12E3, 4, 22, 2, 4294919236, 1, 7, 1, 20, 25, 1, 10, 20, 30, 30, 1, 6, 2298430481, 2, 10, 30, 16, 16, 0, 0, 60, 10, -1, 90, 1, 0, 0, 1, 50, 120, 0, 0, 6, 9, 120];
	ITEMS[430] = ["frozen blade", 6, 13E3, 4, 22, 2, 4288269567, 1, 3, 1, 20, 25, 1, 20, 20, 30, 30, 1, 4, 3432631551, 2, 16, 64, 48, 48, 0, 5, 10, 40, 0, 100, 0, 0, 0, 5, 5, 120, 0, 0, 40, 60, 3];
	ITEMS[452] = ["GreatSword", 7, 15E3, 4, 23, 2, 4289374890, 1, 0, 0, 150, 250, 0, 0, 20, 30, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[472] = ["fire GS", 7, 16E3, 4, 23, 2, 4294919236, 1, 1, 0, 30, 30, 0, 0, 20, 30, 30, 0, 23, 3439289873, 2, 16, 32, 16, 32, 0, 0, 200, 10, 50, 100, 0, 1, 0, 1, 35, 40, 0, 0, 6, 8, 15];
	ITEMS[480] = ["thunder GS", 7, 17E3, 4, 23, 2, 4294967142, 1, 7, 0, 30, 30, 9, 1, 20, 30, 30, 1, 10, 2298478404, 2, 8, 32, 16, 16, 30, 0, 3, 3, 0, 100, 0, 0, 0, 3, 0, 40, 0, 0, 1, 29, 10];
	ITEMS[497] = ["ice GS", 7, 18E3, 4, 23, 2, 4289374975, 1, 7, 1, 30, 30, 1, 40, 20, 30, 30, 1, 22, 2292886271, 2, 8, 48, 48, 48, 0, 5, 6, 10, 0, 100, 1, 0, 0, 2, 25, 45, 0, 0, 25, 55, 10];
	ITEMS[505] = ["long GS", 8, 19E3, 4, 23, 2, 4290493371, 1, 0, 0, 100, 200, 0, 0, 20, 30, 50, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[9] = ["triple shot", 1, 250, 5, 14, 3, 4294954086, 1, 3, 0, 2, 3, 3, 100, 30, 40, 150, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[13] = ["poison arrow", 1, 500, 5, 4, 3, 4278255360, 1, 4, 0, 4, 6, 1, 100, 30, 40, 90, 1, 3, 4278255360, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 4, 50, 10, 1, 0, 1, 1, 1, 0, 6, 4278255360, 1, 32, 32, 32, 32, 0, 0, 100, 10, 0, 100, 0, 0];
	ITEMS[17] = ["double arrow", 1, 750, 5, 15, 3, 4294954086, 1, 4, 0, 8, 12, 2, 100, 30, 40, 90, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[56] = ["fire arrow", 1, 1E3, 5, 4, 3, 4294919236, 1, 4, 0, 8, 12, 1, 100, 30, 40, 90, 1, 3, 4294919236, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 1, 50, 12, 1, 1, 4, 6, 1, 0, 5, 4294927889, 2, 16, 32, 16, 32, 0, 0, 100, 10, 30, 100, 0, 1];
	ITEMS[66] = ["triple arrow", 2, 1500, 5, 16, 3, 4294954086, 1, 4, 0, 8, 12, 3, 100, 30, 40, 90, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[70] = ["quad arrow", 2, 2E3, 5, 17, 3, 4294954086, 1, 4, 0, 8, 12, 4, 100, 30, 40, 90, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[74] = ["oct arrow", 2, 2500, 5, 17, 3, 4294954086, 1, 4, 0, 4, 6, 8, 100, 45, 60, 90, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[118] = ["double poison", 2, 3E3, 5, 15, 3, 4288269312, 1, 4, 0, 8, 12, 2, 100, 30, 40, 90, 1, 3, 4288269312, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 4, 50, 20, 1, 0, 1, 2, 1, 0, 6, 2291780608, 1, 32, 32, 32, 32, 0, 0, 100, 10, 0, 100, 0, 0];
	ITEMS[123] = ["quint shot", 3, 4E3, 5, 14, 3, 4294954086, 1, 3, 0, 4, 6, 5, 100, 30, 40, 150, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[133] = ["double fire", 3, 4500, 5, 15, 3, 4294919236, 1, 4, 0, 9, 15, 2, 100, 30, 40, 90, 1, 3, 4294919236, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 1, 50, 20, 1, 1, 8, 9, 1, 0, 5, 4294927889, 2, 16, 32, 16, 32, 0, 0, 100, 10, 30, 100, 0, 1];
	ITEMS[139] = ["double iron arrow", 3, 5E3, 5, 15, 3, 4284900966, 1, 4, 0, 16, 24, 2, 80, 30, 40, 90, 1, 3, 4284900966, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[155] = ["triple iron arrow", 3, 5500, 5, 16, 3, 4284900966, 1, 104, 0, 15, 20, 3, 80, 30, 40, 90, 1, 3, 4284900966, 1, 16, 16, 8, 8, 30, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[180] = ["triple poison", 4, 6E3, 5, 16, 3, 4288269312, 1, 4, 0, 10, 16, 3, 80, 30, 40, 90, 1, 3, 4288269312, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 4, 50, 25, 1, 0, 2, 2, 1, 0, 6, 2291780608, 1, 32, 32, 32, 32, 0, 0, 100, 10, 0, 100, 0, 0];
	ITEMS[204] = ["fire shot", 4, 6500, 5, 14, 3, 4294919236, 1, 3, 0, 4, 6, 3, 15, 30, 40, 90, 1, 3, 4294919236, 1, 16, 16, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 1, 50, 30, 5, 1, 6, 8, 1, 1, 5, 4294927889, 2, 16, 32, 16, 16, 0, 0, 100, 10, 0, 100, 1, 0];
	ITEMS[216] = ["quad iron arrow", 4, 7E3, 5, 17, 3, 4284900966, 1, 4, 0, 16, 24, 4, 80, 30, 40, 90, 1, 3, 4284900966, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[228] = ["nonuple arrow", 4, 7500, 5, 17, 3, 4284900966, 1, 4, 0, 8, 12, 9, 80, 45, 60, 90, 1, 3, 4284900966, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[255] = ["poison shot", 5, 8E3, 5, 14, 3, 4288269312, 1, 3, 0, 4, 6, 3, 15, 30, 40, 90, 1, 3, 4288269312, 1, 16, 16, 4, 4, 0, 0, 300, 10, 0, 100, 0, 0, 0, 4, 50, 35, 1, 0, 2, 2, 1, 0, 6, 2291780608, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 1, 0];
	ITEMS[314] = ["flame arrow", 5, 8500, 5, 4, 3, 4294940979, 1, 4, 0, 16, 24, 1, 80, 30, 40, 90, 1, 3, 4294940979, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 1, 50, 35, 3, 1, 8, 9, 5, 0, 6, 4294927889, 2, 16, 16, 16, 16, 0, 0, 100, 10, 0, 98, 0, 1];
	ITEMS[330] = ["sept shot", 5, 9E3, 5, 14, 3, 4294954086, 1, 803, 0, 6, 9, 7, 80, 30, 40, 150, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[347] = ["pierce arrow", 5, 9500, 5, 17, 3, 4293848814, 1, 4, 0, 16, 24, 4, 80, 30, 40, 90, 1, 3, 4293848814, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 1, 0, 0, 0, 0, 0, 0];
	ITEMS[362] = ["quint poison", 6, 1E4, 5, 17, 3, 4288269312, 1, 4, 0, 16, 24, 5, 80, 30, 40, 90, 1, 3, 4288269312, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 4, 50, 40, 1, 0, 2, 2, 1, 0, 6, 2291780608, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0];
	ITEMS[396] = ["double flame", 6, 11E3, 5, 15, 3, 4294940979, 1, 4, 0, 16, 24, 2, 80, 30, 40, 90, 1, 3, 4294940979, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 1, 50, 40, 3, 1, 8, 9, 3, 0, 6, 4294927889, 2, 16, 16, 16, 16, 0, 0, 100, 10, 0, 98, 0, 1];
	ITEMS[412] = ["quad steel arrow", 6, 12E3, 5, 17, 3, 4288256409, 1, 604, 0, 48, 72, 4, 60, 30, 40, 90, 1, 3, 4288256409, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[431] = ["undecuple arrow", 6, 13E3, 5, 17, 3, 4288256409, 1, 4, 0, 24, 36, 11, 80, 45, 60, 90, 1, 3, 4288256409, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[453] = ["nonuple shot", 7, 15E3, 5, 14, 3, 4294954086, 1, 803, 0, 8, 12, 9, 80, 30, 40, 150, 1, 3, 4294954086, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[473] = ["flame shot", 7, 16E3, 5, 14, 3, 4294919236, 1, 803, 0, 8, 12, 5, 10, 30, 40, 90, 1, 3, 4294919236, 1, 16, 16, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 1, 50, 45, 5, 1, 12, 16, 1, 1, 22, 4294927889, 2, 16, 16, 16, 16, 0, 0, 100, 10, 0, 100, 1, 0];
	ITEMS[481] = ["oct poison", 7, 17E3, 5, 17, 3, 4288269312, 1, 4, 0, 16, 24, 8, 80, 30, 40, 90, 1, 3, 4288269312, 1, 16, 16, 8, 8, 0, 0, 300, 10, 5, 100, 0, 0, 0, 4, 50, 45, 1, 0, 3, 3, 1, 0, 6, 2291780608, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0];
	ITEMS[498] = ["double hell fire", 7, 18E3, 5, 15, 3, 4294901862, 1, 4, 0, 16, 24, 2, 70, 30, 40, 90, 1, 3, 4288217139, 1, 16, 16, 8, 8, 0, 0, 300, 10, 9, 100, 0, 0, 0, 1, 50, 50, 1, 1, 90, 99, 1, 0, 24, 4294910532, 2, 16, 32, 16, 32, 0, 0, 100, 10, 30, 100, 0, 1];
	ITEMS[506] = ["quint gold arrow", 8, 19E3, 5, 4, 3, 4294956800, 1, 104, 0, 96, 144, 5, 80, 30, 40, 90, 1, 3, 4294956800, 1, 16, 16, 8, 8, 30, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[10] = ["explosion", 1, 250, 6, 5, 4, 4294936576, 1, 3, 0, 5, 10, 1, 30, 80, 90, 90, 0, 2, 4294936576, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 1, 0, 0, 1, 1, 5, 10, 1, 0, 2, 1157597184, 1, 48, 48, 32, 32, 0, 0, 10, 10, 0, 100, 0, 0];
	ITEMS[14] = ["ice", 1, 500, 6, 5, 4, 4290493439, 1, 3, 0, 5, 10, 1, 30, 80, 90, 90, 0, 7, 4287138047, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 2, 30, 0, 0];
	ITEMS[18] = ["fire", 1, 750, 6, 5, 4, 4294910498, 1, 4, 0, 2, 6, 1, 60, 80, 90, 80, 1, 5, 4294927889, 2, 16, 32, 16, 16, 0, 0, 100, 10, 5, 100, 0, 0, 0, 1, 80, 0, 1, 1, 2, 6, 1, 0, 5, 4294927889, 2, 32, 32, 32, 32, 0, 0, 200, 10, 50, 100, 0, 1];
	ITEMS[57] = ["thunder", 1, 1E3, 6, 5, 4, 4294967142, 1, 5, 0, 1, 30, 3, 5, 80, 90, 80, 1, 10, 4294967142, 2, 16, 16, 16, 16, 0, 0, 100, 10, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[67] = ["freeze", 2, 1500, 6, 5, 4, 4291611903, 1, 3, 0, 5, 10, 1, 30, 80, 90, 90, 1, 16, 4291611903, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 5, 50, 0, 0];
	ITEMS[71] = ["blizzard", 2, 2E3, 6, 5, 4, 4287138047, 1, 8, 0, 5, 10, 9, 30, 120, 135, 90, 1, 16, 4287138047, 1, 16, 16, 8, 8, 100, 0, 100, 10, 8, 100, 0, 0, 0, 2, 30, 0, 0];
	ITEMS[75] = ["volcano", 2, 2500, 6, 5, 4, 4294919168, 1, 4, 0, 2, 6, 1, 50, 120, 135, 80, 0, 12, 4294919168, 2, 16, 16, 8, 8, 0, 0, 100, 10, 8, 100, 0, 0, 0, 1, 50, 0, 4, 1, 2, 6, 9, 0, 5, 4294927889, 2, 16, 32, 16, 32, 50, 0, 100, 10, 5, 98, 0, 1];
	ITEMS[119] = ["thunder storm", 2, 3E3, 6, 5, 4, 4294967091, 1, 8, 0, 1, 30, 12, 0, 120, 135, 90, 1, 10, 4294967091, 2, 16, 16, 8, 8, 100, 0, 100, 10, 90, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[124] = ["delta explosion", 3, 4E3, 6, 24, 4, 4294936576, 1, 9, 1, 10, 20, 3, 5, 80, 90, 80, 1, 2, 2298447906, 2, 8, 40, 24, 24, 10, 10, 15, 3, 0, 80, 1, 0, 0, 1, 0, 0, 0];
	ITEMS[134] = ["icicle", 3, 4500, 6, 24, 4, 4290493439, 1, 3, 0, 15, 25, 1, 50, 80, 90, 90, 1, 9, 4287138047, 1, 16, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 2, 35, 0, 0];
	ITEMS[140] = ["fire rise", 3, 5E3, 6, 24, 4, 4294910498, 1, 4, 0, 2, 6, 5, 80, 80, 90, 80, 1, 5, 4294927889, 2, 16, 32, 16, 16, 20, 0, 100, 10, -2, 99, 0, 1, 0, 1, 30, 0, 0];
	ITEMS[156] = ["big thunder", 3, 5500, 6, 24, 4, 4294967142, 1, 5, 1, 1, 150, 1, 8, 80, 90, 80, 1, 10, 4294967142, 2, 32, 64, 64, 64, 0, 5, 100, 10, 0, 100, 1, 0, 0, 3, 0, 0, 0];
	ITEMS[181] = ["big icicle", 4, 6E3, 6, 24, 4, 4291611903, 1, 5, 1, 10, 20, 1, 8, 80, 90, 90, 1, 9, 4291611903, 1, 32, 64, 64, 64, 0, 5, 100, 10, 0, 100, 1, 0, 0, 5, 50, 0, 0];
	ITEMS[205] = ["ice meteor", 4, 6500, 6, 24, 4, 4287138047, 1, 5, 0, 100, 150, 1, 5, 120, 135, 90, 1, 16, 4287138047, 2, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 2, 30, 0, 4, 0, 10, 15, 9, 1, 16, 4287138047, 2, 16, 16, 8, 8, 0, 10, 100, 10, 5, 100, 0, 0];
	ITEMS[217] = ["super volcano", 4, 7E3, 6, 24, 4, 4294919168, 1, 4, 0, 2, 6, 1, 50, 120, 135, 80, 0, 12, 4294919168, 2, 16, 16, 8, 8, 0, 0, 100, 10, 8, 100, 0, 0, 0, 1, 50, 0, 6, 1, 4, 8, 15, 0, 5, 4294927889, 2, 16, 32, 16, 32, 50, 0, 100, 10, 5, 98, 0, 1];
	ITEMS[229] = ["thunder spear", 4, 7500, 6, 24, 4, 4294967091, 1, 108, 0, 1, 30, 24, 0, 120, 135, 90, 1, 10, 4294967091, 2, 5, 32, 5, 32, 200, 10, 100, 10, 90, 90, 0, 1, 0, 3, 0, 0, 0];
	ITEMS[256] = ["time explosion", 5, 8E3, 6, 25, 4, 4294919185, 1, 4, 0, 20, 40, 1, 40, 80, 90, 80, 0, 12, 4294919185, 1, 16, 16, 8, 8, 0, 100, 500, 10, 10, 98, 0, 1, 0, 1, 0, 0, 4, 1, 15, 25, 10, 1, 6, 1157588480, 1, 8, 32, 32, 32, 10, 10, 20, 5, 0, 98, 1, 0];
	ITEMS[315] = ["ice spike", 5, 8500, 6, 25, 4, 4290493439, 1, 3, 0, 15, 25, 1, 50, 80, 90, 90, 1, 9, 4287138047, 1, 16, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 2, 40, 0, 7, 0, 5, 15, 3, 1, 9, 4287138047, 1, 8, 16, 8, 8, 0, 9, 10, 10, 0, 98, 0, 2];
	ITEMS[331] = ["inferno", 5, 9E3, 6, 25, 4, 4294910498, 1, 103, 0, 2, 6, 7, 5, 80, 90, 60, 1, 6, 2298439185, 2, 20, 20, 16, 16, 70, 0, 200, 10, 0, 100, 0, 0, 0, 1, 30, 0, 0];
	ITEMS[348] = ["electric shock", 5, 9500, 6, 25, 4, 4294967142, 1, 9, 0, 1, 20, 30, 1, 80, 90, 30, 1, 10, 2298478438, 2, 16, 12, 16, 16, 60, 0, 30, 10, 0, 90, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[363] = ["freeze explosion", 6, 1E4, 6, 25, 4, 4291611903, 1, 9, 1, 5, 10, 6, 9, 80, 90, 90, 1, 4, 2295123199, 2, 16, 48, 48, 48, 0, 25, 30, 10, 0, 80, 0, 2, 0, 5, 10, 0, 0];
	ITEMS[397] = ["ice orb", 6, 11E3, 6, 25, 4, 4287138047, 1, 3, 0, 0, 0, 1, 6, 120, 135, 60, 1, 2, 4287138047, 2, 16, 16, 16, 16, 0, 150, 150, 10, 0, 100, 0, 0, 0, 2, 30, 0, 2, 0, 10, 15, 50, 1, 9, 4287138047, 2, 16, 16, 8, 8, 0, 6, 50, 10, 0, 95, 0, 0];
	ITEMS[413] = ["lava", 6, 12E3, 6, 25, 4, 4294919168, 1, 4, 0, 2, 6, 1, 50, 120, 135, 80, 0, 12, 4294919168, 2, 16, 16, 8, 8, 0, 0, 100, 10, 8, 100, 0, 0, 0, 1, 50, 0, 9, 1, 6, 9, 30, 0, 5, 1157588497, 2, 16, 24, 16, 32, 50, 0, 100, 10, 1, 100, 0, 1];
	ITEMS[432] = ["thunder orb", 6, 13E3, 6, 25, 4, 4294967091, 2, 3, 0, 0, 0, 1, 10, 120, 135, 60, 0, 2, 4294967142, 2, 16, 16, 16, 16, 0, 200, 200, 10, 0, 100, 0, 0, 0, 3, 0, 0, 2, 0, 1, 90, 25, 0, 15, 4294967142, 2, 16, 16, 8, 8, 0, 10, 50, 10, 0, 60, 0, 0];
	ITEMS[454] = ["spread explosion", 7, 15E3, 6, 26, 4, 4294936576, 1, 4, 0, 20, 40, 10, 50, 80, 90, 80, 0, 12, 4294936610, 2, 16, 16, 8, 8, 15, 50, 200, 10, 5, 100, 0, 2, 0, 1, 0, 0, 1, 1, 30, 50, 1, 0, 21, 4294936610, 2, 48, 48, 32, 32, 0, 0, 10, 20, 0, 100, 0, 0];
	ITEMS[474] = ["ice bolt", 7, 16E3, 6, 26, 4, 4290493439, 1, 5, 0, 25, 35, 3, 5, 80, 90, 90, 1, 9, 4287138047, 1, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 2, 45, 0, 0];
	ITEMS[482] = ["hell fire", 7, 17E3, 6, 26, 4, 4294910498, 1, 103, 0, 2, 6, 30, 5, 80, 90, 40, 1, 6, 2298439185, 2, 16, 16, 16, 16, 40, 0, 80, 10, 0, 100, 0, 0, 0, 1, 50, 0, 0];
	ITEMS[499] = ["lightning", 7, 18E3, 6, 26, 4, 4294967142, 1, 11, 0, 1, 90, 30, 5, 80, 90, 80, 1, 20, 4294967142, 2, 16, 16, 16, 16, 60, 0, 150, 10, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[507] = ["permafrost", 8, 19E3, 6, 26, 4, 4291611903, 1, 9, 1, 15, 25, 6, 9, 80, 90, 90, 1, 22, 1724697855, 2, 24, 48, 48, 48, 0, 25, 30, 10, 0, 70, 1, 0, 0, 5, 30, 0, 0];
	ITEMS[60] = ["staff of wood", 1, 250, 12, 11, 5, 4287120384, 1, 6, 0, 2, 3, 1, 0, 80, 90, 70, 0, 15, 4288243251, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[61] = ["long staff", 1, 500, 12, 11, 5, 4289374890, 1, 6, 0, 3, 4, 1, 0, 80, 90, 110, 0, 15, 4289374890, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[62] = ["staff of thunder", 1, 750, 12, 11, 5, 4294967142, 1, 6, 0, 1, 9, 1, 0, 80, 90, 70, 0, 15, 4294967142, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[63] = ["staff of ice", 1, 1E3, 12, 11, 5, 4290493439, 1, 6, 0, 4, 5, 1, 0, 80, 90, 70, 0, 15, 4290493439, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 2, 10, 0, 0];
	ITEMS[115] = ["battle staff", 2, 1500, 12, 11, 5, 4294919236, 1, 6, 0, 10, 10, 1, 0, 80, 90, 30, 0, 15, 4294927974, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[126] = ["staff of fire", 2, 2E3, 12, 11, 5, 4294927889, 1, 6, 0, 2, 3, 1, 0, 80, 90, 70, 0, 15, 4294927889, 2, 24, 24, 24, 24, 0, 0, 100, 10, 0, 100, 0, 0, 0, 1, 30, 0, 0];
	ITEMS[127] = ["lightning staff", 2, 2500, 12, 11, 5, 4294967142, 1, 5, 0, 1, 25, 1, 10, 80, 90, 70, 1, 10, 4294967142, 2, 16, 24, 16, 16, 10, 0, 100, 20, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[128] = ["staff of poison", 2, 3E3, 12, 11, 5, 4282711876, 1, 6, 0, 0, 1, 1, 0, 80, 90, 70, 0, 15, 4282711876, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 4, 20, 0, 0];
	ITEMS[129] = ["long wood staff", 3, 4E3, 12, 11, 5, 4288243251, 1, 6, 0, 10, 15, 1, 0, 80, 90, 130, 0, 15, 4288243251, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[135] = ["staff of freeze", 3, 4500, 12, 11, 5, 4291611903, 1, 6, 0, 5, 10, 1, 0, 80, 90, 70, 0, 15, 4291611903, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 5, 20, 0, 0];
	ITEMS[141] = ["staff of light", 1, 5E3, 12, 11, 5, 4294967295, 1, 6, 0, 5, 5, 1, 0, 80, 90, 70, 0, 13, 2298478591, 2, 16, 16, 8, 8, 0, 100, 200, 40, 0, 100, 1, 0, 50, 3, 0, 0, 0];
	ITEMS[157] = ["staff of flame", 3, 5500, 12, 34, 5, 4294927889, 1, 6, 0, 4, 6, 1, 0, 80, 90, 70, 0, 15, 4294927889, 2, 24, 24, 24, 24, 0, 0, 100, 10, 0, 100, 0, 0, 0, 1, 30, 0, 0];
	ITEMS[182] = ["combat staff", 4, 6E3, 12, 34, 5, 4294919236, 1, 6, 0, 25, 25, 1, 0, 80, 90, 30, 0, 15, 4294919236, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[206] = ["staff of poisoner", 4, 6500, 12, 34, 5, 4284874956, 1, 6, 0, 1, 1, 1, 0, 80, 90, 70, 0, 15, 4284874956, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 4, 30, 0, 0];
	ITEMS[218] = ["long iron staff", 4, 7E3, 12, 34, 5, 4284900966, 1, 6, 0, 10, 15, 1, 0, 80, 90, 150, 0, 15, 4288256409, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[230] = ["staff of icicle", 4, 7500, 12, 34, 5, 4290493439, 1, 6, 0, 10, 15, 1, 0, 80, 90, 70, 0, 15, 4290493439, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 2, 15, 0, 0];
	ITEMS[257] = ["explosion staff", 5, 8E3, 12, 34, 5, 4294936576, 1, 6, 1, 10, 15, 1, 0, 80, 90, 70, 0, 2, 2298447906, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 1, 0, 0, 0];
	ITEMS[316] = ["warrior staff", 5, 8500, 12, 34, 5, 4288217088, 1, 6, 0, 35, 35, 1, 0, 80, 90, 30, 0, 15, 4288217088, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[332] = ["inferno staff", 5, 9E3, 12, 45, 5, 4294927889, 1, 6, 0, 10, 15, 1, 0, 80, 90, 70, 1, 6, 4294927889, 2, 16, 16, 16, 16, 0, 0, 100, 10, 0, 96, 0, 0, 20, 1, 30, 0, 0];
	ITEMS[349] = ["electric staff", 5, 9500, 12, 45, 5, 4294967142, 1, 6, 0, 1, 9, 3, 2, 80, 90, 70, 0, 14, 2298478438, 2, 16, 16, 16, 16, 15, 0, 30, 10, 0, 90, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[364] = ["long silver staff", 6, 1E4, 12, 45, 5, 4294967295, 1, 6, 0, 10, 15, 1, 0, 80, 90, 170, 0, 15, 4294967295, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[398] = ["poisonous staff", 6, 11E3, 12, 45, 5, 4284874905, 1, 6, 0, 1, 2, 1, 0, 80, 90, 70, 0, 15, 4284874905, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 4, 40, 0, 0];
	ITEMS[414] = ["freeze exp staff", 6, 12E3, 12, 45, 5, 4291611903, 1, 6, 1, 5, 5, 1, 0, 80, 90, 70, 0, 15, 4291611903, 2, 16, 16, 12, 12, 0, 0, 100, 40, 0, 100, 0, 0, 0, 5, 5, 0, 0];
	ITEMS[433] = ["mega exp staff", 6, 13E3, 12, 45, 5, 4294936576, 1, 6, 1, 10, 15, 1, 0, 80, 90, 70, 0, 2, 2298447906, 2, 32, 32, 32, 32, 0, 0, 100, 40, 0, 100, 0, 0, 0, 1, 0, 0, 0];
	ITEMS[455] = ["strike rod", 7, 15E3, 12, 60, 5, 4294919236, 1, 6, 0, 55, 55, 1, 0, 80, 90, 30, 0, 21, 4294919236, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[475] = ["inferno rod", 7, 16E3, 12, 60, 5, 4294927889, 1, 6, 0, 20, 25, 1, 0, 80, 90, 70, 1, 22, 4294927889, 2, 12, 12, 16, 16, 0, 0, 150, 10, 0, 96, 1, 0, 20, 1, 30, 0, 0];
	ITEMS[483] = ["thunder rod", 7, 17E3, 12, 60, 5, 4294967142, 1, 6, 0, 1, 30, 3, 0, 80, 90, 70, 0, 21, 2298478438, 2, 16, 16, 16, 16, 15, 0, 100, 10, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[500] = ["long gold rod", 7, 18E3, 12, 60, 5, 4294956800, 1, 6, 0, 10, 15, 1, 0, 80, 90, 190, 0, 15, 4294956800, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[508] = ["poisonous rod", 8, 19E3, 12, 60, 5, 4288217343, 1, 6, 0, 2, 2, 1, 0, 80, 90, 70, 0, 15, 4288217343, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 4, 50, 0, 0];
	ITEMS[77] = ["handgun", 1, 250, 14, 13, 6, 4291611852, 1, 3, 0, 8, 12, 1, 30, 20, 30, 60, 1, 17, 4291611852, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 5, 0];
	ITEMS[78] = ["submachine-gun", 1, 500, 14, 27, 6, 4284901017, 1, 3, 0, 4, 8, 1, 30, 5, 10, 50, 1, 17, 4284901017, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 5, 0];
	ITEMS[79] = ["shotgun", 1, 750, 14, 28, 6, 4288243251, 1, 3, 0, 1, 20, 5, 30, 50, 60, 50, 0, 13, 4288243251, 1, 16, 16, 8, 8, 5, 0, 30, 10, 0, 100, 0, 1, 0, 0, 0, 15, 0];
	ITEMS[80] = ["rifle", 1, 1E3, 14, 29, 6, 4284914073, 1, 3, 0, 20, 40, 1, 50, 50, 60, 120, 1, 17, 4284914073, 1, 16, 32, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 0, 10, 0];
	ITEMS[81] = ["grenade", 2, 1500, 14, 30, 6, 4294927872, 1, 4, 0, 8, 12, 1, 40, 70, 80, 60, 1, 17, 4294927872, 1, 16, 16, 8, 8, 0, 0, 100, 10, 10, 100, 0, 0, 0, 1, 50, 25, 4, 1, 2, 6, 4, 0, 5, 4294927889, 2, 16, 32, 16, 32, 0, 0, 100, 10, 8, 98, 0, 1];
	ITEMS[82] = ["laser gun", 2, 2E3, 14, 31, 6, 4288217088, 1, 3, 1, 8, 12, 1, 30, 20, 30, 50, 1, 18, 4288217088, 1, 8, 16, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 0, 1, 100, 20, 0];
	ITEMS[83] = ["bazooka", 2, 2500, 14, 32, 6, 4278229248, 1, 3, 0, 40, 60, 1, 30, 80, 90, 60, 1, 17, 4278229248, 1, 32, 32, 16, 16, 0, 0, 50, 10, 5, 100, 0, 0, 0, 0, 0, 30, 3, 0, 20, 30, 6, 0, 6, 2291754547, 1, 24, 24, 12, 12, 10, 0, 50, 20, 0, 97, 1, 0];
	ITEMS[120] = ["homing laser", 2, 3E3, 14, 33, 6, 4288269312, 1, 3, 0, 8, 12, 2, 30, 20, 30, 70, 1, 11, 4288269312, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 50, 3, 0, 20, 0];
	ITEMS[125] = ["beretta", 3, 4E3, 14, 13, 6, 4291611852, 1, 3, 0, 24, 36, 1, 30, 20, 30, 60, 1, 17, 4291611852, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 10, 0];
	ITEMS[136] = ["uzi", 3, 4500, 14, 27, 6, 4281545574, 1, 3, 0, 12, 24, 1, 30, 5, 10, 50, 1, 17, 4281545574, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 15, 0];
	ITEMS[142] = ["remington", 3, 5E3, 14, 28, 6, 4282655266, 1, 3, 0, 1, 40, 7, 30, 50, 60, 50, 0, 13, 4282655266, 1, 16, 16, 8, 8, 7, 0, 30, 10, 0, 100, 0, 1, 0, 0, 0, 30, 0];
	ITEMS[158] = ["sniper rifle", 3, 5500, 14, 29, 6, 4278203187, 1, 3, 0, 60, 80, 1, 50, 50, 60, 120, 1, 17, 4284914073, 1, 16, 32, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 0, 20, 0];
	ITEMS[183] = ["grenade launcher", 4, 6E3, 14, 30, 6, 4291572480, 1, 4, 0, 12, 24, 1, 40, 70, 80, 60, 1, 17, 4291572480, 1, 16, 16, 8, 8, 0, 0, 100, 10, 10, 100, 0, 0, 0, 1, 50, 40, 4, 1, 6, 18, 4, 0, 5, 2298426129, 2, 16, 32, 16, 32, 0, 0, 100, 10, 8, 96, 0, 1];
	ITEMS[207] = ["laser beam gun", 4, 6500, 14, 31, 6, 4291559424, 1, 3, 1, 16, 24, 1, 25, 20, 30, 50, 1, 18, 4291559424, 1, 8, 16, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 0, 1, 100, 35, 0];
	ITEMS[219] = ["cannon", 4, 7E3, 14, 32, 6, 4288256256, 1, 3, 0, 80, 120, 1, 30, 80, 90, 60, 1, 17, 4288256256, 1, 32, 32, 16, 16, 0, 0, 50, 10, 5, 100, 0, 0, 0, 0, 0, 50, 3, 0, 50, 70, 6, 1, 6, 2295109939, 1, 12, 48, 16, 16, 0, 5, 25, 20, 0, 98, 1, 0];
	ITEMS[231] = ["homing laser beam", 4, 7500, 14, 33, 6, 4291624755, 1, 3, 0, 8, 12, 5, 30, 20, 30, 70, 1, 11, 4291624755, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 0, 0, 100, 3, 0, 35, 0];
	ITEMS[258] = ["3-round burst", 5, 8E3, 14, 13, 6, 4284900966, 1, 603, 0, 24, 36, 3, 30, 20, 30, 60, 1, 17, 4284900966, 1, 16, 16, 8, 8, 10, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 10, 0];
	ITEMS[317] = ["mini uzi", 5, 8500, 14, 27, 6, 4281545625, 1, 103, 0, 12, 24, 2, 30, 5, 10, 50, 1, 17, 4281545625, 1, 16, 16, 8, 8, 5, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 25, 0];
	ITEMS[333] = ["scattergun", 5, 9E3, 14, 28, 6, 4284883456, 1, 803, 0, 1, 80, 9, 30, 50, 60, 50, 0, 13, 4284883456, 1, 16, 16, 8, 8, 9, 0, 30, 10, 0, 100, 0, 2, 0, 0, 0, 40, 0];
	ITEMS[350] = ["hunting gun", 5, 9500, 14, 29, 6, 4284887859, 1, 3, 0, 140, 160, 1, 50, 50, 60, 120, 1, 17, 4284900966, 1, 16, 32, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 0, 30, 0];
	ITEMS[365] = ["M9 grenade", 6, 1E4, 14, 30, 6, 4294910481, 1, 4, 0, 18, 48, 1, 40, 70, 80, 60, 1, 17, 4294910481, 1, 16, 16, 8, 8, 0, 0, 100, 10, 10, 100, 0, 0, 0, 1, 50, 55, 4, 1, 6, 18, 9, 0, 5, 3439272465, 2, 16, 32, 16, 32, 0, 0, 100, 10, 15, 90, 0, 1];
	ITEMS[399] = ["power laser gun", 6, 11E3, 14, 31, 6, 4291559424, 1, 3, 1, 24, 36, 1, 20, 20, 30, 50, 1, 18, 4291559424, 1, 8, 16, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 0, 1, 100, 45, 0];
	ITEMS[415] = ["wave cannon", 6, 12E3, 14, 32, 6, 4284900864, 1, 3, 0, 120, 180, 1, 30, 80, 90, 60, 1, 17, 4284900864, 1, 32, 32, 16, 16, 0, 0, 50, 10, 5, 100, 0, 0, 0, 0, 0, 70, 9, 0, 100, 150, 6, 1, 11, 4284892194, 2, 12, 40, 20, 20, 25, 10, 50, 20, 0, 98, 1, 0];
	ITEMS[434] = ["pierce homing", 6, 13E3, 14, 33, 6, 4294967091, 1, 3, 0, 12, 16, 7, 30, 20, 30, 70, 1, 11, 4294967091, 1, 8, 16, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 150, 3, 0, 45, 0];
	ITEMS[456] = ["magnum", 7, 15E3, 14, 61, 6, 4291611852, 1, 3, 1, 80, 120, 1, 30, 20, 30, 60, 1, 17, 4291611852, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 15, 0];
	ITEMS[476] = ["micro uzi", 7, 16E3, 14, 27, 6, 4280427110, 1, 103, 0, 16, 32, 3, 30, 5, 10, 50, 1, 17, 4280427110, 1, 16, 16, 8, 8, 5, 0, 50, 10, 0, 100, 0, 0, 0, 0, 0, 35, 0];
	ITEMS[484] = ["triple shotgun", 7, 17E3, 14, 28, 6, 4287120418, 1, 803, 0, 1, 120, 15, 30, 50, 60, 50, 0, 13, 4287120418, 1, 16, 16, 8, 8, 11, 0, 30, 10, 0, 100, 0, 2, 0, 0, 0, 50, 0];
	ITEMS[501] = ["rail gun", 7, 18E3, 14, 29, 6, 4282664004, 1, 3, 0, 300, 320, 1, 50, 50, 60, 150, 1, 17, 4282664004, 1, 16, 32, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 0, 0, 40, 0];
	ITEMS[509] = ["napalm gun", 8, 19E3, 14, 30, 6, 4294906112, 1, 4, 0, 26, 96, 1, 40, 70, 80, 60, 1, 17, 4294906112, 1, 16, 16, 8, 8, 0, 0, 100, 10, 10, 100, 0, 0, 0, 1, 50, 70, 4, 1, 15, 45, 9, 0, 5, 3439269896, 2, 16, 32, 16, 32, 0, 0, 100, 10, 8, 94, 0, 1];
	ITEMS[188] = ["whip", 0, 100, 15, 35, 7, 4294936576, 1, 0, 0, 1, 4, 0, 0, 15, 20, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[189] = ["stone whip", 1, 250, 15, 35, 7, 4287120384, 1, 4, 0, 1, 4, 3, 80, 15, 20, 40, 0, 12, 4282664004, 1, 16, 16, 8, 8, 0, 20, 200, 10, 5, 100, 0, 0, 0, 0, 0, 10, 0, 0, 3, 5, 0];
	ITEMS[190] = ["fire whip", 1, 500, 15, 35, 7, 4294919236, 1, 4, 0, 1, 4, 4, 50, 15, 20, 40, 0, 5, 2298439185, 2, 16, 32, 16, 32, 0, 0, 100, 10, 8, 95, 0, 1, 0, 1, 30, 40, 0, 0, 3, 5, 0];
	ITEMS[191] = ["iron whip", 1, 750, 15, 35, 7, 4289374890, 1, 0, 0, 10, 20, 0, 0, 15, 20, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[192] = ["thunder whip", 1, 1E3, 15, 35, 7, 4294967040, 1, 5, 0, 1, 4, 5, 5, 15, 20, 40, 1, 10, 4294967108, 2, 16, 16, 8, 8, 50, 0, 100, 10, 0, 100, 0, 0, 0, 3, 0, 90, 0, 0, 1, 33, 0];
	ITEMS[193] = ["ice whip", 2, 1500, 15, 35, 7, 4291611903, 1, 103, 0, 2, 5, 5, 30, 15, 20, 40, 1, 4, 2295123199, 2, 16, 16, 8, 8, 0, 30, 200, 10, 5, 100, 0, 1, 0, 2, 20, 60, 0, 0, 15, 20, 0];
	ITEMS[194] = ["thorn whip", 2, 2E3, 15, 35, 7, 4291603080, 1, 3, 0, 2, 6, 7, 20, 15, 20, 40, 1, 9, 4291603080, 1, 16, 16, 8, 8, 0, 5, 100, 10, 0, 100, 1, 0, 0, 0, 0, 80, 0, 0, 18, 22, 0];
	ITEMS[195] = ["poison whip", 2, 2500, 15, 35, 7, 4287103231, 1, 9, 0, 2, 7, 5, 1, 15, 20, 40, 0, 6, 2290614527, 1, 16, 16, 8, 8, 50, 10, 200, 10, 0, 99, 0, 1, 0, 4, 100, 120, 0, 0, 1, 1, 0];
	ITEMS[196] = ["explosion whip", 2, 3E3, 15, 35, 7, 4294927906, 1, 9, 1, 2, 8, 3, 5, 15, 20, 40, 1, 2, 2298430498, 2, 8, 40, 16, 16, 10, 10, 15, 3, 0, 80, 1, 0, 0, 1, 0, 150, 0, 0, 30, 40, 0];
	ITEMS[197] = ["stone chain", 3, 4E3, 15, 36, 7, 4287120384, 1, 4, 0, 3, 9, 3, 80, 15, 20, 40, 0, 13, 4284900966, 1, 16, 16, 8, 8, 0, 20, 200, 10, 7, 100, 0, 0, 0, 0, 0, 40, 0, 0, 18, 30, 0];
	ITEMS[198] = ["fire chain", 3, 4500, 15, 36, 7, 4294919236, 1, 9, 0, 3, 10, 4, 1, 15, 20, 40, 1, 5, 1728026897, 2, 12, 24, 24, 24, 0, 0, 100, 10, 0, 95, 1, 0, 0, 1, 30, 60, 0, 0, 6, 10, 0];
	ITEMS[199] = ["iron chain", 3, 5E3, 15, 36, 7, 4289374890, 1, 0, 0, 20, 40, 0, 0, 15, 20, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[200] = ["thunder chain", 3, 5500, 15, 36, 7, 4294967040, 1, 105, 0, 3, 12, 5, 5, 15, 20, 40, 1, 18, 2298478404, 2, 8, 32, 8, 8, 50, 0, 100, 10, 0, 100, 0, 0, 0, 3, 0, 130, 0, 0, 1, 66, 0];
	ITEMS[201] = ["ice chain", 4, 6E3, 15, 36, 7, 4291611903, 1, 103, 0, 4, 13, 5, 30, 15, 20, 40, 1, 4, 2295123199, 2, 16, 16, 8, 8, 0, 20, 200, 10, 20, 100, 0, 1, 0, 2, 20, 90, 0, 0, 30, 40, 0];
	ITEMS[208] = ["thorn chain", 4, 6500, 15, 36, 7, 4291603080, 1, 803, 0, 4, 14, 15, 20, 15, 20, 40, 1, 9, 4291603080, 1, 16, 16, 8, 8, 0, 5, 100, 10, 0, 100, 1, 0, 0, 0, 0, 120, 0, 0, 18, 22, 0];
	ITEMS[220] = ["poison chain", 4, 7E3, 15, 36, 7, 4287103231, 1, 9, 0, 4, 15, 5, 1, 15, 20, 40, 0, 6, 2290614527, 1, 16, 16, 8, 8, 0, 20, 300, 10, 0, 99, 0, 1, 0, 4, 150, 180, 0, 0, 2, 2, 0];
	ITEMS[232] = ["explosion chain", 4, 7500, 15, 36, 7, 4294927906, 1, 9, 1, 4, 16, 3, 5, 15, 20, 40, 1, 2, 2298430498, 2, 32, 8, 16, 16, 0, 19, 20, 3, 0, 80, 1, 0, 0, 1, 0, 220, 0, 0, 60, 80, 0];
	ITEMS[259] = ["stone flail", 5, 8E3, 15, 37, 7, 4287120384, 1, 4, 0, 5, 17, 3, 80, 15, 20, 40, 0, 13, 4284900966, 1, 16, 16, 8, 8, 0, 20, 200, 10, 7, 100, 0, 0, 0, 0, 0, 60, 0, 0, 32, 52, 0];
	ITEMS[318] = ["fire flail", 5, 8500, 15, 37, 7, 4294919236, 1, 9, 0, 5, 18, 4, 1, 15, 20, 40, 1, 5, 2298452241, 2, 8, 16, 20, 20, 0, 0, 300, 10, 0, 99, 1, 0, 0, 1, 30, 80, 0, 0, 8, 15, 0];
	ITEMS[334] = ["iron flail", 5, 9E3, 15, 37, 7, 4289374890, 1, 0, 0, 40, 80, 0, 0, 15, 20, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[351] = ["thunder flail", 5, 9500, 15, 37, 7, 4294967040, 1, 5, 0, 5, 20, 5, 5, 15, 20, 40, 1, 18, 4294967108, 2, 6, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 3, 0, 150, 0, 0, 1, 99, 0];
	ITEMS[366] = ["ice flail", 6, 1E4, 15, 37, 7, 4291611903, 1, 109, 0, 6, 21, 5, 3, 15, 20, 40, 1, 4, 2295123199, 2, 16, 16, 8, 8, 0, 20, 200, 10, 20, 100, 0, 1, 0, 2, 20, 120, 0, 0, 45, 60, 0];
	ITEMS[400] = ["thorn flail", 6, 11E3, 15, 37, 7, 4291603080, 1, 403, 0, 6, 22, 45, 20, 15, 20, 40, 1, 9, 4291603080, 1, 8, 8, 8, 8, 0, 5, 100, 10, 0, 100, 1, 0, 0, 0, 0, 160, 0, 0, 18, 22, 0];
	ITEMS[416] = ["poison flail", 6, 12E3, 15, 37, 7, 4287103231, 1, 9, 0, 6, 23, 5, 1, 15, 20, 40, 0, 6, 2290614527, 1, 16, 16, 8, 8, 100, 20, 300, 20, 0, 99, 0, 1, 0, 4, 200, 240, 0, 0, 4, 5, 0];
	ITEMS[435] = ["explosion flail", 6, 13E3, 15, 37, 7, 4294927906, 1, 9, 1, 6, 24, 3, 5, 15, 20, 40, 1, 19, 2298430498, 2, 16, 16, 16, 16, 0, 19, 20, 3, 0, 80, 1, 0, 0, 1, 0, 360, 0, 0, 120, 160, 0];
	ITEMS[457] = ["morning star", 7, 15E3, 15, 38, 7, 4289374890, 1, 0, 0, 100, 200, 0, 0, 15, 20, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[477] = ["stone ms", 7, 16E3, 15, 38, 7, 4287120384, 1, 104, 0, 7, 26, 3, 80, 15, 20, 40, 0, 13, 4282664004, 1, 16, 16, 8, 8, 0, 20, 200, 10, 9, 100, 0, 0, 0, 0, 0, 70, 0, 0, 60, 110, 0];
	ITEMS[485] = ["fire ms", 7, 17E3, 15, 38, 7, 4294919236, 1, 9, 1, 7, 27, 4, 1, 15, 20, 40, 1, 22, 1728026897, 2, 16, 16, 20, 20, 0, 0, 100, 10, 0, 98, 1, 0, 0, 1, 30, 90, 0, 0, 8, 15, 0];
	ITEMS[502] = ["thunder ms", 7, 18E3, 15, 38, 7, 4294967040, 1, 5, 0, 7, 28, 5, 5, 15, 20, 40, 1, 20, 4294967108, 2, 16, 32, 8, 8, 50, 0, 100, 10, 0, 100, 0, 0, 0, 3, 0, 170, 0, 0, 1, 222, 0];
	ITEMS[510] = ["ice ms", 8, 19E3, 15, 38, 7, 4291611903, 1, 11, 0, 8, 29, 5, 3, 15, 20, 40, 1, 4, 2295123199, 2, 16, 16, 8, 8, 0, 20, 200, 10, 10, 100, 0, 1, 0, 2, 25, 120, 0, 0, 90, 120, 0];
	ITEMS[289] = ["ring", 0, 100, 18, 41, 8, 4291611852, 25, 0, 0, 2, 3, 0, 0, 20, 30, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[290] = ["fire ring", 1, 250, 18, 41, 8, 4294919236, 25, 3, 0, 3, 4, 1, 1, 20, 30, 60, 0, 6, 2298439185, 2, 24, 24, 16, 16, 0, 0, 100, 10, 0, 98, 1, 0, 0, 1, 50, 30, 0, 0, 4, 6, 0];
	ITEMS[291] = ["thunder ring", 1, 500, 18, 41, 8, 4294967108, 25, 11, 0, 3, 4, 7, 10, 20, 30, 60, 1, 10, 4294967040, 1, 16, 16, 16, 16, 0, 10, 100, 10, 0, 90, 0, 0, 0, 3, 0, 90, 0, 0, 1, 29, 0];
	ITEMS[292] = ["long ring", 1, 750, 18, 41, 8, 4287120384, 25, 0, 0, 5, 10, 0, 0, 20, 30, 90, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[293] = ["ice ring", 1, 1E3, 18, 41, 8, 4289374975, 25, 9, 0, 3, 4, 3, 1, 20, 30, 60, 1, 4, 4289374975, 2, 16, 24, 16, 16, 0, 25, 50, 10, 0, 90, 0, 1, 0, 2, 20, 80, 0, 0, 15, 30, 0];
	ITEMS[294] = ["thorn ring", 2, 1500, 18, 41, 8, 4291603080, 25, 9, 0, 4, 5, 16, 5, 20, 30, 60, 1, 9, 4291603080, 1, 16, 16, 16, 16, 0, 10, 100, 10, 0, 100, 0, 0, 0, 0, 0, 110, 0, 0, 10, 30, 0];
	ITEMS[295] = ["power ring", 2, 2E3, 18, 41, 8, 4294967295, 25, 0, 0, 15, 30, 0, 0, 20, 30, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[296] = ["quick ring", 2, 2500, 18, 41, 8, 4288282521, 25, 3, 1, 4, 5, 1, 1, 5, 10, 60, 0, 13, 4289396650, 1, 80, 12, 40, 8, 0, 15, 50, 10, 0, 98, 1, 0, 0, 0, 0, 50, 0, 0, 10, 10, 0];
	ITEMS[297] = ["charge ring", 2, 3E3, 18, 41, 8, 4294936644, 25, 3, 0, 4, 5, 1, 1, 20, 30, 60, 0, 2, 4294919236, 1, 16, 16, 16, 16, 0, 200, 200, 25, 0, 100, 1, 0, 50, 1, 50, 200, 2, 0, 4, 6, 20, 0, 6, 4294927889, 2, 16, 16, 16, 16, 0, 0, 50, 10, 0, 86, 0, 0];
	ITEMS[298] = ["fire circle", 3, 4E3, 18, 42, 8, 4294919236, 25, 3, 0, 5, 6, 1, 1, 20, 30, 60, 0, 6, 4294927889, 2, 16, 24, 16, 16, 0, 0, 100, 10, 0, 100, 1, 0, 0, 1, 50, 120, 2, 0, 6, 8, 20, 0, 6, 2298439185, 2, 16, 16, 16, 16, 0, 0, 50, 10, 0, 86, 0, 0];
	ITEMS[299] = ["thunder circle", 3, 4500, 18, 42, 8, 4294967108, 25, 11, 0, 5, 6, 11, 15, 20, 30, 60, 1, 10, 4294967040, 1, 16, 16, 16, 16, 0, 10, 100, 10, 0, 90, 0, 2, 0, 3, 0, 120, 0, 0, 1, 59, 0];
	ITEMS[300] = ["long circle", 3, 5E3, 18, 42, 8, 4287120384, 25, 0, 0, 10, 15, 0, 0, 20, 30, 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[301] = ["ice circle", 3, 5500, 18, 42, 8, 4289374975, 25, 11, 0, 5, 6, 1, 1, 20, 30, 60, 0, 7, 4289374975, 2, 16, 16, 16, 16, 0, 100, 100, 10, 0, 100, 1, 0, 0, 2, 20, 120, 2, 0, 5, 10, 30, 1, 4, 2292886271, 2, 8, 24, 8, 8, 0, 10, 50, 10, 0, 86, 0, 0];
	ITEMS[302] = ["thorn circle", 4, 6E3, 18, 42, 8, 4291603080, 25, 9, 0, 6, 7, 16, 5, 20, 30, 60, 1, 9, 4291603080, 1, 16, 16, 16, 16, 0, 10, 100, 10, 0, 100, 0, 2, 0, 0, 0, 130, 0, 0, 20, 60, 0];
	ITEMS[303] = ["power circle", 4, 6500, 18, 42, 8, 4294967295, 25, 0, 0, 30, 60, 0, 0, 20, 30, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[304] = ["quick circle", 4, 7E3, 18, 42, 8, 4288282521, 25, 9, 1, 6, 7, 3, 1, 5, 10, 60, 0, 13, 4289396650, 1, 24, 24, 16, 16, 0, 15, 50, 10, 0, 95, 1, 0, 0, 0, 0, 50, 0, 0, 10, 10, 0];
	ITEMS[305] = ["charge circle", 4, 7500, 18, 42, 8, 4294967108, 25, 3, 0, 6, 7, 1, 1, 20, 30, 60, 0, 6, 4284900966, 1, 32, 24, 16, 16, 0, 200, 200, 25, 0, 100, 1, 0, 50, 3, 50, 400, 2, 0, 1, 99, 20, 1, 10, 2298478336, 2, 16, 16, 16, 16, 0, 0, 100, 10, 80, 86, 0, 0];
	ITEMS[306] = ["fire chakram", 5, 8E3, 18, 43, 8, 4294919236, 25, 3, 0, 7, 8, 1, 5, 20, 30, 60, 0, 6, 4294927889, 2, 16, 24, 16, 16, 0, 0, 180, 10, 2, 100, 0, 2, 0, 1, 50, 150, 2, 0, 12, 16, 20, 0, 6, 2298439185, 2, 16, 16, 16, 16, 0, 0, 50, 10, 0, 86, 0, 0];
	ITEMS[319] = ["thunder chakram", 5, 8500, 18, 43, 8, 4294967108, 25, 11, 0, 7, 8, 15, 20, 20, 30, 60, 1, 10, 2298478336, 1, 16, 16, 16, 16, 0, 10, 100, 10, 0, 95, 0, 2, 0, 3, 0, 150, 0, 0, 1, 149, 0];
	ITEMS[335] = ["long chakram", 5, 9E3, 18, 43, 8, 4287120384, 25, 0, 0, 20, 30, 0, 0, 20, 30, 150, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[352] = ["ice chakram", 5, 9500, 18, 43, 8, 4289374975, 20, 9, 0, 7, 8, 3, 1, 20, 30, 60, 1, 4, 4289374975, 2, 16, 24, 16, 16, 0, 25, 50, 10, 0, 90, 0, 1, 0, 2, 20, 40, 0, 0, 30, 45, 0];
	ITEMS[367] = ["thorn chakram", 6, 1E4, 18, 43, 8, 4291603080, 25, 9, 0, 8, 9, 16, 5, 20, 30, 60, 1, 9, 4291603080, 1, 16, 16, 16, 16, 0, 10, 150, 10, 0, 90, 0, 2, 0, 0, 0, 150, 0, 0, 30, 90, 0];
	ITEMS[401] = ["power chakram", 6, 11E3, 18, 43, 8, 4294967295, 20, 0, 0, 60, 120, 0, 0, 20, 30, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[417] = ["quick chakram", 6, 12E3, 18, 43, 8, 4288282521, 25, 9, 1, 8, 9, 3, 1, 5, 10, 60, 1, 9, 4289396650, 2, 16, 16, 16, 16, 0, 15, 50, 10, 0, 95, 1, 0, 0, 0, 0, 50, 0, 0, 33, 33, 0];
	ITEMS[436] = ["charge chakram", 6, 13E3, 18, 43, 8, 4288269567, 25, 11, 0, 8, 9, 1, 1, 20, 30, 60, 0, 7, 4288269567, 2, 16, 16, 16, 16, 0, 200, 200, 25, 0, 100, 0, 2, 0, 2, 20, 600, 2, 0, 40, 60, 50, 1, 4, 2292886271, 2, 8, 16, 8, 8, 0, 5, 100, 10, 0, 104, 0, 0];
	ITEMS[458] = ["fire god", 7, 15E3, 18, 44, 8, 4294919236, 25, 109, 0, 9, 10, 20, 1, 20, 30, 60, 1, 22, 1728013841, 2, 16, 16, 16, 16, 0, 0, 100, 15, 0, 98, 1, 0, 0, 1, 50, 200, 0, 0, 36, 48, 0];
	ITEMS[478] = ["thunder god", 7, 16E3, 18, 44, 8, 4294967108, 25, 11, 0, 9, 10, 20, 20, 20, 30, 60, 1, 10, 2298478336, 1, 16, 16, 16, 16, 0, 5, 100, 10, 0, 98, 0, 2, 0, 3, 0, 180, 0, 0, 1, 399, 0];
	ITEMS[486] = ["long god", 7, 17E3, 18, 44, 8, 4287120384, 10, 0, 0, 40, 60, 0, 0, 20, 30, 180, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[503] = ["ice god", 7, 18E3, 18, 44, 8, 4289374975, 25, 11, 0, 9, 10, 1, 1, 20, 30, 60, 0, 7, 4289374975, 2, 16, 16, 16, 16, 0, 100, 100, 10, 0, 100, 1, 0, 0, 2, 30, 120, 2, 0, 30, 45, 30, 1, 9, 2292886271, 2, 16, 16, 8, 8, 0, 10, 50, 10, 0, 86, 0, 0];
	ITEMS[511] = ["thorn god", 8, 19E3, 18, 44, 8, 4291603080, 25, 9, 0, 10, 11, 32, 5, 20, 30, 60, 1, 9, 4291603080, 1, 16, 16, 16, 16, 0, 10, 100, 10, 0, 100, 0, 2, 0, 0, 0, 160, 0, 0, 40, 120, 0];
	ITEMS[270] = ["charge punch", 5, 8500, 3, 2, 1, 4284914175, 1, 109, 0, 9, 18, 5, 2, 15, 30, 15, 1, 9, 2282841855, 2, 32, 60, 32, 32, 0, 0, 200, 10, 0, 90, 1, 0, 0, 1, 50, 300, 0, 0, 8, 12, 0];
	ITEMS[271] = ["wooden sword", 5, 8500, 4, 22, 2, 4287120384, 1, 0, 0, 1, 1, 0, 0, 20, 30, 50, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[272] = ["pyramid arrow", 5, 8500, 5, 4, 3, 4284874803, 1, 4, 0, 9, 15, 1, 80, 30, 40, 90, 1, 3, 4284874803, 1, 16, 16, 8, 8, 0, 5, 500, 10, 8, 100, 0, 0, 0, 4, 66, 35, 2, 0, 3, 3, 30, 0, 6, 4284874854, 2, 16, 16, 16, 16, 0, 0, 66, 10, 0, 86, 0, 0];
	ITEMS[273] = ["atomic ray", 5, 8500, 6, 25, 4, 4294927889, 1, 3, 0, 10, 20, 1, 20, 80, 90, 90, 1, 18, 4294927889, 2, 12, 20, 16, 16, 0, 0, 500, 10, 0, 100, 0, 2, 0, 1, 80, 0, 0];
	ITEMS[274] = ["high light staff", 3, 8500, 12, 34, 5, 4294967295, 1, 6, 0, 10, 15, 1, 0, 80, 90, 140, 0, 13, 2298478591, 2, 16, 16, 8, 8, 0, 100, 200, 40, 0, 100, 1, 0, 50, 3, 0, 0, 0];
	ITEMS[275] = ["missile", 5, 8500, 14, 32, 6, 4294967295, 1, 4, 1, 300, 500, 1, 80, 160, 180, 80, 1, 17, 4294967295, 1, 16, 32, 16, 16, 0, 5, 100, 10, 10, 100, 0, 0, 0, 0, 0, 100, 2, 0, 0, 0, 50, 1, 6, 2288412262, 1, 16, 16, 16, 16, 10, 25, 25, 20, 0, 80, 0, 0];
	ITEMS[276] = ["freeze whip", 5, 8500, 15, 35, 7, 4291611903, 1, 105, 0, 5, 18, 1, 5, 15, 20, 40, 1, 8, 2295123199, 2, 8, 8, 8, 8, 50, 0, 100, 10, 0, 100, 0, 0, 0, 5, 5, 60, 0, 0, 3, 5, 0];
	ITEMS[307] = ["chakram", 5, 8500, 18, 43, 8, 4282664004, 5, 0, 0, 1, 1, 0, 0, 20, 30, 30, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[402] = ["Indra arrow", 6, 2E4, 5, 4, 3, 4294967040, 1, 4, 0, 1, 3333, 1, 120, 60, 80, 90, 1, 3, 4294967040, 1, 16, 16, 8, 8, 0, 0, 500, 10, 8, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[403] = ["Napalm bomb", 6, 2E4, 14, 32, 6, 4294914833, 1, 4, 0, 0, 0, 1, 120, 160, 180, 80, 1, 17, 4294914833, 1, 32, 32, 8, 8, 0, 200, 200, 10, 5, 100, 0, 0, 0, 1, 50, 200, 8, 1, 8, 8, 30, 1, 6, 2298426129, 2, 32, 32, 24, 24, 10, 0, 150, 30, 0, 95, 0, 2];
	ITEMS[512] = ["needle cestus", 8, 2E4, 3, 20, 1, 4291603080, 1, 303, 0, 12, 24, 60, 20, 15, 36, 15, 1, 9, 4291603080, 1, 4, 8, 8, 8, 15, 5, 10, 10, 0, 90, 0, 2, 0, 0, 0, 100, 0, 0, 13, 15, 0];
	ITEMS[513] = ["lightsaber", 8, 2E4, 4, 23, 2, 4294927974, 2, 7, 0, 30, 35, 1, 1, 20, 30, 30, 1, 18, 2298430532, 2, 16, 32, 16, 16, 0, 0, 10, 10, 0, 100, 0, 0, 0, 3, 0, 130, 0, 0, 1, 150, 130];
	ITEMS[514] = ["vigintuple arrow", 8, 2E4, 5, 17, 3, 4294956800, 1, 1604, 0, 48, 72, 20, 80, 45, 60, 90, 1, 3, 4294956800, 1, 16, 16, 8, 8, 0, 0, 300, 10, 8, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[515] = ["ice missile", 8, 2E4, 6, 26, 4, 4287138047, 1, 3, 0, 0, 0, 3, 30, 120, 135, 90, 1, 17, 4287138047, 2, 16, 16, 16, 16, 0, 100, 100, 10, 0, 100, 0, 0, 0, 2, 30, 0, 2, 0, 10, 15, 90, 1, 6, 4287138047, 2, 12, 12, 8, 8, 0, 4, 5, 20, 0, 90, 0, 0];
	ITEMS[516] = ["freeze exp rod", 8, 2E4, 12, 60, 5, 4291611903, 1, 6, 1, 5, 15, 1, 0, 80, 90, 70, 0, 21, 4291611903, 2, 16, 16, 16, 16, 0, 0, 100, 40, 0, 100, 0, 0, 0, 5, 10, 0, 0];
	ITEMS[517] = ["slow laser gun", 8, 2E4, 14, 31, 6, 4291559424, 1, 3, 1, 32, 48, 1, 10, 20, 30, 50, 1, 18, 4291559424, 1, 8, 12, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 0, 1, 100, 55, 0];
	ITEMS[518] = ["thorn ms", 8, 2E4, 15, 38, 7, 4291603080, 1, 103, 0, 8, 30, 90, 20, 15, 20, 40, 1, 9, 4291603080, 1, 8, 8, 8, 8, 0, 0, 100, 10, 0, 100, 1, 0, 0, 0, 0, 160, 0, 0, 18, 22, 0];
	ITEMS[519] = ["power god", 8, 2E4, 18, 44, 8, 4294967295, 10, 0, 0, 180, 360, 0, 0, 20, 30, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[520] = ["spark cestus", 8, 21E3, 3, 20, 1, 4294967176, 1, 109, 0, 12, 24, 12, 5, 15, 36, 15, 1, 15, 4294967244, 2, 8, 8, 8, 8, 8, 20, 120, 10, 1, 90, 0, 2, 50, 3, 0, 120, 0, 0, 1, 199, 0];
	ITEMS[521] = ["flame GS", 8, 21E3, 4, 23, 2, 4294919236, 1, 7, 1, 30, 35, 1, 50, 20, 30, 30, 1, 22, 2298439185, 2, 10, 20, 16, 16, 0, 0, 120, 10, 0, 90, 1, 0, 50, 1, 50, 130, 0, 0, 9, 12, 130];
	ITEMS[522] = ["oct poison shot", 8, 21E3, 5, 14, 3, 4288269312, 1, 3, 0, 8, 12, 8, 15, 30, 40, 90, 1, 3, 4288269312, 1, 16, 16, 4, 4, 0, 0, 300, 10, 0, 100, 0, 0, 0, 4, 50, 50, 1, 0, 4, 4, 1, 0, 6, 2291780608, 1, 24, 24, 8, 8, 0, 0, 100, 10, 0, 100, 1, 0];
	ITEMS[523] = ["pyroclastic flow", 8, 21E3, 6, 26, 4, 4294919168, 1, 4, 0, 2, 6, 1, 50, 120, 135, 90, 1, 12, 4294919168, 2, 16, 16, 8, 8, 0, 0, 200, 10, 5, 100, 0, 0, 0, 1, 50, 0, 2, 1, 9, 12, 50, 0, 5, 1157588497, 2, 16, 32, 16, 32, 0, 0, 150, 10, 5, 90, 0, 1];
	ITEMS[524] = ["giga exp rod", 8, 21E3, 12, 60, 5, 4294936576, 1, 6, 1, 10, 15, 1, 0, 80, 90, 70, 0, 2, 2298447906, 2, 48, 48, 48, 48, 0, 0, 100, 40, 0, 100, 0, 0, 0, 1, 0, 0, 0];
	ITEMS[525] = ["rocket launcher", 8, 21E3, 14, 32, 6, 4282663936, 1, 3, 0, 160, 240, 1, 30, 80, 90, 60, 1, 17, 4284900864, 1, 32, 32, 16, 16, 0, 0, 50, 10, 5, 100, 0, 0, 0, 0, 0, 80, 3, 0, 200, 300, 6, 1, 24, 4284892194, 2, 16, 64, 24, 24, 5, 5, 25, 20, 0, 90, 1, 0];
	ITEMS[526] = ["poison ms", 8, 21E3, 15, 38, 7, 4287103231, 1, 9, 1, 8, 31, 5, 1, 15, 20, 40, 0, 6, 2290614527, 1, 24, 24, 8, 8, 0, 20, 300, 20, 0, 99, 0, 1, 0, 4, 250, 300, 0, 0, 9, 9, 0];
	ITEMS[527] = ["quick god", 8, 21E3, 18, 44, 8, 4288282521, 10, 9, 1, 10, 11, 5, 1, 5, 10, 60, 1, 20, 4289396650, 2, 16, 16, 16, 16, 0, 15, 50, 10, 0, 95, 1, 0, 0, 0, 0, 50, 0, 0, 55, 55, 0];
	ITEMS[549] = ["sonic cestus", 8, 22E3, 3, 20, 1, 4294967295, 1, 5703, 1, 80, 120, 9, 10, 5, 8, 15, 1, 22, 1157627903, 2, 16, 8, 0, 0, 0, 10, 10, 5, 0, 90, 1, 0, 0, 0, 0, -1, 0];
	ITEMS[550] = ["frozen GS", 8, 22E3, 4, 23, 2, 4288269567, 1, 3, 1, 30, 35, 1, 20, 20, 30, 30, 1, 4, 3432631551, 2, 16, 64, 48, 48, 0, 5, 10, 40, 0, 100, 0, 0, 0, 5, 5, 130, 0, 0, 40, 60, 9];
	ITEMS[551] = ["hell fire shot", 8, 22E3, 5, 14, 3, 4294919236, 1, 3, 0, 16, 24, 3, 7, 30, 40, 90, 1, 3, 4294919236, 1, 16, 16, 8, 8, 0, 0, 300, 10, 0, 100, 0, 0, 0, 1, 50, 55, 5, 1, 24, 32, 3, 1, 22, 4294927889, 2, 16, 16, 16, 16, 50, 0, 100, 10, 0, 100, 1, 0];
	ITEMS[552] = ["thunderbolt", 8, 22E3, 6, 26, 4, 4294967091, 2, 3, 0, 0, 0, 1, 30, 120, 135, 90, 0, 2, 4294967142, 2, 16, 16, 4, 4, 0, 0, 200, 10, 0, 100, 0, 0, 0, 3, 0, 0, 1, 1, 1, 999, 1, 0, 18, 4294967142, 2, 64, 512, 64, 512, 0, 20, 50, 10, 0, 100, 0, 0];
	ITEMS[553] = ["power rod", 8, 22E3, 12, 60, 5, 4288217088, 1, 6, 0, 100, 100, 1, 0, 80, 90, 30, 0, 21, 4288217088, 2, 24, 24, 24, 24, 0, 0, 100, 40, 0, 100, 0, 0, 0, 0, 0, 0, 0];
	ITEMS[554] = ["homing laser wave", 8, 22E3, 14, 33, 6, 4294967193, 1, 803, 0, 20, 30, 9, 30, 20, 30, 70, 1, 11, 4294967193, 1, 16, 16, 8, 8, 0, 0, 200, 10, 0, 100, 1, 0, 200, 3, 0, 55, 0];
	ITEMS[555] = ["explosion ms", 8, 22E3, 15, 38, 7, 4294927906, 1, 9, 1, 8, 32, 3, 5, 15, 20, 40, 1, 19, 2298430498, 2, 8, 40, 16, 16, 10, 10, 15, 3, 0, 80, 1, 0, 0, 1, 0, 500, 0, 0, 360, 480, 0];
	ITEMS[556] = ["charge god", 8, 22E3, 18, 44, 8, 4282664004, 25, 3, 0, 10, 11, 1, 1, 20, 30, 60, 0, 6, 4284892194, 1, 16, 16, 16, 16, 0, 200, 200, 25, 0, 100, 1, 0, 50, 0, 0, 800, 2, 1, 40, 60, 50, 1, 24, 4284892194, 2, 16, 64, 24, 24, 0, 5, 25, 20, 0, 90, 0, 0];
	ITEMS[19] = ["White Stone", 1, 400, 7, 6, 9, 4294967295, ld, 50, 0, "LP +50", ""];
	ITEMS[20] = ["Red Stone", 1, 400, 7, 6, 9, 4294914867, md, 5, 0, "str +5", ""];
	ITEMS[21] = ["Green Stone", 1, 400, 7, 6, 9, 4281597747, nd, 5, 0, "dex +5", ""];
	ITEMS[22] = ["Blue Stone", 1, 400, 7, 6, 9, 4281545727, od, 5, 0, "mag +5", ""];
	ITEMS[23] = ["Black Stone", 1, 400, 7, 6, 9, 4284900966, pd, 2, 0, "str dex mag +2", ""];
	ITEMS[24] = ["Red Crystal", 1, 1200, 8, 7, 9, 4294936712, qd, 1, 3, "AT +(1-3)", ""];
	ITEMS[25] = ["Yellow Crystal", 1, 1200, 8, 7, 9, 4294967176, rd, 20, 0, "AT +20%", ""];
	ITEMS[26] = ["Silver Crystal", 1, 1200, 8, 7, 9, 4291611852, sd, 1, 0, "Defense +1", ""];
	ITEMS[27] = ["Purple Crystal", 1, 1200, 8, 7, 9, 4291598847, td, 10, 0, "Magic Defense 10%", ""];
	ITEMS[28] = ["Black Crystal", 1, 1200, 8, 7, 9, 4284900966, ud, 10, 0, "Block rate 10%", ""];
	ITEMS[29] = ["Vampire's Card", 1, 4E3, 10, 9, 9, 4288217088, vd, 3, 0, "3% LP recovery", "per damage"];
	ITEMS[30] = ["ONIGIRI's Card", 1, 8E3, 10, 9, 9, 4294967295, wd, 5, 0, "5% chance of", "ONIGIRI drop per hit"];
	ITEMS[31] = ["Ruby", 1, 2E3, 9, 8, 9, 4294901760, yd, 1, 2, "Add 1-2 fire", "damage"];
	ITEMS[32] = ["Garnet", 1, 2E3, 9, 8, 9, 4294914867, zd, 20, 0, "+0.4s Fire Length", ""];
	ITEMS[33] = ["Sapphire", 1, 2E3, 9, 8, 9, 4284914175, Ad, 3, 5, "Add 3-5 ice", "damage"];
	ITEMS[34] = ["Aquamarine", 1, 2E3, 9, 8, 9, 4284927231, Bd, 5, 0, "+5% Cold effect", ""];
	ITEMS[35] = ["Topaz", 1, 2E3, 9, 8, 9, 4294954035, Cd, 0, 4, "Add 0-4 thunder", "damage"];
	ITEMS[36] = ["Emerald", 1, 2E3, 9, 8, 9, 4281597747, Dd, 0, 1, "Add 0-1 poison", "damage"];
	ITEMS[37] = ["Peridot", 1, 2E3, 9, 8, 9, 4288282419, Ed, 50, 0, "+1s Poison Length", ""];
	ITEMS[38] = ["Diamond", 1, 4E3, 9, 8, 9, 4294967295, Fd, 5, 0, "+0.1s Freeze Length", ""];
	ITEMS[39] = ["Quick's Card", 1, 4E3, 10, 46, 9, 4287124736, Gd, 10, 0, "-10% Limit AGI", ""];
	ITEMS[40] = ["Long Sword's Card", 1, 4E3, 10, 47, 9, 4281545523, Hd, 5, 0, "+5 Length of sword", ""];
	ITEMS[41] = ["Catapult's Card", 1, 4E3, 10, 48, 9, 4284887808, Id, 20, 0, "+20 Length", ""];
	ITEMS[42] = ["Pierce's Card", 1, 4E3, 10, 49, 9, 4291611903, Jd, 25, 0, "25% chance of", "penetrate"];
	ITEMS[43] = ["Guide's Card", 1, 4E3, 10, 50, 9, 4288282521, Kd, 10, 0, "+10 guide length", ""];
	ITEMS[44] = ["Bullet's Card", 1, 4E3, 10, 51, 9, 4281545523, Ld, 1, 0, "+1 bullet", ""];
	ITEMS[45] = ["Explosion's Card", 1, 4E3, 10, 52, 9, 4294940928, Md, 25, 0, "25% chance of", "Explosion damage"];
	ITEMS[47] = ["Critical's Card", 1, 4E3, 10, 53, 9, 4294967142, Od, 25, 100, "25% chance of", "AT +100%"];
	ITEMS[46] = ["Berserk Card", 1, 4E3, 10, 54, 9, 4291559424, Nd, 50, 50, "AT +50%", "DF -50%"];
	ITEMS[341] = ["Big Card", 1, 4E3, 10, 55, 9, 4293848814, Yd, 50, 0, "50% Attack range", ""];
	ITEMS[51] = ["Bronze Medal", 1, 2E3, 11, 10, 9, 4292708369, Qd, 10, 0, "+10% Drop rate", ""];
	ITEMS[52] = ["Silver Medal", 1, 2E3, 11, 10, 9, 4291611852, Rd, 10, 0, "+10% ONIGIRI Drop", ""];
	ITEMS[53] = ["Gold Medal", 1, 2E3, 11, 10, 9, 4294958336, Sd, 10, 0, "+10% Gold UP", ""];
	ITEMS[48] = ["Iron Medal", 1, 2E3, 11, 10, 9, 4284900966, Td, 10, 0, "+10% EXP UP", ""];
	ITEMS[243] = ["Ice Charm", 1, 2E3, 16, 39, 9, 4284927231, Ud, 50, 0, "50% Ice invalid", ""];
	ITEMS[244] = ["Poison Charm", 1, 2E3, 16, 39, 9, 4288282419, Vd, 50, 0, "50% Poison invalid", ""];
	ITEMS[245] = ["Freeze Charm", 1, 2E3, 16, 39, 9, 4294967295, Wd, 50, 0, "50% Freeze invalid", ""];
	ITEMS[50] = ["", 0, 4E3, 10, 9, 9, 4294967295, 0, 0, 0, "", ""];
	ITEMS[84] = ["White Stone", 2, 800, 7, 6, 9, 4294967295, ld, 100, 0, "LP +100", ""];
	ITEMS[85] = ["Red Stone", 2, 800, 7, 6, 9, 4294914867, md, 10, 0, "str +10", ""];
	ITEMS[86] = ["Green Stone", 2, 800, 7, 6, 9, 4281597747, nd, 10, 0, "dex +10", ""];
	ITEMS[87] = ["Blue Stone", 2, 800, 7, 6, 9, 4281545727, od, 10, 0, "mag +10", ""];
	ITEMS[88] = ["Black Stone", 2, 800, 7, 6, 9, 4284900966, pd, 4, 0, "str dex mag +4", ""];
	ITEMS[89] = ["Red Crystal", 2, 2400, 8, 7, 9, 4294936712, qd, 2, 6, "AT +(2-6)", ""];
	ITEMS[90] = ["Yellow Crystal", 2, 2400, 8, 7, 9, 4294967176, rd, 30, 0, "AT +30%", ""];
	ITEMS[91] = ["Silver Crystal", 2, 2400, 8, 7, 9, 4291611852, sd, 3, 0, "Defense +3", ""];
	ITEMS[92] = ["Purple Crystal", 2, 2400, 8, 7, 9, 4291598847, td, 20, 0, "Magic Defense 20%", ""];
	ITEMS[93] = ["Black Crystal", 2, 2400, 8, 7, 9, 4284900966, ud, 20, 0, "Block rate 20%", ""];
	ITEMS[94] = ["Vampire's Card", 3, 8E3, 10, 9, 9, 4288217088, vd, 4, 0, "4% LP recovery", "per damage"];
	ITEMS[95] = ["Gold rush Card", 1, 16E3, 10, 9, 9, 4294967040, xd, 5, 0, "5% chance of", "GOLD drop per hit"];
	ITEMS[96] = ["Ruby", 2, 4E3, 9, 8, 9, 4294901760, yd, 3, 4, "Add 3-4 fire", "damage"];
	ITEMS[97] = ["Garnet", 2, 4E3, 9, 8, 9, 4294914867, zd, 30, 0, "+0.6s Fire Length", ""];
	ITEMS[98] = ["Sapphire", 2, 4E3, 9, 8, 9, 4284914175, Ad, 6, 10, "Add 6-10 ice", "damage"];
	ITEMS[99] = ["Aquamarine", 2, 4E3, 9, 8, 9, 4284927231, Bd, 10, 0, "+10% Cold effect", ""];
	ITEMS[100] = ["Topaz", 2, 4E3, 9, 8, 9, 4294954035, Cd, 0, 9, "Add 0-9 thunder", "damage"];
	ITEMS[101] = ["Emerald", 2, 4E3, 9, 8, 9, 4281597747, Dd, 1, 1, "Add 1-1 poison", "damage"];
	ITEMS[102] = ["Peridot", 2, 4E3, 9, 8, 9, 4288282419, Ed, 100, 0, "+2s Poison Length", ""];
	ITEMS[103] = ["Diamond", 2, 4E3, 9, 8, 9, 4294967295, Fd, 10, 0, "+0.2s Freeze Length", ""];
	ITEMS[104] = ["Quick's Card", 2, 8E3, 10, 46, 9, 4287124736, Gd, 20, 0, "-20% Limit AGI", ""];
	ITEMS[105] = ["Long Sword's Card", 2, 8E3, 10, 47, 9, 4281545523, Hd, 8, 0, "+8 Length of sword", ""];
	ITEMS[106] = ["Catapult's Card", 2, 8E3, 10, 48, 9, 4284887808, Id, 40, 0, "+40 Length", ""];
	ITEMS[107] = ["Pierce's Card", 2, 8E3, 10, 49, 9, 4291611903, Jd, 50, 0, "50% chance of", "penetrate"];
	ITEMS[108] = ["Guide's Card", 2, 8E3, 10, 50, 9, 4288282521, Kd, 20, 0, "+20 guide length", ""];
	ITEMS[109] = ["Bullet's Card", 2, 8E3, 10, 51, 9, 4281545523, Ld, 2, 0, "+2 bullet", ""];
	ITEMS[110] = ["Explosion's Card", 2, 8E3, 10, 52, 9, 4294940928, Md, 50, 0, "50% chance of", "Explosion damage"];
	ITEMS[111] = ["Critical's Card", 2, 8E3, 10, 53, 9, 4294967142, Od, 25, 150, "25% chance of", "AT +150%"];
	ITEMS[130] = ["Berserk Card", 2, 8E3, 10, 54, 9, 4291559424, Nd, 100, 100, "AT +100%", "DF -100%"];
	ITEMS[342] = ["Big Card", 2, 8E3, 10, 55, 9, 4293848814, Yd, 100, 0, "100% Attack range", ""];
	ITEMS[112] = ["Bronze Medal", 2, 4E3, 11, 10, 9, 4292708369, Qd, 20, 0, "+20% Drop rate", ""];
	ITEMS[113] = ["Silver Medal", 2, 4E3, 11, 10, 9, 4291611852, Rd, 20, 0, "+20% ONIGIRI Drop", ""];
	ITEMS[114] = ["Gold Medal", 2, 4E3, 11, 10, 9, 4294958336, Sd, 20, 0, "+20% Gold UP", ""];
	ITEMS[49] = ["Iron Medal", 2, 4E3, 11, 10, 9, 4284900966, Td, 20, 0, "+20% EXP UP", ""];
	ITEMS[246] = ["Ice Charm", 2, 4E3, 16, 39, 9, 4284927231, Ud, 80, 0, "80% Ice invalid", ""];
	ITEMS[247] = ["Poison Charm", 2, 4E3, 16, 39, 9, 4288282419, Vd, 80, 0, "80% Poison invalid", ""];
	ITEMS[248] = ["Freeze Charm", 2, 4E3, 16, 39, 9, 4294967295, Wd, 80, 0, "80% Freeze invalid", ""];
	ITEMS[143] = ["White Stone", 3, 1200, 7, 6, 9, 4294967295, ld, 150, 0, "LP +150", ""];
	ITEMS[144] = ["Red Stone", 3, 1200, 7, 6, 9, 4294914867, md, 15, 0, "str +15", ""];
	ITEMS[145] = ["Green Stone", 3, 1200, 7, 6, 9, 4281597747, nd, 15, 0, "dex +15", ""];
	ITEMS[146] = ["Blue Stone", 3, 1200, 7, 6, 9, 4281545727, od, 15, 0, "mag +15", ""];
	ITEMS[147] = ["Black Stone", 3, 1200, 7, 6, 9, 4284900966, pd, 6, 0, "str dex mag +6", ""];
	ITEMS[148] = ["Red Crystal", 3, 3600, 8, 7, 9, 4294936712, qd, 3, 9, "AT +(3-9)", ""];
	ITEMS[149] = ["Yellow Crystal", 3, 3600, 8, 7, 9, 4294967176, rd, 40, 0, "AT +40%", ""];
	ITEMS[150] = ["Silver Crystal", 3, 3600, 8, 7, 9, 4291611852, sd, 6, 0, "Defense +6", ""];
	ITEMS[151] = ["Purple Crystal", 3, 3600, 8, 7, 9, 4291598847, td, 30, 0, "Magic Defense 30%", ""];
	ITEMS[152] = ["Black Crystal", 3, 3600, 8, 7, 9, 4284900966, ud, 30, 0, "Block rate 30%", ""];
	ITEMS[159] = ["Vampire's Card", 4, 12E3, 10, 9, 9, 4288217088, vd, 5, 0, "5% LP recovery", "per damage"];
	ITEMS[160] = ["Zombie's Card", 4, 24E3, 10, 9, 9, 4281532518, Pd, 50, 100, "LP +50% ", "-100% Fire damage"];
	ITEMS[161] = ["Ruby", 3, 6E3, 9, 8, 9, 4294901760, yd, 5, 6, "Add 5-6 fire", "damage"];
	ITEMS[162] = ["Garnet", 3, 6E3, 9, 8, 9, 4294914867, zd, 40, 0, "+0.8s Fire Length", ""];
	ITEMS[163] = ["Sapphire", 3, 6E3, 9, 8, 9, 4284914175, Ad, 9, 15, "Add 9-15 ice", "damage"];
	ITEMS[164] = ["Aquamarine", 3, 6E3, 9, 8, 9, 4284927231, Bd, 15, 0, "+15% Cold effect", ""];
	ITEMS[165] = ["Topaz", 3, 6E3, 9, 8, 9, 4294954035, Cd, 0, 15, "Add 0-15 thunder", "damage"];
	ITEMS[166] = ["Emerald", 3, 6E3, 9, 8, 9, 4281597747, Dd, 1, 2, "Add 1-2 poison", "damage"];
	ITEMS[167] = ["Peridot", 3, 6E3, 9, 8, 9, 4288282419, Ed, 150, 0, "+3s Poison Length", ""];
	ITEMS[168] = ["Diamond", 3, 6E3, 9, 8, 9, 4294967295, Fd, 15, 0, "+0.3s Freeze Length", ""];
	ITEMS[169] = ["Quick's Card", 3, 12E3, 10, 46, 9, 4287124736, Gd, 30, 0, "-30% Limit AGI", ""];
	ITEMS[170] = ["Long Sword's Card", 3, 12E3, 10, 47, 9, 4281545523, Hd, 10, 0, "+10 Length of sword", ""];
	ITEMS[171] = ["Catapult's Card", 3, 12E3, 10, 48, 9, 4284887808, Id, 60, 0, "+60 Length", ""];
	ITEMS[172] = ["Pierce's Card", 3, 12E3, 10, 49, 9, 4291611903, Jd, 75, 0, "75% chance of", "penetrate"];
	ITEMS[173] = ["Guide's Card", 3, 12E3, 10, 50, 9, 4288282521, Kd, 30, 0, "+30 guide length", ""];
	ITEMS[174] = ["Bullet's Card", 3, 12E3, 10, 51, 9, 4281545523, Ld, 0, 75, "+75% bullet", ""];
	ITEMS[175] = ["Explosion's Card", 3, 12E3, 10, 52, 9, 4294940928, Md, 75, 0, "75% chance of", "Explosion damage"];
	ITEMS[176] = ["Critical's Card", 3, 12E3, 10, 53, 9, 4294967142, Od, 25, 200, "25% chance of", "AT +200%"];
	ITEMS[177] = ["Berserk Card", 3, 12E3, 10, 54, 9, 4291559424, Nd, 150, 150, "AT +150%", "DF -150%"];
	ITEMS[343] = ["Big Card", 3, 12E3, 10, 55, 9, 4293848814, Yd, 150, 0, "150% Attack range", ""];
	ITEMS[184] = ["Bronze Medal", 3, 6E3, 11, 10, 9, 4292708369, Qd, 30, 0, "+30% Drop rate", ""];
	ITEMS[185] = ["Silver Medal", 3, 6E3, 11, 10, 9, 4291611852, Rd, 30, 0, "+30% ONIGIRI Drop", ""];
	ITEMS[186] = ["Gold Medal", 3, 6E3, 11, 10, 9, 4294958336, Sd, 30, 0, "+30% Gold UP", ""];
	ITEMS[187] = ["Iron Medal", 3, 6E3, 11, 10, 9, 4284900966, Td, 30, 0, "+30% EXP UP", ""];
	ITEMS[250] = ["Ice Charm", 3, 6E3, 16, 39, 9, 4284927231, Ud, 90, 0, "90% Ice invalid", ""];
	ITEMS[251] = ["Poison Charm", 3, 6E3, 16, 39, 9, 4288282419, Vd, 90, 0, "90% Poison invalid", ""];
	ITEMS[252] = ["Freeze Charm", 3, 6E3, 16, 39, 9, 4294967295, Wd, 90, 0, "90% Freeze invalid", ""];
	ITEMS[209] = ["White Stone", 4, 1600, 7, 6, 9, 4294967295, ld, 200, 0, "LP +200", ""];
	ITEMS[210] = ["Red Stone", 4, 1600, 7, 6, 9, 4294914867, md, 20, 0, "str +20", ""];
	ITEMS[211] = ["Green Stone", 4, 1600, 7, 6, 9, 4281597747, nd, 20, 0, "dex +20", ""];
	ITEMS[212] = ["Blue Stone", 4, 1600, 7, 6, 9, 4281545727, od, 20, 0, "mag +20", ""];
	ITEMS[213] = ["Black Stone", 4, 1600, 7, 6, 9, 4284900966, pd, 8, 0, "str dex mag +8", ""];
	ITEMS[221] = ["Red Crystal", 4, 4800, 8, 7, 9, 4294936712, qd, 4, 12, "AT +(4-12)", ""];
	ITEMS[222] = ["Yellow Crystal", 4, 4800, 8, 7, 9, 4294967176, rd, 50, 0, "AT +50%", ""];
	ITEMS[223] = ["Silver Crystal", 4, 4800, 8, 7, 9, 4291611852, sd, 9, 0, "Defense +9", ""];
	ITEMS[224] = ["Purple Crystal", 4, 4800, 8, 7, 9, 4291598847, td, 40, 0, "Magic Defense 40%", ""];
	ITEMS[225] = ["Black Crystal", 4, 4800, 8, 7, 9, 4284900966, ud, 40, 0, "Block rate 40%", ""];
	ITEMS[260] = ["Ruby", 4, 8E3, 9, 8, 9, 4294901760, yd, 6, 9, "Add 6-9 fire", "damage"];
	ITEMS[261] = ["Garnet", 4, 8E3, 9, 8, 9, 4294914867, zd, 55, 0, "+1.1s Fire Length", ""];
	ITEMS[262] = ["Sapphire", 4, 8E3, 9, 8, 9, 4284914175, Ad, 12, 20, "Add 12-20 ice", "damage"];
	ITEMS[263] = ["Aquamarine", 4, 8E3, 9, 8, 9, 4284927231, Bd, 20, 0, "+20% Cold effect", ""];
	ITEMS[264] = ["Topaz", 4, 8E3, 9, 8, 9, 4294954035, Cd, 0, 22, "Add 0-22 thunder", "damage"];
	ITEMS[265] = ["Emerald", 4, 8E3, 9, 8, 9, 4281597747, Dd, 2, 2, "Add 2-2 poison", "damage"];
	ITEMS[266] = ["Peridot", 4, 8E3, 9, 8, 9, 4288282419, Ed, 200, 0, "+4s Poison Length", ""];
	ITEMS[267] = ["Diamond", 4, 8E3, 9, 8, 9, 4294967295, Fd, 20, 0, "+0.4s Freeze Length", ""];
	ITEMS[237] = ["Quick's Card", 4, 16E3, 10, 46, 9, 4287124736, Gd, 40, 0, "-40% Limit AGI", ""];
	ITEMS[242] = ["Long Sword's Card", 4, 16E3, 10, 47, 9, 4281545523, Hd, 12, 0, "+12 Length of sword", ""];
	ITEMS[240] = ["Catapult's Card", 4, 16E3, 10, 48, 9, 4284887808, Id, 80, 0, "+80 Length", ""];
	ITEMS[268] = ["Pierce's Card", 4, 16E3, 10, 49, 9, 4291611903, Jd, 100, 0, "100% chance of", "penetrate"];
	ITEMS[269] = ["Guide's Card", 4, 16E3, 10, 50, 9, 4288282521, Kd, 40, 0, "+40 guide length", ""];
	ITEMS[238] = ["Bullet's Card", 4, 16E3, 10, 51, 9, 4281545523, Ld, 0, 100, "+100% bullet", ""];
	ITEMS[249] = ["Explosion's Card", 4, 16E3, 10, 52, 9, 4294940928, Md, 100, 0, "100% chance of", "Explosion damage"];
	ITEMS[239] = ["Critical's Card", 4, 16E3, 10, 53, 9, 4294967142, Od, 25, 300, "25% chance of", "AT +300%"];
	ITEMS[241] = ["Berserk Card", 4, 16E3, 10, 54, 9, 4291559424, Nd, 200, 200, "AT +200%", "DF -200%"];
	ITEMS[344] = ["Big Card", 4, 16E3, 10, 55, 9, 4293848814, Yd, 200, 0, "200% Attack range", ""];
	ITEMS[233] = ["Bronze Medal", 4, 8E3, 11, 10, 9, 4292708369, Qd, 40, 0, "+40% Drop rate", ""];
	ITEMS[234] = ["Silver Medal", 4, 8E3, 11, 10, 9, 4291611852, Rd, 40, 0, "+40% ONIGIRI Drop", ""];
	ITEMS[235] = ["Gold Medal", 4, 8E3, 11, 10, 9, 4294958336, Sd, 40, 0, "+40% Gold UP", ""];
	ITEMS[236] = ["Iron Medal", 4, 8E3, 11, 10, 9, 4284900966, Td, 40, 0, "+40% EXP UP", ""];
	ITEMS[320] = ["Ice Charm", 4, 8E3, 16, 39, 9, 4284927231, Ud, 95, 0, "95% Ice invalid", ""];
	ITEMS[321] = ["Poison Charm", 4, 8E3, 16, 39, 9, 4288282419, Vd, 95, 0, "95% Poison invalid", ""];
	ITEMS[322] = ["Freeze Charm", 4, 8E3, 16, 39, 9, 4294967295, Wd, 95, 0, "95% Freeze invalid", ""];
	ITEMS[277] = ["Fire Spirit", 1, 4E3, 17, 40, 9, 4294919202, Xd, 100, 278, "100% enemy dies", "Fire"];
	ITEMS[279] = ["Fire Spirit", 2, 8E3, 17, 40, 9, 4294919202, Xd, 10, 280, "10% enemy dies", "Fire explosion"];
	ITEMS[281] = ["Fire Spirit", 3, 12E3, 17, 40, 9, 4294919202, Xd, 10, 282, "10% enemy dies", "Flame"];
	ITEMS[283] = ["Fire Spirit", 4, 16E3, 17, 40, 9, 4294919202, Xd, 10, 284, "10% enemy dies", "Atomic ray"];
	ITEMS[278] = ["Fire Spirit", 0, 0, 0, 0, 0, 0, 1, 109, 0, 5, 15, 3, 1, 0, 0, 0, 1, 6, 4294927889, 2, 16, 16, 16, 16, 0, 0, 100, 10, 0, 90, 1, 0, 0, 1, 50, 0, 0];
	ITEMS[280] = ["Fire Spirit", 0, 0, 0, 0, 0, 0, 1, 109, 0, 30, 50, 16, 2, 0, 0, 0, 1, 6, 4294927889, 2, 16, 16, 16, 16, 0, 0, 150, 30, 0, 95, 1, 0, 0, 1, 50, 0, 0];
	ITEMS[282] = ["Fire Spirit", 0, 0, 0, 0, 0, 0, 1, 204, 0, 30, 50, 16, 40, 0, 0, 0, 1, 6, 2298439185, 2, 16, 20, 12, 12, 50, 0, 100, 10, -1, 99, 1, 0, 0, 1, 50, 0, 0];
	ITEMS[284] = ["Fire Spirit", 0, 0, 0, 0, 0, 0, 1, 109, 0, 60, 100, 4, 2, 0, 0, 0, 1, 18, 4294927889, 2, 12, 20, 16, 16, 0, 0, 1E3, 10, 0, 100, 0, 2, 0, 1, 80, 0, 0];
	ITEMS[285] = ["Thunder Spirit", 1, 4E3, 17, 40, 9, 4293848576, Xd, 50, 286, "50% enemy dies", "Thunder"];
	ITEMS[287] = ["Thunder Spirit", 2, 8E3, 17, 40, 9, 4293848576, Xd, 10, 288, "10% enemy dies", "Lightning"];
	ITEMS[308] = ["Thunder Spirit", 3, 12E3, 17, 40, 9, 4293848576, Xd, 10, 309, "10% enemy dies", "Big Thunder"];
	ITEMS[310] = ["Thunder Spirit", 4, 16E3, 17, 40, 9, 4293848576, Xd, 5, 311, "5% enemy dies", "Thunder Ball"];
	ITEMS[286] = ["Thunder Spirit", 0, 0, 0, 0, 0, 0, 1, 105, 0, 1, 99, 1, 5, 0, 0, 0, 1, 10, 4294967142, 2, 16, 16, 16, 16, 0, 0, 200, 10, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[288] = ["Thunder Spirit", 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 99, 10, 20, 0, 0, 0, 1, 10, 2291767807, 2, 12, 16, 8, 8, 10, 0, 500, 10, 0, 100, 0, 0, 0, 3, 0, 0, 0];
	ITEMS[309] = ["Thunder Spirit", 0, 0, 0, 0, 0, 0, 1, 108, 1, 1, 333, 1, 0, 0, 0, 0, 1, 10, 4294967142, 2, 64, 64, 64, 64, 0, 25, 26, 10, 50, 100, 0, 1, 0, 3, 0, 0, 0];
	ITEMS[311] = ["Thunder Spirit", 0, 0, 0, 0, 0, 0, 1, 105, 0, 1, 9999, 1, 4, 0, 0, 0, 1, 2, 4294967142, 2, 16, 16, 16, 16, 0, 0, 200, 10, 0, 100, 0, 0, 0, 3, 0, 0, 2, 0, 1, 9, 30, 0, 15, 4294967142, 1, 16, 16, 8, 8, 0, 0, 50, 10, 0, 0, 0, 0];
	ITEMS[377] = ["Ice Spirit", 1, 4E3, 17, 40, 9, 4284927231, Xd, 50, 378, "50% enemy dies", "Freeze arrow"];
	ITEMS[379] = ["Ice Spirit", 2, 8E3, 17, 40, 9, 4284927231, Xd, 20, 380, "20% enemy dies", "Ice mist"];
	ITEMS[381] = ["Ice Spirit", 3, 12E3, 17, 40, 9, 4284927231, Xd, 20, 382, "20% enemy dies", "Freeze spike"];
	ITEMS[383] = ["Ice Spirit", 4, 2E4, 17, 40, 9, 4284927231, Xd, 40, 384, "40% enemy dies", "Ice meteor"];
	ITEMS[378] = ["Ice Spirit", 0, 0, 0, 0, 0, 0, 1, 109, 0, 25, 50, 4, 1, 0, 0, 0, 1, 3, 4291611903, 2, 16, 16, 8, 8, 0, 25, 2E3, 10, 0, 100, 0, 2, 0, 5, 50, 0, 0];
	ITEMS[380] = ["Ice Spirit", 0, 0, 0, 0, 0, 0, 1, 2404, 1, 5, 5, 9, 50, 0, 0, 0, 0, 6, 1154272511, 2, 32, 32, 48, 48, 0, 50, 51, 10, 2, 95, 0, 1, 0, 2, 40, 0, 0];
	ITEMS[382] = ["Ice Spirit", 0, 0, 0, 0, 0, 0, 1, 4, 0, 5, 5, 25, 100, 0, 0, 0, 1, 9, 3435973887, 2, 12, 12, 6, 6, 0, 25, 200, 10, 5, 100, 0, 0, 0, 5, 20, 0, 0];
	ITEMS[384] = ["Ice Spirit", 0, 0, 0, 0, 0, 0, 1, 105, 0, 100, 150, 1, 5, 0, 0, 0, 1, 16, 4291611903, 2, 16, 16, 8, 8, 0, 0, 100, 10, 0, 100, 0, 0, 0, 2, 20, 0, 4, 0, 10, 15, 9, 1, 16, 3431500031, 2, 12, 12, 6, 6, 0, 10, 100, 10, 5, 100, 0, 0];
	ITEMS[404] = ["Poison Spirit", 4, 2E4, 17, 40, 9, 4278255360, Xd, 60, 405, "60% enemy dies", "Poison"];
	ITEMS[405] = ["Poison Spirit", 0, 0, 0, 0, 0, 0, 1, 109, 1, 1, 1, 6, 1, 0, 0, 0, 0, 6, 1147600640, 2, 24, 24, 32, 32, 0, 50, 51, 10, 0, 88, 0, 1, 0, 4, 1E3, 0, 0];
	ITEMS[323] = ["White Stone", 5, 2E3, 7, 6, 9, 4294967295, ld, 300, 0, "LP +300", ""];
	ITEMS[324] = ["Red Stone", 5, 2E3, 7, 6, 9, 4294914867, md, 25, 0, "str +25", ""];
	ITEMS[325] = ["Green Stone", 5, 2E3, 7, 6, 9, 4281597747, nd, 25, 0, "dex +25", ""];
	ITEMS[326] = ["Blue Stone", 5, 2E3, 7, 6, 9, 4281545727, od, 25, 0, "mag +25", ""];
	ITEMS[327] = ["Black Stone", 5, 2E3, 7, 6, 9, 4284900966, pd, 10, 0, "str dex mag +10", ""];
	ITEMS[336] = ["Red Crystal", 5, 6E3, 8, 7, 9, 4294936712, qd, 5, 15, "AT +(5-15)", ""];
	ITEMS[337] = ["Yellow Crystal", 5, 6E3, 8, 7, 9, 4294967176, rd, 60, 0, "AT +60%", ""];
	ITEMS[338] = ["Silver Crystal", 5, 6E3, 8, 7, 9, 4291611852, sd, 12, 0, "Defense +12", ""];
	ITEMS[339] = ["Purple Crystal", 5, 6E3, 8, 7, 9, 4291598847, td, 50, 0, "Magic Defense 50%", ""];
	ITEMS[340] = ["Black Crystal", 5, 6E3, 8, 7, 9, 4284900966, ud, 50, 0, "Block rate 50%", ""];
	ITEMS[369] = ["Ruby", 5, 1E4, 9, 8, 9, 4294901760, yd, 8, 12, "Add 8-12 fire", "damage"];
	ITEMS[370] = ["Garnet", 5, 1E4, 9, 8, 9, 4294914867, zd, 70, 0, "+1.4s Fire Length", ""];
	ITEMS[371] = ["Sapphire", 5, 1E4, 9, 8, 9, 4284914175, Ad, 15, 25, "Add 15-25 ice", "damage"];
	ITEMS[372] = ["Aquamarine", 5, 1E4, 9, 8, 9, 4284927231, Bd, 25, 0, "+25% Cold effect", ""];
	ITEMS[373] = ["Topaz", 5, 1E4, 9, 8, 9, 4294954035, Cd, 0, 30, "Add 0-30 thunder", "damage"];
	ITEMS[374] = ["Emerald", 5, 1E4, 9, 8, 9, 4281597747, Dd, 2, 3, "Add 2-3 poison", "damage"];
	ITEMS[375] = ["Peridot", 5, 1E4, 9, 8, 9, 4288282419, Ed, 250, 0, "+5s Poison Length", ""];
	ITEMS[376] = ["Diamond", 5, 1E4, 9, 8, 9, 4294967295, Fd, 25, 0, "+0.5s Freeze Length", ""];
	ITEMS[353] = ["Quick's Card", 5, 2E4, 10, 46, 9, 4287124736, Gd, 50, 0, "-50% Limit AGI", ""];
	ITEMS[354] = ["Long Sword's Card", 5, 2E4, 10, 47, 9, 4281545523, Hd, 15, 0, "+15 Length of sword", ""];
	ITEMS[355] = ["Catapult's Card", 5, 2E4, 10, 48, 9, 4284887808, Id, 100, 0, "+100 Length", ""];
	ITEMS[356] = ["Guide's Card", 5, 2E4, 10, 50, 9, 4288282521, Kd, 50, 0, "+50 guide length", ""];
	ITEMS[357] = ["Bullet's Card", 5, 2E4, 10, 51, 9, 4281545523, Ld, 6, 0, "+6 bullet", ""];
	ITEMS[358] = ["Critical's Card", 5, 2E4, 10, 53, 9, 4294967142, Od, 25, 400, "25% chance of", "AT +400%"];
	ITEMS[359] = ["Berserk Card", 5, 2E4, 10, 54, 9, 4291559424, Nd, 250, 250, "AT +250%", "DF -250%"];
	ITEMS[368] = ["Big Card", 5, 2E4, 10, 55, 9, 4293848814, Yd, 300, 0, "300% Attack range", ""];
	ITEMS[385] = ["Bronze Medal", 5, 1E4, 11, 10, 9, 4292708369, Qd, 50, 0, "+50% Drop rate", ""];
	ITEMS[386] = ["Silver Medal", 5, 1E4, 11, 10, 9, 4291611852, Rd, 50, 0, "+50% ONIGIRI Drop", ""];
	ITEMS[387] = ["Gold Medal", 5, 1E4, 11, 10, 9, 4294958336, Sd, 50, 0, "+50% Gold UP", ""];
	ITEMS[388] = ["Iron Medal", 5, 1E4, 11, 10, 9, 4284900966, Td, 50, 0, "+50% EXP UP", ""];
	ITEMS[389] = ["Knockback's Card", 1, 4E3, 10, 56, 9, 4288282572, Zd, 25, 20, "25% chance of", "Knockback 20"];
	ITEMS[390] = ["Knockback's Card", 2, 8E3, 10, 56, 9, 4288282572, Zd, 50, 20, "50% chance of", "Knockback 20"];
	ITEMS[391] = ["Knockback's Card", 3, 12E3, 10, 56, 9, 4288282572, Zd, 50, 30, "50% chance of", "Knockback 30"];
	ITEMS[392] = ["Knockback's Card", 4, 16E3, 10, 56, 9, 4288282572, Zd, 100, 30, "100% chance of", "Knockback 30"];
	ITEMS[393] = ["Knockback's Card", 5, 2E4, 10, 56, 9, 4288282572, Zd, 30, 90, "30% chance of", "Knockback 90"];
	ITEMS[406] = ["Reflection Card", 1, 4E3, 10, 57, 9, 4294967244, $d, 25, 0, "25% chance of", "Reflection"];
	ITEMS[407] = ["Reflection Card", 2, 8E3, 10, 57, 9, 4294967244, $d, 50, 0, "50% chance of", "Reflection"];
	ITEMS[408] = ["Reflection Card", 3, 12E3, 10, 57, 9, 4294967244, $d, 75, 0, "75% chance of", "Reflection"];
	ITEMS[409] = ["Reflection Card", 4, 16E3, 10, 57, 9, 4294967244, $d, 100, 0, "100% chance of", "Reflection"];
	ITEMS[459] = ["Ring's Card", 1, 4E3, 10, 62, 9, 4294967091, ce, 1, 0, "Ring +1", ""];
	ITEMS[460] = ["Ring's Card", 2, 8E3, 10, 62, 9, 4294967091, ce, 1, 50, "Ring +1", "LP +50"];
	ITEMS[461] = ["Ring's Card", 3, 12E3, 10, 62, 9, 4294967091, ce, 1, 100, "Ring +1", "LP +100"];
	ITEMS[462] = ["Ring's Card", 4, 16E3, 10, 62, 9, 4294967091, ce, 1, 150, "Ring +1", "LP +150"];
	ITEMS[463] = ["Ring's Card", 5, 2E4, 10, 62, 9, 4294967091, ce, 1, 200, "Ring +1", "LP +200"];
	ITEMS[464] = ["Ring's Card", 6, 24E3, 10, 62, 9, 4294967091, ce, 1, 300, "Ring +1", "LP +300"];
	ITEMS[418] = ["White Stone", 6, 2400, 7, 6, 9, 4294967295, ld, 400, 0, "LP +400", ""];
	ITEMS[419] = ["Red Stone", 6, 2400, 7, 6, 9, 4294914867, md, 30, 0, "str +30", ""];
	ITEMS[420] = ["Green Stone", 6, 2400, 7, 6, 9, 4281597747, nd, 30, 0, "dex +30", ""];
	ITEMS[421] = ["Blue Stone", 6, 2400, 7, 6, 9, 4281545727, od, 30, 0, "mag +30", ""];
	ITEMS[422] = ["Black Stone", 6, 2400, 7, 6, 9, 4284900966, pd, 15, 0, "str dex mag +15", ""];
	ITEMS[424] = ["Red Crystal", 6, 7200, 8, 7, 9, 4294936712, qd, 6, 18, "AT +(6-18)", ""];
	ITEMS[425] = ["Yellow Crystal", 6, 7200, 8, 7, 9, 4294967176, rd, 70, 0, "AT +70%", ""];
	ITEMS[426] = ["Silver Crystal", 6, 7200, 8, 7, 9, 4291611852, sd, 15, 0, "Defense +15", ""];
	ITEMS[427] = ["Purple Crystal", 6, 7200, 8, 7, 9, 4291598847, td, 60, 0, "Magic Defense 60%", ""];
	ITEMS[428] = ["Black Crystal", 6, 7200, 8, 7, 9, 4284900966, ud, 60, 0, "Block rate 60%", ""];
	ITEMS[443] = ["Ruby", 6, 12E3, 9, 8, 9, 4294901760, yd, 10, 15, "Add 10-15 fire", "damage"];
	ITEMS[444] = ["Garnet", 6, 12E3, 9, 8, 9, 4294914867, zd, 85, 0, "+1.7s Fire Length", ""];
	ITEMS[446] = ["Sapphire", 6, 12E3, 9, 8, 9, 4284914175, Ad, 18, 30, "Add 18-30 ice", "damage"];
	ITEMS[447] = ["Aquamarine", 6, 12E3, 9, 8, 9, 4284927231, Bd, 30, 0, "+30% Cold effect", ""];
	ITEMS[448] = ["Topaz", 6, 12E3, 9, 8, 9, 4294954035, Cd, 0, 39, "Add 0-39 thunder", "damage"];
	ITEMS[449] = ["Emerald", 6, 12E3, 9, 8, 9, 4281597747, Dd, 3, 3, "Add 3-3 poison", "damage"];
	ITEMS[450] = ["Peridot", 6, 12E3, 9, 8, 9, 4288282419, Ed, 300, 0, "+6s Poison Length", ""];
	ITEMS[445] = ["Diamond", 6, 12E3, 9, 8, 9, 4294967295, Fd, 30, 0, "+0.6s Freeze Length", ""];
	ITEMS[423] = ["Katana's Card", 6, 24E3, 10, 58, 9, 4281545523, ae, 40, 10, "AT +40%", "+10 Length of sword"];
	ITEMS[465] = ["Long Sword's Card", 6, 24E3, 10, 47, 9, 4281545523, Hd, 20, 0, "+20 Length of sword", ""];
	ITEMS[466] = ["Catapult's Card", 6, 24E3, 10, 48, 9, 4284887808, Id, 120, 0, "+120 Length", ""];
	ITEMS[467] = ["Guide's Card", 6, 24E3, 10, 50, 9, 4288282521, Kd, 60, 0, "+60 guide length", ""];
	ITEMS[468] = ["Bullet's Card", 6, 24E3, 10, 51, 9, 4281545523, Ld, 0, 125, "+125% bullet", ""];
	ITEMS[469] = ["Critical's Card", 6, 24E3, 10, 53, 9, 4294967142, Od, 20, 600, "20% chance of", "AT +600%"];
	ITEMS[470] = ["Berserk Card", 6, 24E3, 10, 54, 9, 4291559424, Nd, 300, 200, "AT +300%", "DF -200%"];
	ITEMS[437] = ["Bronze Medal", 6, 12E3, 11, 10, 9, 4292708369, Qd, 75, 0, "+75% Drop rate", ""];
	ITEMS[438] = ["Silver Medal", 6, 12E3, 11, 10, 9, 4291611852, Rd, 75, 0, "+75% ONIGIRI Drop", ""];
	ITEMS[439] = ["Gold Medal", 6, 12E3, 11, 10, 9, 4294958336, Sd, 75, 0, "+75% Gold UP", ""];
	ITEMS[440] = ["Iron Medal", 6, 12E3, 11, 10, 9, 4284900966, Td, 75, 0, "+75% EXP UP", ""];
	ITEMS[441] = ["Heal's Card", 1, 48E3, 10, 59, 9, 4294967295, be, 1, 0, "Heal to attack each", "+1"];
	ITEMS[442] = ["Heal's Card", 2, 48E3, 10, 59, 9, 4294967295, be, 2, 0, "Heal to attack each", "+2"];
	ITEMS[491] = ["White Stone", 7, 2800, 7, 6, 9, 4294967295, ld, 500, 0, "LP +500", ""];
	ITEMS[492] = ["Red Stone", 7, 2800, 7, 6, 9, 4294914867, md, 40, 0, "str +40", ""];
	ITEMS[493] = ["Green Stone", 7, 2800, 7, 6, 9, 4281597747, nd, 40, 0, "dex +40", ""];
	ITEMS[494] = ["Blue Stone", 7, 2800, 7, 6, 9, 4281545727, od, 40, 0, "mag +40", ""];
	ITEMS[495] = ["Black Stone", 7, 2800, 7, 6, 9, 4284900966, pd, 20, 0, "str dex mag +20", ""];
	ITEMS[528] = ["Red Crystal", 7, 8400, 8, 7, 9, 4294936712, qd, 7, 21, "AT +(7-21)", ""];
	ITEMS[529] = ["Yellow Crystal", 7, 8400, 8, 7, 9, 4294967176, rd, 80, 0, "AT +80%", ""];
	ITEMS[530] = ["Silver Crystal", 7, 8400, 8, 7, 9, 4291611852, sd, 18, 0, "Defense +18", ""];
	ITEMS[531] = ["Purple Crystal", 7, 8400, 8, 7, 9, 4291598847, td, 70, 0, "Magic Defense 70%", ""];
	ITEMS[532] = ["Black Crystal", 7, 8400, 8, 7, 9, 4284900966, ud, 70, 0, "Block rate 70%", ""];
	ITEMS[533] = ["Ruby", 7, 14E3, 9, 8, 9, 4294901760, yd, 15, 20, "Add 15-20 fire", "damage"];
	ITEMS[534] = ["Garnet", 7, 14E3, 9, 8, 9, 4294914867, zd, 100, 0, "+2.0s Fire Length", ""];
	ITEMS[535] = ["Sapphire", 7, 14E3, 9, 8, 9, 4284914175, Ad, 21, 35, "Add 21-35 ice", "damage"];
	ITEMS[536] = ["Aquamarine", 7, 14E3, 9, 8, 9, 4284927231, Bd, 35, 0, "+35% Cold effect", ""];
	ITEMS[537] = ["Topaz", 7, 14E3, 9, 8, 9, 4294954035, Cd, 0, 49, "Add 0-49 thunder", "damage"];
	ITEMS[538] = ["Emerald", 7, 14E3, 9, 8, 9, 4281597747, Dd, 3, 4, "Add 3-4 poison", "damage"];
	ITEMS[539] = ["Peridot", 7, 14E3, 9, 8, 9, 4288282419, Ed, 350, 0, "+7s Poison Length", ""];
	ITEMS[540] = ["Diamond", 7, 14E3, 9, 8, 9, 4294967295, Fd, 35, 0, "+0.7s Freeze Length", ""];
	ITEMS[541] = ["Katana's Card", 7, 28E3, 10, 58, 9, 4281545523, ae, 50, 10, "AT +50%", "+10 Length of sword"];
	ITEMS[542] = ["Quick's Card", 7, 28E3, 10, 46, 9, 4287124736, Gd, 60, 0, "-60% Limit AGI", ""];
	ITEMS[543] = ["Long Sword's Card", 7, 28E3, 10, 47, 9, 4281545523, Hd, 25, 0, "+25 Length of sword", ""];
	ITEMS[544] = ["Catapult's Card", 7, 28E3, 10, 48, 9, 4284887808, Id, 150, 0, "+150 Length", ""];
	ITEMS[545] = ["Guide's Card", 7, 28E3, 10, 50, 9, 4288282521, Kd, 70, 0, "+70 guide length", ""];
	ITEMS[546] = ["Bullet's Card", 7, 28E3, 10, 51, 9, 4281545523, Ld, 0, 150, "+150% bullet", ""];
	ITEMS[547] = ["Critical's Card", 7, 28E3, 10, 53, 9, 4294967142, Od, 15, 900, "15% chance of", "AT +900%"];
	ITEMS[548] = ["Berserk Card", 7, 28E3, 10, 54, 9, 4291559424, Nd, 350, 200, "AT +350%", "DF -200%"];
	ITEMS[487] = ["Bronze Medal", 7, 14E3, 11, 10, 9, 4292708369, Qd, 100, 0, "+100% Drop rate", ""];
	ITEMS[488] = ["Silver Medal", 7, 14E3, 11, 10, 9, 4291611852, Rd, 100, 0, "+100% ONIGIRI Drop", ""];
	ITEMS[489] = ["Gold Medal", 7, 14E3, 11, 10, 9, 4294958336, Sd, 100, 0, "+100% Gold UP", ""];
	ITEMS[490] = ["Iron Medal", 7, 14E3, 11, 10, 9, 4284900966, Td, 100, 0, "+100% EXP UP", ""];
	ITEMS[557] = ["Imperial Crown", 0, 400, 19, 63, 9, 4294956800, de, 50, 0, "+50% Enemy", "(Passive)"];
	ITEMS[558] = ["Imperial Crown", 2, 400, 19, 63, 9, 4294956800, de, 100, 0, "+100% Enemy", "(Passive)"];
	ITEMS[559] = ["Imperial Crown", 3, 400, 19, 63, 9, 4294956800, de, 150, 0, "+150% Enemy", "(Passive)"];
	ITEMS[560] = ["Imperial Crown", 4, 400, 19, 63, 9, 4294956800, de, 200, 0, "+200% Enemy", "(Passive)"];
	ITEMS[561] = ["Anger Crown", 0, 400, 19, 63, 9, 4292730333, ee, 0, 0, "LV up effect", "(Passive)"];
	ITEMS[562] = ["Anger Crown", 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 9999, 1, 0, 0, 0, 0, 0, 18, 4294967193, 2, 64, 512, 64, 512, 0, 0, 10, 20, 0, 100, 1, 0, 0, 3, 0, 0, 0];
	ITEMS[563] = ["Anger Crown", 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 999, 1, 0, 0, 0, 0, 0, 21, 4294967193, 2, 8, 8, 16, 16, 0, 0, 10, 3, -9, 100, 1, 0, 0, 3, 0, 0, 0];
}

// recursively searches the program memory for a target value (don't search for functions)
function searchMemory (targetValue, isDeepSearch, context) {
	// set up search space
	if (context == undefined)
		context = [window]
	var searchSpace = context[0]
	
	// do the search
	if ((isDeepSearch || searchSpace == window) && typeof(searchSpace) == 'object') {
		var validKeys = []
		// check each key in the search space
		for (var key in searchSpace) {
			// only check small name keys
			if (key.length <= 3 && key[0] != '$') {
				var value = searchSpace[key]
				// no cycles
				if (!context.includes(value)) {
					// set up the contextual name of this key
					var keyString = ''
					if (context.length == 1)
						keyString = key
					else if (Number.isNaN(key))
						keyString = '.'+key
					else
						keyString = '['+key+']'

					// if we found the target, add this key to the list
					if (value == targetValue) {
						validKeys = validKeys.concat(keyString)
						outputWithIndents('found target at '+typeof(key)+': ', keyString, context.length)

					// else if this value is an object that isn't obscenely long, recursively search its keys
					} else if (typeof(value) == 'object' && Object.keys(value).length < 200) {
						// perform the subsearch
						var searchResult = searchMemory(targetValue, isDeepSearch, [value].concat(context))
						// add any successful matches to the list
						for (var subkey of searchResult) {
							var appendedKeyString = keyString + subkey
							validKeys = validKeys.concat(appendedKeyString)
							outputWithIndents('found submatches at: ', appendedKeyString, context.length)
						}
					}
				}
			}
		}
		if (validKeys.length > 0)
			outputWithIndents('returning valid keys: ', validKeys, context.length)
		// return the keys we found
		return validKeys
	}
	
	// we found nothing
	return false
}

// output a message and object with a given number of indents
function outputWithIndents (message, object, level) {
	var outputString = message + '%o'
	for (var i = 0; i < level; ++i)
		outputString = '\t' + outputString
	console.log(outputString, object)
}

function cool (target) {
	return searchMemory(target, true)
}


/*
GameLoad("1HFBZuEbzMmBd4Z2Z4c9jIuV7mQE8rZI7wldSH7meXD84pnmYZbeint.6FPamzBQgxDWq9VsEd1SuLpIoJvS0bBoV8oT9sUDzkWJA*riaVMHDA87FGILPUahpy6HTgu7NewDXsCZxKk9b2W*V0Y5fEqR3iM1jQ8tdOAzncSJB4.vromllmorv.4BJScnzAOdt8Qj1Mi3RqEf5Y0V*W2b9kKxZCsXDweN7ugTH6yphaUPLIGFFGILPUahpy6HTgu8Ph.HbwGe0PpHkBOt6dmMHu", 1, '')
*/

function loadData () {
	GameLoad("1HFBZuEbzMmBd4Z2Z4c9jIuV7mQE8rZI7wldSH7meXD84pnmYZbeint.6FPamzBQgxDWq9VsEd1SuLpIoJvS0bBoV8oT9sUDzkWJA*riaVMHDA87FGILPUahpy6HTgu7NewDXsCZxKk9b2W*V0Y5fEqR3iM1jQ8tdOAzncSJB4.vromllmorv.4BJScnzAOdt8Qj1Mi3RqEf5Y0V*W2b9kKxZCsXDweN7ugTH6yphaUPLIGFFGILPUahpy6HTgu8Ph.HbwGe0PpHkBOt6dmMHu", 1, '')	
}