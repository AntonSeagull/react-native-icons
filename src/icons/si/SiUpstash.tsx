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

export const SiUpstash = (props: IconProps) => {
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
        <Path d="M13.803 0c-2.61 0-5.22.995-7.211 2.986-3.982 3.983-3.982 10.44 0 14.422a5.1 5.1 0 0 0 7.21-7.21L12 12a2.55 2.55 0 0 1-3.605 3.605A7.649 7.649 0 0 1 19.21 4.79l1.803-1.803A10.17 10.17 0 0 0 13.803 0M12 12a2.55 2.55 0 0 1 3.605-3.605A7.649 7.649 0 0 1 4.79 19.21l-1.803 1.803c3.983 3.982 10.44 3.982 14.422 0s3.982-10.44 0-14.422A5.08 5.08 0 0 0 13.803 5.1a5.1 5.1 0 0 0-3.605 8.703z" />
      </G>
    </Svg>
  );
};