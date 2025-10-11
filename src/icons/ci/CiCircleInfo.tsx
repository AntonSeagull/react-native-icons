

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiCircleInfo = (props: IconProps) => {

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
          <Path d="M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z" />
          <Path d="M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z" />
        </G>
      </Svg>
    );
  }

