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
		this.qa_database_ = new Array(
			BusinessStrategyDatabase,
			MarketingDatabase,
			AccountingDatabase,
			HumanResourceManagementDatabase,
			);
		this.current_rnd_pattern_ = 0;
		this.current_ans_ = -1;

		this.qa_database_.forEach(element=> element.sort());
		for (let i = 0; i < this.qa_database_.length;i++)
		{
			this.qa_database_[i].sort(
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
		}

		
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
		this.ary_btn_okng_ = new Array();
		const ary_okng_id =
		[
			'okng_0','okng_1','okng_2','okng_3',
		];
		for (let i = 0; i < ary_okng_id.length; i++)
		{
			let elm = document.getElementById(ary_okng_id[i])
			this.ary_btn_okng_.push(elm);
		}
		return;
	}

	// 科目のリストボックスにアイテムをセット
	SetCategoryItems_()
	{
		this.selector_category_.options.length = 0;
	
		const ary_category = ['経営戦略','マーケティング','アカウンティング','人・組織']
		for (let i = 0; i < ary_category.length; i++)
		{
			this.selector_category_.options[i] = new Option(ary_category[i]);
		}
		//
		this.selector_category_.options.selectedIndex = 0;
	
		return;
	}

	// 出題数に応じたGUI初期化処理
	SetQuizeIdItems_()
	{
		const category_id = this.selector_category_.options.selectedIndex;
		this.q_num_ = this.qa_database_[category_id].length;
		// this.selector_quiz_id_ = document.getElementById('quiz_id');
        //this.q_num_ = 20;	// 出題数
		this.selector_quiz_id_.options.length = 0;
	
		for (let i = 0; i < this.q_num_; i++)
		{
			this.selector_quiz_id_.options[i] = new Option(i);
		}
		//
		this.selector_quiz_id_.options.selectedIndex = 0;
	
        return;
    }

    // OK/NG ボタンの文字、背景を初期化する。
	ResetOkNgButtons_()
	{
		for (let i = 0; i < this.ary_btn_okng_.length; i++)
		{
			this.ary_btn_okng_[i].style.backgroundColor = '#e0e0e0e0';
			this.ary_btn_okng_[i].value = i;
			this.ary_btn_okng_[i].style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
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
		return this.qa_database_[a_category_id][a_quiz_id].GetQuestion();
    }
	
	//
    GetAnsers_(a_category_id, a_quiz_id)
    {
		return this.qa_database_[a_category_id][a_quiz_id].GetAnsPattern();
    }
	
	//
	GetReference_(a_category_id, a_quiz_id)
    {
		return this.qa_database_[a_category_id][a_quiz_id].GetReference();
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
		for (let i = 0; i < this.ary_btn_okng_.length; i++)
		{
			let item_okng = this.ary_btn_okng_[i];
			item_okng.style.backgroundColor = '#e0e0e0e0';
			item_okng.value = i;
			item_okng.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
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
		for (let i = 0; i < this.ary_btn_okng_.length; i++)
		{
			let flag_okng = (i == this.current_ans_);
			let str_okng = '';
			let col_okng = 'linear-gradient(0deg, #d0a0d0, #f0a0f0)';
			if (flag_okng)
			{
				str_okng = '✓';
				col_okng = 'linear-gradient(0deg, #a0e0a0, #a0f0a0)';
			}
			this.ary_btn_okng_[i].value = str_okng;
			this.ary_btn_okng_[i].style.backgroundImage = col_okng;
			this.ary_btn_ans_[i].style.backgroundImage = col_okng;
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
