type ContactType = {
    link: string;
    title: string;
    github: string;
    linkedin: string;
}

export const defaultContact = {
    link: '',
    title: '',
    github: '',
    linkedin: '',
} satisfies ContactType;

export default ContactType;