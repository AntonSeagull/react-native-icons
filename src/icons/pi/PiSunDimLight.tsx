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

export const PiSunDimLight = (props: IconProps) => {
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
        <Path d="M122 40v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62 62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50 50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48Zm0 119.52-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 1 0-8.48-8.48m136-136-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 0 0-8.48-8.48m.48 136a6 6 0 0 0-8.48 8.48l8 8a6 6 0 0 0 8.48-8.48ZM40 122h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12m88 88a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m96-88h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};