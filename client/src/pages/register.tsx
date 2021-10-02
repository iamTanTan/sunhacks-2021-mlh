import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";

import { InputField } from "../components/InputField";
// import { useRegisterMutation } from "../generated/graphql";
// import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/dist/client/router";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

const Register: React.FC<{}> = ({}) => {
    // const [, register] = useRegisterMutation();
    const router = useRouter();
    return (
        // <Formik
        //     // initialValues={{ email: "", username: "", password: "" }}
        //     // onSubmit={async (values, { setErrors }) => {
        //     //     const response = await register({ options: values });

        //     //     if (response.data?.register.errors) {
        //     //         setErrors(toErrorMap(response.data.register.errors));
        //     //     } else if (response.data?.register.user) {
        //     //         router.push("/");
        //     //     }
        //     // }}>
        //     // {({ isSubmitting }) =>
        //      >(
        <Form>
            <Box mt={4}>
                <InputField
                    name='username'
                    label='Username'
                    placeholder='username'
                />
            </Box>
            <Box mt={4}>
                <InputField name='email' label='Email' placeholder='email' />
            </Box>
            <Box mt={4}>
                <InputField
                    name='password'
                    label='Password'
                    placeholder='password'
                    type='password'
                />
            </Box>

            <Button mt={4} type='submit' isLoading={true} colorScheme='teal'>
                Register
            </Button>
        </Form>
        //     )}
        // </Formik>
    );
};

// withUrqlClient(createUrqlClient)(
export default Register;
