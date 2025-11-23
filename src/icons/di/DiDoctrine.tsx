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

export const DiDoctrine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m22.325 12.138-.009-.008a2 2 0 0 0-.163-.18l-7.698-7.698a2.353 2.353 0 0 0-3.328 3.328l2.485 2.485a9.616 9.616 0 0 0-7.236 9.323c0 5.316 4.307 9.623 9.623 9.623s9.623-4.307 9.623-9.623a9.6 9.6 0 0 0-3.297-7.249zm-.196 8.673-5.56 5.56a1.712 1.712 0 0 1-2.42-2.421l2.639-2.639h-5.705a1.71 1.71 0 1 1 0-3.422h5.705l-2.639-2.639c-.667-.667-.667-1.753 0-2.421s1.754-.667 2.421 0l5.56 5.56a1.715 1.715 0 0 1 0 2.421z" />
      </G>
    </Svg>
  );
};