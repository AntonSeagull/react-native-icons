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

export const TbBinoculars = (props: IconProps) => {
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
        <Path d="M4 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16.346 9.17l-.729-1.261c-.16-.248-1.056-.203-1.117.091l-.177 1.38" />
        <Path d="m19.761 14.813-2.84-5.133C16.732 9.37 16.329 9 15.5 9c-.828 0-1.5.448-1.5 1v6M7.654 9.17l.729-1.261C8.543 7.66 9.439 7.706 9.5 8l.177 1.38" />
        <Path d="m4.239 14.813 2.84-5.133C7.268 9.37 7.671 9 8.5 9c.828 0 1.5.448 1.5 1v6M10 12h4v2h-4z" />
      </G>
    </Svg>
  );
};