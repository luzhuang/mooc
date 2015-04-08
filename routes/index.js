
/*
 * GET home page.
 */

exports.index = function(req, res){
  var navItems = ['课程','问答','我的课程'];
  var menuItems = ['全部','前端开发','后端开发','移动开发','数据处理','图像处理'];
  var courseList=[];
  for (var i=0;i<100;++i){
    var courseItem = {
      img:'/images/1.jpg',
      title:'Java单元测试利器!Java单元测试利器!',
      peopleNum:100,
      updateTime:'2015/4/5'
    };
    courseList.push(courseItem);
  }
  res.render('index', {
                navItems:navItems,
                menuItems:menuItems,
                courseList:courseList
              });
};