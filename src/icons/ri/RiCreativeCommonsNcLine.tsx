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

export const RiCreativeCommonsNcLine = (props: IconProps) => {
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
        <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M7.094 5.68A8 8 0 0 1 18.32 16.905l-2.154-2.154A2.5 2.5 0 0 0 14 11h-4a.5.5 0 0 1 0-1.001h5.5V8H13V6h-2v2h-1q-.273.001-.53.056zM5.68 7.094 7.835 9.25A2.5 2.5 0 0 0 10 13h4a.5.5 0 0 1 0 1.001H8.5v2H11v2h2v-2h1q.273-.001.53-.056l2.376 2.376A8 8 0 0 1 5.68 7.095" />
      </G>
    </Svg>
  );
};