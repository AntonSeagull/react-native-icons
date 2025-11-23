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

export const PiCubeTransparentLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M220.24 91.75 164 35.56a5.93 5.93 0 0 0-4-1.56H40a6 6 0 0 0-6 6v120a6 6 0 0 0 1.76 4.25l56 56A6 6 0 0 0 96 222h120a6 6 0 0 0 6-6V96a6 6 0 0 0-1.76-4.25M166 54.48 201.52 90H166Zm-76 147L54.48 166H90ZM90 154H46V54.48l44 44ZM54.48 46H154v44H98.48ZM154 102v52h-52v-52Zm-52 108v-44h55.52l44 44Zm108-8.48-44-44V102h44Z" />
      </G>
    </Svg>
  );
};