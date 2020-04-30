import LoginContainer from "Components/Auth/Login/Container"
import Head from "next/head";
import Layout from "Components/Layout/Layout";


const Login = () => {

    return (
        <>
            <Layout>
                <Head>
                    <title>Login</title>
                </Head>
                <LoginContainer />
            </Layout>

        </>
    )
}


export default Login;