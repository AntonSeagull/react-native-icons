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

export const TbTrain = (props: IconProps) => {
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
        <Path d="M21 13c0-3.87-3.37-7-10-7H3M3 15h16a2 2 0 0 0 2-2" />
        <Path d="M3 6v5h17.5M3 10v4M8 11V6M13 11V6.5M3 19h18" />
      </G>
    </Svg>
  );
};