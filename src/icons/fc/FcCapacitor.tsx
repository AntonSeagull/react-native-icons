

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCapacitor = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M25,33c1.1,0,2,0.9,2,2V13c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v22C23,33.9,23.9,33,25,33z" fill="#303F9F" />
          <Path d="M46,35c1.1,0,2-0.9,2-2V15c0-1.1-0.9-2-2-2H27v22H46z" />
          <Path d="M21,13c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h2V13H21z" />
        </G>
      </Svg>
    );
  }

