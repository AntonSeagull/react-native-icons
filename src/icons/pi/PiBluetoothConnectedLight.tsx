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

export const PiBluetoothConnectedLight = (props: IconProps) => {
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
        <Path d="M195.6 171.2 138 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 122 32v84L67.6 75.2a6 6 0 0 0-7.2 9.6L118 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M134 44l48 36-48 36Zm0 168v-72l48 36Zm-74-74a10 10 0 1 1 10-10 10 10 0 0 1-10 10m154-10a10 10 0 1 1-10-10 10 10 0 0 1 10 10" />
      </G>
    </Svg>
  );
};