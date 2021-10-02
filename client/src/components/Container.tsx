import { Flex } from "@chakra-ui/react";

export const Container: React.FC<any> = (props) => {
    const bgColor = "gray.900";

    const color = "white";
    return (
        <Flex
            direction='column'
            alignItems='center'
            justifyContent='flex-start'
            bg={bgColor}
            color={color}
            {...props}
        />
    );
};
