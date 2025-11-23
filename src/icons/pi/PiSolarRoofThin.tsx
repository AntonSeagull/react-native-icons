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

export const PiSolarRoofThin = (props: IconProps) => {
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
        <Path d="m243.58 126.21-40-80A4 4 0 0 0 200 44H56a4 4 0 0 0-3.58 2.21l-40 80A4 4 0 0 0 12 128v56a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12v-56a4 4 0 0 0-.42-1.79M98.47 124l-16-32h39.06l16 32Zm3.06-72 16 32H78.47l-16-32Zm48 0 16 32h-39.06l-16-32Zm-3.06 72-16-32h39.06l16 32Zm48 0-16-32h39.06l16 32Zm19.06-40h-39.06l-16-32h39.06ZM20 184v-55.06l36-72 36 72V188H24a4 4 0 0 1-4-4m212 4H100v-56h136v52a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};