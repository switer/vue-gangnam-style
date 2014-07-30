var meta = require('./package.json');

fis.config.set('name', meta.name);
fis.config.set('version', meta.version);
fis.config.set('project.exclude', 'node_modules/**');
fis.config.set('framework', {
    debug: false,
    cache: true,
    urlPattern: '/c/%s',
    comboPattern: '/co??%s',
    alias: {
        
    }
});

fis.config.set('framework.cache', true);
