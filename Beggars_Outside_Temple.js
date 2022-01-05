function Beggars(N, D) {
  var array = [];
  var prefix_array = [];
  for (var i = 0; i < N; i++) {
    array.push(0);
  }
  for (var i = 0; i < D.length; i++) {
    array[D[i][0] - 1] += D[i][2];
    array[D[i][1]] -= D[i][2];
  }
  prefix_array.push(array[0]);
  for (var i = 1; i < N; i++) {
    prefix_array[i] = prefix_array[i - 1] + array[i];
  }
  console.log(prefix_array);
}

N = 700;
D = [
  [252, 270, 2802043],
  [138, 414, 666980],
  [134, 201, 4832770],
  [210, 587, 3187235],
  [128, 332, 3022080],
  [453, 579, 2094186],
  [206, 584, 4598467],
  [43, 462, 4260590],
  [7, 581, 772272],
  [10, 298, 3145450],
  [11, 301, 2730892],
  [658, 676, 4726078],
  [2, 144, 1426520],
  [232, 586, 2576832],
  [379, 478, 680591],
  [294, 379, 4518281],
  [301, 595, 3593986],
  [526, 649, 2721333],
  [20, 614, 5208768],
  [343, 580, 2233202],
  [170, 317, 2807151],
  [190, 364, 4961627],
  [640, 663, 2030548],
  [245, 510, 2378132],
  [442, 518, 2493687],
  [139, 461, 143920],
  [305, 497, 1580931],
  [16, 543, 3114955],
  [172, 262, 1046479],
  [375, 453, 3176659],
  [40, 689, 470418],
  [137, 620, 4022538],
  [394, 656, 4970579],
  [319, 560, 4306212],
  [479, 599, 1241497],
  [256, 300, 2206323],
  [223, 398, 3915690],
  [275, 583, 522278],
  [349, 495, 1243844],
  [160, 335, 4464871],
  [647, 682, 2299576],
  [111, 560, 2876763],
  [225, 488, 5145473],
  [248, 616, 4353224],
  [8, 192, 5213248],
  [23, 222, 1046227],
  [371, 444, 4703621],
  [203, 634, 4517657],
  [249, 487, 3297468],
  [342, 699, 270864],
  [196, 628, 1031721],
  [20, 352, 4731629],
  [40, 65, 2336459],
  [426, 629, 4798352],
  [14, 661, 1864542],
  [123, 693, 257951],
  [14, 144, 414352],
  [214, 626, 1314460],
  [219, 344, 1436109],
  [30, 485, 4681355],
  [440, 540, 791270],
  [27, 551, 2789287],
  [342, 616, 4625481],
  [88, 286, 4107120],
  [19, 75, 3020626],
  [5, 495, 2625571],
  [186, 196, 735039],
  [373, 471, 1295168],
  [95, 646, 4713578],
  [504, 562, 2189099],
  [456, 699, 3146435],
  [340, 673, 4660669],
  [290, 514, 399819],
  [8, 261, 4374365],
  [307, 325, 4435361],
  [200, 355, 4163959],
  [261, 268, 1145981],
  [41, 169, 2311218],
  [365, 397, 3800607],
  [441, 519, 480142],
  [112, 499, 3137849],
  [197, 526, 444507],
  [122, 623, 4168937],
  [170, 242, 4930393],
  [113, 626, 987498],
  [69, 674, 5040951],
  [319, 453, 958864],
  [186, 605, 5130951],
  [122, 599, 2683503],
  [231, 598, 616521],
  [97, 312, 1953147],
  [169, 470, 4625131],
  [88, 676, 4048157],
  [443, 671, 2279914],
  [249, 401, 1294230],
  [45, 221, 4268893],
  [231, 504, 1859872],
  [230, 283, 3961053],
  [89, 142, 2395124],
  [607, 627, 410966],
  [201, 466, 913773],
  [152, 303, 2202408],
  [264, 342, 4682814],
  [580, 642, 4338468],
  [56, 266, 4256634],
  [256, 423, 3040050],
  [2, 315, 1944548],
  [333, 615, 5217271],
  [336, 572, 1219813],
  [655, 674, 3756719],
  [28, 257, 5227774],
  [225, 446, 738385],
  [188, 415, 3993684],
  [345, 487, 2935224],
  [157, 343, 4586968],
  [467, 533, 4833041],
  [96, 118, 3772823],
  [233, 539, 1048739],
  [456, 583, 1416742],
  [507, 567, 5040718],
  [252, 423, 4209260],
  [242, 436, 4815378],
  [386, 671, 250097],
  [151, 692, 4425955],
  [89, 450, 5044780],
  [687, 696, 5237024],
  [77, 418, 975857],
  [170, 341, 4408996],
  [229, 385, 5066620],
  [156, 531, 1398015],
  [498, 537, 785426],
  [161, 169, 1680681],
  [115, 283, 2178800],
  [423, 689, 4947962],
  [394, 512, 4433794],
  [219, 240, 3209635],
  [25, 36, 640025],
  [302, 373, 4057108],
  [152, 311, 4363203],
  [94, 175, 3398374],
  [403, 437, 1284012],
  [139, 483, 4035953],
  [499, 530, 1301241],
  [414, 646, 1104804],
  [129, 386, 4411249],
  [238, 639, 1419346],
  [445, 592, 3761606],
  [338, 565, 90087],
  [219, 387, 2757768],
  [135, 699, 2032398],
  [315, 659, 5215737],
  [298, 694, 4972607],
  [99, 185, 1804940],
  [437, 574, 3673335],
  [297, 639, 2713976],
  [7, 381, 4168472],
  [348, 398, 4171291],
  [218, 595, 5122191],
  [356, 514, 4077678],
  [96, 667, 5267796],
  [116, 286, 4473140],
  [336, 391, 3346018],
  [374, 378, 1351354],
  [433, 583, 17307],
  [61, 467, 450292],
  [244, 454, 285666],
  [168, 402, 1955909],
  [170, 334, 3895759],
  [210, 584, 2794457],
  [509, 700, 769247],
  [260, 678, 1706155],
  [52, 85, 2403262],
  [214, 481, 3189400],
  [126, 577, 4772990],
  [17, 309, 2571431],
  [638, 665, 896106],
  [118, 341, 4026831],
  [13, 39, 307885],
  [142, 437, 3436279],
  [101, 636, 608955],
  [68, 327, 5115061],
  [200, 483, 427092],
  [301, 479, 4018350],
  [90, 326, 3664109],
  [351, 600, 530290],
  [265, 321, 1404861],
  [135, 182, 1482610],
  [66, 559, 3185567],
  [162, 472, 619732],
];

Beggars(N, D);
