var monCalendrier = angular.module('boutique', ['ui.bootstrap']);
	/*The first control about the background color.*/
	monCalendrier.controller('calendrier', ['$scope', function ($scope,Data) {
		// Realiser les fonctions.
    $scope.slidesLooping = true;
    $scope.hideImg = true;
    $scope.showImg = false;

		// Définir aléatoirement de la couleur(background). 
		$scope.backcolor = function(){
			var a = "0123456789abcdef";
			var b = 0;
			var str = "#";
			for(var i=0; i<6; i++) {
    			b = Math.floor(Math.random()*16);
    			str += a[b];
			}
			$scope.backgroundColor=str;
		};

    // double click button change background à blanch
    $scope.returnWhite = function(){
       $scope.backgroundColor = "#FFFFFF";
    }

		// Définir la fonction returnToToday()
		$scope.returnToday = function(){
			$scope.dt = new Date();
		};
		$scope.returnToday();

    $scope.showEtHide = function(){  
      // $scope.slidesLooping = !$scope.slidesLooping;
      $scope.hideImg = !$scope.hideImg;
      $scope.showImg = !$scope.showImg;
      $scope.slidesLooping = !$scope.slidesLooping;
    }

    // var timesDoubleClick = 0;
    $scope.important = function() {
        var dayImpo = $scope.dt;
        $scope.events =
            [
              {
                date: dayImpo,
                status: 'important'
              }
            ];
        // Decider la couleur du button selon le fois du double click. 
/*        timesDoubleClick += 1;
        if(timesDoubleClick%2 == 1){
          $scope.events =
            [
              {
                date: dayImpo,
                status: 'important'
              }
            ];
          }
          else{
            $scope.events =
            [
              {
                date: dayImpo,
                status: 'return'
              }
            ];
            timesDoubleClick = 0;
          }
          */

        $scope.getDayClass = function(date, mode) {
          if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);
            for (var i=0;i<$scope.events.length;i++){
              var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

              if (dayToCheck === currentDay) {
                return $scope.events[i].status;
              }
            }
          }
          return '';
        };

    }

  }]);

	/*The second control about 'Edit me'.*/
		// Changer le nom.
	monCalendrier.controller('InlineEditorController', ['$scope', function($scope) {
/*    $scope.hideImg = true;
    $scope.showImg = false;*/
		
		$scope.showtooltip = false;
		// $scope.showtooltip = 0;
		$scope.value = 'Your name';

		$scope.hideTooltip = function(){
			$scope.showtooltip = false;
		}

		$scope.toggleTooltip = function(e){
			e.stopPropagation();
			$scope.showtooltip = !$scope.showtooltip;
		}
	}]);

	// The third controller about changing-over images.
	monCalendrier.controller('CarouselCtrl', ['$scope', function ($scope) {  
    $scope.myInterval = 1500;
		$scope.noWrapSlides = false;
  	var slides = $scope.slides = [];
  		
  	slides.push({
  		image:'img/1.jpg'
  	});
  	slides.push({
  		image:'img/2.jpg'
  	});
  	slides.push({
  		image:'img/3.jpg'
  	});
  	slides.push({
  		image:'img/4.jpg'
  	});

/*    $scope.slidesLooping = true;
    $scope.hideImgTitle = function() {
      $scope.slidesLooping = !$scope.slidesLooping;
    }*/


  		// Ajouter les images en ligne
  		/*$scope.addSlide = function() {
    		var newWidth = 600 + slides.length + 1;
    		slides.push({
      			image: '//placekitten.com/' + newWidth + '/300',
      			text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
       				['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    		});
  		};
  		for (var i=0; i<4; i++) {
    		$scope.addSlide();
  		}*/

	}]);

	// The fourth controller about adding the events.
	monCalendrier.controller('ModalCtrl', function ($scope, $modal, $log) {
    aa = [['item1','item2','item3'],['a','b','c'],['toto','dodo'],['hello','bonjour'],['12345','34567','7890'],['school'],['kitty']];
    $scope.animationsEnabled = true;
    $scope.open = function (size) {
    var modalInstance = $modal.open({
     	animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
       	items: function () {
          //faire un petit test pour tester par random.
          var test = 0;
          test = Math.floor(Math.random()*7);
          $scope.items = aa[test];
        	return $scope.items;
       	}
     	}
   	});
    modalInstance.result.then(function (selectedItem) {
    	$scope.selected = selectedItem;
      // document.write(selectedItem);
    	}, function () {
      		$log.info('Modal dismissed at: ' + new Date());
    	});
  	};
	});

  //The fonctions of events windows.
	monCalendrier.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
		$scope.events = false;
		$scope.eventsList = true;
    $scope.removeButton = true;
		$scope.saveButton = false;
		$scope.addButton = true;
		$scope.title1 = false;
		$scope.title2 = true;
  		
  	$scope.items = items;
 		$scope.selected = {
    		item: $scope.items[0]

  	};

    $scope.remove = function (item) {
      // $scope.items.pop($scope.selectedItem);
      $scope.items.splice($scope.items.indexOf(item),1);
    };

  	$scope.add = function () {
  		$scope.events = !$scope.events;
  		$scope.eventsList = !$scope.eventsList;
      // $scope.removeButton = !$scope.removeButton
  		$scope.saveButton = !$scope.saveButton;
  		$scope.addButton = !$scope.addButton;
  		$scope.title1 = !$scope.title1;
  		$scope.title2 = !$scope.title2;
  	};

  	$scope.save = function () {
  		$scope.events = !$scope.events;
  		$scope.eventsList = !$scope.eventsList;
      // $scope.removeButton = !$scope.removeButton;
  		$scope.saveButton = !$scope.saveButton;
  		$scope.addButton = !$scope.addButton;
  		$scope.title1 = !$scope.title1;
  		$scope.title2 = !$scope.title2;
  		// Ajouter un nouveau evenement.
      $scope.items.push($scope.newEvent);
  	  };

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
	});
