import React from "react";
import { Form, Input, Radio } from "antd";

export default function ProfileForm() {
  
  return (
    <div>
      <Form>
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label="性别"
          name="gender"
          rules={[{ required: true, message: "选择性别" }]}
        >
          <Radio.Group>
            <Radio value={"male"}>男</Radio>
            <Radio value={"female"}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: "请输入年龄" }]}
        >
          <Input placeholder="请输入年龄" type="number" />
        </Form.Item>
        <Form.Item
          label="联系电话"
          name="phone"
          rules={[{ required: true, message: "请输入联系电话" }]}
        >
          <Input placeholder="请输入联系电话" />
        </Form.Item>

        <Form.Item
          label="电子邮件"
          name="email"
          rules={[{ required:true ,type: "email", message: "请输入有效的电子邮件" }]}
        >
          <Input placeholder="请输入电子邮件" />
        </Form.Item>

        <Form.Item
          label="部门/岗位"
          name="department"
          rules={[{ required: true, message: "请输入部门/岗位" }]}
        >
          <Input placeholder="请输入部门/岗位" />
        </Form.Item>

        <Form.Item
          label="工作年限"
          name="yearsOfWork"
          rules={[{ required: true, message: "请输入工作年限" }]}
        >
          <Input placeholder="请输入工作年限" type="number"/>
        </Form.Item>
      </Form>
    </div>
  );
}
