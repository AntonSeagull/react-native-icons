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

export const FcViewDetails = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#BBDEFB" d="M7 4h34v40H7z" />
        <Path d="M13 26h4v4h-4zM13 18h4v4h-4zM13 34h4v4h-4zM13 10h4v4h-4zM21 26h14v4H21zM21 18h14v4H21zM21 34h14v4H21zM21 10h14v4H21z" />
      </G>
    </Svg>
  );
};