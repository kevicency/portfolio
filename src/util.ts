export const capitalize = (str: string) => (str ? str[0].toUpperCase() + str.substr(1) : str)

export const isBrowser = () => typeof window !== `undefined`
