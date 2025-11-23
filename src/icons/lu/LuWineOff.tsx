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

export const LuWineOff = (props: IconProps) => {
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
        <Path d="M8 22h8M7 10h3m7 0h-1.343M12 15v7M7.307 7.307A12.3 12.3 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981Q8.807 2.511 9 2h6c1.5 4 2 6 2 8q-.001.613-.145 1.198M2 2l20 20" />
      </G>
    </Svg>
  );
};