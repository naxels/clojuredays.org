// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('dcd_website.app');
goog.require('cljs.core');
goog.require('reagent.core');
dcd_website.app.dcd_team = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carlo Sciolla","skuro"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Vijay Kiran","vijaykiran"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Max Gonzih","gonzih"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Joost Diepenmaat","ZeekatSoftware"], null)], null);
dcd_website.app.header_component = (function dcd_website$app$header_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$logo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/logo.png"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Dutch Clojure Days 2017"], null)], null)], null);
});
if(typeof dcd_website.app.sidebar_expanded !== 'undefined'){
} else {
dcd_website.app.sidebar_expanded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
dcd_website.app.collapse_sidebar = (function dcd_website$app$collapse_sidebar(_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dcd_website.app.sidebar_expanded,false) : cljs.core.reset_BANG_.call(null,dcd_website.app.sidebar_expanded,false));

return true;
});
dcd_website.app.expand_sidebar = (function dcd_website$app$expand_sidebar(_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dcd_website.app.sidebar_expanded,true) : cljs.core.reset_BANG_.call(null,dcd_website.app.sidebar_expanded,true));

return true;
});
dcd_website.app.menu_entry_component = (function dcd_website$app$menu_entry_component(p__12528){
var map__12531 = p__12528;
var map__12531__$1 = ((((!((map__12531 == null)))?((((map__12531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12531):map__12531);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12531__$1,cljs.core.cst$kw$link);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12531__$1,cljs.core.cst$kw$text);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,link,cljs.core.cst$kw$on_DASH_click,dcd_website.app.collapse_sidebar,cljs.core.cst$kw$key,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null),text], null);
});
dcd_website.app.sidebar_component = (function dcd_website$app$sidebar_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aside$sidebar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dcd_website.app.sidebar_expanded) : cljs.core.deref.call(null,dcd_website.app.sidebar_expanded)))?null:"collapsed")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$item$expand_DASH_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dcd_website.app.sidebar_expanded,cljs.core.not);
})], null),"\u2630"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dcd_website.app.menu_entry_component,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#about",cljs.core.cst$kw$text,"About"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#cfp",cljs.core.cst$kw$text,"Call for papers"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#date",cljs.core.cst$kw$text,"When?"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#location",cljs.core.cst$kw$text,"Where?"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#sponsors",cljs.core.cst$kw$text,"Sponsors"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#behave",cljs.core.cst$kw$text,"Code of conduct"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#org",cljs.core.cst$kw$text,"Contacts"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$link,"#dcd16",cljs.core.cst$kw$text,"DCD16"], null)], null))], null);
});
dcd_website.app.code_of_conduct_component = (function dcd_website$app$code_of_conduct_component(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Need Help?"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You can always reach out to us at ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:events@clojuredays.org"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$email,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/email.svg"], null)], null),"events@clojuredays.org"], null)," or on ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://twitter.com/clojuredays"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$twitter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/twitter.svg"], null)], null),"twitter"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"The Quick Version"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"without a refund"], null)," at the discretion of the conference organisers."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"The Less Quick Version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Participants asked to stop any harassing behavior are expected to comply immediately."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded clothing and/or badges."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We expect participants to follow these rules at conference and workshop venues and conference-related social events."], null)], null);
});
dcd_website.app.sponsors_component = (function dcd_website$app$sponsors_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sponsors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"DCD is a free event that is made possible thanks to our amazing sponsors and volunteers."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$platinum,"Platinum sponsors"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$sponsor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://www.adgoji.com/",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/sponsors/adgoji.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If you are interested in sponsoring this event please contact us via ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:events@clojuredays.org"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$email,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/email.svg"], null)], null),"email."], null)], null)], null);
});
dcd_website.app.when_component = (function dcd_website$app$when_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Dutch Clojure Days will happen on ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"dcd.ics"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/calendar.svg"], null)], null),"Saturday, March 25th 2017"], null),".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$max_DASH_width,"800px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$allowtranspacency,cljs.core.cst$kw$frame_DASH_border,cljs.core.cst$kw$margin_DASH_width,cljs.core.cst$kw$width,cljs.core.cst$kw$src,cljs.core.cst$kw$scrolling,cljs.core.cst$kw$hspace,cljs.core.cst$kw$margin_DASH_height,cljs.core.cst$kw$vspace,cljs.core.cst$kw$height],[true,(0),(5),"100%","//eventbrite.com/tickets-external?eid=30113550440&ref=etckt","auto",(0),(5),(0),(275)])], null)], null)], null);
});
dcd_website.app.location_component = (function dcd_website$app$location_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Amsterdam. Exact location is yet to be announced. If you have any ideas or suggestions feel free to ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:events@clojuredays.org"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$email,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/email.svg"], null)], null),"contact us"], null),"."], null);
});
dcd_website.app.call_for_paper_component = (function dcd_website$app$call_for_paper_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Call for papers ends on 31th of January, 2017. To submit your talk proposal please use ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://goo.gl/forms/yvTZUAZ2YyCtfEM02",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$form_DASH_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$book,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/book.svg"], null)], null),"Google form"], null)], null)], null)], null);
});
dcd_website.app.main_component = (function dcd_website$app$main_component(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$article$main,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_about,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"About DCD17"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The Annual International Gathering of Clojure Enthusiasts and Practitioners in the Netherlands!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_cfp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Call for papers"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.call_for_paper_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"When?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.when_component], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Where?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.location_component], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_sponsors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Sponsors"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.sponsors_component], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_behave,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Code of Conduct"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.code_of_conduct_component], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_org,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Contacts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Official contacts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$email_DASH_info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:events@clojuredays.org"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$email,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/email.svg"], null)], null),"events@clojuredays.org"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$org_DASH_info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://twitter.com/clojuredays"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$twitter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/twitter.svg"], null)], null),"@clojuredays"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"DCD team"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var organizer = (function dcd_website$app$main_component_$_organizer(p__12542){
var vec__12544 = p__12542;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12544,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12544,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$org_DASH_info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,[cljs.core.str("https://twitter.com/"),cljs.core.str(handle)].join(''),cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$twitter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/twitter.svg"], null)], null),name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,handle], null));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(organizer,dcd_website.app.dcd_team);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Design & Art"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$org_DASH_info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://twitter.com/moolver_sin",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$twitter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/twitter.svg"], null)], null),"Lubov Soltan"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_dcd16,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"DCD16"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Videos from the previous event are available here: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.youtube.com/playlist?list=PLjzcwcP9P2LeiVXofnnXcxAqvmVNn3fTD",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$icon$youtube,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/youtube.svg"], null)], null),"DCD16 Playlist on Youtube"], null),"."], null)], null)], null);
});
dcd_website.app.footer_component = (function dcd_website$app$footer_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer$footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://twitter.com/clojuredays",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/twitter.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.youtube.com/channel/UCZ7rYtyjSgF1jMYHCkyjwMQ",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/youtube.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:events@clojuredays.org"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"img/icons/email.svg"], null)], null)], null)], null);
});
dcd_website.app.website_component = (function dcd_website$app$website_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$site,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$wrapper,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.header_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.sidebar_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.main_component], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.footer_component], null)], null);
});
dcd_website.app.init = (function dcd_website$app$init(){
if(cljs.core.truth_(document.location)){
var G__12547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.website_component], null);
var G__12548 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12547,G__12548) : reagent.core.render_component.call(null,G__12547,G__12548));
} else {
return null;
}
});
dcd_website.app.render_to_string = (function dcd_website$app$render_to_string(){
return reagent.core.render_to_string(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcd_website.app.website_component], null));
});
goog.exportSymbol('dcd_website.app.render_to_string', dcd_website.app.render_to_string);
