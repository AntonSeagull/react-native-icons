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

export const PiThumbsDownThin = (props: IconProps) => {
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
        <Path d="m235.85 157.52-12-96A20 20 0 0 0 204 44H32a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h45.53l38.89 77.79A4 4 0 0 0 120 236a36 36 0 0 0 36-36v-20h60a20 20 0 0 0 19.85-22.48M76 148H32a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h44Zm149 19.94a12 12 0 0 1-9 4.06h-64a4 4 0 0 0-4 4v24a28 28 0 0 1-25.58 27.9L84 151.06V52h120a12 12 0 0 1 11.91 10.51l12 96a12 12 0 0 1-2.91 9.43" />
      </G>
    </Svg>
  );
};