webpackJsonp(["app/js/activity-manage/exercise/index"],[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=$('[name="range[courseId]"]').val(),n=$('[name="range[lessonId]"]').val(),i=$('[name="difficulty"]').val();$.post(e,{courseId:t,lessonId:n,difficulty:i},function(e){$('[role="questionNum"]').text(0),$('input[type="checkbox"]').attr({disabled:!0,checked:!1}),$.each(e,function(e,t){$("[type='"+e+"']").text(t.questionNum),$("[type='"+e+"']").closest(".js-question-type").find('input[type="checkbox"]').attr("disabled",!1)})})}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n("1be2a74362f00ba903a0"),s=i(u),c=function(){function e(t){a(this,e),this.$element=t,this.validator2=null,this._setValidateRule(),this._init(),this._initEvent()}return o(e,[{key:"_init",value:function(){this._inItStep2form(),this.fix()}},{key:"_initEvent",value:function(){}},{key:"_inItStep2form",value:function(){var e=$("#step2-form");this.validator2=e.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},itemCount:{required:!0,positiveInteger:!0,min:1,max:9999},range:{required:!0},difficulty:{required:!0},"questionTypes[]":{required:!0,remote:{url:$('[name="checkQuestion"]').data("checkUrl"),type:"post",dataType:"json",async:!1,data:{itemCount:function(){return $('[name="itemCount"]').val()},range:function e(){var e={},t=$('[name="range[courseId]"]').val();if(e.courseId=t,$('[name="range[lessonId]"]').length>0){var n=$('[name="range[lessonId]"]').val();e.lessonId=n}return JSON.stringify(e)},difficulty:function(){return $('[name="difficulty"]').val()},types:function e(){var e=[];return $('[name="questionTypes[]"]:checked').each(function(){e.push($(this).val())}),e}}}}},messages:{required:"请填写标题",range:"题目来源",itemCount:{required:"请填写题目个数",positiveInteger:"请输入正整数",min:"题目个数无效",max:"题目个数过大"},difficulty:"请选择难易程度","questionTypes[]":{required:"请选择题型",remote:"题目数量不足"}}}),e.data("validator",this.validator2)}},{key:"_inItStep3form",value:function(){var e=$("#step3-form"),t=e.validate({onkeyup:!1,rules:{finishCondition:{required:!0}},messages:{finishCondition:"请输完成条件"}});e.data("validator",t)}},{key:"_setValidateRule",value:function(){$.validator.addMethod("positiveInteger",function(e,t){return this.optional(t)||/^[1-9]\d*$/.test(e)},$.validator.format("必须为正整数"))}},{key:"fix",value:function(){var e=this;$(".js-question-type").click(function(){e.validator2.form()})}}]),e}();new c($("#step2-form")),new s.default($('[name="range[courseId]"]'),$('[name="range[lessonId]"]')),$('[name="range[courseId]"]').change(function(){var e=$(this).data("checkNumUrl");r(e)}),$('[name="range[lessonId]"]').change(function(){var e=$(this).data("checkNumUrl");r(e)}),$('[name="difficulty"]').change(function(){var e=$(this).data("checkNumUrl");r(e)})}]);