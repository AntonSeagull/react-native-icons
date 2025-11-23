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

export const GrWebcam = (props: IconProps) => {
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
        <Path stroke="#000" strokeLinecap="round" strokeWidth={2} d="M20 22H4" />
        <Path stroke="#000" strokeWidth={2} d="M15.5 18v3M8 21.5V18" />
        <Path stroke="#000" strokeWidth={2} d="M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" clipRule="evenodd" />
        <Path stroke="#000" strokeWidth={2} d="M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clipRule="evenodd" />
        <Path stroke="#000" strokeWidth={2} d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clipRule="evenodd" />
        <Path stroke="#000" strokeWidth={2} d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};