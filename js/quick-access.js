'use strict';
(function() {
    var quickAccess = document.getElementById('quick-access');
    if(parseInt(screen.height) < 660)
    {
        quickAccess.remove();
    }
}) ();