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

export const GiCardboardBoxClosed = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 73.32 74.6 155.1l82.3 37.1 173.2-85.5zm95.4 42.98-173.2 85.5 77.8 35.1 181.4-81.8zM61.7 169v182L247 434.6v-182zm388.6 0L265 252.6v182L450.3 351z" />
      </G>
    </Svg>
  );
};