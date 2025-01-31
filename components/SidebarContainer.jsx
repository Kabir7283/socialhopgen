'use client'
import { Drawer } from "antd";
import css from "@/styles/Sidebar.module.css";
import useWindowDimensions from "@/hooks/useWindowsDimensions";
const SidebarContainer = ({
  isDrawrOpen,
  setIsDrawerOpen,
  children,
  ...other
}) => {
  const { width } = useWindowDimensions();

  if (width <= 1268) {
    return (
      <Drawer
        {...other}
        placement={"left"}
        open={isDrawrOpen}
        onClose={() => setIsDrawerOpen(false)}
        height={"100%"}
      >
        <div className={css.drawerContainer}>{children}</div>
      </Drawer>
    );
  }
  return children;
};

export default SidebarContainer;