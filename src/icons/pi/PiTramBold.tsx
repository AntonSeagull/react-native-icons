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

export const PiTramBold = (props: IconProps) => {
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
        <Path d="M184 44h-44V28h28a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h28v16H72a36 36 0 0 0-36 36v104a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V80a36 36 0 0 0-36-36M72 68h112a12 12 0 0 1 12 12v36H60V80a12 12 0 0 1 12-12m112 128H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12m-80-28a16 16 0 1 1-16-16 16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};