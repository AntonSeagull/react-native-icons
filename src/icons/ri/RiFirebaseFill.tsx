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

export const RiFirebaseFill = (props: IconProps) => {
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
        <Path d="M6.757 1.501 4 18.5 9.473 4.816 7.695 1.353a.5.5 0 0 0-.938.148m4.807 2.817L4 18.5l9.84-11.55-1.399-2.623a.5.5 0 0 0-.877-.01m-.624 18.52L4 18.5 17.31 5.665a.5.5 0 0 1 .832.296L20 18.5l-6.94 4.337a2 2 0 0 1-2.12 0" />
      </G>
    </Svg>
  );
};