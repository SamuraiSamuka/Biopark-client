import { redirect } from "react-router-dom";
import { deleteLocatario } from "../../serverLocat";

export async function action({params}) {
    await deleteLocatario(params.locatId)
    return redirect("/locatarios");
}