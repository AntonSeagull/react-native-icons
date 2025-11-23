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

export const GrDeploy = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M23 1s-6.528-.458-9 2c-.023.037-4 4-4 4L5 8l-3 2 8 4 4 8 2-3 1-5s3.963-3.977 4-4c2.458-2.472 2-9 2-9Zm-6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM7 17c-1-1-3-1-4 0s-1 5-1 5 4 0 5-1 1-3 0-4Z" />
      </G>
    </Svg>
  );
};