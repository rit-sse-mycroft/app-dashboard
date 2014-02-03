
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mycroft' });
};

exports.logs = function(req, res){
  res.render('logs', {title: 'Mycroft - logs'});
};