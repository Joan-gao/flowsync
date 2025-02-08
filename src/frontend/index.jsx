import React, { useState } from 'react';
import ForgeReconciler, {
  Box,
  Strong,
  Button,
  ButtonGroup,
  Checkbox,
  DatePicker,
  Form,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  Label,
  RequiredAsterisk,
  Stack,
  Text,
  TextArea,
  Textfield,
  useForm,
  Heading,
  xcss,
} from '@forge/react';

const App = () => {
  const [showForm, setShowForm] = useState(false); // 控制是否显示表单

  const { getFieldId, register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const onClickStart = () => {
    setShowForm(true); // 点击 "Start" 按钮后显示表单
  };

  const onClickRestart = () => {
    setShowForm(false); // 返回到初始页面
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
            {' '}
            Our AI-powered suggestions help you optimize your workflow. 🫡
          </Text>
          <Button appearance="primary" onClick={onClickStart}>
            Start Your Journey Here 🚀
          </Button>
        </Stack>
      </Box>
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
            <Label labelFor={getFieldId('textfield')}>
              Give your project a cool name! 🎯 <RequiredAsterisk />
            </Label>
            <Textfield
              {...register('textfield', {
                required: true,
              })}
              placeholder="e.g., SuperApp Development"
            />
          </Box>
          <Box>
            <Label labelFor={getFieldId('textarea')}>
              Tell me more about your project! 📝 <RequiredAsterisk />
            </Label>
            <TextArea
              placeholder="eg, We are building an app to track daily habits"
              {...register('textarea', { required: true })}
            />
          </Box>
          <Box>
            <Label labelFor={getFieldId('datepicker')}>
              When will the project start? 📅 <RequiredAsterisk />
            </Label>
            <DatePicker {...register('datepicker')} />
          </Box>
          <Box>
            <Label labelFor={getFieldId('datepicker')}>
              What’s the DDL? ⏳<RequiredAsterisk />
            </Label>
            <DatePicker {...register('datepicker')} />
          </Box>
          <Box>
            <Label labelFor={getFieldId('textarea')}>
              Who’s on your team? Introduce them!(Name, work direction and
              Availability) 👥 <RequiredAsterisk />
            </Label>
            <TextArea
              placeholder="e.g., Alice (Frontend, Available Monday to Friday), Bob (Backend, Available Mondays 9:00 AM - 5:00 PM), John (Product Manager, Available on Weekends) 💻"
              {...register('textarea', { required: true })}
            />
          </Box>
          <Box>
            <Label labelFor="toggle">
              Add some references if you’d like! 📂{' '}
            </Label>
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
