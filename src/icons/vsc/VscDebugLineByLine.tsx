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

export const VscDebugLineByLine = (props: IconProps) => {
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
        <Path d="M6 10V9h9v1zm4-4h5v1h-5zm5-3v1H6V3zm-9 9v1h9v-1z" />
        <Path fillRule="evenodd" d="m1 2.795.783-.419 5.371 3.581v.838l-5.371 3.581L1 9.957zm1.007.94v5.281l3.96-2.64z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};