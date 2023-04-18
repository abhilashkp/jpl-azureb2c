const passportConfig = {
    credentials: {
        tenantName: 'jplportal.onmicrosoft.com',
        clientID: 'd29ed087-e582-4025-af4e-f2a324c9477b',
    },
    policies: {
        policyName: 'B2C_1_poc-signup-signin',
    },
    metadata: {
        b2cDomain: 'jplportal.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['ToDoList.Read', 'ToDoList.ReadWrite'],
                write: ['ToDoList.ReadWrite'],
            },
        },
    },
};

module.exports = passportConfig;

