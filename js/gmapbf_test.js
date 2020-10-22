//
// GMAPBF_TRAINING のインスタンスを生成し、何らかの処理を実行させる。
//

//
let st_gmap_training = null;

//
function Init()
{
	st_gmap_training = new GMAPBF_TRAINING();
	st_gmap_training.ShowQuestion();
	return;
}

//
function GMAPBF_Q(a_go_back)
{
	if (st_gmap_training != null)
	{
		st_gmap_training.GoBack(a_go_back);
		st_gmap_training.ShowQuestion();
	}
	return;
}

//
function GMAPBF_Anser(a_ans_id)
{
	if (st_gmap_training != null)
	{
		st_gmap_training.ShowAnser_and_Reference(a_ans_id);
	}
	return;
}

//
function GMAPBF_ChangeCategory()
{
	if (st_gmap_training != null)
	{
		st_gmap_training.SetQuizeIdItems_();
		GMAPBF_Q(0);
	}
	return;
}
