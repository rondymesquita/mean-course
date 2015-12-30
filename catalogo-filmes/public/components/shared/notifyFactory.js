var notify = function ($mdToast, constants) {

	function mdNotify(text){
		$mdToast.show(
		  	$mdToast.simple()
			.content(text)
				.action('ok')
				.position("bottom right")
				.hideDelay(6000)
		);
	}

    return {
        success: function (text) {
			mdNotify('Success ' + text);

        },
        error: function (text) {
			mdNotify('Error ' + text);
        }
    };
}
notify.$inject = ['$mdToast','constants'];
angularModule.factory('notify', notify);
