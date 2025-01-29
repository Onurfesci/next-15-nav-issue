export enum Route {
  Register = '/register',
}

export enum RegistrationRoute {
  ChooseAccountType = `${Route.Register}/account-type/choose`,
  AccountTypeOverview = `${Route.Register}/account-type/overview`,
  AccountTypeFees = `${Route.Register}/account-type/fees`,
  AccountConfirmation = `${Route.Register}/account-confirmation`,
  OnboardingStepsOverview = `${Route.Register}/onboarding-steps`,
  Name = `${Route.Register}/basic-details/name`,
  Phone = `${Route.Register}/basic-details/phone`,
  PhoneOtp = `${Route.Register}/basic-details/phone-otp`,
  Email = `${Route.Register}/basic-details/email`,
  EmailOtp = `${Route.Register}/basic-details/email-otp`,
  Password = `${Route.Register}/basic-details/password`,
}
