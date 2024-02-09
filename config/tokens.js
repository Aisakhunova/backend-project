const iic_token = "eyJG6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY"
const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4SDB3T1F1cF9oeWJBcDd6STRmTnFtcTNWYzBGMkRYaVFURGF2eGMtOUlJIn0.eyJleHAiOjE2ODE1ODkzNzIsImlhdCI6MTY4MTU4NTc3MiwianRpIjoiY2Q2YWU0NDQtN2ZiNy00MGMxLTg4ZmYtMWQ1OGZiZDA4YmU2IiwiaXNzIjoiaHR0cHM6Ly9pZHAtaWlzLmdvdjRjLmt6L2F1dGgvcmVhbG1zL2Nvbi13ZWIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGEyNjM4NzItZmRiNS00NmIxLTg3MGEtYWFhNWRmYWM2Y2JiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY3ctcXVldWUtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI5Y2Y0Nzk3ZS01NTcyLTRmOWUtOGQ4Mi1hNjczYTcyNWZhMTMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9wZXJhdG9yX3JvbGUiLCJlbnNpX3NlcnZpY2UiLCJhdXRvc2Nob29sX3NlcnZpY2UiLCJwYXltZW50X3Zpb2xhdGlvbl9zZXJ2aWNlIiwiaGVkX3NlcnZpY2UiLCJzZWFyY2hfbGVnYXV0b19zZXJ2aWNlIiwicmVnX2F1dG9fc2VydmljZSIsImRlcmVnX2F1dG9fc2VydmljZSIsImRvY2dlbmVyYXRvcl9zZXJ2aWNlIiwiZHJpdmVyX2FjY291bnRfc2VydmljZSIsInNlYXJjaF92aW9sYXRpb25fc2VydmljZSIsInNvY2lhbF9zZXJ2aWNlIiwicmVxdWVzdF9taWFfc3RhdHVzX3NlcnZpY2UiLCJicG1fZW5naW5lX3Jlc3Rfc2VydmljZSIsInZycG5fY2hlY2tfc2VydmljZSIsImtwc3Vfc2VydmljZSIsImxhbmVzX3NlcnZpY2UiLCJ1bWFfYXV0aG9yaXphdGlvbiIsIm9sZF9ncm56X3N0b3JhZ2Vfc2VydmljZSIsIm1pYV9kaWN0aW9uYXJ5X3NlcnZpY2UiLCJwYXBlcl9zdG9yYWdlX3NlcnZpY2UiLCJxdWV1ZV9zZXJ2aWNlIiwibGVnX2F1dG9fc2VydmljZSIsImdyc3Rfc2VydmljZSIsImtkcF9zZXJ2aWNlIiwidmlvbGF0aW9uX3BkZiIsImF1dG94X3NlcnZpY2UiLCJmY19jb21tb24iLCJwZGRfc2VydmljZSIsImhlYWx0aF9zZXJ2aWNlIiwibWlhX3N0YXR1c19zZXJ2aWNlIiwiZGljdGlvbmFyeV9zZXJ2aWNlIiwiZHJpdmVyX2xpY2Vuc2VfaW5mb19zZXJ2aWNlIiwiZmNfYWRtaW4iLCJ0cmFuc3BvcnRfc2VhcmNoX3NlcnZpY2UiLCJwZGRfc3RhdHVzX3NlcnZpY2UiLCJwYXltZW50X2NoZWNrX3NlcnZpY2UiLCJmYWlsdXJlX3NlcnZpY2UiLCJjaGVja19ncm56X3NlcnZpY2UiLCJwYXltZW50X2luaXRfc2VydmljZSIsImRyaXZlcl9zdGF0dXNfc2VydmljZSIsImJtZ19yZWdpc3RyYXRpb25fc2VydmljZSIsIm1lZDA4M19zZXJ2aWNlIiwiZ3Juel9zZXJ2aWNlIiwiZXhhbV9pbmZvX3NlcnZpY2UiLCJmbF9zZXJ2aWNlIiwiZmxwaG90b19zZXJ2aWNlIiwidXBjcGF5c19zZXJ2aWNlIiwiZHVibGljYXRlX2dybnpfc2VydmljZSIsInBob3RvYmFua19zZXJ2aWNlIiwicmVzZXJ2ZV9ncm56X3NlcnZpY2UiLCJ1bF9zZXJ2aWNlIiwiYXV0b3Blcm1pdF9zZXJ2aWNlIiwiZmNfY29tcG9zZXIiLCJwZGRfYWNjb3VudF9zZXJ2aWNlIiwicmVhZF9hZG1pbl9zZXJ2aWNlIiwiZHJpdmVyX2xpY2Vuc2Vfc2VydmljZSIsIm93bmVyX2NoYW5nZV9zZXJ2aWNlIiwibWlhX3N0YXR1c19yZXRyeV9zZXJ2aWNlIiwicGF5bWVudF9jb25maXJtX3NlcnZpY2UiLCJyZXJlZ19hdXRvX3NlcnZpY2UiLCJzdGF0X3NlcnZpY2UiLCJub3RhcmlhbF9zZXJ2aWNlIiwidGltZXNoZWV0X3NlcnZpY2UiLCJvcmRlcl9zcm5wX3NlcnZpY2UiLCJwYXltZW50X3NlYXJjaF9zZXJ2aWNlIiwicGF5bWVudF9zdGF0dXNfc2VydmljZSIsImJtZ19jaGVja19zZXJ2aWNlIiwiZGVwcml2ZWRfbGljZW5zZV9zZXJ2aWNlIiwiaW5pdGlhbF9hdXRvX3NlcnZpY2UiLCJjb25fYWNjZXNzX3NlcnZpY2UiLCJyZXF1ZXN0X3JlZ2lzdHJ5X3NlcnZpY2UiLCJncm56X3N0b3JhZ2Vfc2VydmljZSIsImNvd19zZXJ2aWNlIiwiYXV0b3hfZXh0X3NlcnZpY2UiLCJzbXNfZ2F0ZXdheV9zZXJ2aWNlIiwicmVjeWNsZV92ZWhpY2xlX3NlcnZpY2UiLCJjb251c2VyIiwidHJhbnNsYXRpb25fc2VydmljZSIsInJlc2VydmF0aW9uX3NlcnZpY2UiLCJ2ZWhpY2xlX3Bhc3Nwb3J0X3NlcnZpY2UiLCJ0YXhfc2VydmljZSIsImRvY19zZWFyY2hfc2VydmljZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiaWluIHByb2ZpbGUgZ3JvdXBzIGVtYWlsIiwic2lkIjoiOWNmNDc5N2UtNTU3Mi00ZjllLThkODItYTY3M2E3MjVmYTEzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImNvbkdyb3VwIjpbIi9vcGVyYXRvcnMiXSwidW5pdENvZGUiOiJNSi1aLVotU1BTQyIsIm5hbWUiOiLQkNC50LzRg9GA0LDRgiDQltCw0LzRi9GF0LDQvSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3Qtb3BlcmF0b3IiLCJnaXZlbl9uYW1lIjoi0JDQudC80YPRgNCw0YIiLCJmYW1pbHlfbmFtZSI6ItCW0LDQvNGL0YXQsNC9IiwiZW1haWwiOiJ0ZXN0LW9wZXJhdG9yQGdtYWlsLmNvbSIsImlpbiI6IjEyMzQ1Njc4OTAxMiJ9.h1bjYl-t5w2Gru1G-1HFu7RQfsO5QlF_F6kNSPIX6TRNuf3HeM4EGoJX13I6adwhnfBouvkUV5yD_MWe1x0DYw4DHJ_pBGq1an_t32YaQg3MVviMu8SKuJhgPgfrPxZsoj9_yPDEhqc06Gr4DOPYarL110fiepmgbtFBaebCgbRXwNSRLmcMhjiBdDNqsXh5ML74oc59GKoxoufE3lVxBxExmWINKanJR_BonvxDjLEdgTUOMh5B2Idw03qutpCQAB4ApkrbaedxqOn4IHcHimjViiCOrH0dBVTUlDQYVlr9SZQ3zQte2jsQdKFDAJl6SdoOOs6_L5t6jmxEAGzfNw";
const axios = require('axios');

const checkToken = (token) => {
    const jwt = require('jsonwebtoken');

    const decodedToken = jwt.decode(token);
    console.log(decodedToken)
    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
    const currentTime = new Date().getTime();

    if (currentTime > expirationTime) {
        console.log("Token has expired")
        token = getToken()
    }
}

const getToken = () => {
    const host = 'http://hakaton-idp.gov4c.kz';
    const endpoint = '/auth/realms/con-web/protocol/openid-connect/token';

    const username = 'test-operator';
    const password = 'DjrsmA9RMXRl';
    const client_id = 'cw-queue-service';
    const grant_type = 'password';

    const url = `${host}${endpoint}`;
    const data = `username=${username}&password=${password}&client_id=${client_id}&grant_type=${grant_type}`;

    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            const token = response.data.access_token;
            console.log('Token:', token);
            return token
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const geocoder_api = "248256736838475687578x30413"

module.exports = { iic_token, token, geocoder_api };