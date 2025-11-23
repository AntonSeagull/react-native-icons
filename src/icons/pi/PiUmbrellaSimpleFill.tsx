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

export const PiUmbrellaSimpleFill = (props: IconProps) => {
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
        <Path d="M235.76 138.83A16 16 0 0 1 224 144h-88v56a16 16 0 0 0 32 0 8 8 0 0 1 16 0 32 32 0 0 1-64 0v-56H32a16 16 0 0 1-16-17.37 112.44 112.44 0 0 1 188.2-72.88 111.56 111.56 0 0 1 35.8 72.88 16.1 16.1 0 0 1-4.24 12.2" />
      </G>
    </Svg>
  );
};