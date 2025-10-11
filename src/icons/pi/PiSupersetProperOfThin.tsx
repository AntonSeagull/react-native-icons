

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSupersetProperOfThin = (props: IconProps) => {

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
          <Path d="M220,128a84.09,84.09,0,0,1-84,84H64a4,4,0,0,1,0-8h72a76,76,0,0,0,0-152H64a4,4,0,0,1,0-8h72A84.09,84.09,0,0,1,220,128Z" />
        </G>
      </Svg>
    );
  }

