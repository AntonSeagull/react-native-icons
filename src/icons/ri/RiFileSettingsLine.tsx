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

export const RiFileSettingsLine = (props: IconProps) => {
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
        <Path d="M8.595 12.812a3.5 3.5 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.5 3.5 0 0 1 11 8.645V7.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.572a3.5 3.5 0 0 1 0 1.623l.992.573-1 1.732-.992-.573a3.5 3.5 0 0 1-1.405.812V16.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573-1-1.732zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z" />
      </G>
    </Svg>
  );
};