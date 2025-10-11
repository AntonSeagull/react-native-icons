

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHexagonThin = (props: IconProps) => {

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
          <Path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM220,175.82a4,4,0,0,1-2.08,3.5l-88,48.18a4,4,0,0,1-3.84,0l-88-48.18a4,4,0,0,1-2.08-3.5V80.18a4,4,0,0,1,2.08-3.5l88-48.18a3.94,3.94,0,0,1,3.84,0l88,48.18a4,4,0,0,1,2.08,3.5Z" />
        </G>
      </Svg>
    );
  }

