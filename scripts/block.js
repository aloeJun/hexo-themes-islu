hexo.extend.tag.register('r', function(args, content){
    var className =  args.join(' ');
    return '<div class="uk-alert uk-alert-danger"><i class="fas fa-exclamation-triangle"></i> ' + content + '</div>';
}, {ends: true});

hexo.extend.tag.register('g', function(args, content){
    var className =  args.join(' ');
    return '<div class="uk-alert uk-alert-success"><i class="fa fa-check-circle"></i> ' + content + '</div>';
}, {ends: true});

hexo.extend.tag.register('y', function(args, content){
    var className =  args.join(' ');
    return '<div class="uk-alert uk-alert-warning"><i class="fa fa-exclamation-circle"></i> ' + content + '</div>';
}, {ends: true});
