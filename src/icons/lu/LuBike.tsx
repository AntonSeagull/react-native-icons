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

export const LuBike = (props: IconProps) => {
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
        <Circle cx={18.5} cy={17.5} r={3.5} />
        <Circle cx={5.5} cy={17.5} r={3.5} />
        <Circle cx={15} cy={5} r={1} />
        <Path d="M12 17.5V14l-3-3 4-3 2 3h2" />
      </G>
    </Svg>
  );
};