let heroData = [
  {name: 'Midnighter', phoneNumber: '111-222-3333', team: 'Authority', image: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2016/05/IMG_1721.png?resize=665%2C887&quality=85&strip=info'},{name: 'Apollo', phoneNumber: '222-333-4444', team: 'Authority', image: 'https://pbs.twimg.com/media/CZLGHe2WkAAP9GX.jpg'},{name: 'Black Canary', phoneNumber: '333-444-5555', team: 'Birds of Prey', image: 'http://vignette2.wikia.nocookie.net/marvel_dc/images/6/6f/Black_Canary_0003.jpg/revision/latest?cb=20120209070457'},{name: 'Huntress', phoneNumber: '444-555-6666', team: 'Birds of Prey', image: 'http://comicsalliance.com/files/2016/05/Roe-Huntress.jpg?w=630&h=918&zc=1&s=0&a=t&q=89'},{name: 'Grayson', phoneNumber: '555-666-7777', team: 'Spyral', image: 'http://media.dcentertainment.com/sites/default/files/styles/covers192x291/public/comic-covers/2016/03/GRAY_ANN_Cv3_56fd5bad38d053.77202613.jpg?itok=PZpGMfr3'},{name: 'Scarlet Witch', phoneNumber: '666-777-8888', team: 'Avengers', image: 'http://www.cbr.com/wp-content/uploads/social_post/sw-social_3.jpg'},{name: 'Mockingbird', phoneNumber: '777-888-9999', team: 'Avengers', image: 'https://a.disquscdn.com/get?url=http%3A%2F%2Fcdn.bleedingcool.net%2Fwp-content%2Fuploads%2F2016%2F10%2FMockingbird5-600x904-1-600x904.jpg&key=p1yDL9v3qsnRxHM0T0ORSg'},{name: 'Wiccan', phoneNumber: '888-999-1010', team: 'Young Avengers', image: 'http://vignette2.wikia.nocookie.net/marveldatabase/images/0/07/William_Kaplan_(Earth-616)_036.png/revision/latest?cb=20161130174131'}
]
angular
  .module('phonebookApp', [])
  .controller('phonebookCtrl', [ phonebookController ])

  var heroImages;
  function phonebookController() {
    this.heros = heroData
    this.seeImage = function (){
      heroImages =(this.heroObj.image)
      console.log(heroImages);
    }
  }

//   angular.module('Admin', [])
// .controller('Home', function($scope) {
//
//   $scope.imageSources = [];
//
//     $scope.imageSources.push('http://www.imageno.com/thumbs/20151223/af9znxap7p6a.jpg');
//      $scope.imageSources.push('http://laurencebonvin.com/wp-content/uploads/2015/10/images-3-200x120.jpg');
//      $scope.imageSources.push('http://thumbs.photo.net/photo/18041438-sm.jpg');
//
// });
