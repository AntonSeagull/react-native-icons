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

export const TfiUnderline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 1v1h-1v6.459c0 3.032-2.467 5.5-5.5 5.5S3 11.491 3 8.459V2H2V1h3v1H4v6.459c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V2h-1V1zM2 16h13v-1H2z" />
      </G>
    </Svg>
  );
};