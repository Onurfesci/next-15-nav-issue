// import RegisterController from './RegistrationController';
import RegisterProvider from './RegistrationProvider';

const RegisterLayout = ({ children }: WithChildren) => (
  <RegisterProvider>{children}</RegisterProvider>
);
export default RegisterLayout;
