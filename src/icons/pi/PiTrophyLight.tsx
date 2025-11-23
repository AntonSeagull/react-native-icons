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

export const PiTrophyLight = (props: IconProps) => {
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
        <Path d="M232 66h-26V48a6 6 0 0 0-6-6H56a6 6 0 0 0-6 6v18H24a14 14 0 0 0-14 14v16a38 38 0 0 0 38 38h5.14A78 78 0 0 0 122 189.75V218H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-28.25c32.44-2.52 59.43-25.3 68.62-55.75H208a38 38 0 0 0 38-38V80a14 14 0 0 0-14-14M48 122a26 26 0 0 1-26-26V80a2 2 0 0 1 2-2h26v34a81 81 0 0 0 .65 10Zm146-10.9c0 36.62-29.38 66.63-65.5 66.9A66 66 0 0 1 62 112V54h132ZM234 96a26 26 0 0 1-26 26h-2.77a78.5 78.5 0 0 0 .77-10.9V78h26a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};