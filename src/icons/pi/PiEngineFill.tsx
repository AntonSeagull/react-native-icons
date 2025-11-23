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

export const PiEngineFill = (props: IconProps) => {
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
        <Path d="M256 120v48a16 16 0 0 1-16 16h-12.69L192 219.31a15.86 15.86 0 0 1-11.31 4.69h-77.38A15.86 15.86 0 0 1 92 219.31L52.69 180A15.86 15.86 0 0 1 48 168.69V148H24v24a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0v24h24V80a16 16 0 0 1 16-16h60V40h-24a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16h-24v24h40.69A15.86 15.86 0 0 1 192 68.69L227.31 104H240a16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};