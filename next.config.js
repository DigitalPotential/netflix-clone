module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'uhdtv.io',
          port: '',
          pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'mango.blender.org',
            port: '',
            pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'www.google.co.in',
            port: '',
            pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'download.blender.org',
            port: '',
            pathname: '**',
        }
      ],
    },
  }
  