import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/dist/client/router";
import { useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";

const Login: React.FC<{}> = ({}) => {
    const [, login] = useLoginMutation();
    const router = useRouter();

    return (
        <Container>
            <Formik
                initialValues={{ usernameOrEmail: "", password: "" }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await login(values);

                    if (response.data?.login.errors) {
                        setErrors(toErrorMap(response.data.login.errors));
                    } else if (response.data?.login.user) {
                        if (typeof router.query.next === "string") {
                            router.push(router.query.next);
                        } else {
                            router.push("/");
                        }
                    }
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box mt={4}>
                            <InputField
                                name='usernameOrEmail'
                                label='Username or Email'
                                placeholder='username or email'
                            />
                        </Box>
                        <Box mt={4}>
                            <InputField
                                name='password'
                                label='Password'
                                placeholder='password'
                                type='password'
                            />
                        </Box>
                        <Flex>
                            <NextLink href='/forgot-password'>
                                <Link mt={2} ml='auto'>
                                    forgot password?
                                </Link>
                            </NextLink>
                        </Flex>
                        <Button
                            mt={4}
                            type='submit'
                            isLoading={isSubmitting}
                            colorScheme='teal'>
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default withUrqlClient(createUrqlClient)(Login);
