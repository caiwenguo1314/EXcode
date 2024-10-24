import React, { useState } from "react";
import { Form, Input, Radio, Select, Rate, Checkbox, Button, Pagination, Layout } from "antd";

const { Option } = Select;
const { Footer, Content } = Layout;
const formItems = [
  {
    label: "姓名",
    name: "name",
    rules: [{ required: true, message: "请输入姓名" }],
    component: <Input placeholder="请输入姓名" />,
  },
  {
    label: "性别",
    name: "gender",
    rules: [{ required: true, message: "选择性别" }],
    component: (
      <Radio.Group>
        <Radio value="male">男</Radio>
        <Radio value="female">女</Radio>
      </Radio.Group>
    ),
  },
  {
    label: "年龄",
    name: "age",
    rules: [{ required: true, message: "请输入年龄" }],
    component: <Input placeholder="请输入年龄" type="number" />,
  },
  {
    label: "联系电话",
    name: "phone",
    rules: [
      { required: true, message: "请输入联系电话" },
      {
        validator: (_, value) => {
          const phoneRegex = /^1[3-9]\d{9}$/;
          if (!value || phoneRegex.test(value)) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("请输入有效的中国大陆手机号码"));
        },
      },
    ],
    component: <Input placeholder="请输入联系电话" />,
  },
  {
    label: "电子邮件",
    name: "email",
    rules: [{ required: true, type: "email", message: "请输入有效的电子邮件" }],
    component: <Input placeholder="请输入电子邮件" />,
  },
  {
    label: "部门/岗位",
    name: "department",
    rules: [{ required: true, message: "请输入部门/岗位" }],
    component: <Input placeholder="请输入部门/岗位" />,
  },
  {
    label: "工作年限",
    name: "yearsOfWork",
    rules: [{ required: true, message: "请输入工作年限" }],
    component: <Input placeholder="请输入工作年限" type="number" />,
  },
  {
    label: "最高学历",
    name: "education",
    component: (
      <Select>
        <Option value="highschool">高中</Option>
        <Option value="associate">专科</Option>
        <Option value="bachelor">本科</Option>
        <Option value="master">硕士</Option>
        <Option value="doctor">博士</Option>
      </Select>
    ),
  },
  {
    label: "专业",
    name: "major",
    component: <Input placeholder="请输入专业" />,
  },
  {
    label: "毕业院校",
    name: "school",
    component: <Input placeholder="请输入毕业院校" />,
  },
  {
    label: "当前工作岗位的满意度",
    name: "jobSatisfaction",
    component: <Rate />,
  },
  {
    label: "工作量是否合理",
    name: "workload",
    component: (
      <Radio.Group>
        <Radio value="tooMuch">过多</Radio>
        <Radio value="justRight">合适</Radio>
        <Radio value="tooLittle">过少</Radio>
      </Radio.Group>
    ),
  },
  {
    label: "与同事合作关系",
    name: "teamWork",
    component: <Rate />,
  },
  {
    label: "管理层对工作的支持",
    name: "managementSupport",
    component: <Rate />,
  },
  {
    label: "专业技能",
    name: ["skills", "professional"],
    component: <Rate />,
  },
  {
    label: "计算机操作能力",
    name: ["skills", "computer"],
    component: <Rate />,
  },
  {
    label: "领导力",
    name: ["skills", "leadership"],
    component: <Rate />,
  },
  {
    label: "时间管理能力",
    name: ["skills", "timeManagement"],
    component: <Rate />,
  },
  {
    label: "沟通能力",
    name: ["skills", "communication"],
    component: <Rate />,
  },
  {
    label: "是否愿意参加公司提供的培训课程",
    name: "willingToTrain",
    component: (
      <Radio.Group>
        <Radio value="yes">愿意</Radio>
        <Radio value="no">不愿意</Radio>
      </Radio.Group>
    ),
  },
  {
    label: "希望公司提供哪些类型的培训",
    name: "trainingTypes",
    component: (
      <Checkbox.Group>
        <Checkbox value="professionalSkills">专业技能培训</Checkbox>
        <Checkbox value="leadership">领导力培训</Checkbox>
        <Checkbox value="projectManagement">项目管理培训</Checkbox>
        <Checkbox value="communication">沟通技巧培训</Checkbox>
      </Checkbox.Group>
    ),
  },
  {
    label: "职业发展目标",
    name: "careerGoal",
    component: <Input.TextArea placeholder="请输入您的职业发展目标" />,
  },
  {
    label: "对工作环境的满意度",
    name: "workEnvironment",
    component: <Rate />,
  },
  {
    label: "对公司福利制度的评价",
    name: "companyBenefits",
    component: <Rate />,
  },
  {
    label: "对工作场所安全性与健康设施的满意度",
    name: "workplaceSafety",
    component: <Rate />,
  },
  {
    label: "您认为公司有哪些需要改进的地方？",
    name: "improvements",
    component: <Input.TextArea placeholder="请输入您的意见" />,
  },
  {
    label: "对公司未来发展的建议",
    name: "developmentSuggestions",
    component: <Input.TextArea placeholder="请输入您的建议" />,
  },
  {
    label: "您是否愿意提供进一步反馈？",
    name: "furtherFeedback",
    component: (
      <Radio.Group>
        <Radio value="yes">是</Radio>
        <Radio value="no">否</Radio>
      </Radio.Group>
    ),
  },
  {
    label: "",
    name: "Button",
    component: (
      <Button type="primary" htmlType="button">
        提交
      </Button>
    ),
  }
];
const PAGE_SIZE = 8;
export default function ProfileForm() {
  // 定义一个名为FormData的状态变量，初始值为空数组
  const [FormData, setFormData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // 提交表单数据
  const onFinish = (values) => {
    // 将表单数据添加到formData中
    setFormData((prevData) => [
      ...prevData,
      {
        ...values,
        skills: {
          // 将技能数据转换为字符串
          professional: values.skills.professional.toString(),
          computer: values.skills.computer.toString(),
          leadership: values.skills.leadership.toString(),
          timeManagement: values.skills.timeManagement.toString(),
          communication: values.skills.communication.toString(),
        },
      },
    ]);
    // 打印提交成功的消息和表单数据
    console.log("提交成功！", values);
  };
  // 计算总条目数
  const totalItems = formItems.length;
  // 计算总页数
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  // 计算当前页的起始索引
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  // 计算当前页的条目
  const currentItems = formItems.slice(startIndex, startIndex + PAGE_SIZE);


  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            gender: "male",
            education: "bachelor",
            skills: {
              professional: 3,
              computer: 3,
              leadership: 3,
              timeManagement: 3,
              communication: 3,
            },
          }}
          style={{ maxWidth: 300, margin: "0 auto" }}
        >
          {currentItems.map((item) => (
            <Form.Item key={item.name} label={item.label} name={item.name} rules={item.rules}>
              {item.component}
            </Form.Item>
          ))}
        </Form>
        <Footer style={{ textAlign: 'center' }}>
          <Pagination style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#fff',
            padding: '10px',
            textAlign: 'center',
            boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={totalItems}
            onChange={(page) => setCurrentPage(page)} />
        </Footer>
      </Layout>
    </div>
  );
}
