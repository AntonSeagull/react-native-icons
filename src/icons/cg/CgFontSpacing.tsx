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

export const CgFontSpacing = (props: IconProps) => {
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
        <Path fill="currentColor" d="M19 21h2V3h-2zM5 21H3V3h2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M9.464 16.048 9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.25A1 1 0 0 0 12 7.375a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 0 0 1.812.846M12 10.61 10.885 13h2.23z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};