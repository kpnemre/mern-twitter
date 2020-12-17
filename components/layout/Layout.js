import React from 'react'
import LayoutExtra from "./LayoutExtra";
import LayoutMain from "./LayoutMain";
import LayoutSidebar from "./LayoutSidebar";
import styles from "./Layout.module.css";
import useWindowSize from "../../hooks/useWindowSize"

const Layout = ({children}) => {
    const size = useWindowSize();
    return (
        <div className={styles.Layout}>
            <LayoutSidebar />
            <LayoutMain>{children} </LayoutMain>
            {
                size.width > 990  && <LayoutExtra />
            }
            {/* <LayoutExtra /> */}
            
        </div>
    )
}

export default Layout
