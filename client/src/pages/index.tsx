import {
    Link as ChakraLink,
    List,
    ListIcon,
    ListItem,
    Text,
    Box,
    Button,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { InputField } from "../components/InputField";
import { Hero } from "../components/Hero";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useMeQuery } from "../generated/graphql";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";

const Index = () => {
    const [data] = useMeQuery();
    const router = useRouter();
    return (
        <Container height='100vh'>
            <Main>
                <Hero title='Destination Chat' />
                <Text fontSize='2xl'>
                    Learn about your destination and more from locals and other
                    travels
                </Text>
                {data ? (
                    <Formik
                        initialValues={{ flightnumber: "" }}
                        onSubmit={async (values, { setErrors }) => {
                            // const response = await submitFlightData(values);

                            // if (response.data?.login.errors) {

                            // } else if (response.data?.login.user) {
                            //     if (typeof router.query.next === "string") {
                            //         router.push(router.query.next);
                            //     } else {
                            //         router.push("/");
                            //     }
                            // }
                            router.push("/login");
                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Box mt={4}>
                                    <InputField
                                        name='Flight Number'
                                        label='American Airlines Flight Number'
                                        placeholder='flight number'></InputField>{" "}
                                </Box>
                                <Button
                                    mt={4}
                                    type='submit'
                                    isLoading={isSubmitting}
                                    colorScheme='teal'>
                                    Search for person from destination to talk
                                    with
                                </Button>{" "}
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <List spacing={3} my={0}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            <ChakraLink href='/login' flexGrow={1} mr={2}>
                                Login <LinkIcon />
                            </ChakraLink>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            <ChakraLink href='/register' flexGrow={1} mr={2}>
                                Sign-up <LinkIcon />
                            </ChakraLink>
                        </ListItem>
                    </List>
                )}
            </Main>
        </Container>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
