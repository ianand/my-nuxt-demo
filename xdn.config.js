'use strict'

// This file was automatically added by xdn deploy.
// You should commit this file to source control.

module.exports = {
  backends: {
    legacy: {
      domainOrIp: process.env.LEGACY_BACKEND_DOMAIN || 'www.ebay.com',
      hostHeader: process.env.LEGACY_BACKEND_HOST_HEADER || 'www.ebay.com',
    }
  },
  includeNodeModules: true,
}
