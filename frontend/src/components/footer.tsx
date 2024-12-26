const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={'border-t border-text h-24 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex justify-end items-center'}>
            <div className={'h-full px-3 border-x-0 md:border-x border-x-text flex items-center'}>
                <p className={'text-base md:text-sm lg:text-lg font-extralight'}>{`© ${currentYear} Oscar PALISSOT. Tous droits réservés.`}</p>
            </div>
        </footer>
    )
}

export default Footer;