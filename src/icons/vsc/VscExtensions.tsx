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

export const VscExtensions = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M13.5 1.5 15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9zm1.5 0V9h7.5V1.5zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5zm9-1.5V6H1.5v7.5zM9 15H1.5v7.5H9zm1.5 7.5H18V15h-7.5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};