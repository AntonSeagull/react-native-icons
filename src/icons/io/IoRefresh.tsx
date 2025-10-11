

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoRefresh = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

