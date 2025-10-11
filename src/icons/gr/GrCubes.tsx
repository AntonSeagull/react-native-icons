

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCubes = (props: IconProps) => {

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
          <Path d="M6.5,10.5 L12,13.5 L17.5,10.5 L17.5,4.5 L12,1.5 L6.5,4.5 L6.5,10.5 Z M6.5,4.5 L12,7.5 L17.5,4.5 M12,7.5 L12,13.5 L12,7.5 Z M1,19.5 L6.5,22.5 L12,19.5 L12,13.5 L6.5,10.5 L1,13.5 L1,19.5 Z M1,13.5 L6.5,16.5 L12,13.5 M6.5,16.5 L6.5,22.5 L6.5,16.5 Z M12,19.5 L17.5,22.5 L23,19.5 L23,13.5 L17.5,10.5 L12,13.5 L12,19.5 Z M12,13.5 L17.5,16.5 L23,13.5 M17.5,16.5 L17.5,22.5 L17.5,16.5 Z" fill="none" />
        </G>
      </Svg>
    );
  }

