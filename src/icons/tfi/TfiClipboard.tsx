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

export const TfiClipboard = (props: IconProps) => {
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
        <Path d="M16 2v15H1V2h2.244v1H2v13h13V3h-1.278V2zm-3 3H4V1h3.085c.207-.582.763-1 1.415-1s1.208.418 1.415 1H13zm-1-3H9v-.5a.5.5 0 0 0-1 0V2H5v2h7z" />
      </G>
    </Svg>
  );
};