const SectionHEading = ({heading, subheading}) =>{
    return(
        <div className="text-center py-16">
            <h2 className="text-5xl font-semibold text-center">
                {heading}
            </h2>
            <p className="w-1/2 my-6 text-small-text font-medium mx-auto text-center">{subheading}</p>
        </div>
    )
}

export default SectionHEading