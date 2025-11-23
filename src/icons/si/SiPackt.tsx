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

export const SiPackt = (props: IconProps) => {
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
        <Path d="M12.965 4.898q-1.061.001-1.908.452a4 4 0 0 0-.891.642v-.937H7.488v14.047h2.657V14.1q.39.374.898.638.859.44 1.92.44 1.37 0 2.453-.674c1.237-.77 2.328-2.27 2.328-4.453 0-2.206-1.09-3.704-2.328-4.477q-1.08-.676-2.451-.676M3.8 5.055 0 9.79l3.822 5.133H7.09L3.012 9.79l3.875-4.736Zm13.312 0 3.875 4.736-4.078 5.133h3.268L24 9.79l-3.8-4.736Zm-4.619 2.318c1.007 0 1.788.493 2.2 1.275.452.86.395 2.034 0 2.78-.221.419-.84 1.277-2.2 1.277q-.736.002-1.299-.336a2.34 2.34 0 0 1-.879-.941q-.316-.604-.316-1.399c0-.795.105-.978.316-1.38.393-.748 1.156-1.276 2.178-1.276" />
      </G>
    </Svg>
  );
};