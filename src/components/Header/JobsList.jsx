import React from "react";
import { Menu, Space } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pagePaths } from "../../paths";

const JobsList = () => {
  const jobsList = useSelector((state) => state.jobs?.jobsList);
  const navigate = useNavigate();

  const renderMenuItems = (job) =>
    job.dsNhomChiTietLoai?.map((nhomChiTiet) => (
      <Menu.ItemGroup key={nhomChiTiet.id} title={nhomChiTiet.tenNhom}>
        {nhomChiTiet.dsChiTietLoai?.map((chiTiet) => (
          <Menu.Item
            onClick={() => navigate(pagePaths.categories(chiTiet.id))}
            key={`${nhomChiTiet.id}-${chiTiet.id}`}
          >
            {chiTiet.tenChiTiet}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    ));

  return (
    <div className="header-menu container mx-auto">
      <div className="space-x-4">
        <Menu mode="horizontal">
          {jobsList?.map((job) => (
            <Menu.SubMenu
              key={job.id}
              title={<Space>{job.tenLoaiCongViec}</Space>}
              onTitleClick={() => navigate(pagePaths.title(job.id))}
            >
              {renderMenuItems(job)}
            </Menu.SubMenu>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default JobsList;
