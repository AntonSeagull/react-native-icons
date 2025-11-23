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

export const CiBarcode = (props: IconProps) => {
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
        <Path d="M8.066 4.065H3.648a1.73 1.73 0 0 0-.963.189 1.37 1.37 0 0 0-.619 1.226v4.585a.5.5 0 0 0 1 0v-4.28a1.8 1.8 0 0 1 .014-.518c.077-.236.319-.2.514-.2h4.472a.5.5 0 0 0 0-1ZM2.063 13.937v4.418a1.73 1.73 0 0 0 .189.963 1.37 1.37 0 0 0 1.227.619h4.584a.5.5 0 0 0 0-1h-4.28a1.8 1.8 0 0 1-.518-.014c-.236-.077-.2-.319-.2-.514v-4.472a.5.5 0 0 0-1 0ZM15.934 19.935h4.418a1.73 1.73 0 0 0 .963-.189 1.37 1.37 0 0 0 .619-1.226v-4.585a.5.5 0 0 0-1 0v4.28a1.8 1.8 0 0 1-.014.518c-.077.236-.319.2-.514.2h-4.472a.5.5 0 0 0 0 1ZM21.937 10.063V5.645a1.73 1.73 0 0 0-.189-.963 1.37 1.37 0 0 0-1.227-.619h-4.584a.5.5 0 0 0 0 1h4.28a1.8 1.8 0 0 1 .518.014c.236.077.2.319.2.514v4.472a.5.5 0 0 0 1 0Z" />
        <Rect width={1} height={8.709} x={10.999} y={7.643} rx={0.5} />
        <Rect width={1} height={8.709} x={14.249} y={7.643} rx={0.5} />
        <Rect width={1} height={8.709} x={16.499} y={7.643} rx={0.5} />
        <Rect width={1} height={8.709} x={6.499} y={7.643} rx={0.5} />
        <Rect width={1.5} height={8.709} x={8.499} y={7.643} rx={0.75} />
      </G>
    </Svg>
  );
};