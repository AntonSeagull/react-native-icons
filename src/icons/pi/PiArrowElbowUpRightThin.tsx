

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowUpRightThin = (props: IconProps) => {

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
          <Path d="M218.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L206.34,84H76V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H206.34L165.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,218.83,82.83Z" />
        </G>
      </Svg>
    );
  }

