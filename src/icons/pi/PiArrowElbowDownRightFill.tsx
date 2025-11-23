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

export const PiArrowElbowDownRightFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m221.66 181.66-48 48A8 8 0 0 1 160 224v-40H72a8 8 0 0 1-8-8V32a8 8 0 0 1 16 0v136h80v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32" />
      </G>
    </Svg>
  );
};