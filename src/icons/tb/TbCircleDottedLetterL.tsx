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

export const TbCircleDottedLetterL = (props: IconProps) => {
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
        <Path d="M10 8v8h4M7.5 4.21v.01M4.21 7.5v.01M3 12v.01M4.21 16.5v.01M7.5 19.79v.01M12 21v.01M16.5 19.79v.01M19.79 16.5v.01M21 12v.01M19.79 7.5v.01M16.5 4.21v.01M12 3v.01" />
      </G>
    </Svg>
  );
};