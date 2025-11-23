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

export const PiDotsThreeLight = (props: IconProps) => {
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
        <Path d="M138 128a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-78-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10m136 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10" />
      </G>
    </Svg>
  );
};