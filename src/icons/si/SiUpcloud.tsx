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

export const SiUpcloud = (props: IconProps) => {
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
        <Path d="M22.116 12.996a1.885 1.885 0 1 1 0 3.77H8.664V11.87h.888v4.007h12.585a1.01 1.01 0 0 0 .997-.996 1.03 1.03 0 0 0-1.04-.997H10.397v-.888zM13.43 7.235H8.664v1.992h.888V8.101h3.9a1.01 1.01 0 0 1 .996.996 1.065 1.065 0 0 1-1.018 1.04H1.885a1.885 1.885 0 1 0 0 3.77h5.891v-.889H1.885a.996.996 0 0 1 0-1.993H13.45a1.9 1.9 0 0 0 1.885-1.884 1.94 1.94 0 0 0-1.906-1.906" />
      </G>
    </Svg>
  );
};