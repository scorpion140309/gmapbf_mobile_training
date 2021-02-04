//
class Quiz4
{
    constructor(a_qnum, a_ary_quiz)
    {
        // 四択パターン
        this.ary_anser_pattern_ = new Array(
            0x0123,0x0132,0x0213,0x0231,0x0312,0x0321,
            0x1023,0x1032,0x1203,0x1230,0x1302,0x1320,
            0x2013,0x2031,0x2103,0x2130,0x2301,0x2310,
            0x3012,0x3021,0x3102,0x3120,0x3201,0x3210
        );

        // 出題数(問題のストック数ではない)
        this.question_num_ = a_qnum;
        // 問題の配列
        this.ary_question_ = a_ary_quiz;
    }

    //
    GetAnsPattern(a_rand)
    {
        let ret_ary = new Array();
        const id = a_rand % this.ary_anser_pattern_.length;
        const pattern = this.ary_anser_pattern_[id];
        for (let i = 0; i < 4; i++)
        {
            const ans0123 = (pattern >> (4*(3-i)) & 0x03);
            ret_ary.push(ans0123);
        }
		return ret_ary;
	}

}

//function C_SELECT_ONE() {
//    this.ary_anser_pattern__ = new Array(
//		0x0123,0x0132,0x0213,0x0231,0x0312,0x0321,
//		0x1023,0x1032,0x1203,0x1230,0x1302,0x1320,
//		0x2103,0x2130,0x2013,0x2031,0x2310,0x2301,
//		0x3120,0x3102,0x3210,0x3201,0x3012,0x3021
//	);
//    this.question_num__ = 0;
//    this.ary_question__ = new Array();//
//    this.ary_table_color__ = new Array("#A0A0A0","#FFFFFF");
//}
//;C_SELECT_ONE.prototype.sttc_Init = function() {
//    if (this.question_num__ > this.ary_question__.length) {
//        this.question_num__ = this.ary_question__.length;
//    }
//    var q_length;
//    var xc_id;
//    var tmp;
//    q_length = this.ary_question__.length;
//    for (i = 0; i < q_length; i++) {
//        xc_id = ns_XorShift.GetRand() % (q_length - i) + i;
//        tmp = this.ary_question__[xc_id];
//        this.ary_question__[xc_id] = this.ary_question__[i];
//        this.ary_question__[i] = tmp;
//    }
//}
//;
//C_SELECT_ONE.prototype.sttc_MakeQuestion = function(question_no, flag_anser) {
//    var pattern24 = 0;
//    var pattern_id = 0;
//    var pattern_num;
//    var rd;
//    var i;
//    var ans_id = 0;
//    rd = ns_XorShift.GetRand();
//    pattern_num = this.ary_anser_pattern__.length;
//    id = ns_XorShift.GetRand() % pattern_num
//    pattern24 = this.ary_anser_pattern__[id];
//    document.write(this.ary_question__[question_no][0], "<br>");
//    for (i = 0; i < 4; i++) {
//        pattern_id = ((pattern24 >> (i << 2)) & 3) + 1;
//        document.write("<p>");
//        if (flag_anser && pattern_id == 1) {
//            document.write("<div class='test_anser'>");
//        }
//        document.write("", i + 1, ". ", this.ary_question__[question_no][pattern_id]);
//        if (flag_anser && pattern_id == 1) {
//            document.write("</div>");
//            ans_id = i + 1;
//        }
//        document.write("</p>");
//    }
//    if (flag_anser) {
//        document.write("<br>");
//        document.write("<div class='test_anser'>");
//        document.write("<p>[解答] ", ans_id, "</p>");
//        document.write("<p>「", this.ary_question__[question_no][5], "」 参照</p>");
//        document.write("</div>");
//    }
//}
//;
//C_SELECT_ONE.prototype.sttc_DispTable = function(flag_anser) {
//    var i;
//    document.write("<p>問題総数:", this.ary_question__.length, ",出題数:", this.question_num__, "</p>");
//    for (i = 0; i < this.question_num__; i++) {
//        document.write("<hr><p>第", i + 1, "問</p>");
//        this.sttc_MakeQuestion(i, flag_anser);
//    }
//}
//;
//C_SELECT_ONE.prototype.Test_SelectOne = function(flag_anser) {
//    this.sttc_Init();
//    this.sttc_DispTable(flag_anser);
//    if (flag_anser != 0) {}
//}
//;
