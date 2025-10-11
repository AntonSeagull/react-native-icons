

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdNoAdultContent = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M4,12c0-1.85,0.63-3.54,1.69-4.9L7.59,9h2.83 L7.1,5.69C8.46,4.63,10.15,4,12,4c4.41,0,8,3.59,8,8c0,1.85-0.63,3.54-1.69,4.9l-1.9-1.9h-2.83l3.31,3.31 C15.54,19.37,13.85,20,12,20C7.59,20,4,16.41,4,12z" />
        </G>
      </Svg>
    );
  }

