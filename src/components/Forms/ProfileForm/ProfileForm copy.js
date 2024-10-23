import React from "react";
import { Form, Input, Radio, Select, Rate, Checkbox, Button, Pagination } from "antd";
import { useState } from "react";

export default function ProfileForm() {
  const [FormData, setFormData] = useState([]);
  const { Option } = Select;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1); // 记录当前页面

  // 定义表单数据数组
  const formItems = [
    {
      label: "姓名",
      name: "name",
      type: "input",
      rules: [{ required: true, message: "请输入姓名" }],
      placeholder: "请输入姓名",
    },
    {
      label: "性别",
      name: "gender",
      type: "radio",
      options: [{ label: "男", value: "male" }, { label: "女", value: "female" }],
    },
    {
      label: "年龄",
      name: "age",
      type: "input",
      rules: [{ required: true, message: "请输入年龄" }],
      placeholder: "请输入年龄",
      inputType: "number",
    },
    {
      label: "联系电话",
      name: "phone",
      type: "input",
      rules: [
        { required: true, message: "请输入联系电话" },
        {
          // 验证手机号码是否有效
          validator: (_, value) => {
            // 定义手机号码的正则表达式
            const phoneRegex = /^1[3-9]\d{9}$/;
            // 如果手机号码为空或者符合正则表达式，则验证通过
            if (!value || phoneRegex.test(value)) {
              return Promise.resolve();
            }
            // 否则，返回错误信息
            return Promise.reject(
              new Error("请输入有效的中国大陆手机号码")
            );
          },
        },
      ],
      placeholder: "请输入联系电话",
    },
    {
      label: "电子邮件",
      name: "email",
      type: "input",
      rules: [
        { required: true, type: "email", message: "请输入有效的电子邮件" },
      ],
      placeholder: "请输入电子邮件",
    },
    {
      label: "部门/岗位",
      name: "department",
      type: "input",
      rules: [{ required: true, message: "请输入部门/岗位" }],
      placeholder: "请输入部门/岗位",
    },
    {
      label: "工作年限",
      name: "yearsOfWork",
      type: "input",
      rules: [{ required: true, message: "请输入工作年限" }],
      placeholder: "请输入工作年限",
      inputType: "number", 
    },
    {
      label: "最高学历",
      name: "education",
      type: "select",
      options: [
        { label: "高中", value: "highschool" },
        { label: "专科", value: "associate" },
        { label: "本科", value: "bachelor" },
        { label: "硕士", value: "master" },
        { label: "博士", value: "doctor" },
      ],
    },
    {
      label: "专业",
      name: "major",
      type: "input",
      placeholder: "请输入专业",
    },
    {
      label: "毕业院校",
      name: "school",
      type: "input",
      placeholder: "请输入毕业院校",
    },
    {
      label: "当前工作岗位的满意度",
      name: "jobSatisfaction",
      type: "rate",
    },
    {
      label: "工作量是否合理",
      name: "workload",
      type: "radio",
      options: [
        { label: "过多", value: "tooMuch" },
        { label: "合适", value: "justRight" },
        { label: "过少", value: "tooLittle" },
      ],
    },
    {
      label: "与同事合作关系",
      name: "teamWork",
      type: "rate",
    },
    {
      label: "管理层对工作的支持",
      name: "managementSupport",
      type: "rate",
    },
    {
      label: "专业技能",
      name: ["skills", "professional"], 
      type: "rate",
    },
    {
      label: "计算机操作能力",
      name: ["skills", "computer"],
      type: "rate",
    },
    {
      label: "领导力",
      name: ["skills", "leadership"],
      type: "rate",
    },
    {
      label: "时间管理能力",
      name: ["skills", "timeManagement"],
      type: "rate",
    },
    {
      label: "沟通能力",
      name: ["skills", "communication"],
      type: "rate",
    },
    {
      label: "是否愿意参加公司提供的培训课程",
      name: "willingToTrain",
      type: "radio",
      options: [{ label: "愿意", value: "yes" }, { label: "不愿意", value: "no" }],
    },
    {
      label: "希望公司提供哪些类型的培训",
      name: "trainingTypes",
      type: "checkbox",
      options: [
        { label: "专业技能培训", value: "professionalSkills" },
        { label: "领导力培训", value: "leadership" },
        { label: "项目管理培训", value: "projectManagement" },
        { label: "沟通技巧培训", value: "communication" },
      ],
    },
    {
      label: "职业发展目标",
      name: "careerGoal",
      type: "textarea",
      placeholder: "请输入您的职业发展目标",
    },
    {
      label: "对工作环境的满意度",
      name: "workEnvironment",
      type: "rate",
    },
    {
      label: "对公司福利制度的评价",
      name: "companyBenefits",
      type: "rate",
    },
    {
      label: "对工作场所安全性与健康设施的满意度",
      name: "workplaceSafety",
      type: "rate",
    },
    {
      label: "您认为公司有哪些需要改进的地方？",
      name: "improvements",
      type: "textarea",
      placeholder: "请输入您的意见",
    },
    {
      label: "对公司未来发展的建议",
      name: "developmentSuggestions",
      type: "textarea",
      placeholder: "请输入您的建议",
    },
    {
      label: "您是否愿意提供进一步反馈？",
      name: "furtherFeedback",
      type: "radio",
      options: [{ label: "是", value: "yes" }, { label: "否", value: "no" }],
    },
  ];

  // 更新 "FormData" 的函数，需要适当修改以适应新数据结构
  const onFinish = (values) => {
    setFormData(
      FormData.concat({
        ...values,
        skills: {
          professional: values.skills.professional.toString(),
          computer: values.skills.computer.toString(),
          leadership: values.skills.leadership.toString(),
          timeManagement: values.skills.timeManagement.toString(),
          communication: values.skills.communication.toString(),
          ...values.skills,
        },
      })
    );
    console.log("提交成功！", values);
  };
   
  // 获取当前页面要显示的数据
  const currentData = FormData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          // 性别
          gender: "male",
          // 教育程度
          education: "bachelor",
          // 技能
          skills: {
            // 专业技能
            professional: 3,
            // 计算机技能
            computer: 3,
            // 领导能力
            leadership: 3,
            // 时间管理能力
            timeManagement: 3,
            // 沟通能力
            communication: 3,
          },
        }}
        // 设置样式，最大宽度为600，居中显示
        style={{ maxWidth: 350, margin: "0 auto" }}
      >
        {formItems.map((item, index) => {
          // 选择合适的 Ant Design 组件渲染
          let component; 
          if (item.type === "input") {
            component = (
              <Input placeholder={item.placeholder} type={item.inputType || "text"} />
            );
          } else if (item.type === "radio") {
            component = (
              <Radio.Group>
                {item.options.map((option, i) => (
                  <Radio key={i} value={option.value}>
                    {option.label}
                  </Radio>
                ))}
              </Radio.Group>
            );
          } else if (item.type === "select") {
            component = (
              <Select>
                {item.options.map((option, i) => (
                  <Option key={i} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            );
          }  else if (item.type === "rate") {
            component = <Rate />;
          } else if (item.type === "checkbox") {
            component = (
              <Checkbox.Group>
                {item.options.map((option, i) => (
                  <Checkbox key={i} value={option.value}>
                    {option.label}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            );
          } else if (item.type === "textarea") {
            component = (
              <Input.TextArea placeholder={item.placeholder} />
            );
          }

          return (
            <Form.Item
              key={index}
              label={item.label}
              name={item.name}
              rules={item.rules}
            >
              {component}
            </Form.Item>
          );
        })}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <Pagination defaultCurrent={1} pageSizeOptions={5} total={50} onChange={(page) => setCurrentPage(page)} />
    </div>
  );
}