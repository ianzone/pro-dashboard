import ChartCard from './ChartCard';
import Field from './Field';

const yuan = (val: number | string) =>
  `￥ ${val.toLocaleString('zh-CN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

const Charts = {
  yuan,
  ChartCard,
  Field,
};

export { Charts as default, yuan, ChartCard, Field };
