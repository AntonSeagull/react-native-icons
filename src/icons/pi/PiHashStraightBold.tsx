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

export const PiHashStraightBold = (props: IconProps) => {
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
        <Path d="M216 148h-44v-40h44a12 12 0 0 0 0-24h-44V40a12 12 0 0 0-24 0v44h-40V40a12 12 0 0 0-24 0v44H40a12 12 0 0 0 0 24h44v40H40a12 12 0 0 0 0 24h44v44a12 12 0 0 0 24 0v-44h40v44a12 12 0 0 0 24 0v-44h44a12 12 0 0 0 0-24m-108 0v-40h40v40Z" />
      </G>
    </Svg>
  );
};