import React from 'react';
import { Form, Input, Button, Select, Radio, Rate, Checkbox } from 'antd';

const { Option } = Select;

// 定义一个SurveyForm组件
const SurveyForm = () => {
  // 定义表单提交的回调函数
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      // 设置表单布局为垂直
      layout="vertical"
      // 设置表单提交的回调函数
      onFinish={onFinish}
      // 设置表单的初始值
      initialValues={{
        gender: 'male',
        education: 'bachelor',
        skills: {
          professional: 3,
          computer: 3,
          leadership: 3,
          timeManagement: 3,
          communication: 3,
        },
      }}
    >
      {/* 1. 基本信息 */}
      <h2>1. 基本信息</h2>

      <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>

      <Form.Item label="性别" name="gender">
        <Radio.Group>
          <Radio value="male">男</Radio>
          <Radio value="female">女</Radio>
          <Radio value="other">其他</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="年龄" name="age" rules={[{ required: true, message: '请输入年龄' }]}>
        <Input placeholder="请输入年龄" />
      </Form.Item>

      <Form.Item label="联系电话" name="phone" rules={[{ required: true, message: '请输入联系电话' }]}>
        <Input placeholder="请输入联系电话" />
      </Form.Item>

      <Form.Item label="电子邮件" name="email" rules={[{ type: 'email', message: '请输入有效的电子邮件' }]}>
        <Input placeholder="请输入电子邮件" />
      </Form.Item>

      <Form.Item label="部门/岗位" name="department" rules={[{ required: true, message: '请输入部门/岗位' }]}>
        <Input placeholder="请输入部门/岗位" />
      </Form.Item>

      <Form.Item label="工作年限" name="yearsOfWork" rules={[{ required: true, message: '请输入工作年限' }]}>
        <Input placeholder="请输入工作年限" />
      </Form.Item>

      {/* 2. 教育背景 */}
      <h2>2. 教育背景</h2>

      <Form.Item label="最高学历" name="education">
        <Select>
          <Option value="highschool">高中</Option>
          <Option value="associate">专科</Option>
          <Option value="bachelor">本科</Option>
          <Option value="master">硕士</Option>
          <Option value="doctor">博士</Option>
        </Select>
      </Form.Item>

      <Form.Item label="专业" name="major">
        <Input placeholder="请输入专业" />
      </Form.Item>

      <Form.Item label="毕业院校" name="school">
        <Input placeholder="请输入毕业院校" />
      </Form.Item>

      {/* 3. 工作情况 */}
      <h2>3. 工作情况</h2>

      <Form.Item label="当前工作岗位的满意度" name="jobSatisfaction">
        <Rate />
      </Form.Item>

      <Form.Item label="工作量是否合理" name="workload">
        <Radio.Group>
          <Radio value="tooMuch">过多</Radio>
          <Radio value="justRight">合适</Radio>
          <Radio value="tooLittle">过少</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="与同事合作关系" name="teamWork">
        <Rate />
      </Form.Item>

      <Form.Item label="管理层对工作的支持" name="managementSupport">
        <Rate />
      </Form.Item>

      {/* 4. 技能评估 */}
      <h2>4. 技能评估</h2>

      <Form.Item label="专业技能" name={['skills', 'professional']}>
        <Rate />
      </Form.Item>

      <Form.Item label="计算机操作能力" name={['skills', 'computer']}>
        <Rate />
      </Form.Item>

      <Form.Item label="领导力" name={['skills', 'leadership']}>
        <Rate />
      </Form.Item>

      <Form.Item label="时间管理能力" name={['skills', 'timeManagement']}>
        <Rate />
      </Form.Item>

      <Form.Item label="沟通能力" name={['skills', 'communication']}>
        <Rate />
      </Form.Item>

      {/* 5. 培训需求 */}
      <h2>5. 培训需求</h2>

      <Form.Item label="是否愿意参加公司提供的培训课程" name="willingToTrain">
        <Radio.Group>
          <Radio value="yes">愿意</Radio>
          <Radio value="no">不愿意</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="希望公司提供哪些类型的培训" name="trainingTypes">
        <Checkbox.Group>
          <Checkbox value="professionalSkills">专业技能培训</Checkbox>
          <Checkbox value="leadership">领导力培训</Checkbox>
          <Checkbox value="projectManagement">项目管理培训</Checkbox>
          <Checkbox value="communication">沟通技巧培训</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item label="职业发展目标" name="careerGoal">
        <Input.TextArea placeholder="请输入您的职业发展目标" />
      </Form.Item>

      {/* 6. 工作环境与福利 */}
      <h2>6. 工作环境与福利</h2>

      <Form.Item label="对工作环境的满意度" name="workEnvironment">
        <Rate />
      </Form.Item>

      <Form.Item label="对公司福利制度的评价" name="companyBenefits">
        <Rate />
      </Form.Item>

      <Form.Item label="对工作场所安全性与健康设施的满意度" name="workplaceSafety">
        <Rate />
      </Form.Item>

      {/* 7. 个人意见与建议 */}
      <h2>7. 个人意见与建议</h2>

      <Form.Item label="您认为公司有哪些需要改进的地方？" name="improvements">
        <Input.TextArea placeholder="请输入您的意见" />
      </Form.Item>

      <Form.Item label="对公司未来发展的建议" name="developmentSuggestions">
        <Input.TextArea placeholder="请输入您的建议" />
      </Form.Item>

      {/* 8. 其他 */}
      <h2>8. 其他</h2>

      <Form.Item label="您是否愿意提供进一步反馈？" name="furtherFeedback">
        <Radio.Group>
          <Radio value="yes">是</Radio>
          <Radio value="no">否</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SurveyForm;
