let st_flag_init = false;
(function () {
	ary_value_init = [0xD9363228, 0x021A79C9, 0x7604820B, 0xD18E1939];
	ary_value = [0, 0, 0, 0];
	xor_shirt = {
		my_rand_init_: function () {
			now = new Date();
			mask = (now.getYear() * 366 * 31) + (now.getMonth() * 31) + (now.getDate());
			ary_value[0] = ary_value_init[0] ^ mask;
			ary_value[1] = ary_value_init[1] ^ mask;
			ary_value[2] = ary_value_init[2] ^ mask;
			ary_value[3] = ary_value_init[3] ^ mask;
			st_flag_init = true;
		},
		my_rand_get_: function ()
		{
			if (st_flag_init == false)
			{
				this.my_rand_init_();
			}
			afasf_ttoo = ary_value[0] ^ (ary_value[0] << 11);
			ary_value[0] = ary_value[1];
			ary_value[1] = ary_value[2];
			ary_value[2] = ary_value[3];
			ary_value[3] = (ary_value[3] ^ (ary_value[3] >> 19)) ^ (afasf_ttoo ^ (afasf_ttoo >> 8));
			return ary_value[3];
		}
	};
})();
var ns_XorShift;
if (!ns_XorShift) {
	ns_XorShift = {};
}
ns_XorShift.Init = function () {
	xor_shirt.my_rand_init_();
}
ns_XorShift.GetRand = function () {
	return xor_shirt.my_rand_get_();
}
