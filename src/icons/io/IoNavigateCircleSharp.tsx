

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoNavigateCircleSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M256,48h0A208.23,208.23,0,0,0,48,256c0,114.68,93.31,208,208,208h0A208.23,208.23,0,0,0,464,256C464,141.31,370.69,48,256,48Zm-8,361V264H104l-1,0,259-114.11Z" />
        </G>
      </Svg>
    );
  }

