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

export const TfiPrinter = (props: IconProps) => {
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
        <Path d="M17 6h-3.008V4.182L9.489 0H2.992v6H0v8h3v3.1h11V14h3zM9.992 1.832 12.327 4H9.992zm-6-.832h5v4h4v1h-9zM13 16.1H4v-5h9zm3-3.1h-2v-2.9H3V13H1V7h15zm-4.994 0H5v-1h6.006zM9 15H5v-1h4zM3 9H2V8h1zm2 0H4V8h1z" />
      </G>
    </Svg>
  );
};