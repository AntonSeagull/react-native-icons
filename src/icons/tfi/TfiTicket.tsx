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

export const TfiTicket = (props: IconProps) => {
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
        <Path d="M9.5 1v.5a1.001 1.001 0 0 1-2 0V1H4v15h3.5v-.5a1.001 1.001 0 0 1 2 0v.5H13V1zM6.563 2c.223.861 1.007 1.5 1.937 1.5s1.714-.639 1.937-1.5H12v6H5V2zm3.874 13c-.222-.861-1.006-1.5-1.937-1.5s-1.714.639-1.937 1.5H5V9h7v6z" />
      </G>
    </Svg>
  );
};