interface H1Props { 
title: string
}
function H1({title}: H1Props) {
    return (
       <h1 className='text-3xl font-bold hover:text-5xl'>
          {title}
        </h1>
    )
}

export default H1