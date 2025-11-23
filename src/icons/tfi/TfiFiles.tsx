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

export const TfiFiles = (props: IconProps) => {
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
        <Path d="M12.497 0H6v2.01h1V1h5v4h4v8h-4.017v1H17V4.182zM13 1.832 15.335 4H13zM0 3v14h11V7.182L6.497 3zm7 1.832L9.335 7H7zM1 16V4h5v4h4v8z" />
      </G>
    </Svg>
  );
};