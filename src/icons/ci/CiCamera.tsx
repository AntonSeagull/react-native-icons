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

export const CiCamera = (props: IconProps) => {
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
        <Path d="M20.435 19.925H3.565a1.5 1.5 0 0 1-1.5-1.5v-9.14a1.5 1.5 0 0 1 1.5-1.5h2.658a.5.5 0 0 0 .5-.454l.166-1.8a1.49 1.49 0 0 1 1.5-1.454h7.23a1.5 1.5 0 0 1 1.5 1.5l.164 1.756a.5.5 0 0 0 .5.454h2.658a1.5 1.5 0 0 1 1.5 1.5v9.14a1.5 1.5 0 0 1-1.506 1.498M3.565 8.785a.5.5 0 0 0-.5.5v9.14a.5.5 0 0 0 .5.5h16.87a.5.5 0 0 0 .5-.5v-9.14a.5.5 0 0 0-.5-.5h-2.658a1.5 1.5 0 0 1-1.494-1.362l-.166-1.8a.515.515 0 0 0-.5-.546H8.385a.5.5 0 0 0-.5.5l-.168 1.846a1.5 1.5 0 0 1-1.494 1.362Z" />
        <Path d="M12 17.282a4 4 0 1 1 4-4 4 4 0 0 1-4 4m0-7a3 3 0 1 0 3 3 3 3 0 0 0-3-3" />
      </G>
    </Svg>
  );
};