webpackJsonp(["app/js/my/order-refund-apply/index"],{0:function(e,a){e.exports=jQuery},d2c08938ab978f39fcba:function(e,a,n){"use strict";var r=n("b334fd7e4c5a19234db2"),d=(function(e){e&&e.__esModule}(r),$("#refund-apply-form"));$("#refund-apply-btn"),d.validate({rules:{reason:{required:!0}},ajax:!0,currentDom:"#refund-apply-btn",submitSuccess:function(){$("#modal").modal("hide"),window.location.href=d.data("redirect")}})}},["d2c08938ab978f39fcba"]);