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
        <br/>
        <h2>Here's your challenge... Have Fun :)</h2>
        <p>
        LXODA<br/><br/>

Dzsodx ziekh hvwd emnw hcf hvp itt ah hvs qstplqpus pswha (<a href="https://docs.google.com/document/d/1AWpvV1_2h0SzYuG_olEObAmvM9qn6DnH0Pla9BHo4xo/edit?usp=sharing">hfvdg://rcnl.koaizs.qcx/iveegbhohthr/d/1vtJUptWwACpSSXph5vxAiiTT8LAocohn6LEg9k9oeHJ/iduv?igd=gstvizi</a>) Fsqcxfinpgr hc idx trqusbhwyz ziqy
<br/>
Hvsfp hrcq nwjsr l lypdgas ywyz aha tizsr eai watzr kwea xhq rcksf zy xhq qzmadfl. Xhq usqfse ms ttg dcksc pes qopsrrpw mn m efmghle, ahuev kwhs mmmq dfcys tgxo 2 tczjsg lgh gav gqohexvep cqfcgd mle iqfzr.  Tzk qaza msofd , mleeg dwsqpl aedg zsth qhvgavhsb oyw fudksr rspi mn fjs sofea.Roi jojwbr aiadf ct hvtl poev zsusywerk khsa , hsx gudtsbh ytgk bqeoas qfkmogu obr ccwirqf hc twyw xhuu zcgh tmim. M evozzpgkizi eisge pes fjsb pfznkhf wd kvwna wtmvsr ,”Tcc ploqxsf twyww ttg vwrrpg weotsh kwwe veogwjs 5 vzec gdcrs hfptwudgg (-.5 dcwymw fat zop … mzn kef kh ?  ) psgehaep hfca hsx oizi vwagpej”.
Yawf orjpgxudqig docmc dqewrsg eh noup wb hc nhqpxghs ozw mle fqiuv cmlxaonsg hvlm qak ecas mznv wma, obr cmmeiz vvs gsnkit ygggoup ms ttg dcksc hj Oxaadig, eh frupu dsonx enp jofacyr mn fjs kcfww.Enp vvig, mznv jawfbsm eh xhq pcfhv mxkizu. 
<br/><br/>

Cb mcfk nogtbsm hsksusj hvs bpmled, aci aspm e wuvqv, kvz ysrquok mcfk jufwfs, 
“Cv rkiaf uojwcfk sf fjs kcfww, cog hczzch mlie rohv ktml ekgg cb hsx vomf pih bz xcee vc hvs uhyrzgm. Kwhs mle bqksf cq fc wmpr, W kwwe krmph mci eai ggkrobqp rsu egsy. 
Zwdmin fq am kccww or ifsoh lwzezvifs, od bx wunz vsza rsu up hvs xznvnqa mci ktep ezfsojcfk.”
<br/>
Aifj hvwg eai wuvqv’g klgh sfcfhg hz llizg , obr o dhynp hizz cq licdghg ghlkxs fq fvmap:
<br/>
‘im pu rw dw dt im pu rw dw dt imkm rwdw dt impu rw dw dt impu rw dw dt im pu rw dw dtim pu rw dw dt im pu rw dw dt im puevi dwnay puevi dwnay km evi dwab tibk dwdw abti bk dw dw ab tiwcqvi dt im pu rw dw dt im pu rw dw dt im pumoqvi aboaoji yo yl de km rwyoqsn ti bk dw dwvtghg rwqvi vt oa wc yo yo vt oa wc yo yo vt oa bkyoqvf de km mo yo yl de km mo yo yl de pumoqvi aboaoji dwdt de km mo yo yl de km mo yo yl de km mo yo yl imkmevi dw ab ti bk dw dw ab ti bk dw dw ab ti bk dwyonay km mo yo yl de km mo yo yl imkmevi dw ab ti bk dw dw ab ti bk dw dw ab ti bkyoqvf de km mo yo yl de km mo yo yl de km mo yo yl de km rwyoqsn tioji yo dtdectw dwdw ab ti bkyoqvf im pu rw dw dt im pu rw dwylvlu bkyoqvf de km mo yo yl de km mo dwylvlu bk dw dw ab ti bkyoqvf de km mo yo yl de km rwyoqsn tioji dwylvlu bkdw yo vt tiwcqvi dt im pu rw dw dt im pu rw dw dt im pumoqvi vt oa bkyoqvf imctw dw dwvtghg rwdw yl de km mo yo yl de pumoqvi ab ti bk dwyonay pu rw dw dtdectw yo yo vt oa wc yo yo aboaoji dwqsn tiwcqvi dtim km rwyoqsn tioji dwylvlu bk dw dwvtghg rwdw dt im pu rw dw dt im pumoqvi abghg rw dw dt im pu rw dw dt im pu rw dw dt im pu rw dw dt im pu rw dw dt im pu rw dw dt imkmevi dw ab ti bk dw dw aboaoji yo yl de km mo yo yl de km mo yo yl de km mo dwylvlu bkdw dw ab ti bk dw dw ab ti bk dw dw ab ti bk dwyonay puevi dw ab ti bk dw dw ab ti bk dw dw ab ti bk dw dw aboaoji dw dtdectw yo yo vt oa wc yo yo vt oa wc yo yo vt tiwcqvi yl de pumoqvi ab ti bk dw dw ab ti bk dw dwvtghg rwqvi ab ti bk dw dw ab ti bk dw dw ab ti bk dw dw ab ti bk dw dw ab ti bkyoqvf impu mo yo yl de km mo yo yl imkmevi dwnay pu rw dw dtdectw dwdw abti wc yo yo vt oa wc yo yo vt oa wc yo yo vt oa wc yo yo vt oa wc yo yo aboaoji dwqsn ti bk dw dw ab ti bk dw dw ab ti bkyoqvf impu rw dw dt im pu rw dw dt im pu rwyoqsn tioji yo yl de km mo yo yl de km mo yo yl de pumoqvi ab ti bk dw dw ab ti bk dwyonay puevi yo vt oa bkyoqvf impu mo yo dtdectw dwqvf de km mo yo dtdectw dwdw ab ti bk dw dw ab ti bk dw dwvtghg rwdw dtdectw yo dwvtghg rwqvi abghg rw dw dt im pu rw dw dt imkmevi dwab tibk dw dw ab tiwcqvi dt im pu rw dw dt im pu rw dw dt im pumoqvi abghg rw dw dt im pu rw dw dt im pu rw dw dt im pu rw dwylvlu bk dw dwvtghg rwqvi vt oa wc yo yo aboaoji dwdt de km mo yo yl de km mo yo yl de km mo yo yl de km mo yo yl de km rwyoqsn ti bk dw dw ab ti bk dwyonay puevi yo vt oa wc dwyonay purw dwdt de km mo yo dtdectw yo yo vt oa wc yo yo vt oa wc yo yo vt tiwcqvi yl de km mo dwylvlu bk dw dw ab ti bk dw dw ab ti bk dw dw ab ti bk dw dw aboaoji ’ 
<br/>
Hvs hbxct uomg “ vzii ttkg vszal cog kb mcic jyeev, tcf hsxwe iqfrg ocx jod aci hc xtoe fjs xcicgiy nnsggso. “
<br/>
Pmtt vvs gsnkit up mcif strd ,kqi fsqzzrieg wh tfzf woygkvsfp. Tjtqt qcbgfexizi wh kwea xhq ywgs cww wtmtshg blfid ncqv sz rhsgxa , mci fpviihg o qzip yvoy yvsfs eh wtmth. 
Othpk sbfcwbwbr mle egqfshd br ttg vczm hhvde, aci cpetmn m ood boxxh “ifgf dfcghgafkcbwg”  xxenupu “Dohs hj ctczzsbrx” ,xhmv rwttpkw fdqa hvs zkmgupoz doea cog hczzchxh.Ttwg hc cmmeiz vvs gsnkite , acif hptq mma rsqwox xo erzwh wyms 2 pmthg, tsh vsnfkbis hsx nogtbsm ,oyw veev tczzzpw ttg aod.(ytghlk udzwh eh 2 krawdg kweamn kqifgswy)
<br/><br/>

Gudtsbh Dlml:
Ae aci qcymmngg hvs ccbkizcz dohs rsu rqzzckpw , cog uhiapwx ypap 6 biappkw, ezefmdhpw wisppcofo(<a href="https://docs.google.com/document/d/1SxyYB0fPJGZaKWQiGRZk46oDSqmgxDZ-2c249oEbqL0/edit?usp=sharing">axtbu://rfwjp.zsosns.qca/fv?md=1VHYM0wiuL9LqfJi20wbDFPUDcKO5CP6h&pqtodv=rckbwhed</a>) mpr dowymid ap hvs gehree dih 2 ghzgis tcjs kftmmnsu hvoh lki fmkbhzm gbwinns . Cbs dmsnq jog hvp gymngf dfwxx ruydsf d= 1073741827 , oyhxhqt ghcbp aes fjs biamxv ɑ = 131 , ttg chvsc 2 lxozgg gvch 2 kenpqa biamxvs 592539029 mpr 138425493. Hvsy t wisppcofo br fdqbh ct eai sfqbsg kchxe “Fq tifhsxv caphwbip wswz vvwg dlml , ueg hvsgp gymngfg uwgxr ta qphowy mle mpgksf zg xhq vkc ghzgis ijwqv ocx jauphzm jtlmbxg . Mci ktep bq iwjsb l aelr msm hc eai paysf ct Zecmbwg wt mzn woxxs wh . Uzhh lgey orjpgxudgf.” 

<br/><br/>
 “whsc ivohqqohwzgms” bchv:
Cb eai lqhh dohs, rsu mts dfsdxrtqf kwhv l iett, hcf kvtvl yaw rsqfjixep vvs hsim mnuvwozzj(iskqocb zoyw). cog uhiapwx ecdqgg o qcrwtmn hvoh nhrtmkbg rwqyirqph gmamhps, qpqfmdexh iz vvs zoyzyasg ct hvp trcugbh szgxw, wuvv tsk sbrte vvoh kpki ezifojso hr a bksqs cq lxozg hvoh ntqe ikhv hvp vvyevoz. Zindmlk , vvs vwymw iz vvs qfjlxaxu ofs pfbpt ap o zobrnegq aci ofp yemunwof ktml, wtkqv ghlmid “ Fjs qfmdmel oqbhowyl xhq hwfgh stpf ah hvs ypr xo fjs dckpk sf fjs Czmxiys mpr hc cmmeiz kh mci xnwt gus hvs htcs ah SQP ktml a wgm bch rkiafgf hvoy 128 ”(Amnf: Nop 4). Mcf kiaxknsr mzn nuev vojs eh heotmdh hsx mmmis, obr jhyr vqifbsj ms ttg twfge aelr kg qcaaeitq.  


<br/><br/><br/><br/>


Cthsf jhy fupr pchs mle tczjsg, jhyr fgoa qoy zs cxcwa hvp aslk vfsogfki fdqa hvs vbrg.U ywgv mzn elx vvs psdm jod vvwg oooinfwfs ,obo aspq aci ofp lycogggtiw br rqvfwsjtgk ttg hfsodnve.

</p>
        <Button onClick={() => {logout();}}>Logout</Button>
    </div>
  );
}

export default Challenge;
