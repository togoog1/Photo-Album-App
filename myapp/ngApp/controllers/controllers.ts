namespace myapp.Controllers {

    export class HomeController {
        public photos;


        public deletephoto(id) {
          this.photoService.removePhoto(id);
        }



        constructor(
          private photoService
        ){
          this.photos = photoService.getPhotos();
        }
    }



//filestack code added to this controller
    export class AddPhotoController {
        public photo
        public file;

        public addPhoto() {
          this.photoService.savePhoto(this.photo);
        }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }
        constructor(
          private photoService, private filepickerService, private $scope: ng.IScope
        ) {


        }
    }






    export class EditPhotoController {
        public photo
        public id

        public editPhoto(){
          this.photo._id = this.id;
          this.photoService.savePhoto(this.photo);
        }
        constructor(public $stateParams, private photoService){
          this.id= $stateParams['id'];
        }
    }



}
