

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberOneThin = (props: IconProps) => {

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
          <Path d="M140,48V208a4,4,0,0,1-8,0V55.06L98.06,75.43a4,4,0,0,1-4.12-6.86l40-24A4,4,0,0,1,140,48Z" />
        </G>
      </Svg>
    );
  }

