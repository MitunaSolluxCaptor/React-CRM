import "./styles/MainFrame.css"

function MainFrame() {
    return (
        <div className="home-page">
            <iframe className="rickroll" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=bd6BRU8rXqnghneJ?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    );
}

export default MainFrame;