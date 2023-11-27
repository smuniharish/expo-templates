import { tVInterface } from './interfaces';

import { debugLog } from '@/config/logsConfig';
import { stringifyValue } from '@/helpers/functions';
import { translations } from '@/i18n';
import { english } from '@/i18n/languages';
import { FC, I18n, createContext, useContext, useEffect, useLocales } from '@/imports';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateLanguageByCode } from '@/store/slices/localizationSlice';
const i18n = new I18n(translations);

const i18nContext = createContext<tVInterface>(english);
export const Usei18n = () => {
  const context = useContext(i18nContext);
  return context;
};
const I18nProvider: FC<any> = (props: any) => {
  const userLocales = useLocales();
  debugLog('userLocales', stringifyValue(userLocales));
  const locale = useAppSelector((state: any) => state.localization.locale);
  const dispatch = useAppDispatch();
  debugLog('locale', locale);
  // Set the locale once at the begining of your app.
  i18n.locale = locale;

  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.enableFallback = true;
  useEffect(() => {
    if (userLocales) {
      dispatch(updateLanguageByCode({ locale: userLocales[0].languageCode }));
    }
  }, []);
  const it = (value: string) => {
    return i18n.t(value);
  };
  const tV: tVInterface = {
    Username: it('Username'),
    SkeniPayIdEmailWalletid: it('SkeniPayIdEmailWalletid'),
    pin: it('pin'),
    ValueIsRequired: it('ValueIsRequired'),
    MinimumLengthOftheUsernmeShouldbe6: it('MinimumLengthOftheUsernmeShouldbe6'),
    maximumlengthoftheusernameis30: it('maximumlengthoftheusernameis30'),
    Password: it('Password'),
    PasswordShouldHaveMinimum8CharactersWithaCapitalLetterAndaSpecialCharacter: it(
      'PasswordShouldHaveMinimum8CharactersWithaCapitalLetterAndaSpecialCharacter'
    ),
    ForgotPassword: it('ForgotPassword'),
    Submit: it('Submit'),
    Login: it('Login'),
    InvalidUsernameandPassword: it('InvalidUsernameandPassword'),
    Usernameismandatory: it('Usernameismandatory'),
    Dashboard: it('Dashboard'),
    Home: it('Home'),
    Settings: it('Settings'),
    ForgotYourPIN: it('ForgotYourPIN'),
    Register: it('Register'),
    AreYouSureYouWanttoLogout: it('AreYouSureYouWanttoLogout'),
    Payment: it('Payment'),
    Request: it('Request'),
    Scan2Pay: it('Scan2Pay'),
    sendMoney: it('sendMoney'),
    MyAccount: it('MyAccount'),
    TransactionDetails: it('TransactionDetails'),
    SkeniPayIdEmail: it('SkeniPayIdEmail'),
    OTP: it('OTP'),
    LengthOftheOtpShouldbe6: it('LengthOftheOtpShouldbe6'),
    OTPIsRequired: it('OTPIsRequired'),
    PROCEED: it('PROCEED'),
    Useralreadyexistspleaselogin: it('Useralreadyexistspleaselogin'),
    PleaseEnterSkeniPayIdEmail: it('PleaseEnterSkeniPayIdEmail'),
    Pleaseprovidealldetails: it('Pleaseprovidealldetails'),
    EnterOTPsenttoyouremail: it('EnterOTPsenttoyouremail'),
    FirstName: it('FirstName'),
    LastName: it('LastName'),
    MinimumLengthOftheFirstnameShouldbe6: it('MinimumLengthOftheFirstnameShouldbe6'),
    maximumlengthoftheFirstnameis30: it('maximumlengthoftheFirstnameis30'),
    Firstnameismandatory: it('Firstnameismandatory'),
    MinimumLengthOftheLastnameShouldbe6: it('MinimumLengthOftheLastnameShouldbe6'),
    maximumlengthoftheLastnameis30: it('maximumlengthoftheLastnameis30'),
    Lastnameismandatory: it('Lastnameismandatory'),
    Email: it('Email'),
    MinimumLengthOftheEmailShouldbe6: it('MinimumLengthOftheEmailShouldbe6'),
    maximumlengthoftheemailis30: it('maximumlengthoftheemailis30'),
    Emailisnotvalid: it('Emailisnotvalid'),
    Address: it('Address'),
    MinimumLengthOftheAddressShouldbe6: it('MinimumLengthOftheAddressShouldbe6'),
    maximumlengthoftheAddressis30: it('maximumlengthoftheAddressis30'),
    Addressismandatory: it('Addressismandatory'),
    DateOfBirth: it('DateOfBirth'),
    DOBIsRequired: it('DOBIsRequired'),
    Male: it('Male'),
    Female: it('Female'),
    Others: it('Others'),
    PhoneNumber: it('PhoneNumber'),
    LengthOfthePhoneNumberShouldbe10: it('LengthOfthePhoneNumberShouldbe10'),
    PhoneNumberIsRequired: it('PhoneNumberIsRequired'),
    Gender: it('Gender'),
    REGISTER: it('REGISTER'),
    EnterNewPIN: it('EnterNewPIN'),
    PINmustbe6numericdigitonly: it('PINmustbe6numericdigitonly'),
    ReEnterNewPIN: it('ReEnterNewPIN'),
    RegistrationSuccessfulPleaseLogin: it('RegistrationSuccessfulPleaseLogin'),
    Networkerror: it('Networkerror'),
    ResetPINSuccessful: it('ResetPINSuccessful'),
    Thepindonotmatch: it('Thepindonotmatch'),
    Verification: it('Verification'),
    PleaseenterthePIN: it('PleaseenterthePIN'),
    PAYANG: it('PAYANG'),
    StoresName: it('StoresName'),
    ANG: it('ANG'),
    NA: it('NA'),
    REPEATTRANSACTION: it('REPEATTRANSACTION'),
    BUTTON: it('BUTTON'),
    Status: it('Status'),
    TransactionType: it('TransactionType'),
    TransactionId: it('TransactionId'),
    DateTime: it('DateTime'),
    namenotfound: it('namenotfound'),
    VALIDATEPIN: it('VALIDATEPIN'),
    GOTOHOME: it('GOTOHOME'),
    Userdoesnotexistorwrongpin: it('Userdoesnotexistorwrongpin'),
    Paymentsuccessful: it('Paymentsuccessful'),
    WalletId: it('WalletId'),
    WalletIdmustbe8numericdigitonly: it('WalletIdmustbe8numericdigitonly'),
    Amount: it('Amount'),
    Amountisrequired: it('Amountisrequired'),
    Desciptionoptional: it('Desciptionoptional'),
    PREVIEW: it('PREVIEW'),
    StoreName: it('StoreName'),
    Cantperformthistransactionwithownaccount: it('Cantperformthistransactionwithownaccount'),
    Invaliduser: it('Invaliduser'),
    CanperformthistransactionwithMerchant: it('CanperformthistransactionwithMerchant'),
    CantperformthistransactionwithCustomer: it('CantperformthistransactionwithCustomer'),
    Somethingwentwrong: it('Somethingwentwrong'),
    Name: it('Name'),
  };
  return <i18nContext.Provider value={tV}>{props.children}</i18nContext.Provider>;
};

export default I18nProvider;
