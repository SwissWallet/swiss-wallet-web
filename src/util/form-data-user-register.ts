import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useFormDataUserRegister = () => {

    const { name, dateBorn, email, cpf, phone } = useSelector(
        (state: RootState) => state.user
    );
    const { cep, city, uf, street, complement } = useSelector(
        (state: RootState) => state.address
    );
    const { newPassword } = useSelector(
        (state: RootState) => state.validationPassword
    );

    const formData = {
        name,
        birthDate: dateBorn,
        username: email,
        cpf,
        phone,
        password: newPassword,
        userAdress: {
            zipCode: cep,
            city,
            uf,
            street,
            number: complement,
        },
    };

    return formData
};