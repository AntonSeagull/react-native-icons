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

export const VscTasklist = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m3.57 6.699 5.693-4.936L8.585 1 3.273 5.596l-1.51-1.832L1 4.442l1.85 2.214zM15 5H6.824l2.307-2H15zM6 7h9v2H6zm9 4H6v2h9z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};