

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTreeEvergreenThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M227.16,189.54l-51-65.54H208a4,4,0,0,0,3.17-6.44l-80-104a4,4,0,0,0-6.34,0l-80,104A4,4,0,0,0,48,124H79.82l-51,65.54A4,4,0,0,0,32,196h92v44a4,4,0,0,0,8,0V196h92a4,4,0,0,0,3.16-6.46ZM40.18,188l51-65.54A4,4,0,0,0,88,116H56.12L128,22.56,199.88,116H168a4,4,0,0,0-3.16,6.46l51,65.54Z" />
        </G>
      </Svg>
    );
  }

