

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSpa = (props: IconProps) => {

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
          <Path d="M12,22 C13.5,22 16,21 16,16.5 C16,12 12,6 12,6 C12,6 8,12 8,16.5 C8,21 10.5,22 12,22 Z M12,22 C10.5,22 9.04678627,21.7792414 7,20.5 C3,18 2.5,10 2.5,10 C2.5,10 7,10.5 9,12 M12,22 C13.5,22 14.9532137,21.7792414 17,20.5 C21,18 21.5,10 21.5,10 C21.5,10 17,10.5 15,12" fill="none" />
        </G>
      </Svg>
    );
  }

