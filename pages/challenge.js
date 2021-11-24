import React, { useEffect, useCallback, useContext } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";
import { Card, Form, Input, Button, Divider, Typography } from "antd";
import { API_BASE_URL } from "../constants/apiConstants";
import axios from "axios";

const { Link } = Typography;

function Challenge() {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);



    useEffect(()=>{
        if(currentUser.loggedIn){

        } else {
            Router.push("/");
        }
    }, [])

    const logout = () => {
        dispatch(allActions.userActions.logOut());
        Router.push("/");
      };

  return (
    <div>
        <h1>Yayyy! you sucessfully cleared the first obstacle. Here you go </h1>
        <p>
        LXODA<br/><br/>

Hvpki ozes ztoid m uidcxqe wkbu has rgnsr eai watzr hbxh fjs dzpir ah hvp hpyyrig. Eai sqefse ms ttg dchxv wmu samxhdqf wb l vvyevoz, hamct ywhs mmmq dfcvx mnfq 2 vowois mpr uzm wcmvhscxh aotcgd mle iqfzo.  Ysr ycbm jxere , vvsdx tiqesg hxve xgth qhvgavhsy trd nwfwpw heqr wb eai emthv.Yha hmxwbr aiadf ct eams xqgh wxkezfofj bxey , vvs nnvrqph ytgk bqeoap vyruqig lgh odfsfpw xo rkbr eams xqgh tmim. M evoweinskbu bnisf yog eain ntcirax ub yvwna wtmvsr ,”Qhv wtqsjpk jizfg hsx lipfsb dxgrqv kwwe veogwjp 5 aslk ifoox xrqcgicxw (-.5 pakbhd ysr xcp … mzn kef kh ?  ) pplxoigr tchq ttg ywyz liyuszq”.
Rsud crjpgxudqig atvtk fsqtwis fq xctg mn fq qcxipefg ozw mle fqius hfsfcqzpl xhmv aoj vsmq acic pey, mpr cmmeiz vvs dxgrqv asdlegq vc hsx toigf cq Hpyyrig, eh frupu dptge mpr vlkqoza wb eai watzr.Lgh ttwg, mznv jawfbpr xo fjs bzkxh nguwyl. 
<br/><br/>

Sn kqif uhyrzgm hsksusj hvp gittgf, mzn qeqv o ktmgh, ijc tzkismy mcfk jufwfs, 
“Za krqch glomogt ct eai watzr, jhy fanzch mlie rohs pmtt gmsd hr ttg fclw fuf pc sjxw ta vvs uhyrzgm. Ktml ttg dchxv or om klgh, I ikzz rkenf aci eai ggkroyvi yaw gspd. 
Pievsb eh qy iqfrd hj gdgoh lwzezvifp, tw if ywzw ailb aci tg xhq lcicgiy kqi ktep ezfsoghyr.”
<br/><br/>
Ikhv eams fjs ktmgh’e yobo lxadvg hz llizg , obo t wogpr tfep or usqcxxs evofel xo djmap:
<br/>
‘im pu rw dt im pu rw dt im pu rwyl impu rw dtim pu rw dt impu rw dt im pu rw dt im purw dt im pu rw dt im pu rw dt im puevi abghg rwqsn tioji yl vlu bkdw abti bkdw abti bk dw ab ti bkyonay pu rw dt im pu rw dt im pu rw dt im pumoqsn tiwcqvf de km mo yl imkmevi ab ti bk dwvtghg rwqsn oa wc yo vt oa wc yo vt oa wc yo vt tiwcqvf de km mo yl de km mo yl de km mo dtdectw dwvtghg rwdt de km mo yl de km mo yl de km mo yl de km mo dtdectw dw ab ti bk dw ab ti bk dw ab ti bk dw ab tiwcqvf de km mo yl de km mo yl de pumoqsn ti bk dw ab ti bk dw ab ti bk dw ab ti bkyonay km mo yl de km mo yl de km mo yl de km mo yl de km rwylvlu bkqvf de pumoqsn tibk dw ab tiwcqvf im pu rw dt im pu rw dt imkmevi aboaoji yl de km mo yl de km mo dtdectw dw ab ti bk dw aboaoji yl de km mo yl de km rwylvlu bkqvf imkmevi abti wc yo aboaoji dt im pu rw dt im pu rw dt im pu rw dtdectw yo vt tiwcqvf imctw dw aboaoji dtim km mo yl de km mo yl imkmevi ab ti bk dwvtghg rw dt im pumoqsn oa wc yo vt oa wc yo aboaoji dtvlu bkyonay purw yl imkmevi abghg rwylvlu bk dw aboaoji dt im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pu rwylvlu bkdw ab ti bkyonay puevi vt oa wc yo vt oa wc yo vt oa wc yo vt oa wc dwvtghg rwdt im pu rw dt im pu rwylvlu bkqvf im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pu rwylvlu bkdw ab ti bk dw ab ti bk dw ab ti bk dw ab tiwcqvf imctw dwvtghg rw dt im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pu rw dtdectw yo vt oa wc yo vt oa wc yo vt oa wc yo vt oa wc yo vt oa wc yo vt oa wc yo vt tiwcqvf de km mo dtdectw dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw aboaoji yl de km mo yl de km mo yl de km mo yl de km mo yl de pumoqsn oa wc yo vt tiwcqvf impu mo yl de km mo yl de km mo yl de km mo yl de km rwylvlu bkqvf im pu rw dtdectw yo vt oa bkyonay pu rw dt im pu rw dt im pu rw dt im pumoqsn tibk yo vt oa wc yo aboaoji dt im pu rw dt im pu rw dt im pu rw dt im pu rw dt imkmevi vt oa wc yo vt oa wc yo vt oa wc yo vt oa bkyonay puevi vt oa wc yo vt oa wc dwvtghg rwdt de km mo yl de km rwylvlu wc yo vt oa wc yo vt oa bkyonay puevi vt oa wc yo vt oa bkyonay purw yl de km mo yl de km mo yl imkmevi ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw aboaoji dt im pu rw dt im pu rw dtdectw dwnay pu rw dt im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pumoqsn tibk yo vt oa wc yo vt oa wc yo vt oa wc yo vt tiwcqvf imctw dw ab ti bk dw aboaoji yl de km mo yl imkmevi vt oa wc yo vt oa wc yo vt oa wc yo vt oa wc yo vt tiwcqvf imctw dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw aboaoji dtim purw dt im pu rw dt im pu rw dt im pu rw dtdectw yo vt oa wc yo vt oa wc yo vt oa wc yo aboaoji yl de km mo dtdectw dw ab ti bk dw ab ti bk dw ab ti bk dw ab ti bk dw ab tiwcqvf imctw yo vt oa wc yo aboaoji dtim km mo dtdectw yo vt tiwcqvf de km mo dtdectw dwnay km mo dtdectw dwab ti bk dw aboaoji yl de km mo yl de km mo yl de km rwylvlu wc yo vt oa wc yo vt tiwcqvf im pu rw dt im pu rw dt im pu rw dt im pu rw dt im pumoqsn oa wc yo vt oa wc yo vt oa bkyonay pu rw dt im pu rwylvlu wc yo vt oa wc yo vt tiwcqvf ’ 
<br/>
Mle ikhqs leye “ jcdp mlie jszal cog kb mznv qgggh, qhv ttggs hhvde cfs qhv yaw hc xtoe fjs xznvnqa pzplwep. “
<br/>
Ywhs mle egqfpm mn kqif strd ,kqi fpvsgzkgs tm jrao gcxxahqts. Oqmir oqbgfexizi wh hbxh fjs ktli oxf ghlkite poapw faoj sz rhsgxa , mcf kicqkjs l vpuq hfcx pledg hc dmerf. 
Cthpk sbfcwbtgk ttg gsnkite kb hsx loxa kccww, yaw cpetmn m ood ytqep “khsc ivohqqoebsnuu”  aslgmns “Rohs hj ctczzpgke” ,fjoh objfqtg tchq ttg cftzmnmn doea cog hczwhaep.Vvid ms onvowy mle egqfpmw , yawf hptq mma rsnbhe fq gdwbx izvc 2 dlkxs, rgk qzgxizws hsx nogtbsj ,trd dggh qhplayg hsx qab.(mwboec sbnwh eh 2 krawdg hbxhup mcfkwexh)
<br/><br/>

Qickinf Rohs:
Tw yaw qcymmngg hvp hviskbow iett aci qhplaysr , jhy sfwapwx ypap 6 bixuire, gbqcrttqf gwrgfomtr(<a href="https://docs.google.com/document/d/1AWpvV1_2h0SzYuG_olEObAmvM9qn6DnH0Pla9BHo4xo/edit?usp=sharing">vemts://ptwjp.zsosns.qzf/yc?uf=1XTVR0muvU9VeeAy20izRIKBWuIM5QP6h&pqtodv=rchgpomf</a>) obo ieizvsr zg xhq uhcyxw bgv 2 ghzgis tcjs hkmtupug eaet mts tlbrtxa jwdbflq . Qbs dmsnq jog eai ngopsc iviyg bixuir b= 1073741827 , cbceair evcbp aes fjs bfffed ɑ = 131 , vvs zmled 2 uhcyxw stqk 2 flghoy piamxvs 592539029 mpr 138425493. Hsxr a ekubmherp kb tchrt ah hvp lxozgg kchxe “Fq ticmled ecbebruq fcky mlie rohs , nwe fjsgp gymngfg rbzez vc cmmeiz vvs lgwwqt cb eai tiq ghzgis ijwqs tve rcwbeec vuuwpwx . Cog ywzw ui guxsb l aelr msm eh xhq rckpk sf Anmaanw ir aci dhpvq kh . Uzhh lgey oooinfwfsc.” 
<br/><br/>

 “bxed rfcghgafkcbtl” tafj:
Cb eai lqhh dlml, yaw ofp iveegbhpw aifj o dlml, fat kvtvl yaw rsnkcpfgr hsx xejv wbtmmaxnm(dzdimap zoyw). cog uhixupe mefcdl e cdaghle xhmv qcymeizu rwqyirqph gjffoxu, sbnkcpfgr wy mle xcbuftke ah hvp trcugbh pezee, ywhs yiw tkbhd mlaf ysfp xrgdcjso hr a bksqp hj sfqbs eaet ocas hbxh fjs qcrwtmn. Zindmlk , vvs sbrte kb hsx grkuhowl erq diwwm sn m nobrnegq aci lki fmowzttv wuvv, ksbgh evohpw “ Xhq efmdmel oqbhlbrs fjs ttkwt tczt zy xhq msm eh xhq rckpk sf fjs Cwrqpgu obo ms onvowy bx yaw aidm ysq vvs htcs ah SQM pmtt c ysj gst stsoexv ttcb 128 ”(Vtgx: Lmd 4). Mcf kiaxknso rsu vwgh stze fq rsnkcpf vvs tfegq, cbr jhyr vqifyxc ta vvs qbvsf jozq bw caodzpmi.  

<br/><br/><br/>



Arvsf jhy fupr pzml ttg vowois, kqif exem ocb uz vpauo hvp aslk vfsllyrq hfcx mle wkbu.T pmst aci lep ttg psdm jod vvwd thvqphicx ,enp jcdp rsu mts gfvgeeutiw br rqvfwpomns vvs ekiaewfs.



</p>
        <Button onClick={() => {logout();}}>Logout</Button>
    </div>
  );
}

export default Challenge;
