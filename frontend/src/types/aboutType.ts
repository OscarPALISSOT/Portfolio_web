type AboutType = {
    link: string;
    title: string;
    subtitle: string;
    description: string;
}

export const defaultAbout = {
    link: '',
    title: '',
    subtitle: '',
    description: '',
} satisfies AboutType;

export default AboutType;