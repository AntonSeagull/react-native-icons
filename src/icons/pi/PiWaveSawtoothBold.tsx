

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveSawtoothBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M238.29,138.22l-104,64A12,12,0,0,1,116,192V85.47L30.29,138.22a12,12,0,0,1-12.58-20.44l104-64A12,12,0,0,1,140,64V170.53l85.71-52.75a12,12,0,1,1,12.58,20.44Z" />
        </G>
      </Svg>
    );
  }

