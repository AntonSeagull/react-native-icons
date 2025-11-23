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

export const CiVoicemail = (props: IconProps) => {
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
        <Path d="M17.435 7.5a4.5 4.5 0 0 0-2.82 8h-5.23a4.494 4.494 0 1 0-2.82 1h10.87a4.5 4.5 0 0 0 0-9M3.065 12a3.5 3.5 0 1 1 3.56 3.5h-.06a3.5 3.5 0 0 1-3.5-3.5m14.37 3.5h-.06a3.53 3.53 0 1 1 .06 0" />
      </G>
    </Svg>
  );
};