import Head from "next/head";
import Layout from "../Components/Layout/Layout";
import RegisterGrid from "../Components/Auth/Register/Grid";


const Login = () => {

    return (
        <>
            <Layout>
                <Head>
                    <title>Register</title>
                </Head>
                <RegisterGrid />
            </Layout>

        </>
    )
}


export default Login;