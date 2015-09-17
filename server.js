/**
 * The main file to start up the ActiveRules Application server
 *
 * @module arkoa
 * @copyright 2015 - Brian Winkers
 * @license ISC
 */


/**
 * Koala provides a Koa app with good default middleware
 *
 * @type {function(): app|exports}
 */
var koala = require('koala');

/**
 * Provides functions for managing multi-tenant localized responses
 *
 * @type {Server|exports|module.exports}
 */
var ar = require('ar-server');

/**
 * Create the Koa app with Koala middleware
 */
var app = koala();

/**
 * Now that we have a base koa app we can start registering services with it.
 * This will search the services directory for service folders and fetch the service definition.
 *
 * The service definition includes information needed to:
 *      1. Populate a Swagger definition
 *      2. Create Koa routes in the app
 *      3. Load appropriate Nugget models and schema
 */
ar.registerServices(app, './services');

/**
 * Test service to make sure we've got everything working
 */
app.use(function *(){
    this.body = 'Hello World';
});

/**
 * Have the App accept Requests
 */
app.listen(8888);