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

export const FiPenTool = (props: IconProps) => {
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
        <Path d="m12 19 7-7 3 3-7 7z" />
        <Path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586" />
        <Circle cx={11} cy={11} r={2} />
      </G>
    </Svg>
  );
};