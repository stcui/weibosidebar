function main() {
    var elements = new Array('pl_rightmod_myinfo','trustPagelet_recom_allinonev5', 'trustPagelet_recom_allinonev5', 'y','pl_rightmod_yunying','pl_rightmod_ads35','trustPagelet_recom_memberv5','pl_rightmod_yunying','pl_leftnav_app','pl_content_publisherTop');
    for (var i = 0; i < elements.length; i ++) {
	var e = document.getElementById(elements[i]);
	if (e) {e.parentNode.removeChild(e);}
    }
    var footer =document.getElementsByClassName('global_footer')[0];
    footer.parentNode.removeChild(footer);

    var left = document.getElementsByClassName('W_main_l')[0]
    left.parentNode.removeChild(left);
    document.body.appendChild(left);

}

main();
