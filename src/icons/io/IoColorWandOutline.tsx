

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoColorWandOutline = (props: IconProps) => {

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
          <Path d="M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z" />
        </G>
      </Svg>
    );
  }

