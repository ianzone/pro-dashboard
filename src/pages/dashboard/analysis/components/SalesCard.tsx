import { Column } from '@ant-design/plots';
import { Card, Col, DatePicker, type GetProps, Row, Tabs } from 'antd';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';

export type TimeType = 'today' | 'week' | 'month' | 'year';
const { RangePicker } = DatePicker;

type RangePickerType = GetProps<typeof RangePicker>;

const rankingListData: {
  title: string;
  total: number;
}[] = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}: {
  rangePickerValue: RangePickerType['value'];
  isActive: (key: TimeType) => string;
  salesData: DataItem[];
  loading: boolean;
  handleRangePickerChange: RangePickerType['onChange'];
  selectDate: (key: TimeType) => void;
}) => {
  const { styles } = useStyles();
  return (
    <Card loading={loading} variant={'borderless'} styles={{ body: { padding: 0 } }}>
      <div className={styles.salesCard}>
        <Tabs
          tabBarExtraContent={
            <div className={styles.salesExtraWrap}>
              <div className={styles.salesExtra}>
                <a href='.' className={isActive('today')} onClick={() => selectDate('today')}>
                  今日
                </a>
                <a href='.' className={isActive('week')} onClick={() => selectDate('week')}>
                  本周
                </a>
                <a href='.' className={isActive('month')} onClick={() => selectDate('month')}>
                  本月
                </a>
                <a href='.' className={isActive('year')} onClick={() => selectDate('year')}>
                  本年
                </a>
              </div>
              <RangePicker
                value={rangePickerValue}
                onChange={handleRangePickerChange}
                style={{
                  width: 256,
                }}
              />
            </div>
          }
          size='large'
          tabBarStyle={{
            marginBottom: 24,
          }}
          items={[
            {
              key: 'sales',
              label: '销售额',
              children: (
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Column
                        height={300}
                        data={salesData}
                        xField='x'
                        yField='y'
                        paddingBottom={12}
                        axis={{
                          x: {
                            title: false,
                          },
                          y: {
                            title: false,
                            gridLineDash: null,
                            gridStroke: '#ccc',
                          },
                        }}
                        scale={{
                          x: { paddingInner: 0.4 },
                        }}
                        tooltip={{
                          name: '销售量',
                          channel: 'y',
                        }}
                      />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`${styles.rankingItemNumber} ${
                                i < 3 ? styles.rankingItemNumberActive : ''
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className={styles.rankingItemTitle} title={item.title}>
                              {item.title}
                            </span>
                            <span>{item.total}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              ),
            },
            {
              key: 'views',
              label: '访问量',
              children: (
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Column
                        height={300}
                        data={salesData}
                        xField='x'
                        yField='y'
                        paddingBottom={12}
                        axis={{
                          x: {
                            title: false,
                          },
                          y: {
                            title: false,
                          },
                        }}
                        scale={{
                          x: { paddingInner: 0.4 },
                        }}
                        tooltip={{
                          name: '访问量',
                          channel: 'y',
                        }}
                      />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`${
                                i < 3 ? styles.rankingItemNumberActive : styles.rankingItemNumber
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className={styles.rankingItemTitle} title={item.title}>
                              {item.title}
                            </span>
                            <span>{item.total}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              ),
            },
          ]}
        />
      </div>
    </Card>
  );
};
export default SalesCard;
