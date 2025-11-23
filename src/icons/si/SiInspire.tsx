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

export const SiInspire = (props: IconProps) => {
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
        <Path d="M0 0v24h24V0zm3.873 3.688a1.874 1.874 0 1 1 .003 3.747 1.874 1.874 0 0 1-.003-3.747m4.49.507h3.532l6.734 10.813h.045V4.195H22v16.118h-3.547L11.736 9.522h-.047v10.79H8.364zM2.24 8.982s.013.004 3.389 0v11.276H2.24z" />
      </G>
    </Svg>
  );
};