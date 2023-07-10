const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  'behavior': __dirname + '/src/behavior',
  'components': __dirname + '/src/components',
  // Add more aliases as needed
});

moduleAlias();