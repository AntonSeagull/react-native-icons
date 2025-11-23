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

export const PiCarBatteryThin = (props: IconProps) => {
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
        <Path d="M188 136a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4m-84-4H72a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-44v96a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h40V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h20a12 12 0 0 1 12 12m-80-12h40V56a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm-96 0h40V56a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Zm168 12a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z" />
      </G>
    </Svg>
  );
};