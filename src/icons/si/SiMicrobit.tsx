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

export const SiMicrobit = (props: IconProps) => {
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
        <Path d="M6.857 5.143A6.865 6.865 0 0 0 0 12a6.864 6.864 0 0 0 6.857 6.857h10.287A6.863 6.863 0 0 0 24 12a6.864 6.864 0 0 0-6.856-6.857zm0 2.744h10.287A4.117 4.117 0 0 1 21.257 12a4.12 4.12 0 0 1-4.113 4.116H6.857A4.12 4.12 0 0 1 2.743 12a4.12 4.12 0 0 1 4.114-4.113m10.168 2.729a1.385 1.385 0 1 0 .003 2.77 1.385 1.385 0 0 0-.003-2.77m-10.166 0a1.385 1.385 0 1 0-.003 2.771 1.385 1.385 0 0 0 .003-2.77Z" />
      </G>
    </Svg>
  );
};