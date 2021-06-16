/**
 * version
 */
var _gtm_adobe_core_version = "cdnj";
if(typeof _satellite!="undefined"){
_gtm_adobe_core_version+="_mixed";
}
/************************** CONFIG SECTION **************************/
/* AppMeasurement for JavaScript version: 2.11.0
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

// Last Modified: 2021/06/15

//Measurementdomainlist
var sc_prd_domain_list={
"enq.digital.asahi.com":            "prod",
"sitesearch.asahi.com":             "prod",
"www.asahi.com":                    "prod",
"digital.asahi.com":                "prod",
"webronza.asahi.com":               "prod",
"faq.digital.asahi.com":            "prod",
"info.asahi.com":                   "prod",
"33.asahi.com":                     "prod",
"miraimedia.asahi.com":             "prod",
"id.asahi.com":                     "prod",
"360vr.asahi.com":                  "prod",
"que.digital.asahi.com":            "prod",
"sya.asahi.com":                    "prod",
"aginggracefully.asahi.com":        "prod",
"ciy.asahi.com":                    "prod",
"ex.asahi.com":                     "prod",
"change.asahi.com":                 "prod",
"craft.asahi.com":                  "prod",
"www.41fp.com":                     "prod",
"aef.asahi.com":                    "prod",
"bizble.asahi.com":                 "prod",
"ciy.digital.asahi.com":            "prod",
"backoffice.asahi.com":             "prod",
"reg31.smp.ne.jp":                  "prod",
"sso.asahi.com":                    "prod"
}

var S_ENV = sc_prd_domain_list[location.hostname];
if (!S_ENV || typeof(S_ENV) == 'undefined') S_ENV = "dev";

var s_account = (S_ENV == "prod") ? "asahicomall" : "asahicomalldev";

var temp_s;
if (typeof s == "object") temp_s = s;

// check staging mode add 2016/5/18
try {
    if ((window.localStorage && window.localStorage.getItem("sdsat_stagingLibrary") == "true")) {
      s_account="asahicomalldev";
    }
} catch(e) {}

var s=s_gi(s_account);

try{
if(typeof s.s_t_done_flg !="undefined" && s.s_t_done_flg ){
s.abort=1;
}else{
s.abort=0;
sc_coreInit();
}
}catch(e){}

if (typeof temp_s == "object") {
	for(var i in temp_s) {
		if (typeof temp_s[i] != "undefined"  && typeof temp_s[i] != "function" ) {
			s[i] = temp_s[i];
		}
	}
}

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
if(document.characterSet) {
	s.charSet=document.characterSet;
}else if (document.charset) {
	s.charSet=document.charset;
}else{
	s.charSet="UTF-8";
}
s.cookieDomainPeriods=2;
/* Conversion Config */
s.currencyCode="JPY"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,jpg"
s.linkInternalFilters="javascript:"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"

/* Setting of linkInternalFilters */
for(var sc_dmn in sc_prd_domain_list){
	if(sc_prd_domain_list[sc_dmn]=="prod") s.linkInternalFilters+=','+sc_dmn;
}

/* Plugin Config */
s.usePlugins=true

s.siteID=document.domain;
s.defaultPage="index.html";

s.queryVarsList=""; // 20141224
if (location.hostname + location.pathname != "digital.asahi.com/article_search/list.html") {
	s.queryVarsList=s.charSet=="UTF-8"?"keyword":"";
}

s.pathExcludeList="";
s.pathExcludeDelim=";";
s.pathConcatDelim="/";

/* SIGNAL Setting */
gs_siteIDAlign="right";
gs_siteID=document.domain;

/* Viewd Page Number Plugin Config */
s.targetDomainList="";

/* TimeParting plug-in Config */
s.dstStart="1/1/2008";
s.dstEnd="1/1/2008";
s.currentDT=new Date();
s.currentYear=s.currentDT.getFullYear();
s.currentM=scZeroFormat(s.currentDT.getMonth() + 1,2);
s.currentD=scZeroFormat(s.currentDT.getDate(),2);
s.currentH=scZeroFormat(s.currentDT.getHours(),2);
s.currentm=scZeroFormat(s.currentDT.getMinutes(),2);
s.currentS=scZeroFormat(s.currentDT.getSeconds(),2);

//Delimiter
var SC_DLM_CM = ",";

s.s_t_done_flg = false;

function s_doPlugins(s) {
	/* Add calls to plugins here */
  
	// 20150831 add start
	try {
		s.prop12 = s.getHashClid();
		if (s.prop12) s.eVar12 = "D=c12";
	} catch(e){}
	// 20150831 add end

	if (s.pageType == "errorPage") return;

	s.pageName="";
	pcd=(s.pathConcatDelim=="")?"":s.pathConcatDelim;
	if (typeof(gs_pageType)!='undefined'&& gs_pageType!=""){
		s.pageType=gs_pageType;
	}else{
		if(typeof(gs_pageName)!='undefined' && gs_pageName!=""){
			s.pageName=gs_pageName;
		}else{
			gs_pageName=s.getPageName();
			s.pageName=gs_pageName=(gs_siteIDAlign=="right")?gs_pageName+'['+gs_siteID+']':gs_siteID+gs_pageName;
		}
	}

	s.server=(typeof(gs_server)!='undefined'&& gs_server!="")?gs_server:document.domain;
	s.prop1=document.URL;


	/* RINGROW_ANA-103 */
	s.prop22 = s.Util.getQueryParam("iref");
	var sc_ref = s.Util.getQueryParam("ref");
	var sc_cid = s.Util.getQueryParam("cid");
	var sc_oai = s.Util.getQueryParam("oai");
	var sc_rank = s.Util.getQueryParam("rank");

	if(sc_ref!=""){
		s.prop4	 = sc_ref;
		s.cookieWrite("sc_prm_ref",	s.prop4.substring(0,50));
	}
	if(sc_cid!=""){
		s.prop45 = sc_cid;
		s.cookieWrite("sc_prm_cid",	s.prop45.substring(0,50));
	}
	if(sc_oai!=""){
		s.prop32 = sc_oai;
	}
	if(sc_rank!=""){
		s.prop58 = sc_rank;
	}

	s.prop6=s.getFolderName(1);
	s.prop7=s.getFolderName(2);
	s.prop8=s.getFolderName(3);
	s.prop14=s.getFolderName(4);


	if(typeof _dtm_orverride_variables !="undefined" && typeof _dtm_orverride_variables.title !="undefined" && _dtm_orverride_variables.title.length>0){
		s.prop9=_dtm_orverride_variables.title;
	}else{
		s.prop9=document.title;
	}

	s.prop10=s.getNewRepeat(90);
	s.prop11=s.getTimeParting('p','9');
	s.prop15=s.prop4?'D=c4+":"+pageName':'D=pageName';
	s.eVar6='D=c4+":"+c11';
	s.eVar21="+1.0";

	s.prop31 = sc_getDevice();

	/* Elements that function within a page */
	if (s.linkType != "e" && s.linkType != "o" && s.linkType != "d" && !s.linkObject) {
		s.prop34 = s.getPreviousValue('','sc_clk_btn','');
		if (s.prop34 == "no value") s.prop34 = '';
	}
	if (s.prop34) {
		sc_addEvents('event19');
		if (s.prop34 === 'fn1'){
			 //Silver .Lite.Member
			 sc_addEvents('event20,event62');
		}else	if (s.prop34 === 'fn2'){
			 //Silver .Logout.Member
			 sc_addEvents('event63');
		}else	if (s.prop34 === 'fn3'){
			 //Silver .NonRegi
			 sc_addEvents('event64');
		}else	if (s.prop34 === 'fn9'){
			 //Gold .NonRegi
			 sc_addEvents("event65");
		}else	if (s.prop34 === 'fn10'){
			 //Gold .Lite.LiteOut
			 sc_addEvents('event66');
		}
	}

	/* Membership type */
	s.prop35 = s.c_r("sc_mp");
	if (!s.prop35) s.prop35 = "nm";

	/* Subscribing course */
	if(s.prop55) {
		s.fr_exp = new Date();
		s.fr_exp.setTime(s.fr_exp.getTime()+(365*24*60*60*1000));
		s.c_w("sc_crs", s.prop55, s.fr_exp);
	}else{
		s.prop55=s.c_r("sc_crs");
		if(!s.prop55) s.prop55="nm"
	}

	/* Aquisition of the information before resistration */
	var sc_prv_mp = s.getPreviousValue(s.prop35,'sc_prv_mp','');
	var sc_prv_crs = s.getPreviousValue(s.prop55,'sc_prv_crs','');
	if (s.events) {
		if (s.events.indexOf("purchase") > -1) {
			s.prop35 = sc_prv_mp;
			s.prop55 = sc_prv_crs;
		}
	}

	/* Members attribution */
	var sc_c41 = sc_c42 = "";
	var sc_m_attr = s.c_r("sc_m_attr");
	if (sc_m_attr) {
		var sc_m_attrs = sc_m_attr.split(":");
		if (sc_m_attrs.length > 1) {
			sc_c41 = sc_m_attrs[0];
			sc_c42 = sc_m_attrs[1];
		}
	}
	if (!s.prop41) s.prop41 = sc_c41;
	if (!s.prop42) s.prop42 = sc_c42;
	if (s.prop41 || s.prop42) {
		s.fr_exp = new Date();
		s.fr_exp.setTime(s.fr_exp.getTime()+(365*24*60*60*1000));
		s.c_w("sc_m_attr", s.prop41 + ":" + s.prop42, s.fr_exp);
	}
	if (!s.prop41) s.prop41 = "s_uk";
	s.eVar41 = s.prop41;
	if (!s.prop42) s.prop42 = "b_uk";
	s.eVar42 = s.prop42;

	s.prop44 = s.eVar44 = 'D=server+":"+c6';

	var sc_p_num = s.getPageNum();
	if (sc_p_num == 1) {
		if (s.prop10.toLowerCase() == "new") {
			sc_addEvents("event15");
		} else {
			sc_addEvents("event16");
		}
		s.prop47 = s.getDaysSinceLastVisit('s_lv');
	}
	if (sc_p_num == 2) sc_addEvents("event21");

	var vst=1;
	if (s.prop39) {
		var s_chvs=s.getVisitStartByEachSection(s.prop39,'s_c39_vs')==1?vst:0;
		if (vst == s_chvs) {
			if (s.prop10.toLowerCase() == "new") {
				sc_addEvents("event17");
			} else {
				sc_addEvents("event18");
			}
		}
	}

	s.prop49 = s.prop35 + ":" + s.prop41 + ":" + s.prop42;

	s.prop36 = s.c_r("sc_nki");

	/* Article ID */
	var sc_l_pn = location.pathname;
	if (!s.prop40) {
		var sc_kiji_array = ["/TKY","/OSK","/HOK","/NGY","/SEB","/JJT","/RTR","/KYD","/APX","/NIK","/BCN","/TKZ","/JSN","/MTW"];
		for (var i = 0; i < sc_kiji_array.length; i ++) {
			var sc_st_idx = sc_l_pn.indexOf(sc_kiji_array[i]);
			if (sc_st_idx !== -1) {
				s.prop40 = sc_l_pn.substring(sc_st_idx + 1).replace(".html", '');
				break;
			}
		}
	}

	/* article page of asahi-shimbun digital  */
    if (s.prop40) {
    	sc_addEvents("event39,event40");
    	s.c_w('sc_c50', s.prop40);
    	s.eVar27 = s.eVar40 = "D=c40";
    	s.prop54 = s.eVar54 = "D=c9";
    	s.prop26 = s.eVar26 = "D=server";

			if (!s.s_t_done_flg && sc_asa_digi_list2.match(/X[0-9]{3}/g)) {
				s.prop26 = s.eVar26 = s.prop26 + '+"|' + sc_asa_digi_list2.match(/X[0-9]{3}/g).join(':') + '"';
			}else{
				if(s.s_t_done_flg){
					s.prop26 = s.eVar26 = s.prop26 + '+"|ERR1';
				}else{
					s.prop26 = s.eVar26 = s.prop26 + '+"|ERR2';
				}
			}

		/* Acquisition of the article that you browse to the first after the member registration */
		var sc_c40_ev = s.c_r('sc_c40_ev');
		if (sc_c40_ev) {
			if (sc_c40_ev == "event22") {
				s.prop37 = s.eVar37 = "D=c40";
				sc_addEvents("event32");
				s.c_w('sc_c40_ev', '');
			} else if (sc_c40_ev == "event12") {
				s.prop38 = s.eVar38 = "D=c40";
				sc_addEvents("event33");
				s.c_w('sc_c40_ev', '');
			}
		}
	}


	/* WEBRONZA article page */
    if (s.prop67) {
    	sc_addEvents("event39,event40");
    	// 20141224
    	s.prop26 = s.eVar26 = "D=server";
        if (!s.s_t_done_flg && window.sc_asa_digi_wr_article) {
        	s.prop26 = s.eVar26 = s.prop26 + '+"|' + window.sc_asa_digi_wr_article + '"';
        }
    }

	/* The date of start charging */
	var sc_mp_ch = s.c_r('sc_mp_ch');
	if (sc_mp_ch) {
		s.prop25 = sc_mp_ch;
		s.eVar25 = "D=c25";
		sc_addEvents("event29:" + s.prop36);
	}

	if (s.events) {
		/*  Free membership registration */
		if (s.events.indexOf("event22") > -1) {
			s.c_w('sc_c40_ev', "event22");
			s.prop56="2|"+s.currentYear+s.currentM+s.currentD;
		}

		/* Paid membership registration */
		if (s.events.indexOf("event12") > -1) {
			if (s.prop35 == "2") sc_addEvents("event23");
			else if(s.prop35 == "3") sc_addEvents("event41");
			if (sc_c40_ev) sc_c40_ev
			s.c_w('sc_c40_ev', "event12");
			s.prop56="1|"+s.currentYear+s.currentM+s.currentD;

			if(s.c_r('sc_c50')){
			  s.prop50=s.c_r('sc_c50');
			  s.c_w('sc_c50','',-1)
			}
		}
	}

	/* Acquisition of the page title */
	if (s.prop9) {
		if (s.prop9.indexOf(unescape("\u671d\u65e5\u65b0\u805e\u30c7\u30b8\u30bf\u30eb\uff1a")) > -1) {
			s.prop9 = s.prop9.replace(unescape("\u671d\u65e5\u65b0\u805e\u30c7\u30b8\u30bf\u30eb\uff1a"), '');
		} else if (s.prop9.indexOf(unescape("\uff1a\u671d\u65e5\u65b0\u805e\u30c7\u30b8\u30bf\u30eb")) > -1) {
			s.prop9 = s.prop9.replace(unescape("\uff1a\u671d\u65e5\u65b0\u805e\u30c7\u30b8\u30bf\u30eb"), '');
		} else if (s.prop9.indexOf("Asahi Shimbun Digital[and]") > -1) {
			s.prop9 = s.prop9.replace("Asahi Shimbun Digital[and]", '');
		} else if (s.prop9.indexOf(unescape(" - \u671d\u65e5\u65b0\u805e\u793e")) > -1) {
			s.prop9 = s.prop9.replace(unescape(" - \u671d\u65e5\u65b0\u805e\u793e"), '');
		} else if ((/.*www\.asahi\.com\/relife\/.+/).test(s.prop1)){
			s.prop9 = s.prop9.replace(/^(.+)[：|:](.+)/,'$1');
		}
		s.eVar9 = sc_evar_bytes(s.prop9);
		s.prop9 = sc_prop_bytes(s.prop9);
	}

	/* keywords of articles */
	if(s.prop53){
		if(s.prop53.length > 33){
			sc_tmpkwl = s.prop53.substring(0, 33);
			if(s.prop53.charAt(33) == ","){
				s.prop53 = sc_tmpkwl;
			}else{
				sc_lkidx=sc_tmpkwl.lastIndexOf(",");
				s.prop53 = sc_tmpkwl.substring(0,sc_lkidx);
			}
		}
	}

	/* Processing to decode */
	try{
		s.pageName=decodeURI(s.pageName);
		s.prop1=decodeURI(s.prop1);
		s.prop6=decodeURI(s.prop6);
		s.prop7=decodeURI(s.prop7);
		s.prop8=decodeURI(s.prop8);
		s.prop14=decodeURI(s.prop14);
		s.eVar7=s.prop1;//20161018
	}catch(e){}

	var sc_prevPageName = s.getPreviousValue(s.pageName, "sc_ppv_pagename");
	var sc_prev78 = s.getPreviousValue(s.pageName, "sc_ppv_v78");


	/* Processing that limits the number of characters */
	if(s.prop1.length>100) s.prop1=s.prop1.substring(0,100);

	/* exit links & imp.asahi.com */
	var exturl = s.linkType == "e" && s.linkURL ? s.linkURL : '';	
	var impurl = url = s.linkURL ? s.linkURL.match(/imp\.asahi\.com/) : '';
	var outurl = url = s.linkURL ? s.linkURL.match(/traffic\.outbrain\.com/) : '';

	if(exturl||impurl){
		s.linkTrackVars = "prop16,prop17,eVar16,eVar17,events";
		s.linkTrackEvents = s.events = "event31";
		s.prop16 = s.pageName;
		s.prop17 = s.prop9;
		s.eVar16 = "D=c16";
		s.eVar17 = "D=c17";

		if(sc_trackReadPrevPageExt(s.pageName))
		{
			var prev_page_ext = exturl?exturl:impurl;
			var reg = /https?:\/\/([^/]+)\/.*/;
			var exit_link_host = prev_page_ext.replace(reg,"$1");
			//out of report.
			if(sc_prd_domain_list[exit_link_host])
			{
				s.getPreviousValue("", "sc_ppv_v78");
			}else{
				if(impurl||outurl)
				{
					var implink = s.pageName.replace(/(\[.*\])/,"["+exit_link_host+"]");
					s.getPreviousValue(implink, "sc_ppv_v78");
				}
			}
		}
	}

	/* Masurement of twitter, facebook share button  */
	if(exturl.match(/(twitter|facebook)\.com\/share/)){
		if(s.prop40) s.eVar2=s.prop40;
		s.linkTrackVars+=",eVar2";

		if(exturl.indexOf("twitter")>-1){
			s.events+=",event27";
			s.linkTrackEvents+=",event27";
		}else if(exturl.indexOf("facebook")>-1){
			s.events+=",event25";
			s.linkTrackEvents+=",event25";
		}
	}

	/* SiteCatalyst visitor ID */
	s.prop59=s.eVar59='D=vid';

	s.prop60=s.eVar60='D=User-Agent';
	s.prop71=document.domain.substring(0,document.domain.indexOf('.'));

	/* Acquisition of products ID */
	s.prop61 = s.c_r("sc_pdc");

	/* Acquisition of page scroll rate */
	if (!s.linkURL && sc_prevPageName) {
		s.getPercentPageViewed();
		s.prop75 = s._ppvHighestPercentViewed;
		s.prop74 = sc_prevPageName;
	}

	if(document.URL.indexOf("iref=")>-1) s.prop2='D=c1';

	/* RINGROW_ANA-92 */
	if(!exturl &&	sc_prev78 !="no value" &&	sc_prev78 !="")
	{
		sc_trackReadPrevPage(sc_prev78);
	}

	/* core version */
	s.prop27 = _gtm_adobe_core_version;

try{
	/* realtime block */
	if(!!s.prop63){
		if(s.prop63==="index"){
			sc_addEvents("event102");
			s.prop21 = 'topacs';
		}else if(s.prop63==="fromIndex"){
			sc_addEvents("event101,event103");
		}else if(s.prop63==="E103"){
			sc_addEvents("event103");
		}
		if(!s.s_t_done_flg){
			if(/^(\/index\.html|\/sp\/index\.html).+/.test(s.prop74)){
				if(s.events.indexOf('event101') > -1){
					if(typeof sc_asa_digi_prop62 !="undefined" && sc_asa_digi_prop62 !=""){
						s.prop63 = 'D="e101:"+c35+":"+c31+":'+ sc_asa_digi_prop62 +'"';
					}else{
						s.prop63 = 'D=c35+":"+c31';
					}
				}else{
					if(typeof sc_asa_digi_prop62 !="undefined" && sc_asa_digi_prop62 !=""){
						s.prop63 = 'D=c35+":"+c31+":'+ sc_asa_digi_prop62 +'"';
					}else{
						s.prop63 = 'D=c35+":"+c31';
					}
				}
			}else{
				s.prop63 = 'D=c35+":"+c31';
			}
		}
	}


	if(!!s.events){
		if(s.events.indexOf('event103') > -1 && s.events.indexOf('event104') > -1){
			if(/^(\/index\.html|\/sp\/index\.html)/.test(s.getPageName())){
				s.prop21 = 'D=+"topsess_afttop2_"+c74';
			}else{
				s.prop21 = 'D=+"afttop2_"+c74';
			}
		}else if(s.events.indexOf('event103') > -1){
			if(/^(\/index\.html|\/sp\/index\.html).+/.test(s.prop74)){
				var s_prop21 = s.getPageName() + '[' + location.hostname + ']';
				//有料会員判定に合格したら
				if((typeof asa12_mode != "undefined" && asa12_mode > 1) || s.prop35 == 1 ){
					s.prop21 = 'stay0_afttop1_' + s_prop21;
				}else{
					s.prop21 = 'afttop1_' + s_prop21;
				}
				sc_event105 = true;
			}else{
				if(/^(\/index\.html|\/sp\/index\.html)/.test(s.getPageName())){
					s.prop21 = 'topsess_afttop1';
				}else{
					s.prop21 = 'afttop1';
				}
			}
		}
	}

	if(typeof(sc_asa_digi_prop62) != "undefined"){
		s.prop62 = 'D=c35+"_"+c31+":'+ sc_asa_digi_prop62 +'"';
	}

	if(typeof(s.prop21) !="undefined" && s.prop21.length > 0){
		s.prop21=decodeURI(s.prop21);
	}

}catch(e){}

	/* The process to copy the variable */
	s.hier1 = "D=pageName";
	s.eVar8 = "D=c10";
	s.eVar11 = "D=c11";
	s.eVar31 = "D=c31";
	s.eVar35 = "D=c35";
	s.eVar49 = "D=c49";
	s.eVar55 = "D=c55";
	s.eVar71 = "D=c71";
	if (s.prop4) s.campaign = s.eVar1 = "D=c4";
	if (s.prop5) s.eVar5  = "D=c5";
	if (s.prop18) s.eVar18 = "D=c18";
	if (s.prop19) s.eVar19 = "D=c19";
	if (s.prop22) s.eVar22 = "D=c22";
	if (s.prop24) s.eVar24 = "D=c24";
	if (s.prop29) s.eVar29 = "D=c29";
	if (s.prop30) s.eVar30 = "D=c30";
	if (s.prop32) s.eVar32 = "D=c32";
	if (s.prop33) s.eVar33 = "D=c33";
	if (s.prop34) s.eVar34 = "D=c34";
	if (s.prop36) s.eVar36 = "D=c36";
	if (s.prop39) s.eVar39 = "D=c39";
	if (s.prop45) s.eVar45 = s.prop46 = s.eVar46 = "D=c45";
	if (s.prop47) s.eVar47 = "D=c47";
	if (s.prop48) s.eVar48 = "D=c48";
	if (s.prop51) s.eVar51 = "D=c51";
	if (s.prop52) s.eVar52 = s.list3 = "D=c52";
	if (s.prop53) s.eVar53 = "D=c53";
	if (s.prop56) s.eVar56 = "D=c56";
	if (s.prop58) s.eVar58 = "D=c58";
	if (s.prop61) s.eVar61 = s.list1 = "D=c61";
	if (s.prop62) s.eVar62 = "D=c62";
	if (s.prop63) s.eVar63 = "D=c63";
	if (s.prop66) s.eVar66 = "D=c66";
	if (s.prop67) s.eVar67 = "D=c67";
	if (s.prop68) s.eVar68 = "D=c68";
	if (s.prop69) s.eVar69 = "D=c69";
	if (s.prop70) s.eVar70 = "D=c70";
	if (s.prop72) s.eVar72 = "D=c72";
	if (s.prop73) s.eVar73 = "D=c73";
	if (s.list2) s.prop20 = s.eVar20 = "D=l2";

	s.events=s.events?s.events+",event1":"event1";

/****************************************************************************
* AA to GA
*****************************************************************************/
	try{
		if(!s.s_t_done_flg){
			var _ga_trackingId="UA-6624382-1";
			var is_dev = false;
			if(S_ENV==="dev" ||(window.localStorage && localStorage.getItem("sdsat_stagingLibrary") ==="true"))
			{
				_ga_trackingId="UA-6624382-18"
				is_dev = true;
			}

			if(typeof ga!="undefined" && typeof _satellite!="undefined"){
				ga("remove");
			}

			ga("create",_ga_trackingId,"auto","ga_tracker",{
				alwaysSendReferrer:true,
				allowAnchor:false,
				allowLinker:true,
				cookieDomain:".asahi.com",
				useAmpClientId:true
			})

		  ga('ga_tracker.require', 'linker');

		  ga('ga_tracker.require', 'GTM-M9HKR39');

		  ga('linker:autoLink', ['asahi.com'], false, true);

			ga('ga_tracker.set', {
				 'dimension7': s.prop1,
				 'dimension8': s.prop1,
				 'dimension9': s.prop4,
				 'dimension10': s.prop6,
				 'dimension11': s.prop7,
				 'dimension12': s.prop8,
				 'dimension13': s.prop9,
				 'dimension14': s.prop10,
				 'dimension15': s.prop11,
				 'dimension16': s.prop16,
				 'dimension17': s.prop17,
				 'dimension18': s.list2,
				 'dimension19': s.prop22,
				 'dimension20': s.prop23,
				 'dimension21': s.prop24,
				 'dimension22': s.server,
				 'dimension23': s.prop35,
				 'dimension24': s.prop36,
				 'dimension25': s.prop40,
				 'dimension26': s.prop41,
				 'dimension27': s.prop42,
				 'dimension28': s.prop45,
				 'dimension29': s.prop45,
				 'dimension30': s.prop51,
				 'dimension31': s.prop52,
				 'dimension32': s.prop9,
				 'dimension33': s.prop61,
				 'dimension34': s.prop74,
				 'dimension35': s.prop4,
				 'dimension36': s.prop1,
				 'dimension37': s.prop10,
				 'dimension38': s.prop9,
				 'dimension39': s.prop16,
				 'dimension40': s.prop17,
				 'dimension41': s.list2,
				 'dimension42': s.prop22,
				 'dimension43': s.prop23,
				 'dimension44': s.prop24,
				 'dimension45': s.server,
				 'dimension46': s.prop35,
				 'dimension47': s.prop36,
				 'dimension48': s.prop40,
				 'dimension49': s.prop41,
				 'dimension50': s.prop42,
				 'dimension51': s.prop45,
				 'dimension52': s.prop45,
				 'dimension53': s.prop51,
				 'dimension54': s.prop52,
				 'dimension55': s.prop9,
				 'dimension56': s.prop61,
				 'dimension57': s.eVar77,
				 'dimension58': s.eVar78,
				 'dimension59': s.eVar10,
				 'dimension60': s.prop14,
				 'dimension61': s.prop32,
				 'dimension62': s.prop32,
				 'dimension63': s.prop58,
				 'dimension64': s.prop58,
				 'dimension69': s.prop69,
				 'dimension70': s.prop69,
				 'dimension71': s.prop70,
				 'dimension72': s.prop70,
				 'dimension73': s.prop29,
				 'dimension74': s.prop29,
				 'dimension75': s.prop39,
				 'dimension76': s.prop39,
				 'dimension77': s.prop53,
				 'dimension78': s.prop53,
				 'metric2': s.events.split(",").includes("event12")?1:"",
				 'metric3': s.events.split(",").includes("event13")?1:"",
				 'metric4': s.events.split(",").includes("event22")?1:"",
				 'metric5': s.events.split(",").includes("event23")?1:"",
				 'metric6': s.events.split(",").includes("event24")?1:"",
				 'metric7': s.events.split(",").includes("event32")?1:"",
				 'metric8': s.events.split(",").includes("event39")?1:"",
				 'metric9': s.events.split(",").includes("event51")?1:"",
				 'metric10': s.events.split(",").includes("event55")?1:"",
				 'metric11': s.events.split(",").includes("event61")?1:"",
				 'metric12': s.events.split(",").includes("event62")?1:"",
				 'metric13': s.events.split(",").includes("event63")?1:"",
				 'metric14': s.events.split(",").includes("event64")?1:"",
				 'metric15': s.events.split(",").includes("event65")?1:"",
				 'metric16': s.events.split(",").includes("event66")?1:"",
				 'metric17': s.events.split(",").includes("event69")?1:"",
				 'metric18': s.events.split(",").includes("event70")?1:"",
				 'metric19': s.events.split(",").includes("event79")?1:"",
				 '&uid':s.prop36
			});
			ga("ga_tracker.send","pageview");
		}
	}catch(e){console.log("error:"+e);}


	/* Clear of the plug-in variables */
	s.plugins="";
	s.s_t_done_flg  = true; // 20141224
}

/****************************************************************************
* Acquisition of variables
*****************************************************************************/
// if (typeof(sc_asa_digi_channel) != "undefined" && sc_asa_digi_channel) s.channel = sc_asa_digi_channel;
if (typeof(sc_asa_digi_events) != "undefined" && sc_asa_digi_events) s.events = sc_asa_digi_events;
if (typeof(sc_asa_digi_prop5 ) != "undefined" && sc_asa_digi_prop5 ) s.prop5  = sc_asa_digi_prop5;
if (typeof(sc_asa_digi_prop18) != "undefined" && sc_asa_digi_prop18) s.prop18 = sc_asa_digi_prop18;
if (typeof(sc_asa_digi_prop19) != "undefined" && sc_asa_digi_prop19) s.prop19 = sc_asa_digi_prop19;
if (typeof(sc_asa_digi_prop24) != "undefined" && sc_asa_digi_prop24) s.prop24 = sc_asa_digi_prop24;
if (typeof(sc_asa_digi_prop29) != "undefined" && sc_asa_digi_prop29) s.prop29 = sc_asa_digi_prop29;
if (typeof(sc_asa_digi_prop30) != "undefined" && sc_asa_digi_prop30) s.prop30 = sc_asa_digi_prop30;
if (typeof(sc_asa_digi_prop33) != "undefined" && sc_asa_digi_prop33) s.prop33 = sc_asa_digi_prop33;
if (typeof(sc_asa_digi_prop35) != "undefined" && sc_asa_digi_prop35) s.prop35 = sc_asa_digi_prop35;
if (typeof(sc_asa_digi_prop39) != "undefined" && sc_asa_digi_prop39) s.prop39 = sc_asa_digi_prop39;
if (typeof(sc_asa_digi_prop40) != "undefined" && sc_asa_digi_prop40) s.prop40 = sc_asa_digi_prop40;
if (typeof(sc_asa_digi_prop41) != "undefined" && sc_asa_digi_prop41) s.prop41 = sc_asa_digi_prop41;
if (typeof(sc_asa_digi_prop42) != "undefined" && sc_asa_digi_prop42) s.prop42 = sc_asa_digi_prop42;
if (typeof(sc_asa_digi_prop48) != "undefined" && sc_asa_digi_prop48) s.prop48 = sc_asa_digi_prop48;
if (typeof(sc_asa_digi_prop51) != "undefined" && sc_asa_digi_prop51) s.prop51 = sc_asa_digi_prop51;
if (typeof(sc_asa_digi_prop52) != "undefined" && sc_asa_digi_prop52) s.prop52 = sc_asa_digi_prop52;
if (typeof(sc_asa_digi_prop53) != "undefined" && sc_asa_digi_prop53) s.prop53 = sc_asa_digi_prop53;
if (typeof(sc_asa_digi_prop55) != "undefined" && sc_asa_digi_prop55) s.prop55 = sc_asa_digi_prop55;
if (typeof(sc_asa_digi_prop62) != "undefined" && sc_asa_digi_prop62) s.prop62 = sc_asa_digi_prop62;
if (typeof(sc_asa_digi_prop63) != "undefined" && sc_asa_digi_prop63) s.prop63 = sc_asa_digi_prop63;
if (typeof(sc_asa_digi_prop66) != "undefined" && sc_asa_digi_prop66) s.prop66 = sc_asa_digi_prop66;
if (typeof(sc_asa_digi_prop67) != "undefined" && sc_asa_digi_prop67) s.prop67 = sc_asa_digi_prop67;
if (typeof(sc_asa_digi_prop69) != "undefined" && sc_asa_digi_prop69) s.prop69 = sc_asa_digi_prop69;
if (typeof(sc_asa_digi_prop70) != "undefined" && sc_asa_digi_prop70) s.prop70 = sc_asa_digi_prop70;
if (typeof(sc_asa_digi_prop72) != "undefined" && sc_asa_digi_prop72) s.prop72 = sc_asa_digi_prop72;
if (typeof(sc_asa_digi_prop73) != "undefined" && sc_asa_digi_prop73) s.prop73 = sc_asa_digi_prop73;
if (typeof(sc_asa_digi_eVar10) != "undefined" && sc_asa_digi_eVar10) s.eVar10 = sc_asa_digi_eVar10;
if (typeof(sc_asa_digi_eVar14) != "undefined" && sc_asa_digi_eVar14) s.eVar14 = sc_asa_digi_eVar14;
if (typeof(sc_asa_digi_eVar77) != "undefined" && sc_asa_digi_eVar77) s.eVar77 = sc_asa_digi_eVar77;
if (typeof(sc_asa_digi_products) != "undefined" && sc_asa_digi_products) s.products = sc_asa_digi_products;
if (typeof(sc_asa_digi_purchaseID) != "undefined" && sc_asa_digi_purchaseID) s.purchaseID = sc_asa_digi_purchaseID;
if (typeof(sc_asa_digi_pageType) != "undefined" && sc_asa_digi_pageType) s.pageType = sc_asa_digi_pageType;
if (typeof(sc_asa_digi_list2) != "undefined" && sc_asa_digi_list2) s.list2 = sc_asa_digi_list2;
if (typeof(sc_asa_digi_prop04) != "undefined" && sc_asa_digi_prop04){
	s.prop4 = sc_asa_digi_prop04;
}
if (typeof(sc_asa_digi_prop45) != "undefined" && sc_asa_digi_prop45){
	s.prop45 = sc_asa_digi_prop45;
}
/********************************************************************
 * 33.asahi.com variables
 *******************************************************************/
if (typeof(sc_asa_33_event) != "undefined" && sc_asa_33_event){
	s.events = sc_asa_33_event;
}

if (typeof(sc_asa_33_prop68) != "undefined" && sc_asa_33_prop68){
	s.prop68 = sc_asa_33_prop68;
}
/********************************************************************
 * realizer variables
 *******************************************************************/

if (typeof(sc_asa_digi_events) !="undefined" && sc_asa_digi_events.indexOf("event104") > -1){
	s.c_w('digital_session_e104', '', -1);
}

s.doPlugins=s_doPlugins

/************************** PLUGINS SECTION *************************/

/********************************************************************
 * Main Plug-in code
 *******************************************************************/

/*
 * Utility: AppMeasurement Compatibility v1.1
 * Define deprecated H-code s properties and methods used by legacy plugins
 */
s.wd=window;
s.fl=new Function("x","l",""
+"return x?(''+x).substring(0,l):x");
s.pt=new Function("x","d","f","a",""
+"var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l"
+"]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs"
+"tring(z,x[l]);t=z<x[l]?t:''}return''");
s.rep=new Function("x","o","n",""
+"var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for("
+"i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){"
+"j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i"
+">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi"
+"n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x");
s.ape=new Function("x",""
+"var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y"
+"='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp"
+"onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf("
+"n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}"
+"else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub"
+"string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e="
+"h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='"
+"+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2"
+"B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)"
+"{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst"
+"ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst"
+"ring(i);i=x.indexOf('%',i)}}}return x");
s.epa=new Function("x",""
+"var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu"
+"nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape"
+"(x)}return y');return tcf(x)}else return unescape(x)}return y");
s.parseUri=new Function("u",""
+"if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')"
+"==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr"
+"eateElement('a'),l=['href','protocol','host','hostname','port','pat"
+"hname','search','hash'],p,r={href:u,toString:function(){return this"
+".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p"
+"]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam"
+"e='/'+p;return r");
s.gtfs=new Function(""
+"var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot"
+"ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?"
+"d.referrer:d.location;return{location:s.parseUri(u)}");

/* track Google +1 button */
var trackPlusone = function(obj) {
	if (obj.state == "on") {
		if (s.prop40) s.eVar2 = s.prop40;
		s.linkTrackVars = "eVar2,events";
		s.events = s.linkTrackEvents = "event26";
		s.tl(true, "o", "[g+]" + s.pageName);
		s.linkTrackVars = s.linkTrackEvents = s.events = "";
	}
};

/* track Mixi button */
sc_clickMixi = function(){
    if (s.prop40) s.eVar2 = s.prop40;
	s.linkTrackVars = "eVar2,events";
	s.events = s.linkTrackEvents = "event28";
	s.tl(true, "o", "[mixi]" + s.pageName);
	s.linkTrackVars = s.linkTrackEvents = s.events = "";
};

/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/* Plugin: getPageName v2.2s */
s.getPageName=new Function(""
+"var s=this,"
+"cs=(s.pathConcatDelim)?s.pathConcatDelim:'/',"
+"l=location,"
+"q=l.search.substring(1),"
+"p=l.pathname.substring(1),"
+"p=p.split('/');"
+"pn='';"
+"var i=0,j=0;"
+"for(j=0;j<p.length;j++){"
+"	if(p[j].length>0){"
+"		pn+=cs;"
+"		if(s.pathExcludeList){"
+"			if((',' + s.pathExcludeList + ',').indexOf(',' + p[j] + ',')<0) pn+=p[j];"
+"		}else{"
+"			pn+=p[j];"
+"		}"
+"	}else{"
+"		pn+=cs;"
+"		if(s.defaultPage.length>0){"
+"			pn+=s.defaultPage"
+"		}"
+"	}"
+"}"
+"if(q.length>0){"
+"	if(s.queryVarsList){"
+"		var qpa=new Array(),qv=s.split(s.queryVarsList,','),qp=s.split(q,'&'),tmp,idx;"
+"		for(i=0;i<qp.length;i++){"
+"			tmp=s.split(qp[i],'=');"
+"			qpa[i]=tmp[0]"
+"		}"
+"		for(i=0;i<qv.length;i++){"
+"			idx=s.sbt_ia(qpa,qv[i]);"
+"			if(idx>=0){"
+"				pn+=cs;pn+=qp[idx];"
+"			}"
+"		}"
+"	}"
+"}"
+"if(pn.length==0) pn=cs;"
+"return pn;");

/* Plugin: getFolderName v1.0s */
s.getFolderName=new Function("n","a",""
+"var p=s.wd.location.pathname,pa=p.split('/');"
+"if(a=='1' && pa[pa.length-1].indexOf('.')>-1) pa[pa.length-1]='';"
+"if(pa[0]==''){"
+" for(var i=0;i<pa.length;i++){"
+"  pa[i]=i!=pa.length?pa[i+1]:null;"
+" }"
+"}"
+"return pa[parseInt(n)-1]?pa[parseInt(n)-1]:'';");

/*
 * Plugin: getNewRepeat 1.1 - Return whether user is new or repeat
 */
s.getNewRepeat=new Function("d",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();"
+"e.setTime(ct+d*24*60*60*1000);"
+"cval=s.c_r('s_nr');"
+"if(cval.length==0){"
+" s.c_w('s_nr',ct+'-New',e);"
+" return 'New';"
+"}"
+"sval=cval.split('-');"
+"if(ct-sval[0]<30*60*1000&&sval[1]=='New'){"
+" s.c_w('s_nr',ct+'-New',e);"
+" return 'New';"
+"}else {"
+" s.c_w('s_nr',ct+'-Repeat',e);"
+" return 'Repeat';"
+"}");

/*
 * Plugin: getTimeParting 2.0 - Set timeparting values based on time zone
 */
s.getTimeParting=new Function("t","z",""
+"var s=this,cy;dc=new Date('1/1/2000');"
+"if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}"
+"else{;z=parseFloat(z);var dsts=new Date(s.dstStart);"
+"var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)"
+"{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);"
+"tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();"
+"var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"
+"'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;"
+"thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();"
+"var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';"
+"if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};"
+"if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};"
+"var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}"
+"var timecustom=thish+':'+mint+ap+'-'+dow;if(t=='p'){return timecustom}"
+"if(t=='d'){return dow};if(t=='w'){return dt}}};"
);

/*
 * Plugin: trackFirstPartyCookie v1.1
 */
s.trackFirstPartyCookie=new Function("c","e","l",""
+"var s=this,vid='';{if(s.c_r(c)){return s.c_r(c);}else{a=new D"
+"ate;e=e?e:0;a.setTime(a.getTime()+e*86400000);vid=s.getRandomStr(l);"
+"s.c_w(c,vid,a);return vid;}}");

s.getRandomStr=new Function("l",window.RegExp?"for(var o='c5iFO6ybR9wt"
+"YNXWLJuMj4BChvpG3PsdxrIT87gKSfqaQlnzHA0kDEVmZ1oe2U',s='',re=/^([0-9A"
+"-Z]+|[0-9a-z]+|[A-Za-z]+)$/,j,i=0;i<62;i++){s+=o.charAt(j=Math.floor"
+"((62-i)*Math.random()));o=o.substring(0,j)+o.substring(j+1)}do{for(v"
+"ar p='',i=0;i<l;i++)p+=s.charAt(Math.floor(62*Math.random()))}while("
+"re.test(p));return p":'');

/*
 * Plugin: saveFirstPartyCookie v1.1
 */
s.saveFirstPartyCookie=new Function("c","e","vid",""
+"var s=this;{a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);"
+"s.c_w(c,vid,a);}");

/*
 * Plugin: Visit Number By Month 2.0 - Return the user visit number
 */
s.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}"
);

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: Viewd Page Number 1.0 - Return the user viewd page number
 */
s.getPageNum=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),c='s_pnum',str,k,tgt=0,dl;"
+"e.setTime(ct+30*60*1000);"
+"cval=s.c_r(c);"
+"k=document.URL.substring(0,1000);"
+"if(!cval){"
+" if(s.targetDomainList!=''){"
+"  if(!document.referrer) tgt=0;dl=s.split(s.targetDomainList,',');"
+"  for(i=0; i<dl.length;i++){"
+"   if(document.referrer.indexOf(dl[i])>0) tgt=1;"
+"  }"
+" } else {"
+"  tgt=1;"
+" }"
+" s.c_w(c,k+'&s_vn=1'+'&non_tgt='+tgt,e);"
+" if(tgt==0) return -1;"
+" return 1;"
+"} else {"
+" var i=cval.indexOf('&s_vn='),j=cval.indexOf('&non_tgt='),str=cval.substring(i+6,j),p_url=cval.substring(0,i);"
+" tgt=cval.substring(j+9,cval.length);"
+" if(!str)return -2;"
+" if(p_url==k) return 0;"
+" str++;"
+" s.c_w(c,k+'&s_vn='+str+'&non_tgt='+tgt,e);"
+" if(tgt==0) return -1;"
+" return str;"
+"}");

/*
 * ChannelManager 2.4
 */
s.channelManager=new Function("a","b","c","d","e","f","z",""
+"var s=this,A,B,g,l,m,M,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,"
+"X,Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r("
+"e)){v=0}if(!s.c_w(e,1,n)){s.c_w(e,1,0)}if(!s.c_r(e)){v=0}}g=s.refer"
+"rer?s.referrer:document.referrer;g=g.toLowerCase();if(!g){h=1}i=g.i"
+"ndexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);if(z=='1'){k=s.linkI"
+"nternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<"
+"l;m++){B=j.indexOf(k[m])==-1?'':g;if(B){O=B;}}}else{O=false}if(!O&&!h){p=g;U=g.index"
+"Of('//');q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;t=g.substring(q"
+",r);t=t.toLowerCase();u=t;P='Referrers';S=s.seList+'>'+s._extraSear"
+"chEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g"
+"=s.repl(g,'as_q','*')}A=s.split(S,'>');T=A.length;for(i=0;i<T;i++){"
+"D=A[i];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;G<F;"
+"G++){H=j.indexOf(E[G]);if(H>-1){i=s.split(D[1],',');U=i.length;for("
+"k=0;k<U;k++){l=s.getQueryParam(i[k],'',g);re=new RegExp('[$?|$&]'+i[k]+'=','i');if(l"
+"==''&&g.match(re)){l='Keyword Unavailable'}if(l){l=l.toLowerCase();M"
+"=l;if(D[2]){u=D[2];N=D[2]}else{N=t}if(d==1){N=s.repl(N,'#',' - ');g"
+"=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle'"
+");}}}}}}}if(!O||f!='1'){O=s.getQueryParam(a,b);if(O){u=O;if(M){P='P"
+"aid Search'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Sea"
+"rch'}}if(h==1&&!O&&v==1){u=P=t=p='Direct Load'}X=M+u+t;c=c?c:'c_m';"
+"if(c!='0'){X=s.getValOnce(X,c,0);}g=s._channelDomain;if(g&&X){k=s.s"
+"plit(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.spl"
+"it(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i"
+"=j.indexOf(Y);if(i>-1){if(Y=='t.co'){i=t.lastIndexOf(Y);if(i==(t.le"
+"ngth-Y.length)){P=q[0];}}else{P=q[0]}}}}}g=s._channelParameter;if(g&&X){k=s.s"
+"plit(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.spl"
+"it(q[1],',');S=r.length;for(T=0;T<S;T++){U=s.getQueryParam(r[T]);if"
+"(U)P=q[0]}}}g=s._channelPattern;if(g&&X){k=s.split(g,'>');l=k.lengt"
+"h;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.leng"
+"th;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i=O.toLowerCase();H=i."
+"indexOf(Y);if(H==0)P=q[0]}}}if(X)M=M?M:'n/a';p=X&&p?p:'';t=X&&t?t:'"
+"';N=X&&N?N:'';O=X&&O?O:'';u=X&&u?u:'';M=X&&M?M:'';P=X&&P?P:'';s._re"
+"ferrer=p;s._referringDomain=t;s._partner=N;s._campaignID=O;s._campa"
+"ign=u;s._keywords=M;s._channel=P;if(v==1){s._visitStart=true}else{s"
+"._visitStart=false}");

/* Grouped SearchEngine List */
s.seList="bing.com|q|Microsoft Bing>google.,goo"
+"glesyndication.com|q,as_q|Google>yahoo.com,yahoo.co."
+"jp|p,va|Yahoo!>";

s._channelDomain="SNS|facebook.com,linkedin.com,twitter.com,t.co,orkut.com,"
+"friendster.com,livejournal.com,wordpress.com,friendfeed.com,myspace.com,"
+"digg.com,reddit.com,stumbleupon.com,yelp.com,delicious.com,tumblr.com,"
+"disqus.com,intensedebate.com,plurk.com,slideshare.net,backtype.com,netvibes.com,"
+"mister-wong.com,diigo.com,flixster.com,youtube.com,vimeo.com,zooomr.com,"
+"identi.ca,flickr.com,dailymotion.com,photobucket.com,fotolog.com,smugmug.com,"
+"classmates.com,mylife.com,tagged.com,ning.com,bebo.com,hi5.com,yuku.com,"
+"cafemom.com,xanga.com,mixi.jp,ameblo.jp,seesaa.jp,jugem.jp,yaplog.jp,hatena.ne.jp,"
+"cocolog,plaza.rakuten.co.jp,blog,livedoor.biz,spaces.live.com,teacup.com,"
+"mitekaite.com,diarynote.jp,a-thera.com,abgo.jp,kitaguni.tv,ti-da.net,269g.jp"
+">brandSite|onward.co.jp,kumikids.jp,23ku-homme.jp,23ku-sport.jp,23ku-web.jp,"
+"anysis.jp,beige-comma.com,calvinkleininc.com,daks.com,dipdrops.jp,enter-g.jp,"
+"feroux.jp,field-dream.com,icb-brand.com,jilsander.com,jiyuku.net,joseph.jp,"
+"josephabboud.jp,jpress.jp,jpress-l.jp,kumikyoku.jp,kumikyoku-jewelry.jp,"
+"missoni.com,m-missoni.com,openingceremonyjapan.com,paulsmith.co.jp,prideglide.com,"
+"rosebullet-rb.jp,soniarykiel.com,tocca-japan.com"
+">crosset|crosset.onward.co.jp,square.onward.co.jp,p.onward.co.jp";
s._channelParameter="otherAdd|cid";
s._channelPattern="Mail|m>webAdd|9,w>listing|ryh,rgg>ecMail|msm,moc"
+">SEM|jwd,rgg,wjw,rcc,ryh>affiliate|waf>brandMail|msd>blogAdd|beg,bsd"
+">brandBunner|wsd>DSP|wad,wrm,wcr,wdl,wse";
s._uncopyChannel="ecMail,brandMail,brandBunner,brandSite,direct,crosset"

/*
 * Plugin: Visit Start by Each Section 1.0 - Return the determine first page of a visit
 */
s.getVisitStartByEachSection=new Function("sc","c",""
+"var s=this,v=1,t=new Date,ct=new Date,ts,cts;"
+"t.setTime(t.getTime());ts=Math.round(t/1000);ct.setTime(c"
+"t.getTime()-1800000);cts=Math.round(ct/1000);var data=s.c"
+"_r(c);var arr=new Array(50);var hash={};if (data) {arr=da"
+"ta.split(';');for(i=0; i<arr.length; i++) {idt=arr[i].spl"
+"it('*');if(idt.length>1) hash[idt[0]]=idt[1].replace(';',"
+"'');}if(hash[sc]){if(hash[sc]>cts){v=0;}else{v=1;}}hash[s"
+"c]=ts;data='';for(key in hash){data+=key+'*'+hash[key]+';"
+"';}}else{data=sc+'*'+ts+';';}s.c_w(c,data,0);return v;");

/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

/*
 * Plugin: exitLinkHandler 0.5 - identify and report exit links
 */
s.exitLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+"e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+"nkType='e';else h='';s[n]=t;return h;");

/*
 * Plugin: linkHandler 0.5 - identify and report custom links
 */
s.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");

/*
 * Plugin: getPercentPageViewed v3.0
 */
s.getPercentPageViewed=function(pid,ch){var s=this,a=s.c_r("s_ppv");a=-1<a.indexOf(",")?a.split(","):[];a[0]=s.unescape(a[0]); pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=ch?ch:!0;if("undefined"===typeof s.linkType||"o"!==s.linkType)s.ppvID&&s.ppvID===pid||(s.ppvID=pid,s.c_w("s_ppv",""),s.handlePPVevents()),s.p_fo("s_gppvLoad")&&window.addEventListener&&(window.addEventListener("load",s.handlePPVevents,!1),window.addEventListener("click",s.handlePPVevents, !1),window.addEventListener("scroll",s.handlePPVevents,!1),window.addEventListener("resize",s.handlePPVevents,!1)),s._ppvPreviousPage=a[0]?a[0]:"",s._ppvHighestPercentViewed=a[1]?a[1]:"",s._ppvInitialPercentViewed=a[2]?a[2]:"",s._ppvHighestPixelsSeen=a[3]?a[3]:""};

/* Adobe Consulting Plugin: handlePPVevents helper function (for getPercentPageViewed v3.0 Plugin) */
s.handlePPVevents=function(){if(s_c_il){for(var b=0,d=s_c_il.length;b<d;b++)if("undefined"!=typeof s_c_il[b]&&s_c_il[b]._c&&"s_c"==s_c_il[b]._c){var a=s_c_il[b];break}if(a&&a.ppvID){var f=Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight));b=(window.pageYOffset||window.document.documentElement.scrollTop||window.document.body.scrollTop)+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);d=Math.min(Math.round(b/f*100),100);var e="";!a.c_r("s_tp")||a.unescape(a.c_r("s_ppv").split(",")[0]) !==a.ppvID||1==a.ppvChange&&a.c_r("s_tp")&&f!=a.c_r("s_tp")?(a.c_w("s_tp",f),a.c_w("s_ppv","")):e=a.c_r("s_ppv");var c=e&&-1<e.indexOf(",")?e.split(",",4):[];f=0<c.length?c[0]:escape(a.ppvID);var g=1<c.length?parseInt(c[1]):d,h=2<c.length?parseInt(c[2]) :d;c=3<c.length?parseInt(c[3]):b;0<d&&(e=f+","+(d>g?d:g)+","+h+","+(b>c?b:c));a.c_w("s_ppv",e)}}};

/* Adobe Consulting Plugin: p_fo (pageFirstOnly) v2.0 (Requires AppMeasurement) */ s.p_fo=function(on){var s=this;s.__fo||(s.__fo={});if(s.__fo[on])return!1;s.__fo[on]={};return!0}; 

/********************************************************************
 * Supporting functions
 *******************************************************************/

/*
 * Utility Function: p_c
 */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/* Utility Function: split v1.5 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Utility Function: sbt_ia */
s.sbt_ia=new Function("ar","v",""
+"for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Utility Function: p_gh
 */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/********************************************************************
 * Original functions
 *******************************************************************/

/*
 * Functions for calculating the date
 */
function scDateDiff(year1,month1,date1,year2,month2,date2){
		var sc_diff = "";
		var sc_dt1		= new Date(year1, month1-1, date1);
		var sc_dt2		= new Date(year2, month2-1, date2);
		var sc_diff		= (sc_dt1 - sc_dt2)/(24*60*60*1000);
		return sc_diff;
}

/*
 * Function to fill the zero
 */
function scZeroFormat(num,max){
	var tmp=''+num;
	while(tmp.length<max){
	tmp='0'+tmp;
	}
return tmp;
}

/*
 * Function to add an event
 */
function sc_addEvents(eventValue) {
	s.events = s.apl(s.events, eventValue, SC_DLM_CM);
}

/*
 * Function to call when clicked
 */
function sc_setClickInfo(btn) {
	s.getPreviousValue(btn,'sc_clk_btn','');
}

function sc_getDevice() {
	var sc_nv_ua = navigator.userAgent.toLowerCase();
	//issp android|iphone|ipad|ipod|mobile\ssafari|iemobile|opera\smini
	var sc_sp_array = ["android", "iphone","ipad","ipod","mobile safari","iemobile","opera mini"];
	for (var i = 0; i < sc_sp_array.length; i ++) {
		if (sc_nv_ua.indexOf(sc_sp_array[i]) !== -1) {
			return sc_sp_array[i];
		}
	}
	return "pc";
}

/*
 * get hashParameter clid
 */
s.getHashClid = function () {

	var s = this;

	var _hash = location.hash;
	if (!_hash || _hash.length < 2) return "";
	_hash = _hash.substring(1);
	var clidReg = new RegExp("clid\=([^\&]+)");

	if (!_hash.match(clidReg)) return "";

	var clidVal = RegExp.$1;
	if (window.history && window.history.replaceState){
		var rpsUrl = window.location.pathname + window.location.search;
		_hash = _hash.replace(clidReg ,"");
		if (_hash) {
			_hash = _hash.replace(/\&$/ ,"");
			_hash = _hash.replace(/^\&/ ,"");
			rpsUrl += "#" + _hash;
		}
		history.replaceState('',document.title, rpsUrl);
	}
	return clidVal;
};

function sc_trackClickBtn(id,btn){
	s.linkTrackVars="prop13,eVar13,events";
	s.linkTrackEvents="event50";
	s.prop13=id;
	s.eVar13='D=c13';
	s.events="event50";
	s.tl(this,'o','click_button');
	s.prop13=s.eVar13=s.events='';
}

function sc_trackImpArea(id,btn){
	s.linkTrackVars="prop23,eVar23,events";
	s.linkTrackEvents="event51";
	s.prop23=id;
	s.eVar23='D=c23';
	s.events="event51";
	s.tl(this,'o','impression_area');
	s.prop23=s.eVar23=s.events='';
}

/*
	Evar Truncate to the transmission limit byte number
*/
function sc_evar_bytes(str) {
	var txtlen = encodeURIComponent(str).replace(/%../g,"x").length;
	if(txtlen > 255)
	{
		return sc_evar_bytes(str.substring(0, str.length - 1 ));
	}
  return str;
}

/*
	Prop Truncate to the transmission limit byte number
*/
function sc_prop_bytes(str) {
	var txtlen = encodeURIComponent(str).replace(/%../g,"x").length;
	if(txtlen > 100)
	{
		return sc_prop_bytes(str.substring(0, str.length - 1 ));
	}
  return str;
}

/*
	Read the previous page
*/
function sc_trackReadPrevPage(sc_prev78){
	try{

		if(sc_prev78 !="" && sc_prev78 != s.pageName)
		{
			s.eVar78 = sc_prev78;

			if(typeof s.linkTrackVars != "undefined" && s.linkTrackVars !=""){
				if(s.linkTrackVars.indexOf("events")>-1){
					s.linkTrackVars+=",eVar78";
				}else{
					s.linkTrackVars+= ",eVar78,events";
				}
			}else{
				s.linkTrackVars = "eVar78,events";
			}

			var sc_dtm_lastline=s.getPreviousValue('',"_dtm_lastline");
			if(sc_dtm_lastline!="no value" && sc_dtm_lastline!="")
			{
				if(typeof s.events != "undefined" && s.events !=""){
					s.events+=",event79";
				}else{
					s.events = "event79";
				}

				if(typeof s.linkTrackEvents != "undefined" && s.linkTrackEvents !=""){
					s.linkTrackEvents+=",event79";
				}else{
					s.linkTrackEvents="event79";
				}
			}

		}
	}catch(e){}
	return false;
}

/*
	Read the previous page. ExitLink version.
*/
function sc_trackReadPrevPageExt(sc_prevPageName){
	try{

		if(sc_prevPageName !="")
		{
			s.eVar78 = sc_prevPageName;

			if(typeof s.linkTrackVars != "undefined" && s.linkTrackVars !=""){
				if(s.linkTrackVars.indexOf("events")>-1){
					s.linkTrackVars+=",eVar78";
				}else{
					s.linkTrackVars+= ",eVar78,events";
				}
			}else{
				s.linkTrackVars = "eVar78,events";
			}

			var sc_dtm_lastline=s.getPreviousValue('',"_dtm_lastline");
			if(sc_dtm_lastline!="no value" && sc_dtm_lastline!="")
			{
				if(typeof s.events != "undefined" && s.events !=""){
					s.events+=",event79";
				}else{
					s.events = "event79";
				}

				if(typeof s.linkTrackEvents != "undefined" && s.linkTrackEvents !=""){
					s.linkTrackEvents+=",event79";
				}else{
					s.linkTrackEvents="event79";
				}
				return true;
			}
		}
	}catch(e){}
	return false;
}

//ClicMap pause
window.addEventListener('beforeunload', function(){
s.c_w("s_sq","",-1);
});

/*

*/
function sc_trackAfterEvent(){
	try{
		/****************************************************************************
		* E104
		*****************************************************************************/
		if(/^(\/index\.html|\/sp\/index\.html).+/.test(s.prop74) && asa12_mode>1 && /^(\/index\.html|\/sp\/index\.html)/.test(s.getPageName())===false ){
			s_e104_date = new Date();
			s_e104_date.setTime(s_e104_date.getTime()+(30*60*1000));
			s.c_w('digital_session_e104', '1', s_e104_date);
		}
		if(s.events.indexOf("event104") > -1){
			s.c_w('digital_session_e104', '', -1);
		}
	}catch(e){}
}

/*
 * Function host name from url
 */
s.getHostname = function(path) {
 try{
    var result = path.replace(/\\/g, '/').match(/\/\/([^/]*)/);
    if (!result) return '';
    return result[1];
	}catch(e){}
}

/************************** INIT SECTION **************************/
function sc_coreInit(){
/**
 * Google Analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
/**
 * @license
 * Adobe Visitor API for JavaScript version: 3.3.0
 * Copyright 2018 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=function(){"use strict";function e(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!v.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function t(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return!1;return!0}function i(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function n(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return-1}return 0}function r(e,r){if(e===r)return 0;var a=e.toString().split("."),s=r.toString().split(".");return t(a.concat(s))?(i(a,s),n(a,s)):NaN}var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};var s={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},o={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},l={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},d={CUSTOMERIDS:"getCustomerIDs"},c={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},u={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},f={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},g={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},m={GLOBAL:"global"},_={MESSAGES:s,STATE_KEYS_MAP:o,ASYNC_API_MAP:l,SYNC_API_MAP:d,ALL_APIS:c,FIELDGROUP_TO_FIELD:u,FIELDS:f,AUTH_STATE:g,OPT_OUT:m},h=_.STATE_KEYS_MAP,p=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,h.MCMID),r={};return r[h.MCMID]=t,n.setStateAndPublish(r),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(h.MCMID,e),r=i.call(this,h.MCMID,e);return void 0!==n?n:r()}},C=_.MESSAGES,S=_.ASYNC_API_MAP,I=_.SYNC_API_MAP,D=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(C.GETSTATE),""}}function i(i){this[S[i]]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return void 0!==r?r:a()}}function n(t){this[I[t]]=function(){return this.findField(t,e)||{}}}Object.keys(S).forEach(i,this),Object.keys(I).forEach(n,this)},A=_.ASYNC_API_MAP,M=function(){Object.keys(A).forEach(function(e){this[A[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},v=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){t.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},t.isValueEmpty=function(e){return""===e||t.isObjectEmpty(e)},t.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},t.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},t.isObject=function(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)}}),y=(v.isObjectEmpty,v.isValueEmpty,v.getIeVersion,v.encodeAndBuildRequest,v.isObject,e),b=_.MESSAGES,T={0:"prefix",1:"orgID",2:"state"},k=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,i){if(void 0!==e){t[T[i]]=2!==i?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return!0;var r=e!==n.orgID,a=!t||i.origin!==t,s=-1===Object.keys(b).indexOf(n.prefix);return r||a||s},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t)}catch(e){}}},O=_.MESSAGES,E=function(e,t,i,n){function r(e){Object.assign(m,e)}function s(e){Object.assign(m.state,e),m.callbackRegistry.executeAll(m.state)}function o(e){if(!C.isInvalid(e)){h=!1;var t=C.parse(e);m.setStateAndPublish(t.state)}}function l(e){!h&&_&&(h=!0,C.send(n,e))}function d(){r(new p(i._generateID)),m.getMarketingCloudVisitorID(),m.callbackRegistry.executeAll(m.state,!0),a.removeEventListener("message",c)}function c(e){if(!C.isInvalid(e)){var t=C.parse(e);h=!1,a.clearTimeout(m._handshakeTimeout),a.removeEventListener("message",c),r(new D(m)),a.addEventListener("message",o),m.setStateAndPublish(t.state),m.callbackRegistry.hasCallbacks()&&l(O.GETSTATE)}}function u(){_&&postMessage?(a.addEventListener("message",c),l(O.HANDSHAKE),m._handshakeTimeout=setTimeout(d,250)):d()}function f(){a.s_c_in||(a.s_c_il=[],a.s_c_in=0),m._c="Visitor",m._il=a.s_c_il,m._in=a.s_c_in,m._il[m._in]=m,a.s_c_in++}function g(){function e(e){0!==e.indexOf("_")&&"function"==typeof i[e]&&(m[e]=function(){})}Object.keys(i).forEach(e),m.getSupplementalDataID=i.getSupplementalDataID}var m=this,_=t.whitelistParentDomain;m.state={},m.version=i.version,m.marketingCloudOrgID=e,m.cookieDomain=i.cookieDomain||"",m._instanceType="child";var h=!1,C=new k(e,_);m.callbackRegistry=y(),m.init=function(){f(),g(),r(new M(m)),u()},m.findField=function(e,t){if(m.state[e])return t(m.state[e]),m.state[e]},m.messageParent=l,m.setStateAndPublish=s},L=_.MESSAGES,P=_.ALL_APIS,R=_.ASYNC_API_MAP,F=_.FIELDGROUP_TO_FIELD,w=function(e,t){function i(){var t={};return Object.keys(P).forEach(function(i){var n=P[i],r=e[n]();v.isValueEmpty(r)||(t[i]=r)}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=F[i];t.push(n)}}),t.length?t:null}function r(t){return function i(r){var a=n();if(a){var s=R[a[0]];e[s](i,!0)}else t()}}function a(e,n){var r=i();t.send(e,n,r)}function s(e){l(e),a(e,L.HANDSHAKE)}function o(e){r(function(){a(e,L.PARENTSTATE)})()}function l(i){function n(n){r.call(e,n),t.send(i,L.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=n}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===L.HANDSHAKE?s:o)(e.source)}}},V=function(e,t){function i(e){return function(i){n[e]=i,r++,r===a&&t(n)}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r)}})},N=function(e){var t;if(!e&&a.location&&(e=a.location.hostname),t=e)if(/^[0-9.]+$/.test(t))t="";else{var i=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",n=t.split("."),r=n.length-1,s=r-1;if(r>1&&n[r].length<=2&&(2===n[r-1].length||i.indexOf(","+n[r]+",")<0)&&s--,s>0)for(t="";r>=s;)t=n[r]+(t?".":"")+t,r--}return t},x={compare:r,isLessThan:function(e,t){return r(e,t)<0},areVersionsDifferent:function(e,t){return 0!==r(e,t)},isGreaterThan:function(e,t){return r(e,t)>0},isEqual:function(e,t){return 0===r(e,t)}},j=!!a.postMessage,U={postMessage:function(e,t,i){var n=1;t&&(j?i.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(i.location=t.replace(/#.*$/,"")+"#"+ +new Date+n+++"&"+e))},receiveMessage:function(e,t){var i;try{j&&(e&&(i=function(i){if("string"==typeof t&&i.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(i.origin))return!1;e(i)}),a.addEventListener?a[e?"addEventListener":"removeEventListener"]("message",i):a[e?"attachEvent":"detachEvent"]("onmessage",i))}catch(e){}}},H=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a},B=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new a[this.corsMetadata.corsType]},fireCORS:function(t,i,n){function r(e){var i;try{if((i=JSON.parse(e))!==Object(i))return void s.handleCORSError(t,null,"Response is not JSON")}catch(e){return void s.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var n=t.callback,r=a,o=0;o<n.length;o++)r=r[n[o]];r(i)}catch(e){s.handleCORSError(t,e,"Error forming callback function")}}var s=this;i&&(t.loadErrorHandler=i);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){s.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){s.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,i,n){e.CORSErrors.push({corsData:t,error:i,description:n}),t.loadErrorHandler&&("ontimeout"===n?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},G={POST_MESSAGE_ENABLED:!!a.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/},q=function(e,t){var i=a.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,n="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(i.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(n=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=n+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(i.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:G.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=i.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=n.id,r.name=n.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=n.url,n.newIframeCreated=!0,t(),i.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",n.iframeHasLoaded=!0,n.fireIframeLoadedCallbacks(e),n.requestToProcess()})}this.startedAttachingIframe=!0;var n=this,r=i.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function i(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var n,r=this;if(t===Object(t)&&t.ibs)if(n=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,s,o,l=!1;for(a=0,s=this.jsonForComparison.length;a<s;a++)if(o=this.jsonForComparison[a],n===JSON.stringify(o.ibs||[])){l=!0;break}l?this.jsonDuplicates.push(t):i()}else i();if((this.receivedThirdPartyCookiesNotification||!G.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=G.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,i){var n=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),n=r)):(n=r)&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",n)),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,i,n,r,a,s=encodeURIComponent,o=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(o=!0,n=0;n<i;n++)r=t[n],a=[s("ibs"),s(r.id||""),s(r.tag||""),v.encodeAndBuildRequest(r.url||[],","),s(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));o&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,i,n){var r="syncOnPage"===n,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var s,o,l=e._getField(a),d=!1,c=!1,u=Math.ceil((new Date).getTime()/G.MILLIS_PER_DAY);l?(s=l.split("*"),o=this.pruneSyncData(s,t.id,u),d=o.dataPresent,c=o.dataValid,d&&c||this.fireSync(r,t,i,s,a,u)):(s=[],this.fireSync(r,t,i,s,a,u))},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,d,c,u,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,d=f.length;l<d;l++){c=f[l],u=/^\/\//.test(c);var m=new Image;m.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),d=[];if(l){s=l.split("*");var c,u,f;for(c=0,u=s.length;c<u;c++)f=s[c],f.match("^"+i.id+"-")||d.push(f)}o.setSyncTrackingData(d,i,n,r)}}(this.onPagePixels.length,i,a,s)),m.src=(u?g:"")+c,this.onPagePixels.push(m)}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s)},addMessage:function(t){var i=encodeURIComponent,n=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((G.POST_MESSAGE_ENABLED?"":n)+t)},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"))},sendMessages:function(){var e,t=this,i="",n=encodeURIComponent;this.regionChanged&&(i=n("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?G.POST_MESSAGE_ENABLED?(e=i+n("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){U.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(n){(null==this.url||n.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=n.subdomain||"",this.url=this.getUrl()),n.ibs instanceof Array&&n.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===i.readyState||"loaded"===i.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(n):this.requestToProcess(n),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(n)},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>G.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(i.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},Y={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},disableThirdPartyCalls:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},overwriteCrossDomainMCIDAndAID:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},X={getConfigNames:function(){return Object.keys(Y)},getConfigs:function(){return Y}},W=function(e,t,i){function n(e){var t=e;return function(e){var i=e||c.location.href;try{var n=d._extractParamFromUri(i,t);if(n)return y.parsePipeDelimetedKeyValues(n)}catch(e){}}}function r(e){function t(e,t){e&&e.match(G.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[m],d.setMarketingCloudVisitorID),d._setFieldExpire(I,-1),t(e[C],d.setAnalyticsVisitorID)}function s(e){e=e||{},d._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",d._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},d._supplementalDataIDLast=e.supplementalDataIDLast||"",d._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function o(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e,i){var n=i[0],r=i[1];return null!=r&&r!==D&&(e=t(n,r,e)),e}var n=e.reduce(i,"");return function(e){var t=y.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(n)}function l(e){var t=e.minutesToLive,i="";return(d.idSyncDisableSyncs||d.disableIdSyncs)&&(i=i||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(i=i||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(i=i||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(i=i||"Error: config.minutesToLive needs to be a positive number")),{error:i,ttl:t}}if(!i||i.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var d=this;d.version="3.3.0";var c=a,u=c.Visitor;u.version=d.version,u.AuthState=_.AUTH_STATE,u.OptOut=_.OPT_OUT,c.s_c_in||(c.s_c_il=[],c.s_c_in=0),d._c="Visitor",d._il=c.s_c_il,d._in=c.s_c_in,d._il[d._in]=d,c.s_c_in++,d._instanceType="regular",d._log={requests:[]},d.marketingCloudOrgID=e,d.cookieName="AMCV_"+e,d.sessionCookieName="AMCVS_"+e,d.cookieDomain=N(),d.cookieDomain===c.location.hostname&&(d.cookieDomain=""),d.loadSSL=c.location.protocol.toLowerCase().indexOf("https")>=0,d.loadTimeout=3e4,d.CORSErrors=[],d.marketingCloudServer=d.audienceManagerServer="dpm.demdex.net",d.sdidParamExpiry=30;var f=c.document,g=null,m="MCMID",h="MCIDTS",p="A",C="MCAID",S="AAM",I="MCAAMB",D="NONE",A=function(e){return!Object.prototype[e]},M=B(d);d.FIELDS=_.FIELDS,d.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+f.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1);return i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n))},d.cookieWrite=function(e,t,i){var n,r=d.cookieLifetime,a="";if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r||0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var s=i.getYear();i.setYear(s+2+(s<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(d.configs&&d.configs.secureCookie&&"https:"===location.protocol&&(a="Secure"),f.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(d.cookieDomain?" domain="+d.cookieDomain+";":"")+a,d.cookieRead(e)===t):0},d.resetState=function(e){e?d._mergeServerState(e):s()},d._isAllowedDone=!1,d._isAllowedFlag=!1,d.isAllowed=function(){return d._isAllowedDone||(d._isAllowedDone=!0,(d.cookieRead(d.cookieName)||d.cookieWrite(d.cookieName,"T",1))&&(d._isAllowedFlag=!0)),d._isAllowedFlag},d.setMarketingCloudVisitorID=function(e){d._setMarketingCloudFields(e)},d._use1stPartyMarketingCloudServer=!1,d.getMarketingCloudVisitorID=function(e,t){if(d.isAllowed()){d.marketingCloudServer&&d.marketingCloudServer.indexOf(".demdex.net")<0&&(d._use1stPartyMarketingCloudServer=!0);var i=d._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return d._getRemoteField(m,n,e,t,i)}return""},d.getVisitorValues=function(e,t){var i={MCMID:{fn:d.getMarketingCloudVisitorID,args:[!0],context:d},MCOPTOUT:{fn:d.isOptedOut,args:[void 0,!0],context:d},MCAID:{fn:d.getAnalyticsVisitorID,args:[!0],context:d},MCAAMLH:{fn:d.getAudienceManagerLocationHint,args:[!0],context:d},MCAAMB:{fn:d.getAudienceManagerBlob,args:[!0],context:d}},n=t&&t.length?y.pluck(i,t):i;V(n,e)},d._currentCustomerIDs={},d._customerIDsHashChanged=!1,d._newCustomerIDsHash="",d.setCustomerIDs=function(e){function t(){d._customerIDsHashChanged=!1}if(d.isAllowed()&&e){if(!v.isObject(e)||v.isObjectEmpty(e))return!1;d._readVisitor();var i,n;for(i in e)if(A(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),d._currentCustomerIDs[i]=r}else d._currentCustomerIDs[i]={id:n};var a=d.getCustomerIDs(),s=d._getField("MCCIDH"),o="";s||(s=0);for(i in a)A(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));d._newCustomerIDsHash=String(d._hash(o)),d._newCustomerIDsHash!==s&&(d._customerIDsHashChanged=!0,d._mapCustomerIDs(t))}},d.getCustomerIDs=function(){d._readVisitor();var e,t,i={};for(e in d._currentCustomerIDs)A(e)&&(t=d._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=u.AuthState.UNKNOWN);return i},d.setAnalyticsVisitorID=function(e){d._setAnalyticsFields(e)},d.getAnalyticsVisitorID=function(e,t,i){if(!y.isTrackingServerPopulated()&&!i)return d._callCallback(e,[""]),"";if(d.isAllowed()){var n="";if(i||(n=d.getMarketingCloudVisitorID(function(t){d.getAnalyticsVisitorID(e,!0)})),n||i){var r=i?d.marketingCloudServer:d.trackingServer,a="";d.loadSSL&&(i?d.marketingCloudServerSecure&&(r=d.marketingCloudServerSecure):d.trackingServerSecure&&(r=d.trackingServerSecure));var s={};if(r){var o="http"+(d.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+d.version+"&mcorgid="+encodeURIComponent(d.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":""),c=["s_c_il",d._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+d._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=c}return s.url=a,d._getRemoteField(i?m:C,a,e,t,s)}}return""},d.getAudienceManagerLocationHint=function(e,t){if(d.isAllowed()){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0)})){var i=d._getField(C);if(!i&&y.isTrackingServerPopulated()&&(i=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0)})),i||!y.isTrackingServerPopulated()){var n=d._getAudienceManagerURLData(),r=n.url;return d._getRemoteField("MCAAMLH",r,e,t,n)}}}return""},d.getLocationHint=d.getAudienceManagerLocationHint,d.getAudienceManagerBlob=function(e,t){if(d.isAllowed()){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerBlob(e,!0)})){var i=d._getField(C);if(!i&&y.isTrackingServerPopulated()&&(i=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerBlob(e,!0)})),i||!y.isTrackingServerPopulated()){var n=d._getAudienceManagerURLData(),r=n.url;return d._customerIDsHashChanged&&d._setFieldExpire(I,-1),d._getRemoteField(I,r,e,t,n)}}}return""},d._supplementalDataIDCurrent="",d._supplementalDataIDCurrentConsumed={},d._supplementalDataIDLast="",d._supplementalDataIDLastConsumed={},d.getSupplementalDataID=function(e,t){d._supplementalDataIDCurrent||t||(d._supplementalDataIDCurrent=d._generateID(1));var i=d._supplementalDataIDCurrent;return d._supplementalDataIDLast&&!d._supplementalDataIDLastConsumed[e]?(i=d._supplementalDataIDLast,d._supplementalDataIDLastConsumed[e]=!0):i&&(d._supplementalDataIDCurrentConsumed[e]&&(d._supplementalDataIDLast=d._supplementalDataIDCurrent,d._supplementalDataIDLastConsumed=d._supplementalDataIDCurrentConsumed,d._supplementalDataIDCurrent=i=t?"":d._generateID(1),d._supplementalDataIDCurrentConsumed={}),i&&(d._supplementalDataIDCurrentConsumed[e]=!0)),i},d.getOptOut=function(e,t){if(d.isAllowed()){var i=d._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return d._getRemoteField("MCOPTOUT",n,e,t,i)}return""},d.isOptedOut=function(e,t,i){if(d.isAllowed()){t||(t=u.OptOut.GLOBAL);var n=d.getOptOut(function(i){var n=i===u.OptOut.GLOBAL||i.indexOf(t)>=0;d._callCallback(e,[n])},i);return n?n===u.OptOut.GLOBAL||n.indexOf(t)>=0:null}return!1},d._fields=null,d._fieldsExpired=null,d._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},d._generateID=H,d._generateLocalMID=function(){var e=d._generateID(0);return T.isClientSideMarketingCloudVisitorID=!0,e},d._callbackList=null,d._callCallback=function(e,t){try{"function"==typeof e?e.apply(c,t):e[1].apply(e[0],t)}catch(e){}},d._registerCallback=function(e,t){t&&(null==d._callbackList&&(d._callbackList={}),void 0==d._callbackList[e]&&(d._callbackList[e]=[]),d._callbackList[e].push(t))},d._callAllCallbacks=function(e,t){if(null!=d._callbackList){var i=d._callbackList[e];if(i)for(;i.length>0;)d._callCallback(i.shift(),t)}},d._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=y.parseHash(e),s=y.hashlessUrl(e);if(-1===s.indexOf("?"))return s+"?"+r+a;var o=s.split("?"),l=o[0]+"?",d=o[1];return l+y.addQueryParamAtLocation(d,r,n)+a},d._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},d._parseAdobeMcFromUrl=n(G.ADOBE_MC),d._parseAdobeMcSdidFromUrl=n(G.ADOBE_MC_SDID),d._attemptToPopulateSdidFromUrl=function(t){var i=d._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=y.getTimestampInSeconds()-i.TS),i&&i.SDID&&i.MCORGID===e&&n<d.sdidParamExpiry&&(d._supplementalDataIDCurrent=i.SDID,d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},d._attemptToPopulateIdsFromUrl=function(){var t=d._parseAdobeMcFromUrl();if(t&&t.TS){var i=y.getTimestampInSeconds(),n=i-t.TS;if(Math.floor(n/60)>G.ADOBE_MC_TTL_IN_MIN||t.MCORGID!==e)return;r(t)}},d._mergeServerState=function(e){if(e)try{if(e=function(e){return y.isObject(e)?e:JSON.parse(e)}(e),e[d.marketingCloudOrgID]){var t=e[d.marketingCloudOrgID];!function(e){y.isObject(e)&&d.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},d._timeout=null,d._loadData=function(e,t,i,n){t=d._addQuerystringParam(t,"d_fieldgroup",e,1),n.url=d._addQuerystringParam(n.url,"d_fieldgroup",e,1),n.corsUrl=d._addQuerystringParam(n.corsUrl,"d_fieldgroup",e,1),T.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===M.corsMetadata.corsType&&M.fireCORS(n,i,e)},d._clearTimeout=function(e){null!=d._timeout&&d._timeout[e]&&(clearTimeout(d._timeout[e]),d._timeout[e]=0)},d._settingsDigest=0,d._getSettingsDigest=function(){if(!d._settingsDigest){var e=d.version;d.audienceManagerServer&&(e+="|"+d.audienceManagerServer),d.audienceManagerServerSecure&&(e+="|"+d.audienceManagerServerSecure),d._settingsDigest=d._hash(e)}return d._settingsDigest},d._readVisitorDone=!1,d._readVisitor=function(){if(!d._readVisitorDone){d._readVisitorDone=!0;var e,t,i,n,r,a,s=d._getSettingsDigest(),o=!1,l=d.cookieRead(d.cookieName),c=new Date;if(null==d._fields&&(d._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&("MCCIDH"===i&&(n=""),r>0&&(r=c.getTime()/1e3-60)),i&&n&&(d._setField(i,n,1),r>0&&(d._fields["expire"+i]=r+(a?"s":""),(c.getTime()>=1e3*r||a&&!d.cookieRead(d.sessionCookieName))&&(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[i]=!0)));!d._getField(C)&&y.isTrackingServerPopulated()&&(l=d.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(G.VALID_VISITOR_ID_REGEX)&&d._setField(C,n)))}},d._appendVersionTo=function(e){var t="vVersion|"+d.version,i=e?d._getCookieVersion(e):null;return i?x.areVersionsDifferent(i,d.version)&&(e=e.replace(G.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},d._writeVisitor=function(){var e,t,i=d._getSettingsDigest()
;for(e in d._fields)A(e)&&d._fields[e]&&"expire"!==e.substring(0,6)&&(t=d._fields[e],i+=(i?"|":"")+e+(d._fields["expire"+e]?"-"+d._fields["expire"+e]:"")+"|"+t);i=d._appendVersionTo(i),d.cookieWrite(d.cookieName,i,1)},d._getField=function(e,t){return null==d._fields||!t&&d._fieldsExpired&&d._fieldsExpired[e]?null:d._fields[e]},d._setField=function(e,t,i){null==d._fields&&(d._fields={}),d._fields[e]=t,i||d._writeVisitor()},d._getFieldList=function(e,t){var i=d._getField(e,t);return i?i.split("*"):null},d._setFieldList=function(e,t,i){d._setField(e,t?t.join("*"):"",i)},d._getFieldMap=function(e,t){var i=d._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},d._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)A(n)&&(r.push(n),r.push(t[n]))}d._setFieldList(e,r,i)},d._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==d._fields&&(d._fields={}),d._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[e]=!0):d._fieldsExpired&&(d._fieldsExpired[e]=!1),i&&(d.cookieRead(d.sessionCookieName)||d.cookieWrite(d.sessionCookieName,"1"))},d._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&"NOTARGET"===(e=e.toUpperCase())&&(e=D),e&&(e===D||e.match(G.VALID_VISITOR_ID_REGEX))||(e="")),e},d._setFields=function(e,t){if(d._clearTimeout(e),null!=d._loading&&(d._loading[e]=!1),T.fieldGroupObj[e]&&T.setState(e,!1),"MC"===e){!0!==T.isClientSideMarketingCloudVisitorID&&(T.isClientSideMarketingCloudVisitorID=!1);var i=d._getField(m);if(!i||d.overwriteCrossDomainMCIDAndAID){if(!(i="object"==typeof t&&t.mid?t.mid:d._findVisitorID(t))){if(d._use1stPartyMarketingCloudServer&&!d.tried1stPartyMarketingCloudServer)return d.tried1stPartyMarketingCloudServer=!0,void d.getAnalyticsVisitorID(null,!1,!0);i=d._generateLocalMID()}d._setField(m,i)}i&&i!==D||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&d._setFields(S,t),d._use1stPartyMarketingCloudServer&&t.mid&&d._setFields(p,{id:t.id})),d._callAllCallbacks(m,[i])}if(e===S&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=b.getRegionAndCheckIfChanged(t,n);d._callAllCallbacks("MCAAMLH",[r]);var a=d._getField(I);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),d._setFieldExpire(I,n),d._setField(I,a)),a||(a=""),d._callAllCallbacks(I,[a]),!t.error_msg&&d._newCustomerIDsHash&&d._setField("MCCIDH",d._newCustomerIDsHash)}if(e===p){var s=d._getField(C);s&&!d.overwriteCrossDomainMCIDAndAID||(s=d._findVisitorID(t),s?s!==D&&d._setFieldExpire(I,-1):s=D,d._setField(C,s)),s&&s!==D||(s=""),d._callAllCallbacks(C,[s])}if(d.idSyncDisableSyncs||d.disableIdSyncs)b.idCallNotProcesssed=!0;else{b.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,b.processIDCallData(o)}if(t===Object(t)){var l,c;d.isAllowed()&&(l=d._getField("MCOPTOUT")),l||(l=D,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),c=parseInt(t.d_ottl,10),isNaN(c)&&(c=7200),d._setFieldExpire("MCOPTOUT",c,!0),d._setField("MCOPTOUT",l)),d._callAllCallbacks("MCOPTOUT",[l])}},d._loading=null,d._getRemoteField=function(e,t,i,n,r){var a,s="",o=y.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(d.isAllowed()){d._readVisitor(),s=d._getField(e,!0===l[e]);if(function(){return(!s||d._fieldsExpired&&d._fieldsExpired[e])&&(!d.disableThirdPartyCalls||o)}()){if(e===m||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===I?a=S:e===C&&(a=p),a)return!t||null!=d._loading&&d._loading[a]||(null==d._loading&&(d._loading={}),d._loading[a]=!0,d._loadData(a,t,function(t){if(!d._getField(e)){t&&T.setState(a,!0);var i="";e===m?i=d._generateLocalMID():a===S&&(i={error_msg:"timeout"}),d._setFields(a,i)}},r)),d._registerCallback(e,i),s||(t||d._setFields(a,{id:D}),"")}else s||(e===m?(d._registerCallback(e,i),s=d._generateLocalMID(),d.setMarketingCloudVisitorID(s)):e===C?(d._registerCallback(e,i),s="",d.setAnalyticsVisitorID(s)):(s="",n=!0))}return e!==m&&e!==C||s!==D||(s="",n=!0),i&&n&&d._callCallback(i,[s]),s},d._setMarketingCloudFields=function(e){d._readVisitor(),d._setFields("MC",e)},d._mapCustomerIDs=function(e){d.getAudienceManagerBlob(e,!0)},d._setAnalyticsFields=function(e){d._readVisitor(),d._setFields(p,e)},d._setAudienceManagerFields=function(e){d._readVisitor(),d._setFields(S,e)},d._getAudienceManagerURLData=function(e){var t=d.audienceManagerServer,i="",n=d._getField(m),r=d._getField(I,!0),a=d._getField(C),s=a&&a!==D?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(d.loadSSL&&d.audienceManagerServerSecure&&(t=d.audienceManagerServerSecure),t){var o,l,c=d.getCustomerIDs();if(c)for(o in c)A(o)&&(l=c[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var u="http"+(d.loadSSL?"s":"")+"://"+t+"/id",f="d_visid_ver="+d.version+"&d_rtbd=json&d_ver=2"+(!n&&d._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(d.marketingCloudOrgID)+"&d_nsid="+(d.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===g?"&d_coop_safe=1":!1===g?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,_=["s_c_il",d._in,e];return i=u+"?"+f+"&d_cb=s_c_il%5B"+d._in+"%5D."+e,{url:i,corsUrl:u+"?"+f,callback:_}}return{url:i}},d.appendVisitorIDsTo=function(e){try{var t=[[m,d._getField(m)],[C,d._getField(C)],["MCORGID",d.marketingCloudOrgID]];return d._addQuerystringParam(e,G.ADOBE_MC,o(t))}catch(t){return e}},d.appendSupplementalDataIDTo=function(e,t){if(!(t=t||d.getSupplementalDataID(y.generateRandomString(),!0)))return e;try{var i=o([["SDID",t],["MCORGID",d.marketingCloudOrgID]]);return d._addQuerystringParam(e,G.ADOBE_MC_SDID,i)}catch(t){return e}};var y={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==C)return!1;var n;return t||(t=d.trackingServer),i||(i=d.trackingServerSecure),!("string"!=typeof(n=d.loadSSL?i:t)||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+(d.cookieDomain?" domain="+d.cookieDomain+";":"")},isTrackingServerPopulated:function(){return!!d.trackingServer||!!d.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};d._helpers=y;var b=q(d,u);d._destinationPublishing=b,d.timeoutMetricsLog=[];var T={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case p:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case S:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};d.isClientSideMarketingCloudVisitorID=function(){return T.isClientSideMarketingCloudVisitorID},d.MCIDCallTimedOut=function(){return T.MCIDCallTimedOut},d.AnalyticsIDCallTimedOut=function(){return T.AnalyticsIDCallTimedOut},d.AAMIDCallTimedOut=function(){return T.AAMIDCallTimedOut},d.idSyncGetOnPageSyncInfo=function(){return d._readVisitor(),d._getField("MCSYNCSOP")},d.idSyncByURL=function(e){var t=l(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=b;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=v.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},d.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,d.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},d.publishDestinations=function(e,t,i){if(i="function"==typeof i?i:function(){},"string"!=typeof e||!e.length)return void i({error:"subdomain is not a populated string."});if(!(t instanceof Array&&t.length))return void i({error:"messages is not a populated array."});var n=b;if(!n.readyToAttachIframePreliminary())return void i({error:"The destination publishing iframe is disabled in the Visitor library."});var r=!1;if(t.forEach(function(e){"string"==typeof e&&e.length&&(n.addMessage(e),r=!0)}),!r)return void i({error:"None of the messages are populated strings."});n.iframe?(i({message:"The destination publishing iframe is already attached and loaded."}),n.requestToProcess()):!d.subdomain&&d._getField(m)?(n.subdomain=e,n.doAttachIframe=!0,n.url=n.getUrl(),n.readyToAttachIframe()?(n.iframeLoadedCallbacks.push(function(e){i({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),n.attachIframe()):i({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):n.iframeLoadedCallbacks.push(function(e){i({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})},d._getCookieVersion=function(e){e=e||d.cookieRead(d.cookieName);var t=G.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},d._resetAmcvCookie=function(e){var t=d._getCookieVersion();t&&!x.isLessThan(t,e)||y.removeCookie(d.cookieName)},d.setAsCoopSafe=function(){g=!0},d.setAsCoopUnsafe=function(){g=!1},d.init=function(){!function(){if(t&&"object"==typeof t){d.configs=Object.create(null);for(var e in t)A(e)&&(d[e]=t[e],d.configs[e]=t[e]);d.idSyncContainerID=d.idSyncContainerID||0,g="boolean"==typeof d.isCoopSafe?d.isCoopSafe:y.parseBoolean(d.isCoopSafe),d.resetBeforeVersion&&d._resetAmcvCookie(d.resetBeforeVersion),d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl(),d._readVisitor();var i=d._getField(h),n=Math.ceil((new Date).getTime()/G.MILLIS_PER_DAY);d.idSyncDisableSyncs||d.disableIdSyncs||!b.canMakeSyncIDCall(i,n)||(d._setFieldExpire(I,-1),d._setField(h,n)),d.getMarketingCloudVisitorID(),d.getAudienceManagerLocationHint(),d.getAudienceManagerBlob(),d._mergeServerState(d.serverState)}else d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl()}(),function(){if(!d.idSyncDisableSyncs&&!d.disableIdSyncs){b.checkDPIframeSrc();var e=function(){var e=b;e.readyToAttachIframe()&&e.attachIframe()};c.addEventListener("load",function(){u.windowLoaded=!0,e()});try{U.receiveMessage(function(e){b.receiveMessage(e.data)},b.iframeHost)}catch(e){}}}(),function(){d.whitelistIframeDomains&&G.POST_MESSAGE_ENABLED&&(d.whitelistIframeDomains=d.whitelistIframeDomains instanceof Array?d.whitelistIframeDomains:[d.whitelistIframeDomains],d.whitelistIframeDomains.forEach(function(t){var i=new k(e,t),n=w(d,i);U.receiveMessage(n,t)}))}()}};return W.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var i=function(){var t=a.s_c_il;if(t)for(var i=0;i<t.length;i++){var n=t[i];if(n&&"Visitor"===n._c&&n.marketingCloudOrgID===e)return n}}();if(i)return i;var n=e,r=n.split("").reverse().join(""),s=new W(e,null,r);t===Object(t)&&t.cookieDomain&&(s.cookieDomain=t.cookieDomain),function(){a.s_c_il.splice(--a.s_c_in,1)}();var o=v.getIeVersion();if("number"==typeof o&&o<10)return s._helpers.replaceMethodsWithFunction(s,function(){});var l=function(){try{return a.self!==a.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(s)&&a.parent?new E(e,t,s,a.parent):new W(e,t,r);return s=null,l.init(),l},function(){function e(){W.windowLoaded=!0}a.addEventListener?a.addEventListener("load",e):a.attachEvent&&a.attachEvent("onload",e),W.codeLoadEnd=(new Date).getTime()}(),W.config=X,a.Visitor=W,W}();
}

/************************** CONFIG SECTION **************************/
/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitor = Visitor.getInstance("D16360625419F1800A4C98A2@AdobeOrg");
s.visitorNamespace="asahishimbun";
s.trackingServer="asahishimbun.sc.omtrdc.net";
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.11.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.11.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.ac;q||(q=null);var p=k,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!=""+s&&p.location&&""+m.location!=""+p.location&&m.location.host==s.host;)p=m,m=p.parent}catch(u){}a.D=function(a){try{console.log(a)}catch(b){}};a.Pa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Ib=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ha&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ha=0<d?c.substring(d):c}return a.Ha};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Ib(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.Fb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.tb(a,function(){}))};a.tb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.M=[];a.fa=function(c,b,d){if(a.Ia)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ga)for(a.ga=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ga=0,a.delayReady())});f=1;e=0}else d||a.o("_d")&&(f=1);f&&(a.M.push({m:c,a:b,t:e}),a.ga||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.o("_d")?b=1:a.za();0<a.M.length;){d=a.M.shift();if(b&&!d.t&&d.t>c){a.M.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ia=1;a[d.m].apply(a,d.a);a.Ia=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.fa("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.Q,(h=a.lightTrackVars)&&(h=","+h+","+a.ka.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Zb,f=a[e].Yb));h&&(h=","+h+","+a.G.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.q=function(c,
b,d,f,e){var g="",h,l,k,n,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.q(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),n=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Pa(n)&&("prop"==k?h="c"+n:"eVar"==k?h="v"+n:"list"==k?h="l"+n:"hier"==k&&(h="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Lb=function(){var c="",b,d,f,e,g,h,l,k,n="",m="",p=e="",r=a.V();if(a.lightProfileID)b=a.Q,(n=a.lightTrackVars)&&(n=","+n+","+a.ka.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Zb,m=a[e].Yb));n&&(n=","+n+","+a.G.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&a.xa()&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.q("cid",e))}a.AudienceManagement&&
a.AudienceManagement.isReady()&&(c+=a.q("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.K("ECID")&&(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.q("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.q("mts",a[e],n,e));g="";break;default:a.Pa(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ja&&(c+="&lrt="+a.ja,a.ja=null);return c};a.C=function(a){var b=a.tagName;if("undefined"!=""+a.ec||"undefined"!=""+a.Ub&&"HTML"!=(""+a.Ub).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.La=function(a){var b=k.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.N=function(c){var b=a.C(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.La(c),e)?{id:e.substring(0,100),type:g}:0};a.bc=function(c){for(var b=a.C(c),d=a.N(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.C(c),d=a.N(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Tb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.la=1;d||(a.la=0,d=a.clickObject);if(d){c=a.C(d);for(b=a.N(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.C(d),b=a.N(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.la=1;!e&&d&&(e=a.La(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(p=g[h])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Oa(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)p=g[h],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Mb=function(){var c=a.la,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Pb()){var b={},d=0,e=a.ob(),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");a.e=a.q("c",h)+
(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),
h--);a.ub(e)}}}return c};a.ob=function(){if(a.useLinkTrackSessionStorage){if(a.Ca())return k.sessionStorage.getItem(a.R)}else return a.cookieRead(a.R)};a.Ca=function(){return k.sessionStorage?!0:!1};a.ub=function(c){a.useLinkTrackSessionStorage?a.Ca()&&k.sessionStorage.setItem(a.R,c):a.cookieWrite(a.R,c)};a.Nb=function(){if(!a.Xb){var c=new Date,b=p.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l=
"1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.cc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=q;a.homepage=m;a.Xb=1}};a.S={};a.loadModule=function(c,b){var d=a.S[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.S[c]=a[c]=d;d.jb=function(){return d.rb};d.vb=function(b){if(d.rb=b)a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.jb,set:d.vb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d))};a.o=function(c){var b,d;for(b in a.S)if(!Object.prototype[b]&&(d=a.S[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Pb=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Qb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);
if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.T=function(c,b){var d,f,e,g,h,k;for(d=0;2>d;d++)for(f=0<d?a.Da:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])h[k]||(h[k]=a[g][k]);a[g]=h}};a.Za=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Da:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.Hb=function(a){var b,d,f,e,g,h=0,k,m="",n="";if(a&&
255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+
e:n+=(n?"&":"")+e;m&&n?k=m+"&"+n:n=""}d=253-(k.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.cb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ba=!1;a.J=!1;a.xb=function(){a.J=!0;a.H()};a.ca=!1;a.U=!1;a.yb=function(c){a.marketingCloudVisitorID=
c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.U=!0;a.H()};a.bb=function(c){a.maxDelay||(a.maxDelay=250);return a.o("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Z=!1;a.I=!1;a.za=function(){a.I=!0;a.H()};a.isReadyToTrack=function(){var c=!0;if(!a.nb()||!a.mb())return!1;a.xa()||(c=!1);a.qb()||(c=!1);return c};a.nb=function(){a.ba||a.J||(a.cb(a.xb)?a.J=!0:a.ba=!0);return a.ba&&!a.J?!1:!0};a.mb=function(){var c=
a.va();if(c)if(a.ta||a.aa)if(a.ta){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.sb,!0),a.aa=!0,!1;return!0};a.K=function(c){var b=a.va();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.va=function(){return k.adobe&&k.adobe.optIn?k.adobe.optIn:null};a.xa=function(){var c=a.V();return c&&a.K("ECID")&&(a.ca||a.marketingCloudVisitorID||!c.getVisitorValues||(a.ca=!0,a.marketingCloudVisitorID?a.U=!0:c.getVisitorValues(a.yb)),a.ca&&!a.U&&!a.marketingCloudVisitorID)?
!1:!0};a.V=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.qb=function(){a.Z||a.I||(a.bb(a.za)?a.I=!0:a.Z=!0);return a.Z&&!a.I?!1:!0};a.aa=!1;a.sb=function(){a.aa=!1;a.ta=!0};a.l=q;a.r=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Cb=c;f.Bb=b;f.zb=d;a.l==q&&(a.l=[]);a.l.push(f);0==a.r&&(a.r=setInterval(a.H,100))};a.H=function(){var c;if(a.isReadyToTrack()&&(a.wb(),a.l!=q))for(;0<a.l.length;)c=a.l.shift(),c.Bb.apply(c.Cb,c.zb)};a.wb=function(){a.r&&(clearInterval(a.r),
a.r=0)};a.lb=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Za(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.Jb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};
a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset()),h=a.V();a.o("_s");a.lb(c)||(b&&a.T(b),c&&(d={},a.Za(d,0),a.T(c)),a.Qb()&&!a.visitorOptedOut&&(a.wa()||(a.fid=a.Jb()),a.Tb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&
(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.$a||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:p.document.referrer),a.$a=1,a.referrer=a.Hb(a.referrer),a.o("_g")),a.Mb()&&!a.abort&&(h&&a.K("TARGET")&&!a.supplementalDataID&&h.getSupplementalDataID&&(a.supplementalDataID=h.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.K("AAM")||(a.contextData["cm.ssf"]=1),
a.Nb(),g+=a.Lb(),a.pb(e,g),a.o("_t"),a.referrer=""))),c&&a.T(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.Ba=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ba.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPreTrackCallback")};a.gb=function(c){a.ua(a.Ba,
c)};a.Aa=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Aa.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPostTrackCallback")};a.fb=function(c){a.ua(a.Aa,c)};a.ua=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.D(g.message)}}};a.tl=a.trackLink=function(c,b,d,
f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.k=c,a.v=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==
b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.pb=function(c,b){var d=a.hb()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.ya()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.gb(d);a.eb(d);a.W()};a.hb=function(){var c=a.ib();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.ya()?"10":"1")+"/JS-"+a.version+(a.Wb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.ya=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};
a.ib=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.kb()+"."+c+".2o7.net");return b};a.kb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Ya=/{(%?)(.*?)(%?)}/;a.$b=RegExp(a.Ya.source,"g");a.Gb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==
d.id.substr(0,3))for(var f=d.c.match(a.$b),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ya),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.Kb());d.c=d.c.replace(g,a.escape(k))}}};a.Kb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.j(4,c.getFullYear())+"-"+a.j(2,c.getMonth()+1)+"-"+a.j(2,c.getDate())+"T"+a.j(2,c.getHours())+":"+a.j(2,c.getMinutes())+":"+a.j(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":
"+")+a.j(2,b.getUTCHours())+":"+a.j(2,b.getUTCMinutes())};a.j=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.pa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Gb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&
"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.pa[d.id]=new Image,a.pa[d.id].alt="",a.pa[d.id].src=d.c)}};a.eb=function(c){a.i||a.Ob();a.i.push(c);a.ia=a.B();a.Wa()};a.Ob=function(){a.i=a.Rb();a.i||(a.i=[])};a.Rb=function(){var c,b;if(a.oa()){try{(b=k.localStorage.getItem(a.ma()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.oa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ma=function(){var c=0;a.i&&(c=a.i.length);a.p&&c++;
return c};a.W=function(){if(a.p&&(a.A&&a.A.complete&&a.A.F&&a.A.ra(),a.p))return;a.Na=q;if(a.na)a.ia>a.P&&a.Ua(a.i),a.qa(500);else{var c=a.Ab();if(0<c)a.qa(c);else if(c=a.Ja())a.p=1,a.Sb(c),a.Vb(c)}};a.qa=function(c){a.Na||(c||(c=0),a.Na=setTimeout(a.W,c))};a.Ab=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.B()-a.Sa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ja=function(){if(0<a.i.length)return a.i.shift()};a.Sb=function(c){if(a.debugTracking){var b=
"AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.D(b)}};a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.X=function(a){return k.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Vb=function(c){var b,d,f;a.wa()&&2047<c.length&&(a.ab()&&(d=1,b=new XMLHttpRequest),b&&(a.AudienceManagement&&
a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ea=!0:b=0));!b&&a.Xa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=2):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.Ta=Date.now();b.Ga=
function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ra=function(){b.Ta&&(a.ja=Date.now()-b.Ta);a.fb(c);b.Ga();a.Eb();a.da();a.p=0;a.W();if(b.Ea){b.Ea=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ka=function(){b.Ga();(a.trackOffline||a.na)&&a.p&&a.i.unshift(a.Db);a.p=0;a.ia>a.P&&a.Ua(a.i);a.da();a.qa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.ra():b.Ka())};a.Sa=a.B();if(1==d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+
1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,2==d){if(a.Qa)try{f.removeChild(a.Qa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Qa=a.A}b.F=setTimeout(function(){b.F&&(b.complete?b.ra():(a.trackOffline&&b.abort&&b.abort(),b.Ka()))},5E3);a.Db=c;a.A=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.L||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ea=setTimeout(a.da,
a.forcedLinkTrackingTimeout)};a.ab=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.Eb=function(){if(a.oa()&&!(a.Ra>a.P))try{k.localStorage.removeItem(a.ma()),a.Ra=a.B()}catch(c){}};a.Ua=function(c){if(a.oa()){a.Wa();try{k.localStorage.setItem(a.ma(),k.JSON.stringify(c)),a.P=a.B()}catch(b){}}};a.Wa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ja()}};a.forceOffline=function(){a.na=
!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.B=function(){return(new Date).getTime()};a.Oa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Wb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.T(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=
a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:
"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+
a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ka="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.Q=a.ka.slice(0);a.Da="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.Q.push("prop"+m)),a.g.push("eVar"+m),a.Q.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.G=a.G.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.R="s_sq";a.Sa=0;a.ia=0;a.P=0;a.Ra=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Xa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Xa=!0}}catch(x){}a.da=function(){a.ea&&(k.clearTimeout(a.ea),a.ea=q);a.k&&a.L&&a.k.dispatchEvent(a.L);a.v&&("function"==typeof a.v?
a.v():a.k&&a.k.href&&(a.d.location=a.k.href));a.k=a.L=a.v=0};a.Va=function(){a.b=a.d.body;a.b?(a.u=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Fa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.u,!1);else{a.b.removeEventListener("click",a.u,!0);a.Fa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.O&&a.O==a.clickObject||!(a.clickObject.tagName||
a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var h=a.O=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.O==h&&(a.O=0)},1E4);f=a.Ma();a.track();if(f<a.Ma()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Oa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.k=c.target,a.L=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.u):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Fa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.u,!0)),a.b.addEventListener("click",a.u,!1))):setTimeout(a.Va,30)};a.Fb();a.fc||(r?a.setAccount(r):a.D("Error, missing Report Suite ID in AppMeasurement initialization"),a.Va(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,k=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(k)for(q=0;!t&&q<k.length;){a=k[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,q,p;if(a)for(k=0;k<a.length;k++)q=a[k],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();
if(s.abort===0){
var s_code=s.t();sc_trackAfterEvent();
}