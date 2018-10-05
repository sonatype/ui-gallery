export default function IqModalExampleController($modal) {
  this.openModal = function() {
    $modal.open({
      templateUrl: 'styles/iq-modal/modal-content.html',
      windowClass: 'iq-modal', // NOTE: this is how the iq-modal CSS class gets added to the window
      backdropClass: 'iq-modal-backdrop'
    });
  };
}
