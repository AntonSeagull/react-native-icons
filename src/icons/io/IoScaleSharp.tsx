

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoScaleSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M432,32H80A48.05,48.05,0,0,0,32,80V432a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V80A48.05,48.05,0,0,0,432,32ZM415.29,197l-52.46,61.73a27.83,27.83,0,0,1-37.65,4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18,15.6-69.18,24.89a27.84,27.84,0,0,1-37.65-4.62L96.71,197A32.12,32.12,0,0,1,97.13,155c18.93-21.31,72.3-70.87,158.87-70.87S395.94,133.72,414.87,155h0A32.12,32.12,0,0,1,415.29,197Z" />
        </G>
      </Svg>
    );
  }

