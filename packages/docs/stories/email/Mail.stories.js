import React from 'react';
import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Column,
  Row,
  List,
  ListItem,
  render,
} from '@music163/tango-mail';

export default {
  title: 'email/Mail',
  parameters: {
    layout: 'fullscreen',
  },
};

const sectionPart = {
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
};

export const ReportMail = () => (
  <Html>
    <Preview>Tango 产品月报</Preview>
    <Tailwind>
      <Body style={{ backgroundColor: '#f3f3f5' }}>
        <Container
          style={{
            width: 648,
            maxWidth: '100%',
            margin: '0 auto',
            backgroundColor: '#ffffff',
          }}
        >
          <Section
            style={{
              display: 'flex',
              padding: '24px',
              backgroundColor: '#003CA9',
              color: '#FFF',
            }}
          >
            <Img
              width={146}
              src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27987959536/68ce/da54/30a8/53000b894469c6d0a5996ca49d2ad89e.png"
            />
            <Heading
              style={{
                color: '#FFF',
                fontSize: '27px',
                fontWeight: 'bold',
                lineHeight: '27px',
                marginTop: 24,
                marginBottom: 12,
              }}
            >
              产品月报（2024.4）
            </Heading>
            <Text>
              Tango
              是云音乐低代码解决方案，使命是让开发者使用低代码工具实现业务交付过程的自动化和智能化，持续降低业务交付门槛，提升开发交付效能。
            </Text>
            <Button style={{ ...button, marginRight: 24 }} href="https://github.com/NetEase/tango">
              立即体验
            </Button>
            <Button style={button} href="https://netease.github.io/tango-site/">
              使用指南
            </Button>
          </Section>
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              接入数据
            </Heading>
            <Row>
              <Column>
                <StatCard label="累计上线页面" value="1,114" />
              </Column>
              <Column>
                <StatCard label="本月上线页面" value="61" />
              </Column>
              <Column>
                <StatCard label="本月在线提交次数" value="327" />
              </Column>
              <Column>
                <StatCard label="本月在线提交用户" value="36" />
              </Column>
            </Row>
            <Button href="https://music-pylon.hz.netease.com/pylon-one/monitor-analysis-system/workspace/287/dashboard/detail/4724">
              🌐 查看详细数据
            </Button>
            <Img
              width={600}
              src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/35759522799/2eb3/c7af/a59e/d729e1a4967086ae7f9feaf5253de007.png"
            />
            <Heading as="h3">本月进展</Heading>
            <List>
              <ListItem>
                🚀 组件库升级 1.30.43：XTable,XForm,DataProvider 等状态管理方案升级，支持 TID
                访问。已知问题修复。高频组件最佳实践属性面板优化，文档优化，主题库新增数据后台样式。
              </ListItem>
              <ListItem>
                🚀 WEB IDE 升级：IDE 重构，新增侧边栏 &
                底部状态栏。支持基础组件库类型提示，文件代码检索。
              </ListItem>
              <ListItem>
                🚀 设计器升级：新增双屏模式、原生 DOM
                解析、快捷添加子元素预设代码片段补充，新增页面目录结构优化
              </ListItem>
              <ListItem>🤖 Tango AI 智能助手 Beta 版本上线</ListItem>
            </List>
          </Section>
        </Container>
        <Section style={footer}>
          <Text>
            <Button style={footerButton}>🏅Tango金牌服务群：7788-7788</Button>
          </Text>
          <Text style={footerAddress}>
            此邮件使用 <strong>Tango</strong> 搭建, 网易云音乐-技术中心-公共技术团队
          </Text>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);

export function Mail() {
  const email = render(<ReportMail />);
  return (
    <div>
      <button
        onClick={() => {
          console.log(email);
        }}
      >
        render mail
      </button>
    </div>
  );
}

function StatCard({ label = 'label', value = '123' }) {
  return (
    <div className="min-w-0 m-1 rounded-md border-solid border border-slate-300 overflow-hidden bg-white">
      <div className="p-4 flex items-center">
        <div>
          <p className="mb-2 text-sm font-medium text-gray-500">{label}</p>
          <p className="mb-0 text-3xl font-semibold text-gray-700">{value}</p>
        </div>
      </div>
    </div>
  );
}

const title = {
  margin: '0 0 15px',
  fontWeight: 'bold',
  fontSize: '21px',
  lineHeight: '21px',
  color: '#0c0d0e',
};

const footer = {
  width: '680px',
  maxWidth: '100%',
  margin: '32px auto 0 auto',
  padding: '0 30px',
  textAlign: 'center',
};

const footerAddress = {
  margin: '4px',
  fontSize: '14px',
  lineHeight: '15px',
  color: '#9199a1',
};

const button = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: '1px solid #FFF',
  color: '#FFF',
};

const footerButton = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: '1px solid #333',
  color: '#333',
};
