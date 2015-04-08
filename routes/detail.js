
exports.index = function(req, res){
  var navItems = ['课程','问答','我的课程'];
  var title = 'Oracle数据库开发必备利器之SQL基础';
  var peopleNum = 5000;
  var courseImg = '/images/2.jpg';
  var courseLength = ' 4小时 0分';
  var courseDifficulty = '初级';
  var courseTeacher = '王哲';
  res.render('detail',{
    navItems:navItems,
    title:title,
    peopleNum:peopleNum,
    courseImg:courseImg,
    courseLength:courseLength,
    courseDifficulty:courseDifficulty,
    courseTeacher:courseTeacher
  })
};