import { Link as ChakraLink, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
    <Container height='100vh'>
        <Main>
            <List spacing={3} my={0}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <ChakraLink
                        isExternal
                        href='https://chakra-ui.com'
                        flexGrow={1}
                        mr={2}>
                        Chakra UI <LinkIcon />
                    </ChakraLink>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <ChakraLink
                        isExternal
                        href='https://nextjs.org'
                        flexGrow={1}
                        mr={2}>
                        Next.js <LinkIcon />
                    </ChakraLink>
                </ListItem>
            </List>
        </Main>

        <DarkModeSwitch />
    </Container>
);

export default Index;
