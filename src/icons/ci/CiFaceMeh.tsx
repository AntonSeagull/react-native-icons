

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiFaceMeh = (props: IconProps) => {

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
          <Path d="M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z" />
          <Path d="M8.438,15.939h7.125a.5.5,0,0,0,0-1H8.438a.5.5,0,0,0,0,1Z" />
        </G>
      </Svg>
    );
  }

