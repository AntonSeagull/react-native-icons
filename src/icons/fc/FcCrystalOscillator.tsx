

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCrystalOscillator = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#2196F3" d="M43,11H20v26h23c1.1,0,2-0.9,2-2V13C45,11.9,44.1,11,43,11z" />
          <Path  fill="#64B5F6" d="M20,9h-2v30h2c1.1,0,2-0.9,2-2V11C22,9.9,21.1,9,20,9z" />
        </G>
      </Svg>
    );
  }

