import React from 'react';
import { isDeepEquals, isFunction, isNil } from '../helpers';

type LoadDataConfig = {
  /**
   * 用于取消请求的 signal 实例，例如 fetch(url, { signal })
   */
  signal?: AbortSignal;
  [key: string]: any;
};

export interface DataProviderProps {
  /**
   * 同步数据到的 store 属性
   * FIXME: 使用 hoc 来实现同步 model 的功能
   */
  // model?: string;
  /**
   * 数据的方法，支持异步数据源的载入
   */
  loadData?: (payload?: unknown, config?: LoadDataConfig) => any;
  /**
   * 是否执行 loadData 函数
   */
  shouldLoadData?: (realPayload?: unknown) => boolean;
  /**
   * 接收到数据时的回调，用于支持自定义赋值逻辑
   */
  onData?: (data: unknown) => void;
  /**
   * 传给 loadData 的参数，默认进行深比较，payload 变化时重新触发 loadData
   */
  payload?: unknown;
  /**
   * 对载入数据的二次格式化
   */
  formatter?: (data: unknown) => any;
  /**
   * 自定义渲染子元素
   */
  children?: (data: unknown, state: { loading: boolean; error: unknown }) => React.ReactNode;
}

type DataProviderStateType = {
  data?: unknown;
  loading?: boolean;
  error?: unknown;
};

const defaultShouldLoadData = () => true;

/**
 * 数据提供者
 */
export class DataProviderBase extends React.Component<DataProviderProps, DataProviderStateType> {
  static defaultProps = {
    shouldLoadData: defaultShouldLoadData,
  };

  state: DataProviderStateType = {
    data: undefined,
    loading: false,
    error: undefined,
  };

  private controller: AbortController;

  load() {
    const { shouldLoadData, loadData, payload } = this.props;
    const shouldLoad = shouldLoadData(payload);
    if (shouldLoad && isFunction(loadData)) {
      const ret = loadData(payload, { signal: this.controller.signal });

      // 如果无返回或者不是 promise 对象
      if (isNil(ret) || !ret.then) {
        this.updateData(ret);
        return;
      }

      this.setState({ loading: true });

      ret
        .then((data: unknown) => {
          this.updateData(data);
        })
        .catch((error: unknown) => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  componentDidMount() {
    this.controller = new AbortController();
    this.load();
  }

  componentDidUpdate(prevProps: Readonly<DataProviderProps>) {
    if (!isDeepEquals(prevProps.payload, this.props.payload)) {
      this.load();
    }
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { children } = this.props;
    const { data, loading, error } = this.state;

    return <React.Fragment>{children?.(data, { loading, error })}</React.Fragment>;
  }

  private updateData(data: unknown) {
    // const { model, formatter, onData } = this.props;
    const { formatter, onData } = this.props;

    if (isFunction(formatter)) {
      data = formatter(data);
    }

    if (isFunction(onData)) {
      onData(data);
    }

    // if (model) {
    //   tango.setStoreValue(model, data);
    // }

    this.setState({ data });
  }
}
