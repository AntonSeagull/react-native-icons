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

export const GiAcousticMegaphone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m443.535 120.186-112 64 8.93 15.628 112-64zM297 153v206h17.973V153zm-18 9.367L73 235.072v41.856l206 72.705zM39 240v32h18v-32zm297 7v18h128v-18zM99.332 300.89l-14.8 40.215L181.02 379.7l16.11-40.364-16.716-6.672-9.434 23.635-63.51-25.405 8.755-23.786-16.893-6.22zm241.133 11.296-8.93 15.628 112 64 8.93-15.628z" />
      </G>
    </Svg>
  );
};