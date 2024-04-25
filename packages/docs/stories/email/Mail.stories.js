import React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Column,
  Row,
} from '@music163/tango-mail';
import { render } from '@react-email/render';

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

const childSection = { background: '#f5f5f5', padding: 12, display: 'flex', marginBottom: 12 };

export const StackOverflowTipsEmail = () => (
  <Html>
    <Preview>Tango Usage Report</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#165dff',
              primary: '#165dff',
            },
            spacing: {
              px: '1px',
              0: '0px',
              0.5: '0.125rem',
              1: '0.25rem',
              1.5: '0.375rem',
              2: '0.5rem',
              2.5: '0.625rem',
              3: '0.75rem',
              3.5: '0.875rem',
              4: '1rem',
              5: '1.25rem',
              6: '1.5rem',
              7: '1.75rem',
              8: '2rem',
              9: '2.25rem',
              10: '2.5rem',
              11: '2.75rem',
              12: '3rem',
              14: '3.5rem',
              16: '4rem',
              20: '5rem',
              24: '6rem',
              28: '7rem',
              32: '8rem',
              36: '9rem',
              40: '10rem',
              44: '11rem',
              48: '12rem',
              52: '13rem',
              56: '14rem',
              60: '15rem',
              64: '16rem',
              72: '18rem',
              80: '20rem',
              96: '24rem',
            },
          },
          fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
          },
          lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
        },
      }}
    >
      <Head />
      <Body
        style={{
          backgroundColor: '#f3f3f5',
        }}
      >
        <Container
          style={{
            width: '648px',
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
              Tango 产品月报（2024.3）
            </Heading>
            <Text>
              Tango
              是云音乐低代码解决方案，使命是让开发者使用低代码工具实现业务交付过程的自动化和智能化，持续降低业务交付门槛，提升开发交付效能。
            </Text>
            <Button style={{ ...button, marginRight: 24 }} href="https://tango.netease.com/">
              立即体验
            </Button>
            <Button style={button} href="https://music-doc.st.netease.com/st/tango-docs/">
              使用指南
            </Button>
          </Section>
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              核心数据
            </Heading>
            <Row>
              <Column>
                <StatCard label="累计上线页面" value="1052" />
              </Column>
              <Column>
                <StatCard label="本月上线页面" value="29" />
              </Column>
              <Column>
                <StatCard label="累计上线流程" value="65" />
              </Column>
              <Column>
                <StatCard label="本月上线流程" value="18" />
              </Column>
            </Row>
            <Text>
              更详细的大盘数据请查看
              <Button
                style={{ marginLeft: '8px' }}
                href="https://music-pylon.hz.netease.com/pylon-one/monitor-analysis-system/workspace/287/dash-board"
              >
                Tango 指标大盘
              </Button>
            </Text>
            <Text style={{ color: '#b7b7b7' }}>
              说明：上线页面为实际发布到线上正式环境的数据；上线流程为通过 Flow
              编排并发布到正式环境的数据。
            </Text>
          </Section>
          <Hr />
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              本月进展
            </Heading>
            <Section style={childSection}>
              <Heading as="h3">TangoFlow 流程编排</Heading>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <ListItem>
                  🚀中后台场景：新增告警组件、OpenAPI、通用HTTP调用等组件，提供中后台触发器，使得能够完成中后台场景的流程编排能力
                </ListItem>
                <ListItem>稳定性：RPC静态化上线，进一步提升流程中稳定性预案能力；</ListItem>
                <ListItem>
                  🚀AI能力支撑：完成LangBase打通和上线，为流程添加AI元素，更快捷、易用的探索AI类应用场景
                </ListItem>
                <ListItem>
                  🎉平台易用性和使用效率：场景化管理设计与开发，提升不同场景下组件、触发器可见性，支持流程创建时关联场景，提升平台易用性；
                </ListItem>
              </ul>
              <Button href="https://music-doc.st.netease.com/st/tango-docs/docs/flow/user-manual">
                🌐 查看文档
              </Button>
            </Section>
            <Section style={childSection}>
              <Heading as="h3">TangoCMS 中后台搭建</Heading>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <ListItem>🚀引擎升级：增加组件 tid 解析和快捷引用支持</ListItem>
                <ListItem>
                  🎉设计器升级：支持再设计器中快捷添加兄弟节点；增加属性废弃提示；优化快捷拷贝变量路径；增加远程代码更新提示
                </ListItem>
                <ListItem>
                  属性配置优化：支持子属性滚动时，固定在顶部，可快捷收起；优化表达式自动填充的交互；
                  优化自定义展示配置的交互；优化jsx表达式
                </ListItem>
                <ListItem>
                  组件库升级：模块加载器 ModuleProvider
                  上线，支持在线配置；表单自定义控件交互优化；高频组件能力增强
                  (XTable/XForm，Tag,TagList等)；数据源配置优化，异步数据源组件新增 apiConfig 配置
                </ListItem>
              </ul>
              <Button href="https://music-doc.st.netease.com/st/tango-docs/docs/intro">
                🌐 查看文档
              </Button>
            </Section>
            <Section style={childSection}>
              <Heading as="h3">TangoRN 跨端应用搭建</Heading>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <ListItem>🚀曙光埋点接入：提供快捷可视化配置曙光埋点信息</ListItem>
                <ListItem>
                  🎉WEB IDE 增强，支持代码/文件搜索 (快捷键 command+shift+f / command+p)
                </ListItem>
                <ListItem>RN & D2C 串联，提供 Tango 快捷预览页</ListItem>
                <ListItem>服务稳定性优化：HMR客户端兼容处理，客户端启动浮沉屏蔽逻辑优化</ListItem>
              </ul>
              <Button href="https://music-doc.st.netease.com/st/tango-docs/docs/rn/start">
                🌐 查看文档
              </Button>
            </Section>
          </Section>
          <Hr />
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              下月工作计划
            </Heading>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <ListItem>
                TangoFlow:
                提供运行时流量抓取，提升线上问题分析能力；提供限流组件，提升流程稳定性诉求；提供Nydus组件，和服务端异步框架打通；打通场景托管集群关系，增强场景化建设，应用与场景化关联，提升流程创建效率和体验；提供资产沉淀能力，提供资产沉淀机制，前期沉淀Groovy脚本、OpenAPI等资产；
              </ListItem>
              <ListItem>
                TangoCMS: 补充高频组件代码片段；tid 控制逻辑扩展到核心组件；DataProvider
                支持轮询和快捷 可视化配置；数据、内容业务场景使用体验问题跟进。
              </ListItem>
              <ListItem>
                TangoRN: WEB IDE 增强：支持类型提示 /
                左侧文件列表支持右键菜单；跨端统一范式应用模板接入；跨端工作台 RPC
                面板接入；长音频RN组件库对接。
              </ListItem>
            </ul>
          </Section>
        </Container>

        <Section style={footer}>
          <Text>
            <Button
              style={footerButton}
              href="https://popo.netease.com/static/html/open_popo.html?ssid=2778907&sstp=1"
            >
              Popo 服务群：2778907
            </Button>
          </Text>
          <Text style={footerAddress}>
            此邮件使用 <strong>Tango</strong> 构建, 网易云音乐-技术中心-公共技术团队
          </Text>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);

export function Mail() {
  const email = render(<StackOverflowTipsEmail />);
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

const ListItem = ({ text, children }) => {
  return (
    <li className="text-body-color flex text-base" style={{ marginBottom: 8 }}>
      <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base" />
      {text || children}
    </li>
  );
};

function StatCard({ label = 'label', value = '123' }) {
  return (
    <div
      className="min-w-0 m-1 rounded-lg shadow-xs overflow-hidden bg-white"
      style={{ boxShadow: '0 0 0 1px rgba(0,0,0,.05)' }}
    >
      <div className="p-4 flex items-center">
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600" style={{ color: '#718096' }}>
            {label}
          </p>
          <p className="mb-0 text-3xl font-semibold text-gray-700" style={{ color: '#333' }}>
            {value}
          </p>
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
