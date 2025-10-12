

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFloppyDiskBackThin = (props: IconProps) => {

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
          <Path  d="M208,36H83.31a12,12,0,0,0-8.48,3.51L39.52,74.83A11.9,11.9,0,0,0,36,83.31V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM84,44h88V80a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V83.31a4,4,0,0,1,1.17-2.82L76,49.66V80A12,12,0,0,0,88,92h80a12,12,0,0,0,12-12V44h28a4,4,0,0,1,4,4Zm-84-92a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,180Z" />
        </G>
      </Svg>
    );
  }

