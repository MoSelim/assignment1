weather.factory("FormUtil", [function() {
    var formUtil={
        isFilled: function (field) {
					return field.req && field.value;
				}
    };
	  return formUtil;
}]);
