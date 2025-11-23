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

export const RiFloodFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 17.472A5.98 5.98 0 0 0 20 19h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.98 5.98 0 0 0 12 19c1.537 0 2.94-.578 4-1.528m-3.427-15.94.1.08L23 11h-3v6a5 5 0 0 1-4-2 4.99 4.99 0 0 1-4 2 5 5 0 0 1-4-2 4.99 4.99 0 0 1-4 2l-.001-6H1l10.327-9.388a1 1 0 0 1 1.14-.145z" />
      </G>
    </Svg>
  );
};