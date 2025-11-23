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

export const TfiPencil = (props: IconProps) => {
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
        <Path d="m15.529 2.857-1.403-1.404c-.565-.566-1.555-.566-2.122 0l-9.057 9.058-1.722 5.288 5.248-1.765 9.055-9.056a1.5 1.5 0 0 0 .001-2.121M3.094 13.294l.645-1.979 1.934 1.935-1.963.66zm1.261-2.776 5.493-5.493 2.111 2.11-5.494 5.494zm6.2-6.201.729-.729 2.111 2.11-.729.729zm4.267-.046-.72.72-2.111-2.11.72-.721a.51.51 0 0 1 .707 0l1.403 1.404a.5.5 0 0 1 .001.707" />
      </G>
    </Svg>
  );
};