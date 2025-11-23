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

export const TbCircleArrowLeftFilled = (props: IconProps) => {
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
        <Path d="M12 2a10 10 0 0 1 .324 19.995L12 22l-.324-.005A10 10 0 0 1 12 2m.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0-.083.094l-.064.092-.052.098-.044.11-.03.112-.017.126L7 12l.004.09.007.058.025.118.035.105.054.113.043.07.071.095.054.058 4 4 .094.083a1 1 0 0 0 1.32-1.497L10.415 13H16l.117-.007A1 1 0 0 0 16 11h-5.586l2.293-2.293.083-.094a1 1 0 0 0-.083-1.32" />
      </G>
    </Svg>
  );
};