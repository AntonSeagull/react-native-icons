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

export const CiShoppingTag = (props: IconProps) => {
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
        <Path d="M20.605 5.988a2.8 2.8 0 0 0-2.6-2.59l-4.56-.32a2.84 2.84 0 0 0-2.17.81L3.9 11.278a2.794 2.794 0 0 0 0 3.95l4.87 4.88a2.8 2.8 0 0 0 3.96 0l7.38-7.39a2.78 2.78 0 0 0 .81-2.17ZM12.015 19.4a1.8 1.8 0 0 1-2.54 0l-4.87-4.87a1.793 1.793 0 0 1 0-2.55l1.17-1.17 7.42 7.42Zm7.38-7.38-5.5 5.5-7.41-7.42 5.5-5.5a1.79 1.79 0 0 1 1.27-.53c.04 0 .08.01.12.01l4.56.32a1.8 1.8 0 0 1 1.67 1.66l.32 4.56a1.83 1.83 0 0 1-.525 1.398Z" />
        <Circle cx={17} cy={6.999} r={0.862} />
      </G>
    </Svg>
  );
};