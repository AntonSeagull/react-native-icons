

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLineVerticalBold = (props: IconProps) => {

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
          <Path d="M140,24V232a12,12,0,0,1-24,0V24a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }

