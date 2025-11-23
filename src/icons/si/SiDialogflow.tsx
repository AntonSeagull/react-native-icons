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

export const SiDialogflow = (props: IconProps) => {
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
        <Path d="M11.996 0a1.64 1.64 0 0 0-.82.22L3.344 4.74a1.65 1.65 0 0 0-.535.498l9.136 5.28 9.213-5.32a1.65 1.65 0 0 0-.51-.458L12.818.22a1.64 1.64 0 0 0-.822-.22m9.336 5.5-9.387 5.422-9.3-5.373a1.7 1.7 0 0 0-.12.615v9.043a1.64 1.64 0 0 0 .819 1.42l3.918 2.266v4.617a.493.493 0 0 0 .74.424l12.654-7.303a1.64 1.64 0 0 0 .819-1.42V6.162a1.65 1.65 0 0 0-.143-.662" />
      </G>
    </Svg>
  );
};