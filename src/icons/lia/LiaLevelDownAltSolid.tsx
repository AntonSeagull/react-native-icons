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

export const LiaLevelDownAltSolid = (props: IconProps) => {
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
        <Path d="M4.5 4.5v3h15v15.355l-3.781-3.78-2.145 2.144 6.358 6.357L21 28.598l1.068-1.022 6.358-6.357-2.145-2.145-3.781 3.781V4.5h-18m1 1h16v19.77l4.781-4.782.73.73-5.642 5.643-.369.354-.37-.354-5.642-5.642.73-.73 4.782 4.78V6.5h-15z" />
      </G>
    </Svg>
  );
};