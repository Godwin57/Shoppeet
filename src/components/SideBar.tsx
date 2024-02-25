function SideBar({displaySideBar}:{displaySideBar:boolean}) {
    return (
        <div className={displaySideBar? '' : 'hidden'}>
            This is the side bar of this site
        </div>
    );
}

export default SideBar;