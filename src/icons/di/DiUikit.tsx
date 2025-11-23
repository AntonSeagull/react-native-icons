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

export const DiUikit = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m17.859 9.882 4.544 2.479v7.023l-6.61 3.718-6.197-3.718V13.6l-4.131-2.066v10.742l10.328 6.197 10.742-6.197V9.882l-4.958-2.479zm1.653-3.718-4.131-2.066-3.718 2.479 4.131 2.066z" />
      </G>
    </Svg>
  );
};