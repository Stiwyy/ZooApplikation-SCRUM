function Map(){


    return (
        <>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.373248152969!2d8.5641468697807!3d47.385627964561145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0ea12b7a697%3A0x31929c3728d4b721!2sZoo%20Z%C3%BCrich!5e1!3m2!1sde!2sch!4v1741764261661!5m2!1sde!2sch"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default Map