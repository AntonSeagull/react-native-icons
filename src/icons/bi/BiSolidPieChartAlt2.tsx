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

export const BiSolidPieChartAlt2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13 2.051V11h8.949c-.47-4.717-4.232-8.479-8.949-8.949m4.969 17.953c2.189-1.637 3.694-4.14 3.98-7.004h-8.183z" />
        <Path d="M11 12V2.051C5.954 2.555 2 6.824 2 12c0 5.514 4.486 10 10 10a9.9 9.9 0 0 0 4.255-.964s-5.253-8.915-5.254-9.031z" />
      </G>
    </Svg>
  );
};