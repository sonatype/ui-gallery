export default function iqFormLayoutExampleController() {
  const vm = this;

  Object.assign(vm, {
    objectOptions: [{name: 'foo', value: 1}, {name: 'bar', value: 2}],

    text1: '',
    text2: '',
    text3: '',
    text4: '',
    isSubscribed: false,
    isSubscribed2: false,
    isSubscribed3: false,
    isSubscribed4: false,
    dropdown: undefined,
    range: 'high',
    color: undefined,

    isDirty() {
      return !!(vm.text1 || vm.text2 || vm.text3 || vm.text4 || vm.dropdown || vm.range || vm.color);
    },

    submit() {
      if (vm.form.$valid && vm.isDirty()) {
        alert('Submitted');
      }
    }
  });
}
