

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatDownLight = (props: IconProps) => {

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
          <Path  d="M229.54,133.7A6,6,0,0,0,224,130H182V48a14,14,0,0,0-14-14H88A14,14,0,0,0,74,48v82H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v88a6,6,0,0,0,6,6h33.51Z" />
        </G>
      </Svg>
    );
  }

