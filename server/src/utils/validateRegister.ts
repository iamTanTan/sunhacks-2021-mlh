import { UsernamePasswordInput } from "./UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
    // validate username length
    if (options.username.length <= 5) {
        return [
            {
                field: "username",
                message: "the username entered is too short",
            },
        ];
    }

    //validate no @ in username
    if (options.username.includes("@")) {
        return [
            {
                field: "username",
                message: "the username should not contain an @ symbol",
            },
        ];
    }

    // validate email length
    if (options.email.length <= 8 || !options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "invalid email",
            },
        ];
    }

    // validate password length
    if (options.password.length <= 8) {
        return [
            {
                field: "password",
                message: "the password entered is too short",
            },
        ];
    }
    return null;
};
