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

export const CgGym = (props: IconProps) => {
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
        <Path fill="currentColor" d="m20.274 9.869-3.442-4.915 1.639-1.147 3.441 4.915zM18.39 12.409 16.67 9.95l-8.192 5.736 1.72 2.457-1.638 1.148-4.588-6.554 1.638-1.147 1.72 2.458 8.192-5.736-1.72-2.458 1.638-1.147 4.588 6.554zM20.765 7.083l1.638-1.147-1.147-1.638-1.638 1.147zM7.168 19.046l-3.442-4.915-1.638 1.147 3.441 4.915zM4.382 18.555l-1.638 1.147-1.147-1.638 1.638-1.147z" />
      </G>
    </Svg>
  );
};