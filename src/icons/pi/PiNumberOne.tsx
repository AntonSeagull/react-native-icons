

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberOne = (props: IconProps) => {

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
          <Path d="M144,48V208a8,8,0,0,1-16,0V62.13L100.12,78.86a8,8,0,1,1-8.24-13.72l40-24A8,8,0,0,1,144,48Z" />
        </G>
      </Svg>
    );
  }

