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

export const CgGirl = (props: IconProps) => {
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
        <Path fill="currentColor" d="M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path fill="currentColor" fillRule="evenodd" d="M12.024 2H12C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-5.258-4.058-9.568-9.212-9.97v-.002A10 10 0 0 0 12.025 2M12 20a8 8 0 0 0 7.742-10.022 10.02 10.02 0 0 1-8.981-4.376 7.98 7.98 0 0 1-5.692 2.4A8 8 0 0 0 12 20m-.021-16h.045-.045" clipRule="evenodd" />
      </G>
    </Svg>
  );
};