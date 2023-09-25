import { tVInterface } from './interfaces';

import { debugLog } from '@/config/logsConfig';
import { stringifyValue } from '@/helpers/functions';
import { translations } from '@/i18n';
import { FC, I18n, createContext, useContext, useEffect, useLocales } from '@/imports';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateLanguageByCode } from '@/store/slices/localizationSlice';
const i18n = new I18n(translations);

const i18nContext = createContext<tVInterface | null>(null);
export const usei18n = () => {
  const context = useContext(i18nContext);
  if (!context) {
    return null;
  }
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
    PurchaseOrder: it('PurchaseOrder'),
    DeliveryNote: it('DeliveryNote'),
    Invoice: it('Invoice'),
    Home: it('Home'),
    Settings: it('Settings'),
    POsPending: it('POsPending'),
    POsHistory: it('POsHistory'),
    DNsPending: it('DNsPending'),
    DNsHistory: it('DNsHistory'),
    InvoicePending: it('InvoicePending'),
    InvoiceHistory: it('InvoiceHistory'),
    search: it('search'),
    companyName: it('companyName'),
    PONumber: it('PONumber'),
    TotalAmount: it('TotalAmount'),
    Status: it('Status'),
    POItem: it('POItem'),
    PlantCode: it('PlantCode'),
    VPDN: it('VPDN'),
    VPNO: it('VPNO'),
    PlantName: it('PlantName'),
    MaterialNo: it('MaterialNo'),
    ShortText: it('ShortText'),
    POQty: it('POQty'),
    Unit: it('Unit'),
    DeliveryDate: it('DeliveryDate'),
    PendingQty: it('PendingQty'),
    UnitPrice: it('UnitPrice'),
    POAmount: it('POAmount'),
    ItemAmount: it('ItemAmount'),
    Profile: it('Profile'),
    ChangePassword: it('ChangePassword'),
    ChangeLanguage: it('ChangeLanguage'),
    PrivacyandPolicy: it('PrivacyandPolicy'),
    About: it('About'),
    Logout: it('Logout'),
    RoleName: it('RoleName'),
    GRNEmail: it('GRNEmail'),
    SRNEmail: it('SRNEmail'),
    InvoiceEmail: it('InvoiceEmail'),
    CurrentPassword: it('CurrentPassword'),
    NewPassword: it('NewPassword'),
    ConfirmPassword: it('ConfirmPassword'),
    AreYouSureYouWanttoLogout: it('AreYouSureYouWanttoLogout'),
    Pleasetryagainlater: it('Pleasetryagainlater'),
    OTPsenttoyourregisteredemail: it('OTPsenttoyourregisteredemail'),
    Havenottrecievedtheverificationcode: it('Havenottrecievedtheverificationcode'),
    Resend: it('Resend'),
    Verify: it('Verify'),
    buttonclickonotp: it('buttonclickonotp'),
    PleaseenteryourUserNamepasswordresetOTPwillbesenttoyourregisteredmobilenumber: it(
      'PleaseenteryourUserNamepasswordresetOTPwillbesenttoyourregisteredmobilenumber'
    ),
    Success: it('Success'),
    OK: it('OK'),
    MinValueError: it('MinValueError'),
    MaxValueError: it('MaxValueError'),
    newPasswordshouldhaveminimum8characterswithaCapitalletterandaSpecialcharacter: it(
      'newPasswordshouldhaveminimum8characterswithaCapitalletterandaSpecialcharacter'
    ),
    NewPasswordandConfirmPassworddidnotmatch: it('NewPasswordandConfirmPassworddidnotmatch'),
    PurchaseOrderInfo: it('PurchaseOrderInfo'),
    DeliveryNoteInfo: it('DeliveryNoteInfo'),
    InvoiceNoteInfo: it('InvoiceNoteInfo'),
    English: it('English'),
    Kannada: it('Kannada'),
    Hindi: it('Hindi'),
    Youchangedlanguageto: it('Youchangedlanguageto'),

    DeliveryNoteDate: it('DeliveryNoteDate'),
    PleasechooseDeliveryNoteDate: it('PleasechooseDeliveryNoteDate'),
    DeliveryNoteNumber: it('DeliveryNoteNumber'),
    MaximumlengthoftheDeliveryNoteNumberis7: it('MaximumlengthoftheDeliveryNoteNumberis7'),
    PleaseEnterDeliveryNote: it('PleaseEnterDeliveryNote'),
    TotalQuantity: it('TotalQuantity'),
    minimumlengthoftheTotalQuantityshouldbe3: it('minimumlengthoftheTotalQuantityshouldbe3'),
    maximumlengthoftheTotalQuantityis30: it('maximumlengthoftheTotalQuantityis30'),
    PleaseEnterTotalQuantity: it('PleaseEnterTotalQuantity'),
    minimumlengthoftheTotalAmountshouldbe3: it('minimumlengthoftheTotalAmountshouldbe3'),
    maximumlengthoftheTotalAmountis30: it('maximumlengthoftheTotalAmountis30'),
    PleaseEnterTotalAmount: it('PleaseEnterTotalAmount'),
    HeaderText: it('HeaderText'),
    minimumlengthoftheHeaderTextshouldbe6: it('minimumlengthoftheHeaderTextshouldbe6'),
    maximumlengthoftheHeaderTextis30: it('maximumlengthoftheHeaderTextis30'),
    PleaseEnterHeaderText: it('PleaseEnterHeaderText'),
    DeliveryPersonEmail: it('DeliveryPersonEmail'),
    minimumlengthoftheDeliveryPersonEmailshouldbe6: it('minimumlengthoftheDeliveryPersonEmailshouldbe6'),
    maximumlengthoftheDeliveryPersonEmailis30: it('maximumlengthoftheDeliveryPersonEmailis30'),
    PleaseEnterDeliveryPersonEmail: it('PleaseEnterDeliveryPersonEmail'),
    DeliveryPersonName: it('DeliveryPersonName'),
    minimumlengthoftheDeliveryPersonNameshouldbe4: it('minimumlengthoftheDeliveryPersonNameshouldbe4'),
    maximumlengthoftheDeliveryPersonNameis15: it('maximumlengthoftheDeliveryPersonNameis15'),
    PleaseEnterDeliveryPersonName: it('PleaseEnterDeliveryPersonName'),
    PostingDate: it('PostingDate'),
    Nodatafound: it('Nodatafound'),
    Unableadddeliverynote: it('Unableadddeliverynote'),
    Unabletouploadfile: it('Unabletouploadfile'),
    Filesizehastobelessthan3mb: it('Filesizehastobelessthan3mb'),
    Filetypenotapplicable: it('Filetypenotapplicable'),
    Pleaseenterdeliveryquantity: it('Pleaseenterdeliveryquantity'),
    DeliveryQtyhastobelessthanPendingQty: it('DeliveryQtyhastobelessthanPendingQty'),
    Attachments: it('Attachments'),
    ChooseFile: it('ChooseFile'),
    NotePleaseSelectjpegpngpdfdocdocxfileFormats: it('NotePleaseSelectjpegpngpdfdocdocxfileFormats'),
    Maxfilesizehastobelessthan3MB: it('Maxfilesizehastobelessthan3MB'),

    Goods: it('Goods'),
    Service: it('Service'),
    Invoive: it('Invoive'),
    EInvoice: it('EInvoice'),
    BranchCode: it('BranchCode'),
    minimumlengthoftheBranchCodeshouldbe3: it('minimumlengthoftheBranchCodeshouldbe3'),
    maximumlengthoftheBranchCodeis30: it('maximumlengthoftheBranchCodeis30'),
    PleaseEnterBranchCode: it('PleaseEnterBranchCode'),
    ShipmentNo: it('ShipmentNo'),
    InvoiceDate: it('InvoiceDate'),
    PleasechooseInvoiceDate: it('PleasechooseInvoiceDate'),
    BaseLineDate: it('BaseLineDate'),
    PleasechoosebaseLineDate: it('PleasechoosebaseLineDate'),
    InvoiceNumber: it('InvoiceNumber'),
    MaximumlengthoftheInvoiceNumberis7: it('MaximumlengthoftheInvoiceNumberis7'),
    PleaseEnterInvoice: it('PleaseEnterInvoice'),
    ProjectOwnerEmailID: it('ProjectOwnerEmailID'),
    ProjectOwnerName: it('ProjectOwnerName'),
    Currency: it('Currency'),
    Amount: it('Amount'),
    minimumlengthoftheAmountshouldbe3: it('minimumlengthoftheAmountshouldbe3'),
    maximumlengthoftheAmountis30: it('maximumlengthoftheAmountis30'),
    PleaseEnterAmount: it('PleaseEnterAmount'),
    VatAmount: it('VatAmount'),
    InvoiceFor: it('InvoiceFor'),
    Companycode: it('Companycode'),
    Card: it('Card'),
    TypeofInvoice: it('TypeofInvoice'),
    DeliveryQuantityhastolessthanSVPendingQty: it('DeliveryQuantityhastolessthanSVPendingQty'),
    SVPendingQTY: it('SVPendingQTY'),
    AddDelivery: it('AddDelivery'),
    DeliveryingQTY: it('DeliveryingQTY'),
    CaluculteTax: it('CaluculteTax'),
  };
  debugLog('harish===', tV.Username);
  return <i18nContext.Provider value={tV}>{props.children}</i18nContext.Provider>;
};

export default I18nProvider;
