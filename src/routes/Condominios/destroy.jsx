import { redirect } from "react-router-dom";
import { deleteCondominio } from "../../serverCond";

export async function action({params}) {
    await deleteCondominio(params.condId);
    return redirect("/condominios");
}