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

export const TbLegoFilled = (props: IconProps) => {
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
        <Path d="M16 2a1 1 0 0 1 1 1v1l.2.005A4 4 0 0 1 20.995 7.8L21 8v9a4 4 0 0 1-2.845 3.83l-.155.043V21a1 1 0 0 1-.883.993L17 22H7a1 1 0 0 1-1-1v-.127l-.155-.042a4 4 0 0 1-2.84-3.631L3 17V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1zm-.8 12.286a1 1 0 0 0-1.414.014 2.5 2.5 0 0 1-3.572 0 1 1 0 0 0-1.428 1.4 4.5 4.5 0 0 0 6.428 0 1 1 0 0 0-.014-1.414M9.51 10H9.5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2" />
      </G>
    </Svg>
  );
};