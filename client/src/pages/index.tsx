import {
    Link as ChakraLink,
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

const Index = () => (
    <Container height='100vh'>
        <Hero title='Destination Chat' />
        <Main>
            <Text fontSize='2xl'>
                Learn about your destination and more from locals and other
                travels
            </Text>
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
        </Main>

        <DarkModeSwitch />
    </Container>
);

export default withUrqlClient(createUrqlClient)(Index);
