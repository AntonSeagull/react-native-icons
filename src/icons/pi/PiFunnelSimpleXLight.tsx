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

export const PiFunnelSimpleXLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M192 142H64a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12m40-60H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-104 96h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m92.24-6.24a6 6 0 0 0-8.48 0L192 191.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L183.51 200l-19.75 19.76a6 6 0 1 0 8.48 8.48L192 208.49l19.76 19.75a6 6 0 0 0 8.48-8.48L200.49 200l19.75-19.76a6 6 0 0 0 0-8.48" />
      </G>
    </Svg>
  );
};