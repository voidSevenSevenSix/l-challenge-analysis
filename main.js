const Database = require("better-sqlite3");

const db = new Database("google_transit/newdb.db", {
  readonly: true,
});

let Pnk_18th_54th_Cermak_bound = 30162;
let Pnk_18th_Loop_bound = 30161;
let O_35th_Archer_Loop_bound = 30022;
let O_35th_Archer_Midway_bound = 30023;
let G_35_Bronzeville_IIT_Harlem_bound = 30213;
let G_35_Bronzeville_IIT_63rd_bound = 30214;
let G_43rd_Harlem_bound = 30245;
let G_43rd_63rd_bound = 30246;
let G_47th_63rd_bound = 30210;
let R_47th_Howard_bound = 30237;
let R_47th_95th_bound = 30238;
let G_47th_Harlem_bound = 30209;
let G_51st_63rd_bound = 30025;
let G_51st_Harlem_bound = 30024;
let Pnk_54th_Cermak_Terminal_arrival = 30114;
let Pnk_54th_Cermak_Loop_bound = 30113;
let R_63rd_Howard_bound = 30177;
let R_63rd_95th_bound = 30178;
let R_69th_Howard_bound = 30191;
let R_69th_95th_bound = 30192;
let R_79th_95th_bound = 30047;
let R_79th_Howard_bound = 30046;
let R_87th_Howard_bound = 30275;
let R_87th_95th_bound = 30276;
let R_95th_Dan_Ryan_Howard_bound = 30088;
let R_95th_Dan_Ryan_95th_bound = 30089;
let BG_Adams_Wabash_Outer_Loop = 30131;
let OPnkPG_Adams_Wabash_Inner_Loop = 30132;
let R_Addison_95th_bound = 30274;
let B_Addison_Loop_bound = 30278;
let B_Addison_OHare_bound = 30239;
let B_Addison_Kimball_bound = 30277;
let B_Addison_Forest_Pk_bound = 30240;
let R_Addison_Howard_bound = 30273;
let R_Argyle_95th_bound = 30230;
let R_Argyle_Howard_bound = 30229;
let PB_Armitage_Kimball_Linden_bound = 30127;
let PB_Armitage_Loop_bound = 30128;
let PnkG_Ashland_Harlem_54th_Cermak_bound = 30033;
let PnkG_Ashland_Loop_63rd_bound = 30032;
let O_Ashland_Midway_bound = 30206;
let O_Ashland_Loop_bound = 30205;
let G_Ashland_63rd_Terminal_arrival = 30057;
let G_Ashland_63rd_Harlem_bound = 30056;
let B_Austin_Forest_Pk_bound = 30002;
let B_Austin_OHare_bound = 30001;
let G_Austin_63rd_bound = 30243;
let G_Austin_Harlem_bound = 30244;
let B_Belmont_OHare_Branch_OHare_bound = 30012;
let PB_Belmont_Loop_bound = 30258;
let B_Belmont_OHare_Branch_Forest_Pk_bound = 30013;
let R_Belmont_95th_bound = 30256;
let R_Belmont_Howard_bound = 30255;
let PB_Belmont_Kimball_Linden_bound = 30257;
let R_Berwyn_95th_bound = 30067;
let R_Berwyn_Howard_bound = 30066;
let R_Bryn_Mawr_95th_bound = 30268;
let R_Bryn_Mawr_Howard_bound = 30267;
let G_California_Harlem_bound = 30266;
let B_California_OHare_bound = 30111;
let G_California_63rd_bound = 30265;
let Pnk_California_54th_Cermak_bound = 30087;
let B_California_Forest_Pk_bound = 30112;
let Pnk_California_Loop_bound = 30086;
let G_Central_63rd_bound = 30054;
let G_Central_Harlem_bound = 30055;
let P_Central_Linden_bound = 30241;
let P_Central_Howard_Loop_bound = 30242;
let Pnk_Central_Park_54th_Cermak_bound = 30152;
let Pnk_Central_Park_Loop_bound = 30151;
let R_Cermak_Chinatown_Howard_bound = 30193;
let R_Cermak_Chinatown_95th_bound = 30194;
let G_Cermak_McCormick_Place_63rd_bound = 30382;
let G_Cermak_McCormick_Place_Harlem_bound = 30381;
let R_Chicago_95th_bound = 30280;
let PB_Chicago_Loop_bound = 30138;
let B_Chicago_Forest_Pk_bound = 30272;
let B_Chicago_OHare_bound = 30271;
let R_Chicago_Howard_bound = 30279;
let PB_Chicago_Kimball_Linden_bound = 30137;
let B_Cicero_OHare_bound = 30187;
let G_Cicero_63rd_bound = 30094;
let B_Cicero_Forest_Pk_bound = 30188;
let Pnk_Cicero_Loop_bound = 30082;
let Pnk_Cicero_54th_Cermak_bound = 30083;
let G_Cicero_Harlem_bound = 30009;
let R_Clark_Division_Howard_bound = 30121;
let R_Clark_Division_95th_bound = 30122;
let BG_Clark_Lake_Outer_Loop = 30075;
let B_Clark_Lake_Forest_Pk_bound = 30374;
let B_Clark_Lake_OHare_bound = 30375;
let OPnkPG_Clark_Lake_Inner_Loop = 30074;
let PnkG_Clinton_Loop_63rd_bound = 30221;
let B_Clinton_Forest_Pk_bound = 30085;
let B_Clinton_OHare_bound = 30084;
let PnkG_Clinton_Harlem_54th_Cermak_bound = 30222;
let G_Conservatory_63rd_bound = 30291;
let G_Conservatory_Harlem_bound = 30292;
let G_Cottage_Grove_Harlem_bound = 30140;
let G_Cottage_Grove_Terminal_arrival = 30139;
let B_Cumberland_OHare_bound = 30044;
let B_Cumberland_Forest_Pk_bound = 30045;
let B_Damen_Milwaukee_OHare_bound = 30115;
let G_Damen_63rd_bound = 30387;
let G_Damen_Harlem_bound = 30388;
let Pnk_Damen_54th_Cermak_bound = 30041;
let B_Damen_Loop_bound = 30019;
let B_Damen_Milwaukee_Forest_Pk_bound = 30116;
let Pnk_Damen_Loop_bound = 30040;
let B_Damen_Kimball_bound = 30018;
let P_Davis_Linden_bound = 30010;
let P_Davis_Howard_Loop_bound = 30011;
let P_Dempster_Linden_bound = 30133;
let P_Dempster_Howard_Loop_bound = 30134;
let Y_Dempster_Skokie_Howard_bound = 30027;
let Y_Dempster_Skokie_Arrival = 30026;
let PB_Diversey_Loop_bound = 30104;
let PB_Diversey_Kimball_Linden_bound = 30103;
let B_Division_OHare_bound = 30062;
let B_Division_Forest_Pk_bound = 30063;
let B_Forest_Park_Terminal_Arrival = 30077;
let B_Forest_Park_OHare_bound = 30076;
let P_Foster_Linden_bound = 30101;
let P_Foster_Howard_Loop_bound = 30102;
let B_Francisco_Loop_bound = 30168;
let B_Francisco_Kimball_bound = 30167;
let PB_Fullerton_Kimball_Linden_bound = 30235;
let R_Fullerton_Howard_bound = 30233;
let PB_Fullerton_Loop_bound = 30236;
let R_Fullerton_95th_bound = 30234;
let R_Garfield_95th_bound = 30224;
let R_Garfield_Howard_bound = 30223;
let G_Garfield_63rd_bound = 30100;
let G_Garfield_Harlem_bound = 30099;
let R_Grand_State_95th_bound = 30065;
let B_Grand_Milwaukee_Forest_Pk_bound = 30096;
let B_Grand_Milwaukee_OHare_bound = 30095;
let R_Grand_State_Howard_bound = 30064;
let R_Granville_95th_bound = 30148;
let R_Granville_Howard_bound = 30147;
let G_Halsted_63rd_Ashland_bound = 30184;
let G_Halsted_63rd_Harlem_bound = 30183;
let O_Halsted_Midway_bound = 30216;
let O_Halsted_Loop_bound = 30215;
let B_Harlem_Forest_Pk_Branch_Terminal_arrival = 30190;
let B_Harlem_OHare_Branch_OHare_bound = 30145;
let B_Harlem_OHare_Branch_Forest_Pk_bound = 30146;
let B_Harlem_Forest_Pk_Branch_OHare_bound = 30189;
let G_Harlem_Terminal_arrival = 30004;
let G_Harlem_63rd_bound = 30003;
let B_HW_Library_Outer_Loop = 30165;
let OPnkP_HW_Library_Inner_Loop = 30166;
let R_Harrison_95th_bound = 30286;
let R_Harrison_Howard_bound = 30285;
let R_Howard_95th_Bound = 30174;
let YP_Howard_Linden_Skokie_bound = 30175;
let R_Howard_Terminal_arrival = 30173;
let YP_Howard_Terminal_arrival = 30176;
let B_Illinois_Medical_District_Forest_Pk_bound = 30158;
let B_Illinois_Medical_District_OHare_bound = 30157;
let G_Indiana_Harlem_bound = 30058;
let G_Indiana_63rd_bound = 30059;
let B_Irving_Park_OHare_Branch_OHare_bound = 30107;
let B_Irving_Park_Kimball_bound = 30281;
let B_Irving_Park_Loop_bound = 30282;
let B_Irving_Park_OHare_Branch_Forest_Pk_bound = 30108;
let B_Jackson_Dearborn_OHare_bound = 30014;
let R_Jackson_State_Howard_bound = 30109;
let R_Jackson_State_95th_bound = 30110;
let B_Jackson_Dearborn_Forest_Pk_bound = 30015;
let R_Jarvis_95th_bound = 30228;
let R_Jarvis_Howard_bound = 30227;
let B_Jefferson_Park_OHare_bound = 30247;
let B_Jefferson_Park_Forest_Pk_bound = 30248;
let O_Kedzie_Loop_bound = 30219;
let G_Kedzie_63rd_bound = 30207;
let G_Kedzie_Harlem_bound = 30208;
let O_Kedzie_Midway_bound = 30220;
let Pnk_Kedzie_54th_Cermak_bound = 30202;
let Pnk_Kedzie_Loop_bound = 30201;
let B_Kedzie_Kimball_bound = 30225;
let B_Kedzie_Loop_bound = 30226;
let B_Kedzie_Homan_OHare_bound = 30048;
let B_Kedzie_Homan_Forest_Pk_bound = 30049;
let B_Kimball_Loop_bound = 30250;
let B_Kimball_Terminal_arrival = 30249;
let G_King_Drive_Cottage_Grove_bound = 30217;
let G_King_Drive_Harlem_bound = 30218;
let Pnk_Kostner_Loop_bound = 30117;
let Pnk_Kostner_54th_Cermak_bound = 30118;
let R_Lake_95th_bound = 30290;
let R_Lake_Howard_bound = 30289;
let G_Laramie_Harlem_bound = 30136;
let G_Laramie_63rd_bound = 30135;
let B_LaSalle_OHare_bound = 30261;
let B_LaSalle_Forest_Pk_bound = 30262;
let B_LaSalle_Van_Buren_Outer_Loop = 30030;
let OPnkP_LaSalle_Van_Buren_Inner_Loop = 30031;
let R_Lawrence_95th_bound = 30150;
let R_Lawrence_Howard_bound = 30149;
let P_Linden_Linden_bound = 30203;
let P_Linden_Howard_Loop_bound = 30204;
let B_Logan_Square_Forest_Pk_bound = 30198;
let B_Logan_Square_OHare_bound = 30197;
let R_Loyola_Howard_bound = 30251;
let R_Loyola_95th_bound = 30252;
let P_Main_Linden_bound = 30052;
let P_Main_Howard_Loop_bound = 30053;
let PB_Merchandise_Mart_Kimball_Linden_bound = 30090;
let PB_Merchandise_Mart_Loop_bound = 30091;
let O_Midway_Arrival = 30182;
let O_Midway_Loop_bound = 30181;
let R_Monroe_95th_bound = 30212;
let R_Monroe_Howard_bound = 30211;
let B_Monroe_Forest_Pk_bound = 30154;
let B_Monroe_OHare_bound = 30153;
let B_Montrose_OHare_bound = 30259;
let B_Montrose_Kimball_bound = 30287;
let B_Montrose_Loop_bound = 30288;
let B_Montrose_Forest_Pk_bound = 30260;
let PnkG_Morgan_Harlem_54th_Cermak_bound = 30296;
let PnkG_Morgan_Loop_63rd_bound = 30295;
let R_Morse_Howard_bound = 30020;
let R_Morse_95th_bound = 30021;
let R_North_Clybourn_95th_bound = 30126;
let R_North_Clybourn_Howard_bound = 30125;
let P_Noyes_Howard_Loop_bound = 30079;
let P_Noyes_Linden_bound = 30078;
let G_Oak_Park_63rd_bound = 30263;
let B_Oak_Park_OHare_bound = 30034;
let B_Oak_Park_Forest_Pk_bound = 30035;
let G_Oak_Park_Harlem_bound = 30264;
let Y_Oakton_Skokie_Dempster_Skokie_bound = 30297;
let Y_Oakton_Skokie_Howard_bound = 30298;
let B_OHare_Forest_Pk_bound = 30172;
let B_OHare_Terminal_Arrival = 30171;
let B_Paulina_Loop_bound = 30254;
let B_Paulina_Kimball_bound = 30253;
let Pnk_Polk_Loop_bound = 30199;
let Pnk_Polk_54th_Cermak_bound = 30200;
let G_Pulaski_Harlem_bound = 30006;
let B_Pulaski_Forest_Pk_bound = 30180;
let Pnk_Pulaski_Loop_bound = 30028;
let O_Pulaski_Midway_bound = 30186;
let B_Pulaski_OHare_bound = 30179;
let O_Pulaski_Loop_bound = 30185;
let G_Pulaski_63rd_bound = 30005;
let Pnk_Pulaski_54th_Cermak_bound = 30029;
let OPnkP_Quincy_Wells_Inner_Loop = 30007;
let B_Quincy_Wells_Outer_Loop = 30008;
let B_Racine_OHare_bound = 30092;
let B_Racine_Forest_Pk_bound = 30093;
let G_Ridgeland_Harlem_bound = 30120;
let G_Ridgeland_63rd_bound = 30119;
let B_Rockwell_Loop_bound = 30196;
let B_Rockwell_Kimball_bound = 30195;
let R_Roosevelt_Howard_bound = 30269;
let OG_Roosevelt_Midway_63rd_bound = 30081;
let OG_Roosevelt_Loop_Harlem_bound = 30080;
let R_Roosevelt_95th_bound = 30270;
let B_Rosemont_Forest_Pk_bound = 30160;
let B_Rosemont_OHare_bound = 30159;
let PB_Sedgwick_Loop_bound = 30156;
let PB_Sedgwick_Kimball_Linden_bound = 30155;
let R_Sheridan_95th_bound = 30017;
let _Sheridan_Loop_bound = 30294;
let R_Sheridan_Howard_bound = 30016;
let _Sheridan_Howard_Linden_bound = 30293;
let P_South_Blvd_Howard_Loop_bound = 30164;
let P_South_Blvd_Linden_bound = 30163;
let B_Southport_Loop_bound = 30071;
let B_Southport_Kimball_bound = 30070;
let R_Sox_35th_Howard_bound = 30036;
let R_Sox_35th_95th_bound = 30037;
let OPnkPG_State_Lake_Inner_Loop = 30050;
let BG_State_Lake_Outer_Loop = 30051;
let R_Thorndale_Howard_bound = 30169;
let R_Thorndale_95th_bound = 30170;
let B_UIC_Halsted_OHare_bound = 30068;
let B_UIC_Halsted_Forest_Pk_bound = 30069;
let B_Washington_Forest_Pk_bound = 30073;
let B_Washington_OHare_bound = 30072;
let OPnkPG_Washington_Wabash_Inner_Loop = 30384;
let BG_Washington_Wabash_Outer_Loop = 30383;
let B_Washington_Wells_Outer_Loop = 30142;
let OPnkP_Washington_Wells_Inner_Loop = 30141;
let PB_Wellington_Loop_bound = 30232;
let PB_Wellington_Kimball_Linden_bound = 30231;
let B_Western_Loop_bound = 30284;
let B_Western_OHare_Branch_OHare_bound = 30129;
let B_Western_Forest_Pk_Branch_OHare_bound = 30042;
let O_Western_Midway_bound = 30061;
let Pnk_Western_54th_Cermak_bound = 30144;
let B_Western_Forest_Pk_Branch_Forest_Pk_bound = 30043;
let O_Western_Loop_bound = 30060;
let B_Western_OHare_Branch_Forest_Pk_bound = 30130;
let B_Western_Kimball_bound = 30283;
let Pnk_Western_Loop_bound = 30143;
let P_Wilson_Loop_bound = 30385;
let P_Wilson_Linden_bound = 30386;
let R_Wilson_95th_bound = 30106;
let R_Wilson_Howard_bound = 30105;
let BUS63_Ashland_East = 3413;
let BUS63_Ashland_West = 3245;
let BUS63_Halsted_West = 15880;
let BUS63_Halsted_East = 15879;
let BUS63_Red_East = 3429;
let BUS63_Red_West = 3229;
let BUS63_King_West = 3222;
let BUS63_Cottage_East = 3442;
let BUS63_Cottage_West = 16077;
let BUS55_Red_East = 6524;
let BUS55_Green_East = 10548;
let BUS54B_Midway_South = 14123;
let BUS54B_Midway_North = 15761;
let BUS54B_Pink = 14193;
let BUS81_Brown_East = 3746;
let BUS81_Brown_West = 3804;
let BUS81_Blue = 14102;
let BUS318 = 101;

//time to make a cancerous database

/*
Note: when selecting run, make sure it runs on correct day
Steps:
0. Select day
1. Select departure station
2. Select start time
3. Select first run after start time (trip_id)
4. Find time when trip gets to destination station
4a. Check if we can "transfer" to the next destination station
5. Select first run to next destination station after trip arrives (use stop_headsign)
6. Repeat 4 and 5

Note: can do this const result = row ?? { time: "NO_RESULT" }; if row doesn't exist
*/
// 63rd: 30177 (to howard) 30178 (to 95th)
// green line split: 100
// garfield: 30100 (63rd) 30099 (harlem)
// temporary: pace bus split: 101
// temporary: 81 bus split: 102
// temporary: 54B bus split: 103
// 15761, 

//let route = [30204, 30176, 30174, 30089, 30088, 30177, 100, 30099, 30004, 101, 30076, 30171, 30172, 30248, 14102, 3746, 30250, 30075, 30074, 30182, 15761, 14193, 30113, 30199];
//let route = [30204, 30176, 30175, 30026, 30027, 30176, 30174, 30089, 30088, 30177, 3229, 3246, 30056, 30183, 15879, 3442, 30140, 30004, 101, 30076, 30171, 30172, 30248, 14102, 3746, 30250, 30075, 30074, 30182, 15761, 14193, 30113, 30199];

// polk routing with both options
// let route = [
//   Pnk_Polk_54th_Cermak_bound,
//   Pnk_54th_Cermak_Terminal_arrival,
//   BUS54B_Pink,
//   BUS54B_Midway_South,
//   O_Midway_Loop_bound,
//   OPnkP_Washington_Wells_Inner_Loop,
//   B_Washington_Wells_Outer_Loop,
//   B_Kimball_Terminal_arrival,
//   BUS81_Brown_West,
//   BUS81_Blue,
//   B_Jefferson_Park_OHare_bound,
//   B_OHare_Terminal_Arrival,
//   B_OHare_Forest_Pk_bound,
//   B_Forest_Park_Terminal_Arrival,
//   BUS318,
//   G_Harlem_63rd_bound,

//   G_Cottage_Grove_Terminal_arrival,
//   BUS63_Cottage_West,
//   BUS63_Ashland_West,
//   G_Ashland_63rd_Harlem_bound,
//   G_Halsted_63rd_Harlem_bound,
//   BUS63_Halsted_East,
//   BUS63_Red_East,

//   // G_Ashland_63rd_Terminal_arrival,
//   // BUS63_Ashland_East,
//   // BUS63_Cottage_East,
//   // G_Cottage_Grove_Harlem_bound,
//   // G_King_Drive_Harlem_bound,
//   // BUS63_King_West,
//   // BUS63_Red_West,

//   R_63rd_95th_bound,
//   R_95th_Dan_Ryan_95th_bound,
//   R_95th_Dan_Ryan_Howard_bound,
//   R_Howard_Terminal_arrival,
//   YP_Howard_Linden_Skokie_bound,
//   Y_Dempster_Skokie_Arrival,
//   Y_Dempster_Skokie_Howard_bound,
//   YP_Howard_Terminal_arrival,
//   YP_Howard_Linden_Skokie_bound,
//   P_Linden_Linden_bound
// ];

// // linden routing with all 4 swapping point options
// let route = [
//   P_Linden_Howard_Loop_bound,
//   YP_Howard_Terminal_arrival,
//   YP_Howard_Linden_Skokie_bound,
//   Y_Dempster_Skokie_Arrival,
//   Y_Dempster_Skokie_Howard_bound,
//   YP_Howard_Terminal_arrival,
//   R_Howard_95th_Bound,
//   R_95th_Dan_Ryan_95th_bound,
//   R_95th_Dan_Ryan_Howard_bound,
  

//   // garfield swaps

//   // both
//   // R_Garfield_Howard_bound,
//   // BUS55_Red_East,
//   // BUS55_Green_East,
//   // G_Garfield_63rd_bound,

//   // 1
//   // G_Cottage_Grove_Terminal_arrival,
//   // BUS63_Cottage_West,
//   // BUS63_Ashland_West,
//   // G_Ashland_63rd_Harlem_bound,

//   // 2
//   // G_Ashland_63rd_Terminal_arrival,
//   // BUS63_Ashland_East,
//   // BUS63_Cottage_East,
//   // G_Cottage_Grove_Harlem_bound,

//   // 63rd swaps
  
//   // both 
//   R_63rd_Howard_bound,

//   // 1
//   // BUS63_Red_East,
//   // BUS63_Cottage_East,
//   // G_Cottage_Grove_Harlem_bound,
//   // G_King_Drive_Harlem_bound,
//   // BUS63_King_West,
//   // BUS63_Ashland_West,
//   // G_Ashland_63rd_Harlem_bound,

//   BUS63_Red_West,
//   BUS63_Ashland_West,
//   G_Ashland_63rd_Harlem_bound,
//   G_Halsted_63rd_Harlem_bound,
//   BUS63_Halsted_East,
//   BUS63_Cottage_East,
//   G_Cottage_Grove_Harlem_bound,

  
  
//   G_Harlem_Terminal_arrival,
//   BUS318,
//   B_Forest_Park_OHare_bound,
//   B_OHare_Terminal_Arrival,
//   B_OHare_Forest_Pk_bound,
//   B_Jefferson_Park_Forest_Pk_bound,
//   BUS81_Blue,
//   BUS81_Brown_East,
//   B_Kimball_Loop_bound,
//   B_HW_Library_Outer_Loop,
//   OPnkP_HW_Library_Inner_Loop,
//   O_Midway_Arrival,
//   BUS54B_Midway_North,
//   BUS54B_Pink,
//   Pnk_54th_Cermak_Loop_bound,
//   Pnk_Polk_Loop_bound
// ];

// linden routing with swapping at roosevelt
let route = [
  P_Linden_Howard_Loop_bound,
  YP_Howard_Terminal_arrival,
  YP_Howard_Linden_Skokie_bound,
  Y_Dempster_Skokie_Arrival,
  Y_Dempster_Skokie_Howard_bound,
  YP_Howard_Terminal_arrival,
  R_Howard_95th_Bound,
  R_95th_Dan_Ryan_95th_bound,
  R_95th_Dan_Ryan_Howard_bound,
  

  // garfield swaps

  // both
  R_Garfield_Howard_bound,
  BUS55_Red_East,
  BUS55_Green_East,
  G_Garfield_63rd_bound,

  // 1
  // G_Cottage_Grove_Terminal_arrival,
  // BUS63_Cottage_West,
  // BUS63_Ashland_West,
  // G_Ashland_63rd_Harlem_bound,

  // 2
  G_Ashland_63rd_Terminal_arrival,
  BUS63_Ashland_East,
  BUS63_Cottage_East,
  G_Cottage_Grove_Harlem_bound,

  // 63rd swaps
  
  // both 
  // R_63rd_Howard_bound,

  // 1
  // BUS63_Red_East,
  // BUS63_Cottage_East,
  // G_Cottage_Grove_Harlem_bound,
  // G_King_Drive_Harlem_bound,
  // BUS63_King_West,
  // BUS63_Ashland_West,
  // G_Ashland_63rd_Harlem_bound,

  // BUS63_Red_West,
  // BUS63_Ashland_West,
  // G_Ashland_63rd_Harlem_bound,
  // G_Halsted_63rd_Harlem_bound,
  // BUS63_Halsted_East,
  // BUS63_Cottage_East,
  // G_Cottage_Grove_Harlem_bound,

  G_Harlem_Terminal_arrival,
  BUS318,
  B_Forest_Park_OHare_bound,
  B_OHare_Terminal_Arrival,
  B_OHare_Forest_Pk_bound,
  B_Jefferson_Park_Forest_Pk_bound,
  BUS81_Blue,
  BUS81_Brown_East,
  B_Kimball_Loop_bound,
  BG_Adams_Wabash_Outer_Loop,
  OPnkPG_Adams_Wabash_Inner_Loop,
  O_Midway_Arrival,
  BUS54B_Midway_North,
  BUS54B_Pink,
  Pnk_54th_Cermak_Loop_bound,
  Pnk_Polk_Loop_bound

  // OG_Roosevelt_Loop_Harlem_bound,
  // OG_Roosevelt_Midway_63rd_bound,
  // O_Midway_Arrival,
  // BUS54B_Midway_North,
  // BUS54B_Pink,
  // Pnk_54th_Cermak_Loop_bound,
  // PnkG_Clinton_Loop_63rd_bound,
  // PnkG_Clinton_Harlem_54th_Cermak_bound,
  // G_Harlem_Terminal_arrival,
  // BUS318,
  // B_Forest_Park_OHare_bound,
  // B_OHare_Terminal_Arrival,
  // B_OHare_Forest_Pk_bound,
  // B_Jefferson_Park_Forest_Pk_bound,
  // BUS81_Blue,
  // BUS81_Brown_East,
  // B_Kimball_Loop_bound,
  // BG_Clark_Lake_Outer_Loop
];

// AJ orange start route
// let route = [
//   O_Midway_Loop_bound, 
//   OPnkPG_Clark_Lake_Inner_Loop,
//   Pnk_54th_Cermak_Terminal_arrival,
//   Pnk_54th_Cermak_Loop_bound,
//   PnkG_Ashland_Loop_63rd_bound,
//   PnkG_Ashland_Harlem_54th_Cermak_bound,
//   G_Harlem_Terminal_arrival,
//   BUS318, 
//   B_Forest_Park_OHare_bound,
//   B_OHare_Terminal_Arrival,
//   B_OHare_Forest_Pk_bound,
//   B_Jefferson_Park_Forest_Pk_bound,
//   BUS81_Blue,
//   BUS81_Brown_East,
//   B_Kimball_Loop_bound,
//   BG_Clark_Lake_Outer_Loop,
//   OPnkPG_Clark_Lake_Inner_Loop,
  
//   G_Cottage_Grove_Terminal_arrival,
//   BUS63_Cottage_West,
//   BUS63_Ashland_West,
//   G_Ashland_63rd_Harlem_bound,
//   G_Halsted_63rd_Harlem_bound,
//   BUS63_Halsted_East,
//   BUS63_Red_East,

//   // G_Ashland_63rd_Terminal_arrival,
//   // BUS63_Ashland_East,
//   // BUS63_Cottage_East,
//   // G_Cottage_Grove_Harlem_bound,
//   // G_King_Drive_Harlem_bound,
//   // BUS63_King_West,
//   // BUS63_Red_West,

//   R_63rd_95th_bound,
//   R_95th_Dan_Ryan_95th_bound,
//   R_95th_Dan_Ryan_Howard_bound,
//   R_Howard_Terminal_arrival,
//   YP_Howard_Linden_Skokie_bound,
//   Y_Dempster_Skokie_Arrival,
//   Y_Dempster_Skokie_Howard_bound,
//   YP_Howard_Terminal_arrival,
//   YP_Howard_Linden_Skokie_bound,
//   P_Linden_Linden_bound
// ];

//let route = [30200, 30114, 14193, 14123, 30181, 30074, 30075, 30249, 3804, 14102, 30247, 30171, 30172, 30077, 101, 30003, 30139, 16077, 3246, 30056, 30183, 15879, 3429, 30178, 30089, 30088, 30173, 30175, 30026, 30027, 30176, 30175, 30203]; // polk start, via cottage first (8:40 at 7:45 on friday)
//let route = [30200, 30114, 14193, 14123, 30181, 30074, 30075, 30249, 3804, 14102, 30247, 30171, 30172, 30077, 101, 30003, 30057, 3412, 3442, 30140, 30218, 3222, 3229, 30178, 30089, 30088, 30173, 30175, 30026, 30027, 30176, 30175, 30203]; // polk start, via ashland first (8:45 at 8:45 on friday)
//                                                                                                               gs begin ^                                              ^ gs end (30178 is red)
//let route = [30204, 30176, 30175, 30026, 30027, 30176, 30174, 30089, 30088, 30177, 3229, 3246, 30056, 30183, 15879, 3442, 30140, 30080, 30081, 30182, 15761, 14193, 30113, 30199, 6691, 18336, 30093, 30077, 101, 30003, 30074, 30075, 30249, 3804, 17038, 14102, 30247, 30171, 30172, 30069];
let initialDay = "sunday";
let bestTime = "10:00:00";
let bestTimeStart = "Undefined";

const splitTimeConstant = 3;

const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

for (let h = 6; h < 10; h++) {
  let hp = h.toString();
  if (h < 10) {
    hp = "0" + h.toString();
  }
  for (let i = 0; i < 60; i += 5) {
    let j = i.toString();
    if (i < 10) {
      j = "0" + i.toString();
    }
    let t = hp + ":" + j + ":00";
    let totalTime = calcRouteAtTimeAndDay(t, initialDay);
    let bestTimeSplit = bestTime.split(":");
    let totalTimeSplit = totalTime.split(":");
    if (totalTimeSplit[0] * 3600 + totalTimeSplit[1] * 60 + totalTimeSplit[2] < bestTimeSplit[0] * 3600 + bestTimeSplit[1] * 60 + bestTimeSplit[0]) {
      bestTime = totalTime;
      bestTimeStart = t;
    }
  }
}

console.log("The best time to start on", initialDay, "is", green, bestTimeStart, reset, "taking", green, bestTime, reset);

function calcRouteAtTimeAndDay(startTime, day) {
  console.log("Started calcuation for", day, "at", startTime);
  let time = startTime;
  let at = 0;
  while (at < route.length - 1) {
    let current = route[at];
    let next = route[at + 1];
    at++;
    if (next == 101) {
      // this is effectively the pace 318 schedule, it assumes midday which is the case for the 318 in almost all routes
      at++;
      let split = time.split(":");
      split[0] = parseInt(split[0]);
      split[1] = parseInt(split[1]);
      // nice workaround
      let arrivalMinutes = [5, 20, 35, 50, 65]; // this is blue bound from green
      // let arrivalMinutes = [2, 17, 32, 47, 62]; // this is green bound from blue
      for (let i = 0; i < arrivalMinutes.length; i++) {
        if (arrivalMinutes > split[1]) {
          split[1] += (arrivalMinutes - split[1]) + 7;
          break;
        }
      }
      if (split[1] > 60) {
        split[1] -= 60;
        split[0]++;
      }
      if (split[0] < 10) {
        split[0] = "0" + split[0];
      }
      if (split[1] < 10) {
        split[1] = "0" + split[1];
      }
      time = split.toString().replaceAll(",", ":");
      //console.log("Executed pace 318 split and burnt 30 minutes of time, current time is now", time);
      continue;
    }
    if (canTransfer(current, next)) {
      //console.log("Transferred from", current, "to", next);
      continue;
    }
    let departures = getNextFifteenDeparturesFromStopAfterTime(current, time);
    // console.log("Currently at " + current);
    let trip = 0;
    for (let i = 0; i < departures.length; i++) {
      if (doesRunGoToStop(departures[i], next) && doesTripRunOnDay(day, departures[i])) {
        trip = departures[i];
        break;
      }
    }
    if (trip == 0) {
      console.error("Failed to find trip. Exiting...");
      return;
    }
    time = arrivalTimeOfTripAtStop(trip, next);
    //console.log("Selected run #", getRunNumberFromTripId(trip).replaceAll("R", ""), "at", green, arrivalTimeOfTripAtStop(trip, current), reset ,"to go from", getStopNameFromId(current), "to", getStopNameFromId(next) + ", arriving at", green, time, reset);
    //console.log("The trip arrived at", time);
    let split = time.split(":");
    split[0] = parseInt(split[0]);
    split[1] = parseInt(split[1]);
    if(current == 30171){
      split[1] += 6; // bathroom break at ohare
    }
    else{
      split[1] += splitTimeConstant;
    }
    if (split[1] > 59) {
      split[1] -= 60;
      split[0]++;
    }
    if (split[0] < 10) {
      split[0] = "0" + split[0];
    }
    if (split[1] < 10) {
      split[1] = "0" + split[1];
    }
    time = split.toString().replaceAll(",", ":");
  }

  let startSplit = startTime.split(":");
  let endSplit = time.split(":");
  let splitTime = [endSplit[0] - startSplit[0], endSplit[1] - startSplit[1], endSplit[2] - startSplit[2]];
  if (splitTime[2] < 0) {
    splitTime[2] += 60;
    splitTime[1]--;
  }
  if (splitTime[1] < 0) {
    splitTime[1] += 60;
    splitTime[0]--;
  }
  if (splitTime[0] < 10) {
    splitTime[0] = "0" + splitTime[0];
  }
  if (splitTime[1] < 10) {
    splitTime[1] = "0" + splitTime[1];
  }
  if (splitTime[2] < 10) {
    splitTime[2] = "0" + splitTime[2];
  }
  splitTime = splitTime.toString().replaceAll(",", ":")
  console.log("Routing starting at", startTime, "on", day, "took", green, splitTime, reset);
  return splitTime;
}

function arrivalTimeOfTripAtStop(trip, stop) {
  const stmt = db.prepare(`
    SELECT arrival_time 
    FROM Times 
    WHERE trip_id = ${trip} 
    AND stop_id = ${stop}
  `);

  const time = stmt.get();
  return time["arrival_time"];
}

function canTransfer(from, to) {
  const stmt = db.prepare(`
      SELECT *
      FROM Transfers
      WHERE (from_stop_id = ${from}
      AND to_stop_id = ${to}) OR (from_stop_id = ${to} AND to_stop_id = ${from})
  `);

  const rows = stmt.get();
  return rows ? true : false;
}

function getRunNumberFromTripId(tripId){
  const stmt = db.prepare(`
    SELECT schd_trip_id 
    FROM Trips 
    WHERE trip_id = ${tripId}
  `);

  const run = stmt.get();
  return run["schd_trip_id"];
}

function getStopNameFromId(stopId){
  const stmt = db.prepare(`
    SELECT stop_name 
    FROM Stops 
    WHERE stop_id = ${stopId}
  `);

  const run = stmt.get();
  return run["stop_name"];
}

function doesRunGoToStop(trip, stop) {
  const stmt = db.prepare(`
      SELECT * 
      FROM Times 
      WHERE trip_id = ${trip} 
      AND stop_id = ${stop}
  `);

  const rows = stmt.all();
  return rows.length != 0;
}

function doesTripRunOnDay(day, trip) {
  const stmt = db.prepare(`
      SELECT service_id
      FROM Trips
      WHERE trip_id = ${trip}
  `);

  const serviceId = stmt.get()["service_id"];

  const stmt3 = db.prepare(`
      SELECT * 
      FROM Calendar
      WHERE service_id = ${serviceId}
  `);

  return stmt3.get()[day] == 1;
}

function getNextFifteenDeparturesFromStopAfterTime(stop, time) {
  const stmt = db.prepare(`
      SELECT trip_id 
      FROM Times 
      WHERE departure_time >= '${time}'
      AND stop_id = ${stop}
      ORDER BY departure_time
      LIMIT 25;
  `);

  const rows = stmt.all();
  const ids = [];
  rows.forEach(row => {
    ids.push(row["trip_id"]);
  })
  return ids;
}
