import { FunctionComponent } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
    let navigate = useNavigate();

    let formik = useFormik({
        initialValues: {
            clientId: "",
        }, validationSchema: yup.object({
            clientId: yup.string().required("נדרש להכניס מספר תעודת זהות").test('len', 'האורך אמור להיות 9 ספרות', val => val.length === 9),

        }),
        onSubmit: (values: any, { resetForm }) => {
            navigate(`/id/${values.clientId}`)
        }
    })
    return (<>
        <div className="container">
            <h5 className="display-5">בדיקת לקוח</h5>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="clientId"
                        placeholder="123456789"
                        name="clientId"
                        value={formik.values.clientId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="clientId">תעודת זהות לבדיקה</label>
                    {formik.touched.clientId && formik.errors.clientId && (
                        <small className="text-danger">{formik.errors.clientId as string}</small>
                    )}
                </div>


                <button type="submit" className="btn btn-info w-100 my-3"
                    disabled={!formik.isValid || !formik.dirty}>
                    <i className="fa-solid fa-angles-left"></i>
                    בדיקה
                    <i className="fa-solid fa-angles-right"></i>
                </button>
                {/* <i class=""></i> */}
            </form>
        </div>


    </>);
}

export default Main;