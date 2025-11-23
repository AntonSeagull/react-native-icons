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

export const PiWindowsLogoLight = (props: IconProps) => {
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
        <Path d="M208 138h-80a6 6 0 0 0-6 6v57.45a6 6 0 0 0 4.93 5.91l80 14.54a5.5 5.5 0 0 0 1.07.1 6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 70.81-68-12.36V150h68ZM96 138H32a6 6 0 0 0-6 6v40a6 6 0 0 0 4.93 5.9l64 11.64a6.4 6.4 0 0 0 1.07.1 6 6 0 0 0 6-6V144a6 6 0 0 0-6-6m-6 50.45L38 179v-29h52ZM211.84 35.39a6 6 0 0 0-4.91-1.29l-80 14.54a6 6 0 0 0-4.93 5.91V112a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6V40a6 6 0 0 0-2.16-4.61M202 106h-68V59.55l68-12.36ZM99.84 55.76a6 6 0 0 0-4.91-1.3l-64 11.64A6 6 0 0 0 26 72v40a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V60.36a6 6 0 0 0-2.16-4.6M90 106H38V77l52-9.46Z" />
      </G>
    </Svg>
  );
};