'use strict';

/**
 * top-new service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-new.top-new');
