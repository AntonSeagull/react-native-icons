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

export const BiSmile = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8" />
        <Path d="M14.829 14.828a4.1 4.1 0 0 1-1.272.858 4 4 0 0 1-4.875-1.45l-1.658 1.119a6.1 6.1 0 0 0 1.621 1.62 6 6 0 0 0 2.148.903 6 6 0 0 0 2.415 0 6 6 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4 4 0 0 1-.489.592" />
        <Circle cx={8.5} cy={10.5} r={1.5} />
        <Circle cx={15.493} cy={10.493} r={1.493} />
      </G>
    </Svg>
  );
};