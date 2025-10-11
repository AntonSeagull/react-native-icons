

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberOneBold = (props: IconProps) => {

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
          <Path d="M148,48V208a12,12,0,0,1-24,0V69.19l-21.83,13.1A12,12,0,0,1,89.83,61.71l40-24A12,12,0,0,1,148,48Z" />
        </G>
      </Svg>
    );
  }

