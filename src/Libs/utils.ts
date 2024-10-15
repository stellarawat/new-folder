export const isFormValid = (phoneNumber: string, password: string) => {
    return phoneNumber.trim() !== '' && password.trim() !== '';
};