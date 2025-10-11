

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcTabletAndroid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z" fill="#37474F" />
          <Path d="M36,6H12c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1V7C37,6.4,36.6,6,36,6z" fill="#BBDEFB" />
        </G>
      </Svg>
    );
  }

