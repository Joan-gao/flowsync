import React, { useState } from 'react';
import ForgeReconciler, {
  Box,
  Strong,
  Button,
  ButtonGroup,
  DatePicker,
  Form,
  FormFooter,
  FormHeader,
  FormSection,
  Label,
  RequiredAsterisk,
  Stack,
  Text,
  TextArea,
  Textfield,
  useForm,
  Heading,
} from '@forge/react';

const App = () => {
  const [showForm, setShowForm] = useState(false); // 控制是否显示表单
  const [showResponsePage, setShowResponsePage] = useState(false); // 控制是否显示响应页面
  const [formData, setFormData] = useState({}); // 存储表单数据

  const { getFieldId, register, handleSubmit } = useForm();

  // 表单提交逻辑
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setFormData(data); // 保存表单数据
    setShowResponsePage(true); // 跳转到响应页面
  };

  const onClickStart = () => {
    setShowForm(true); // 点击 "Start" 按钮后显示表单
  };

  const onClickRestart = () => {
    setShowForm(false); // 返回到初始页面
    setShowResponsePage(false); // 重置响应页面状态
  };

  if (!showForm) {
    return (
      <Box
        padding="space.400"
        xcss={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Stack space="space.300" alignInline="center">
          <Heading as="h1">Welcome to FlowSync!😉</Heading>
          <Text>
            <Strong>
              Tired of endless planning and manually creating Jira tasks? 😖{' '}
            </Strong>
          </Text>
          <Text>Let our tool automate the process! 🚀</Text>
          <Text>
            Easily convert your tasks into Jira tickets and roadmaps, and keep
            them synced in real-time. 🔄
          </Text>
          <Text>
            Our AI-powered suggestions help you optimize your workflow. 🫡
          </Text>
          <Button appearance="primary" onClick={onClickStart}>
            Start Your Journey Here 🚀
          </Button>
        </Stack>
      </Box>
    );
  }

  if (showResponsePage) {
    return (
      <Form
        onSubmit={handleSubmit((feedbackData) => {
          console.log('Feedback:', feedbackData.feedback);
        })}
      >
        <FormSection>
          <Stack space="space.200">
            {/* Response Section */}
            <Text>
              <Strong>Response Generated by AI: xxxx</Strong>
            </Text>
            {/* Feedback Section */}
            <Box>
              <Label labelFor={getFieldId('feedback')}>
                How can we make this plan even better? Please share your
                thoughts!
              </Label>
              <TextArea
                {...register('feedback')}
                placeholder={`e.g., - Alice's current workload is too heavy. - The initial research doesn't need a full day; half a day would be sufficient. - Suggest reassigning tasks to balance workloads.`}
              />
            </Box>
          </Stack>
        </FormSection>

        {/* Buttons */}
        <FormFooter>
          <ButtonGroup>
            <Button appearance="subtle">Regenerate</Button>
            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </ButtonGroup>
        </FormFooter>
      </Form>
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title="Hi there!👋">
        <Text>
          To get started, let's break down your project into simple parts:
        </Text>
        <Text>
          - <Strong>Goal</Strong>: What do you want to achieve? (e.g., Build a
          new app 📱, run a marketing campaign 📢, or write a research paper 📚)
        </Text>
        <Text>
          - <Strong>Scope</Strong>: What does this goal include? (e.g., App
          features, marketing channels, or data sources)
        </Text>
        <Text>
          - <Strong>Outcome</Strong>: What’s the end result? (e.g., A working
          app, a successful campaign, or a valuable report)
        </Text>
        <Text>
          The more details you provide, the better we can help you! Let’s dive
          in! 🏊‍♂️
        </Text>
      </FormHeader>
      <FormSection>
        <Stack space="space.200">
          <Box>
            <Label labelFor={getFieldId('name')}>
              Give your project a cool name! 🎯 <RequiredAsterisk />
            </Label>
            <Textfield
              {...register('name')}
              placeholder="e.g., SuperApp Development"
            />
          </Box>
          <Box>
            <Label labelFor={getFieldId('intro')}>
              Tell me more about your project! 📝
            </Label>
            <TextArea
              placeholder="e.g., We are building an app to track daily habits"
              {...register('intro')}
            />
          </Box>
          <Box>
            <Label labelFor={getFieldId('startdate')}>
              When will the project start? 📅
            </Label>
            <DatePicker {...register('startdate')} />
          </Box>
          <Box>
            <Label labelFor={getFieldId('enddate')}>
              What’s the DDL? ⏳
            </Label>
            <DatePicker {...register('enddate')} />
          </Box>
          <Box>
            <Label labelFor={getFieldId('team')}>
              Who’s on your team? Introduce them! (Name, work direction, and
              availability) 👥
            </Label>
            <TextArea
              placeholder="e.g., Alice (Frontend, Available Monday to Friday), Bob (Backend, Available Mondays 9:00 AM - 5:00 PM), John (Product Manager, Available on Weekends) 💻"
              {...register('team')}
            />
          </Box>
          <Box>
            <Label>Add some references if you’d like! 📂</Label>
            <ButtonGroup
              appearance="primary"
              label="Button group with appearance"
            >
              <Button>Google Drive</Button>
              <Button>Confluence</Button>
              <Button>Local Files</Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </FormSection>
      <FormFooter>
        <ButtonGroup>
          <Button appearance="subtle" onClick={onClickRestart}>
            Back
          </Button>
          <Button type="submit" appearance="primary">
            Generate
          </Button>
        </ButtonGroup>
      </FormFooter>
    </Form>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
