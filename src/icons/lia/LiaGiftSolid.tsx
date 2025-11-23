import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const LiaGiftSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 5c-1.645 0-3 1.355-3 3 0 .352.074.684.188 1H4v6h1v13h22V15h1V9h-5.187A3 3 0 0 0 23 8c0-1.645-1.355-3-3-3-1.75 0-2.937 1.328-3.719 2.438-.105.148-.187.292-.281.437-.094-.145-.176-.29-.281-.437C14.938 6.328 13.75 5 12 5m0 2c.625 0 1.438.672 2.063 1.563.152.218.128.23.25.437H12c-.566 0-1-.434-1-1s.434-1 1-1m8 0c.566 0 1 .434 1 1s-.434 1-1 1h-2.312c.12-.207.097-.219.25-.437C18.563 7.672 19.375 7 20 7M6 11h20v2h-9v-1h-2v1H6Zm1 4h18v11h-8V16h-2v10H7Z" />
      </G>
    </Svg>
  );
};