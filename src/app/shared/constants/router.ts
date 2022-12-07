export const ROUTER = {
  content: 'content',
  logIn: 'log-in',
  signUp: 'sign-up',
  forgotPassword: 'forgot-password',
  verifyEmail: 'verify-email',
  resetPassword: 'reset-password',
};

export const LINKS = Object.fromEntries(
  Object.entries(ROUTER).map(([key, value]) => [key, '/' + value])
) as typeof ROUTER;
