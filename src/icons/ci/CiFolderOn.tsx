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

export const CiFolderOn = (props: IconProps) => {
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
        <Path d="M19.435 19.94H4.565a2.5 2.5 0 0 1-2.5-2.5V6.56a2.5 2.5 0 0 1 2.5-2.5h5.27a2.5 2.5 0 0 1 2.457 2.04l.042.222a.5.5 0 0 0 .491.408h6.61a2.5 2.5 0 0 1 2.5 2.5v8.21a2.5 2.5 0 0 1-2.5 2.5M4.565 5.06a1.5 1.5 0 0 0-1.5 1.5v10.88a1.5 1.5 0 0 0 1.5 1.5h14.87a1.5 1.5 0 0 0 1.5-1.5V9.23a1.5 1.5 0 0 0-1.5-1.5h-6.61a1.5 1.5 0 0 1-1.474-1.225l-.042-.221A1.5 1.5 0 0 0 9.835 5.06Z" data-name="Folder On" />
      </G>
    </Svg>
  );
};