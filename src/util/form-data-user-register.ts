import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useFormDataUserRegister = () => {

    const { name, dateBorn, email, cpf, phone } = useSelector(
        (state: RootState) => state.user
    );
    const { cep, city, uf, neighborhood, street, complement } = useSelector(
        (state: RootState) => state.address
    );
    const { newPassword } = useSelector(
        (state: RootState) => state.validationPassword
    );

    const formData = {
        name,
        dateBorn,
        email,
        cpf,
        phone,
        password: newPassword,
        userAdress: {
            cep,
            city,
            uf,
            neighborhood,
            street,
            complement,
        },
    };

    return formData
};