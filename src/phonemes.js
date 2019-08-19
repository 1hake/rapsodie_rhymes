function transform(list) {
	const phoneme = list.split('$');
	const elements = phoneme.map((item) => {
		const a = item.split(':');
		const words = a[1] ? a[1].split(',') : null;
		return words && a[0].replace('*', '');
	});
	return elements;
}

const i =
	'$*e : design, behaviorisme, remake $*ea : leader, jean, freak, cheap, sea-line $*ee : jeep, week-end, kleenex, tee, yankee $*ees : tees, yankees $*eo : people $hi : hiver, inhiber, envahir, envahissant, ébahi, hirondelle, histoire, véhicule $hî : nous ébahîmes, vous trahîtes $hie : hie, ébahie, envahie $hies : hies, ébahies, envahies $his : spahis, ébahis, envahis $hit : il trahit, il envahit $hît : qu’il trahît, qu’il envahît $hy : hydre, déshydrater, hygiène, hypocrite $i : idée, livre, chiite, ami, cri $î : île, gîte, abîme, dîner, abîmer $ï : coït, s’amuïr, aï, inouï, il a haï, héroïque $ict : amict $icts : amicts $id : nid, muid $ids : nids, muids $ïe : ouïe, inouïe $ie : ralliement, vie, maladie, remerciement, briefer, riesling $ient : ils rient, ils pallient $ies : vies, amies, floralies, armoiries $ïes : inouïes $ih : mihrab $*ii : ascii $il : baril, fournil, gentil, outil, fusil $ils : barils, fournils, gentils, outils $ïs : aïs, tu haïs $is : avis, logis, marquis, puis, tu ris, gris, tapis, brebis, avis, souris, paradis, pis, colis, débris, tandis, taillis $ît : ci-gît, qu’il rît $ït : il haït $it : lit, petit, habit, il rit, esprit, bandit, écrit, profit, appétit, récit $its : petits, habits, puits $ix : prix, perdrix, crucifix $iz : riz $*u : business $y : yttrium, onyx, paysan, rugby, vichy, puy $ye : mye, abbaye, barye, rallye $yes : myes, abbayes, baryes, rallyes $yg : amygdale $ys : pays, ferrys, guppys, penaltys';
const er =
	'$*a : lady, bacon$æ : ægosome, althæa, cæcum, curriculum vitæ, ex æquo, novæ, præsidium,$aî : aîné, gaîté, traîner$aie : gaieté$ay : abbaye, relayer, paysan, payer$e : essayer, nécessaire, putrescible$é : école, dé, bébé, dégénéré$ê : gêner, crêper, enrêner, évêché$ë : canoë$*ea : ready-made$ed : pied, il sied$eds : pieds, assieds$*ee : freesia, pedigree$ée : féerie, gréement, épée, allée, apnée$éent : ils créent, ils siéent, ils agréent$ées : épées, brisées, composées$*ees : pedigrees$ef : clef$efs : clefs$eh : keffieh, sakieh$èh : sakièh$ehe : yohimbehe$ehes : yohimbehes$ehs : keffiehs$èhs : sakièhs$ei : neiger, peigner, geisha, caldeira$ept : septmoncel$er : crier, glacier, singulier$ers : rochers, glaciers, volontiers, tuniciers$ës : canoës$és : dés, clés, ursidés, prés$es : lesquels, mesdames, les, ces$et : et$ez : nez, chez, rez-de-chaussée, vous avez, assez, rendez-vous$ha : behaviorisme$hai : souhaiter$he : hennir, henné, hellénique, philhellène$hé : hévéa, adhésif, cohérent, véhément$ier : peignier, groseillier$iers : peigniers$œ : œdème, fœtus, cœliaque, pœcile, œnologue, lœss';
const ai =
	'$*ä : länder$a : rayon, balayeur, essayage, abbaye$ai : air, sanctuaire, cairn, lai, vrai, balai$aî : aînesse, faîte, chaîne, paraître$aid : laid, plaid$aids : laids, plaids$aie : bégaiement, taie, ivraie, aie (imp.)$aient : ils feraient$aies : taies, vraies, braies, mille-raies$ais : ais, mais, frais, balais, tu fais$ait : trait, parfait, il fait$aît : s’il plaît, il connaît$aits : faits, traits$aix : paix, faix, surfaix$ay : saynète, valençay, gay, fair-play$aye : laye, maye$ayes : layes, mayes$ays : valençays$e : erre, espace, mer, guerre, conseil$è : ès, mère, père, koinè$ê : être, frêne, korê$ë : noël, foëne, boësse$*ea : break, steak, sportwear$ect : aspect, respect, suspect$ects : aspects, respects, suspects$ee : carragheen$ef : chef-d’œuvre$efs : chefs-d’œuvre$egs : legs, prélegs$eh : pehlvi, turbeh$èh : sakièh$ei : eider, neige, veine, seigneur$eî : reître$es : chevesne$ès : dès, près, très, cyprès, procès$est : il est$êt : crêt, prêt, benêt, forêt, intérêt, il vêt$et : jet, sommet, alphabet$ets : jets, mets, rets, tricotets, permets$êts : prêts, benêts, intérêts, je vêts$ey : eyra, geyser, bey, dey, jersey, poney$eys : beys, deys, jerseys$ez : recez$hai : haine, souhaitable, bréhaigne, mohair$haie : haie$haies : haies$hais : je hais$hait : souhait, il hait$haits : souhaits$he : herbe, hermine, désherber, géhenne$hè : hère, bohème, j’adhère$hê : hêtre$*hea : boghead$*hee : jonkheer$hei : heiduque, boghei$œ : œstre, œstrogène';
const a =
	'$    a : ami, aller, lave, la$à : à, là, voilà, piétà, déjà$ac : tabac, estomac$ach : almanach$achs : almanachs$acs : estomacs$*ae : maelström, groenendael$ah : dahlia, sahraoui, fellah, coprah$ahs : fellahs, casbahs, poussahs$ao : paonne$ap : drap, sparadrap$aps : draps, sparadraps$as : tubas, tu aimas, bras, embarras, ananas, Nicolas$at : plat, constat, oblat, magnat$ats : plats, oblats, ébats, pare-éclats$e : femme, moelle, décemment, solennel$ê : poêle$ha : habit, ahaner, enhardir, brouhaha$has : brouhahas$he : heimatlos, alzheimer$i : loi, foi, soi, poil, voir$î : boîtier, cloître$id : froid$ids : froids$ie : oie, déploiement, foie, joie, voie$ient : ils croient$ies : voies, foies$ig : doigté, doigtier$igt : doigt$igts : doigts, rince-doigts$is : bois, fois, lois, pois$it : droit, il doit$ît : benoît, croît$its : droits$îts : benoîts$ix : noix, choix$*o : out, round, discount$*u : gin-rummy$y : permalloy$ye : moye$yes : moyes$ys : permalloys';
const otherA =
	'$a : sas, raser$â : âme, âtre, pâte, mâchicoulis, vous aimâtes, gâteau, pâtisserie$*aa : kraal$acs : lacs, entrelacs$ah : ah !, schah, brahmane$ars : gars$as : cas, pas, tas, gras, chas, lilas$ât : bât, mât, appât, dégât$âts : appâts, dégâts, quatre-mâts$ats : gravats$az : raz$ha : haillon, havresac$hâ : hâle, hâter, hâve$ids : poids$is : pois$ix : voix';
const otherO =
	'$*a : negro-spiritual$*al : cake-walk, walkman$au : auspice, austère, saur$*aw : lawrencium$*eo : yeoman$hau : exhaure$ho : horde, hostie, dehors, cohorte$hô : hôpital$o : otarie, col, fort, port$*oa : funboard$*oe : groenendael$*oen : groenendael$oho : alcohol$*oo : looch, boskoop, witloof$*ow : paulownia, township$u : album, médium, summum$ü : capharnaüm';
const o =
	'$    *a : football, baseball, revival$*ach : yacht$*ao : curaçao$*aos : curaçaos$au : aube, saule, chaude, étau$aud : chaud, penaud, taraud, noiraud$auds : chauds, penauds, tarauds$aul : aulne$ault : marsault, meursault$aults : marsaults$aulx : aulx (pluriel d’ail)$aus : landaus$aut : saut, assaut, gerfaut, nilgaut, taïaut !$auts : sauts, assauts$aux : auxquels, chaux, boyaux, bestiaux$*aw : crawl, drawback, outlaw, rickshaw$eau : eau, beauté, peau, seau, fuseau$eaux : eaux, peaux, seaux, quadrijumeaux$ha : hall$hau : hauban, haute, exhausser, blockhaus$haut : hautbois, haut$hauts : hauts$*haw : tomahawk$heau : heaume, heaumier$ho : hosanna, sorgho$hô : hôte, hôtel, khôl$hot : cahot$hots : cahots$o : osé, pose, halo, numéro$ô : ô, ôter, nôtre, apôtre, nô$*oa : coat, goal, toast, ferry-boat$oc : croc, broc, accroc, escroc$ocs : crocs, brocs, accrocs, escrocs$*ods : lods$oh : ohm, oh!$op : trop, sirop, galop$ops : sirops, salops$os : crosne, os, vos, chaos, repos, héros$ot : lot, mot, sot, magot$ôt : tôt, rôt, impôt, prévôt, suppôt$*oth : ostrogoth, wisigoth$*oths : ostrogoths, wisigoths$ôts : impôts, prévôts, suppôts$ots : lots, mots, sots, magots, rotoplots$*ow : brownie, show, bungalow, chow-chow$*ows : shows, slows, bungalows$*u : caudillo';
const ou =
	'$    aou : saoule$aoul : saoul$aouls : saouls$août : août$aoûts : aoûts$*ew : interview$*ewe : j’interviewe, il interviewe$*ewent : ils interviewent$*ewes : tu interviewes$*ews : interviews$*hoo : hooligan$hou : houle, silhouette, hou !$houe : houe$houes : houes$hout : racahout$houts : racahouts$houx : houx$*o : loser$*oo : boom, scoop, football, igloo$ou : pou, clou$où : où$oû : soûle, croûte, coûter, aoûtat$oub : radoub$oubs : radoubs$ouc : caoutchouc$oucs : caoutchoucs$oud : il coud, il moud$ouds : je couds, tu mouds$oue : dénouement, rouerie, ils joueront, joue$ouent : ils jouent, ils vouent$oues : deux-roues, joues, tu joues$oug : joug$ougs : jougs$ouh : bouh$oûl : soûl$ouls : pouls$oûls : soûls$oult : poult-de-soie$oup : coup, loup, beaucoup, cantaloup$oups : coups, loups$ous : nous, fous, remous, tu bous$oût : coût, goût, moût$out : tout, ajout, il bout$outs : ajouts, atouts$oûts : coûts, goûts, moûts$oux : doux, poux, toux, alquifoux$*ow : clown, bowling$*u : alléluia, tsunami, haïku, kuru, sudoku$*û : stûpa, sûtra$*ue : blues, blue-jean$*us : haïkus$*uu : weltanschauung';
const u =
	" $eu : j'ai eu$eû : nous eûmes, vous eûtes$eue : eue$eues : eues$eus : j'eus$eut : il eut$eût : qu'il eût$hu : humain, huche, ahuri, cahute, dahu$hue : hue, cohue$huent : ils huent$hues : tu hues, cohues$hus : dahus$hut : bahut, chahut$huts : bahuts, chahuts$u : urubu, tu, barbu, tribu$û : sûr, flûte, nous fûmes, dû$ud : palud$uds : paluds$uë : aiguë, ciguë, exiguë$ue : dénuement, due, avenue, statue$*ü : würmien, günz$*üh : führer$uent : ils refluent, ils tuent$uës : aiguës, ciguës$ues : dues, drues, statues, porte-revues$*uh : uhlan, kieselguhr$*ui : building$ul : cul, cucul$uls : culs, cuculs$us : jus, abus, plus, diffus, tu fus$ut : but, début, statut, il fut$ût : fût, affût, qu’il accrût$uth : bizuth$uths : bizuths$uts : débuts$ûts : fûts$ux : flux, influx, afflux";
const eu =
	'$eu : euphorie, bleuet, veule, jeu, feu$eû : jeûne$eue : queue, bleue, lieue, banlieue$eues : queues, bleues, lieues, banlieues$euf : neufchâtel$euh : euh, peuhl, chleuh, meuh$euhs : chleuhs$eur : monsieur$eurs : messieurs$eus : émeus, pneus, je meus$eut : il peut, il veut$eux : eux, deux, jeux, queux, tu peux$heu : heureux, heuristique, malheureux$*ö : angström, rösti, röntgen, maelström$*oeh : foehn$œu : vœu$œud : nœud$œuds : nœuds$œufs : œufs, bœufs$œux : vœux$on : monsieur';
const oeil =
	'$*a : breakfast$e : orgueil, cueillir, bagel, booster$eu : fleur, jeune, seuil, toasteur$*he : herd-book$heu : heure, heurt, bonheur$hu : hum, husky$*i : flirt, girl, tee-shirt$*o : patchwork$*ö : röntgen$œ : œil$œu : manœuvre, œuf, cœur, sœur, mœurs$*ou : rough$*u : upwelling, surf, club, must, puzzle';
const otherEU =
	'$ai : faisan, faisable$e : le, venin, retour, velot, querelle$ent : (en phrase) ils tremblent trop$es : cartes-vues$on : monsieur';
const ain =
	'$aim : daim, faim, essaim$aims : daims, essaims$ain : ainsi, crainte, bain, grain, vain$ainc : il vainc$aincs : je vaincs$aing : parpaing, bastaing$aings : parpaings, bastaings$ains : bains, grains, je crains$aint : saint, maint, toussaint$aints : saints, maints$ein : ceinture, enceinte, sein, frein, serein$eing : seing$eings : seings$eins : freins, sereins, je peins$eint : peint, éteint, atteint$eints : peints, éteints$en : examen, bienfait, pentagone, placenta, rien, lycéen$ens : riens, biens, examens, thériens, acariens$ent : va-et-vient, il vient$hein : hein$hen : hendécagone$hin : hindou, cahin-caha$im : imbu, impôt, simple, timbre$in : inca, amincir, fin, serin$în : vous vîntes$ïn : coïncidence$inc : succincte$inct : instinct, succinct, distinct$incts : instincts$ing : vingtaine, coing, poing, shampooing$ings : coings, poings, bastings$ingt : vingt$ingts : quatre-vingts$ins : moins, confins, je vins, lance-engins$int : point, suint, il vint$înt : qu’il vînt$ints : points, trois-points$ym : nymphe, symbole, olympique, thym$yms : thyms$yn : lynx, syncope';
const en =
	'$*aans : afrikaan$am : ampoule, rampe, chambre, da$amp : champlever, camp, cham$amps : camps, champ$ams : dam$an : an, antan, néanmoins, divan, roma$anc : banc, flanc, fran$ancs : bancs, flancs, franc$and : grand, gland, quand, marchan$ands : grands, marchand$ang : sang, étan$angs : sangs, étang$ans : ans, sans, pans, divans, céan$ant : tant, néant, galant, chant, tenan$ants : néants, galants, petits-enfant$*ão : sertã$aon : faon, paon, tao$aons : faons, paon$ãos : sertão$e : enivre$em : emploi, rempart, remplir, templ$emp : exempt$emps : temps, longtemps, printemp$empt : exemp$empts : exempt$en : en, enfin, sens, pensée, chienli$end : révérend, différend, il rend, il ten$ends : défends, différends, tu tend$eng : haren$engs : hareng$ens : gens, dépens, guet-apens, suspen$ent : cent, vent, parent, commen$ents : vents, parents, torrents, errement$*ham : hampe, hamburge$han : hangar, hanter, déhancher, aha$hans : ahan$hen : henry, préhension';
const on =
	'$hon : honte, hongre, éhonté$om : ombre, rompre, compote, nom, dom$omb : plomb, aplomb, coulomb$ombs : plombs, coulombs$omp : dompter, prompte, comptine$omps : je romps$ompt : prompt, il rompt$ompts : prompts$oms : noms$on : on, bonté, ion, citron$onc : jonc, ajonc, tronc$ond : bond, fond, rond, profond, il répond$onds : bonds, fonds, tu réponds, tréfonds$ong : longtemps, long, oblong, sarong$ongs : longs, oblongs, sarongs$ons : bons, abscons, fritons, grattons$ont : montmorency, dont, mont, ils ont$onts : monts, fonts, trois-ponts';
const otherIN =
	'$eun : à jeun$hum : humble$um : lumbago, lump, parfum$ums : parfums$un : un, lundi, lunch, alun, brun$uns : bruns, embruns$unt : défunt, emprunt$unts : défunts, emprunts';

const phoneme = [ i, er, ai, a, otherA, otherO, o, ou, u, eu, oeil, otherEU, ain, en, on, otherIN ];

const list = phoneme.map((item) => {
	console.log(transform(item));
});
