//
class QuizDatabase_ALL
{
    // 問題、選択肢、解説
    constructor()
    {
        //
//        this.AppendScript_("QuizDatabase.js");
//        //
//        this.AppendScript_("Database_BusinessStrategy.js");
//        this.AppendScript_("Database_Marketing.js");
//        this.AppendScript_("Database_Acconting.js");
//        this.AppendScript_("Database_HumanResourceManagement.js");

        this.ary_quiz_database_ = new Array(
			DB_BusinessStrategy,
			DB_Marketing,
			DB_Acounting,
			DB_HumanResourceManagemen,
			);
    }

    //
    AppendScript_(URL) {
        var el = document.createElement('script');
        el.src = URL;
        document.body.appendChild(el);
    };

    //
    GetQuizArray()
    {
        return this.ary_quiz_database_;
    }
}
