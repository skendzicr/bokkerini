$(function () {
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
    submitSuccess: function ($form, event) {
      return true;
    }
  });
});
