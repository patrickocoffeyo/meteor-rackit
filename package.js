Package.describe({
  summary: 'Super simple Rackspace Cloud Files client'
});

Package.on_use(function(api) {
  api.add_files(['lib/rackit.js'], 'server');
  if (typeof api.export !== 'undefined') { api.export('Rackit', 'server'); }
});

Npm.depends({ 'rackit': '0.1.0' });
