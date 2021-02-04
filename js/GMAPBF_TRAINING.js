//
class GMAPBF_TRAINING
{
	constructor()
	{
		// Database
		this.SetDatabase_();
		// GUIのIDを取得
		this.GetElements_();
		//
        this.SetCategoryItems_();
        //
        this.SetQuizeIdItems_();
		//
		this.ResetOkNgButtons_();

		return;
	}

	//--------------------------------------------------------------
	//
	//	private methods
	//
	//--------------------------------------------------------------

	//
	SetDatabase_()
	{
		// 20210204
		this.ary_quiz_database_ = new Array(
			BSD,
			MKD,
			ACD,
			HRD,
			);
	
		this.current_rnd_pattern_ = 0;
		this.current_ans_ = -1;

		//
		this.ary_quiz_database_ .forEach(qd => qd.ShuffleQuiz());
		
		this.my_quiz_ = new Quiz4();

		return;
	}
	// GUIのIDを取得
	GetElements_()
	{
		this.selector_category_ = document.getElementById('category');
		this.selector_quiz_id_ = document.getElementById('quiz_id');

		//
		this.text_area_qestion_ = document.getElementById('question_id');
	
		//
		this.text_area_ref_ = document.getElementById('reference_id');
	
		//
		this.ary_btn_ans_ = new Array();
		const ary_ans_id =
		[
			'ans0','ans1','ans2','ans3',
		];	
		for (let i = 0; i < ary_ans_id.length; i++)
		{
			let elm = document.getElementById(ary_ans_id[i]);
			this.ary_btn_ans_.push(elm);
		}

		//
		this.ary_btn_correct_or_not_ = new Array();
		const ary_correct_or_not_id =
		[
			'correct_or_not_0','correct_or_not_1','correct_or_not_2','correct_or_not_3',
		];
		for (let i = 0; i < ary_correct_or_not_id.length; i++)
		{
			let elm = document.getElementById(ary_correct_or_not_id[i])
			this.ary_btn_correct_or_not_.push(elm);
		}
		return;
	}

	// 科目のリストボックスにアイテムをセット
	SetCategoryItems_()
	{
		this.selector_category_.options.length = 0;
		for (let i = 0; i < this.ary_quiz_database_.length; i++)
		{
			let str_category = this.ary_quiz_database_[i].CategoryName();
			this.selector_category_.options[i] = new Option(str_category);
		}
		//
		this.selector_category_.options.selectedIndex = 0;
	
		return;
	}

	// 出題数に応じたGUI初期化処理
	SetQuizeIdItems_()
	{
		const category_id = this.selector_category_.options.selectedIndex;
		this.q_num_ = this.ary_quiz_database_[category_id].GetQuizNum();
		this.selector_quiz_id_.options.length = 0;
	
		for (let i = 0; i < this.q_num_; i++)
		{
			this.selector_quiz_id_.options[i] = new Option(i);
		}
		//
		this.selector_quiz_id_.options.selectedIndex = 0;
	
        return;
    }

    // True / False ボタンの文字、背景を初期化する。
	ResetOkNgButtons_()
	{
		for (let i = 0; i < this.ary_btn_correct_or_not_.length; i++)
		{
			this.ary_btn_correct_or_not_[i].style.backgroundColor = '#e0e0e0e0';
			this.ary_btn_correct_or_not_[i].value = i;
			this.ary_btn_correct_or_not_[i].style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
		}
		return;
    }
    //
    SetIndexes_(a_category_id, a_quiz_id)
    {
        this.selector_category_.selectedIndex = a_category_id;
        this.selector_quiz_id_.selectedIndex = a_quiz_id;
        return;
	}

	//
    GetQuestion_(a_category_id, a_quiz_id)
    {
		return this.ary_quiz_database_[a_category_id].GetQuiz(a_quiz_id);
    }
	
	//
    GetAnsers_(a_category_id, a_quiz_id)
    {
		return this.ary_quiz_database_[a_category_id].GetAnserPattern(a_quiz_id);
    }
	
	//
	GetReference_(a_category_id, a_quiz_id)
    {
		return this.ary_quiz_database_[a_category_id].GetReference(a_quiz_id);
    }

	//
	Get_Q_and_A_(a_category_id, a_quiz_id)
	{
		return this.qa_database_[a_category_id][a_quiz_id];
	}


	////////////////////////////////////////////////////////////////
	//
	//	public methods
	//
	////////////////////////////////////////////////////////////////

	//
    ShowQuestion()
    {
		const id_category = this.selector_category_.selectedIndex;

		// rand
		this.current_rnd_pattern_ = ns_XorShift.GetRand() % (this.my_quiz_.ary_anser_pattern_.length);
        const id_quiz = this.selector_quiz_id_.selectedIndex;
		const ary_ptn = this.my_quiz_.GetAnsPattern(this.current_rnd_pattern_);

		// 問題文
		this.text_area_qestion_.value = this.GetQuestion_(id_category, id_quiz);

		// 選択肢番号
		for (let i = 0; i < this.ary_btn_correct_or_not_.length; i++)
		{
			let item_correct_or_not = this.ary_btn_correct_or_not_[i];
			item_correct_or_not.style.backgroundColor = '#e0e0e0e0';
			item_correct_or_not.value = i;
			item_correct_or_not.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
		}

		// 選択肢
		const ary_str_ans = this.GetAnsers_(id_category, id_quiz);

		for (let i = 0; i < this.ary_btn_ans_.length; i++)
		{
			const id = ary_ptn[i];
			let item_a = this.ary_btn_ans_[i];
			item_a.value = ary_str_ans[id];
			item_a.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';

			if (id == 0)
            {
                this.current_ans_ = i;
            }

		}

		//
		this.text_area_ref_.value = '';

        return;
    }
	//
	ShowAnser_and_Reference(a_ans_id)
	{
		// 解答表示
		for (let i = 0; i < this.ary_btn_correct_or_not_.length; i++)
		{
			let flag_correct_or_not = (i == this.current_ans_);
			let str_correct_or_not = '';
			let col_correct_or_not = 'linear-gradient(0deg, #d0a0d0, #f0a0f0)';
			if (flag_correct_or_not)
			{
				str_correct_or_not = '✓';
				col_correct_or_not = 'linear-gradient(0deg, #a0e0a0, #a0f0a0)';
			}
			this.ary_btn_correct_or_not_[i].value = str_correct_or_not;
			this.ary_btn_correct_or_not_[i].style.backgroundImage = col_correct_or_not;
			this.ary_btn_ans_[i].style.backgroundImage = col_correct_or_not;
		}
	
		//
		const id_category = this.selector_category_.selectedIndex;
        const id_quiz = this.selector_quiz_id_.selectedIndex;
		this.text_area_ref_.value = this.GetReference_(id_category, id_quiz);;
		return;
	}

	//
	GoBack(a_go_back)
	{
		let tmp_id = this.selector_quiz_id_.selectedIndex;
		tmp_id += a_go_back;
		if (tmp_id >= this.selector_quiz_id_.length)
		{
			tmp_id = 0;
		}
		else if(tmp_id < 0)
		{
			tmp_id = this.selector_quiz_id_.length - 1;
		}
		this.selector_quiz_id_.selectedIndex =  tmp_id;
		return;
	}

	//
	func_dummy()
	{
		console.log("hello world!");
	}
}
