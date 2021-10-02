import { Flex, Heading } from "@chakra-ui/react";

interface Props {
    title: string;
}

export const Hero: React.FC<Props> = ({ title }) => (
    <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Heading
            fontSize='10vw'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'>
            {title}
        </Heading>
    </Flex>
);

Hero.defaultProps = {
    title: "Flight Connection",
};
