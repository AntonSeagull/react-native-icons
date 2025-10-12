

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPhosphorLogoLight = (props: IconProps) => {

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
          <Path  d="M152,34H72a6,6,0,0,0-6,6V168a78.09,78.09,0,0,0,78,78,6,6,0,0,0,6-6V174h2a70,70,0,0,0,0-140ZM78,62.91,133.74,162H78Zm60,82.19L82.26,46H138ZM78.28,174H138v59.73A66.1,66.1,0,0,1,78.28,174ZM152,162h-2V46h2a58,58,0,0,1,0,116Z" />
        </G>
      </Svg>
    );
  }

