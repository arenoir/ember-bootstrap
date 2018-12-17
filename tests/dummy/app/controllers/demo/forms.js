import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import Login from '../../models/login';

export default Controller.extend({
  formLayout: 'vertical',
  email: null,
  password: null,
  checkbox: false,
  radio: null,

  login: computed(function() {
    return Login.create(
      getOwner(this).ownerInjection()
    );
  }),

  actions: {
    submit() {
      window.alert('Successfully submitted form data!');
    }
  },

  init() {
    this._super(...arguments);
    this.radioOptions = [
      {
        label: 'foo'
      },
      {
        label: 'bar'
      }
    ];
  }

});
