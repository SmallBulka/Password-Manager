type GeneratePasswordOptions = {
    length: number;
    incUppercase: boolean;
    incLowercase: boolean;
    incNumbers: boolean;
    incSymbols: boolean;
}
const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()<>,.?/[]{}-=_+|/';   
export const getNewPassword = () => {
    return generatePassword({
      length: 4,
      incUppercase: true,
      incLowercase: true,
      incNumbers: true,
      incSymbols: true,
    });
}

function generatePassword({
    length,
    incUppercase,
    incLowercase,
    incNumbers,
    incSymbols,
  }: GeneratePasswordOptions) {
    let chars = "";
    if (incUppercase) chars += UPPERCASE_LETTERS;
    if (incLowercase) chars += LOWERCASE_LETTERS;
    if (incNumbers) chars += NUMBERS;
    if (incSymbols) chars += SYMBOLS;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  
export default generatePassword ;