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

export const VscGoToEditingSession = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 1H3L2 2v12l1 1h9l1-1V6.817h-1V14H3V2h5z" />
        <Path d="M8 4H7v2H5v1h2v2h1V7h2V6H8zM5 11h5v1H5zM13.87.483l.502.502V4.52h-1.004V2.187l-3.14 3.14-.706-.708 3.146-3.146h-2.333v-.99z" />
      </G>
    </Svg>
  );
};