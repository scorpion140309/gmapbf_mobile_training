//
class QuizSingleData
{
    // 問題、選択肢、解説
    constructor(a_question, a_ans_0, a_ans_1, a_ans_2, a_ans_3, a_reference)
    {
        //
        this.rand_ = ns_XorShift.GetRand();

        this.question_ = a_question;
        // 四択パターン
        this.ary_anser_pattern_ = new Array(a_ans_0, a_ans_1, a_ans_2, a_ans_3);

        // 参照
        this.reference_ = a_reference;
    }

    //
    CmpID()
    {
        return this.rand_;
    }

    //
    GetQuestion()
    {
        return this.question_;
    }
    //
    GetAnsPattern()
    {
        return this.ary_anser_pattern_;
    }
    //
    GetReference()
    {
        return this.reference_;
    }
}

class QuizDatabase
{
    // 問題、選択肢、解説
    constructor(a_category_name, a_ary_quizdata)
    {
        this.category_name_ = a_category_name;
        this.ary_quiz_data_ = a_ary_quizdata;
    }
    //
    CategoryName()
    {
        return this.category_name_;
    }
    //
    GetQuiz(a_quiz_id)
    {
        let ret_quiz = null;
        if(a_quiz_id >=0 && a_quiz_id < this.ary_quiz_data_.length)
        {
            ret_quiz = this.ary_quiz_data_[a_quiz_id].GetQuestion();
        }
        else
        {
            ret_quiz = 'Error(GetQuiz)';
        }
        return ret_quiz;
    }
    //
    GetAnserPattern(a_quiz_id)
    {
        return this.ary_quiz_data_[a_quiz_id].GetAnsPattern();
    }
    //
    GetReference(a_quiz_id)
    {
        return this.ary_quiz_data_[a_quiz_id].GetReference();
    }
    //
    GetQuizNum()
    {
        return this.ary_quiz_data_.length;
    }
    //
    ShuffleQuiz()
    {
        this.ary_quiz_data_.sort(
            function(a,b)
            {
                let ret_result = 0;
                if( a.CmpID() < b.CmpID() )
                {
                    ret_result = -1;
                }
                else if( a.CmpID() > b.CmpID() )
                {
                    ret_result = 1;
                } 
                return ret_result;
            });
       return;
    }
}
