import { Stack } from "@chakra-ui/react";

export const Main: React.FC<any> = (props) => (
    <Stack
        spacing='1.5rem'
        width='100%'
        maxWidth='48rem'
        mt='-50vh'
        pt='8rem'
        px='1rem'
        {...props}
    />
);
