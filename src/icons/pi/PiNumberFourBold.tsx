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

export const PiNumberFourBold = (props: IconProps) => {
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
        <Path d="M184 156h-12V48a12 12 0 0 0-21.37-7.5l-96 120A12 12 0 0 0 64 180h84v28a12 12 0 0 0 24 0v-28h12a12 12 0 0 0 0-24m-36 0H89l59-73.79Z" />
      </G>
    </Svg>
  );
};