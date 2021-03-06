import React from "react";
import "./browse.css";
import Sidebar from "../../components/SideBar";
import Navbar from '../../components/Navbar';
import BrowseContent from '../../components/browseContent'

const browsePage = ({ match }) => (
  <div>
    <Navbar page="browseService"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-3">
    <Sidebar />
    </div>
    <div class="col-md-7">
    <BrowseContent content="Services"/>
    </div>
    </div>
    </div>
);

export default browsePage;