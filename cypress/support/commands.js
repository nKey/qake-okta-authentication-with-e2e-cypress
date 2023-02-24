import { OktaAuth } from "@okta/okta-auth-js";

// https://dev-70508583.okta.com/oauth2/default/v1/authorize
// https://dev-70508583.okta.com/oauth2/default/v1/authorize?client_id=0oa8fz1kxxsBaz4qr5d7&code_challenge=11j5g7CZDQarGk_79wu-Zc1_4RzK_rykXbv304mMUe8&code_challenge_method=S256&nonce=KxryWEKzTg6HfBhcZbD55gBev5A8P9NDXvxyAInogkcultbjNMztdXGY1PXGnpWR&redirect_uri=http://localhost:3000/login/callback&response_type=code&state=Sv1Fj6SW2XQOAcAc0knU7ALItnIFpyVQFdgJvYXCr4AzlUZoaDAggJbfSNHedSLJ&scope=openid profile email

Cypress.Commands.add("loginByOktaApi", async () => {
  var config = {
    issuer: Cypress.env("okta_domain"),
    clientId: Cypress.env("okta_client_id"),
    redirectUri: Cypress.env("okta_redirect_uri"),
    scope: ["openid", "email", "profile"],
  };
  const authClient = new OktaAuth(config);
  await authClient.signInWithRedirect();

  //   await authClient.token.getWithoutPrompt().then(({ tokens }) => {
  //     console.log({ tokens });
  //     debugger;
  //     const userItem = {
  //       token: tokens.accessToken.value,
  //       user: {
  //         sub: user.id,
  //         email: user.profile.login,
  //         given_name: user.profile.firstName,
  //         family_name: user.profile.lastName,
  //         preferred_username: user.profile.login,
  //       },
  //     };
  //   });

  //   const token = await authClient.start();

  //   console.log({ token });
  //   const { tokens } = await authClient.token.parseFromUrl(); // remember to "await" this async call
  //   authClient.tokenManager.setTokens(tokens);
  //   debugger;
  //   console.log({ authClient });
  //   const token = await authClient.signInWithRedirect();
  //   console.log({ token });

  // Subscribe to authState change event.
  //   authClient.authStateManager.subscribe(function (authState) {
  //     debugger;
  //     // Logic based on authState is done here.
  //     if (!authState.isAuthenticated) {
  //       // render unathenticated view
  //       return;
  //     }

  //     // Render authenticated view
  //   });

  // Handle callback
  if (authClient.token.isLoginRedirect()) {
    debugger;
    const { tokens } = await authClient.token.parseFromUrl(); // remember to "await" this async call
    authClient.tokenManager.setTokens(tokens);
  }

  // normal app startup
  //   authClient.start(); // will update auth state and call event listeners
  //   //   cy.request({
  //     method: "POST",
  //     url: `${Cypress.env("okta_domain")}/v1/authorize`,

  //   }).then(({ body }) => {
  //     const user = body._embedded.user;
  //     console.log({ user });
  //     debugger;
  //     // const config = {
  //     //   issuer: `https://${Cypress.env("okta_domain")}/oauth2/default`,
  //     //   clientId: Cypress.env("okta_client_id"),
  //     //   redirectUri: "http://localhost:3000/login/callback",
  //     //   scope: ["openid", "email", "profile"],
  //     // };
  //     // var config = {
  //     //     issuer: Cypress.env("okta_domain"),
  //     //     clientId: Cypress.env("okta_client_id"),
  //     //     redirectUri: Cypress.env("okta_redirect_uri"),
  //     //     scope: ["openid", "email", "profile"],
  //     //   };
  //     //   debugger;
  //     //   const authClient = new OktaAuth(config);
  //     //   console.log({ authClient });
  //     //   debugger;
  //     // return authClient.token
  //     //   .getWithoutPrompt({ sessionToken: body.sessionToken })
  //     //   .then(({ tokens }) => {
  //     //     const userItem = {
  //     //       token: tokens.accessToken.value,
  //     //       user: {
  //     //         sub: user.id,
  //     //         email: user.profile.login,
  //     //         given_name: user.profile.firstName,
  //     //         family_name: user.profile.lastName,
  //     //         preferred_username: user.profile.login,
  //     //       },
  //     //     };

  //     //     window.localStorage.setItem("oktaCypress", JSON.stringify(userItem));

  //     //     log.snapshot("after");
  //     //     log.end();
  //     //   });
  //   });
});
