import React, {useEffect} from "react";
import "./MediafileCard.scss"

export default function MediafileCard({mediafile}) {

    useEffect(() => {
        console.log("MediafileCard:")
        console.log(mediafile)
    }, [])

    return(
        <section className="mediafileCard__container">
            <button
                className="mediafileCard__header"
            >
                {mediafile.fileName}
            </button>

            <p className="mediafileCard__title"><strong>Project: </strong>{mediafile.parentProjectName}</p>
            <p className="mediafileCard__title"><strong>Director: </strong>{mediafile.director}</p>
            <p className="mediafileCard__title"><strong>Producer: </strong>{mediafile.producer}</p>
            <p className="mediafileCard__title"><strong>Project Host: </strong>{mediafile.projectHost}</p>
        </section>
    );

}