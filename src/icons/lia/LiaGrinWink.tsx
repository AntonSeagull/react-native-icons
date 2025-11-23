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

export const LiaGrinWink = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2Zm2.969 4.031c0 1.684-.676 2.852-1.657 3.688C18.333 21.555 17.036 22 16 22c-2.121 0-3.562-.86-4.687-1.969L9.906 21.47C11.301 22.839 13.32 24 16 24c1.555 0 3.262-.586 4.625-1.75s2.344-2.96 2.344-5.219Z" />
      </G>
    </Svg>
  );
};