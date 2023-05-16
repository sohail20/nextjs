import InnerHTML from 'dangerously-set-html-content'

const MainScreen = ({ html }) => {
    return (
        <>
            <InnerHTML html={html} />
        </>
    );
}

export default MainScreen;