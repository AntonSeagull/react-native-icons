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

export const TiAdjustBrightness = (props: IconProps) => {
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
        <Path d="M12 6.934 13 4a1.055 1.055 0 1 0-2 0zM4 11a1.055 1.055 0 1 0 0 2l2.934-1zm8 6.066L11 20a1.055 1.055 0 1 0 2 0zm9.341-5.409A1.055 1.055 0 0 0 20 10.998l-2.934 1 2.934 1a1.057 1.057 0 0 0 1.341-1.341M5.636 7.05l2.781 1.367L7.05 5.636A1.057 1.057 0 1 0 5.636 7.05m-.483 10.382a1.057 1.057 0 0 0 1.896.932l1.367-2.781-2.781 1.367a1.06 1.06 0 0 0-.482.482m13.21-.483-2.781-1.367 1.367 2.781a1.056 1.056 0 1 0 1.414-1.414m.481-10.383a1.057 1.057 0 0 0-1.895-.933L15.58 8.416l2.782-1.368c.202-.1.375-.264.482-.482M12 7.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5" />
      </G>
    </Svg>
  );
};