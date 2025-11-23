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

export const Imdes = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.775 5.44C9.751 3.192 8.708 1.393 8.001 0c-.708 1.393-1.75 3.192-4.774 5.44-5.157 3.833-.303 9.182 3.965 6.238-.278 1.827-1.227 3.159-2.191 3.733v.59h6v-.59c-.964-.574-1.913-1.906-2.191-3.733 4.268 2.944 9.122-2.405 3.965-6.238" />
      </G>
    </Svg>
  );
};