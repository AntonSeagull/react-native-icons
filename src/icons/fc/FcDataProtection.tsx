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

export const FcDataProtection = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M38 19H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h25.1c1.3-1.3 4.9-.9 4.9-2v-6c0-1.1-.9-2-2-2M34.4 31H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-2.4c0-3.1-2.5-5.6-5.6-5.6" />
        <Path fill="#009688" d="M46 25H32c-1.1 0-2 .9-2 2v11.8c0 1.3.6 2.4 1.6 3.2l7.4 5.5 7.4-5.5c1-.8 1.6-1.9 1.6-3.2V27c0-1.1-.9-2-2-2" />
      </G>
    </Svg>
  );
};