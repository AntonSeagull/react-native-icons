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

export const PiLampThin = (props: IconProps) => {
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
        <Path d="m243.68 150.42-48-112A4 4 0 0 0 192 36H64a4 4 0 0 0-3.68 2.42l-48 112A4 4 0 0 0 16 156h108v56H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-56h64v36a4 4 0 0 0 8 0v-36h36a4 4 0 0 0 3.68-5.58M22.07 148 66.64 44h122.72l44.57 104Z" />
      </G>
    </Svg>
  );
};