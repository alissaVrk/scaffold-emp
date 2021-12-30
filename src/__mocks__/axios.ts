type Values = undefined | Record<string, unknown>;
let signIn: Values;
const axios = {
    reset: () => {
        signIn = undefined;
    },
    mockSignIn: (data: Values) => {
        signIn = data;
    },
    post: () => {
        return Promise.resolve({
            data: signIn
        });
    }
}

export default axios;
