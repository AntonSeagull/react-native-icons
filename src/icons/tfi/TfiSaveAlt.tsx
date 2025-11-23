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

export const TfiSaveAlt = (props: IconProps) => {
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
        <Path d="M15.5 0H2.836L0 2.776V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5M13 1v2H5V1zM3 16v-1h11v1zm13-.5a.5.5 0 0 1-.5.5H15v-2H2v2h-.5a.5.5 0 0 1-.5-.5V3.196L3.244 1H4v3h10V1h1.5a.5.5 0 0 1 .5.5zM8.5 5C6.57 5 5 6.57 5 8.5S6.57 12 8.5 12 12 10.43 12 8.5 10.43 5 8.5 5m0 6C7.122 11 6 9.879 6 8.5S7.122 6 8.5 6 11 7.121 11 8.5 9.878 11 8.5 11" />
      </G>
    </Svg>
  );
};