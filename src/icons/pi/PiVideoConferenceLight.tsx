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

export const PiVideoConferenceLight = (props: IconProps) => {
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
        <Path d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 14v66h-52V54h50a2 2 0 0 1 2 2M38 200V56a2 2 0 0 1 2-2h114v148H40a2 2 0 0 1-2-2m178 2h-50v-68h52v66a2 2 0 0 1-2 2M182 88a10 10 0 1 1 10 10 10 10 0 0 1-10-10m20 80a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-68.19-1.49A38 38 0 0 0 115.23 143a30 30 0 1 0-38.45 0 38 38 0 0 0-18.59 23.5 6 6 0 0 0 11.62 3C72.67 158.38 83.93 150 96 150s23.34 8.38 26.19 19.49a6 6 0 0 0 11.62-3ZM78 120a18 18 0 1 1 18 18 18 18 0 0 1-18-18" />
      </G>
    </Svg>
  );
};