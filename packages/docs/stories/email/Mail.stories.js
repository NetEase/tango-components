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

export const TangoMonthReport = () => (
  <Html>
    <Preview>Tango Usage Report</Preview>
    <Tailwind>
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
                <StatCard label="累计上线页面" value="1114" />
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

export const TangoMonthReportNew = () => (
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
            <Button style={{ ...button, marginRight: 24 }} href="https://tango.netease.com/">
              立即体验
            </Button>
            <Button style={button} href="https://music-doc.st.netease.com/st/tango-docs/">
              使用指南
            </Button>
          </Section>
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              TangoCMS 接入数据
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
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
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
            </ul>
          </Section>
          <Hr />
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              TangoFlow 接入数据
            </Heading>
            <Row>
              <Column>
                <StatCard label="累计上线流程" value="88" />
              </Column>
              <Column>
                <StatCard label="本月上线流程" value="38" />
              </Column>
              <Column>
                <StatCard label="本月新增流程" value="31" />
              </Column>
            </Row>
            <Button href="https://music-pylon.hz.netease.com/pylon-one/monitor-analysis-system/workspace/287/dashboard/detail/4720">
              🌐 查看详细数据
            </Button>
            <div>
              <Img
                width={600}
                src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/35761363496/dd36/3b20/b28d/a427942c6c74bc374de53ed77e6e1e0c.png"
              />
              <Img
                width={600}
                src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/35761366368/60e0/754d/2a68/89a656643db73a58c84c07b16b00a981.png"
              />
            </div>
            <Heading as="h2" style={title}>
              本月进展
            </Heading>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <ListItem>
                🚀
                运行时流量捕获：完成运行时流量获取的开发、测试、联调、上线，提供多种策略支持线上流量抓取能力，提升线上问题排查效率
              </ListItem>
              <ListItem>
                🚀
                场景化建设：完成场景关联托管集群、应用关联场景的能力，提供场景化管理的研发模式，实现通过场景简化流程编排，屏蔽底层概念及细节，降低理解成本；
              </ListItem>
              <ListItem>
                🚀
                稳定性能力提升：提供基于令牌桶的1S、5S、10S、30S、60S的细粒度全局限流能力，进一步提升了流程稳定性保障能力
              </ListItem>
              <ListItem>
                🚀
                服务端能力持续演进：提供发送Nydus消息的能力，以解决业务上异步消息队列场景诉求和服务间解耦能力，目前进度80%，正在联调中；
              </ListItem>
            </ul>
          </Section>
          <Hr />
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              D2C 接入数据
            </Heading>
            <Row>
              <Column>
                <StatCard label="本月新增注册人数" value="666" />
              </Column>
              <Column>
                <StatCard label="月活跃用户数" value="692" />
              </Column>
              <Column>
                <StatCard label="本月生成页面次数" value="2,667" />
              </Column>
              <Column>
                <StatCard label="本月生成代码行数" value="700,855" />
              </Column>
            </Row>
            <Button href="https://music-pylon.hz.netease.com/pylon-one/monitor-analysis-system/workspace/287/dashboard/detail/4763">
              🌐 查看详细数据
            </Button>
            <Heading as="h3">网易集团用户分布</Heading>
            <div>
              <Img
                width={600}
                src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/35759676390/420a/d2cb/56f2/0089bee108d223f3ecb343a02c16a9ee.png"
              />
            </div>
            <Heading as="h3">本月进展</Heading>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <ListItem>
                🚀全新智能组件功能，开启 D2C
                新时代：即使在设计稿中没有使用设计组件库，在代码生成时仍然可以通过分析相似元素，并将这些元素提取为组件，然后在代码中将元素替换为该组件的实例；
              </ListItem>
              <ListItem>
                🎉组件识别：与智能组件不同的是，组件识别是需要将设计稿中的一些元素识别为已有组件库中的组件，例如
                Music One, Ant Design 等；
              </ListItem>
              <ListItem>
                已有设计组件导出代码优化：对于已有的设计组件，我们在导出代码时进行了优化：在组件的实现过程，已经支持包含
                props 逻辑，例如文本的替换，变体的切换等；
              </ListItem>
              <ListItem>优化对于组件名称的生成;优化图片上传速度</ListItem>
            </ul>
          </Section>
          <Hr />
          <Section style={sectionPart}>
            <Heading as="h2" style={title}>
              下月工作计划
            </Heading>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <ListItem>
                TangoCMS:
                提升平台易用性，降低开发者成本，让外包和后端同学快速、有效参与到前端研发交付过程中；辅助内容组中后台页面迁移（老旧页面治理）；场景化组件专项，业务层解决方案拆解和构建：业务组件、业务区块、业务样板间；
              </ListItem>
              <ListItem>
                TangoFlow:
                Groovy脚本有效性检测：支持对Groovy脚本的风险检测，全局变量识别、死循环存在性检测、main函数参数个数一致性检测等；资产沉淀：构建统一资产沉淀机制，完成资产沉淀平台化前期建设，具备能够沉淀Groovy脚本、RPC接口、OpenAPI的能力；平台集中打磨：提升平台易用性和使用效率，集中解决近期在流程编排过程中发现的有碍于易用性、效率、体验等的问题；
              </ListItem>
              <ListItem>D2C: 设计稿智能识别响应式布局；智能分组算法优化</ListItem>
            </ul>
          </Section>
        </Container>
        <Section style={footer}>
          <Text>
            <Button
              style={footerButton}
              href="https://popo.netease.com/static/html/open_popo.html?ssid=2778907&sstp=1"
            >
              🏅Tango金牌服务群：2778907
            </Button>
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
  const email = render(<TangoMonthReportNew />);
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
      <span className="bg-slate-600 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base" />
      {text || children}
    </li>
  );
};

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
