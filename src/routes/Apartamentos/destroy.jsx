import { redirect } from "react-router-dom";
import { deleteApartamento } from "../../serverApart";

export async function action({params}) {
    await deleteApartamento(params.apartId);
    return redirect("/apartamentos");
}