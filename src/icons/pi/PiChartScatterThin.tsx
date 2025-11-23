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

export const PiChartScatterThin = (props: IconProps) => {
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
        <Path d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v156h188a4 4 0 0 1 4 4m-96-52a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-24-56a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-32 72a8 8 0 1 0-8-8 8 8 0 0 0 8 8m96-48a8 8 0 1 0-8-8 8 8 0 0 0 8 8m24-40a8 8 0 1 0-8-8 8 8 0 0 0 8 8m-8 88a8 8 0 1 0-8-8 8 8 0 0 0 8 8" />
      </G>
    </Svg>
  );
};