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

export const CiPalette = (props: IconProps) => {
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
        <Path d="M19.31 20.93a1.62 1.62 0 0 0 1.62-1.62v-3.38a1.62 1.62 0 0 0-1.62-1.62h-4.94l4.66-4.66a1.64 1.64 0 0 0 0-2.3l-2.39-2.39a1.636 1.636 0 0 0-2.3 0L9.69 9.62V4.56a1.5 1.5 0 0 0-1.5-1.5H4.57a1.5 1.5 0 0 0-1.5 1.5v13.88a2.507 2.507 0 0 0 2.5 2.5Zm-9.62-9.89 5.36-5.37a.63.63 0 0 1 .88 0l2.39 2.39a.63.63 0 0 1 0 .88l-8.63 8.63ZM4.07 4.56a.5.5 0 0 1 .5-.5h3.62a.5.5 0 0 1 .5.5v3.92H4.07Zm0 4.92h4.62v4.43H4.07Zm3.22 10.45-1.72.01a1.5 1.5 0 0 1-1.5-1.5v-3.53h4.62v3.53a1.5 1.5 0 0 1-1.4 1.49m12.64-.62a.623.623 0 0 1-.62.62H9.19a2.4 2.4 0 0 0 .42-.86l3.76-3.76h5.94a.623.623 0 0 1 .62.62Z" />
        <Circle cx={6.382} cy={17.419} r={0.844} />
      </G>
    </Svg>
  );
};