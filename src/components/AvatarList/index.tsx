import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames';
import {
  type CSSProperties,
  Children,
  type FC,
  type ReactElement,
  type ReactNode,
  cloneElement,
} from 'react';
import { useStyles } from './index.style';

export declare type SizeType = number | 'small' | 'default' | 'large';
export type AvatarItemProps = {
  tips: ReactNode;
  src: string;
  size?: SizeType;
  style?: CSSProperties;
  onClick?: () => void;
};
export type AvatarListProps = {
  Item?: ReactElement<AvatarItemProps>;
  size?: SizeType;
  maxLength?: number;
  excessItemsStyle?: CSSProperties;
  style?: CSSProperties;
  children: ReactElement<AvatarItemProps> | ReactElement<AvatarItemProps>[];
};
const avatarSizeToClassName = (size: SizeType | 'mini', styles: any) =>
  classNames(styles.avatarItem, {
    [styles.avatarItemLarge]: size === 'large',
    [styles.avatarItemSmall]: size === 'small',
    [styles.avatarItemMini]: size === 'mini',
  });

const Item: FC<AvatarItemProps> = ({ src, size, tips, onClick = () => {} }) => {
  const { styles } = useStyles();

  const cls = avatarSizeToClassName(size!, styles);

  return (
    <li className={cls} onClick={onClick} onKeyDown={onClick}>
      {tips ? (
        <Tooltip title={tips}>
          <Avatar
            src={src}
            size={size}
            style={{
              cursor: 'pointer',
            }}
          />
        </Tooltip>
      ) : (
        <Avatar src={src} size={size} />
      )}
    </li>
  );
};

const AvatarList: FC<AvatarListProps> & {
  Item: typeof Item;
} = ({ children, size, maxLength = 5, excessItemsStyle, ...other }) => {
  const { styles } = useStyles();
  const numOfChildren = Children.count(children);
  const numToShow = maxLength >= numOfChildren ? numOfChildren : maxLength;
  const childrenArray = Children.toArray(children) as ReactElement<AvatarItemProps>[];

  const childrenWithProps = childrenArray.slice(0, numToShow).map((child) =>
    cloneElement(child, {
      size,
    }),
  );
  if (numToShow < numOfChildren) {
    const cls = avatarSizeToClassName(size!, styles);
    childrenWithProps.push(
      <li key='exceed' className={cls}>
        <Avatar size={size} style={excessItemsStyle}>{`+${numOfChildren - maxLength}`}</Avatar>
      </li>,
    );
  }
  return (
    <div {...other} className={styles.avatarList}>
      <ul> {childrenWithProps} </ul>
    </div>
  );
};
AvatarList.Item = Item;
export { AvatarList };
