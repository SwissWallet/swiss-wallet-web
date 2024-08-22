import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useFormDataUserRegister = () => {

    const { name, dateBorn, email, phone } = useSelector(
        (state: RootState) => state.user
    );
    const { city,  street, complement } = useSelector(
        (state: RootState) => state.address
    );

    const formDataAuthUser = {

        username: email,
        name,
        birthDate: dateBorn,
        phone,
        address: {
            street,
            city,
            number: complement
        }
    }


    return formDataAuthUser;
}