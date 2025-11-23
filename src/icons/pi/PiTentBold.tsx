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

export const PiTentBold = (props: IconProps) => {
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
        <Path d="m255 187.13-64-144A12 12 0 0 0 180 36H76a12 12 0 0 0-10.85 6.9 2 2 0 0 0-.12.23l-.03.17L1 187.13A12 12 0 0 0 12 204h232a12 12 0 0 0 11-16.87M64 104.55V180H30.46ZM88 180v-75.45L121.54 180Zm59.8 0L94.47 60h77.73l53.34 120Z" />
      </G>
    </Svg>
  );
};