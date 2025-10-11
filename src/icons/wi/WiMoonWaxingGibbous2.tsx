

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiMoonWaxingGibbous2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 30 30"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12.85,14.44c0,4.77,0.71,8.52,2.14,11.26c2.04,0,3.93-0.5,5.65-1.51s3.1-2.37,4.1-4.1s1.51-3.61,1.51-5.65
	s-0.5-3.92-1.51-5.65s-2.37-3.09-4.1-4.09s-3.61-1.51-5.65-1.51C13.57,6.61,12.85,10.36,12.85,14.44z" />
        </G>
      </Svg>
    );
  }

