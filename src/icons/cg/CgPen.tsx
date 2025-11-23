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

export const CgPen = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M21.264 2.293a1 1 0 0 0-1.415 0l-.872.872a3 3 0 0 0-3.415.587L4.955 14.358l5.657 5.657L21.22 9.41c.924-.924 1.119-2.3.586-3.415l.873-.873a1 1 0 0 0 0-1.414zm-4.268 8.51-6.384 6.384-2.828-2.829 6.383-6.383zm1.818-1.818.99-.99a1 1 0 0 0 0-1.415l-1.413-1.414a1 1 0 0 0-1.415 0l-.99.99z" clipRule="evenodd" />
        <Path fill="currentColor" d="m2 22.95 2.122-7.778 5.656 5.657z" />
      </G>
    </Svg>
  );
};